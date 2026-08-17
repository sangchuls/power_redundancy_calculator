  // ===== i18n =====
  let currentLang = localStorage.getItem('prc_lang') || 'ko';

  const I18N = {
    ko: {
      pageTitle: '전력계통 이중화 방식별 변압기 대수 계산기',
      subtitle: '수전용량·IT용량부터 데이터홀 분할, 데이터홀별 이중화 방식까지 한번에 계획하세요.',
      h0_title: '전체 용량 계획', h0_desc: '수전 · IT용량 → PUE 자동계산 → 데이터홀 개수 분할(하이브리드 가능)',
      label_utility: '수전용량 (MW)', label_it: 'IT용량 (MW)', label_pue: 'PUE (수전 ÷ IT, 자동계산)',
      label_hallCount: '데이터홀 개수', label_hallCapacity: '홀당 용량 (IT ÷ 개수, 자동계산)',
      label_maxSetCapacity: '권장 최대용량 (MW, 경고용)',
      hint_maxSetCapacity: '변압기 정격×안전율×3(N) 기준 — ①번 값에 따라 자동 재계산, 초과 시 표에 경고만 표시',
      btn_autoSplit: '데이터홀 개수로 균등 자동 분할', btn_addSet: '+ 데이터홀 수동 추가',
      th_hall: '데이터홀', th_itCap: 'IT용량 (MW)', th_topo: '이중화 방식', th_perRoomTx: '전기실당 변압기',
      th_totalModules: '총 모듈수', th_totalTx: '총 변압기', th_normal: '평상시', th_emergency: '비상시',
      h1_title: '부하 · 설비 입력값', label_load: '데이터홀 총부하 (MW)', label_loadSync: '⓪번 홀당 용량과 연동',
      hint_loadSync: ' — 개별 데이터홀을 직접 분석하려면 체크 해제 후 값 입력, 또는 아래 데이터홀 표의 "상세보기" 사용.',
      label_rating: '변압기 정격용량 (kVA)', option_ratingPresetDefault: '기성 용량 빠른선택 ▾',
      warn_ratingCap: '⚠ 상한 4,000kVA 초과 — 표준 사양을 벗어난 값입니다 (회색 표시)',
      label_pf: '역률 (PF, cosθ)', hint_pf: 'P(kW) = S(kVA) × PF — 고역률 UPS 기준 0.99~1.0',
      label_upsEff: 'UPS 효율', hint_upsEff: 'AC-DC-AC 변환 손실 반영', label_safety: '안전율 (설계 부하율)',
      h2_title: '이중화 방식 선택', tag_distributed: '분산이중화', tag_standby: '대기(캐쳐)', tag_full: '완전이중화',
      custom_toggle: '▸ 직접 N / C 값 입력 (커스텀)', custom_toggle_open: '▾ 직접 N / C 값 입력 (커스텀)',
      label_totalModules: '총 모듈(전기실) 수 (N + C)',
      h3_title: '계산 결과', step_effCap_label: '유효용량', step_effCap_formula: '정격 × 안전율',
      h4_title: '구성 다이어그램', mode_normal: '평상시', mode_emergency: '비상시',
      hint_diagram4: '휠로 확대/축소 · 드래그로 이동 · 블럭 더블클릭: 상실 지정 / 빈 곳 더블클릭: 평상시 복귀',
      btn_zoomReset: '리셋',
      h5_title: '조합형 분배 배치도', h5_desc: '전기실 M개 → IT존(2개씩 조합 이중급전) — 예: 전기실 4개(A~D) → IT존 6개',
      h5_explain: '<b>조합형 분배(Combinatorial N choose 2)</b> — 전기실 M개가 서로 2개씩 짝을 지어 IT존에 이중급전. 각 전기실은 (M-1)개 IT존에 관여하며, 1개 전기실 상실 시 그 파트너 전기실이 해당 존의 전체 부하를 단독으로 흡수. 총 IT존 수 = M×(M-1)÷2 (예: M=4 → 6존).',
      label_combM: '전기실 개수 (M)', hint_combM: '3~6 지원 (조합 수 = M×(M-1)÷2)',
      label_combLoad: '이 배치도에 적용할 총 IT부하 (MW)', label_combSync: '①번 데이터홀 IT부하와 연동',
      hint_combSync: ' — 이 배치도가 데이터홀 전체를 대표할 때 사용(⓪번 홀당 용량 → ①번 총부하 → 이 값까지 자동 연계). 층/동 단위 일부만 담당하면 체크 해제 후 직접 입력.',
      label_combFailRoom: '비상시 상실 전기실',
      hint_diagram5: '휠로 확대/축소 · 드래그로 이동 · 전기실 더블클릭: 상실 지정 / 빈 곳 더블클릭: 평상시 복귀',
      btn_combApply: '↑ 선택 전기실 부하를 ①~④ 계산기 총부하에 적용',
      footnote_comb: '전기실 1개 안의 변압기 대수는 이 배치도가 아니라 ①~④번 계산기에서 산정합니다. 조합형 배치로 이미 전기실 레벨 이중화가 확보된 경우, 전기실 내부는 통상 순수 N(캐쳐 없음, C=0)으로 계산해 과설계를 피합니다 — 전기실 내부까지 추가 이중화를 원하시면 C≥1로 설정하세요.',
      refTable_title: '참고 예시 (정격 4,000kW · 안전율 0.75 기준)',
      refTable_th_topo: '방식', refTable_th_load: '총부하', refTable_th_step1: '①모듈당 설계부하',
      refTable_th_step2: '②모듈당 변압기', refTable_th_step3: '③총 대수',
      refTable_row1: '2oo3 (분산)', refTable_row2: '3oo4 (분산)', refTable_row3: 'N+1 (대기, N=3)',
      refTable_row4: 'N+2C (대기, N=3)', refTable_row5: '2N (완전이중화)',
      unit_3units: '3대', unit_4units: '4대', unit_8units: '8대', unit_12units: '12대', unit_15units: '15대', unit_16units: '16대',
      globalFootnote: '총 변압기 대수 = ⌈ (①모듈당 설계부하) ÷ (변압기 정격 × 안전율) ⌉ × (N + C) &nbsp;|&nbsp; 분산이중화: ①=총부하÷N (전 모듈 동시가동, C개 모듈 상실까지 무스위칭 대응) &nbsp;|&nbsp; 대기이중화: ①=총부하÷N (duty N개가 분담, C개는 평상시 idle 대기) &nbsp;|&nbsp; 완전이중화: ①=총부하 (각 트레인이 단독으로 전체부하 100% 커버)',
      export_title: '저장', export_desc: '현재 입력값·계산결과·다이어그램을 문서로 저장합니다.',
      export_pdf: 'PDF로 저장', export_word: 'Word로 저장', export_ppt: 'PPT로 저장',
      export_generating: '생성 중…', export_done: '저장 완료', export_fail: '생성 실패 — 콘솔을 확인하세요',

      effFormula_bold: '최종 가용 유효전력(kW) = 변압기용량(kVA) × 역률 × 안전율 × UPS효율',
      effFormula_line: '= {rating} kVA × {pf} × {safety} × {ups} = {eff} kW (종합 계수 {pct}%)',
      kva_common: ' (많이 사용)', kva_overcap: ' (상한 초과)',
      ratingRecommend: '적정 정격용량 추천: {rec} kVA (변압기 1대당 부하 {load}kW → 종합계수(역률×안전율×UPS효율) 대비 부하율 {pct}%, 목표 100%에 근접)',

      topo_distributed_explain: '<b>N out of N+C (분산이중화)</b> — 총 N+C개 모듈이 상시 병렬로 부하를 나눠 분담(평상시 부하율 낮음). C개 모듈이 동시에 상실되어도 별도 스위칭 없이 나머지 N개가 즉시 전체 부하를 흡수. (예: 2oo3, 3oo4, 4oo5)',
      topo_distributed_labelN: 'N (상실 후에도 전체부하를 커버해야 하는 모듈 수)', topo_distributed_labelC: 'C (동시 상실을 견뎌야 하는 모듈 수)',
      topo_distributed_step1Label: '① 모듈당 설계부하', topo_distributed_step1Formula: '총부하 ÷ N',
      topo_distributed_step2Label: '② 모듈당 변압기', topo_distributed_resultLabel: '③ 총 변압기 대수 ( = ② × (N+C) )',
      topo_distributed_flowDesc: '(전 모듈 상시가동·부하분산)',
      topo_standby_explain: '<b>N + C (대기/캐쳐 이중화)</b> — N개 모듈이 평상시 부하를 100% 분담해 가동하고, C개 모듈은 평상시 idle 상태로 대기하다가 duty 모듈 고장 시 투입(스위칭 발생).',
      topo_standby_labelN: 'N (평상시 가동하는 duty 모듈 수)', topo_standby_labelC: 'C (평상시 대기하는 캐쳐/예비 모듈 수)',
      topo_standby_step1Label: '① duty 모듈당 부하', topo_standby_step1Formula: '총부하 ÷ N',
      topo_standby_step2Label: '② 모듈당 변압기', topo_standby_resultLabel: '③ 총 변압기 대수 ( = ② × (N+C) )',
      topo_standby_flowDesc: '(duty N개 100% 가동 + 캐쳐 C개 대기)',
      topo_full_explain: '<b>2N / 2N+1 (완전이중화)</b> — 각 트레인(전원 계통 전체)이 독립적으로 총부하 100%를 커버할 수 있도록 설계. N=기준 트레인(통상 1), C=추가 독립 트레인 수. (예: 2N=N1,C1 / 2N+1=N1,C2)',
      topo_full_labelN: 'N (기준 트레인 수, 통상 1)', topo_full_labelC: 'C (추가 독립 트레인 수)',
      topo_full_step1Label: '① 트레인당 설계부하', topo_full_step1Formula: '총부하 (트레인 1개가 100% 단독 커버)',
      topo_full_step2Label: '② 트레인당 변압기', topo_full_resultLabel: '③ 총 변압기 대수 ( = ② × (N+C) )',
      topo_full_flowDesc: '(트레인마다 총부하 100% 독립 커버)',

      input_check_msg: '입력값을 확인해주세요',
      sub_distributed: '모듈당 {units}대 × 전체 {M}개 모듈(상시가동) · 평상시 부하율 {normal}% / {C}개 모듈 동시상실 시 {emergency}%',
      warn_distributed: '⚠ 상실 시 부하율이 {pct}%로 100%를 초과합니다 — 대수를 늘리거나 안전율을 재검토하세요.',
      sub_standby: 'duty 모듈당 {units}대 × duty {N}개(가동) + 캐쳐 {C}개(대기) = 총 {M}개 모듈 · duty 부하율 {pct}% / 캐쳐 평상시 0%(대기)',
      warn_standby: '⚠ duty 모듈 부하율이 {pct}%로 100%를 초과합니다 — 대수를 늘리세요.',
      sub_full: '트레인당 {units}대 × 트레인 {M}개(모두 100% 커버 가능) · 트레인당 부하율 {pct}%',

      design_caption: '설계기준 — ① 모듈당 설계부하 {mw}MW · 유효용량(대당) {eff}kW · ② 필요대수 {units}대/모듈',
      hall_label: '데이터홀', hall_emergency_suffix: ' (전체 부하 유지)',
      module_label_train: '트레인 {n}', module_label_catcher: '캐쳐 {n}', module_label_duty: 'Duty {n}', module_label_room: '전기실 {n}',
      state_offline: '⨯ 상실(OFFLINE)', state_idle: '평상시 대기(idle)', state_engaged: '투입(가동중)', state_active: '가동중',
      count_offline: '변압기 {n}대 (정지)', count_active: '{n}대 · {kw}kW',
      design_ref_line: '설계 {mw}MW · 유효 {eff}kW',
      total_normal: '총 {m}개 모듈 × 모듈당 {units}대 = 총 변압기 {total}대  (정격 {rating}kW, 유효 {eff}kW)',
      total_emergency: '모듈 {m}개 중 {active}개 가동으로 전체부하 대응 · 변압기 총 {total}대 중 {activeTx}대 가동',
      overload_warn: '⚠ 상실 {n}개 모듈에 비해 캐쳐가 {c}개뿐이라 {diff}개 모듈의 부하를 흡수하지 못합니다.',
      legend_tx_note: '변압기(T) · 하단 %는 변압기별 운전부하율 (색상은 소속 모듈과 동일)',
      diagramDesc: '({topo} · {mode} 구성)',
      topoLabel_distributed: '분산이중화', topoLabel_standby: '대기이중화', topoLabel_full: '완전이중화',

      room_label: '전기실 {letter}', room_offline: '⨯ 상실', zone_it_label: 'IT {mw}MW',
      comb_legend_room: '전기실 {letter}{suffix}', comb_legend_offline_suffix: ' (상실)',
      comb_summary_normal: '전기실 {m}개 × 평상시 부하 {perRoom}MW = 총 IT부하 {total}MW (IT존 {zones}개 × {zoneLoad}MW)',
      comb_summary_emergency: '전기실 {room} 상실 시 나머지 {rest}개 전기실이 각 {newLoad}MW로 상승 (평상시 {oldLoad}MW 대비 +{diff}MW)',
      combApplyHint: '전기실 1개 부하 {mw}MW를 ①번 총부하에 적용했습니다. 이제 ②번에서 전기실 내부 이중화 방식(권장: 대기이중화, C=0)을 선택하세요.',

      hall_row: '데이터홀 {n}', overcap_row: '최대({max}MW) 초과', btn_detail: '상세보기', btn_delete: '삭제',
      summary_hallCount: '데이터홀 수', summary_sumLoad: '데이터홀 IT용량 합계', summary_target: '목표 IT용량',
      summary_diff: '차이', summary_sumUnits: '전체 변압기 합계',
      unit_gae: '{n}개', unit_dae: '{n}대',
      preset_2oo3: '2oo3 분산', preset_3oo4: '3oo4 분산', preset_4oo5: '4oo5 분산',
      preset_n1: 'N+1 대기', preset_n2c: 'N+2C 대기', preset_2n: '2N 완전', preset_2n1: '2N+1 완전',
    },
    en: {
      pageTitle: 'Transformer Redundancy Sizing Calculator',
      subtitle: 'Plan everything from utility/IT capacity to data hall splitting and per-hall redundancy in one place.',
      h0_title: 'Overall capacity plan', h0_desc: 'Utility · IT capacity → auto PUE → data hall count split (hybrid supported)',
      label_utility: 'Utility capacity (MW)', label_it: 'IT capacity (MW)', label_pue: 'PUE (utility ÷ IT, auto)',
      label_hallCount: 'Data hall count', label_hallCapacity: 'Per-hall capacity (IT ÷ count, auto)',
      label_maxSetCapacity: 'Recommended max capacity (MW, warning)',
      hint_maxSetCapacity: 'Based on transformer rating × safety factor × 3(N) — auto-recalculated from ①, table just warns when exceeded',
      btn_autoSplit: 'Auto-split evenly by hall count', btn_addSet: '+ Add hall manually',
      th_hall: 'Data hall', th_itCap: 'IT capacity (MW)', th_topo: 'Redundancy', th_perRoomTx: 'Tx per room',
      th_totalModules: 'Total modules', th_totalTx: 'Total tx', th_normal: 'Normal', th_emergency: 'Emergency',
      h1_title: 'Load & equipment inputs', label_load: 'Data hall total load (MW)', label_loadSync: 'Synced with ⓪ per-hall capacity',
      hint_loadSync: ' — Uncheck to analyze one hall directly, or use "Details" in the table below.',
      label_rating: 'Transformer rating (kVA)', option_ratingPresetDefault: 'Quick-select standard size ▾',
      warn_ratingCap: '⚠ Exceeds the 4,000kVA cap — off-standard value (shown in gray)',
      label_pf: 'Power factor (PF, cosθ)', hint_pf: 'P(kW) = S(kVA) × PF — 0.99~1.0 for high-PF UPS',
      label_upsEff: 'UPS efficiency', hint_upsEff: 'Accounts for AC-DC-AC conversion loss', label_safety: 'Safety factor (design load ratio)',
      h2_title: 'Redundancy topology', tag_distributed: 'Distributed', tag_standby: 'Standby (catcher)', tag_full: 'Full',
      custom_toggle: '▸ Enter N / C directly (custom)', custom_toggle_open: '▾ Enter N / C directly (custom)',
      label_totalModules: 'Total modules/rooms (N + C)',
      h3_title: 'Calculation result', step_effCap_label: 'Effective capacity', step_effCap_formula: 'Rating × safety factor',
      h4_title: 'Configuration diagram', mode_normal: 'Normal', mode_emergency: 'Emergency',
      hint_diagram4: 'Wheel to zoom · drag to pan · double-click a block: mark lost / double-click empty space: back to normal',
      btn_zoomReset: 'Reset',
      h5_title: 'Combinatorial distribution layout', h5_desc: 'M rooms → IT zones (dual-fed in pairs) — e.g. 4 rooms (A~D) → 6 zones',
      h5_explain: '<b>Combinatorial distribution (N choose 2)</b> — M electrical rooms pair up two-by-two to dual-feed IT zones. Each room participates in (M-1) zones; if one room is lost, its partner room alone absorbs that zone\'s full load. Total zones = M×(M-1)÷2 (e.g. M=4 → 6 zones).',
      label_combM: 'Room count (M)', hint_combM: 'Supports 3~6 (combinations = M×(M-1)÷2)',
      label_combLoad: 'Total IT load applied to this layout (MW)', label_combSync: 'Synced with ① data hall IT load',
      hint_combSync: ' — Use when this layout represents the whole data hall (⓪ per-hall capacity → ① total load → this value, auto-chained). Uncheck and enter directly if it only covers part of a floor/building.',
      label_combFailRoom: 'Room lost in emergency',
      hint_diagram5: 'Wheel to zoom · drag to pan · double-click a room: mark lost / double-click empty space: back to normal',
      btn_combApply: '↑ Apply selected room load to the ①~④ calculator total load',
      footnote_comb: 'The transformer count inside one room is sized in the ①~④ calculator, not this layout. When room-level redundancy is already secured by the combinatorial layout, rooms are typically sized as pure N (no catcher, C=0) to avoid over-design — set C≥1 if you also want redundancy inside each room.',
      refTable_title: 'Reference examples (4,000kW rating · 0.75 safety factor)',
      refTable_th_topo: 'Scheme', refTable_th_load: 'Total load', refTable_th_step1: '① Design load / module',
      refTable_th_step2: '② Tx / module', refTable_th_step3: '③ Total units',
      refTable_row1: '2oo3 (distributed)', refTable_row2: '3oo4 (distributed)', refTable_row3: 'N+1 (standby, N=3)',
      refTable_row4: 'N+2C (standby, N=3)', refTable_row5: '2N (full redundancy)',
      unit_3units: '3', unit_4units: '4', unit_8units: '8', unit_12units: '12', unit_15units: '15', unit_16units: '16',
      globalFootnote: 'Total transformer units = ⌈ (① design load / module) ÷ (rating × safety factor) ⌉ × (N + C) &nbsp;|&nbsp; Distributed: ①=load÷N (all modules run simultaneously, absorbs up to C simultaneous losses without switching) &nbsp;|&nbsp; Standby: ①=load÷N (N duty modules share it, C stay idle) &nbsp;|&nbsp; Full: ①=load (each train independently covers 100%)',
      export_title: 'Save', export_desc: 'Save the current inputs, results, and diagrams as a document.',
      export_pdf: 'Save as PDF', export_word: 'Save as Word', export_ppt: 'Save as PPT',
      export_generating: 'Generating…', export_done: 'Saved', export_fail: 'Failed to generate — check console',

      effFormula_bold: 'Final available effective power (kW) = transformer rating (kVA) × PF × safety factor × UPS efficiency',
      effFormula_line: '= {rating} kVA × {pf} × {safety} × {ups} = {eff} kW (combined factor {pct}%)',
      kva_common: ' (common)', kva_overcap: ' (exceeds cap)',
      ratingRecommend: 'Suggested rating: {rec} kVA (load per transformer {load}kW → utilization vs. combined factor (PF×safety×UPS eff) {pct}%, close to the 100% target)',

      topo_distributed_explain: '<b>N out of N+C (distributed)</b> — all N+C modules run in parallel at all times, sharing the load (low utilization in normal mode). If C modules fail simultaneously, the remaining N absorb the full load instantly with no switching. (e.g. 2oo3, 3oo4, 4oo5)',
      topo_distributed_labelN: 'N (modules that must cover full load after a loss)', topo_distributed_labelC: 'C (simultaneous losses to tolerate)',
      topo_distributed_step1Label: '① Design load / module', topo_distributed_step1Formula: 'Total load ÷ N',
      topo_distributed_step2Label: '② Transformers / module', topo_distributed_resultLabel: '③ Total transformer units ( = ② × (N+C) )',
      topo_distributed_flowDesc: '(all modules always on, load shared)',
      topo_standby_explain: '<b>N + C (standby / catcher)</b> — N modules run at all times carrying 100% of the load; C modules stay idle in normal mode and engage on a duty-module failure (switching occurs).',
      topo_standby_labelN: 'N (duty modules running in normal mode)', topo_standby_labelC: 'C (catcher/standby modules idle in normal mode)',
      topo_standby_step1Label: '① Load / duty module', topo_standby_step1Formula: 'Total load ÷ N',
      topo_standby_step2Label: '② Transformers / module', topo_standby_resultLabel: '③ Total transformer units ( = ② × (N+C) )',
      topo_standby_flowDesc: '(N duty at 100% + C catchers standing by)',
      topo_full_explain: '<b>2N / 2N+1 (full redundancy)</b> — each train (a whole independent power chain) is designed to independently cover 100% of the total load. N = baseline trains (usually 1), C = extra independent trains. (e.g. 2N = N1,C1 / 2N+1 = N1,C2)',
      topo_full_labelN: 'N (baseline train count, usually 1)', topo_full_labelC: 'C (extra independent trains)',
      topo_full_step1Label: '① Design load / train', topo_full_step1Formula: 'Total load (one train covers 100% alone)',
      topo_full_step2Label: '② Transformers / train', topo_full_resultLabel: '③ Total transformer units ( = ② × (N+C) )',
      topo_full_flowDesc: '(every train independently covers 100% of load)',

      input_check_msg: 'Please check your inputs',
      sub_distributed: '{units} tx/module × {M} modules total (always on) · normal utilization {normal}% / {emergency}% if {C} modules are lost simultaneously',
      warn_distributed: '⚠ Utilization after loss is {pct}%, exceeding 100% — add more units or review the safety factor.',
      sub_standby: '{units} tx/duty module × {N} duty (running) + {C} catcher (standby) = {M} modules total · duty utilization {pct}% / catchers 0% in normal mode (standby)',
      warn_standby: '⚠ Duty module utilization is {pct}%, exceeding 100% — add more units.',
      sub_full: '{units} tx/train × {M} trains (each can cover 100% alone) · per-train utilization {pct}%',

      design_caption: 'Design basis — ① design load/module {mw}MW · effective capacity/unit {eff}kW · ② required {units}/module',
      hall_label: 'Data hall', hall_emergency_suffix: ' (full load maintained)',
      module_label_train: 'Train {n}', module_label_catcher: 'Catcher {n}', module_label_duty: 'Duty {n}', module_label_room: 'Room {n}',
      state_offline: '⨯ Lost (OFFLINE)', state_idle: 'Standing by (idle)', state_engaged: 'Engaged (running)', state_active: 'Running',
      count_offline: '{n} tx (stopped)', count_active: '{n} tx · {kw}kW',
      design_ref_line: 'Design {mw}MW · effective {eff}kW',
      total_normal: '{m} modules × {units} tx/module = {total} transformers total  (rating {rating}kW, effective {eff}kW)',
      total_emergency: '{active} of {m} modules running to cover full load · {activeTx} of {total} transformers running',
      overload_warn: '⚠ {n} modules lost but only {c} catchers available — {diff} module(s) worth of load cannot be absorbed.',
      legend_tx_note: 'Transformer (T) · % below is per-transformer utilization (color matches its module)',
      diagramDesc: '({topo} · {mode})',
      topoLabel_distributed: 'Distributed', topoLabel_standby: 'Standby', topoLabel_full: 'Full',

      room_label: 'Room {letter}', room_offline: '⨯ Lost', zone_it_label: 'IT {mw}MW',
      comb_legend_room: 'Room {letter}{suffix}', comb_legend_offline_suffix: ' (lost)',
      comb_summary_normal: '{m} rooms × normal load {perRoom}MW = total IT load {total}MW ({zones} zones × {zoneLoad}MW)',
      comb_summary_emergency: 'If room {room} is lost, the other {rest} rooms rise to {newLoad}MW each (+{diff}MW vs. {oldLoad}MW normal)',
      combApplyHint: 'Applied the single-room load {mw}MW to the ① total load. Now pick a room-internal redundancy scheme in ② (recommended: standby, C=0).',

      hall_row: 'Data hall {n}', overcap_row: 'Exceeds max ({max}MW)', btn_detail: 'Details', btn_delete: 'Delete',
      summary_hallCount: 'Data halls', summary_sumLoad: 'Sum of hall IT capacity', summary_target: 'Target IT capacity',
      summary_diff: 'Difference', summary_sumUnits: 'Total transformers',
      unit_gae: '{n}', unit_dae: '{n}',
      preset_2oo3: '2oo3 distributed', preset_3oo4: '3oo4 distributed', preset_4oo5: '4oo5 distributed',
      preset_n1: 'N+1 standby', preset_n2c: 'N+2C standby', preset_2n: '2N full', preset_2n1: '2N+1 full',
    },
  };

  function t(key, vars) {
    let str = (I18N[currentLang] && I18N[currentLang][key] != null) ? I18N[currentLang][key] : (I18N.ko[key] != null ? I18N.ko[key] : key);
    if (vars) Object.keys(vars).forEach(k => { str = str.split('{' + k + '}').join(vars[k]); });
    return str;
  }

  function applyStaticTranslations() {
    document.documentElement.lang = currentLang;
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      const val = t(key);
      if (el.tagName === 'TITLE' || (!val.includes('<') )) {
        el.textContent = val;
      } else {
        el.innerHTML = val;
      }
    });
  }

  function setLang(lang) {
    currentLang = lang;
    localStorage.setItem('prc_lang', lang);
    document.getElementById('langKoBtn').classList.toggle('active', lang === 'ko');
    document.getElementById('langEnBtn').classList.toggle('active', lang === 'en');
    applyStaticTranslations();
    applyTopoMeta();
    refreshRatingPresetOptions();
    updateRatingCapStyle();
    refreshFailRoomOptions();
    calculate();
    renderCombDiagram();
    renderSets();
  }

  document.getElementById('langKoBtn').addEventListener('click', () => setLang('ko'));
  document.getElementById('langEnBtn').addEventListener('click', () => setLang('en'));
  applyStaticTranslations();
  document.getElementById('langKoBtn').classList.toggle('active', currentLang === 'ko');
  document.getElementById('langEnBtn').classList.toggle('active', currentLang === 'en');

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
    const effTag = `<b style="color:var(--primary)">__EFF__</b>`;
    const line = t('effFormula_line', { rating: fmtN(rating), pf, safety, ups: upsEff, eff: effTag, pct: fmtN(combined * 100) })
      .replace('__EFF__', fmtN(eff));
    note.innerHTML = `<b>${t('effFormula_bold')}</b><br>` + line;
  }

  // Standard commercial transformer capacities (kVA) — general reference list
  const STANDARD_KW_SIZES = [300, 500, 750, 1000, 1250, 1500, 2000, 2500, 3000, 3750, 4000, 5000, 6000, 6300, 7500, 8000, 10000, 12500, 15000, 20000];
  // Most commonly specified sizes in data center practice — shown first / marked
  const COMMON_KVA_SIZES = new Set([1500, 2000, 2500, 3000, 4000, 5000, 6300]);
  // Upper limit for transformer rated capacity — sizes above this are grayed out / flagged as non-standard
  const RATING_MAX_KVA = 4000;

  const ratingPresetSelect = document.getElementById('ratingPreset');
  const ratingCapWarn = document.getElementById('ratingCapWarn');
  function refreshRatingPresetOptions() {
    const prevValue = ratingPresetSelect.value;
    ratingPresetSelect.innerHTML = '';
    const defaultOpt = document.createElement('option');
    defaultOpt.value = '';
    defaultOpt.setAttribute('data-i18n', 'option_ratingPresetDefault');
    defaultOpt.textContent = t('option_ratingPresetDefault');
    ratingPresetSelect.appendChild(defaultOpt);
    STANDARD_KW_SIZES.forEach(size => {
      const opt = document.createElement('option');
      opt.value = size;
      const overCap = size > RATING_MAX_KVA;
      opt.textContent = fmtN(size) + ' kVA' + (COMMON_KVA_SIZES.has(size) ? t('kva_common') : '') + (overCap ? t('kva_overcap') : '');
      if (overCap) {
        opt.disabled = true;
        opt.style.color = '#B5B5B5';
      }
      ratingPresetSelect.appendChild(opt);
    });
    ratingPresetSelect.value = prevValue;
  }
  refreshRatingPresetOptions();
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
    hint.textContent = t('ratingRecommend', { rec: fmtN(rec), load: fmtN(perTxLoadKW), pct: fmtN(utilPct) });
  }

  let currentTopo = 'distributed';

  function getTopoMeta(topo) {
    return {
      explain: t(`topo_${topo}_explain`),
      labelN: t(`topo_${topo}_labelN`),
      labelC: t(`topo_${topo}_labelC`),
      step1Label: t(`topo_${topo}_step1Label`),
      step1Formula: t(`topo_${topo}_step1Formula`),
      step2Label: t(`topo_${topo}_step2Label`),
      resultLabel: t(`topo_${topo}_resultLabel`),
      flowDesc: t(`topo_${topo}_flowDesc`),
    };
  }

  function fmt(n, digits = 1) {
    if (!isFinite(n)) return '-';
    return n.toLocaleString('ko-KR', { maximumFractionDigits: digits, minimumFractionDigits: 0 });
  }

  function applyTopoMeta() {
    const meta = getTopoMeta(currentTopo);
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
      document.getElementById('resultSub').textContent = t('input_check_msg');
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
    document.getElementById('step2').textContent = t('unit_dae', { n: perModuleUnits });
    document.getElementById('resultTotal').textContent = t('unit_dae', { n: totalUnits });

    let sub = '';
    if (currentTopo === 'distributed') {
      const normalPct = (loadKW / M) / (perModuleUnits * effectiveCap) * 100;
      const emergencyPct = (loadKW / N) / (perModuleUnits * effectiveCap) * 100;
      sub = t('sub_distributed', { units: perModuleUnits, M, normal: fmt(normalPct), C, emergency: fmt(emergencyPct) });
      if (emergencyPct > 100) {
        warnBox.textContent = t('warn_distributed', { pct: fmt(emergencyPct) });
        warnBox.style.display = 'block';
      }
    } else if (currentTopo === 'standby') {
      const dutyPct = (loadKW / N) / (perModuleUnits * effectiveCap) * 100;
      sub = t('sub_standby', { units: perModuleUnits, N, C, M, pct: fmt(dutyPct) });
      if (dutyPct > 100) {
        warnBox.textContent = t('warn_standby', { pct: fmt(dutyPct) });
        warnBox.style.display = 'block';
      }
    } else if (currentTopo === 'full') {
      const pct = loadKW / (perModuleUnits * effectiveCap) * 100;
      sub = t('sub_full', { units: perModuleUnits, M, pct: fmt(pct) });
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
  const ROOM_COLORS = ['#6F5FBF', '#0F6E56', '#993C1D', '#185FA5', '#993556', '#3B6D11', '#854F0B', '#A32D2D'];
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
          overloadWarning = t('overload_warn', { n: failedDutyIdx.length, c: C, diff: failedDutyIdx.length - C });
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
    const moduleH = 144 + txRowsNeeded * 46; // +14 for the per-module 설계부하/유효용량 reference line, +12/row for the per-tx rating line
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
    designCaption.textContent = t('design_caption', { mw: fmtN(designLoadKW / 1000), eff: fmtN(effectiveCap), units: perModuleUnits });
    svgTarget.appendChild(designCaption);

    // Data hall box
    const hallRect = svgEl('rect', { x: hallX, y: hallY, width: hallW, height: hallH, rx: 10, fill: navy });
    svgTarget.appendChild(hallRect);
    const hallText = svgEl('text', { x: svgW / 2, y: hallY + 22, 'text-anchor': 'middle', fill: '#fff', 'font-size': 13, 'font-weight': 800, 'font-family': 'sans-serif' });
    hallText.textContent = t('hall_label');
    svgTarget.appendChild(hallText);
    const hallText2 = svgEl('text', { x: svgW / 2, y: hallY + 39, 'text-anchor': 'middle', fill: 'rgba(255,255,255,0.75)', 'font-size': 12, 'font-weight': 700, 'font-family': 'sans-serif' });
    hallText2.textContent = fmtN(load) + ' MW' + (diagramMode === 'emergency' ? t('hall_emergency_suffix') : '');
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
        label = t('module_label_train', { n: i + 1 });
      } else if (currentTopo === 'standby') {
        label = mod.role === 'catcher' ? t('module_label_catcher', { n: i - N + 1 }) : t('module_label_duty', { n: i + 1 });
      } else {
        label = t('module_label_room', { n: i + 1 });
      }
      const labelColor = isOffline ? '#C8604F' : (isIdle ? '#9A90BB' : mColor);
      const labelText = svgEl('text', { x: x + boxW / 2, y: moduleY + 25, 'text-anchor': 'middle', 'font-size': 12, 'font-weight': 800, fill: labelColor, 'font-family': 'sans-serif' });
      labelText.textContent = label;
      moduleGroup.appendChild(labelText);

      let stateLabel;
      if (isOffline) stateLabel = t('state_offline');
      else if (isIdle) stateLabel = t('state_idle');
      else if (currentTopo === 'standby' && diagramMode === 'emergency' && mod.role === 'catcher') stateLabel = t('state_engaged');
      else stateLabel = t('state_active');
      const stateColor = isOffline ? '#C8604F' : (isIdle ? '#9A90BB' : '#8A8072');
      const stateText = svgEl('text', { x: x + boxW / 2, y: moduleY + 41, 'text-anchor': 'middle', 'font-size': 9.5, fill: stateColor, 'font-family': 'sans-serif' });
      stateText.textContent = stateLabel;
      moduleGroup.appendChild(stateText);

      // per-transformer load
      const txCount = perModuleUnits;
      const perTxKW = isActive ? mod.loadKW / txCount : 0;
      const perTxPct = isActive ? (perTxKW / effectiveCap * 100) : 0;
      const startTxY = moduleY + 57;

      const txW = 30;
      for (let t = 0; t < txCount; t++) {
        const row = Math.floor(t / 3);
        const col = t % 3;
        const rowCount = Math.min(3, txCount - row * 3);
        const rowWActual = rowCount * txW + (rowCount - 1) * 8;
        const rowStartX = x + boxW / 2 - rowWActual / 2;
        const tx = rowStartX + col * (txW + 8);
        const ty = startTxY + row * (22 + 34);

        const txColor = isOffline ? txOfflineFill : (isIdle ? txIdleFill : mColor);
        const txRect = svgEl('rect', { x: tx, y: ty, width: txW, height: 22, rx: 4, fill: txColor });
        moduleGroup.appendChild(txRect);
        const txLabel = svgEl('text', { x: tx + txW / 2, y: ty + 15, 'text-anchor': 'middle', 'font-size': 9, 'font-weight': 700, fill: '#fff', 'font-family': 'sans-serif' });
        txLabel.textContent = isOffline ? '✕' : 'T';
        moduleGroup.appendChild(txLabel);

        const pctLabel = svgEl('text', { x: tx + txW / 2, y: ty + 33, 'text-anchor': 'middle', 'font-size': 8.5, 'font-weight': 700, fill: isOffline ? '#C8604F' : (isIdle ? '#9A90BB' : mColor), 'font-family': 'sans-serif' });
        pctLabel.textContent = isOffline ? '-' : (isIdle ? '0%' : fmtN(perTxPct) + '%');
        moduleGroup.appendChild(pctLabel);

        // per-transformer rated capacity, tiny — kept to a compact "N.NMVA" so it stays clear
        // of the tx block's edges even for larger custom rating values.
        const ratingLabel = svgEl('text', { x: tx + txW / 2, y: ty + 44, 'text-anchor': 'middle', 'font-size': 6.2, 'font-weight': 600, fill: isOffline ? '#C8604F' : (isIdle ? '#9A90BB' : '#8A8072'), 'font-family': 'sans-serif' });
        ratingLabel.textContent = fmtN(rating / 1000) + 'MVA';
        moduleGroup.appendChild(ratingLabel);
      }

      // module summary caption
      const capY = startTxY + txRowsNeeded * (22 + 34) + 6;
      const countText = svgEl('text', { x: x + boxW / 2, y: capY, 'text-anchor': 'middle', 'font-size': 10, 'font-weight': 700, fill: labelColor, 'font-family': 'sans-serif' });
      countText.textContent = isOffline ? t('count_offline', { n: txCount }) : t('count_active', { n: txCount, kw: fmtN(mod.loadKW) });
      moduleGroup.appendChild(countText);

      // 설계기준 참고선 — 실제 평상시/비상시 부하(위 줄)와 바로 비교할 수 있도록 모듈마다 반복 표기
      const designText = svgEl('text', { x: x + boxW / 2, y: capY + 13, 'text-anchor': 'middle', 'font-size': 8, 'font-weight': 600, fill: '#9A90BB', 'font-family': 'sans-serif' });
      designText.textContent = t('design_ref_line', { mw: fmtN(designLoadKW / 1000), eff: fmtN(effectiveCap) });
      moduleGroup.appendChild(designText);

      svgTarget.appendChild(moduleGroup);
    });

    // total caption at bottom
    const activeModuleCount = modules.filter(m => m.state === 'active').length;
    const totalCaption = svgEl('text', { x: svgW / 2, y: svgH - 12, 'text-anchor': 'middle', 'font-size': 11, 'font-weight': 700, fill: navy, 'font-family': 'sans-serif' });
    totalCaption.textContent = diagramMode === 'normal'
      ? t('total_normal', { m: moduleCount, units: perModuleUnits, total: moduleCount * perModuleUnits, rating: fmtN(rating), eff: fmtN(effectiveCap) })
      : t('total_emergency', { m: moduleCount, active: activeModuleCount, total: moduleCount * perModuleUnits, activeTx: activeModuleCount * perModuleUnits });
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
      const nm = currentTopo === 'full' ? t('module_label_train', { n: i + 1 }) : (currentTopo === 'standby' ? (mod.role === 'catcher' ? t('module_label_catcher', { n: i - N + 1 }) : t('module_label_duty', { n: i + 1 })) : t('module_label_room', { n: i + 1 }));
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
    noteDiv.innerHTML = `<span class="swatch" style="background:#7A6BCB"></span>${t('legend_tx_note')}`;
    legend.appendChild(noteDiv);

    const topoLabel = currentTopo === 'distributed' ? t('topoLabel_distributed') : currentTopo === 'standby' ? t('topoLabel_standby') : t('topoLabel_full');
    document.getElementById('diagramDesc').textContent = t('diagramDesc', { topo: topoLabel, mode: diagramMode === 'normal' ? t('mode_normal') : t('mode_emergency') });
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
    customToggle.textContent = t(open ? 'custom_toggle_open' : 'custom_toggle');
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
      opt.textContent = t('room_label', { letter: ROOM_LETTERS[i] });
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
      label.textContent = t('room_label', { letter: ROOM_LETTERS[i] });
      roomGroup.appendChild(label);
      const sub = svgEl('text', { x: roomCenterX(i), y: roomY + 36, 'text-anchor': 'middle', 'font-size': 10.5, 'font-weight': 700, fill: isOffline ? '#C8604F' : '#fff', 'font-family': 'sans-serif' });
      sub.textContent = isOffline ? t('room_offline') : `${fmtN(roomLoads[i])} MW`;
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
      zLoadText.textContent = t('zone_it_label', { mw: fmtN(zoneLoad) });
      svgTarget.appendChild(zLoadText);

    });

    // legend
    const legend = document.getElementById('combLegend');
    legend.innerHTML = '';
    for (let i = 0; i < M; i++) {
      const isOffline = (i === failRoom);
      const div = document.createElement('div');
      div.className = 'item';
      div.innerHTML = `<span class="swatch" style="background:${isOffline ? '#FBEDE7' : roomColor(i)}"></span>${t('comb_legend_room', { letter: ROOM_LETTERS[i], suffix: isOffline ? t('comb_legend_offline_suffix') : '' })}`;
      legend.appendChild(div);
    }
    // summary line appended to legend
    const summary = document.createElement('div');
    summary.style.width = '100%';
    summary.style.marginTop = '8px';
    summary.style.fontWeight = '700';
    summary.style.color = navy;
    if (combMode === 'normal') {
      summary.textContent = t('comb_summary_normal', { m: M, perRoom: fmtN(totalLoad / M), total: fmtN(totalLoad), zones: zoneCount, zoneLoad: fmtN(zoneLoad) });
    } else {
      summary.textContent = t('comb_summary_emergency', { room: ROOM_LETTERS[failRoom], rest: M - 1, newLoad: fmtN(totalLoad / (M - 1)), oldLoad: fmtN(totalLoad / M), diff: fmtN((1 / (M - 1) - 1 / M) * totalLoad) });
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
    combApplyHint.textContent = t('combApplyHint', { mw: fmtN(targetLoad) });
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
    '2oo3':  { topo: 'distributed', n: 2, c: 1, labelKey: 'preset_2oo3' },
    '3oo4':  { topo: 'distributed', n: 3, c: 1, labelKey: 'preset_3oo4' },
    '4oo5':  { topo: 'distributed', n: 4, c: 1, labelKey: 'preset_4oo5' },
    'n+1':   { topo: 'standby', n: 3, c: 1, labelKey: 'preset_n1' },
    'n+2c':  { topo: 'standby', n: 3, c: 2, labelKey: 'preset_n2c' },
    '2n':    { topo: 'full', n: 1, c: 1, labelKey: 'preset_2n' },
    '2n+1':  { topo: 'full', n: 1, c: 2, labelKey: 'preset_2n1' },
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
      tdName.textContent = t('hall_row', { n: idx + 1 });
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
        warnSpan.textContent = t('overcap_row', { max: fmtN(maxCap) });
        tdLoad.appendChild(warnSpan);
      }
      tr.appendChild(tdLoad);

      const tdTopo = document.createElement('td');
      const sel = document.createElement('select');
      Object.keys(TOPO_PRESETS).forEach(key => {
        const opt = document.createElement('option');
        opt.value = key;
        opt.textContent = t(TOPO_PRESETS[key].labelKey);
        if (key === set.presetKey) opt.selected = true;
        sel.appendChild(opt);
      });
      sel.addEventListener('change', () => { set.presetKey = sel.value; renderSets(); });
      tdTopo.appendChild(sel);
      tr.appendChild(tdTopo);

      const tdPerModule = document.createElement('td');
      tdPerModule.textContent = t('unit_dae', { n: result.perModuleUnits });
      tr.appendChild(tdPerModule);

      const tdM = document.createElement('td');
      tdM.textContent = t('unit_gae', { n: result.M });
      tr.appendChild(tdM);

      const tdTotal = document.createElement('td');
      tdTotal.textContent = t('unit_dae', { n: result.totalUnits });
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
      detailBtn.textContent = t('btn_detail');
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
      delBtn.textContent = t('btn_delete');
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
      { label: t('summary_hallCount'), value: t('unit_gae', { n: sets.length }) },
      { label: t('summary_sumLoad'), value: fmtN(sumLoad, 2) + ' MW' },
      { label: t('summary_target'), value: itTarget !== null ? fmtN(itTarget, 2) + ' MW' : '-' },
      { label: t('summary_diff'), value: diff !== null ? (diff >= 0 ? '+' : '') + fmtN(diff, 2) + ' MW' : '-', warn: !diffOk },
      { label: t('summary_sumUnits'), value: t('unit_dae', { n: sumUnits }) },
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

  // ===== 저장 (PDF / Word / PPT export) =====
  // Rasterizes a live diagram <svg> to a PNG data URL, ignoring the user's current pan/zoom
  // state so the export always shows the full, clean diagram at 1:1.
  function svgToPngDataUrl(svgElement, scale) {
    scale = scale || 2;
    return new Promise((resolve, reject) => {
      const clone = svgElement.cloneNode(true);
      const w = parseFloat(svgElement.getAttribute('width'));
      const h = parseFloat(svgElement.getAttribute('height'));
      clone.setAttribute('xmlns', 'http://www.w3.org/2000/svg');
      const zoomGroup = clone.querySelector('g.zoom-group');
      if (zoomGroup) zoomGroup.removeAttribute('transform');
      const bgRect = document.createElementNS(NS, 'rect');
      bgRect.setAttribute('x', 0); bgRect.setAttribute('y', 0);
      bgRect.setAttribute('width', w); bgRect.setAttribute('height', h);
      bgRect.setAttribute('fill', '#FFFDF7');
      clone.insertBefore(bgRect, clone.firstChild);
      const svgString = new XMLSerializer().serializeToString(clone);
      const svgBlob = new Blob([svgString], { type: 'image/svg+xml;charset=utf-8' });
      const url = URL.createObjectURL(svgBlob);
      const img = new Image();
      img.onload = () => {
        const canvas = document.createElement('canvas');
        canvas.width = w * scale;
        canvas.height = h * scale;
        const ctx = canvas.getContext('2d');
        ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
        URL.revokeObjectURL(url);
        resolve({ dataUrl: canvas.toDataURL('image/png'), width: w, height: h });
      };
      img.onerror = (e) => { URL.revokeObjectURL(url); reject(e); };
      img.src = url;
    });
  }

  async function gatherReportData() {
    const topoLabel = currentTopo === 'distributed' ? t('topoLabel_distributed') : currentTopo === 'standby' ? t('topoLabel_standby') : t('topoLabel_full');
    const inputs = [
      [t('label_utility'), utilityCapacityInput.value + ' MW'],
      [t('label_it'), itCapacityInput.value + ' MW'],
      [t('label_pue'), pueDisplay.value],
      [t('label_load'), loadInput.value + ' MW'],
      [t('label_rating'), ratingInput.value + ' kVA'],
      [t('h2_title'), `${topoLabel} (N=${nInput.value}, C=${cInput.value})`],
      [t('h3_title'), document.getElementById('resultTotal').textContent],
    ];
    const [diagram4, diagram5] = await Promise.all([
      svgToPngDataUrl(document.getElementById('diagramSvg')),
      svgToPngDataUrl(document.getElementById('combSvg')),
    ]);
    return {
      title: t('pageTitle'),
      dateStr: new Date().toLocaleDateString(currentLang === 'ko' ? 'ko-KR' : 'en-US'),
      inputs, diagram4, diagram5,
      h4Title: '④ ' + t('h4_title'),
      h5Title: '⑤ ' + t('h5_title'),
    };
  }

  function downloadBlob(blob, filename) {
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url; a.download = filename;
    document.body.appendChild(a); a.click(); document.body.removeChild(a);
    setTimeout(() => URL.revokeObjectURL(url), 2000);
  }

  const exportStatus = document.getElementById('exportStatus');
  const exportBtns = document.querySelectorAll('.export-btn');
  function setExportBusy(busy) {
    exportBtns.forEach(b => { b.disabled = busy; });
  }

  async function exportPDF() {
    exportStatus.textContent = t('export_generating');
    setExportBusy(true);
    try {
      const data = await gatherReportData();
      const report = document.getElementById('printReport');
      report.innerHTML = '';
      const h1 = document.createElement('h1'); h1.textContent = data.title; report.appendChild(h1);
      const dateEl = document.createElement('div'); dateEl.className = 'print-date'; dateEl.textContent = data.dateStr; report.appendChild(dateEl);
      const h2a = document.createElement('h2'); h2a.textContent = t('h3_title'); report.appendChild(h2a);
      const table = document.createElement('table');
      data.inputs.forEach(([k, v]) => {
        const tr = document.createElement('tr');
        const td1 = document.createElement('td'); td1.textContent = k;
        const td2 = document.createElement('td'); td2.textContent = v;
        tr.appendChild(td1); tr.appendChild(td2);
        table.appendChild(tr);
      });
      report.appendChild(table);
      const h2b = document.createElement('h2'); h2b.textContent = data.h4Title; report.appendChild(h2b);
      const img4 = document.createElement('img'); img4.src = data.diagram4.dataUrl; report.appendChild(img4);
      const h2c = document.createElement('h2'); h2c.textContent = data.h5Title; report.appendChild(h2c);
      const img5 = document.createElement('img'); img5.src = data.diagram5.dataUrl; report.appendChild(img5);
      exportStatus.textContent = '';
      setExportBusy(false);
      window.print();
    } catch (e) {
      console.error(e);
      exportStatus.textContent = t('export_fail');
      setExportBusy(false);
    }
  }

  async function exportWord() {
    exportStatus.textContent = t('export_generating');
    setExportBusy(true);
    try {
      const data = await gatherReportData();
      const { Document, Packer, Paragraph, Table, TableRow, TableCell, ImageRun, HeadingLevel, WidthType } = window.docx;
      const toBuf = async (dataUrl) => new Uint8Array(await (await fetch(dataUrl)).arrayBuffer());
      const [img4Buf, img5Buf] = await Promise.all([toBuf(data.diagram4.dataUrl), toBuf(data.diagram5.dataUrl)]);
      const maxW = 600;
      const scale4 = Math.min(1, maxW / data.diagram4.width);
      const scale5 = Math.min(1, maxW / data.diagram5.width);

      const rows = data.inputs.map(([k, v]) => new TableRow({
        children: [
          new TableCell({ width: { size: 40, type: WidthType.PERCENTAGE }, children: [new Paragraph(k)] }),
          new TableCell({ width: { size: 60, type: WidthType.PERCENTAGE }, children: [new Paragraph(String(v))] }),
        ],
      }));

      const doc = new Document({
        sections: [{
          children: [
            new Paragraph({ text: data.title, heading: HeadingLevel.HEADING1 }),
            new Paragraph({ text: data.dateStr }),
            new Table({ rows, width: { size: 100, type: WidthType.PERCENTAGE } }),
            new Paragraph({ text: data.h4Title, heading: HeadingLevel.HEADING2, spacing: { before: 300 } }),
            new Paragraph({ children: [new ImageRun({ data: img4Buf, transformation: { width: data.diagram4.width * scale4, height: data.diagram4.height * scale4 } })] }),
            new Paragraph({ text: data.h5Title, heading: HeadingLevel.HEADING2, spacing: { before: 300 } }),
            new Paragraph({ children: [new ImageRun({ data: img5Buf, transformation: { width: data.diagram5.width * scale5, height: data.diagram5.height * scale5 } })] }),
          ],
        }],
      });
      const blob = await Packer.toBlob(doc);
      downloadBlob(blob, 'power-redundancy-report.docx');
      exportStatus.textContent = t('export_done');
    } catch (e) {
      console.error(e);
      exportStatus.textContent = t('export_fail');
    } finally {
      setExportBusy(false);
    }
  }

  async function exportPPT() {
    exportStatus.textContent = t('export_generating');
    setExportBusy(true);
    try {
      const data = await gatherReportData();
      const PptxCtor = window.PptxGenJS;
      const pptx = new PptxCtor();
      pptx.defineLayout({ name: 'PRC_WIDE', width: 10, height: 5.63 });
      pptx.layout = 'PRC_WIDE';

      const slide1 = pptx.addSlide();
      slide1.addText(data.title, { x: 0.4, y: 0.25, w: 9.2, fontSize: 22, bold: true, color: '2E2419' });
      slide1.addText(data.dateStr, { x: 0.4, y: 0.8, fontSize: 11, color: '8A8072' });
      const tableRows = data.inputs.map(([k, v]) => [
        { text: k, options: { color: '8A8072', fontSize: 11 } },
        { text: String(v), options: { fontSize: 11, bold: true } },
      ]);
      slide1.addTable(tableRows, { x: 0.4, y: 1.2, w: 9.2, colW: [4.6, 4.6], fontSize: 11, border: { type: 'solid', color: 'E6DECB', pt: 0.5 } });

      const slide2 = pptx.addSlide();
      slide2.addText(data.h4Title, { x: 0.4, y: 0.25, fontSize: 18, bold: true, color: '6F5FBF' });
      const ar4 = data.diagram4.height / data.diagram4.width;
      const w4 = 9.2, h4 = Math.min(4.6, w4 * ar4);
      slide2.addImage({ data: data.diagram4.dataUrl, x: 0.4, y: 0.85, w: w4, h: h4 });

      const slide3 = pptx.addSlide();
      slide3.addText(data.h5Title, { x: 0.4, y: 0.25, fontSize: 18, bold: true, color: '6F5FBF' });
      const ar5 = data.diagram5.height / data.diagram5.width;
      const w5 = 9.2, h5 = Math.min(4.6, w5 * ar5);
      slide3.addImage({ data: data.diagram5.dataUrl, x: 0.4, y: 0.85, w: w5, h: h5 });

      await pptx.writeFile({ fileName: 'power-redundancy-report.pptx' });
      exportStatus.textContent = t('export_done');
    } catch (e) {
      console.error(e);
      exportStatus.textContent = t('export_fail');
    } finally {
      setExportBusy(false);
    }
  }

  document.getElementById('exportPdfBtn').addEventListener('click', exportPDF);
  document.getElementById('exportWordBtn').addEventListener('click', exportWord);
  document.getElementById('exportPptBtn').addEventListener('click', exportPPT);
