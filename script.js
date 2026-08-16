  const nInput = document.getElementById('nInput');
  const cInput = document.getElementById('cInput');
  const loadInput = document.getElementById('load');
  const ratingInput = document.getElementById('rating');
  const pfInput = document.getElementById('pf');
  const upsEfficiencyInput = document.getElementById('upsEfficiency');
  const safetyInput = document.getElementById('safety');
  const totalModulesEl = document.getElementById('totalModules');
  const redundancyOpts = document.querySelectorAll('.redundancy-opt');
  const presetBtns = document.querySelectorAll('.safety-preset .preset-btn');
  const warnBox = document.getElementById('warnBox');
  const customToggle = document.getElementById('customToggle');
  const customPanel = document.getElementById('customPanel');

  // Shared effective-capacity formula:
  // 최종 가용 유효전력(kW) = 변압기용량(kVA) × 역률(PF) × 안전율(부하율) × UPS효율
  function getGlobalDeratingFactors() {
    const pf = parseFloat(pfInput.value) || 1;
    const upsEff = parseFloat(upsEfficiencyInput.value) || 1;
    const safety = parseFloat(safetyInput.value) || 1;
    return { pf, upsEff, safety, combined: pf * upsEff * safety };
  }
  function computeEffectiveCapacity(ratingKVA, pf, safety, upsEff) {
    return ratingKVA * pf * safety * upsEff;
  }
  function updateEffectiveFormulaNote() {
    const rating = parseFloat(ratingInput.value);
    const { pf, upsEff, safety, combined } = getGlobalDeratingFactors();
    const note = document.getElementById('effectiveFormulaNote');
    if (!note) return;
    if (!rating) { note.textContent = ''; return; }
    const eff = computeEffectiveCapacity(rating, pf, safety, upsEff);
    note.innerHTML = `<b>최종 가용 유효전력(kW) = 변압기용량(kVA) × 역률 × 안전율 × UPS효율</b><br>` +
      `= ${fmtN(rating)} kVA × ${pf} × ${safety} × ${upsEff} = <b style="color:var(--primary)">${fmtN(eff)} kW</b> (종합 계수 ${fmtN(combined * 100)}%)`;
  }

  // Standard commercial transformer capacities (kVA) — general reference list
  const STANDARD_KW_SIZES = [300, 500, 750, 1000, 1250, 1500, 2000, 2500, 3000, 3750, 4000, 5000, 6000, 6300, 7500, 8000, 10000, 12500, 15000, 20000];
  // Most commonly specified sizes in data center practice — shown first / marked
  const COMMON_KVA_SIZES = new Set([1500, 2000, 2500, 3000, 4000, 5000, 6300]);
  // Upper limit for transformer rated capacity — sizes above this are grayed out / flagged as non-standard
  const RATING_MAX_KVA = 4000;

  const ratingPresetSelect = document.getElementById('ratingPreset');
  const ratingCapWarn = document.getElementById('ratingCapWarn');
  STANDARD_KW_SIZES.forEach(size => {
    const opt = document.createElement('option');
    opt.value = size;
    const overCap = size > RATING_MAX_KVA;
    opt.textContent = fmtN(size) + ' kVA' + (COMMON_KVA_SIZES.has(size) ? ' (많이 사용)' : '') + (overCap ? ' (상한 초과)' : '');
    if (overCap) {
      opt.disabled = true;
      opt.style.color = '#B5B5B5';
    }
    ratingPresetSelect.appendChild(opt);
  });
  ratingPresetSelect.addEventListener('change', () => {
    if (!ratingPresetSelect.value) return;
    ratingInput.value = ratingPresetSelect.value;
    ratingInput.dispatchEvent(new Event('input', { bubbles: true }));
  });
  function updateRatingCapStyle() {
    const overCap = Number(ratingInput.value) > RATING_MAX_KVA;
    ratingInput.style.color = overCap ? '#B0B0B0' : '';
    ratingInput.style.fontStyle = overCap ? 'italic' : 'normal';
    if (ratingCapWarn) ratingCapWarn.style.display = overCap ? 'block' : 'none';
  }
  ratingInput.addEventListener('input', () => {
    // reflect a manually typed value in the dropdown if it matches a standard size, else reset to placeholder
    const match = STANDARD_KW_SIZES.includes(Number(ratingInput.value));
    ratingPresetSelect.value = match ? ratingInput.value : '';
    updateRatingCapStyle();
  });
  updateRatingCapStyle();

  // Recommend the standard transformer size whose resulting utilization lands closest to
  // (at or just above) the target combined ratio, given the actual per-transformer design load.
  function updateRatingRecommend(perTxLoadKW, targetRatio) {
    const hint = document.getElementById('ratingRecommend');
    if (!perTxLoadKW || perTxLoadKW <= 0 || !targetRatio) { hint.textContent = '-'; return; }
    const idealKVA = perTxLoadKW / targetRatio; // capacity that makes effective-utilization exactly 100%
    let rec = STANDARD_KW_SIZES.find(s => s >= idealKVA);
    if (!rec) rec = STANDARD_KW_SIZES[STANDARD_KW_SIZES.length - 1];
    const utilPct = perTxLoadKW / (rec * targetRatio) * 100;
    hint.textContent = `적정 정격용량 추천: ${fmtN(rec)} kVA (변압기 1대당 부하 ${fmtN(perTxLoadKW)}kW → 종합계수(역률×안전율×UPS효율) 대비 부하율 ${fmtN(utilPct)}%, 목표 100%에 근접)`;
  }

  let currentTopo = 'distributed';

  const topoMeta = {
    distributed: {
      explain: '<b>N out of N+C (분산이중화)</b> — 총 N+C개 모듈이 상시 병렬로 부하를 나눠 분담(평상시 부하율 낮음). C개 모듈이 동시에 상실되어도 별도 스위칭 없이 나머지 N개가 즉시 전체 부하를 흡수. (예: 2oo3, 3oo4, 4oo5)',
      labelN: 'N (상실 후에도 전체부하를 커버해야 하는 모듈 수)',
      labelC: 'C (동시 상실을 견뎌야 하는 모듈 수)',
      step1Label: '① 모듈당 설계부하',
      step1Formula: '총부하 ÷ N',
      step2Label: '② 모듈당 변압기',
      resultLabel: '③ 총 변압기 대수 ( = ② × (N+C) )',
      flowDesc: '(전 모듈 상시가동·부하분산)',
    },
    standby: {
      explain: '<b>N + C (대기/캐쳐 이중화)</b> — N개 모듈이 평상시 부하를 100% 분담해 가동하고, C개 모듈은 평상시 idle 상태로 대기하다가 duty 모듈 고장 시 투입(스위칭 발생).',
      labelN: 'N (평상시 가동하는 duty 모듈 수)',
      labelC: 'C (평상시 대기하는 캐쳐/예비 모듈 수)',
      step1Label: '① duty 모듈당 부하',
      step1Formula: '총부하 ÷ N',
      step2Label: '② 모듈당 변압기',
      resultLabel: '③ 총 변압기 대수 ( = ② × (N+C) )',
      flowDesc: '(duty N개 100% 가동 + 캐쳐 C개 대기)',
    },
    full: {
      explain: '<b>2N / 2N+1 (완전이중화)</b> — 각 트레인(전원 계통 전체)이 독립적으로 총부하 100%를 커버할 수 있도록 설계. N=기준 트레인(통상 1), C=추가 독립 트레인 수. (예: 2N=N1,C1 / 2N+1=N1,C2)',
      labelN: 'N (기준 트레인 수, 통상 1)',
      labelC: 'C (추가 독립 트레인 수)',
      step1Label: '① 트레인당 설계부하',
      step1Formula: '총부하 (트레인 1개가 100% 단독 커버)',
      step2Label: '② 트레인당 변압기',
      resultLabel: '③ 총 변압기 대수 ( = ② × (N+C) )',
      flowDesc: '(트레인마다 총부하 100% 독립 커버)',
    },
  };

  function fmt(n, digits = 1) {
    if (!isFinite(n)) return '-';
    return n.toLocaleString('ko-KR', { maximumFractionDigits: digits, minimumFractionDigits: 0 });
  }

  function applyTopoMeta() {
    const meta = topoMeta[currentTopo];
    document.getElementById('topoExplain').innerHTML = meta.explain;
    document.getElementById('labelN').textContent = meta.labelN;
    document.getElementById('labelC').textContent = meta.labelC;
    document.getElementById('step1Label').textContent = meta.step1Label;
    document.getElementById('step1Formula').textContent = meta.step1Formula;
    document.getElementById('step2Label').textContent = meta.step2Label;
    document.getElementById('resultLabel').textContent = meta.resultLabel;
    document.getElementById('flowDesc').textContent = meta.flowDesc;
  }

  // Central setter for the ①번 데이터홀 총부하 so every dependent section (⑤ 조합형 배치도,
  // ③/④ 계산 결과) stays in sync even when the value is pushed in programmatically
  // (e.g. from ⓪번 홀당 용량 auto-calc), since setting .value directly does not fire 'input'.
  function applyMainLoad(mw) {
    loadInput.value = Number(mw.toFixed(2));
    if (typeof syncCombLoadFromMain === 'function') syncCombLoadFromMain();
    if (typeof renderCombDiagram === 'function') renderCombDiagram();
    calculate();
  }

  function calculate() {
    const N = parseInt(nInput.value);
    const C = parseInt(cInput.value);
    const load = parseFloat(loadInput.value); // MW
    const rating = parseFloat(ratingInput.value); // kVA
    const { pf, upsEff, safety, combined } = getGlobalDeratingFactors();

    totalModulesEl.value = (isFinite(N) && isFinite(C)) ? (N + C) : '-';

    warnBox.style.display = 'none';

    if (!N || N <= 0 || C < 0 || !load || !rating || !safety || !pf || !upsEff || load <= 0 || rating <= 0 || safety <= 0) {
      document.getElementById('step1').textContent = '-';
      document.getElementById('stepCap').textContent = '-';
      document.getElementById('step2').textContent = '-';
      document.getElementById('resultTotal').textContent = '-';
      document.getElementById('resultSub').textContent = '입력값을 확인해주세요';
      return;
    }

    const loadKW = load * 1000;
    const effectiveCap = computeEffectiveCapacity(rating, pf, safety, upsEff);
    updateEffectiveFormulaNote();
    const M = N + C; // total modules/trains

    let perModuleLoad; // kW, design basis
    if (currentTopo === 'full') {
      perModuleLoad = loadKW; // each train covers 100%
    } else {
      perModuleLoad = loadKW / N; // distributed or standby: N modules share/cover full load
    }

    const perModuleUnits = Math.ceil(perModuleLoad / effectiveCap);
    const totalUnits = perModuleUnits * M;

    document.getElementById('step1').textContent = fmt(perModuleLoad / 1000, 2) + ' MW';
    document.getElementById('stepCap').textContent = fmt(effectiveCap) + ' kW';
    document.getElementById('step2').textContent = perModuleUnits + '대';
    document.getElementById('resultTotal').textContent = totalUnits + '대';

    let sub = '';
    if (currentTopo === 'distributed') {
      const normalPct = (loadKW / M) / (perModuleUnits * effectiveCap) * 100;
      const emergencyPct = (loadKW / N) / (perModuleUnits * effectiveCap) * 100;
      sub = `모듈당 ${perModuleUnits}대 × 전체 ${M}개 모듈(상시가동) · 평상시 부하율 ${fmt(normalPct)}% / ${C}개 모듈 동시상실 시 ${fmt(emergencyPct)}%`;
      if (emergencyPct > 100) {
        warnBox.textContent = `⚠ 상실 시 부하율이 ${fmt(emergencyPct)}%로 100%를 초과합니다 — 대수를 늘리거나 안전율을 재검토하세요.`;
        warnBox.style.display = 'block';
      }
    } else if (currentTopo === 'standby') {
      const dutyPct = (loadKW / N) / (perModuleUnits * effectiveCap) * 100;
      sub = `duty 모듈당 ${perModuleUnits}대 × duty ${N}개(가동) + 캐쳐 ${C}개(대기) = 총 ${M}개 모듈 · duty 부하율 ${fmt(dutyPct)}% / 캐쳐 평상시 0%(대기)`;
      if (dutyPct > 100) {
        warnBox.textContent = `⚠ duty 모듈 부하율이 ${fmt(dutyPct)}%로 100%를 초과합니다 — 대수를 늘리세요.`;
        warnBox.style.display = 'block';
      }
    } else if (currentTopo === 'full') {
      const pct = loadKW / (perModuleUnits * effectiveCap) * 100;
      sub = `트레인당 ${perModuleUnits}대 × 트레인 ${M}개(모두 100% 커버 가능) · 트레인당 부하율 ${fmt(pct)}%`;
    }
    document.getElementById('resultSub').textContent = sub;

    const perTxLoadKW = perModuleLoad / perModuleUnits;
    updateRatingRecommend(perTxLoadKW, combined);
    renderDiagram(N, C, perModuleUnits, load, rating, effectiveCap);
  }

  const NS = 'http://www.w3.org/2000/svg';
  function svgEl(tag, attrs) {
    const el = document.createElementNS(NS, tag);
    for (const k in attrs) el.setAttribute(k, attrs[k]);
    return el;
  }

  // Smooth S-curve connector between two points (vertical tangents at both ends, so it reads
  // cleanly regardless of the horizontal offset) — shared visual language across both diagrams.
  function smoothCurvePath(x1, y1, x2, y2) {
    const midY = (y1 + y2) / 2;
    return `M${x1},${y1} C${x1},${midY} ${x2},${midY} ${x2},${y2}`;
  }
  // Point at parameter t (0..1) along the same curve — used to place labels ON the line.
  function smoothCurvePoint(t, x1, y1, x2, y2) {
    const midY = (y1 + y2) / 2;
    const mt = 1 - t;
    const x = mt * mt * mt * x1 + 3 * mt * mt * t * x1 + 3 * mt * t * t * x2 + t * t * t * x2;
    const y = mt * mt * mt * y1 + 3 * mt * mt * t * midY + 3 * mt * t * t * midY + t * t * t * y2;
    return { x, y };
  }

  let diagramMode = 'normal';
  // Indices of ④ modules manually marked "상실" by double-clicking their block.
  // Non-empty => emergency mode driven by this explicit selection instead of the
  // automatic "last C modules" fallback.
  let manualFail4 = new Set();

  function updateDiagramModeButtons() {
    document.getElementById('modeNormalBtn').classList.toggle('active', diagramMode === 'normal');
    document.getElementById('modeEmergencyBtn').classList.toggle('active', diagramMode === 'emergency');
  }

  // Shared color palette for rooms/modules (distinct hues so cross-connections read intuitively)
  const ROOM_COLORS = ['#5B4FA6', '#7A6BCB', '#9683DC', '#B29CE8', '#453A85', '#6759B0', '#8776D4', '#AC9EE3'];
  function roomColor(i) { return ROOM_COLORS[i % ROOM_COLORS.length]; }
  function hexToRgba(hex, alpha) {
    const h = hex.replace('#', '');
    const r = parseInt(h.substring(0, 2), 16), g = parseInt(h.substring(2, 4), 16), b = parseInt(h.substring(4, 6), 16);
    return `rgba(${r},${g},${b},${alpha})`;
  }

  // Generic wheel-zoom + drag-pan for a diagram SVG. Returns a controller with .group (the <g> to draw into) and .reset().
  function makeZoomable(svgId) {
    const svg = document.getElementById(svgId);
    const state = { scale: 1, x: 0, y: 0 };
    let group = svg.querySelector('g.zoom-group');
    if (!group) {
      group = svgEl('g', { class: 'zoom-group' });
      svg.appendChild(group);
    }
    function apply() {
      group.setAttribute('transform', `translate(${state.x},${state.y}) scale(${state.scale})`);
    }
    svg.addEventListener('wheel', (e) => {
      e.preventDefault();
      const rect = svg.getBoundingClientRect();
      const mx = e.clientX - rect.left, my = e.clientY - rect.top;
      const factor = e.deltaY < 0 ? 1.12 : 1 / 1.12;
      const newScale = Math.min(4, Math.max(0.4, state.scale * factor));
      // zoom centered on cursor
      state.x = mx - (mx - state.x) * (newScale / state.scale);
      state.y = my - (my - state.y) * (newScale / state.scale);
      state.scale = newScale;
      apply();
    }, { passive: false });
    let dragging = false, lastX = 0, lastY = 0;
    svg.addEventListener('mousedown', (e) => { dragging = true; lastX = e.clientX; lastY = e.clientY; });
    window.addEventListener('mousemove', (e) => {
      if (!dragging) return;
      state.x += e.clientX - lastX; state.y += e.clientY - lastY;
      lastX = e.clientX; lastY = e.clientY;
      apply();
    });
    window.addEventListener('mouseup', () => { dragging = false; });
    // touch support (basic pinch omitted; single-finger pan)
    let touchLastX = 0, touchLastY = 0, touching = false;
    svg.addEventListener('touchstart', (e) => { if (e.touches.length === 1) { touching = true; touchLastX = e.touches[0].clientX; touchLastY = e.touches[0].clientY; } }, { passive: true });
    svg.addEventListener('touchmove', (e) => {
      if (!touching || e.touches.length !== 1) return;
      state.x += e.touches[0].clientX - touchLastX; state.y += e.touches[0].clientY - touchLastY;
      touchLastX = e.touches[0].clientX; touchLastY = e.touches[0].clientY;
      apply();
    }, { passive: true });
    svg.addEventListener('touchend', () => { touching = false; });

    return {
      group,
      clear() { group.innerHTML = ''; },
      zoomIn() { state.scale = Math.min(4, state.scale * 1.2); apply(); },
      zoomOut() { state.scale = Math.max(0.4, state.scale / 1.2); apply(); },
      reset() { state.scale = 1; state.x = 0; state.y = 0; apply(); },
    };
  }

  const diagramZoom = makeZoomable('diagramSvg');
  const combZoom = makeZoomable('combSvg');
  document.getElementById('diagramZoomIn').addEventListener('click', () => diagramZoom.zoomIn());
  document.getElementById('diagramZoomOut').addEventListener('click', () => diagramZoom.zoomOut());
  document.getElementById('diagramZoomReset').addEventListener('click', () => diagramZoom.reset());
  document.getElementById('combZoomIn').addEventListener('click', () => combZoom.zoomIn());
  document.getElementById('combZoomOut').addEventListener('click', () => combZoom.zoomOut());
  document.getElementById('combZoomReset').addEventListener('click', () => combZoom.reset());

  // Double-click on empty diagram background (outside any module/room block) => back to 평상시.
  // Per-block dblclick handlers (added inside renderDiagram/renderCombDiagram, since blocks are
  // redrawn every render) call stopPropagation so only a genuine background click reaches here.
  document.getElementById('diagramSvg').addEventListener('dblclick', () => {
    manualFail4.clear();
    diagramMode = 'normal';
    updateDiagramModeButtons();
    calculate();
  });
  document.getElementById('combSvg').addEventListener('dblclick', () => {
    combMode = 'normal';
    updateCombModeButtons();
    renderCombDiagram();
  });

  function renderDiagram(N, C, perModuleUnits, load, rating, effectiveCap) {
    const svg = document.getElementById('diagramSvg');
    diagramZoom.clear();
    const svgTarget = diagramZoom.group;
    const M = N + C;
    if (!M || M <= 0) return;

    const navy = '#3A2E75';
    const accent = '#7A6BCB';
    const grayLine = '#D9D2EC';
    const activeFill = '#EFEAFB';
    const standbyFill = '#F5F2FB';
    const standbyBorder = '#D9D2EC';
    const offlineFill = '#FBEDE7';
    const offlineBorder = '#DB8478';
    const txFill = '#7A6BCB';
    const txIdleFill = '#D9D2EC';
    const txOfflineFill = '#E3A79E';

    const loadKW = load * 1000;

    // Determine per-module state & load for each of the M modules, given topology + mode.
    // manualFail4 (populated by double-clicking a block) overrides the automatic "last C
    // modules" fallback so any specific room can be marked 상실, individually or in combination.
    // state: 'active' | 'idle' | 'offline'
    const modules = [];
    let overloadWarning = '';
    if (currentTopo === 'standby') {
      for (let i = 0; i < N; i++) modules.push({ role: 'duty', state: 'active', loadKW: loadKW / N });
      for (let i = 0; i < C; i++) modules.push({ role: 'catcher', state: 'idle', loadKW: 0 });
      if (diagramMode === 'emergency') {
        let failedDutyIdx;
        if (manualFail4.size > 0) {
          failedDutyIdx = [...manualFail4].filter(i => i < N).sort((a, b) => a - b);
        } else {
          // fail C duty modules (the last C duty ones)
          failedDutyIdx = [];
          const failCount = Math.min(C, N);
          for (let i = 0; i < failCount; i++) failedDutyIdx.push(N - 1 - i);
        }
        failedDutyIdx.forEach(idx => { modules[idx].state = 'offline'; modules[idx].loadKW = 0; });
        // activate catchers to take over, one per failed duty module (limited by how many exist)
        const activateCount = Math.min(C, failedDutyIdx.length);
        for (let i = 0; i < activateCount; i++) {
          modules[N + i].state = 'active';
          modules[N + i].loadKW = loadKW / N;
        }
        if (failedDutyIdx.length > C) {
          overloadWarning = `⚠ 상실 ${failedDutyIdx.length}개 모듈에 비해 캐쳐가 ${C}개뿐이라 ${failedDutyIdx.length - C}개 모듈의 부하를 흡수하지 못합니다.`;
        }
      }
    } else {
      // distributed & full: all M modules active in normal, sharing load/M
      for (let i = 0; i < M; i++) modules.push({ role: 'module', state: 'active', loadKW: loadKW / M });
      if (diagramMode === 'emergency') {
        let failedIdx;
        if (manualFail4.size > 0) {
          failedIdx = [...manualFail4].sort((a, b) => a - b);
        } else {
          // C modules lost (the last C ones)
          failedIdx = [];
          for (let i = 0; i < C; i++) failedIdx.push(M - 1 - i);
        }
        failedIdx.forEach(idx => { if (modules[idx]) { modules[idx].state = 'offline'; modules[idx].loadKW = 0; } });
        const activeCount = M - failedIdx.filter(idx => idx < M).length;
        if (activeCount > 0) {
          const activeLoad = currentTopo === 'full' ? loadKW : loadKW / activeCount;
          modules.forEach(mod => { if (mod.state === 'active') mod.loadKW = activeLoad; });
        }
      }
    }

    const moduleCount = M;
    const boxW = 118;
    const gap = 22;
    const totalW = moduleCount * boxW + (moduleCount - 1) * gap;
    const svgW = Math.max(760, totalW + 80);
    const startX = (svgW - totalW) / 2;
    const hallY = 42;
    const hallW = 220;
    const hallX = svgW / 2 - hallW / 2;
    const hallH = 50;
    const moduleY = 140;
    const txRowsNeeded = Math.ceil(perModuleUnits / 3);
    const moduleH = 144 + txRowsNeeded * 34; // +14 for the per-module 설계부하/유효용량 reference line
    let svgH = 220 + moduleH;
    svg.setAttribute('width', svgW);
    svg.setAttribute('height', svgH);
    svg.setAttribute('viewBox', `0 0 ${svgW} ${svgH}`);

    // Design-basis caption — same ①/유효용량/② figures shown in the ③ 계산결과 cards above,
    // repeated here so the diagram is self-explanatory without scrolling back up. This is the
    // sizing basis (worst-case, ÷N); the per-module boxes below show actual 평상시/비상시 load,
    // which differs on purpose (see ÷M vs ÷N).
    const designLoadKW = currentTopo === 'full' ? loadKW : loadKW / N;
    const designCaption = svgEl('text', { x: svgW / 2, y: 16, 'text-anchor': 'middle', 'font-size': 10.5, 'font-weight': 700, fill: '#8A8072', 'font-family': 'sans-serif' });
    designCaption.textContent = `설계기준 — ① 모듈당 설계부하 ${fmtN(designLoadKW / 1000)}MW · 유효용량(대당) ${fmtN(effectiveCap)}kW · ② 필요대수 ${perModuleUnits}대/모듈`;
    svgTarget.appendChild(designCaption);

    // Data hall box
    const hallRect = svgEl('rect', { x: hallX, y: hallY, width: hallW, height: hallH, rx: 10, fill: navy });
    svgTarget.appendChild(hallRect);
    const hallText = svgEl('text', { x: svgW / 2, y: hallY + 22, 'text-anchor': 'middle', fill: '#fff', 'font-size': 13, 'font-weight': 800, 'font-family': 'sans-serif' });
    hallText.textContent = '데이터홀';
    svgTarget.appendChild(hallText);
    const hallText2 = svgEl('text', { x: svgW / 2, y: hallY + 39, 'text-anchor': 'middle', fill: 'rgba(255,255,255,0.75)', 'font-size': 12, 'font-weight': 700, 'font-family': 'sans-serif' });
    hallText2.textContent = fmtN(load) + ' MW' + (diagramMode === 'emergency' ? ' (전체 부하 유지)' : '');
    svgTarget.appendChild(hallText2);

    modules.forEach((mod, i) => {
      const x = startX + i * (boxW + gap);
      const isOffline = mod.state === 'offline';
      const isIdle = mod.state === 'idle';
      const isActive = mod.state === 'active';
      const mColor = roomColor(i);

      const lineColor = isOffline ? offlineBorder : (isIdle ? standbyBorder : mColor);
      const lineX1 = svgW / 2, lineY1 = hallY + hallH, lineX2 = x + boxW / 2, lineY2 = moduleY;
      const line = svgEl('path', {
        d: smoothCurvePath(lineX1, lineY1, lineX2, lineY2),
        fill: 'none',
        stroke: lineColor, 'stroke-width': 2.25,
        'stroke-dasharray': (isIdle || isOffline) ? '5,4' : 'none',
      });
      svgTarget.appendChild(line);

      // All of this module's own visuals live in one group so a double-click anywhere on the
      // block (box, strip, labels, transformer icons) toggles its 상실 state as a single unit.
      const moduleGroup = svgEl('g', { cursor: 'pointer' });
      moduleGroup.addEventListener('dblclick', (e) => {
        e.stopPropagation();
        if (manualFail4.has(i)) manualFail4.delete(i); else manualFail4.add(i);
        diagramMode = manualFail4.size > 0 ? 'emergency' : 'normal';
        updateDiagramModeButtons();
        calculate();
      });

      const boxFill = isOffline ? offlineFill : (isIdle ? standbyFill : hexToRgba(mColor, 0.12));
      const boxBorder = isOffline ? offlineBorder : (isIdle ? standbyBorder : mColor);
      const rect = svgEl('rect', {
        x, y: moduleY, width: boxW, height: moduleH, rx: 10,
        fill: boxFill, stroke: boxBorder,
        'stroke-width': isActive ? 2.5 : 1.5,
        'stroke-dasharray': isActive ? 'none' : '5,4',
      });
      moduleGroup.appendChild(rect);

      // colored header strip so the room color reads at a glance
      if (!isOffline) {
        const headerStrip = svgEl('rect', { x, y: moduleY, width: boxW, height: 8, rx: 4, fill: mColor, opacity: isIdle ? 0.45 : 1 });
        moduleGroup.appendChild(headerStrip);
      }

      // module label
      let label;
      if (currentTopo === 'full') {
        label = `트레인 ${i + 1}`;
      } else if (currentTopo === 'standby') {
        label = mod.role === 'catcher' ? `캐쳐 ${i - N + 1}` : `Duty ${i + 1}`;
      } else {
        label = `전기실 ${i + 1}`;
      }
      const labelColor = isOffline ? '#C8604F' : (isIdle ? '#9A90BB' : mColor);
      const labelText = svgEl('text', { x: x + boxW / 2, y: moduleY + 25, 'text-anchor': 'middle', 'font-size': 12, 'font-weight': 800, fill: labelColor, 'font-family': 'sans-serif' });
      labelText.textContent = label;
      moduleGroup.appendChild(labelText);

      let stateLabel;
      if (isOffline) stateLabel = '⨯ 상실(OFFLINE)';
      else if (isIdle) stateLabel = '평상시 대기(idle)';
      else if (currentTopo === 'standby' && diagramMode === 'emergency' && mod.role === 'catcher') stateLabel = '투입(가동중)';
      else stateLabel = '가동중';
      const stateColor = isOffline ? '#C8604F' : (isIdle ? '#9A90BB' : '#8A8072');
      const stateText = svgEl('text', { x: x + boxW / 2, y: moduleY + 41, 'text-anchor': 'middle', 'font-size': 9.5, fill: stateColor, 'font-family': 'sans-serif' });
      stateText.textContent = stateLabel;
      moduleGroup.appendChild(stateText);

      // per-transformer load
      const txCount = perModuleUnits;
      const perTxKW = isActive ? mod.loadKW / txCount : 0;
      const perTxPct = isActive ? (perTxKW / effectiveCap * 100) : 0;
      const startTxY = moduleY + 57;

      for (let t = 0; t < txCount; t++) {
        const row = Math.floor(t / 3);
        const col = t % 3;
        const rowCount = Math.min(3, txCount - row * 3);
        const rowWActual = rowCount * 26 + (rowCount - 1) * 8;
        const rowStartX = x + boxW / 2 - rowWActual / 2;
        const tx = rowStartX + col * (26 + 8);
        const ty = startTxY + row * (22 + 22);

        const txColor = isOffline ? txOfflineFill : (isIdle ? txIdleFill : mColor);
        const txRect = svgEl('rect', { x: tx, y: ty, width: 26, height: 22, rx: 4, fill: txColor });
        moduleGroup.appendChild(txRect);
        const txLabel = svgEl('text', { x: tx + 13, y: ty + 15, 'text-anchor': 'middle', 'font-size': 9, 'font-weight': 700, fill: '#fff', 'font-family': 'sans-serif' });
        txLabel.textContent = isOffline ? '✕' : 'T';
        moduleGroup.appendChild(txLabel);

        const pctLabel = svgEl('text', { x: tx + 13, y: ty + 33, 'text-anchor': 'middle', 'font-size': 8.5, 'font-weight': 700, fill: isOffline ? '#C8604F' : (isIdle ? '#9A90BB' : mColor), 'font-family': 'sans-serif' });
        pctLabel.textContent = isOffline ? '-' : (isIdle ? '0%' : fmtN(perTxPct) + '%');
        moduleGroup.appendChild(pctLabel);
      }

      // module summary caption
      const capY = startTxY + txRowsNeeded * (22 + 22) + 6;
      const countText = svgEl('text', { x: x + boxW / 2, y: capY, 'text-anchor': 'middle', 'font-size': 10, 'font-weight': 700, fill: labelColor, 'font-family': 'sans-serif' });
      countText.textContent = isOffline ? `변압기 ${txCount}대 (정지)` : `${txCount}대 · ${fmtN(mod.loadKW)}kW`;
      moduleGroup.appendChild(countText);

      // 설계기준 참고선 — 실제 평상시/비상시 부하(위 줄)와 바로 비교할 수 있도록 모듈마다 반복 표기
      const designText = svgEl('text', { x: x + boxW / 2, y: capY + 13, 'text-anchor': 'middle', 'font-size': 8, 'font-weight': 600, fill: '#9A90BB', 'font-family': 'sans-serif' });
      designText.textContent = `설계 ${fmtN(designLoadKW / 1000)}MW · 유효 ${fmtN(effectiveCap)}kW`;
      moduleGroup.appendChild(designText);

      svgTarget.appendChild(moduleGroup);
    });

    // total caption at bottom
    const activeModuleCount = modules.filter(m => m.state === 'active').length;
    const totalCaption = svgEl('text', { x: svgW / 2, y: svgH - 12, 'text-anchor': 'middle', 'font-size': 11, 'font-weight': 700, fill: navy, 'font-family': 'sans-serif' });
    totalCaption.textContent = diagramMode === 'normal'
      ? `총 ${moduleCount}개 모듈 × 모듈당 ${perModuleUnits}대 = 총 변압기 ${moduleCount * perModuleUnits}대  (정격 ${fmtN(rating)}kW, 유효 ${fmtN(effectiveCap)}kW)`
      : `모듈 ${moduleCount}개 중 ${activeModuleCount}개 가동으로 전체부하 대응 · 변압기 총 ${moduleCount * perModuleUnits}대 중 ${activeModuleCount * perModuleUnits}대 가동`;
    svgTarget.appendChild(totalCaption);

    if (overloadWarning) {
      const warnCaption = svgEl('text', { x: svgW / 2, y: svgH - 12 - 16, 'text-anchor': 'middle', 'font-size': 10.5, 'font-weight': 700, fill: '#C8604F', 'font-family': 'sans-serif' });
      warnCaption.textContent = overloadWarning;
      svgTarget.appendChild(warnCaption);
    }

    // legend
    const legend = document.getElementById('diagramLegend');
    legend.innerHTML = '';
    const legendItems = [];
    for (let i = 0; i < moduleCount; i++) {
      const mod = modules[i];
      const nm = currentTopo === 'full' ? `트레인${i + 1}` : (currentTopo === 'standby' ? (mod.role === 'catcher' ? `캐쳐${i - N + 1}` : `Duty${i + 1}`) : `전기실${i + 1}`);
      legendItems.push({ color: mod.state === 'offline' ? '#FBEDE7' : roomColor(i), label: nm });
    }
    legendItems.forEach(it => {
      const div = document.createElement('div');
      div.className = 'item';
      div.innerHTML = `<span class="swatch" style="background:${it.color}"></span>${it.label}`;
      legend.appendChild(div);
    });
    const noteDiv = document.createElement('div');
    noteDiv.className = 'item';
    noteDiv.style.width = '100%';
    noteDiv.style.marginTop = '4px';
    noteDiv.innerHTML = `<span class="swatch" style="background:#7A6BCB"></span>변압기(T) · 하단 %는 변압기별 운전부하율 (색상은 소속 모듈과 동일)`;
    legend.appendChild(noteDiv);

    const topoLabel = currentTopo === 'distributed' ? '분산이중화' : currentTopo === 'standby' ? '대기이중화' : '완전이중화';
    document.getElementById('diagramDesc').textContent = `(${topoLabel} · ${diagramMode === 'normal' ? '평상시' : '비상시'} 구성)`;
    diagramZoom.reset();
  }

  function fmtN(n) {
    return Number(n).toLocaleString('ko-KR', { maximumFractionDigits: 1 });
  }

  function selectRedundancy(opt) {
    redundancyOpts.forEach(o => o.classList.remove('active'));
    opt.classList.add('active');
    currentTopo = opt.dataset.topo;
    nInput.value = opt.dataset.n;
    cInput.value = opt.dataset.c;
    manualFail4.clear(); // module indices/roles are topology-specific — stale selections don't carry over
    diagramMode = 'normal';
    updateDiagramModeButtons();
    applyTopoMeta();
    calculate();
  }

  redundancyOpts.forEach(opt => {
    opt.addEventListener('click', () => selectRedundancy(opt));
  });

  customToggle.addEventListener('click', () => {
    const open = customPanel.classList.toggle('open');
    customToggle.textContent = (open ? '▾' : '▸') + ' 직접 N / C 값 입력 (커스텀)';
  });

  presetBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      safetyInput.value = parseFloat(btn.dataset.val).toFixed(4).replace(/0+$/,'').replace(/\.$/,'');
      presetBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      calculate();
    });
  });

  [nInput, cInput, loadInput, ratingInput, safetyInput, pfInput, upsEfficiencyInput].forEach(el => {
    el.addEventListener('input', () => {
      redundancyOpts.forEach(o => {
        const matches = o.dataset.topo === currentTopo && o.dataset.n == nInput.value && o.dataset.c == cInput.value;
        o.classList.toggle('active', matches);
      });
      if (el === nInput || el === cInput) {
        // module count/roles changed — stale manual 상실 selections no longer map to valid modules
        manualFail4.clear();
        diagramMode = 'normal';
        updateDiagramModeButtons();
      }
      calculate();
    });
  });

  document.getElementById('modeNormalBtn').addEventListener('click', () => {
    diagramMode = 'normal';
    manualFail4.clear();
    updateDiagramModeButtons();
    calculate();
  });
  document.getElementById('modeEmergencyBtn').addEventListener('click', () => {
    diagramMode = 'emergency';
    updateDiagramModeButtons();
    calculate();
  });

  applyTopoMeta();
  calculate();

  // ===== ⑤ 조합형 분배 배치도 (Combinatorial N choose 2) =====
  const combMInput = document.getElementById('combM');
  const combLoadInput = document.getElementById('combLoad');
  const combSyncLoadCheckbox = document.getElementById('combSyncLoad');
  const combFailRoomSelect = document.getElementById('combFailRoom');
  const combModeNormalBtn = document.getElementById('combModeNormalBtn');
  const combModeEmergencyBtn = document.getElementById('combModeEmergencyBtn');
  const combApplyBtn = document.getElementById('combApplyBtn');
  const combApplyHint = document.getElementById('combApplyHint');
  let combMode = 'normal';

  function syncCombLoadFromMain() {
    if (combSyncLoadCheckbox.checked) {
      combLoadInput.value = loadInput.value;
    }
  }

  combSyncLoadCheckbox.addEventListener('change', () => {
    combLoadInput.disabled = combSyncLoadCheckbox.checked;
    combLoadInput.style.background = combSyncLoadCheckbox.checked ? 'var(--primary-bg)' : 'var(--surface)';
    if (combSyncLoadCheckbox.checked) {
      syncCombLoadFromMain();
      renderCombDiagram();
    }
  });

  // keep comb load in sync whenever the main load field changes
  loadInput.addEventListener('input', () => {
    syncCombLoadFromMain();
    renderCombDiagram();
  });

  const ROOM_LETTERS = ['A','B','C','D','E','F','G','H'];

  function combPairs(M) {
    const pairs = [];
    for (let i = 0; i < M; i++) {
      for (let j = i + 1; j < M; j++) pairs.push([i, j]);
    }
    return pairs;
  }

  function refreshFailRoomOptions() {
    const M = parseInt(combMInput.value) || 4;
    const current = combFailRoomSelect.value;
    combFailRoomSelect.innerHTML = '';
    for (let i = 0; i < M; i++) {
      const opt = document.createElement('option');
      opt.value = i;
      opt.textContent = `전기실 ${ROOM_LETTERS[i]}`;
      combFailRoomSelect.appendChild(opt);
    }
    if (current !== '' && parseInt(current) < M) combFailRoomSelect.value = current;
  }

  function renderCombDiagram() {
    const M = Math.max(3, Math.min(6, parseInt(combMInput.value) || 4));
    const totalLoad = parseFloat(combLoadInput.value);
    const svg = document.getElementById('combSvg');
    combZoom.clear();
    const svgTarget = combZoom.group;
    if (!totalLoad || totalLoad <= 0) return;

    const pairs = combPairs(M);
    const zoneCount = pairs.length;
    const zoneLoad = totalLoad / zoneCount;
    const failRoom = combMode === 'emergency' ? parseInt(combFailRoomSelect.value) : -1;

    const navy = '#3A2E75';
    const offlineBorder = '#DB8478';
    const offlineFill = '#FBEDE7';

    // layout
    const roomW = 90, roomH = 46;
    const roomGap = Math.max(16, 700 / M - roomW);
    const roomsTotalW = M * roomW + (M - 1) * roomGap;

    const zonesPerRow = zoneCount > 8 ? Math.ceil(zoneCount / 2) : zoneCount;
    const zoneW = 132, zoneH = 58, zoneGapX = 16, zoneGapY = 22;
    const zoneRows = Math.ceil(zoneCount / zonesPerRow);
    const zoneRowW = zonesPerRow * zoneW + (zonesPerRow - 1) * zoneGapX;

    const svgW = Math.max(760, roomsTotalW + 80, zoneRowW + 80);
    const roomY = 30;
    const zoneStartY = roomY + roomH + 83; // 1.5× the original 55px gap, room for label-dense curves
    const svgH = zoneStartY + zoneRows * (zoneH + zoneGapY) + 50;
    svg.setAttribute('width', svgW);
    svg.setAttribute('height', svgH);
    svg.setAttribute('viewBox', `0 0 ${svgW} ${svgH}`);

    // defs for cross-color gradients (one per zone, using its 2 parent room colors)
    const defs = svgEl('defs', {});
    svgTarget.appendChild(defs);

    const roomStartX = (svgW - roomsTotalW) / 2;
    const roomX = i => roomStartX + i * (roomW + roomGap);
    const roomCenterX = i => roomX(i) + roomW / 2;

    // room boxes
    const roomLoads = new Array(M).fill(0);
    for (let i = 0; i < M; i++) {
      if (combMode === 'emergency') {
        roomLoads[i] = (i === failRoom) ? 0 : totalLoad / (M - 1);
      } else {
        roomLoads[i] = totalLoad / M;
      }
    }

    for (let i = 0; i < M; i++) {
      const isOffline = (i === failRoom);
      const rColor = roomColor(i);

      // Grouped so a double-click anywhere on the room block (box or labels) toggles it as
      // the 상실 전기실 — mirrors the ④ 구성 다이어그램 interaction.
      const roomGroup = svgEl('g', { cursor: 'pointer' });
      roomGroup.addEventListener('dblclick', (e) => {
        e.stopPropagation();
        if (failRoom === i) {
          combMode = 'normal';
        } else {
          combFailRoomSelect.value = i;
          combMode = 'emergency';
        }
        updateCombModeButtons();
        renderCombDiagram();
      });

      const rect = svgEl('rect', {
        x: roomX(i), y: roomY, width: roomW, height: roomH, rx: 8,
        fill: isOffline ? offlineFill : rColor,
        stroke: isOffline ? offlineBorder : rColor, 'stroke-width': 1.5,
        'stroke-dasharray': isOffline ? '5,4' : 'none',
      });
      roomGroup.appendChild(rect);
      const label = svgEl('text', { x: roomCenterX(i), y: roomY + 19, 'text-anchor': 'middle', 'font-size': 13, 'font-weight': 800, fill: isOffline ? '#C8604F' : '#fff', 'font-family': 'sans-serif' });
      label.textContent = `전기실 ${ROOM_LETTERS[i]}`;
      roomGroup.appendChild(label);
      const sub = svgEl('text', { x: roomCenterX(i), y: roomY + 36, 'text-anchor': 'middle', 'font-size': 10.5, 'font-weight': 700, fill: isOffline ? '#C8604F' : '#fff', 'font-family': 'sans-serif' });
      sub.textContent = isOffline ? '⨯ 상실' : `${fmtN(roomLoads[i])} MW`;
      roomGroup.appendChild(sub);
      svgTarget.appendChild(roomGroup);
    }

    // zone boxes + connecting lines
    pairs.forEach((pair, idx) => {
      const row = Math.floor(idx / zonesPerRow);
      const col = idx % zonesPerRow;
      const rowCount = Math.min(zonesPerRow, zoneCount - row * zonesPerRow);
      const rowW = rowCount * zoneW + (rowCount - 1) * zoneGapX;
      const rowStartX = (svgW - rowW) / 2;
      const zx = rowStartX + col * (zoneW + zoneGapX);
      const zy = zoneStartY + row * (zoneH + zoneGapY);
      const zCenterX = zx + zoneW / 2;

      const [a, b] = pair;
      const aFailed = (a === failRoom);
      const bFailed = (b === failRoom);
      const zoneAffected = aFailed || bFailed;
      const colorA = roomColor(a), colorB = roomColor(b);

      // feed loads
      const feedA = aFailed ? 0 : (zoneAffected ? zoneLoad : zoneLoad / 2);
      const feedB = bFailed ? 0 : (zoneAffected ? zoneLoad : zoneLoad / 2);

      // curves — colored by originating room so crossing pattern reads at a glance; smooth
      // S-curves (vertical tangents at both ends) instead of straight lines, matching the
      // 품사/문장성분 reference diagram's connector style.
      [[a, feedA, aFailed, colorA], [b, feedB, bFailed, colorB]].forEach(([roomIdx, feed, isFailed, rc], sideIdx) => {
        const isStrong = feed > zoneLoad / 2 + 0.001;
        const x1 = roomCenterX(roomIdx), y1 = roomY + roomH, x2 = zCenterX, y2 = zy;
        const line = svgEl('path', {
          d: smoothCurvePath(x1, y1, x2, y2),
          fill: 'none',
          stroke: isFailed ? offlineBorder : rc,
          'stroke-width': isFailed ? 1.5 : (isStrong ? 3 : 1.75),
          opacity: isFailed ? 0.5 : (isStrong ? 0.9 : 0.55),
          'stroke-dasharray': isFailed ? '4,4' : 'none',
        });
        svgTarget.appendChild(line);

        // small MW label along the curve itself, so the split is readable at a glance in both
        // 평상시(50/50) and 비상시(0/100) — offset by side + a slight vertical stagger so the
        // two labels converging on the same zone don't sit on top of each other.
        const t = 0.4 + sideIdx * 0.14;
        const pt = smoothCurvePoint(t, x1, y1, x2, y2);
        const labelY = pt.y + (sideIdx === 0 ? -3 : 8);
        const feedLabel = svgEl('text', {
          x: pt.x, y: labelY, 'text-anchor': 'middle', 'font-size': 7.5, 'font-weight': 700,
          fill: isFailed ? '#C8604F' : rc, 'font-family': 'sans-serif',
          stroke: '#FFFFFF', 'stroke-width': 2.4, 'paint-order': 'stroke',
        });
        feedLabel.textContent = `${fmtN(feed)}MW`;
        svgTarget.appendChild(feedLabel);
      });

      // gradient fill combining both parent room colors so the zone box itself shows the cross-composition
      const gradId = `zoneGrad-${idx}`;
      const grad = svgEl('linearGradient', { id: gradId, x1: '0%', y1: '0%', x2: '100%', y2: '0%' });
      const stop1 = svgEl('stop', { offset: '0%', 'stop-color': aFailed ? '#DAD4EC' : colorA, 'stop-opacity': 0.22 });
      const stop2 = svgEl('stop', { offset: '100%', 'stop-color': bFailed ? '#DAD4EC' : colorB, 'stop-opacity': 0.22 });
      grad.appendChild(stop1);
      grad.appendChild(stop2);
      defs.appendChild(grad);

      const zoneRect = svgEl('rect', {
        x: zx, y: zy, width: zoneW, height: zoneH, rx: 8,
        fill: `url(#${gradId})`,
        stroke: zoneAffected ? '#D0A96B' : '#E0DAF0', 'stroke-width': 1.5,
      });
      // IT존 박스는 전기실 블럭이 아니므로 더블클릭해도 상태를 바꾸지 않음 — 다만 배경으로
      // 이벤트가 버블링되어 실수로 평상시 복귀되는 것은 막는다.
      zoneRect.addEventListener('dblclick', (e) => e.stopPropagation());
      svgTarget.appendChild(zoneRect);

      // small color chips for A and B under the zone label, reinforcing which two rooms compose it
      const chipY = zy + 6;
      const chipA = svgEl('rect', { x: zx + zoneW / 2 - 20, y: chipY, width: 9, height: 9, rx: 2, fill: aFailed ? '#C8604F' : colorA });
      svgTarget.appendChild(chipA);
      const chipB = svgEl('rect', { x: zx + zoneW / 2 + 11, y: chipY, width: 9, height: 9, rx: 2, fill: bFailed ? '#C8604F' : colorB });
      svgTarget.appendChild(chipB);

      const zLabel = svgEl('text', { x: zCenterX, y: zy + 27, 'text-anchor': 'middle', 'font-size': 12, 'font-weight': 800, fill: navy, 'font-family': 'sans-serif' });
      zLabel.textContent = `${ROOM_LETTERS[a]}+${ROOM_LETTERS[b]}`;
      svgTarget.appendChild(zLabel);

      const zLoadText = svgEl('text', { x: zCenterX, y: zy + 42, 'text-anchor': 'middle', 'font-size': 10.5, 'font-weight': 700, fill: '#8A8072', 'font-family': 'sans-serif' });
      zLoadText.textContent = `IT ${fmtN(zoneLoad)}MW`;
      svgTarget.appendChild(zLoadText);

    });

    // legend
    const legend = document.getElementById('combLegend');
    legend.innerHTML = '';
    for (let i = 0; i < M; i++) {
      const isOffline = (i === failRoom);
      const div = document.createElement('div');
      div.className = 'item';
      div.innerHTML = `<span class="swatch" style="background:${isOffline ? '#FBEDE7' : roomColor(i)}"></span>전기실 ${ROOM_LETTERS[i]}${isOffline ? ' (상실)' : ''}`;
      legend.appendChild(div);
    }
    // summary line appended to legend
    const summary = document.createElement('div');
    summary.style.width = '100%';
    summary.style.marginTop = '8px';
    summary.style.fontWeight = '700';
    summary.style.color = navy;
    if (combMode === 'normal') {
      summary.textContent = `전기실 ${M}개 × 평상시 부하 ${fmtN(totalLoad / M)}MW = 총 IT부하 ${fmtN(totalLoad)}MW (IT존 ${zoneCount}개 × ${fmtN(zoneLoad)}MW)`;
    } else {
      summary.textContent = `전기실 ${ROOM_LETTERS[failRoom]} 상실 시 나머지 ${M - 1}개 전기실이 각 ${fmtN(totalLoad / (M - 1))}MW로 상승 (평상시 ${fmtN(totalLoad / M)}MW 대비 +${fmtN((1 / (M - 1) - 1 / M) * totalLoad)}MW)`;
    }
    legend.appendChild(summary);
    combZoom.reset();
  }

  function updateCombModeButtons() {
    combModeNormalBtn.classList.toggle('active', combMode === 'normal');
    combModeEmergencyBtn.classList.toggle('active', combMode === 'emergency');
  }

  combMInput.addEventListener('input', () => {
    // room count changed — a previously failed-room index/selection may no longer be valid
    combMode = 'normal';
    updateCombModeButtons();
    refreshFailRoomOptions();
    renderCombDiagram();
  });
  combLoadInput.addEventListener('input', renderCombDiagram);
  combFailRoomSelect.addEventListener('change', () => {
    combMode = 'emergency';
    updateCombModeButtons();
    renderCombDiagram();
  });
  combModeNormalBtn.addEventListener('click', () => {
    combMode = 'normal';
    updateCombModeButtons();
    renderCombDiagram();
  });
  combModeEmergencyBtn.addEventListener('click', () => {
    combMode = 'emergency';
    updateCombModeButtons();
    renderCombDiagram();
  });

  combApplyBtn.addEventListener('click', () => {
    const M = Math.max(3, Math.min(6, parseInt(combMInput.value) || 4));
    const totalLoad = parseFloat(combLoadInput.value);
    if (!totalLoad || totalLoad <= 0) return;
    const targetLoad = combMode === 'emergency' ? totalLoad / (M - 1) : totalLoad / M;
    loadInput.value = Number(targetLoad.toFixed(2));
    // main load changed -> keep comb sync consistent, then recalc everything
    if (combSyncLoadCheckbox.checked) {
      // avoid feedback loop: temporarily uncheck sync so comb diagram doesn't rescale to the room-level value
      combSyncLoadCheckbox.checked = false;
      combLoadInput.disabled = false;
      combLoadInput.style.background = 'var(--surface)';
    }
    calculate();
    combApplyHint.textContent = `전기실 1개 부하 ${fmtN(targetLoad)}MW를 ①번 총부하에 적용했습니다. 이제 ②번에서 전기실 내부 이중화 방식(권장: 대기이중화, C=0)을 선택하세요.`;
    document.querySelector('.wrap').scrollIntoView({ behavior: 'smooth', block: 'start' });
  });

  refreshFailRoomOptions();
  syncCombLoadFromMain();
  renderCombDiagram();

  // ===== ⓪ 전체 용량 계획 (수전 · IT용량 → PUE 자동계산 → 데이터홀 개수 분할, 하이브리드) =====
  const utilityCapacityInput = document.getElementById('utilityCapacity');
  const itCapacityInput = document.getElementById('itCapacityInput');
  const pueDisplay = document.getElementById('pueDisplay');
  const hallCountInput = document.getElementById('hallCountInput');
  const hallCapacityDisplay = document.getElementById('hallCapacityDisplay');
  const loadSyncCheckbox = document.getElementById('loadSyncCheckbox');
  const maxSetCapacityInput = document.getElementById('maxSetCapacity');
  const autoSplitBtn = document.getElementById('autoSplitBtn');
  const addSetBtn = document.getElementById('addSetBtn');
  const setsTbody = document.getElementById('setsTbody');
  const setsSummary = document.getElementById('setsSummary');

  // topology preset lookup shared with the ② redundancy grid
  const TOPO_PRESETS = {
    '2oo3':  { topo: 'distributed', n: 2, c: 1, label: '2oo3 분산' },
    '3oo4':  { topo: 'distributed', n: 3, c: 1, label: '3oo4 분산' },
    '4oo5':  { topo: 'distributed', n: 4, c: 1, label: '4oo5 분산' },
    'n+1':   { topo: 'standby', n: 3, c: 1, label: 'N+1 대기' },
    'n+2c':  { topo: 'standby', n: 3, c: 2, label: 'N+2C 대기' },
    '2n':    { topo: 'full', n: 1, c: 1, label: '2N 완전' },
    '2n+1':  { topo: 'full', n: 1, c: 2, label: '2N+1 완전' },
  };

  let sets = []; // { id, loadMW, presetKey }  (데이터홀 목록)
  let setIdCounter = 0;

  function computeItCapacity() {
    const it = parseFloat(itCapacityInput.value);
    return (it && it > 0) ? it : null;
  }

  function computePue() {
    const utility = parseFloat(utilityCapacityInput.value);
    const it = computeItCapacity();
    if (!utility || !it || utility <= 0 || it <= 0) return null;
    return utility / it;
  }

  function computeMaxSetCapacity() {
    // Derived from ①'s effective capacity (rating×PF×안전율×UPS효율), at N=3 (3oo4 standard): effectiveCap*3
    const rating = parseFloat(ratingInput.value);
    const { pf, upsEff, safety } = getGlobalDeratingFactors();
    if (!rating || !safety) return null;
    const effectiveCap = computeEffectiveCapacity(rating, pf, safety, upsEff);
    return (effectiveCap * 3) / 1000; // MW
  }

  function refreshMaxSetCapacityHint() {
    const derived = computeMaxSetCapacity();
    if (derived) {
      maxSetCapacityInput.value = Number(derived.toFixed(2));
    }
  }

  function updatePueDisplay() {
    const pue = computePue();
    pueDisplay.value = pue ? fmtN(pue, 3) : '-';
  }

  function updateHallCapacityDisplay() {
    const it = computeItCapacity();
    const count = parseInt(hallCountInput.value);
    const perHall = (it && count > 0) ? it / count : null;
    hallCapacityDisplay.value = perHall ? fmtN(perHall, 2) + ' MW' : '-';
    if (loadSyncCheckbox && loadSyncCheckbox.checked && perHall) {
      applyMainLoad(perHall);
    }
    return perHall;
  }

  loadSyncCheckbox.addEventListener('change', () => {
    loadInput.disabled = loadSyncCheckbox.checked;
    loadInput.style.background = loadSyncCheckbox.checked ? 'var(--primary-bg)' : 'var(--surface)';
    if (loadSyncCheckbox.checked) updateHallCapacityDisplay();
  });

  function computeSetResult(set) {
    const rating = parseFloat(ratingInput.value);
    const { pf, upsEff, safety } = getGlobalDeratingFactors();
    const preset = TOPO_PRESETS[set.presetKey];
    const loadKW = set.loadMW * 1000;
    const effectiveCap = computeEffectiveCapacity(rating, pf, safety, upsEff);
    const { topo, n, c } = preset;
    const M = n + c;

    let perModuleLoad = topo === 'full' ? loadKW : loadKW / n;
    const perModuleUnits = Math.max(1, Math.ceil(perModuleLoad / effectiveCap));
    const totalUnits = perModuleUnits * M;

    let normalPct, emergencyPct;
    if (topo === 'distributed') {
      normalPct = (loadKW / M) / (perModuleUnits * effectiveCap) * 100;
      emergencyPct = (loadKW / n) / (perModuleUnits * effectiveCap) * 100;
    } else if (topo === 'standby') {
      const dutyPct = (loadKW / n) / (perModuleUnits * effectiveCap) * 100;
      normalPct = dutyPct;
      emergencyPct = dutyPct;
    } else {
      const pct = loadKW / (perModuleUnits * effectiveCap) * 100;
      normalPct = pct;
      emergencyPct = pct;
    }
    return { M, perModuleUnits, totalUnits, normalPct, emergencyPct };
  }

  function renderSets() {
    setsTbody.innerHTML = '';
    const maxCap = parseFloat(maxSetCapacityInput.value) || null;

    sets.forEach((set, idx) => {
      const preset = TOPO_PRESETS[set.presetKey];
      const result = computeSetResult(set);
      const overCap = maxCap && set.loadMW > maxCap + 0.001;
      const overload = result.emergencyPct > 100;

      const tr = document.createElement('tr');

      const tdName = document.createElement('td');
      tdName.textContent = `데이터홀 ${idx + 1}`;
      tdName.style.fontWeight = '700';
      tr.appendChild(tdName);

      const tdLoad = document.createElement('td');
      const loadInputEl = document.createElement('input');
      loadInputEl.type = 'number';
      loadInputEl.step = '0.1';
      loadInputEl.min = '0';
      loadInputEl.value = set.loadMW;
      if (overCap) loadInputEl.style.borderColor = 'var(--warn)';
      loadInputEl.addEventListener('input', () => {
        set.loadMW = parseFloat(loadInputEl.value) || 0;
        renderSets();
      });
      tdLoad.appendChild(loadInputEl);
      if (overCap) {
        const warnSpan = document.createElement('div');
        warnSpan.className = 'hint warn-cell';
        warnSpan.textContent = `최대(${fmtN(maxCap)}MW) 초과`;
        tdLoad.appendChild(warnSpan);
      }
      tr.appendChild(tdLoad);

      const tdTopo = document.createElement('td');
      const sel = document.createElement('select');
      Object.keys(TOPO_PRESETS).forEach(key => {
        const opt = document.createElement('option');
        opt.value = key;
        opt.textContent = TOPO_PRESETS[key].label;
        if (key === set.presetKey) opt.selected = true;
        sel.appendChild(opt);
      });
      sel.addEventListener('change', () => { set.presetKey = sel.value; renderSets(); });
      tdTopo.appendChild(sel);
      tr.appendChild(tdTopo);

      const tdPerModule = document.createElement('td');
      tdPerModule.textContent = result.perModuleUnits + '대';
      tr.appendChild(tdPerModule);

      const tdM = document.createElement('td');
      tdM.textContent = result.M + '개';
      tr.appendChild(tdM);

      const tdTotal = document.createElement('td');
      tdTotal.textContent = result.totalUnits + '대';
      tdTotal.style.fontWeight = '700';
      tdTotal.style.color = 'var(--primary)';
      tr.appendChild(tdTotal);

      const tdNormal = document.createElement('td');
      tdNormal.textContent = fmtN(result.normalPct) + '%';
      tr.appendChild(tdNormal);

      const tdEmergency = document.createElement('td');
      tdEmergency.textContent = fmtN(result.emergencyPct) + '%';
      if (overload) { tdEmergency.classList.add('warn-cell'); }
      tr.appendChild(tdEmergency);

      const tdActions = document.createElement('td');
      const detailBtn = document.createElement('button');
      detailBtn.className = 'set-row-btn';
      detailBtn.textContent = '상세보기';
      detailBtn.addEventListener('click', () => {
        loadSyncCheckbox.checked = false;
        loadInput.disabled = false;
        loadInput.style.background = 'var(--surface)';
        nInput.value = preset.n;
        cInput.value = preset.c;
        currentTopo = preset.topo;
        manualFail4.clear();
        diagramMode = 'normal';
        updateDiagramModeButtons();
        redundancyOpts.forEach(o => {
          o.classList.toggle('active', o.dataset.topo === preset.topo && o.dataset.n == preset.n && o.dataset.c == preset.c);
        });
        applyTopoMeta();
        applyMainLoad(set.loadMW); // also refreshes ⑤번 총IT부하 if still linked to ①번
        loadInput.scrollIntoView({ behavior: 'smooth', block: 'center' });
      });
      const delBtn = document.createElement('button');
      delBtn.className = 'set-row-btn del';
      delBtn.textContent = '삭제';
      delBtn.style.marginLeft = '4px';
      delBtn.addEventListener('click', () => {
        sets = sets.filter(s => s.id !== set.id);
        renderSets();
      });
      tdActions.appendChild(detailBtn);
      tdActions.appendChild(delBtn);
      tr.appendChild(tdActions);

      setsTbody.appendChild(tr);
    });

    // summary
    setsSummary.innerHTML = '';
    const itTarget = computeItCapacity();
    const sumLoad = sets.reduce((a, s) => a + s.loadMW, 0);
    const sumUnits = sets.reduce((a, s) => a + computeSetResult(s).totalUnits, 0);
    const diff = itTarget !== null ? sumLoad - itTarget : null;
    const diffOk = diff === null || Math.abs(diff) < 0.05;

    const items = [
      { label: '데이터홀 수', value: sets.length + '개' },
      { label: '데이터홀 IT용량 합계', value: fmtN(sumLoad, 2) + ' MW' },
      { label: '목표 IT용량', value: itTarget !== null ? fmtN(itTarget, 2) + ' MW' : '-' },
      { label: '차이', value: diff !== null ? (diff >= 0 ? '+' : '') + fmtN(diff, 2) + ' MW' : '-', warn: !diffOk },
      { label: '전체 변압기 합계', value: sumUnits + '대' },
    ];
    items.forEach(it => {
      const div = document.createElement('div');
      div.className = 'item' + (it.warn ? ' warn' : '');
      div.innerHTML = `${it.label}<b>${it.value}</b>`;
      setsSummary.appendChild(div);
    });
  }

  function autoSplitSets() {
    const it = computeItCapacity();
    const count = parseInt(hallCountInput.value);
    if (!it || !count || count <= 0) return;
    const perHall = it / count;
    sets = [];
    for (let i = 0; i < count; i++) {
      sets.push({ id: setIdCounter++, loadMW: Number(perHall.toFixed(2)), presetKey: '3oo4' });
    }
    renderSets();
  }

  autoSplitBtn.addEventListener('click', autoSplitSets);
  addSetBtn.addEventListener('click', () => {
    const perHall = updateHallCapacityDisplay() || parseFloat(maxSetCapacityInput.value) || 9;
    sets.push({ id: setIdCounter++, loadMW: Number(perHall.toFixed(2)), presetKey: '3oo4' });
    renderSets();
  });

  [utilityCapacityInput, itCapacityInput].forEach(el => el.addEventListener('input', () => {
    updatePueDisplay();
    updateHallCapacityDisplay();
  }));
  hallCountInput.addEventListener('input', updateHallCapacityDisplay);
  [ratingInput, safetyInput, pfInput, upsEfficiencyInput].forEach(el => el.addEventListener('input', () => {
    refreshMaxSetCapacityHint();
    renderSets();
  }));
  maxSetCapacityInput.addEventListener('input', renderSets);

  // init: compute PUE, derive recommended max cap from ① defaults, set default hall count from it, auto-split once
  updatePueDisplay();
  refreshMaxSetCapacityHint();
  (function initHallCount() {
    const it = computeItCapacity();
    const maxCap = computeMaxSetCapacity();
    if (it && maxCap) hallCountInput.value = Math.max(1, Math.ceil(it / maxCap));
  })();
  updateHallCapacityDisplay();
  autoSplitSets();
