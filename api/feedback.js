// 개선 의견을 개발자 메일로 보낸다 (Vercel 서버리스 함수).
//
// 브라우저만으로는 메일을 직접 보낼 수 없으니, 이 함수가 서버 쪽에서 Resend(메일 API)로 보낸다.
// 배포 환경변수 (Vercel → Project → Settings → Environment Variables):
//   RESEND_API_KEY   필수. https://resend.com 에서 만든 API 키
//   FEEDBACK_TO      선택. 받는 사람 (기본 twight2000@gmail.com)
//   FEEDBACK_FROM    선택. 보내는 사람 (기본 onboarding@resend.dev — Resend 가입 메일로만 갈 수 있다)
// 키가 없으면 501을 돌려주고, 화면은 메일 앱을 여는 방식으로 물러난다.
//
// 메일 제목은 늘 "[PRCFEEDBACK]"로 시작하고, 본문 끝에 기계가 읽는 JSON 블록이 붙는다.
// 클로드 코드의 /feedback-inbox 가 이 둘로 메일을 찾아 불러온다.

const TO = process.env.FEEDBACK_TO || 'twight2000@gmail.com';
const FROM = process.env.FEEDBACK_FROM || 'Power Calculator <onboarding@resend.dev>';
const MAX_ITEMS = 50;
const MAX_TITLE = 200;
const MAX_BODY = 4000;
const MAX_CTX = 600;
const CAT_LABEL = { bug: '버그', calc: '계산·로직', feature: '기능 요청', ui: '화면·사용성', etc: '기타' };

// 같은 주소에서 연달아 오는 요청을 느슨하게 막는다 (함수 인스턴스 안에서만 유효한 최소한의 방어)
const hits = new Map();
function tooMany(ip) {
  const now = Date.now();
  const list = (hits.get(ip) || []).filter(t => now - t < 60000);
  list.push(now);
  hits.set(ip, list);
  if (hits.size > 500) hits.clear();
  return list.length > 8;
}

// 제어문자를 걷고 길이를 자른다
function clean(v, max) {
  return String(v == null ? '' : v).replace(/[\u0000-\u0008\u000B\u000C\u000E-\u001F\u007F]/g, '').slice(0, max);
}
function oneLine(v, max) { return clean(v, max).replace(/\s+/g, ' ').trim(); }

function buildMail(items, lang) {
  const first = items[0];
  const date = new Date().toISOString().slice(0, 10);
  const subject = '[PRCFEEDBACK] ' + items.length + '건 · ' + date + ' · '
    + (CAT_LABEL[first.cat] || first.cat) + ': ' + first.title.slice(0, 40);
  const lines = ['개선 의견 ' + items.length + '건 (' + date + ')', ''];
  items.forEach((f, i) => {
    lines.push((i + 1) + '. [' + (CAT_LABEL[f.cat] || f.cat) + '] ' + f.title);
    if (f.body) lines.push('   ' + f.body.replace(/\n/g, '\n   '));
    if (f.ctx) lines.push('   · ' + f.ctx);
    lines.push('   · ' + f.at + '  (id ' + f.id + ')');
    lines.push('');
  });
  const payload = { app: 'power_redundancy_calculator', kind: 'feedback', lang: lang, sentAt: new Date().toISOString(), items: items };
  lines.push('-----BEGIN PRC-FEEDBACK-----');
  lines.push(JSON.stringify(payload));
  lines.push('-----END PRC-FEEDBACK-----');
  return { subject: subject, text: lines.join('\n') };
}

module.exports = async function handler(req, res) {
  res.setHeader('Cache-Control', 'no-store');
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ ok: false, error: 'method' });
  }
  const key = process.env.RESEND_API_KEY;
  if (!key) return res.status(501).json({ ok: false, error: 'not_configured' });

  // 같은 사이트에서 보낸 요청만 받는다
  const origin = req.headers.origin;
  if (origin) {
    let same = false;
    try { same = new URL(origin).host === req.headers.host; } catch (e) { same = false; }
    if (!same) return res.status(403).json({ ok: false, error: 'origin' });
  }
  const fwd = String(req.headers['x-forwarded-for'] || '').split(',')[0].trim();
  if (tooMany(fwd || (req.socket && req.socket.remoteAddress) || 'unknown')) {
    return res.status(429).json({ ok: false, error: 'rate' });
  }

  let body = req.body;
  if (typeof body === 'string') { try { body = JSON.parse(body); } catch (e) { body = null; } }
  if (!body || typeof body !== 'object' || !Array.isArray(body.items)) {
    return res.status(400).json({ ok: false, error: 'bad_body' });
  }
  if (body.website) return res.status(200).json({ ok: true, n: 0 });   // 미끼 칸이 채워졌으면 조용히 버린다

  const items = body.items.slice(0, MAX_ITEMS).map(f => ({
    id: oneLine(f && f.id, 40),
    at: oneLine(f && f.at, 40),
    cat: CAT_LABEL[f && f.cat] ? f.cat : 'etc',
    title: oneLine(f && f.title, MAX_TITLE),
    body: clean(f && f.body, MAX_BODY),
    ctx: oneLine(f && f.ctx, MAX_CTX),
    status: 'new',
  })).filter(f => f.id && (f.title || f.body));
  if (!items.length) return res.status(400).json({ ok: false, error: 'empty' });

  const mail = buildMail(items, body.lang === 'en' ? 'en' : 'ko');
  try {
    const r = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: { Authorization: 'Bearer ' + key, 'Content-Type': 'application/json' },
      body: JSON.stringify({ from: FROM, to: [TO], subject: mail.subject, text: mail.text }),
    });
    if (!r.ok) {
      const detail = await r.text().catch(() => '');
      console.error('resend failed', r.status, detail.slice(0, 300));
      return res.status(502).json({ ok: false, error: 'provider', status: r.status });
    }
  } catch (e) {
    console.error('resend error', e && e.message);
    return res.status(502).json({ ok: false, error: 'network' });
  }
  return res.status(200).json({ ok: true, n: items.length });
};

module.exports._test = { buildMail, clean };
