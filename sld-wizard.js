// ⑦ SLD 작성하기 — 질문지 (데이터만 들어 있다. 그리는 쪽은 script.js의 buildWizardSLD)
//
// 질문은 두 자료를 바탕으로 만들었다.
//   · [가평] Phase 2.4 요건 정의서 v1.0 — 3.3 전기 분야 요건 (수전·변압·발전기·UPS·배전·접지)
//   · 데이터센터 영어 사전 — ATS/CTTS/STS/UPS/MBP/LOAD BANK 등 용어 풀이
// 각 질문의 rec(a, c)는 '요건정의서 기준 권장안'을 돌려준다. a=지금까지의 답, c=그 답으로 계산한 값.
// 해설(explain)은 처음 보는 사람도 읽을 수 있게 두세 문장으로 줄였다.
(function () {
  'use strict';

  const L = (ko, en) => ({ ko, en });
  const fmt = n => Number(n).toLocaleString('ko-KR', { maximumFractionDigits: 1 });

  // 사전(용어 풀이) — 질문의 terms 배열이 이 키를 가리킨다
  const GLOSS = {
    KEPCO: L('한국전력 변전소. 데이터센터가 전기를 받아오는 출발점입니다.', 'The utility (KEPCO) substation — where the site’s power comes from.'),
    MOF: L('계기용 변성기. 한전이 요금을 매기려고 높은 전압·큰 전류를 계량기가 읽을 수 있는 크기로 바꿔 주는 설비입니다.', 'Metering out-fit: scales high voltage and current down so the utility meter can read them for billing.'),
    ALTS: L('자동 부하 절체 스위치. 주 회선이 끊기면 예비 회선으로 자동으로 넘깁니다(넘어가는 순간 짧게 끊김).', 'Automatic load transfer switch: moves the load to the spare feeder when the main one fails (a brief break).'),
    DS: L('단로기. 전류가 흐르지 않을 때 회로를 눈에 보이게 떼어 놓는 스위치입니다. 점검할 때 안전을 위해 씁니다.', 'Disconnecting switch: visibly isolates a circuit once no current flows, for safe maintenance.'),
    GCB: L('가스 차단기. 154kV 같은 초고압에서 사고 전류를 SF6 가스로 끊어 냅니다.', 'Gas circuit breaker: interrupts fault current at extra-high voltage (e.g. 154 kV) using SF6 gas.'),
    GIS: L('가스절연 개폐장치. 단로기·차단기를 가스가 든 금속함에 넣어 크기를 크게 줄인 수전 설비입니다.', 'Gas-insulated switchgear: DS and breakers sealed in SF6-filled metal enclosures — far more compact.'),
    VCB: L('진공 차단기. 6.6kV·22.9kV 고압에서 쓰는 차단기로, 아래쪽 사고가 위쪽으로 번지지 않게 끊습니다.', 'Vacuum circuit breaker for 6.6/22.9 kV; trips so a fault below does not spread upstream.'),
    ACB: L('기중 차단기. 380V 이하 저압의 큰 전류를 끊는 차단기입니다.', 'Air circuit breaker: the large low-voltage (≤600 V) breaker.'),
    MCCB: L('배선용 차단기. ACB보다 작은 저압 차단기로, 분전반·부스웨이 플러그인 박스에 들어갑니다.', 'Molded-case breaker: the smaller LV breaker used in panels and busway plug-in units.'),
    MTR: L('주변압기. 154kV를 6.6kV처럼 건물 안에서 쓰는 전압으로 한 번에 크게 낮추는 대형 변압기입니다.', 'Main transformer: steps 154 kV down to the building’s medium voltage (e.g. 6.6 kV).'),
    TR: L('변압기. 6.6kV를 서버가 쓰는 380V/220V로 낮춥니다. 요건정의서는 고조파에 강한 K-factor 몰드형을 권합니다.', 'Transformer: steps 6.6 kV down to 380/220 V. The requirements call for K-factor cast-resin units.'),
    BUS: L('모선. 전기를 여러 회로로 나눠 주는 굵은 구리 막대입니다.', 'Bus bar: the thick copper bar that splits power into many circuits.'),
    TIE: L('연계 차단기. 두 모선 사이를 잇거나 끊는 차단기입니다. N.C.=평소 붙어 있음, N.O.=평소 떨어져 있음.', 'Tie breaker between two buses. N.C. = normally closed, N.O. = normally open.'),
    GEN: L('비상 발전기. 디젤 엔진으로 정전 때 전기를 만듭니다. 기동해서 전기를 내기까지 약 10초가 걸립니다.', 'Diesel emergency generator; takes about 10 s to start and pick up load.'),
    SYN: L('동기 병렬반. 여러 발전기의 전압·주파수·위상을 맞춰 하나의 모선에 함께 붙여 운전하게 합니다.', 'Synchronising panel: matches voltage, frequency and phase so several generators share one bus.'),
    GCP: L('발전기 제어반. 발전기 기동·정지와 보호를 맡습니다.', 'Generator control panel: starts, stops and protects the set.'),
    LOADBANK: L('로드뱅크. 발전기에 가짜 부하를 걸어 시험하는 장치입니다. 서버를 끄지 않고도 발전기를 점검할 수 있습니다(미국 NFPA는 매달 30분 이상 부하 시험을 요구).', 'Load bank: an artificial load for testing generators without touching IT (NFPA asks for a 30-min loaded run each month).'),
    ATS: L('자동 절체 스위치. 한전이 끊기면 발전기로 자동으로 넘깁니다. 넘어가는 순간 짧은 정전이 생깁니다.', 'Automatic transfer switch: moves to the generator on a utility outage — with a short break.'),
    CTTS: L('폐쇄형 절체 스위치. 한전과 발전기를 아주 잠깐 함께 붙였다가 넘기므로 끊김이 없습니다. 발전기 시험·복전 때도 무정전입니다.', 'Closed-transition transfer switch: briefly parallels utility and generator, so the hand-over has no break — also for tests and return to utility.'),
    UPS: L('무정전 전원장치. 정전 순간부터 발전기가 전기를 낼 때까지 배터리로 서버를 살려 둡니다.', 'Uninterruptible power supply: battery bridge from the instant of an outage until the generators take over.'),
    BMS: L('배터리 관리 시스템. 리튬이온 배터리의 온도·전압을 감시해 과열과 화재를 막습니다.', 'Battery management system: watches lithium-ion cells to prevent overheating and fire.'),
    MBP: L('외장 바이패스 반. UPS를 점검하거나 고장 났을 때 서버를 끄지 않고 UPS를 우회해 전기를 넣는 길입니다.', 'Maintenance bypass panel: routes power around the UPS for service or failure, keeping IT running.'),
    STS: L('정지형 절체 스위치. 두 전원 중 하나가 끊기면 약 4ms 안에 다른 쪽으로 넘겨 서버가 눈치채지 못하게 합니다.', 'Static transfer switch: flips between two sources within ~4 ms, too fast for servers to notice.'),
    PDU: L('전력 분배 장치. UPS에서 받은 전기를 여러 랙으로 나눠 주고, 회로마다 차단기가 있습니다.', 'Power distribution unit: splits UPS output to racks, a breaker per circuit.'),
    BUSWAY: L('부스웨이. 천장에 구리 레일을 깔고 원하는 자리에 플러그인 박스를 꽂아 전원을 뽑는 방식입니다.', 'Busway: an overhead copper track; plug-in boxes tap power wherever a rack sits.'),
    TIER: L('Uptime Institute가 정한 데이터센터 신뢰도 등급(1~4). Tier III는 설비를 멈추지 않고 점검할 수 있는 수준, Tier IV는 어떤 고장 하나에도 버티는 수준입니다.', 'Uptime Institute reliability tiers (1–4). Tier III: maintain anything without shutdown. Tier IV: survive any single fault.'),
    PUE: L('전력 효율 지표. 건물 전체 전력 ÷ IT 전력. 1.5면 IT 1MW당 냉방 등에 0.5MW를 더 쓴다는 뜻입니다.', 'Power usage effectiveness = total power ÷ IT power. 1.5 means 0.5 MW of overhead per IT MW.'),
    CRAH: L('항온항습기(냉수식). 냉동기에서 온 찬물로 서버실 공기를 식힙니다. FWU도 같은 역할의 팬 장치입니다.', 'Chilled-water air handler; cools the hall with water from the chillers (an FWU is the fan-wall version).'),
  };

  // 이중화 그림 설명에 쓰는 짧은 이름
  const Q = [
    // ───────────── 0. 기본 정보 ─────────────
    {
      id: 'itMW', sec: 'basis', hl: ['rack', 'module'], type: 'number', unit: 'MW', min: 0.5, max: 300, step: 0.5,
      secLabel: L('기본 정보', 'Basics'),
      title: L('IT 부하(서버가 쓰는 전력)는 몇 MW인가요?', 'How many MW of IT load (server power)?'),
      presets: [10, 20, 40, 56],
      rec: (a, c) => c.appMW || 20,
      explain: L('IT 부하는 서버·스토리지·네트워크 장비가 실제로 쓰는 전력입니다. 변압기·UPS·발전기 용량이 모두 이 숫자에서 출발합니다. 요건정의서는 랙당 15kW × 3,744랙 ≈ 56MW 규모를 가정합니다.',
        'IT load is the power the servers, storage and network actually draw. Every transformer, UPS and generator size starts from it. The requirements assume 15 kW × 3,744 racks ≈ 56 MW.'),
      src: L('요건정의서 3.1 — 랙당 15kW, 3,744랙 · 앱 ⓪~①의 부하값을 기본값으로 가져옴', 'Requirements 3.1 — 15 kW/rack, 3,744 racks · default taken from the app’s ⓪–① load'),
      info: (a, c) => L(`건물 전체 전력 ≈ IT ${fmt(c.itMW)}MW × PUE 1.5 = ${fmt(c.totalMW)}MW`, `Whole-site power ≈ IT ${fmt(c.itMW)} MW × PUE 1.5 = ${fmt(c.totalMW)} MW`),
      terms: ['PUE'],
    },
    {
      id: 'rackKW', sec: 'basis', hl: ['rack'],
      secLabel: L('기본 정보', 'Basics'),
      title: L('랙 1개당 전력(랙 밀도)은 얼마로 볼까요?', 'What power per rack (rack density)?'),
      options: [
        { v: '6', label: L('6kW — 일반 코로케이션', '6 kW — standard colocation'), desc: L('임대형 일반 서버랙. 요건정의서는 전체의 20%를 이 수준으로 봅니다.', 'Typical leased racks; the requirements put 20% of racks here.') },
        { v: '15', label: L('15kW — 고밀도 (요건정의서 기준)', '15 kW — high density (requirements)'), desc: L('클라우드·하이퍼스케일 서버. 공기 냉각의 거의 한계입니다.', 'Cloud / hyperscale servers; close to the limit of air cooling.') },
        { v: '30', label: L('30kW — AI·GPU (액체 냉각)', '30 kW — AI/GPU (liquid cooled)'), desc: L('GPU 서버. 공기만으로는 식히기 어려워 CDU·수냉이 필요합니다.', 'GPU servers; need CDUs / liquid cooling.') },
      ],
      rec: () => '15',
      explain: L('랙 밀도가 높을수록 같은 전력을 더 적은 랙과 면적에 담습니다. 대신 랙 하나가 쓰는 전류가 커져 분전 설비(부스웨이 용량)와 냉방 방식이 달라집니다.',
        'Higher density packs the same power into fewer racks and less floor, but each rack draws more current, which changes the busway rating and the cooling method.'),
      src: L('요건정의서 3.1 — 15kW/rack, 코로케이션 6kW 20%', 'Requirements 3.1 — 15 kW/rack, colocation 6 kW for 20%'),
      info: (a, c) => L(`랙 수 ≈ ${fmt(c.itMW * 1000)}kW ÷ ${a.rackKW}kW = 약 ${fmt(c.racks)}개`, `Racks ≈ ${fmt(c.itMW * 1000)} kW ÷ ${a.rackKW} kW ≈ ${fmt(c.racks)}`),
      terms: [],
    },
    {
      id: 'tier', sec: 'basis', hl: [],
      secLabel: L('기본 정보', 'Basics'),
      title: L('목표 신뢰도 등급(Tier)은?', 'Target reliability tier?'),
      options: [
        { v: '2', label: L('Tier II — 부분 이중화', 'Tier II — partial redundancy'), desc: L('장비 일부에만 예비가 있습니다. 경로가 하나라 배선 점검 때 멈춥니다.', 'Spare units on some equipment; a single path, so maintenance stops it.') },
        { v: '3', label: L('Tier III+ — 동시 유지보수 (요건정의서)', 'Tier III+ — concurrently maintainable (requirements)'), desc: L('어떤 장비든 서버를 끄지 않고 점검할 수 있습니다. 국내 대형 센터의 표준입니다.', 'Any component can be serviced without shutting IT down; the norm for large sites.') },
        { v: '4', label: L('Tier IV — 내결함성', 'Tier IV — fault tolerant'), desc: L('어느 한 곳이 고장 나도 자동으로 버팁니다. 모든 경로가 A/B 두 벌입니다.', 'Survives any single fault automatically; every path is doubled A/B.') },
      ],
      rec: () => '3',
      explain: L('Tier는 "얼마나 안 멈추느냐"의 등급입니다. 등급을 정하면 뒤에 나오는 수전·발전기·UPS의 이중화 권장안이 따라 정해집니다. 등급이 올라갈수록 설비가 두 벌이 되어 비용과 면적이 커집니다.',
        'The tier says how hard the site is to stop. It drives the recommended redundancy for the utility, generators and UPS that follow; higher tiers double more equipment, costing money and space.'),
      src: L('요건정의서 1. 목표 — Tier III+ · 영어사전 "Tier 인증"', 'Requirements §1 — Tier III+ · glossary “Tier”'),
      terms: ['TIER'],
    },

    // ───────────── 1. 수전 ─────────────
    {
      id: 'supply', sec: 'utility', hl: ['utility'],
      secLabel: L('수전 (한전)', 'Utility supply'),
      title: L('한전에서 전기를 몇 회선, 어떻게 받을까요?', 'How many utility feeders, and how?'),
      options: [
        { v: 'single', label: L('1회선', 'One feeder'), desc: L('선로 하나. 선로·변전소가 멈추면 곧바로 발전기에 의존합니다.', 'One line; if it or its substation drops, you are on generators.') },
        { v: 'dual_same', label: L('2회선 — 같은 변전소 (본선·예비선)', 'Two feeders — same substation'), desc: L('선로는 둘이지만 변전소가 같아 변전소 사고에는 함께 멈춥니다.', 'Two lines, but one substation: a substation fault takes both.') },
        { v: 'dual_sub', label: L('2회선 — 서로 다른 변전소, Active-Standby', 'Two feeders — two substations, active-standby'), desc: L('평소 한 회선만 쓰고, 다른 변전소의 회선은 대기합니다. 요건정의서 방식입니다.', 'One line carries load, the other (from another substation) waits. The requirements’ choice.') },
        { v: 'parallel', label: L('2회선 — 상시 병렬 (Active-Active)', 'Two feeders — both active'), desc: L('두 회선이 늘 반씩 나눠 받습니다. 전환이 필요 없지만 보호 협조가 복잡합니다.', 'Both lines always share the load — no transfer, but protection is more complex.') },
      ],
      rec: () => 'dual_sub',
      explain: L('한전에서 전기를 받아오는 "길"을 몇 개, 어디서 끌어오느냐입니다. 서로 다른 변전소 두 곳에서 받으면 한쪽 변전소가 통째로 멈춰도 다른 쪽으로 계속 받을 수 있습니다. 예비 회선은 전용 지중선으로 받아 사고 위험을 줄입니다.',
        'How many “roads” bring power in, and from where. With two different substations, losing one whole substation still leaves the other. The spare feeder runs as a dedicated underground line.'),
      src: L('요건정의서 3.3 — 이중 수전 Active-Standby, 2개 변전소, 예비 수전 전용 지중선, ALTS·MOF 이중화', 'Requirements 3.3 — dual supply, active-standby, two substations, dedicated underground spare, duplicated ALTS/MOF'),
      terms: ['KEPCO', 'ALTS', 'MOF'],
    },
    {
      id: 'kv', sec: 'utility', hl: ['utility', 'hv'],
      secLabel: L('수전 (한전)', 'Utility supply'),
      title: L('수전 전압은?', 'Supply voltage?'),
      options: [
        { v: '22.9', label: L('22.9kV (특고압)', '22.9 kV (MV distribution)'), desc: L('도심 배전선로 전압. 대략 40MW 이하 규모에 씁니다.', 'Urban distribution voltage; roughly up to 40 MW.') },
        { v: '154', label: L('154kV (초고압)', '154 kV (HV transmission)'), desc: L('송전선로 전압. 대형 데이터센터가 직접 받습니다.', 'Transmission voltage, taken directly by large data centres.') },
      ],
      rec: (a, c) => (c.totalMW > 40 ? '154' : '22.9'),
      explain: L('전압이 높을수록 같은 굵기의 선으로 더 많은 전력을 보낼 수 있습니다. 한국에서는 계약전력이 대략 40MW를 넘으면 154kV로 받습니다. 154kV는 단지 안에 주변압기(MTR)가 있는 작은 변전소를 하나 짓는 셈입니다.',
        'Higher voltage moves more power through the same conductor. In Korea, contracts above ~40 MW are taken at 154 kV — effectively building a small substation with main transformers on site.'),
      src: L('요건정의서 3.3 — 154kV 수전', 'Requirements 3.3 — 154 kV supply'),
      info: (a, c) => L(`건물 전체 ≈ ${fmt(c.totalMW)}MW → ${c.totalMW > 40 ? '154kV 권장' : '22.9kV로 가능'}`, `Whole site ≈ ${fmt(c.totalMW)} MW → ${c.totalMW > 40 ? '154 kV advised' : '22.9 kV is enough'}`),
      terms: [],
    },
    {
      id: 'swgr', sec: 'hv', hl: ['hv'],
      skip: a => a.kv !== '154',
      secLabel: L('특고압 개폐', 'HV switching'),
      title: L('154kV 수전 설비 형식은?', '154 kV switchgear type?'),
      options: [
        { v: 'ais', label: L('옥외 개방형 (AIS)', 'Outdoor air-insulated (AIS)'), desc: L('단로기·차단기를 밖에 그대로 세웁니다. 싸지만 넓은 부지가 필요합니다.', 'DS and breakers stand in the open; cheaper but needs a large yard.') },
        { v: 'gis', label: L('GIS (가스절연 개폐장치)', 'GIS (gas-insulated)'), desc: L('장비를 가스함에 넣어 1/10 크기로. 건물 안·도심에 적합합니다.', 'Equipment sealed in gas tanks, ~1/10 the size; suits indoor / urban sites.') },
      ],
      rec: () => 'gis',
      explain: L('수전 설비는 "점검할 때 눈에 보이게 떼어 놓는 스위치(DS)"와 "사고 전류를 끊는 차단기(GCB)"의 조합입니다. 그림의 DS → GCB 순서가 그 뜻입니다. GIS는 이 둘을 가스가 든 금속함 안에 넣은 것입니다.',
        'Incoming switchgear pairs a disconnector you can see open (DS) with a breaker that interrupts faults (GCB) — hence DS → GCB on the drawing. GIS puts both inside gas-filled metal tanks.'),
      src: L('영어사전 — GIS, DS, GCB', 'Glossary — GIS, DS, GCB'),
      terms: ['DS', 'GCB', 'GIS'],
    },

    // ───────────── 2. 변압 ─────────────
    {
      id: 'step', sec: 'mtr', hl: ['mtr', 'module'],
      secLabel: L('변압 방식', 'Voltage steps'),
      title: L('전압을 몇 단계로 낮출까요?', 'How many voltage steps down?'),
      options: [
        { v: '1step', label: L('1-Step: 22.9kV → 380V', '1-step: 22.9 kV → 380 V'), desc: L('받은 전압을 모듈 변압기에서 바로 380V로. 22.9kV 수전일 때의 기본입니다.', 'Module transformers take 22.9 kV straight to 380 V.'), when: a => a.kv === '22.9' },
        { v: '2step66', label: L('2-Step: 154kV → 6.6kV → 380V (요건정의서)', '2-step: 154 → 6.6 kV → 380 V (requirements)'), desc: L('주변압기로 6.6kV까지 낮춘 뒤 각 모듈에서 다시 380V로.', 'MTRs to 6.6 kV, then each module down to 380 V.'), when: a => a.kv === '154' },
        { v: '2step229', label: L('2-Step: 154kV → 22.9kV → 380V', '2-step: 154 → 22.9 kV → 380 V'), desc: L('중간 전압을 22.9kV로. 건물이 넓게 퍼진 캠퍼스에 유리합니다.', '22.9 kV in the middle; suits spread-out campuses.'), when: a => a.kv === '154' },
      ],
      rec: a => (a.kv === '154' ? '2step66' : '1step'),
      explain: L('154kV를 한 번에 380V로 낮출 수는 없어서 중간 전압으로 한 번 낮춘 뒤, 서버 가까이에서 다시 380V로 낮춥니다. 6.6kV는 고압 발전기 전압과 같아서 발전기를 고압 모선에 바로 붙일 수 있습니다.',
        '154 kV cannot go to 380 V in one step, so it drops to a medium voltage first and to 380 V near the servers. 6.6 kV matches HV generator voltage, so generators can connect straight to the MV bus.'),
      src: L('요건정의서 3.3 — 2-Step 변압 154kV → 6.6kV → 380V', 'Requirements 3.3 — two-step 154 → 6.6 kV → 380 V'),
      terms: ['MTR', 'TR'],
    },
    {
      id: 'mtr', sec: 'mtr', hl: ['mtr'],
      skip: a => a.step === '1step',
      secLabel: L('주변압기', 'Main transformers'),
      title: L('주변압기(MTR)는 몇 대, 어떻게 운전할까요?', 'How many main transformers, run how?'),
      options: [
        { v: 'one', label: L('1대', 'One'), desc: L('가장 싸지만 MTR 고장·점검 때 발전기로만 버팁니다.', 'Cheapest; any MTR fault or service puts you on generators.') },
        { v: 'standby', label: L('2대 — 1대 운전 + 1대 예비 (요건정의서)', 'Two — one running, one standby (requirements)'), desc: L('각각 100% 용량. 평소엔 한 대만 켜 두고 다른 한 대는 대기합니다.', 'Each 100% rated; one energised, the other waits.') },
        { v: 'share', label: L('2대 — 동시 운전 (각 100%, 평소 50%씩)', 'Two — both running (100% each, 50% normally)'), desc: L('둘이 반씩 나눠 맡고, 한 대가 멈추면 다른 한 대가 전부를 맡습니다.', 'Both share half; if one stops, the other carries all.') },
      ],
      rec: (a) => (a.tier === '2' ? 'one' : 'standby'),
      explain: L('주변압기는 건물 전체 전력이 지나가는 큰 변압기라 고장 나면 전체가 흔들립니다. 그래서 같은 용량으로 한 대를 더 두어, 한 대를 점검하거나 고장 나도 나머지 한 대가 전부를 감당하게 합니다.',
        'The MTR carries the whole site, so a failure shakes everything. A second, equally sized unit lets one be serviced or fail while the other carries the full load.'),
      src: L('요건정의서 3.3 — MV-TR 예비 확보 · 참고 SLD: MTR #1/#2 40MVA (1대 가압, 1대 무가압)', 'Requirements 3.3 — spare MV transformer · reference SLD: MTR #1/#2 40 MVA (one energised, one not)'),
      info: (a, c) => L(`필요 용량 ≈ ${fmt(c.totalMW)}MW ÷ 역률 0.9 = ${fmt(c.needMVA)}MVA → 표준 ${c.mtrMVA}MVA${c.mtrSets > 1 ? ` × ${c.mtrSets}조` : ''}`,
        `Needed ≈ ${fmt(c.totalMW)} MW ÷ PF 0.9 = ${fmt(c.needMVA)} MVA → standard ${c.mtrMVA} MVA${c.mtrSets > 1 ? ` × ${c.mtrSets} sets` : ''}`),
      terms: ['MTR'],
    },
    {
      id: 'bus', sec: 'bus', hl: ['bus'],
      secLabel: L('고압 모선', 'MV bus'),
      title: L('고압 모선(Bus)을 어떻게 나눌까요?', 'How is the MV bus split?'),
      options: [
        { v: 'single', label: L('단일 모선', 'Single bus'), desc: L('하나의 모선. 모선을 점검하면 전체가 멈춥니다.', 'One bus; servicing it stops everything.') },
        { v: 'dual_nc', label: L('A/B 2모선 + TIE 상시 투입 (N.C.)', 'A/B buses + tie normally closed (N.C.)'), desc: L('평소 TIE로 붙어 있어 한 대의 MTR이 두 모선을 모두 먹입니다.', 'Tied in normal operation, so one MTR feeds both buses.') },
        { v: 'dual_no', label: L('A/B 2모선 + TIE 상시 개방 (N.O.)', 'A/B buses + tie normally open (N.O.)'), desc: L('평소 각자 MTR에서 받고, 한쪽이 끊기면 TIE를 닫아 넘겨받습니다.', 'Each bus has its own MTR; the tie closes only when one side is lost.') },
      ],
      rec: a => (a.tier === '2' ? 'single' : (a.step !== '1step' && a.mtr === 'share') || (a.step === '1step' && a.supply === 'parallel') ? 'dual_no' : 'dual_nc'),
      warn: a => {
        const bSourceIdle = (a.step === '1step') ? a.supply !== 'parallel' : a.mtr !== 'share';
        if (a.bus === 'dual_no' && bSourceIdle) {
          return L('B모선은 평소 자기 전원(대기 중인 MTR·회선)이 없어서 TIE로만 전기를 받습니다. TIE를 상시 개방(N.O.)으로 두면 평소 B모선이 꺼져 있게 됩니다 — 그림에서 B모선이 회색으로 바뀝니다.',
            'Bus B has no live source of its own (its MTR/feeder is on standby), so it is fed only through the tie. With the tie normally open, bus B sits dead — see it turn grey.');
        }
        return null;
      },
      explain: L('모선을 둘로 나누고 그 사이를 TIE 차단기로 이어두면, 한쪽 모선을 점검하거나 사고가 나도 다른 쪽 모선에 달린 부하는 계속 돌아갑니다. 참고 SLD처럼 MTR 한 대가 대기 중이면 TIE는 평소 붙여(N.C.) 둡니다.',
        'Splitting the bus and joining the halves with a tie breaker lets one half be serviced or faulted while the other keeps running. With one MTR on standby (as in the reference SLD), the tie stays closed (N.C.).'),
      src: L('참고 SLD — HVM-A1/A2 4,000A, TIE N.C.', 'Reference SLD — HVM-A1/A2 4,000 A, tie N.C.'),
      terms: ['BUS', 'TIE', 'VCB'],
    },

    // ───────────── 3. 비상발전기 ─────────────
    {
      id: 'genType', sec: 'gen', hl: ['gen'],
      secLabel: L('비상발전기', 'Generators'),
      title: L('비상발전기를 어디에, 어떤 전압으로 붙일까요?', 'Where and at what voltage do generators connect?'),
      options: [
        { v: 'lv', label: L('저압 분산형 — 모듈마다 380V 발전기', 'LV distributed — a 380 V set per module'), desc: L('모듈별로 발전기 한 대(참고 SLD 옵션 A, 2,500kW). 구조가 단순하지만 대수가 많습니다.', 'One set per module (reference option A, 2,500 kW). Simple, but many sets.') },
        { v: 'hv', label: L('고압 병렬형 — 6.6kV 발전기를 동기 병렬 (요건정의서)', 'MV paralleled — 6.6 kV sets synchronised (requirements)'), desc: L('3,000kW 이상 발전기 여러 대를 한 모선에 묶습니다(참고 SLD 옵션 B).', 'Several ≥3,000 kW sets on one bus (reference option B).'), when: a => a.step !== '1step' },
      ],
      rec: a => (a.step === '1step' ? 'lv' : 'hv'),
      explain: L('정전이 나면 발전기가 약 10초 안에 기동해 전기를 대신 공급합니다(그 사이는 UPS 배터리가 버팀). 고압 병렬형은 큰 발전기들을 동기(SYN)시켜 하나처럼 운전하므로, 한 대가 고장 나도 나머지가 나눠 집니다. 저압 변압기 앞(고압 쪽)에 붙여 변압기 고장도 함께 대비합니다.',
        'On an outage the generators start within about 10 s (the UPS batteries bridge the gap). Paralleled MV sets are synchronised to act as one, so the rest share the load if one trips. Connecting on the MV side, ahead of the LV transformers, also covers transformer failures.'),
      src: L('요건정의서 3.3 — 디젤 3,000kW 이상 N+1, 고압 발전기 LV 변압기 전단 연결', 'Requirements 3.3 — diesel ≥3,000 kW N+1, MV sets ahead of the LV transformers'),
      terms: ['GEN', 'SYN', 'GCP'],
    },
    {
      id: 'genScope', sec: 'gen', hl: ['gen', 'mech'],
      secLabel: L('비상발전기', 'Generators'),
      title: L('발전기가 무엇까지 살릴까요?', 'What should the generators back up?'),
      options: [
        { v: 'it', label: L('IT(서버)만', 'IT only'), desc: L('발전기가 가장 작지만, 냉방이 멈추면 몇 분 안에 서버실이 과열됩니다.', 'Smallest plant, but the hall overheats within minutes without cooling.') },
        { v: 'itcool', label: L('IT + 공조 (요건정의서)', 'IT + cooling (requirements)'), desc: L('서버와 냉동기·항온항습기·펌프를 함께 살립니다. 데이터센터 표준입니다.', 'Servers plus chillers, air handlers and pumps — the data-centre norm.') },
        { v: 'all', label: L('건물 전체', 'Whole building'), desc: L('조명·사무실까지. 발전기가 가장 큽니다.', 'Down to lights and offices; the largest plant.') },
      ],
      rec: () => 'itcool',
      explain: L('서버만 살리고 냉방이 멈추면 서버실 온도가 금방 올라 결국 서버도 꺼집니다. 그래서 IT와 공조를 함께 백업하고, 용량은 (IT + 공조) × 110%로 잡습니다.',
        'Saving only the servers fails once the room heats up, so IT and cooling are backed up together, sized at (IT + cooling) × 110%.'),
      src: L('요건정의서 3.3 — ICT/공조 구분 또는 혼합, 용량 (ICT+공조) × 110%', 'Requirements 3.3 — IT and cooling separate or combined, size (IT + cooling) × 110%'),
      info: (a, c) => L(`발전기 필요 용량 ≈ ${fmt(c.genNeedMW)}MW`, `Generator capacity needed ≈ ${fmt(c.genNeedMW)} MW`),
      terms: ['CRAH'],
    },
    {
      id: 'genRed', sec: 'gen', hl: ['gen'],
      secLabel: L('비상발전기', 'Generators'),
      title: L('발전기 예비는 몇 대 둘까요?', 'How many spare generators?'),
      options: [
        { v: 'n', label: L('N (예비 없음)', 'N (no spare)'), desc: L('딱 필요한 만큼. 한 대가 안 뜨면 부하 일부를 잃습니다.', 'Exactly enough; one failed start drops load.') },
        { v: 'n1', label: L('N+1 (요건정의서)', 'N+1 (requirements)'), desc: L('필요 대수보다 한 대 더. 한 대 고장이나 점검을 견딥니다.', 'One extra set covers a failure or service.') },
        { v: '2n', label: L('2N', '2N'), desc: L('같은 세트를 통째로 한 벌 더. Tier IV급입니다.', 'A whole second set; Tier IV level.') },
      ],
      rec: a => (a.tier === '4' ? '2n' : a.tier === '2' ? 'n' : 'n1'),
      explain: L('N은 "꼭 필요한 대수"입니다. 발전기는 기동 실패가 가장 흔한 고장이라, 한 대가 안 떠도 필요한 전력을 낼 수 있게 N+1로 둡니다.',
        'N is the number you strictly need. A failure to start is the most common generator fault, so N+1 keeps full output if one set will not start.'),
      src: L('요건정의서 3.3 — 비상발전기 N+1', 'Requirements 3.3 — generators N+1'),
      info: (a, c) => L(a.genType === 'hv'
        ? `${fmt(c.genNeedMW)}MW ÷ ${fmt(c.genUnitKW)}kW = N ${c.genN}대 → 총 ${c.genTotal}대`
        : `모듈·공조 계통마다 1대씩 ${fmt(c.genUnitKW)}kW × ${c.genN}대${a.genRed === 'n1' ? ' + 공용 예비 1대' : a.genRed === '2n' ? ' × 2' : ''} → 총 ${c.genTotal}대`,
        a.genType === 'hv'
          ? `${fmt(c.genNeedMW)} MW ÷ ${fmt(c.genUnitKW)} kW = N ${c.genN} → ${c.genTotal} sets`
          : `One ${fmt(c.genUnitKW)} kW set per module / cooling system × ${c.genN}${a.genRed === 'n1' ? ' + 1 shared spare' : a.genRed === '2n' ? ' × 2' : ''} → ${c.genTotal} sets`),
      terms: [],
    },
    {
      id: 'fuel', sec: 'gen', hl: ['gen'],
      secLabel: L('비상발전기', 'Generators'),
      title: L('연료는 몇 시간분을 저장할까요?', 'How many hours of fuel on site?'),
      options: [
        { v: '4', label: L('4시간', '4 hours'), desc: L('최소 수준. 장시간 정전 땐 연료 차량 보급이 필수입니다.', 'Minimum; long outages need tanker deliveries.') },
        { v: '12', label: L('12시간 (요건정의서)', '12 hours (requirements)'), desc: L('반나절. 보급 계약과 함께 쓰는 일반적인 기준입니다.', 'Half a day; the usual figure alongside a supply contract.') },
        { v: '24', label: L('24시간', '24 hours'), desc: L('하루 이상 자립. 탱크가 커집니다.', 'A full day self-sufficient; larger tanks.') },
      ],
      rec: () => '12',
      explain: L('정전이 길어질 때 발전기가 연료 보충 없이 버티는 시간입니다. 디젤은 1kWh당 약 0.25L를 씁니다.',
        'How long the plant runs before it needs refuelling. Diesel burns roughly 0.25 L per kWh.'),
      src: L('요건정의서 3.3 — 연료 12시간, 유류탱크 100,000L × 2', 'Requirements 3.3 — 12 h of fuel, tanks 100,000 L × 2'),
      info: (a, c) => L(`${fmt(c.genNeedMW)}MW × ${a.fuel}시간 × 0.25L ≈ ${fmt(c.fuelKL)}kL`, `${fmt(c.genNeedMW)} MW × ${a.fuel} h × 0.25 L ≈ ${fmt(c.fuelKL)} kL`),
      terms: [],
    },
    {
      id: 'loadTest', sec: 'gen', hl: ['gen'],
      secLabel: L('비상발전기', 'Generators'),
      title: L('발전기 부하시험 설비(로드뱅크)를 둘까요?', 'Add a generator load-test connection (load bank)?'),
      options: [
        { v: 'none', label: L('두지 않음', 'No'), desc: L('시험은 실제 부하로만. 서버에 위험이 따릅니다.', 'Tests only on the live load — a risk to IT.') },
        { v: 'lb', label: L('로드뱅크 접속반 설치', 'Load-bank connection'), desc: L('가짜 부하로 서버와 무관하게 발전기를 시험합니다.', 'Test generators on an artificial load, independent of IT.') },
      ],
      rec: () => 'lb',
      explain: L('발전기는 오래 세워 두면 정작 정전 때 안 뜰 수 있어 정기적으로 부하를 걸어 돌려 봐야 합니다. 로드뱅크 접속반이 있으면 서버를 건드리지 않고 시험할 수 있습니다.',
        'Generators that only sit idle may not start when needed, so they must be run under load regularly. A load-bank connection does that without touching IT.'),
      src: L('영어사전 — LOAD BANK (NFPA: 매달 30분 이상 부하 시험) · 참고 SLD — LOAD TEST', 'Glossary — LOAD BANK (NFPA: monthly 30-min loaded run) · reference SLD — LOAD TEST'),
      terms: ['LOADBANK'],
    },

    // ───────────── 4. 절체 ─────────────
    {
      id: 'xfer', sec: 'xfer', hl: ['xfer'],
      secLabel: L('전원 절체', 'Transfer'),
      title: L('한전 ↔ 발전기 전환 장치는?', 'Utility ↔ generator transfer device?'),
      options: [
        { v: 'ats', label: L('ATS (자동 절체, 순간 정전)', 'ATS (automatic, brief break)'), desc: L('간단하고 싸지만 넘어가는 순간 전기가 잠깐 끊깁니다.', 'Simple and cheap, but the transfer blinks.') },
        { v: 'ctts', label: L('CTTS (무순단 폐쇄 절체) (요건정의서)', 'CTTS (closed transition) (requirements)'), desc: L('잠깐 병렬로 붙였다 넘겨 끊김이 없습니다. 복전·시험 때도 무정전.', 'Parallels briefly, so no break — also on return and tests.') },
        { v: 'interlock', label: L('차단기 인터록 (VCB/ACB 상호 연동)', 'Breaker interlock (VCB/ACB)'), desc: L('차단기 두 개가 동시에 닫히지 않게 묶은 방식. 전환 때 끊깁니다.', 'Two breakers locked so both cannot close; breaks on transfer.') },
      ],
      rec: () => 'ctts',
      explain: L('UPS가 있으니 순간 정전은 버티지만, 전환 때마다 UPS 배터리를 쓰게 됩니다. CTTS는 한전과 발전기를 아주 잠깐 함께 붙였다가 넘기므로, 정전 후 한전이 돌아올 때나 발전기 시험 때도 서버 쪽은 끊김이 없습니다. 공조처럼 덜 민감한 부하는 ATS로 충분합니다.',
        'The UPS rides through a blink, but every transfer drains its batteries. A CTTS briefly parallels the two sources, so returning to utility and testing are seamless too. Less sensitive loads such as cooling are fine on an ATS.'),
      src: L('요건정의서 3.3 — UPS 경로 CTTS, 기타 ATCB · 영어사전 — ATS, CTTS', 'Requirements 3.3 — CTTS on UPS paths, ATCB elsewhere · glossary — ATS, CTTS'),
      terms: ['ATS', 'CTTS'],
    },

    // ───────────── 5. IT 모듈 ─────────────
    {
      id: 'trKVA', sec: 'module', hl: ['module'],
      secLabel: L('IT 전원 모듈', 'IT power modules'),
      title: L('IT 모듈 하나의 변압기 용량은?', 'Transformer size per IT module?'),
      options: [
        { v: '2000', label: L('2,000kVA', '2,000 kVA'), desc: L('모듈이 작아 고장 영향이 작지만 모듈 수가 늘어납니다.', 'Small blast radius, more modules.') },
        { v: '2500', label: L('2,500kVA (참고 SLD)', '2,500 kVA (reference SLD)'), desc: L('참고 SLD의 TR 2.5MVA · UPS 1.63MW 구성입니다.', 'The reference SLD’s TR 2.5 MVA with a 1.63 MW UPS.') },
        { v: '4000', label: L('4,000kVA (요건정의서)', '4,000 kVA (requirements)'), desc: L('층별 대용량. 모듈 수가 줄어 설비가 단순해집니다.', 'Large per-floor units; fewer modules, simpler plant.') },
      ],
      rec: () => '4000',
      explain: L('IT 모듈은 "변압기 1대 + UPS + 분배반"으로 이루어진 전원 한 묶음입니다. 변압기가 크면 모듈 수가 줄어 단순해지지만, 모듈 하나가 멈출 때 영향 범위가 커집니다. 모듈 IT 용량은 변압기의 약 65%로 봅니다(역률·여유·UPS 손실).',
        'An IT module is one bundle of transformer + UPS + distribution. Bigger transformers mean fewer, simpler modules but a larger blast radius per failure. Usable IT per module ≈ 65% of the kVA (power factor, margin, UPS losses).'),
      src: L('요건정의서 3.3 — LV 변압기 4,000kVA 층별, K-factor 몰드형, 전산용/항온항습용 분리 · 참고 SLD — TR 2.5MVA', 'Requirements 3.3 — 4,000 kVA LV units per floor, K-factor cast resin, IT and cooling separate · reference SLD — TR 2.5 MVA'),
      info: (a, c) => L(`모듈 IT 용량 ≈ ${fmt(c.modKW)}kW → IT ${fmt(c.itMW)}MW ÷ ${fmt(c.modKW)}kW = N ${c.nMod}개 모듈`, `Per module ≈ ${fmt(c.modKW)} kW → ${fmt(c.itMW)} MW ÷ ${fmt(c.modKW)} kW = N ${c.nMod} modules`),
      terms: ['TR', 'ACB'],
    },
    {
      id: 'ups', sec: 'ups', hl: ['ups', 'rack'],
      secLabel: L('UPS 이중화', 'UPS redundancy'),
      title: L('UPS를 어떤 이중화로 구성할까요?', 'UPS redundancy scheme?'),
      options: [
        { v: '2n', label: L('2N — A/B 두 계통 (요건정의서)', '2N — A and B systems (requirements)'), desc: L('모든 모듈이 A·B 두 벌. 한 계통 전체가 멈춰도 다른 계통이 100%를 맡습니다.', 'Every module doubled A/B; either side carries 100% alone.') },
        { v: '2n1', label: L('2(N+1)', '2(N+1)'), desc: L('2N의 각 계통 안에 UPS 예비 모듈까지. 가장 튼튼하고 비쌉니다.', '2N with a spare UPS module inside each side; the strongest and dearest.') },
        { v: 'catcher', label: L('N+1C — 블록 예비 (Catcher)', 'N+1C — block redundant (catcher)'), desc: L('평소 N개가 일하고, 예비 블록 1개가 STS로 어느 모듈이든 받아 줍니다(참고 SLD).', 'N blocks work; one catcher block picks up any of them through STS (reference SLD).') },
        { v: 'dr', label: L('분산 이중화 (N+1, 3/4 방식)', 'Distributed redundant (N+1, 3-of-4)'), desc: L('모든 모듈이 조금씩 여유를 두고, 랙마다 서로 다른 두 모듈에서 받습니다.', 'Every module runs part-loaded; each rack takes cords from two different modules.') },
        { v: 'n1', label: L('N+1 — 단일 계통', 'N+1 — single path'), desc: L('UPS 안에 예비 모듈만. 경로가 하나라 Tier II 수준입니다.', 'Spare power modules inside the UPS only; one path, Tier II level.') },
      ],
      rec: a => (a.tier === '2' ? 'n1' : a.tier === '4' ? '2n1' : '2n'),
      explain: L('UPS는 정전 순간을 넘기는 마지막 방패라 이중화 방식이 곧 신뢰도입니다. 2N은 똑같은 계통을 A·B 두 벌로 만들어 한쪽을 통째로 꺼도 됩니다. Catcher는 예비 블록 하나가 여러 모듈을 돌아가며 받아 주므로 설비가 적게 들지만 절체 장치(STS)가 필요합니다.',
        'The UPS is the last line against a blink, so its redundancy scheme is the reliability. 2N builds two identical A/B systems, so one can be switched off entirely. A catcher lets one spare block back up many modules — less equipment, but it needs STS switching.'),
      src: L('요건정의서 3.3 — 모듈러 정적 UPS 2N 또는 2(N+1), 대용량 층별 · 참고 SLD — UPS(N+1) / Catcher UPS(N)', 'Requirements 3.3 — modular static UPS, 2N or 2(N+1), large per floor · reference SLD — UPS (N+1) / catcher UPS (N)'),
      info: (a, c) => L(`모듈 ${c.nModDraw}개${c.sides === 2 ? ' × A/B' : ''}${a.ups === 'catcher' ? ' + Catcher 1개' : ''} · UPS ${fmt(c.upsKW)}kW/대`, `${c.nModDraw} modules${c.sides === 2 ? ' × A/B' : ''}${a.ups === 'catcher' ? ' + 1 catcher' : ''} · UPS ${fmt(c.upsKW)} kW each`),
      terms: ['UPS', 'STS'],
    },
    {
      id: 'battery', sec: 'ups', hl: ['ups'],
      secLabel: L('UPS 배터리', 'UPS battery'),
      title: L('UPS 배터리 종류와 유지 시간은?', 'UPS energy storage and runtime?'),
      options: [
        { v: 'lib10', label: L('리튬이온 10분 (요건정의서)', 'Lithium-ion, 10 min (requirements)'), desc: L('작고 가볍고 수명이 깁니다. 화재 감시용 BMS가 필수입니다.', 'Small, light, long-lived; needs a BMS for fire safety.') },
        { v: 'vrla15', label: L('납축전지(VRLA) 15분', 'Lead-acid (VRLA), 15 min'), desc: L('싸고 검증됐지만 무겁고 자리를 많이 차지합니다.', 'Cheap and proven, but heavy and bulky.') },
        { v: 'fly', label: L('플라이휠 약 30초', 'Flywheel, ~30 s'), desc: L('회전체에 에너지를 저장. 발전기가 반드시 빨리 떠야 합니다.', 'Spinning mass; generators must start fast.') },
      ],
      rec: () => 'lib10',
      explain: L('배터리는 정전 순간부터 발전기가 전기를 낼 때까지(보통 10~30초) 서버를 살려 두는 "다리"입니다. 발전기 기동 실패에 대비해 여유를 두어 5~15분으로 설계합니다.',
        'The battery bridges the outage until generators carry the load (typically 10–30 s). Designs keep 5–15 min in case a generator start fails.'),
      src: L('요건정의서 3.3 — 리튬이온 10분, BMS 적용 · 영어사전 — UPS(플라이휠 언급)', 'Requirements 3.3 — lithium-ion 10 min with BMS · glossary — UPS (mentions flywheels)'),
      terms: ['UPS', 'BMS'],
    },
    {
      id: 'bypass', sec: 'ups', hl: ['ups'],
      secLabel: L('UPS 바이패스', 'UPS bypass'),
      title: L('UPS 외장 바이패스(MBP)를 둘까요?', 'Add an external maintenance bypass (MBP)?'),
      options: [
        { v: 'none', label: L('두지 않음', 'No'), desc: L('UPS 내부 바이패스만. UPS를 통째로 교체·점검하려면 서버를 꺼야 합니다.', 'Internal bypass only; replacing the UPS means an IT shutdown.') },
        { v: 'mbp', label: L('외장 바이패스 설치 (요건정의서)', 'External bypass (requirements)'), desc: L('UPS를 완전히 떼어 내고도 서버에 전기를 넣을 수 있습니다.', 'The UPS can be fully isolated while IT stays powered.') },
      ],
      rec: () => 'mbp',
      explain: L('UPS도 점검하고 고장 납니다. 외장 바이패스는 UPS 옆으로 돌아가는 별도 길이라, UPS를 완전히 꺼서 수리하는 동안에도 서버는 계속 돕니다(그동안은 배터리 보호가 없음).',
        'UPSs need service and do fail. An external bypass is a separate road around the UPS, so IT keeps running while the UPS is fully off (without battery protection meanwhile).'),
      src: L('요건정의서 3.3 — 외장 바이패스 · 영어사전 — MBP', 'Requirements 3.3 — external bypass · glossary — MBP'),
      terms: ['MBP'],
    },

    // ───────────── 6. 랙 배전 ─────────────
    {
      id: 'rackFeed', sec: 'rack', hl: ['rack'],
      secLabel: L('랙 전원', 'Rack power'),
      title: L('서버 랙에 전원을 몇 줄로 넣을까요?', 'How many power feeds per rack?'),
      options: [
        { v: 'dual', label: L('이중 전원 — A/B 2코드 (요건정의서)', 'Dual feed — A/B cords (requirements)'), desc: L('전원공급기가 2개인 서버가 두 계통에서 한 줄씩 받습니다.', 'Dual-PSU servers take one cord from each system.') },
        { v: 'sts', label: L('단일 코드 + STS', 'Single cord + STS'), desc: L('전원이 하나인 장비용. 랙 앞 STS가 두 전원 중 살아 있는 쪽을 골라 줍니다.', 'For single-PSU kit; an STS picks whichever source is alive.') },
        { v: 'single', label: L('단일 전원', 'Single feed'), desc: L('한 줄만. 그 경로의 어느 하나만 고장 나도 서버가 꺼집니다.', 'One cord; any fault on that path drops the server.') },
      ],
      rec: a => (a.ups === 'catcher' ? 'sts' : 'dual'),
      explain: L('이중화는 랙 앞까지 이어져야 의미가 있습니다. 듀얼 전원 서버는 A·B에서 한 줄씩 받아 한쪽이 끊겨도 돌아갑니다. 전원이 하나인 장비는 STS가 약 4ms 만에 다른 쪽으로 넘겨 줍니다. Catcher 방식은 STS가 있어야 예비 블록이 끼어들 수 있습니다.',
        'Redundancy only counts if it reaches the rack. Dual-PSU servers take an A and a B cord and survive either loss; single-PSU kit relies on an STS flipping sources in ~4 ms. A catcher design needs STS so the spare block can step in.'),
      src: L('요건정의서 3.3 — 서버 전원 2N, STS 이중 전원 원칙(불가피 시 랙별 소용량)', 'Requirements 3.3 — server power 2N; STS on dual sources (small per-rack units where unavoidable)'),
      warn: a => (a.ups === 'catcher' && a.rackFeed !== 'sts'
        ? L('Catcher 방식은 예비 블록이 STS를 거쳐 들어오는 구조입니다. STS 없이 이중 코드로 받으면 두 번째 코드를 늘 Catcher가 맡게 되어 예비 블록이 사실상 상시 운전됩니다.',
          'A catcher block normally comes in through STS. With dual cords and no STS, the catcher carries every second cord all the time — it stops being a spare.')
        : (a.ups === 'n1' && a.rackFeed === 'dual'
          ? L('N+1 단일 계통에서는 A·B 코드가 같은 UPS에서 나오므로, 그 UPS 출력 쪽 고장에는 둘 다 꺼집니다.', 'On a single N+1 path both cords come from the same UPS, so a fault on its output drops both.')
          : null)),
      terms: ['STS', 'PDU'],
    },
    {
      id: 'distrib', sec: 'rack', hl: ['rack'],
      secLabel: L('랙 배전', 'Rack distribution'),
      title: L('UPS에서 랙까지 어떻게 나눠 줄까요?', 'How is UPS power distributed to racks?'),
      options: [
        { v: 'busway', label: L('부스웨이 + 플러그인 MCCB (요건정의서)', 'Busway + plug-in MCCB (requirements)'), desc: L('천장 레일에 박스를 꽂아 전원을 뽑습니다. 랙 배치 변경이 쉽습니다.', 'Plug-in boxes on an overhead track; easy to re-arrange racks.') },
        { v: 'pdu', label: L('케이블 + PDU/분전반', 'Cables + PDU / panel'), desc: L('분전반에서 랙마다 케이블을 깝니다. 익숙하지만 바닥·트레이가 복잡해집니다.', 'A cable per rack from a panel; familiar but crowded trays.') },
      ],
      rec: () => 'busway',
      explain: L('UPS 출력을 랙 하나하나로 나눠 주는 마지막 단계입니다. 부스웨이는 공사가 빠르고 랙을 옮길 때 박스만 옮기면 됩니다. 누전차단기(ELB)는 오동작 우려로 서버 전원에는 쓰지 않습니다.',
        'The last step that splits UPS output rack by rack. Busway installs fast and moves with the racks. Earth-leakage breakers are avoided on IT feeds because of nuisance trips.'),
      src: L('요건정의서 3.3 — Bus duct 배선, 분전반 부스웨이 플러그인/MCCB · 영어사전 — ELB', 'Requirements 3.3 — bus duct, plug-in busway / MCCB panels · glossary — ELB'),
      terms: ['BUSWAY', 'MCCB'],
    },

    // ───────────── 7. 공조·건물 ─────────────
    {
      id: 'mech', sec: 'mech', hl: ['mech'],
      secLabel: L('공조 전원', 'Cooling power'),
      title: L('냉동기·항온항습기·펌프(공조) 전원은?', 'Power for chillers, air handlers and pumps?'),
      options: [
        { v: 'shared', label: L('IT 변압기에서 함께', 'Shared with IT transformers'), desc: L('설비가 적지만 모터 기동 전류가 서버 전원을 흔들 수 있습니다.', 'Less equipment, but motor starts disturb IT power.') },
        { v: 'sep', label: L('공조 전용 변압기 (UT)', 'Dedicated cooling (UT) transformers'), desc: L('공조만 따로 받는 변압기. 서버 전원 품질을 지킵니다.', 'Separate transformers keep IT power clean.') },
        { v: 'sepups', label: L('공조 전용 변압기 + 공조 UPS (요건정의서)', 'Dedicated UT + cooling UPS (requirements)'), desc: L('항온항습기 팬·냉수 펌프만 작은 UPS로 받쳐 냉기가 끊기지 않게 합니다.', 'A small UPS keeps air-handler fans and chilled-water pumps running.') },
      ],
      rec: () => 'sepups',
      explain: L('냉동기·펌프 같은 큰 모터는 기동할 때 큰 전류와 고조파를 만들어 서버 전원 품질을 흔들 수 있어 변압기를 나눕니다. 또 발전기가 뜨기 전 10초 동안 팬과 펌프가 멈추면 서버실 온도가 급히 오르므로, 이 둘만 UPS로 받칩니다(냉동기는 축냉조로 10분 버팀).',
        'Large chiller and pump motors draw big starting currents and harmonics, so they get their own transformers. And because the hall heats fast if fans and pumps stop for the ~10 s before generators, those two ride on a UPS (chillers are covered by 10 min of thermal storage).'),
      src: L('요건정의서 3.3 — 전산용/항온항습용 변압기 분리, CRAH 팬·냉수 펌프 단일 UPS + ATS · 3.4 — 축냉 10분', 'Requirements 3.3 — separate IT and cooling transformers, CRAH fans and chilled-water pumps on a single UPS + ATS · 3.4 — 10 min thermal storage'),
      info: (a, c) => L(`공조 부하 ≈ IT × 0.45 = ${fmt(c.mechMW)}MW → TR-UT ${fmt(c.utKVA)}kVA × ${c.utN}대`, `Cooling ≈ IT × 0.45 = ${fmt(c.mechMW)} MW → TR-UT ${fmt(c.utKVA)} kVA × ${c.utN}`),
      terms: ['CRAH', 'ATS'],
    },
  ];

  window.SLD_WIZ = { questions: Q, gloss: GLOSS };
})();
