  // ===== i18n =====
  let currentLang = localStorage.getItem('prc_lang') || 'ko';

  const I18N = {
    ko: {
      pageTitle: '전력계통 이중화 방식별 변압기 대수 계산기',
      subtitle: '수전용량·IT용량부터 데이터홀 분할, 데이터홀별 이중화 방식까지 한번에 계획하세요.',
      h0_title: '전체 용량 계획', h0_desc: '수전 · IT용량 → PUE 자동계산 → 데이터홀 개수 분할(하이브리드 가능)',
      label_utility: '수전용량 (MW)', label_it: 'IT용량 (MW)', label_pue: 'PUE (수전 ÷ IT, 자동계산)',
      label_hallCount: '데이터홀 개수', label_hallCapacity: '홀당 용량 (IT ÷ 개수, 자동계산)',
      label_maxSetCapacity: '권장 최대용량 (MW, 자동계산)',
      label_itSync: "데이터홀 합계와 연동",
      label_loadSource: "분석할 데이터홀",
      h_hall_title: "데이터홀 평면 검토",
      label_hallMix: "랙 구성 합계",
      label_hallRows: "배치 보기 (열 수)",
      label_hallPerim: "주변 여유 (mm)",
      label_hallPattern: "배치 패턴",
      label_hallScale: "보기 크기",
      pat_even: "혼합 (열마다 균등)",
      pat_mirror: "대칭 (통로 기준 거울상)",
      pat_group: "종류별 집중",
      scale_fit: "화면 맞춤",
      scale_real: "원래 크기",
      hall_row_label: "열 {letter}",
      h_rackmix: "랙 구성 편집 — 종류별 수량과 랙당 전력",
      h_gen: "POD 제너레이티브 디자인 — 타겟에 맞춰 랙 구성을 생성",
      label_genProfile: "타겟 성향",
      label_genTarget: "목표 POD 부하 (MW)",
      label_genGoal: "우선 기준",
      goal_area: "면적 최소",
      goal_bus: "모선 길이 최소",
      goal_density: "랙 밀도 최대",
      gen_run: "구성 생성",
      gen_prof_train: "대규모 학습 집중형",
      gen_prof_infer: "추론 서비스형",
      gen_prof_cloud: "혼합 클라우드형",
      gen_prof_edge: "에너지 연계 모듈형",
      gen_prof_train_d: "프론티어 모델 학습 — 가속기 랙에 전력을 몰아주고 CPU·스토리지는 최소. 고밀도 액냉.",
      gen_prof_infer_d: "상시 추론 서비스 — 추론 전용 가속기와 CPU 비중이 올라가고 네트워크가 두꺼워집니다.",
      gen_prof_cloud_d: "학습·추론·일반 워크로드 혼재 — 가속기와 범용 자원을 고르게 배분.",
      gen_prof_edge_d: "전력 제약 아래 작은 POD를 반복 — 1열 단위로 떼어 증설하기 쉬운 구성.",
      gen_disclaimer: "※ 작업 성격에서 도출한 설계 원형이며, 특정 사업자가 공개한 사양이 아닙니다. 생성 후 랙 구성표에서 자유롭게 고치세요.",
      gen_var_as_is: "A · 성향 그대로",
      gen_var_dense: "B · 가속기 집중",
      gen_var_broad: "C · 범용 분산",
      gen_racks: "랙 {n}개",
      gen_geo: "{rows}열 · {w}×{d}mm · {area}㎡ · 모선 {bus}m",
      gen_apply: "이 구성 적용",
      gen_applied: "✓ 생성한 구성을 적용했습니다 — 합계 {kw}kW · {rows}열. 아래 표에서 계속 고치면 됩니다.",
      rackmix_kind: "랙 종류",
      rackmix_qty: "수량",
      rackmix_kw: "kW / 랙",
      rackmix_sub: "소계 kW",
      rackmix_total: "합계",
      rackmix_add: "＋ 랙 종류 추가",
      rackmix_reset: "NVIDIA 기본 구성",
      rackmix_apply: "↑ 합계를 ①번 POD 부하로",
      rackmix_applied: "✓ POD 1개 부하를 {kw}kW로 적용했습니다",
      rackmix_new: "랙 종류 {n}",
      rackmix_summary: "랙 {racks}개 · {kw}kW ({mw}MW)",
      hall_cmp_label: "열 수 비교",
      hall_cmp_rows: "{n}열",
      hall_cmp_bus: "모선 {m}m",
      hall_read_title: "이 배치의 특징 — 위 수치에서 바로 읽히는 내용 (검토용)",
      hall_read_elec_h: "전기",
      hall_read_mech_h: "설비 (기계)",
      hall_read_arch_h: "건축",
      hall_read_elec: "IT {mw}MW, PUE 1.2 가정 시 시설전력 약 {fac}MW. 열당 부하 {rowKW}kW × {rows}열 → 열 단위 busway·분전 용량 기준. 열 끝에 전력 랙(사이드카/In-Row) 자리 확보를 검토.",
      hall_read_mech: "수랭 열량 약 {kw}kW (IT의 90% 가정). {each}kW CDU 기준 가동 {cdu}대 + 예비 1대 = {total}대. 공급·환수 헤더가 열마다 필요 — 천장·바닥 배관 경로가 busway·광케이블과 겹치지 않게 계획.",
      hall_read_arch: "외곽 약 {w}×{depth}m = {area}㎡ (전기실·매니폴드·CDU 포함, 치수 가정). {rows}열 × {perRow}대 구성 — 열이 적을수록 길어지고 끝단 간 거리가 커진다.",
      h_hall_desc: "POD 1개의 랙 배치와 기계·전기 평면/단면을 위 설정값에서 자동으로 작도합니다",
      label_hallPod: "검토할 POD",
      label_hallCooling: "냉각 방식",
      label_hallRackW: "랙 폭 (mm)",
      label_hallRackD: "랙 깊이 (mm)",
      label_hallCold: "콜드 통로 (mm)",
      label_hallHot: "핫 통로 (mm)",
      label_hallCduKW: "CDU 용량 (kW/대)",
      label_hallElecW: "전기실 폭 (mm)",
      label_hallRaised: "이중바닥 (mm)",
      label_hallRackH: "랙 높이 (mm)",
      label_hallBusway: "버스웨이 레벨 (mm)",
      label_hallCeil: "층고 (mm)",
      cool_dlc: "DLC 액냉 (고밀도)",
      cool_air: "공랭 (In-Row / CRAH)",
      cool_hybrid: "혼합 (DLC + 공랭 보조)",
      hall_cool_dlc: "랙 직결 액냉 — 100~133kW/랙 수준의 고밀도 배치에 적용",
      hall_cool_air: "공조기 기반 — 통상 30~40kW/랙, 콜드/핫 통로 폐쇄 필요",
      hall_cool_hybrid: "DLC로 주열 제거 + 공조기로 잔열 처리 — 80kW/랙 내외",
      hall_view_plan: "POD 평면",
      hall_view_cluster: "데이터홀 배치",
      label_hallUnits: "홀 내 POD 유닛 수",
      label_hallGrid: "유닛 배열",
      label_hallInclude: "홀 외곽에 포함",
      inc_cdu: "매니폴드 · CDU",
      hint_hallInclude: "전기실은 홀 외곽에서 제외됩니다 — POD와 콜드/핫 아일만으로 잡은 순수 데이터홀 외곽입니다.",
      label_hallPodGap: "유닛 간 이격 (mm)",
      label_hallService: "서비스 통로 (mm)",
      grid_auto: "자동 (정방형에 가깝게)",
      grid_row: "가로 1줄",
      grid_col: "세로 1줄",
      hall_units_note: "{cols}×{rows} 배열 → 홀 {w}×{d}mm · {area}㎡ · {perMW}㎡/MW",
      hall_unit_tag: "POD {n} · {kw}kW",
      hall_summary_cluster: "POD 유닛 {units}개 ({cols}×{rows}) · 합계 {kw}kW · 랙 {racks}개 → 데이터홀 {w}×{d}mm ≒ {area}㎡ ({perMW}㎡/MW)",
      hall_cmp_unit: "유닛 {w}×{d}",
      hall_cmp_hall: "홀 {w}×{d} · {area}㎡",
      hall_cmp_permw: "{v}㎡/MW",
      hall_view_sect: "단면",
      hint_hall: "휠로 확대/축소 · 드래그로 이동 — 치수는 mm, 위 입력값을 바꾸면 즉시 다시 작도됩니다",
      hall_pod_opt: "POD {n} — {kw}kW",
      hall_pod_note: "④번에서 산정한 POD {n}개 중 1개({kw}kW)를 펼쳐 봅니다.",
      hall_rack_note: "랙 {racks}개 · {rows}열 × {perRow}대",
      hall_cdu_note: "소요 {n}대 + 예비 1대 = {total}대 (N+1)",
      hall_elec_room: "전기실",
      hall_hot_aisle: "핫",
      hall_cold_aisle: "콜드",
      hall_raised: "이중바닥",
      hall_rack_top: "랙 상단",
      hall_busway: "버스웨이",
      hall_ceil: "층고",
      hall_rack_row: "랙 {n}대 × {kw}kW",
      hall_summary: "POD {pod} · {kw}kW → 랙 {racks}개({rackKW}kW/랙) · {rows}열 × {perRow}대 · CDU {cdu}대 · 소요 {w}×{depth}mm ≒ {area}㎡",
      pipe_chw_s: "20°C 냉수 공급 (CHW)",
      pipe_chw_r: "28°C 공조기 환수 (CHW)",
      pipe_cdu_ps: "40°C CDU 1차 공급",
      pipe_cdu_pr: "48°C CDU 1차 환수",
      pipe_cdu_ss: "45°C CDU 2차 공급",
      pipe_cdu_sr: "55°C CDU 2차 환수",
      src_avg: "⓪번 홀당 평균 용량 — 데이터홀 {n}개 평균 {mw}MW",
      src_hall: "데이터홀 {n} — {mw}MW · {topo}",
      src_manual: "직접 입력",
      src_note_avg: "⓪번 IT용량 ÷ 데이터홀 개수를 그대로 씁니다. 아래 총부하 칸은 자동으로 채워집니다.",
      src_note_hall: "이 홀의 용량 {mw}MW와 ⓪번 표에서 지정한 이중화 방식을 ②번까지 함께 가져옵니다.",
      src_note_manual: "아래 총부하 칸에 직접 입력하세요. ⓪번과 연동되지 않습니다.",
      hint_itSync_on: " — 아래 데이터홀 {n}개의 용량 합계 {mw}MW를 그대로 씁니다. 목표값을 직접 넣으려면 체크 해제.",
      hint_itSync_off: " — 직접 입력한 목표값입니다 (데이터홀 합계 {mw}MW). \"데이터홀 개수로 균등 자동 분할\"로 아래 표에 나눠 담으세요.",
      hint_maxSetCapacity: '유효용량 × N × 모듈당 변압기 대수로 ①~③번 값에서 자동 산출 — 초과하는 데이터홀은 아래 표에 경고 표시',
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
      hint_diagram4: '휠로 확대/축소 · 전기실/POD 클릭: 연결 회선 하이라이트 · 전기실 더블클릭: 상실 지정 / 빈 곳 더블클릭: 평상시 복귀',
      btn_zoomReset: '리셋',
      btn_expand: '크게 보기',
      btn_modalClose: '닫기 ✕',
      label_podCapacity: 'POD 1개 부하 (kW)',
      label_podCount: 'POD 수량 (개)',
      label_podAuto: '총부하 ÷ POD 부하로 자동 산정',
      hint_podCapacity: '랙 그룹(POD) 1개가 쓰는 전력 — 이 블럭이 이중급전 단위가 됩니다',
      hint_pod_manual: '— POD {n}개 × {cap}kW = 데이터홀 {total}MW (이 합계가 ①번 총부하가 됩니다)',
      hint_pod_auto: '— 총부하 기준 POD {n}개, POD당 실부하 약 {kw}kW. 6MW POD 같은 고정 블럭으로 보려면 체크 해제.',
      pod_row_title: '데이터홀 POD — {n}개 × {cap}kW = {mw}MW · 세트별 배정 {sets}',
      pod_row_title_split: '데이터홀 POD — {n}개 × {cap}kW = {mw}MW · POD당 {split}분할 → 급전 블록 {blocks}개 × {blockKW}kW · 세트별 배정 {sets}',
      label_podSplit: 'POD 급전 분할',
      assign_label: 'POD → 세트 배정',
      assign_auto: '자동 배분',
      assign_auto_note: '부하가 적은 세트부터 자동 배분 중 — 직접 고르면 그 블록만 고정됩니다.',
      assign_manual_note: '직접 지정한 블록(테두리 강조)은 고정되고, 나머지는 자동으로 채워집니다.',
      btn_podStudy: 'POD 구성 ↗',
      btn_podJson: '구성 JSON 적용',
      btn_podJsonApply: '적용',
      ph_podJson: 'POD 구성 페이지의 "구성 JSON ↓"로 받은 내용을 붙여넣으세요',
      podJson_ok: '✓ 랙 {racks}개 · IT {kw}kW({mw}MW) · PUE {pue} — POD 1개 부하에 적용했습니다',
      podJson_err_parse: '⚠ JSON 형식이 아닙니다. "구성 JSON ↓"로 받은 파일 내용을 그대로 붙여넣으세요.',
      podJson_err_shape: '⚠ counts·kw 배열이 없습니다. POD 구성 페이지의 구성 JSON이 맞는지 확인하세요.',
      podJson_err_empty: '⚠ 랙 수량 또는 랙당 kW가 0입니다.',
      podStudy_loaded: '랙 {racks}개 · IT {kw}kW 반영됨',
      hint_podSplit_1: 'POD 1개를 통째로 한 세트에 물립니다. POD 수가 세트 수로 나눠떨어지지 않으면 세트별 부하가 달라집니다.',
      warn_podSplit_sets: '⚠ {split}분할하려면 전기실 세트가 {split}개 이상이어야 합니다 (현재 {sets}개) — 같은 세트에 갈래가 몰려 쪼갠 효과가 없습니다.',
      hint_podSplit_n: 'POD 1개를 {split}갈래({blockKW}kW씩)로 쪼개 서로 다른 세트에 물립니다 — 갈래마다 온전한 {topo} 급전이고, 세트 부하가 고르게 맞습니다.',
      set_label: 'S{n}',
      pod_feed_caption: '각 POD {feeds}회선 급전 ({topo}) — 전기실별 급전모선에서 POD마다 분기',
      pod_feed_caption_comb: '각 POD 2회선 급전 (조합형) — POD마다 다른 전기실 2곳이 짝을 지어 절반씩, 조합 {pairs}개',
      pod_chip: 'POD {n}',
      legend_pod_note: 'POD(랙 그룹) — 데이터홀을 POD 단위로 분할하고, 각 POD는 위 급전모선에서 {feeds}회선으로 이중급전',
      legend_pod_note_comb: 'POD(랙 그룹) — 데이터홀을 POD 단위로 분할하고, POD마다 다른 전기실 2곳(조합 {pairs}개)이 짝을 지어 이중급전',
      warn_podOver: '⚠ POD당 실부하가 설정 용량을 초과합니다 — 수량을 늘리거나 용량을 키우세요.',
      comb_pod_summary: '블럭 1개 = POD 1개 · 총 {n}개 × {cap}kW (POD당 실부하 {kw}kW) — 전기실 조합 {pairs}개 중 {zones}개 사용(조합당 평균 {perZone}개). 수량·용량은 ①번 POD 설정에서 조절합니다.',
      h5_title: '조합형 분배 배치도', h5_desc: '전기실 2개씩 짝지어 POD에 이중급전 — 전기실 수와 POD 수량은 ①·④번 값을 그대로 사용',
      h5_explain: '<b>조합형 분배(Combinatorial N choose 2)</b> — 전기실 M개가 서로 2개씩 짝을 지어 IT존에 이중급전. 각 전기실은 (M-1)개 IT존에 관여하며, 1개 전기실 상실 시 그 파트너 전기실이 해당 존의 전체 부하를 단독으로 흡수. 총 IT존 수 = M×(M-1)÷2 (예: M=4 → 6존).',
      label_combFailRoom: '비상시 상실 전기실',
      hint_diagram5: '휠로 확대/축소 · 드래그로 이동 · 전기실 더블클릭: 상실 지정 / 빈 곳 더블클릭: 평상시 복귀',
      refTable_title: '참고 예시 (①번 총부하 {load}MW · 정격 {rating}kVA · 안전율 {safety} 기준)',
      refTable_th_topo: '방식', refTable_th_load: '총부하', refTable_th_step1: '①모듈당 설계부하',
      refTable_th_step2: '②모듈당 변압기', refTable_th_step3: '③총 대수',
      refTable_row1: '2oo3 (분산)', refTable_row2: '3oo4 (분산)', refTable_row3: 'N+1 (대기, N=3)',
      refTable_row4: 'N+2C (대기, N=3)', refTable_row5: '2N (완전이중화)',
      unit_3units: '3대', unit_4units: '4대', unit_8units: '8대', unit_12units: '12대', unit_15units: '15대', unit_16units: '16대',
      globalFootnote: '총 변압기 대수 = ⌈ (①모듈당 설계부하) ÷ (변압기 정격 × 안전율) ⌉ × (N + C) &nbsp;|&nbsp; 분산이중화: ①=총부하÷N (전 모듈 동시가동, C개 모듈 상실까지 무스위칭 대응) &nbsp;|&nbsp; 대기이중화: ①=총부하÷N (duty N개가 분담, C개는 평상시 idle 대기) &nbsp;|&nbsp; 완전이중화: ①=총부하 (각 트레인이 단독으로 전체부하 100% 커버)',
      export_title: '저장', export_desc: '현재 입력값·계산결과·다이어그램을 문서로 저장합니다.',
      view_sequential: '순차형', view_dual: '듀얼형',
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
      total_normal: '총 {m}개 모듈 × 모듈당 {units}대 = 총 변압기 {total}대  (정격 {rating}kW, 유효 {eff}kW)',
      total_emergency: '모듈 {m}개 중 {active}개 가동으로 전체부하 대응 · 변압기 총 {total}대 중 {activeTx}대 가동',
      total_normal_sets: '{topo} {perSet}실 × {sets}세트 = 전기실 {rooms}개 · 총 변압기 {total}대  (정격 {rating}kW, 유효 {eff}kW)',
      total_emergency_rooms: '모듈 {m}개 기준 · 전기실 {rooms}개 중 {activeRooms}개 가동 · 변압기 총 {total}대 중 {activeTx}대 가동',
      module_label_group: '{n}그룹',
      preset_title: '설정',
      preset_placeholder: '설정 이름 (예: 60MW 3홀)',
      preset_save: '저장',
      preset_delete: '삭제',
      preset_reset: '기본값',
      preset_file_save: "파일로 저장",
      preset_file_load: "파일 불러오기",
      fb_open: "개선 의견",
      fb_title: "개선 의견",
      fb_title_ph: "한 줄 요약",
      fb_body_ph: "무엇이 불편했고 어떻게 되면 좋을지 적어주세요",
      fb_attach: "현재 설정 요약 첨부",
      fb_add: "＋ 의견 등록",
      fb_mail: "주간 취합 메일 보내기",
      fb_copy: "취합 내용 복사",
      fb_export: "내보내기 (.json)",
      fb_import: "불러오기",
      fb_filter_all: "전체",
      fb_cat_bug: "버그",
      fb_cat_calc: "계산·로직",
      fb_cat_feature: "기능 요청",
      fb_cat_ui: "화면·사용성",
      fb_cat_etc: "기타",
      fb_state_new: "미분류",
      fb_state_applied: "반영",
      fb_state_hold: "보류",
      fb_state_rejected: "미반영",
      fb_count: "총 {total}건 · 미분류 {n}건",
      fb_empty: "아직 등록된 의견이 없습니다. 위에 적고 등록을 누르세요.",
      fb_added: "✓ 등록했습니다",
      fb_need_text: "⚠ 내용을 입력하세요",
      fb_digest_head: "# 개선 의견 취합 (최근 {days}일 · {n}건)",
      fb_mail_subject: "[데이터센터 계산기] 개선 의견 취합 {date}",
      fb_mail_opened: "✓ 메일 앱을 열었습니다 — 내용 확인 후 보내세요",
      fb_mail_long: "⚠ 내용이 길어 메일 앱이 잘라낼 수 있습니다 — [취합 내용 복사]로 붙여넣으세요",
      fb_copied: "✓ 취합 내용을 복사했습니다",
      fb_copy_fail: "⚠ 복사에 실패했습니다 — 내보내기를 사용하세요",
      fb_exported: "✓ {name} 으로 내려받았습니다",
      fb_imported: "✓ {n}건을 불러왔습니다",
      fb_import_bad: "⚠ 의견 파일이 아닙니다",
      fb_note: "의견은 이 브라우저에 저장됩니다. 메일 버튼은 기본 메일 앱을 열어 본문을 채워 주며, 실제 발송은 직접 확인 후 누르시면 됩니다.",
      preset_file_default: "데이터센터_검토",
      preset_file_saved: "✓ {name} 으로 내려받았습니다",
      preset_file_loaded: "✓ {name} 을 불러왔습니다 — 입력값·평면·SLD까지 복원",
      preset_file_badjson: "⚠ JSON 파일을 읽을 수 없습니다.",
      preset_file_badfile: "⚠ 이 앱에서 저장한 설정 파일이 아닙니다.",
      preset_choose: '저장된 설정 불러오기 ▾',
      preset_saved: '✓ “{name}” 저장됨',
      preset_loaded: '✓ “{name}” 불러왔습니다',
      preset_deleted: '“{name}” 삭제됨',
      preset_reset_done: '기본값으로 되돌렸습니다',
      preset_need_name: '저장할 이름을 입력하세요',
      preset_need_pick: '삭제할 설정을 선택하세요',
      dist_bus: '모선형 분배',
      dist_comb: '조합형 분배',
      dist_bus_hint: 'POD마다 자기 세트의 전기실 {perSet}곳 전부에서 급전받습니다 — {topo}이므로 {perSet}회선이 들어가고 그중 일부를 잃어도 남은 회선이 POD 전량을 커버합니다. (세트 {sets}개)',
      dist_comb_hint: '⚠ 조합형은 POD당 2회선 고정입니다 — 세트 안 {perSet}개 중 2곳씩만 짝지으므로 {topo} 같은 N-of-M 구성은 표현하지 못합니다. (조합 {pairs}개 중 {used}개 사용) 3oo4 검토는 모선형으로 보세요.',
      dist_comb_need3: '⚠ 조합형 분배는 세트당 전기실이 최소 3개 필요합니다 (현재 {rooms}개) — 모선형으로 표시합니다.',
      label_roomCapacity: '전기실 1개 용량 (kW)',
      room_cap_line: '용량 {cap}kW · 부하율 {pct}%',
      label_roomCapAuto: '실당 변압기 대수 × 유효용량',
      hint_roomCapAuto: ' — 상실 시 실당 필요 {need}kW ÷ 유효 {eff}kW/대 → {tx}대({got}kW)로 올림, 여유 {head}%. 정수 올림 때문에 상실 시 부하율이 100%가 아니라 그보다 낮게 나옵니다. 직접 정하려면 체크 해제.',
      hint_roomCapManual: ' — 이 용량이면 실당 변압기 {tx}대(유효 {eff}kW/대), 전체 {total}대가 필요합니다.',
      alloc_ok: '✓ 분배 가능 — POD {pods}개를 전기실 {rooms}개가 POD당 {feeds}회선으로 분담. 전기실 최대 부하율 평상시 {ratio}% · {lost}실 상실 시 {emergency}% (설계 개념상 {N}oo{M} = {designNormal}%→100%, 변압기 정수 올림으로 그보다 낮음)',
      alloc_over: '⚠ 분배 불가 — 평상시부터 전기실 {over}개가 용량 초과 (최대 {ratio}%). 전기실 용량·세트 수를 늘리거나 POD 부하를 줄이세요.',
      alloc_ok_split: '✓ 분배 가능 — POD {realPods}개를 {split}분할한 급전 블록 {pods}개를 전기실 {rooms}개가 블록당 {feeds}회선으로 분담. 전기실 최대 부하율 평상시 {ratio}% · {lost}실 상실 시 {emergency}% (설계 개념상 {N}oo{M} = {designNormal}%→100%, 변압기 정수 올림으로 그보다 낮음)',
      alloc_over_emergency: '⚠ 상실 시 용량 초과 — 평상시 최대 {ratio}%는 괜찮지만, {lost}실 상실 시 남은 {n}실이 {emergency}%까지 올라갑니다. 전기실 용량을 키우거나 세트를 늘리세요.',
      alloc_unfed: '⚠ 분배 결과 — 급전원이 모두 상실된 POD {unfed}개 발생. 이 이중화 방식으로는 감당할 수 없는 상실 조합입니다.',
      label_roomSets: '전기실 세트 수',
      h6_title: 'SLD (단선결선도)', h6_desc: '한전 수전 → 비상발전기 → 주모선 → 모듈별 변압기·UPS → PDU → 랙 POD — ④번과 같은 평상시/비상시 상태를 그대로 반영',
      hint_sld: '휠로 확대/축소 · 드래그로 이동 · ④번 구성 다이어그램과 동일한 평상시/비상시 상태가 자동 반영됩니다',
      sld_utility: '한전 수전', sld_utility_sub: '상시 2회선', sld_generator: '비상발전기', sld_generator_sub: '병렬운전',
      sld_mainbus: '주모선', sld_legend_note: '실선=상시 가동 경로 · 점선=대기/상실 경로 (④번 평상시·비상시 상태와 동일)',
      sld_mode_auto: '자동 작성', sld_mode_manual: '수동 작성',
      sld_palette_title: '장비 팔레트 — 클릭해서 추가', sld_seed: '현재 계통 불러오기', sld_clear: '전체 지우기',
      hint_sld_manual: '블럭 드래그=이동 · 블럭 2개를 차례로 클릭=연결 · 블럭 선택 후 선 클릭=그 선에서 분기(배터리·발전기 등) · 선만 클릭=기본↔예비 전환 · 블럭/선 더블클릭=삭제',
      sld_status_idle: '블럭을 클릭하면 연결이 시작됩니다 (블럭 {n}개 · 연결선 {e}개)',
      sld_status_selected: '“{name}” 선택됨 — 연결할 블럭을 클릭하거나, 분기할 선을 클릭하세요 (같은 블럭 재클릭 시 취소)',
      sld_edge_main: '기본', sld_edge_standby: '예비',
      sld_legend_manual: '실선=기본(주) 경로 · 점선=예비 경로 — 선을 클릭하면 서로 전환됩니다',
      sldb_kepco: '한전 변전소', sldb_ds: '단로기', sldb_gcb: '가스차단기', sldb_vcb: '진공차단기',
      sldb_acb: '기중차단기', sldb_mccb: '배선용차단기', sldb_mtr: '주변압기', sldb_tr: '변압기',
      sldb_bus: '모선', sldb_gen: '비상발전기', sldb_gcp: '발전기 제어반', sldb_syn: '동기 병렬반',
      sldb_ctts: '무순단 절체기', sldb_sts: '정지형 절체기', sldb_ups: '무정전전원장치', sldb_bat: '축전지',
      sldb_pdu: '전력분배반', sldb_pod: '랙 그룹(POD)', sldb_rack: '서버랙', sldb_load: '일반 부하', sldb_junction: '분기점',
      h_plan_title: '건축 평·단면 블럭 다이어그램',
      h_plan_desc: '전기실·기계실·데이터홀 등을 블럭으로 배치하고, 층별 탭으로 나눠 한눈에 비교합니다',
      hint_plan: '블럭 드래그: 이동 · 선택 후 모서리 드래그: 크기 조절 · 더블클릭: 이름 편집 · Delete: 삭제',
      plan_add: '＋ 블럭 추가',
      plan_del: '블럭 삭제',
      plan_snap: '격자 맞춤',
      plan_magnet: '블럭 붙이기',
      plan_all: '한번에 보기',
      sched_group: "분야",
      sched_name: "실명",
      sched_area: "면적 (㎡)",
      sched_note: "비고",
      sched_equip: "장비",
      sched_move: "층 이동",
      sched_add: "＋ 실 추가",
      sched_add_hint: "이 층 평면에 블럭이 함께 생성됩니다",
      sched_equip_add: "＋ 장비명",
      sched_floor_meta: "실 {n}개 · {area}㎡",
      plan_eq_rooms: "전기실 {n}실",
      plan_eq_bus: "주모선 / 수전반",
      plan_eq_per_set: "세트당",
      plan_eq_runtime: "축전지 랙",
      plan_eq_gen: "비상발전 (×1.25)",
      plan_eq_cool: "냉동기 {kw}kW",
      plan_eq_pump: "냉각수 펌프 / 헤더",
      plan_eq_net: "네트워크 랙",
      unit_dae_short: "대",
      sld_name_ph: "선택한 블럭 이름",
      sld_del_node: "선택 블럭 삭제",
      h_sched: "설계개요표 (실 일람표)",
      sched_empty: "블럭을 추가하면 이 표에 실(室)이 쌓입니다. 행을 누르면 평면에서 그 블럭이 선택됩니다.",
      sched_sum: "층 {floors}개 · 실 {rooms}개 · 연면적 {total}㎡ ({detail})",
      unit_room: '실',
      plan_auto: '자동 작성',
      plan_auto_confirm: '지금 작성한 평면이 모두 지워지고 자동 생성 결과로 바뀝니다. 계속할까요?',
      plan_auto_done: '✓ IT {mw}MW · 전산실 {pods}개 · 전기실 {rooms}개 기준으로 3개 탭을 작성했습니다 (개념 면적 약 {area}㎡ — 원단위 추정값이므로 끌어서 조정하세요)',
      plan_auto_tab_upper: '상층 평면 (전산·통신)',
      plan_auto_tab_lower: '하층 평면 (전기·기계)',
      plan_auto_tab_sect: 'A-A 단면',
      plan_sect_upper: '상층 · 전산실 {n}개 × {kw}kW',
      plan_sect_lower: '하층 · 전기실 {sets}세트 {rooms}실',
      plan_sect_mech: '지하 · 기계 (냉동기·펌프·수처리)',
      plan_name_ph: '선택한 블럭 이름',
      plan_tab_add: '＋ 탭',
      plan_tab_del: '탭 삭제',
      plan_tab_hint: '더블클릭하면 탭 이름을 바꿀 수 있습니다',
      plan_tab_default: '{n}층 평면',
      plan_empty: '＋ 블럭 추가로 실(室)을 올리고, 끌어서 배치하세요',
      plan_status_tab: '{name} · 블럭 {n}개',
      plan_status_all: '탭 {n}개를 나란히 보는 중 — 편집하려면 탭을 고르세요',
      plan_group_elec: "전기",
      plan_group_mech: "기계",
      plan_group_it: "IT · 통신",
      plan_group_ops: "운영 · 지원",
      plan_group_misc: "기타",
      plan_kind_main_elec: "주전기실",
      plan_kind_mv: "특고압 배전반실",
      plan_kind_lv: "저압 배전반실",
      plan_kind_tr: "변압기실",
      plan_kind_ups: "무정전전원장치실",
      plan_kind_batt: "축전지실",
      plan_kind_gen: "발전기실",
      plan_kind_sts: "정지형 절체스위치실",
      plan_kind_mech: "기계실",
      plan_kind_chiller: "냉동기실",
      plan_kind_pump: "펌프실",
      plan_kind_crah: "전산실 공조기실",
      plan_kind_cdu: "냉각수 분배장치실",
      plan_kind_water: "수처리실",
      plan_kind_hall: "전산실 / 서버실",
      plan_kind_mmr: "통신사업자 접속실",
      plan_kind_mdf: "주배선반실",
      plan_kind_idf: "중간배선반실",
      plan_kind_network: "네트워크실",
      plan_kind_noc: "네트워크 운영센터",
      plan_kind_soc: "보안관제실",
      plan_kind_control: "중앙제어실",
      plan_kind_bms: "건물관리시스템 운영실",
      plan_kind_security: "보안실",
      plan_kind_staging: "장비 반입·설치 준비실",
      plan_kind_storage: "창고",
      plan_kind_dock: "하역장",
      plan_kind_corridor: "통로",
      plan_kind_shaft: "샤프트",
      plan_kind_etc: "기타실",
      h_review_title: "시스템 검토 의견",
      h_review_desc: "현재 입력값으로 구성된 계통을 용량·이중화·분배 관점에서 자동 점검합니다",
      rv_unfed_h: "급전원을 모두 잃는 POD가 있습니다",
      rv_unfed: "상실 조합에 따라 급전 전기실이 전부 끊기는 급전 블록이 {n}개 생깁니다. 이 구성으로는 해당 상실을 견디지 못합니다.",
      rv_unfed_fix: "이중화 방식의 여유분(C)을 늘리거나, 분배 방식을 모선형으로 바꿔 세트 전체가 급전하도록 하세요.",
      rv_emergency_over_h: "상실 시 전기실 용량이 부족합니다",
      rv_emergency_over: "{lost}실 상실 시 남은 {n}실이 각각 용량의 {em}%를 떠안습니다. 100%를 넘으므로 실제로는 부하를 전부 받을 수 없습니다.",
      rv_emergency_over_fix: "전기실 용량을 키우거나, 세트 수를 늘리거나, POD 급전 분할로 세트당 부하를 낮추세요.",
      rv_emergency_tight_h: "상실 시 여유가 거의 없습니다",
      rv_emergency_tight: "상실 시 부하율 {em}%로 한계에 근접합니다. 향후 증설이나 부하 편차를 흡수할 여지가 없습니다.",
      rv_emergency_tight_fix: "증설 계획이 있다면 전기실 용량을 한 단계 키우는 쪽을 검토하세요.",
      rv_emergency_low_h: "설비 여유가 과도합니다",
      rv_emergency_low: "평상시 {normal}%, 상실 시에도 {em}%에 그칩니다. 변압기가 필요량보다 크게 잡혀 있습니다.",
      rv_emergency_low_fix: "변압기 정격을 낮추거나, 세트 수를 줄이거나, POD 급전 분할을 조정해 설비를 줄일 수 있습니다.",
      rv_emergency_ok_h: "이중화 용량이 적정합니다",
      rv_emergency_ok: "평상시 {normal}% → 상실 시 {em}%로 용량 이내입니다. {topo} 설계 개념({design}%→100%)에 부합하며 적정 여유를 확보했습니다.",
      rv_overbuilt_h: "변압기 정수 올림으로 여유가 큽니다",
      rv_overbuilt: "상실 시 실당 {need}kW가 필요한데 {tx}대({got}kW)가 들어가 여유가 {head}%입니다. 변압기 1대 단위로 올림하면서 생긴 과설계입니다.",
      rv_overbuilt_fix: "POD 급전 분할을 늘려 세트당 부하를 낮추거나, 변압기 정격을 낮춰 올림 손실을 줄이세요.",
      rv_notight_h: "여유가 {head}%뿐입니다",
      rv_notight: "설계 필요량과 실제 용량이 거의 같습니다. 부하 증가나 역률·효율 변동을 흡수할 여유가 없습니다.",
      rv_notight_fix: "안전율을 낮춰 재검토하거나 전기실 용량을 한 단계 키우세요.",
      rv_imbalance_h: "세트별 부하가 고르지 않습니다",
      rv_imbalance: "{detail} — 가장 무거운 세트가 가장 가벼운 세트보다 {spread}% 큽니다. 세트마다 변압기 대수가 달라집니다.",
      rv_imbalance_fix_split: "POD 급전 분할을 세트 수와 같게 두면 각 세트에 고르게 나뉩니다.",
      rv_imbalance_fix_count: "POD 수량을 세트 수의 배수로 맞추거나 세트 수를 조정하세요.",
      rv_balanced_h: "세트별 부하가 균등합니다",
      rv_balanced: "세트 {sets}개가 각각 {mw}MW씩 동일하게 분담합니다. 전기실 사양을 한 가지로 통일할 수 있습니다.",
      rv_comb_mismatch_h: "분배 방식이 이중화 방식과 맞지 않습니다",
      rv_comb_mismatch: "조합형은 POD당 2회선 고정이라 세트 안 {perSet}개 중 2곳씩만 물립니다. {topo}의 'N개 중 M개' 구조를 표현하지 못합니다.",
      rv_comb_mismatch_fix: "모선형 분배로 바꾸면 세트의 전기실 전부가 POD에 급전합니다.",
      rv_split_sets_h: "POD 분할이 세트 수보다 많습니다",
      rv_split_sets: "{split}분할인데 세트가 {sets}개뿐이라 같은 POD의 갈래가 같은 세트로 들어갑니다. 쪼갠 효과가 없습니다.",
      rv_split_sets_fix: "세트 수를 {split}개 이상으로 늘리거나 분할 수를 {sets} 이하로 낮추세요.",
      rv_rating_cap_h: "변압기 정격이 상한을 넘습니다",
      rv_rating_cap: "{rating}kVA는 상한 {cap}kVA를 초과합니다. 표준 사양을 벗어난 값입니다.",
      rv_rating_cap_fix: "정격을 {cap}kVA 이하로 낮추고 대수를 늘리는 쪽을 검토하세요.",
      rv_many_tx_h: "전기실 1곳에 변압기가 {tx}대입니다",
      rv_many_tx: "한 방에 변압기가 많이 모이면 실 면적·이격거리·발열 처리 부담이 커집니다.",
      rv_many_tx_fix: "세트 수나 세트당 전기실 수를 늘려 분산하는 안을 비교해 보세요.",
      rv_full_cost_h: "완전이중화는 설비가 2배입니다",
      rv_full_cost: "각 트레인이 전체 부하를 단독으로 커버하므로 변압기 {total}대가 들어갑니다. 평상시 가동률이 낮습니다.",
      rv_full_cost_fix: "무중단 요구가 절대적이지 않다면 분산이중화(2oo3·3oo4)로 설비를 크게 줄일 수 있습니다.",
      rv_pue_low_h: "수전용량 여유가 적습니다",
      rv_pue_low: "PUE {pue}는 냉방·손실분을 감안하면 빠듯합니다. IT 외 부하가 들어갈 여지가 작습니다.",
      rv_pue_low_fix: "수전용량을 늘리거나 IT용량 목표를 재검토하세요.",
      rv_pue_high_h: "수전용량이 과다합니다",
      rv_pue_high: "PUE {pue}는 일반적인 설계값보다 높습니다. 수전 설비가 과투자일 수 있습니다.",
      rv_pue_high_fix: "냉방 방식과 목표 PUE를 재확인하고 수전용량을 조정하세요.",
      rv_summary_h: "구성 요약",
      rv_summary: "POD {pods}개 × {podKW}kW = {mw}MW · {topo} {perSet}실 × {sets}세트 = 전기실 {rooms}개 · 변압기 {total}대({rating}kVA) · 급전 블록당 {feeds}회선.",
      label_roomsPerSet: '세트당 전기실 수',
      label_roomsPerSetAuto: '②번 N+C와 동일',
      hint_roomSets: '{topo} 1세트 = 전기실 {perSet}개 → 세트 {sets}개 = 총 전기실 {total}개. POD는 부하가 적은 세트부터 배정됩니다.',
      overload_warn: '⚠ 상실 {n}개 모듈에 비해 캐쳐가 {c}개뿐이라 {diff}개 모듈의 부하를 흡수하지 못합니다.',
      legend_tx_note: '변압기(T) · 하단 %는 변압기별 운전부하율 (색상은 소속 모듈과 동일)',
      diagramDesc: '({topo} · {mode} 구성)',
      topoLabel_distributed: '분산이중화', topoLabel_standby: '대기이중화', topoLabel_full: '완전이중화',

      room_label: '전기실 {letter}', room_offline: '⨯ 상실',
      footnote_comb: '전기실 1개 안의 변압기 대수는 이 배치도가 아니라 ①~④번 계산기에서 산정합니다. 조합형 배치로 이미 전기실 레벨 이중화가 확보된 경우, 전기실 내부는 통상 순수 N(캐쳐 없음, C=0)으로 계산해 과설계를 피합니다 — 전기실 내부까지 추가 이중화를 원하시면 C≥1로 설정하세요.',
      hint_combSource: '전기실 수는 ④번, 총 IT부하와 POD 수량은 ①번 값을 그대로 씁니다 — 현재 전기실 {m}개({pairs}개 조합) · 총 {mw}MW',
      comb_legend_room: '전기실 {letter}{suffix}', comb_legend_offline_suffix: ' (상실)',
      comb_summary_normal: '전기실 {m}개 × 평상시 부하 {perRoom}MW = 총 IT부하 {total}MW (전기실 조합 {zones}개 사용 · POD당 {zoneLoad}MW)',
      comb_summary_emergency: '전기실 {room} 상실 시 나머지 {rest}개 전기실이 각 {newLoad}MW로 상승 (평상시 {oldLoad}MW 대비 +{diff}MW)',

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
      label_maxSetCapacity: 'Recommended max capacity (MW, auto)',
      label_itSync: "Follow the data hall total",
      label_loadSource: "Data hall to analyse",
      h_hall_title: "Data hall layout review",
      label_hallMix: "Rack mix total",
      label_hallRows: "Layout (rows)",
      label_hallPerim: "Perimeter clearance (mm)",
      label_hallPattern: "Arrangement",
      label_hallScale: "View size",
      pat_even: "Mixed (even across rows)",
      pat_mirror: "Mirrored about the aisle",
      pat_group: "Grouped by type",
      scale_fit: "Fit to width",
      scale_real: "Actual size",
      hall_row_label: "Row {letter}",
      h_rackmix: "Rack mix — quantity and power per rack",
      h_gen: "POD generative design — compose a rack mix for a target",
      label_genProfile: "Target profile",
      label_genTarget: "Target POD load (MW)",
      label_genGoal: "Optimise for",
      goal_area: "Smallest area",
      goal_bus: "Shortest busway",
      goal_density: "Highest density",
      gen_run: "Generate",
      gen_prof_train: "Large-scale training",
      gen_prof_infer: "Inference service",
      gen_prof_cloud: "Mixed cloud",
      gen_prof_edge: "Energy-linked module",
      gen_prof_train_d: "Frontier model training — power concentrated in accelerator racks, minimal CPU and storage, dense liquid cooling.",
      gen_prof_infer_d: "Always-on inference — more inference accelerators and CPU, heavier networking.",
      gen_prof_cloud_d: "Training, inference and general workloads together — accelerators and general compute balanced.",
      gen_prof_edge_d: "Small PODs repeated under a power constraint — easy to add a row at a time.",
      gen_disclaimer: "※ These are design archetypes derived from the workload, not specifications published by any operator. Edit the rack table freely after generating.",
      gen_var_as_is: "A · as profiled",
      gen_var_dense: "B · accelerator heavy",
      gen_var_broad: "C · general purpose",
      gen_racks: "{n} racks",
      gen_geo: "{rows} row(s) · {w}×{d}mm · {area} m² · busway {bus}m",
      gen_apply: "Apply this mix",
      gen_applied: "✓ Applied — {kw}kW total across {rows} row(s). Carry on editing in the table below.",
      rackmix_kind: "Rack type",
      rackmix_qty: "Qty",
      rackmix_kw: "kW / rack",
      rackmix_sub: "Subtotal kW",
      rackmix_total: "Total",
      rackmix_add: "+ Add rack type",
      rackmix_reset: "NVIDIA default",
      rackmix_apply: "↑ Use total as the POD load in ①",
      rackmix_applied: "✓ Load per POD set to {kw}kW",
      rackmix_new: "Rack type {n}",
      rackmix_summary: "{racks} racks · {kw}kW ({mw}MW)",
      hall_cmp_label: "Compare rows",
      hall_cmp_rows: "{n} row(s)",
      hall_cmp_bus: "busway {m}m",
      hall_read_title: "What this layout implies — read straight off the numbers above",
      hall_read_elec_h: "Electrical",
      hall_read_mech_h: "Mechanical",
      hall_read_arch_h: "Architectural",
      hall_read_elec: "{mw}MW IT, about {fac}MW facility at PUE 1.2. {rowKW}kW per row across {rows} row(s) sets the busway and distribution rating; allow for power racks at the row ends.",
      hall_read_mech: "About {kw}kW to liquid (90% of IT). At {each}kW per CDU that is {cdu} running plus 1 spare, {total} in all. Supply and return headers run per row — keep them clear of the busway and fibre routes.",
      hall_read_arch: "Roughly {w}×{depth}m = {area} m² including the electrical room, manifold and CDUs. {rows} row(s) of {perRow} — fewer rows run longer and spread the ends further apart.",
      h_hall_desc: "Draws the rack layout and the mechanical/electrical plan and section for one POD from the settings above",
      label_hallPod: "POD to review",
      label_hallCooling: "Cooling",
      label_hallRackW: "Rack width (mm)",
      label_hallRackD: "Rack depth (mm)",
      label_hallCold: "Cold aisle (mm)",
      label_hallHot: "Hot aisle (mm)",
      label_hallCduKW: "CDU capacity (kW each)",
      label_hallElecW: "Electrical room width (mm)",
      label_hallRaised: "Raised floor (mm)",
      label_hallRackH: "Rack height (mm)",
      label_hallBusway: "Busway level (mm)",
      label_hallCeil: "Floor height (mm)",
      cool_dlc: "DLC liquid (high density)",
      cool_air: "Air (In-Row / CRAH)",
      cool_hybrid: "Hybrid (DLC + air trim)",
      hall_cool_dlc: "Direct liquid to the rack — for 100-133kW per rack densities",
      hall_cool_air: "Air handlers — typically 30-40kW per rack, needs aisle containment",
      hall_cool_air_x: "",
      hall_cool_hybrid: "DLC takes the bulk, air trims the rest — around 80kW per rack",
      hall_view_plan: "POD plan",
      hall_view_cluster: "Hall layout",
      label_hallUnits: "POD units in the hall",
      label_hallGrid: "Unit arrangement",
      label_hallInclude: "Include in the hall outline",
      inc_cdu: "Manifold · CDU",
      hint_hallInclude: "The electrical room is left out — this is the hall outline from the PODs and their cold/hot aisles alone.",
      label_hallPodGap: "Gap between units (mm)",
      label_hallService: "Service corridor (mm)",
      grid_auto: "Auto (close to square)",
      grid_row: "Single row",
      grid_col: "Single column",
      hall_units_note: "{cols}×{rows} → hall {w}×{d}mm · {area} m² · {perMW} m²/MW",
      hall_unit_tag: "POD {n} · {kw}kW",
      hall_summary_cluster: "{units} POD units ({cols}×{rows}) · {kw}kW · {racks} racks → data hall {w}×{d}mm ≈ {area} m² ({perMW} m²/MW)",
      hall_cmp_unit: "unit {w}×{d}",
      hall_cmp_hall: "hall {w}×{d} · {area} m²",
      hall_cmp_permw: "{v} m²/MW",
      hall_view_sect: "Section",
      hint_hall: "Wheel to zoom, drag to pan — dimensions in mm, redrawn as you change the inputs above",
      hall_pod_opt: "POD {n} — {kw}kW",
      hall_pod_note: "Expands one of the {n} PODs ({kw}kW) sized in section ④.",
      hall_rack_note: "{racks} racks · {rows} row(s) of {perRow}",
      hall_cdu_note: "{n} required + 1 spare = {total} (N+1)",
      hall_elec_room: "Electrical room",
      hall_hot_aisle: "Hot",
      hall_cold_aisle: "Cold",
      hall_raised: "Raised floor",
      hall_rack_top: "Rack top",
      hall_busway: "Busway",
      hall_ceil: "Floor height",
      hall_rack_row: "{n} racks × {kw}kW",
      hall_summary: "POD {pod} · {kw}kW → {racks} racks at {rackKW}kW · {rows} rows × {perRow} · {cdu} CDUs · {w}×{depth}mm ≈ {area} m²",
      pipe_chw_s: "20°C supply CHW",
      pipe_chw_r: "28°C air cooler return CHW",
      pipe_cdu_ps: "40°C CDU primary supply",
      pipe_cdu_pr: "48°C CDU primary return",
      pipe_cdu_ss: "45°C CDU secondary supply",
      pipe_cdu_sr: "55°C CDU secondary return",
      src_avg: "Average per hall — {n} halls, {mw}MW each",
      src_hall: "Data hall {n} — {mw}MW · {topo}",
      src_manual: "Enter manually",
      src_note_avg: "Uses the IT capacity in ⓪ divided by the hall count; the total load below fills in automatically.",
      src_note_hall: "Takes this hall's {mw}MW and the redundancy scheme set for it in ⓪, carried through to ②.",
      src_note_manual: "Type the total load below. It will not follow ⓪.",
      hint_itSync_on: " — uses the {mw}MW sum of the {n} data halls below. Uncheck to enter a target instead.",
      hint_itSync_off: " — a target you entered (halls below total {mw}MW). Use \\u201csplit evenly\\u201d to distribute it.",
      hint_maxSetCapacity: 'Derived from ①~③ as effective capacity × N × transformers per module — halls above it are flagged in the table below',
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
      hint_diagram4: 'Wheel to zoom · click a room or a POD: highlight what it connects to · double-click a room: mark lost / double-click empty space: back to normal',
      btn_zoomReset: 'Reset',
      btn_expand: 'Expand',
      btn_modalClose: 'Close ✕',
      label_podCapacity: 'Load per POD (kW)',
      label_podCount: 'POD count',
      label_podAuto: 'Auto: total load ÷ POD capacity',
      hint_podCapacity: 'Power drawn by one rack group (POD) — this block is the unit that gets dual-fed',
      hint_pod_manual: '— {n} PODs × {cap}kW = {total}MW for the hall (this total becomes the ① total load)',
      hint_pod_auto: '— {n} PODs from the total load, about {kw}kW each. Uncheck to model fixed blocks such as 6MW PODs.',
      pod_row_title: 'Data hall PODs — {n} × {cap}kW = {mw}MW · per set {sets}',
      pod_row_title_split: 'Data hall PODs — {n} × {cap}kW = {mw}MW · split {split} ways → {blocks} feed blocks × {blockKW}kW · per set {sets}',
      label_podSplit: 'POD feed split',
      assign_label: 'POD to set',
      assign_auto: 'Auto',
      assign_auto_note: 'Assigned automatically to the least loaded set — pick one to pin that block.',
      assign_manual_note: 'Pinned blocks (outlined) stay where you put them; the rest fill in automatically.',
      btn_podStudy: 'POD study ↗',
      btn_podJson: 'Apply config JSON',
      btn_podJsonApply: 'Apply',
      ph_podJson: 'Paste the contents of the POD study page’s config JSON download',
      podJson_ok: '✓ {racks} racks · {kw}kW IT ({mw}MW) · PUE {pue} — applied as the load per POD',
      podJson_err_parse: '⚠ Not valid JSON. Paste the downloaded config JSON exactly as it is.',
      podJson_err_shape: '⚠ No counts/kw arrays found. Check that this is the POD study config JSON.',
      podJson_err_empty: '⚠ Rack counts or kW per rack come to zero.',
      podStudy_loaded: '{racks} racks · {kw}kW IT applied',
      hint_podSplit_1: 'A whole POD goes to one set. Set loads differ when the POD count is not a multiple of the set count.',
      warn_podSplit_sets: '⚠ Splitting {split} ways needs at least {split} room sets (currently {sets}) — the branches land in the same set, so the split buys nothing.',
      hint_podSplit_n: 'Each POD is split {split} ways ({blockKW}kW each) across different sets — every branch is still a full {topo} feed, and the sets come out even.',
      set_label: 'S{n}',
      pod_feed_caption: '{feeds} feeders per POD ({topo}) — tapped from each electrical room’s distribution bus',
      pod_feed_caption_comb: '2 feeders per POD (combinatorial) — a different pair of rooms carries half each, {pairs} combinations',
      pod_chip: 'POD {n}',
      legend_pod_note: 'POD (rack group) — the hall is split into PODs, each dual-fed by {feeds} feeders from the buses above',
      legend_pod_note_comb: 'POD (rack group) — the hall is split into PODs, each dual-fed by its own pair of rooms ({pairs} combinations)',
      warn_podOver: '⚠ Actual load per POD exceeds the configured capacity — raise the count or the capacity.',
      comb_pod_summary: 'One block = one POD · {n} × {cap}kW ({kw}kW actual each) — {zones} of {pairs} room combinations in use ({perZone} PODs each on average). Count and capacity are set in the POD fields in ①.',
      h5_title: 'Combinatorial distribution layout', h5_desc: 'Rooms paired up to dual-feed each POD — room count and POD count come from ① and ④',
      h5_explain: '<b>Combinatorial distribution (N choose 2)</b> — M electrical rooms pair up two-by-two to dual-feed IT zones. Each room participates in (M-1) zones; if one room is lost, its partner room alone absorbs that zone\'s full load. Total zones = M×(M-1)÷2 (e.g. M=4 → 6 zones).',
      label_combFailRoom: 'Room lost in emergency',
      hint_diagram5: 'Wheel to zoom · drag to pan · double-click a room: mark lost / double-click empty space: back to normal',
      refTable_title: 'Reference examples (① total load {load}MW · {rating}kVA rating · {safety} safety factor)',
      refTable_th_topo: 'Scheme', refTable_th_load: 'Total load', refTable_th_step1: '① Design load / module',
      refTable_th_step2: '② Tx / module', refTable_th_step3: '③ Total units',
      refTable_row1: '2oo3 (distributed)', refTable_row2: '3oo4 (distributed)', refTable_row3: 'N+1 (standby, N=3)',
      refTable_row4: 'N+2C (standby, N=3)', refTable_row5: '2N (full redundancy)',
      unit_3units: '3', unit_4units: '4', unit_8units: '8', unit_12units: '12', unit_15units: '15', unit_16units: '16',
      globalFootnote: 'Total transformer units = ⌈ (① design load / module) ÷ (rating × safety factor) ⌉ × (N + C) &nbsp;|&nbsp; Distributed: ①=load÷N (all modules run simultaneously, absorbs up to C simultaneous losses without switching) &nbsp;|&nbsp; Standby: ①=load÷N (N duty modules share it, C stay idle) &nbsp;|&nbsp; Full: ①=load (each train independently covers 100%)',
      export_title: 'Save', export_desc: 'Save the current inputs, results, and diagrams as a document.',
      view_sequential: 'Sequential', view_dual: 'Dual',
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
      total_normal: '{m} modules × {units} tx/module = {total} transformers total  (rating {rating}kW, effective {eff}kW)',
      total_emergency: '{active} of {m} modules running to cover full load · {activeTx} of {total} transformers running',
      total_normal_sets: '{topo}: {perSet} rooms × {sets} sets = {rooms} rooms · {total} transformers  (rating {rating}kW, effective {eff}kW)',
      total_emergency_rooms: '{m} modules · {activeRooms} of {rooms} rooms running · {activeTx} of {total} transformers running',
      module_label_group: 'Group {n}',
      preset_title: 'Presets',
      preset_placeholder: 'Preset name (e.g. 60MW 3 halls)',
      preset_save: 'Save',
      preset_delete: 'Delete',
      preset_reset: 'Defaults',
      preset_file_save: "Save to file",
      preset_file_load: "Load from file",
      fb_open: "Feedback",
      fb_title: "Feedback",
      fb_title_ph: "One-line summary",
      fb_body_ph: "What got in the way, and what would be better",
      fb_attach: "Attach the current settings",
      fb_add: "+ Add",
      fb_mail: "Email the weekly digest",
      fb_copy: "Copy the digest",
      fb_export: "Export (.json)",
      fb_import: "Import",
      fb_filter_all: "All",
      fb_cat_bug: "Bug",
      fb_cat_calc: "Calculation",
      fb_cat_feature: "Feature",
      fb_cat_ui: "Interface",
      fb_cat_etc: "Other",
      fb_state_new: "Unsorted",
      fb_state_applied: "Applied",
      fb_state_hold: "On hold",
      fb_state_rejected: "Not doing",
      fb_count: "{total} total · {n} unsorted",
      fb_empty: "Nothing yet. Write one above and add it.",
      fb_added: "✓ Added",
      fb_need_text: "⚠ Write something first",
      fb_digest_head: "# Feedback digest (last {days} days · {n} items)",
      fb_mail_subject: "[DC calculator] Feedback digest {date}",
      fb_mail_opened: "✓ Opened your mail app — check it, then send",
      fb_mail_long: "⚠ Too long for a mail link; use Copy the digest instead",
      fb_copied: "✓ Digest copied",
      fb_copy_fail: "⚠ Copy failed — use Export instead",
      fb_exported: "✓ Downloaded as {name}",
      fb_imported: "✓ Imported {n} items",
      fb_import_bad: "⚠ That is not a feedback file",
      fb_note: "Feedback is kept in this browser. The mail button opens your mail app with the text filled in; you send it yourself.",
      preset_file_default: "datacentre_study",
      preset_file_saved: "✓ Downloaded as {name}",
      preset_file_loaded: "✓ Loaded {name} — inputs, plans and SLD restored",
      preset_file_badjson: "⚠ Could not read that JSON file.",
      preset_file_badfile: "⚠ That is not a settings file saved by this app.",
      preset_choose: 'Load a saved preset ▾',
      preset_saved: '✓ Saved “{name}”',
      preset_loaded: '✓ Loaded “{name}”',
      preset_deleted: 'Deleted “{name}”',
      preset_reset_done: 'Restored the defaults',
      preset_need_name: 'Enter a name to save under',
      preset_need_pick: 'Pick a preset to delete',
      dist_bus: 'Bus distribution',
      dist_comb: 'Combinatorial distribution',
      dist_bus_hint: 'Each POD is fed from all {perSet} rooms of its set — {topo} means {perSet} feeders, and the survivors carry the whole POD when some are lost. ({sets} sets)',
      dist_comb_hint: '⚠ Combinatorial is fixed at 2 feeders per POD — pairing 2 of the {perSet} rooms in a set cannot express an N-of-M scheme such as {topo}. ({used} of {pairs} combinations) Use bus distribution to study 3oo4.',
      dist_comb_need3: '⚠ Combinatorial distribution needs at least 3 rooms per set (currently {rooms}) — showing bus distribution.',
      label_roomCapacity: 'Capacity per room (kW)',
      room_cap_line: 'capacity {cap}kW · {pct}% loaded',
      label_roomCapAuto: 'Transformers per room × effective capacity',
      hint_roomCapAuto: ' — {need}kW needed per room on a loss ÷ {eff}kW effective → rounded up to {tx} ({got}kW), {head}% spare. That rounding is why the loss-case loading lands below 100%. Uncheck to set it yourself.',
      hint_roomCapManual: ' — that capacity needs {tx} transformers per room ({eff}kW each), {total} in total.',
      alloc_ok: '✓ Feasible — {pods} PODs across {rooms} rooms, {feeds} feeders each. Peak room loading {ratio}% normally, {emergency}% with {lost} room(s) lost (the surviving {n} carry it all, within capacity)',
      alloc_over: '⚠ Not feasible — {over} room(s) already over capacity in normal operation (peak {ratio}%). Raise room capacity or set count, or lower the POD load.',
      alloc_ok_split: '✓ Feasible — {realPods} PODs split {split} ways into {pods} feed blocks across {rooms} rooms, {feeds} feeders each. Peak room loading {ratio}% normally, {emergency}% with {lost} room(s) lost (within capacity)',
      alloc_over_emergency: '⚠ Over capacity on a loss — {ratio}% is fine normally, but losing {lost} room(s) pushes the surviving {n} to {emergency}%. Raise room capacity or add a set.',
      alloc_unfed: '⚠ Allocation — {unfed} POD(s) lost every feeder. This redundancy scheme cannot cover that combination of losses.',
      label_roomSets: 'Room sets',
      h6_title: 'SLD (Single Line Diagram)', h6_desc: 'Utility feed → emergency generator → main bus → per-module transformer/UPS → PDU → rack PODs — mirrors the same normal/emergency state as ④',
      hint_sld: 'Wheel to zoom · drag to pan · automatically mirrors the same normal/emergency state as the ④ configuration diagram',
      sld_utility: 'Utility feed', sld_utility_sub: 'dual feed, always-on', sld_generator: 'Emergency generator', sld_generator_sub: 'parallel operation',
      sld_mainbus: 'Main bus', sld_legend_note: 'Solid = always-energized path · Dashed = standby/lost path (same as ④\'s normal/emergency state)',
      sld_mode_auto: 'Auto-generate', sld_mode_manual: 'Manual draw',
      sld_palette_title: 'Equipment palette — click to add', sld_seed: 'Load current system', sld_clear: 'Clear all',
      hint_sld_manual: 'Drag a block to move · click two blocks in turn to connect · select a block then click a line to tap off it (battery, generator…) · click a line alone to toggle main↔standby · double-click a block/line to delete',
      sld_status_idle: 'Click a block to start a connection ({n} blocks · {e} lines)',
      sld_status_selected: '“{name}” selected — click a block to connect to, or click a line to tap off it (click it again to cancel)',
      sld_edge_main: 'Main', sld_edge_standby: 'Standby',
      sld_legend_manual: 'Solid = main path · Dashed = standby path — click a line to toggle between them',
      sldb_kepco: 'Utility substation', sldb_ds: 'Disconnecting switch', sldb_gcb: 'Gas circuit breaker', sldb_vcb: 'Vacuum circuit breaker',
      sldb_acb: 'Air circuit breaker', sldb_mccb: 'Molded case CB', sldb_mtr: 'Main transformer', sldb_tr: 'Transformer',
      sldb_bus: 'Bus bar', sldb_gen: 'Emergency generator', sldb_gcp: 'Gen. control panel', sldb_syn: 'Synchronizing panel',
      sldb_ctts: 'Closed transition TS', sldb_sts: 'Static transfer switch', sldb_ups: 'Uninterruptible PS', sldb_bat: 'Battery',
      sldb_pdu: 'Power distribution unit', sldb_pod: 'Rack group (POD)', sldb_rack: 'Server rack', sldb_load: 'General load', sldb_junction: 'Junction',
      h_plan_title: 'Plan & section block diagram',
      h_plan_desc: 'Lay out electrical, mechanical and data hall spaces as blocks, one tab per floor, and compare them side by side',
      hint_plan: 'Drag a block to move it · select it and drag an edge to resize · double-click to rename · Delete to remove',
      plan_add: '+ Add block',
      plan_del: 'Delete block',
      plan_snap: 'Snap to grid',
      plan_magnet: 'Snap to blocks',
      plan_all: 'View all',
      sched_group: "Discipline",
      sched_name: "Room",
      sched_area: "Area (m²)",
      sched_note: "Notes",
      sched_equip: "Equipment",
      sched_move: "Move to level",
      sched_add: "+ Add room",
      sched_add_hint: "Also creates a block on this level's plan",
      sched_equip_add: "+ Equipment",
      sched_floor_meta: "{n} rooms · {area} m²",
      plan_eq_rooms: "{n} rooms",
      plan_eq_bus: "Main bus / incomer",
      plan_eq_per_set: "per set",
      plan_eq_runtime: "Battery racks",
      plan_eq_gen: "Standby (x1.25)",
      plan_eq_cool: "Chillers {kw}kW",
      plan_eq_pump: "Pumps / headers",
      plan_eq_net: "Network racks",
      unit_dae_short: "",
      sld_name_ph: "Name of the selected block",
      sld_del_node: "Delete selected",
      h_sched: "Room schedule",
      sched_empty: "Rooms appear here as you add blocks. Click a row to select that block on the plan.",
      sched_sum: "{floors} levels · {rooms} rooms · {total} m² total ({detail})",
      unit_room: ' rooms',
      plan_auto: 'Auto layout',
      plan_auto_confirm: 'This replaces every tab you have drawn with a generated layout. Continue?',
      plan_auto_done: '✓ Laid out 3 tabs for {mw}MW IT · {pods} data halls · {rooms} electrical rooms (about {area} m² of concept area — rule-of-thumb figures, drag to adjust)',
      plan_auto_tab_upper: 'Upper plan (IT & telecom)',
      plan_auto_tab_lower: 'Lower plan (electrical & mechanical)',
      plan_auto_tab_sect: 'Section A-A',
      plan_sect_upper: 'Upper · {n} data halls × {kw}kW',
      plan_sect_lower: 'Lower · {sets} room sets, {rooms} rooms',
      plan_sect_mech: 'Basement · mechanical (chillers, pumps, water)',
      plan_name_ph: 'Name of the selected block',
      plan_tab_add: '+ Tab',
      plan_tab_del: 'Delete tab',
      plan_tab_hint: 'Double-click to rename the tab',
      plan_tab_default: 'Level {n} plan',
      plan_empty: 'Add a block and drag it into place',
      plan_status_tab: '{name} · {n} blocks',
      plan_status_all: 'Showing all {n} tabs — pick a tab to edit',
      plan_group_elec: "Electrical",
      plan_group_mech: "Mechanical",
      plan_group_it: "IT & telecom",
      plan_group_ops: "Operations",
      plan_group_misc: "Other",
      plan_kind_main_elec: "Main electrical room",
      plan_kind_mv: "MV switchgear room",
      plan_kind_lv: "LV switchgear room",
      plan_kind_tr: "Transformer room",
      plan_kind_ups: "UPS room",
      plan_kind_batt: "Battery room",
      plan_kind_gen: "Generator room",
      plan_kind_sts: "STS room",
      plan_kind_mech: "Mechanical room",
      plan_kind_chiller: "Chiller room",
      plan_kind_pump: "Pump room",
      plan_kind_crah: "CRAH room",
      plan_kind_cdu: "CDU room",
      plan_kind_water: "Water treatment room",
      plan_kind_hall: "Data hall",
      plan_kind_mmr: "Meet-me room",
      plan_kind_mdf: "MDF room",
      plan_kind_idf: "IDF room",
      plan_kind_network: "Network room",
      plan_kind_noc: "NOC",
      plan_kind_soc: "SOC",
      plan_kind_control: "Control room",
      plan_kind_bms: "BMS room",
      plan_kind_security: "Security room",
      plan_kind_staging: "Staging room",
      plan_kind_storage: "Storage room",
      plan_kind_dock: "Loading dock",
      plan_kind_corridor: "Corridor",
      plan_kind_shaft: "Shaft",
      plan_kind_etc: "Other room",
      h_review_title: "System review",
      h_review_desc: "Checks the current configuration for capacity, redundancy and distribution",
      rv_unfed_h: "Some PODs lose every feeder",
      rv_unfed: "{n} feed block(s) end up with every feeding room down. This configuration does not survive that loss.",
      rv_unfed_fix: "Raise the spare count (C), or switch to bus distribution so the whole set feeds each POD.",
      rv_emergency_over_h: "Rooms run out of capacity on a loss",
      rv_emergency_over: "With {lost} room(s) lost the surviving {n} each carry {em}% of capacity, above 100%, so the load cannot actually be served.",
      rv_emergency_over_fix: "Raise room capacity, add a set, or split the PODs further to lighten each set.",
      rv_emergency_tight_h: "Almost no margin on a loss",
      rv_emergency_tight: "Loss-case loading of {em}% sits close to the limit, leaving nothing for growth or load imbalance.",
      rv_emergency_tight_fix: "If growth is planned, step the room capacity up one size.",
      rv_emergency_low_h: "Substantially over-provisioned",
      rv_emergency_low: "Only {normal}% normally and {em}% even on a loss. The transformers are far larger than needed.",
      rv_emergency_low_fix: "Lower the transformer rating, reduce the set count, or adjust the POD split to cut plant.",
      rv_emergency_ok_h: "Redundant capacity is sound",
      rv_emergency_ok: "{normal}% normally, {em}% on a loss, within capacity. That matches the {topo} design point ({design}% to 100%) with sensible margin.",
      rv_overbuilt_h: "Rounding transformers up leaves a large margin",
      rv_overbuilt: "A loss needs {need}kW per room but {tx} transformer(s) give {got}kW, {head}% spare - over-provisioning created by rounding to whole units.",
      rv_overbuilt_fix: "Split the PODs further to lighten each set, or drop the transformer rating to reduce the rounding loss.",
      rv_notight_h: "Only {head}% spare",
      rv_notight: "Installed capacity barely exceeds the design requirement, leaving nothing for load growth or power-factor drift.",
      rv_notight_fix: "Re-check with a lower safety factor, or step the room capacity up.",
      rv_imbalance_h: "Sets are unevenly loaded",
      rv_imbalance: "{detail} - the heaviest set is {spread}% above the lightest, so transformer counts differ between sets.",
      rv_imbalance_fix_split: "Setting the POD feed split equal to the set count spreads them evenly.",
      rv_imbalance_fix_count: "Make the POD count a multiple of the set count, or adjust the set count.",
      rv_balanced_h: "Sets are evenly loaded",
      rv_balanced: "All {sets} sets carry {mw}MW each, so the rooms can share one specification.",
      rv_comb_mismatch_h: "Distribution does not match the redundancy scheme",
      rv_comb_mismatch: "Combinatorial is fixed at 2 feeders per POD, pairing 2 of the {perSet} rooms in a set. It cannot express the N-of-M structure of {topo}.",
      rv_comb_mismatch_fix: "Switch to bus distribution so every room in the set feeds the POD.",
      rv_split_sets_h: "More POD branches than sets",
      rv_split_sets: "Split {split} ways with only {sets} set(s), so branches of the same POD share a set and the split achieves nothing.",
      rv_split_sets_fix: "Raise the set count to at least {split}, or lower the split to {sets}.",
      rv_rating_cap_h: "Transformer rating is above the cap",
      rv_rating_cap: "{rating}kVA exceeds the {cap}kVA cap and falls outside standard sizing.",
      rv_rating_cap_fix: "Drop to {cap}kVA or below and add units instead.",
      rv_many_tx_h: "{tx} transformers in one room",
      rv_many_tx: "Crowding transformers into one room drives up floor area, clearances and heat rejection.",
      rv_many_tx_fix: "Compare against spreading them over more sets or more rooms per set.",
      rv_full_cost_h: "Full redundancy doubles the plant",
      rv_full_cost: "Each train covers the whole load on its own, so {total} transformers are installed and normal utilisation is low.",
      rv_full_cost_fix: "Unless uninterrupted operation is absolute, a distributed scheme (2oo3, 3oo4) cuts the plant substantially.",
      rv_pue_low_h: "Little headroom in the utility supply",
      rv_pue_low: "A PUE of {pue} is tight once cooling and losses are counted, leaving little room for non-IT load.",
      rv_pue_low_fix: "Increase the utility capacity or revisit the IT capacity target.",
      rv_pue_high_h: "Utility supply looks oversized",
      rv_pue_high: "A PUE of {pue} is above typical design values; the incoming supply may be over-invested.",
      rv_pue_high_fix: "Re-check the cooling approach and target PUE, then adjust the utility capacity.",
      rv_summary_h: "Configuration summary",
      rv_summary: "{pods} PODs x {podKW}kW = {mw}MW - {topo}, {perSet} rooms x {sets} sets = {rooms} rooms - {total} transformers ({rating}kVA) - {feeds} feeders per block.",
      label_roomsPerSet: 'Rooms per set',
      label_roomsPerSetAuto: 'Same as N+C in ②',
      hint_roomSets: 'One {topo} set = {perSet} rooms → {sets} sets = {total} rooms in all. PODs go to the least loaded set first.',
      overload_warn: '⚠ {n} modules lost but only {c} catchers available — {diff} module(s) worth of load cannot be absorbed.',
      legend_tx_note: 'Transformer (T) · % below is per-transformer utilization (color matches its module)',
      diagramDesc: '({topo} · {mode})',
      topoLabel_distributed: 'Distributed', topoLabel_standby: 'Standby', topoLabel_full: 'Full',

      room_label: 'Room {letter}', room_offline: '⨯ Lost',
      footnote_comb: 'The transformer count inside one room is sized in the ①~④ calculator, not this layout. When room-level redundancy is already secured by the combinatorial layout, rooms are typically sized as pure N (no catcher, C=0) to avoid over-design — set C≥1 if you also want redundancy inside each room.',
      hint_combSource: 'Room count comes from ④, total IT load and POD count from ① — currently {m} rooms ({pairs} combinations) · {mw}MW total',
      comb_legend_room: 'Room {letter}{suffix}', comb_legend_offline_suffix: ' (lost)',
      comb_summary_normal: '{m} rooms × normal load {perRoom}MW = total IT load {total}MW ({zones} feed combinations in use · {zoneLoad}MW per POD)',
      comb_summary_emergency: 'If room {room} is lost, the other {rest} rooms rise to {newLoad}MW each (+{diff}MW vs. {oldLoad}MW normal)',

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
    document.querySelectorAll('[data-i18n-title]').forEach(el => {
      el.setAttribute('title', t(el.getAttribute('data-i18n-title')));
    });
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
      el.setAttribute('placeholder', t(el.getAttribute('data-i18n-placeholder')));
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
    calculate();
    renderSets();
    if (typeof refreshLoadSourceOptions === 'function') { try { refreshLoadSourceOptions(); } catch (e) {} }
    if (typeof refreshPlanTexts === 'function') { try { refreshPlanTexts(); } catch (e) {} }
    if (typeof refreshFeedbackTexts === 'function') { try { refreshFeedbackTexts(); } catch (e) {} }
    if (typeof refreshHallTexts === 'function') { try { refreshHallTexts(); } catch (e) {} }
    if (typeof refreshSldTexts === 'function') { try { refreshSldTexts(); } catch (e) {} }
    if (typeof refreshPresetOptions === 'function') { try { refreshPresetOptions(presetSelect.value); } catch (e) {} }
  }

  document.getElementById('langKoBtn').addEventListener('click', () => setLang('ko'));
  document.getElementById('langEnBtn').addEventListener('click', () => setLang('en'));
  applyStaticTranslations();
  document.getElementById('langKoBtn').classList.toggle('active', currentLang === 'ko');
  document.getElementById('langEnBtn').classList.toggle('active', currentLang === 'en');

  // ===== 화면 보기 방식: 순차형(기본, 원래처럼 위→아래) / 듀얼형(왼쪽 입력 · 오른쪽 다이어그램 고정) =====
  let viewMode = localStorage.getItem('prc_view') || 'sequential';
  function setViewMode(mode) {
    viewMode = mode;
    localStorage.setItem('prc_view', mode);
    document.body.classList.toggle('view-dual', mode === 'dual');
    document.getElementById('viewSeqBtn').classList.toggle('active', mode === 'sequential');
    document.getElementById('viewDualBtn').classList.toggle('active', mode === 'dual');
  }
  document.getElementById('viewSeqBtn').addEventListener('click', () => setViewMode('sequential'));
  document.getElementById('viewDualBtn').addEventListener('click', () => setViewMode('dual'));
  setViewMode(viewMode);

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

  // Central setter for the ①번 데이터홀 총부하 so every dependent section stays in sync even
  // when the value is pushed in programmatically (e.g. from ⓪번 홀당 용량 auto-calc), since
  // setting .value directly does not fire 'input'.
  function applyMainLoad(mw) {
    loadInput.value = Number(mw.toFixed(2));
    calculate();
  }

  function calculate() {
    const N = parseInt(nInput.value);
    const C = parseInt(cInput.value);
    // POD 설정을 먼저 반영한다 — POD 주도 모드에서는 POD 합계가 총부하가 되므로
    // 이 호출이 loadInput을 바꾼 뒤에 읽어야 아래 전체가 같은 값을 쓴다.
    if (typeof updatePodControls === 'function') { try { updatePodControls(); } catch (e) {} }
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
    // 세트당 전기실 수가 ②번 N+C와 다를 수 있으므로 ④와 같은 값을 쓴다
    const M = getRoomsPerSet(N, C); // 세트 1개의 전기실(모듈) 수

    // 전기실 세트를 S개 두면 POD가 세트에 배분되고, 모듈은 자기 세트 몫만 책임진다.
    // ④ 다이어그램과 같은 배분 결과를 써서 두 섹션의 대수가 어긋나지 않게 한다.
    const setPlan = planRoomSets(getPodPlan(load), N, M, effectiveCap);
    const setLoadKW = Math.max(...setPlan.setLoad);           // 가장 무거운 세트 기준
    const perModuleLoad = Math.max(...setPlan.designPerRoom);  // kW, design basis
    const perModuleUnits = Math.max(...setPlan.txPerSet);
    const totalUnits = setPlan.totalTx;

    document.getElementById('step1').textContent = fmt(perModuleLoad / 1000, 2) + ' MW';
    document.getElementById('stepCap').textContent = fmt(effectiveCap) + ' kW';
    document.getElementById('step2').textContent = t('unit_dae', { n: perModuleUnits });
    document.getElementById('resultTotal').textContent = t('unit_dae', { n: totalUnits });

    let sub = '';
    if (currentTopo === 'distributed') {
      const normalPct = (setLoadKW / M) / (perModuleUnits * effectiveCap) * 100;
      const emergencyPct = (setLoadKW / N) / (perModuleUnits * effectiveCap) * 100;
      sub = t('sub_distributed', { units: perModuleUnits, M, normal: fmt(normalPct), C, emergency: fmt(emergencyPct) });
      if (emergencyPct > 100) {
        warnBox.textContent = t('warn_distributed', { pct: fmt(emergencyPct) });
        warnBox.style.display = 'block';
      }
    } else if (currentTopo === 'standby') {
      const dutyPct = (setLoadKW / N) / (perModuleUnits * effectiveCap) * 100;
      sub = t('sub_standby', { units: perModuleUnits, N, C, M, pct: fmt(dutyPct) });
      if (dutyPct > 100) {
        warnBox.textContent = t('warn_standby', { pct: fmt(dutyPct) });
        warnBox.style.display = 'block';
      }
    } else if (currentTopo === 'full') {
      const pct = setLoadKW / (perModuleUnits * effectiveCap) * 100;
      sub = t('sub_full', { units: perModuleUnits, M, pct: fmt(pct) });
    }
    document.getElementById('resultSub').textContent = sub;

    const perTxLoadKW = perModuleLoad / perModuleUnits;
    updateRatingRecommend(perTxLoadKW, combined);
    renderDiagram(N, C, perModuleUnits, load, rating, effectiveCap);
    // ⑤번 전기실 개수(M) 상한은 "방 1개당 변압기 최소 1대"라는 물리적 제약을 반영해,
    // 지금 ①~④ 설정으로 계산된 총 변압기 대수를 넘지 못하도록 동적으로 갱신한다.
    // (이 calculate()의 최초 1회 호출은 ⑤번 const들이 아직 선언되기 전에 실행되므로,
    // 그 시점의 TDZ 참조 오류는 무시 — ⑤번 초기화가 끝난 뒤 다시 호출되면서 정상 반영됨)
    if (typeof renderRefTable === 'function') { try { renderRefTable(); } catch (e) {} }
    if (typeof refreshMaxSetCapacityHint === 'function') { try { refreshMaxSetCapacityHint(); renderSets(); } catch (e) {} }
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
  const ROOM_LETTERS = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];
  let lastRoomCount = 0;
  // 전기실이나 POD를 클릭하면 그것과 이어진 회선만 또렷하게 남고 나머지는 흐려진다.
  // 둘 중 하나만 활성화된다 — 전기실을 고르면 그 전기실이 먹이는 POD가, POD를 고르면
  // 그 POD에 급전하는 전기실이 드러난다.
  let highlightRoom = null;
  let highlightPod = null;
  function setHighlightRoom(i) {
    highlightPod = null;
    highlightRoom = (highlightRoom === i) ? null : i;
    calculate();
  }
  function setHighlightPod(i) {
    highlightRoom = null;
    highlightPod = (highlightPod === i) ? null : i;
    calculate();
  }
  function clearHighlight() {
    if (highlightRoom === null && highlightPod === null) return false;
    highlightRoom = null; highlightPod = null;
    calculate();
    return true;
  }
  let lastPerModuleUnits = 1;   // ③이 산정한 모듈당 변압기 대수 — ⓪ 권장 최대용량에 쓰인다

  // ===== ④ 분배 방식 =====
  // 같은 입력(전기실 수·용량, POD 수·용량, 이중화 방식)에 대해 POD를 전기실에 물리는
  // 두 가지 방식을 토글로 전환한다.
  //  · 모선형: 이중화 방식이 정한 전기실 전부가 모선을 통해 모든 POD에 병렬 급전
  //  · 조합형: POD마다 서로 다른 전기실 2곳(N choose 2 조합)이 짝지어 이중급전
  let distMode = localStorage.getItem('prc_dist') === 'comb' ? 'comb' : 'bus';
  function updateDistHint(combActive, perSet, pairCount, usedPairs, sets, topoName) {
    const el = document.getElementById('distHint');
    if (!el) return;
    if (distMode === 'comb' && !combActive) {
      el.textContent = t('dist_comb_need3', { rooms: perSet });
      el.style.color = 'var(--warn)';
    } else if (combActive) {
      el.textContent = t('dist_comb_hint', { perSet, pairs: pairCount, used: usedPairs, topo: topoName });
      el.style.color = 'var(--warn)';
    } else {
      el.textContent = t('dist_bus_hint', { perSet, topo: topoName, sets });
      el.style.color = '';
    }
  }
  function applyDistButtons() {
    // .active 만으로는 색이 안 붙는다 — 보라색 알약은 .active.normal 조합이다
    [['distBusBtn', 'bus'], ['distCombBtn', 'comb']].forEach(([id, mode]) => {
      const btn = document.getElementById(id);
      if (!btn) return;
      const on = distMode === mode;
      btn.classList.toggle('active', on);
      btn.classList.toggle('normal', on);
    });
  }
  function setDistMode(mode) {
    distMode = mode === 'comb' ? 'comb' : 'bus';
    localStorage.setItem('prc_dist', distMode);
    applyDistButtons();
    calculate();
  }

  // ===== 전기실(물리적 방) 구성 =====
  // 이중화 방식은 "모듈(트레인/Duty/캐쳐)"을 몇 개 둘지만 정한다. 그 모듈의 변압기를 실제로
  // 몇 개의 방에 나눠 담을지는 별도 설정이다 — 기본값은 모듈 1개 = 전기실 1개이고,
  // 전기실 수를 늘리면 각 모듈의 변압기가 여러 방으로 쪼개진다. 방마다 최소 변압기 1대는
  // 들어가야 하므로 상한은 총 변압기 대수다 (전기실 8개 = 총 8대면 방당 1대씩).
  // ===== 시스템 검토 의견 =====
  // 계산 결과를 규칙으로 훑어 "이 구성이 적절한가"를 항목별로 알려준다.
  // 각 항목은 {level, key, vars, fix} — level은 bad(문제) / warn(주의) / good(양호) / info.
  function buildReview(ctx) {
    const items = [];
    const add = (level, key, vars, fixKey) => items.push({ level, key, vars: vars || {}, fixKey });
    const pct = v => fmtN(Math.round(v * 10) / 10);

    // 1. 상실 시 전기실 부하율 — 3oo4 등 N-of-M 설계를 결정하는 숫자
    const em = ctx.worstEmergency;
    if (ctx.unfedPods > 0) {
      add('bad', 'rv_unfed', { n: ctx.unfedPods }, 'rv_unfed_fix');
    } else if (em > 100) {
      add('bad', 'rv_emergency_over', { em: pct(em), lost: ctx.M - ctx.N, n: ctx.N }, 'rv_emergency_over_fix');
    } else if (em > 95) {
      add('warn', 'rv_emergency_tight', { em: pct(em) }, 'rv_emergency_tight_fix');
    } else if (em < 55) {
      add('warn', 'rv_emergency_low', { em: pct(em), normal: pct(ctx.worstNormal) }, 'rv_emergency_low_fix');
    } else {
      add('good', 'rv_emergency_ok', { em: pct(em), normal: pct(ctx.worstNormal), topo: ctx.topo, design: pct(ctx.N / ctx.M * 100) });
    }

    // 2. 변압기 정수 올림으로 생긴 여유 — 너무 크면 과설계
    if (ctx.head > 55) {
      add('warn', 'rv_overbuilt', { head: pct(ctx.head), need: fmtN(Math.round(ctx.needPerRoom)), tx: ctx.maxTx, got: fmtN(Math.round(ctx.gotPerRoom)) }, 'rv_overbuilt_fix');
    } else if (ctx.head < 5) {
      add('warn', 'rv_notight', { head: pct(ctx.head) }, 'rv_notight_fix');
    }

    // 3. 세트별 부하 불균형
    if (ctx.sets > 1 && ctx.setSpread > 1.05) {
      add('warn', 'rv_imbalance', {
        spread: pct((ctx.setSpread - 1) * 100),
        detail: ctx.setLoad.map((l, i) => 'S' + (i + 1) + ' ' + fmtN(Math.round(l / 100) / 10) + 'MW').join(' · '),
      }, ctx.split < ctx.sets ? 'rv_imbalance_fix_split' : 'rv_imbalance_fix_count');
    } else if (ctx.sets > 1) {
      add('good', 'rv_balanced', { sets: ctx.sets, mw: fmtN(Math.round(ctx.setLoad[0] / 100) / 10) });
    }

    // 4. 분배 방식이 이중화 방식을 표현하는가
    if (ctx.comb && ctx.perSet > 2) {
      add('bad', 'rv_comb_mismatch', { topo: ctx.topo, perSet: ctx.perSet }, 'rv_comb_mismatch_fix');
    }

    // 5. POD 분할이 세트 수를 넘지 않는가
    if (ctx.split > ctx.sets) {
      add('bad', 'rv_split_sets', { split: ctx.split, sets: ctx.sets }, 'rv_split_sets_fix');
    }

    // 6. 변압기 정격 상한
    if (ctx.rating > RATING_MAX_KVA) {
      add('warn', 'rv_rating_cap', { rating: fmtN(ctx.rating), cap: fmtN(RATING_MAX_KVA) }, 'rv_rating_cap_fix');
    }

    // 7. 전기실 1곳에 변압기가 너무 많이 몰리는가
    if (ctx.maxTx >= 4) {
      add('warn', 'rv_many_tx', { tx: ctx.maxTx }, 'rv_many_tx_fix');
    }

    // 8. 완전이중화는 설비가 2배 — 의도한 선택인지 확인
    if (ctx.topoKind === 'full') {
      add('warn', 'rv_full_cost', { total: ctx.totalTx }, 'rv_full_cost_fix');
    }

    // 9. 수전용량 여유 (⓪번 기준)
    if (ctx.utilityMW > 0 && ctx.itMW > 0) {
      const pue = ctx.utilityMW / ctx.itMW;
      if (pue < 1.15) add('warn', 'rv_pue_low', { pue: fmtN(Math.round(pue * 100) / 100) }, 'rv_pue_low_fix');
      else if (pue > 1.6) add('warn', 'rv_pue_high', { pue: fmtN(Math.round(pue * 100) / 100) }, 'rv_pue_high_fix');
    }

    // 10. 총 설비 규모 요약 — 항상 마지막에
    add('info', 'rv_summary', {
      pods: ctx.pods, podKW: fmtN(Math.round(ctx.podKW)), mw: fmtN(Math.round(ctx.loadKW / 100) / 10),
      topo: ctx.topo, sets: ctx.sets, perSet: ctx.perSet, rooms: ctx.rooms,
      total: ctx.totalTx, rating: fmtN(ctx.rating), feeds: ctx.feedsPerPod,
    });

    const order = { bad: 0, warn: 1, good: 2, info: 3 };
    items.sort((a, b) => order[a.level] - order[b.level]);
    return items;
  }

  function renderReview(ctx) {
    const box = document.getElementById('reviewList');
    if (!box) return;
    const marks = { bad: '⚠', warn: '⚠', good: '✓', info: 'ℹ' };
    box.innerHTML = '';
    buildReview(ctx).forEach(it => {
      const div = document.createElement('div');
      div.className = 'review-item ' + it.level;
      const fix = it.fixKey ? `<div class="fix">→ ${t(it.fixKey, it.vars)}</div>` : '';
      div.innerHTML = `<span class="mark">${marks[it.level]}</span><div class="body">`
        + `<div class="head">${t(it.key + '_h')}</div>`
        + `<div class="detail">${t(it.key, it.vars)}</div>${fix}</div>`;
      box.appendChild(div);
    });
  }

  // 분배 결과 판정 — 용량을 넘기는 방이 있으면 경고, 급전원을 모두 잃은 POD가 있으면 더 강하게.
  function updateAllocVerdict(rooms, worstRatio, unfedPods, podCount, feedsPerPod, worstEmergency, N, M, podPlan) {
    const el = document.getElementById('allocVerdict');
    if (!el) return;
    const over = rooms.filter(r => r.capacityKW > 0 && r.loadKW > r.capacityKW + 0.5).length;
    let key, color;
    if (unfedPods > 0) { key = 'alloc_unfed'; color = 'var(--warn)'; }
    else if (over > 0) { key = 'alloc_over'; color = 'var(--warn)'; }
    else { key = 'alloc_ok'; color = 'var(--primary)'; }
    if (key === 'alloc_ok' && worstEmergency > 100.5) { key = 'alloc_over_emergency'; color = 'var(--warn)'; }
    // 분할했으면 '블록'이 급전 단위다 — POD 개수와 혼동되지 않게 문구를 바꾼다
    if (key === 'alloc_ok' && podPlan && podPlan.split > 1) key = 'alloc_ok_split';
    // 교과서 설계점: 평상시 N/M, 상실 시 100%. 실제 값과 나란히 보여 개념과 숫자를 잇는다.
    const designNormal = M > 0 ? Math.round(N / M * 1000) / 10 : 0;
    el.textContent = t(key, {
      pods: podCount, feeds: feedsPerPod, rooms: rooms.length,
      ratio: fmtN(Math.round(worstRatio * 10) / 10), over, unfed: unfedPods,
      emergency: fmtN(Math.round(worstEmergency * 10) / 10), lost: M - N, n: N,
      realPods: podPlan ? podPlan.pods : podCount, split: podPlan ? podPlan.split : 1,
      designNormal: fmtN(designNormal), N, M,
    });
    el.style.color = color;
    el.style.fontWeight = '700';
  }

  // 세트당 전기실 수. 기본은 ②번 N+C이고, 직접 올리면 "N개 중 R개" 구성이 된다
  // (N=3에 6실이면 3oo6 — 3실만 살아 있으면 POD 전량을 커버).
  function getRoomsPerSet(N, C) {
    const auto = document.getElementById('roomsPerSetAuto');
    const el = document.getElementById('roomsPerSet');
    const base = Math.max(1, (N || 1) + (C || 0));
    if (!auto || auto.checked || !el) return base;
    const v = parseInt(el.value, 10);
    return Math.max(Math.max(1, N || 1), Math.min(12, isFinite(v) && v > 0 ? v : base));
  }
  function syncRoomsPerSetControl(N, C, perSetRooms) {
    const auto = document.getElementById('roomsPerSetAuto');
    const el = document.getElementById('roomsPerSet');
    if (!el || !auto) return;
    el.disabled = auto.checked;
    el.style.background = auto.checked ? 'var(--primary-bg)' : '';
    el.min = Math.max(1, N);
    if (auto.checked) el.value = perSetRooms;
    else if (parseInt(el.value, 10) !== perSetRooms) el.value = perSetRooms;
  }
  function getRoomSetCount() {
    const el = document.getElementById('roomSets');
    const v = el ? parseInt(el.value, 10) : NaN;
    return Math.max(1, Math.min(12, isFinite(v) && v > 0 ? v : 1));
  }
  function isRoomCapAuto() {
    const el = document.getElementById('roomCapAuto');
    return el ? el.checked : true;
  }
  function getRoomCapacityKW() {
    if (isRoomCapAuto()) return null;
    const el = document.getElementById('roomCapacity');
    const v = el ? parseFloat(el.value) : NaN;
    return isFinite(v) && v > 0 ? v : null;
  }

  // 전기실은 '이중화 세트' 단위로 구성된다. 3oo4 한 세트 = 전기실 4개(N=3 상시 + C=1 여유)이고,
  // 세트를 S개 두면 전기실은 S × (N+C)개가 된다. POD는 세트에 배정되고, 그 세트의 전기실
  // 전부에서 급전받는다 — 4개 중 3개만 살아 있어도 POD 전량을 커버하는 게 3oo4의 의미다.
  // POD를 세트에 배분하고 세트별 설계부하·변압기 대수를 낸다.
  // ③ 계산 결과와 ④ 다이어그램이 같은 숫자를 쓰도록 한 곳에서만 계산한다.
  // POD 블록을 어느 세트에 붙일지 직접 지정한 값 (블록 번호 → 세트 번호).
  // 비어 있으면 자동 배분(부하가 적은 세트부터, 같은 POD의 갈래는 서로 다른 세트)을 쓴다.
  let podSetOverride = {};
  function clearPodSetOverride() {
    podSetOverride = {};
    calculate();
  }

  function planRoomSets(podPlan, N, perSet, effectiveCap) {
    const S = getRoomSetCount();
    // 매번 부하가 가장 적은 세트에 POD를 넣어 가능한 한 고르게 나눈다.
    const setPods = Array.from({ length: S }, () => []);
    const setLoad = new Array(S).fill(0);
    const split = podPlan.split || 1;
    const assigned = new Array(podPlan.count).fill(-1);

    // 직접 지정한 블록을 먼저 꽂는다 — 자동 배분이 남은 자리를 메운다.
    for (let p = 0; p < podPlan.count; p++) {
      const want = podSetOverride[p];
      if (want !== undefined && want >= 0 && want < S) {
        assigned[p] = want;
        setLoad[want] += podPlan.perPodKW;
      }
    }
    for (let p = 0; p < podPlan.count; p++) {
      if (assigned[p] >= 0) continue;
      // 같은 POD의 다른 갈래가 이미 쓴 세트는 피한다 — 한 세트에 몰리면 쪼갠 의미가 없다.
      const podStart = Math.floor(p / split) * split;
      const taken = new Set();
      for (let q = podStart; q < podStart + split; q++) if (assigned[q] >= 0) taken.add(assigned[q]);
      let best = -1;
      for (let i = 0; i < S; i++) {
        if (taken.has(i)) continue;
        if (best < 0 || setLoad[i] < setLoad[best]) best = i;
      }
      if (best < 0) { best = 0; for (let i = 1; i < S; i++) if (setLoad[i] < setLoad[best]) best = i; }
      assigned[p] = best;
      setLoad[best] += podPlan.perPodKW;
    }
    for (let p = 0; p < podPlan.count; p++) setPods[assigned[p]].push(p);
    const splitHonoured = split <= S;
    const fixedCap = getRoomCapacityKW();
    // 세트가 감당해야 하는 설계부하: 완전이중화는 트레인 1개가 세트 전량, 그 외는 N개가 분담.
    const designPerRoom = setLoad.map(l => (currentTopo === 'full' ? l : l / Math.max(1, N)));
    const txPerSet = designPerRoom.map(d =>
      Math.max(1, Math.ceil((fixedCap || d) / Math.max(1, effectiveCap))));
    const totalTx = txPerSet.reduce((n, tx) => n + tx * perSet, 0);
    return { sets: S, perSet, setPods, setLoad, designPerRoom, txPerSet, totalTx, fixedCap, splitHonoured };
  }
  function buildRoomSets(modules, plan, effectiveCap) {
    const rooms = [];
    for (let si = 0; si < plan.sets; si++) {
      for (let mi = 0; mi < plan.perSet; mi++) {
        const mod = modules[mi];
        rooms.push({
          setIndex: si, moduleIndex: mi, roomsInModule: 1, txCount: plan.txPerSet[si],
          role: mod.role, state: mod.state,
          capacityKW: plan.fixedCap || plan.txPerSet[si] * effectiveCap,
          designPerRoomKW: plan.designPerRoom[si],
          loadKW: 0,   // 아래에서 POD 분배 결과로 채운다
        });
      }
    }
    return Object.assign({}, plan, { rooms });
  }

  function updateRoomControls(plan, effectiveCap, topoName) {
    const hint = document.getElementById('roomHint');
    if (hint) {
      hint.textContent = t('hint_roomSets', {
        topo: topoName, perSet: plan.perSet, sets: plan.sets, total: plan.rooms.length,
      });
    }
    const capInput = document.getElementById('roomCapacity');
    const capHint = document.getElementById('roomCapHint');
    if (capInput) {
      const auto = isRoomCapAuto();
      capInput.disabled = auto;
      capInput.style.background = auto ? 'var(--primary-bg)' : '';
      const caps = [...new Set(plan.rooms.map(r => Math.round(r.capacityKW)))].sort((a, b) => a - b);
      if (auto) {
        capInput.value = caps[caps.length - 1] || Math.round(effectiveCap);
        // "상실 시 필요한 용량"에서 변압기 대수를 정수로 올리기 때문에 실제 부하율은
        // 교과서적인 100%가 아니라 그보다 낮게 나온다. 그 간극을 여기서 밝힌다.
        const need = Math.max(...plan.designPerRoom);
        const tx = Math.max(...plan.txPerSet);
        const got = plan.fixedCap || tx * effectiveCap;
        if (capHint) capHint.textContent = ' ' + t('hint_roomCapAuto', {
          eff: fmtN(Math.round(effectiveCap)),
          need: fmtN(Math.round(need)), tx, got: fmtN(Math.round(got)),
          head: fmtN(Math.round((got / Math.max(1, need) - 1) * 1000) / 10),
        });
      } else if (capHint) {
        const tx = plan.rooms[0] ? plan.rooms[0].txCount : 1;
        capHint.textContent = ' ' + t('hint_roomCapManual', {
          tx, eff: fmtN(Math.round(effectiveCap)), total: plan.rooms.length * tx,
        });
      }
    }
  }
  function roomColor(i) { return ROOM_COLORS[i % ROOM_COLORS.length]; }

  // ===== POD(랙 그룹) 공통 설정 =====
  // 데이터홀은 POD 단위로 쪼개져 구성되고, ④ 구성 다이어그램의 급전 회선, ⑤ 조합형 배치도의
  // IT존 내부 POD, ⑥ SLD의 분배선이 모두 이 하나의 설정(용량 × 수량)에서 파생된다.
  // 수량은 기본적으로 "총부하 ÷ POD 용량(올림)"으로 자동 산정되고, 체크를 풀면 직접 입력한다.
  const POD_CAP_DEFAULT = 500;
  const POD_COUNT_MAX = 200;
  function getPodCapacityKW() {
    const el = document.getElementById('podCapacity');
    const v = el ? parseFloat(el.value) : NaN;
    return isFinite(v) && v > 0 ? v : POD_CAP_DEFAULT;
  }
  function isPodCountAuto() {
    const el = document.getElementById('podAuto');
    return el ? el.checked : true;
  }
  // loadMW를 주면 그 부하 기준으로, 없으면 ①번 데이터홀 총부하 기준으로 POD 구성을 돌려준다.
  // POD 1개를 몇 갈래로 쪼개 급전할지. 2로 두면 6MW POD가 3MW 반쪽 2개가 되고,
  // 반쪽마다 서로 다른 전기실 세트에 물려도 각 반쪽은 온전한 N-of-M 구성을 유지한다.
  function getPodSplit() {
    const el = document.getElementById('podSplit');
    const v = el ? parseInt(el.value, 10) : NaN;
    return Math.max(1, Math.min(8, isFinite(v) && v > 0 ? v : 1));
  }
  // 반환값의 count/perPodKW는 '급전 블록' 기준이다 (분할했으면 POD 개수 × 분할 수).
  // pods/cap은 사람이 보는 POD 기준.
  function getPodPlan(loadMW) {
    const cap = getPodCapacityKW();
    const split = getPodSplit();
    const mw = (loadMW === undefined || loadMW === null || !isFinite(loadMW))
      ? (parseFloat(document.getElementById('load').value) || 0) : loadMW;
    const auto = isPodCountAuto();
    const pods = auto
      ? Math.max(1, Math.ceil((mw * 1000) / cap))
      : (() => {
          const el = document.getElementById('podCount');
          const v = el ? parseInt(el.value, 10) : NaN;
          return Math.max(1, Math.min(POD_COUNT_MAX, isFinite(v) && v > 0 ? v : 1));
        })();
    const loadKW = auto ? mw * 1000 : pods * cap;
    const podKW = loadKW / pods;
    return {
      cap, split, pods, auto, loadKW,
      count: pods * split,          // 급전 블록 수
      perPodKW: podKW / split,      // 블록 1개가 받는 부하
      podKW,                        // POD 1개 전체 부하
    };
  }
  // 블록 i가 어느 POD의 몇 번째 갈래인지
  function podBlockLabel(i, split) {
    const n = Math.floor(i / split) + 1;
    return split > 1 ? n + '-' + 'ABCDEFGH'[i % split] : String(n);
  }
  // ①번 총부하가 바뀌면 자동 모드의 수량 칸과 안내 문구를 다시 채운다.
  function updatePodControls() {
    const countInput = document.getElementById('podCount');
    const hint = document.getElementById('podHint');
    if (!countInput) return;
    const auto = isPodCountAuto();
    countInput.disabled = auto;
    countInput.style.background = auto ? 'var(--primary-bg)' : '';
    const plan = getPodPlan();
    if (auto) countInput.value = plan.count;
    // POD 주도 모드에서는 POD 합계가 곧 데이터홀 부하다 — ①번 총부하를 거기에 맞춘다.
    if (!auto) {
      const loadEl = document.getElementById('load');
      const target = Number((plan.loadKW / 1000).toFixed(2));
      if (parseFloat(loadEl.value) !== target) {
        if (loadSyncCheckbox && loadSyncCheckbox.checked) {
          loadSyncCheckbox.checked = false;
          // POD 합계가 총부하를 끌고 가므로 ⓪ 연동은 풀린다 — 선택칸도 같이 맞춘다
          if (typeof loadSource !== 'undefined') {
            loadSource = 'manual';
            const sel = document.getElementById('loadSource');
            if (sel) { sel.value = 'manual'; if (typeof updateLoadSourceNote === 'function') updateLoadSourceNote(); }
          }
          loadEl.disabled = false;
          loadEl.style.background = '';
        }
        loadEl.value = target;
      }
    }
    if (hint) {
      // n은 사람이 세는 POD 개수다 — plan.count는 분할된 급전 블록 수라 여기선 쓰면 안 된다.
      hint.textContent = ' ' + t(plan.auto ? 'hint_pod_auto' : 'hint_pod_manual', {
        n: plan.pods, kw: fmtN(Math.round(plan.podKW)), cap: fmtN(plan.cap),
        total: fmtN(Math.round(plan.loadKW / 100) / 10),
      });
      hint.style.color = '';
      hint.style.fontWeight = '';
    }
    return plan;
  }
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
  document.getElementById('diagramZoomIn').addEventListener('click', () => diagramZoom.zoomIn());
  document.getElementById('diagramZoomOut').addEventListener('click', () => diagramZoom.zoomOut());
  document.getElementById('diagramZoomReset').addEventListener('click', () => diagramZoom.reset());

  // ----- 확대 보기 (별도 큰 화면) -----
  // 다이어그램 요소를 복제하지 않고 모달 안으로 '이동'시킨다 — 그래야 휠 확대/드래그/블럭
  // 더블클릭 같은 기존 이벤트 핸들러와 수동 편집 상태가 그대로 살아있다. 닫을 때는
  // 원래 자리에 남겨둔 자리표시자(placeholder) 위치로 되돌린다.
  const diagramModal = document.getElementById('diagramModal');
  const diagramModalBody = document.getElementById('diagramModalBody');
  const diagramModalTitle = document.getElementById('diagramModalTitle');
  let modalState = null;

  function openDiagramModal(wrap, title, zoom) {
    if (modalState) closeDiagramModal();
    const placeholder = document.createComment('diagram-placeholder');
    wrap.parentNode.insertBefore(placeholder, wrap);
    modalState = { wrap, placeholder, zoom };
    diagramModalTitle.textContent = title;
    diagramModalBody.appendChild(wrap);
    diagramModal.classList.add('open');
    diagramModal.setAttribute('aria-hidden', 'false');
    document.body.classList.add('modal-open');
    if (zoom) zoom.reset();
    // 원래 크기가 모달보다 작은 다이어그램은 모달 폭에 맞춰 크게 키우고,
    // 더 큰 다이어그램은 원래 크기로 두고 모달 본문을 스크롤한다.
    const svg = wrap.querySelector('svg');
    if (svg) {
      const natural = parseFloat(svg.getAttribute('width')) || 0;
      const avail = diagramModalBody.clientWidth - 4;
      if (natural && avail > natural) {
        svg.style.width = avail + 'px';
        svg.style.height = 'auto';
      }
    }
  }
  function closeDiagramModal() {
    if (!modalState) return;
    const { wrap, placeholder, zoom } = modalState;
    modalState = null;
    const svg = wrap.querySelector('svg');
    if (svg) { svg.style.width = ''; svg.style.height = ''; }
    placeholder.parentNode.insertBefore(wrap, placeholder);
    placeholder.parentNode.removeChild(placeholder);
    diagramModal.classList.remove('open');
    diagramModal.setAttribute('aria-hidden', 'true');
    document.body.classList.remove('modal-open');
    if (zoom) zoom.reset();
  }
  // planZoom은 아래쪽 ⑤ 섹션에서 선언되므로 클릭 시점에 찾는다 (여기서 바로 읽으면 TDZ)
  [['diagramExpandBtn', 'diagramSvg', () => diagramZoom], ['planExpandBtn', 'planSvg', () => planZoom], ['hallExpandBtn', 'hallSvg', () => hallZoom], ['sldExpandBtn', 'sldSvg', () => sldZoom]]
    .forEach(([btnId, svgId, getZoom]) => {
      const btn = document.getElementById(btnId);
      if (!btn) return;
      btn.addEventListener('click', () => {
        const svg = document.getElementById(svgId);
        const wrap = svg && svg.closest('.diagram-wrap');
        if (!wrap) return;
        const card = wrap.closest('.card');
        const h2 = card && card.querySelector('h2');
        let title = '';
        if (h2) {
          const clone = h2.cloneNode(true);
          clone.querySelectorAll('.desc').forEach(d => d.remove());
          title = clone.textContent.trim();
        }
        openDiagramModal(wrap, title, getZoom());
      });
    });
  document.getElementById('diagramModalClose').addEventListener('click', closeDiagramModal);
  diagramModal.addEventListener('click', e => { if (e.target === diagramModal) closeDiagramModal(); });
  window.addEventListener('keydown', e => {
    if (e.key !== 'Escape') return;
    closeDiagramModal();
    if (typeof fbOpen === 'function' && fbModal.classList.contains('open')) fbOpen(false);
  });

  // Double-click on empty diagram background (outside any module/room block) => back to 평상시.
  // Per-block dblclick handlers (added inside renderDiagram, since blocks are
  // redrawn every render) call stopPropagation so only a genuine background click reaches here.
  document.getElementById('diagramSvg').addEventListener('dblclick', () => {
    manualFail4.clear();
    diagramMode = 'normal';
    updateDiagramModeButtons();
    calculate();
  });
  // 빈 곳을 클릭하면 회선 하이라이트 해제 (드래그로 화면을 옮긴 경우는 제외)
  document.getElementById('diagramSvg').addEventListener('click', () => { clearHighlight(); });

  function renderDiagram(N, C, perModuleUnits, load, rating, effectiveCap) {
    const svg = document.getElementById('diagramSvg');
    diagramZoom.clear();
    const svgTarget = diagramZoom.group;
    // 세트당 전기실 수가 ②번 N+C와 다르면, 그 수가 곧 이 세트의 모듈 수가 된다
    // (여유분 C는 R-N으로 다시 계산된다).
    const perSetRooms = getRoomsPerSet(N, C);
    C = perSetRooms - N;
    const M = perSetRooms;
    if (!M || M <= 0) return;
    syncRoomsPerSetControl(N, C, perSetRooms);

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
    // 모듈은 '세트 1개 안의 자리'일 뿐이다 — 상실은 방 단위로 따로 적용한다
    // (예전엔 모듈 번호로 상실을 지정해 S1·1그룹을 끄면 S2·1그룹까지 같이 꺼졌다).
    const modules = [];
    let overloadWarning = '';
    if (currentTopo === 'standby') {
      for (let i = 0; i < N; i++) modules.push({ role: 'duty', state: 'active' });
      for (let i = 0; i < C; i++) modules.push({ role: 'catcher', state: 'idle' });
    } else {
      for (let i = 0; i < M; i++) modules.push({ role: 'module', state: 'active' });
    }

    // ----- POD 구성 (①번 설정) -----
    const podPlan = getPodPlan(load);
    const podCount = podPlan.count;
    const podLoadKW = podPlan.perPodKW;

    // ----- 전기실 세트 -----
    // 이중화 세트 1개 = 전기실 (N+C)개. 세트를 S개 두면 전기실은 S×(N+C)개이고,
    // POD는 부하가 가장 적은 세트에 하나씩 배정된다.
    const topoShortName = currentTopo === 'distributed' ? `${N}oo${N + C}`
      : (currentTopo === 'standby' ? `N+${C}` : (C ? '2N+1' : '2N'));
    const roomPlan = buildRoomSets(modules, planRoomSets(podPlan, N, M, effectiveCap), effectiveCap);
    const rooms = roomPlan.rooms;
    if (highlightRoom !== null && highlightRoom >= rooms.length) highlightRoom = null;
    updateRoomControls(roomPlan, effectiveCap, topoShortName);
    const splitHint = document.getElementById('podSplitHint');
    if (splitHint) {
      const vars = { split: podPlan.split, blockKW: fmtN(Math.round(podPlan.perPodKW)), topo: topoShortName, sets: roomPlan.sets };
      const bad = podPlan.split > 1 && !roomPlan.splitHonoured;
      splitHint.textContent = podPlan.split === 1 ? t('hint_podSplit_1')
        : t(bad ? 'warn_podSplit_sets' : 'hint_podSplit_n', vars);
      splitHint.style.color = bad ? 'var(--warn)' : '';
      splitHint.style.fontWeight = bad ? '700' : '';
    }
    lastRoomCount = rooms.length;
    lastPerModuleUnits = rooms.length ? rooms[0].txCount : perModuleUnits;
    // ----- 상실 적용 (방 단위) -----
    // 더블클릭으로 고른 방만 끈다. 세트는 서로 독립이므로 다른 세트의 같은 자리는 영향 없다.
    if (diagramMode === 'emergency') {
      let failedRooms;
      if (manualFail4.size > 0) {
        failedRooms = [...manualFail4].filter(i => i < rooms.length);
      } else {
        // 자동: 세트마다 마지막 C개 방을 상실시킨다 (세트별 최악 상황)
        failedRooms = [];
        const perSetFail = Math.min(C, roomPlan.perSet);
        for (let si = 0; si < roomPlan.sets; si++) {
          for (let k = 0; k < perSetFail; k++) failedRooms.push(si * roomPlan.perSet + roomPlan.perSet - 1 - k);
        }
      }
      failedRooms.forEach(i => { if (rooms[i]) rooms[i].state = 'offline'; });
      // 대기이중화: 같은 세트 안에서 쓰러진 Duty 수만큼 캐쳐를 투입한다
      if (currentTopo === 'standby') {
        for (let si = 0; si < roomPlan.sets; si++) {
          const base = si * roomPlan.perSet;
          const downDuty = rooms.slice(base, base + N).filter(r => r.state === 'offline').length;
          let toEngage = Math.min(downDuty, C);
          for (let k = 0; k < C && toEngage > 0; k++) {
            const r = rooms[base + N + k];
            if (r && r.state === 'idle') { r.state = 'active'; toEngage--; }
          }
          if (downDuty > C) {
            overloadWarning = t('overload_warn', { n: downDuty, c: C, diff: downDuty - C });
          }
        }
      }
    }

    const podSet = new Array(podCount).fill(0);
    roomPlan.setPods.forEach((list, si) => list.forEach(p => { podSet[p] = si; }));
    const firstRoomOfSet = si => si * roomPlan.perSet;
    renderPodSetAssign(podPlan, roomPlan, podSet);

    // ----- 급전 회선 배정 -----
    // 모선형: POD는 자기 세트의 전기실 전부에서 급전받는다. 3oo4면 4회선이 들어가고
    //         그중 3개만 살아 있어도 POD 전량을 커버한다 (대기이중화는 Duty+캐쳐).
    // 조합형: POD마다 세트 안의 전기실 2곳이 짝을 지어 절반씩 — 2회선 고정이라
    //         "4개 중 3개" 같은 구성은 표현하지 못한다.
    const combPossible = distMode === 'comb' && roomPlan.perSet >= 3;
    if (combPossible) rooms.forEach(r => { if (r.state === 'idle') r.state = 'active'; });
    const pairs = combPossible ? combPairs(roomPlan.perSet) : null;
    const pairUse = new Array(rooms.length).fill(0);
    const pairSeen = new Set();
    const pairKey = (a, b) => Math.min(a, b) + '-' + Math.max(a, b);
    // 짝은 그 세트 안에서, 지금까지 가장 적게 쓰인 두 방으로 — 앞쪽 방에 몰리지 않게.
    const roomPairFor = si => {
      const base = firstRoomOfSet(si);
      const order = Array.from({ length: roomPlan.perSet }, (_, i) => base + i)
        .sort((x, y) => pairUse[x] - pairUse[y] || x - y);
      let a = order[0], b = order[1];
      search:
      for (let i = 0; i < order.length; i++) {
        for (let j = i + 1; j < order.length; j++) {
          if (!pairSeen.has(pairKey(order[i], order[j]))) { a = order[i]; b = order[j]; break search; }
        }
      }
      pairSeen.add(pairKey(a, b));
      pairUse[a]++; pairUse[b]++;
      return [a, b];
    };
    const podFeeds = [];
    for (let p = 0; p < podCount; p++) {
      const si = podSet[p];
      if (combPossible) { podFeeds.push(roomPairFor(si)); continue; }
      const base = firstRoomOfSet(si);
      const feedModules = currentTopo === 'standby'
        ? [p % Math.max(1, N)].concat(Array.from({ length: C }, (_, c) => N + c))
        : modules.map((_, k) => k);
      podFeeds.push(feedModules.map(mi => base + mi));
    }
    const feedsPerPod = podFeeds.length ? podFeeds[0].length : 0;
    // 하이라이트 판정 — 전기실/POD 어느 쪽을 골랐든 같은 식으로 쓴다
    if (highlightPod !== null && highlightPod >= podCount) highlightPod = null;
    const anyHL = highlightRoom !== null || highlightPod !== null;
    const roomLit = k => !anyHL || highlightRoom === k || (highlightPod !== null && podFeeds[highlightPod].indexOf(k) >= 0);
    const podLit = p => !anyHL || highlightPod === p || (highlightRoom !== null && podFeeds[p].indexOf(highlightRoom) >= 0);
    const edgeLit = (pi, k) => !anyHL || highlightRoom === k || highlightPod === pi;
    const edgeStrong = (pi, k) => highlightRoom === k || highlightPod === pi;

    const usedPairKeys = new Set();
    if (combPossible) podFeeds.forEach(f => usedPairKeys.add([...f].sort((a, b) => a - b).join('-')));
    updateDistHint(combPossible, roomPlan.perSet, pairs ? pairs.length : 0, usedPairKeys.size, roomPlan.sets, topoShortName);

    // ----- 분배 -----
    // 선택한 이중화 방식이 POD마다 급전 전기실을 정하고, 그중 '살아 있는' 방들이 그 POD의
    // 부하를 똑같이 나눠 받는다. 전기실의 실제 부하는 이 분배 결과의 합이다.
    //  · 분산/완전이중화 평상시 M방 → 방당 1/M, 1방 상실 → 남은 방이 1/(M-1)
    //  · 대기이중화 평상시 Duty가 전량, Duty 상실 → 투입된 캐쳐가 전량
    const podCarriers = [];
    for (let p = 0; p < podCount; p++) {
      const live = podFeeds[p].filter(r => rooms[r] && rooms[r].state === 'active');
      podCarriers.push(live);
      const each = live.length ? podLoadKW / live.length : 0;
      live.forEach(r => { rooms[r].loadKW += each; });
    }
    const roomRatio = r => (r.capacityKW > 0 ? r.loadKW / r.capacityKW * 100 : 0);
    const worstRatio = rooms.reduce((m, r) => Math.max(m, roomRatio(r)), 0);
    // 3oo4의 핵심은 평상시가 아니라 '1실 상실 시'다 — 세트 부하를 남은 N개가 떠안을 때의
    // 부하율을 따로 계산해 같이 보여준다 (설계를 결정하는 쪽은 이 숫자다).
    const worstEmergency = rooms.reduce((m, r) => {
      const load = roomPlan.setLoad[r.setIndex] / Math.max(1, N);
      return r.capacityKW > 0 ? Math.max(m, load / r.capacityKW * 100) : m;
    }, 0);
    const unfedPods = podCarriers.filter(c => !c.length).length;
    updateAllocVerdict(rooms, worstRatio, unfedPods, podCount, feedsPerPod, worstEmergency, N, N + C, podPlan);

    // 검토 의견에 넘길 요약 — 위에서 이미 구한 값만 모은다
    const needPerRoom = Math.max(...roomPlan.designPerRoom);
    const gotPerRoom = Math.max(...rooms.map(r => r.capacityKW));
    const minSetLoad = Math.min(...roomPlan.setLoad), maxSetLoad = Math.max(...roomPlan.setLoad);
    buildAutoSLD(rooms, N, C, perModuleUnits, load, rating, effectiveCap);

    if (typeof setPlanContext === 'function') {
      setPlanContext({ loadKW, pods: podPlan.pods, podKW: podPlan.podKW,
        sets: roomPlan.sets, perSet: roomPlan.perSet, rooms: rooms.length,
        rating, txPerRoom: rooms.length ? rooms[0].txCount : 1 });
    }
    // ⑥ 데이터홀 평면은 이 구성에서 랙 수를 뽑으므로 함께 갱신한다
    if (typeof refreshHallPodOptions === 'function') {
      try { refreshHallPodOptions(); drawHall(); } catch (e) {}
    }

    renderReview({
      worstNormal: worstRatio, worstEmergency, unfedPods,
      N, M, perSet: roomPlan.perSet, sets: roomPlan.sets, rooms: rooms.length,
      topo: topoShortName, topoKind: currentTopo, comb: combPossible,
      split: podPlan.split, pods: podPlan.pods, podKW: podPlan.podKW, loadKW,
      feedsPerPod, rating, totalTx: rooms.reduce((n, r) => n + r.txCount, 0),
      maxTx: Math.max(...rooms.map(r => r.txCount)),
      needPerRoom, gotPerRoom, head: (gotPerRoom / Math.max(1, needPerRoom) - 1) * 100,
      setLoad: roomPlan.setLoad, setSpread: minSetLoad > 0 ? maxSetLoad / minSetLoad : 1,
      utilityMW: parseFloat(document.getElementById('utilityCapacity').value) || 0,
      itMW: parseFloat(document.getElementById('itCapacityInput').value) || 0,
    });

    // POD가 많아지면 블럭을 좁혀서 도면 가로폭이 과도하게 늘어나지 않게 한다.
    let podW = 56, podGap = 6, podDetail = 2;   // 2: 이름+부하, 1: 이름만, 0: 번호만
    if (podCount > 12) { podW = 40; podGap = 5; podDetail = 1; }
    if (podCount > 24) { podW = 26; podGap = 4; podDetail = 0; }
    if (podCount > 44) { podW = 17; podGap = 3; podDetail = 0; }
    const podH = podDetail === 2 ? 34 : 24;
    // 분할한 갈래는 바짝 붙이고 POD 사이는 벌려서, 어느 블럭이 한 POD인지 간격만으로 읽히게 한다.
    // (위아래로 쌓으면 윗칸의 급전선이 아랫칸 블럭을 관통해야 해서 오히려 더 엉킨다.)
    const podSplitN = podPlan.split;
    const podGapIn = podSplitN > 1 ? Math.max(3, Math.round(podGap * 0.45)) : podGap;
    const podGapOut = podSplitN > 1 ? podGap + 14 : podGap;
    const podGroupW = podSplitN * podW + (podSplitN - 1) * podGapIn;
    const podGroups = podPlan.pods;
    const podRowW = podGroups * podGroupW + (podGroups - 1) * podGapOut;

    const moduleCount = rooms.length;
    const boxW = moduleCount > 8 ? 92 : 118;
    const gap = moduleCount > 8 ? 14 : 22;
    const totalW = moduleCount * boxW + (moduleCount - 1) * gap;
    const svgW = Math.max(760, totalW + 80, podRowW + 80);
    const startX = (svgW - totalW) / 2;
    const hallY = 42;
    const hallW = 220;
    const hallX = svgW / 2 - hallW / 2;
    const hallH = 50;

    const podY = hallY + hallH + 40;
    const podStartX = (svgW - podRowW) / 2;
    const podGroupX = gi => podStartX + gi * (podGroupW + podGapOut);
    const podX = p => podGroupX(Math.floor(p / podSplitN)) + (p % podSplitN) * (podW + podGapIn);
    const podCx = p => podX(p) + podW / 2;
    // 전기실별 급전모선을 POD 행과 전기실 행 사이에 층층이 깔고, POD가 거기서 분기한다.
    const combLayout = distMode === 'comb' && rooms.length >= 3;
    const busGap = 15;
    const busY0 = podY + podH + 24;
    const busY = k => busY0 + k * busGap;
    // 조합형은 모선 없이 곡선으로 바로 잇는다 — 모선 자리만큼의 세로 공간이 필요 없다
    const moduleY = combLayout ? podY + podH + 86 : busY(moduleCount - 1) + 30;

    const maxRoomTx = rooms.reduce((m, r) => Math.max(m, r.txCount), 1);
    const txRowsNeeded = Math.ceil(maxRoomTx / 3);
    // 전기실 박스 안에 소속 모듈(트레인/Duty/캐쳐) 줄이 한 줄 더 들어가면 그만큼 키운다
    const hasOwnerLine = true;
    const moduleH = 144 + (hasOwnerLine ? 9 : 0) + txRowsNeeded * 46; // +14 for the per-module 설계부하/유효용량 reference line, +12/row for the per-tx rating line
    let svgH = moduleY + moduleH + 80;
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

    // ----- 데이터홀 → POD 분할 -----
    const podTitle = svgEl('text', { x: svgW / 2, y: podY - 20, 'text-anchor': 'middle', 'font-size': 10, 'font-weight': 700, fill: navy, 'font-family': 'sans-serif' });
    podTitle.textContent = t(podPlan.split > 1 ? 'pod_row_title_split' : 'pod_row_title', {
      n: podPlan.pods, cap: fmtN(Math.round(podPlan.podKW)), mw: fmtN(Math.round(podPlan.loadKW / 100) / 10),
      split: podPlan.split, blocks: podCount, blockKW: fmtN(Math.round(podPlan.perPodKW)),
      // 세트별로 POD 몇 개가 몇 MW 들어갔는지 — POD 수가 세트 수로 나눠떨어지지 않으면
      // 한쪽 세트가 더 무거워지므로 그 결과를 숨기지 않고 그대로 보여준다.
      sets: roomPlan.setPods.map((list, si) =>
        t('set_label', { n: si + 1 }) + ' ' + list.length + '개/' + fmtN(Math.round(roomPlan.setLoad[si] / 100) / 10) + 'MW').join(' · '),
    });
    svgTarget.appendChild(podTitle);

    // 데이터홀 박스에서 POD 행으로 내려오는 빗살 배선
    const combY = podY - 11;
    svgTarget.appendChild(svgEl('path', {
      d: `M${svgW / 2},${hallY + hallH} L${svgW / 2},${combY}`,
      fill: 'none', stroke: grayLine, 'stroke-width': 2,
    }));
    if (podCount > 1) {
      svgTarget.appendChild(svgEl('path', {
        d: `M${podCx(0)},${combY} L${podCx(podCount - 1)},${combY}`,
        fill: 'none', stroke: grayLine, 'stroke-width': 2,
      }));
    }
    for (let p = 0; p < podCount; p++) {
      svgTarget.appendChild(svgEl('path', {
        d: `M${podCx(p)},${combY} L${podCx(p)},${podY}`,
        fill: 'none', stroke: grayLine, 'stroke-width': 2,
      }));
    }

    // POD 그룹 테두리 — 분할했을 때 같은 POD의 갈래를 하나로 묶어 보여준다
    if (podSplitN > 1) {
      for (let gi = 0; gi < podGroups; gi++) {
        svgTarget.appendChild(svgEl('rect', {
          x: podGroupX(gi) - 5, y: podY - 5, width: podGroupW + 10, height: podH + 10, rx: 8,
          fill: 'none', stroke: navy, 'stroke-width': 1, 'stroke-dasharray': '3,3', opacity: 0.45,
        }));
      }
    }

    // POD 블럭 — 클릭하면 그 POD에 급전하는 전기실이 드러난다
    for (let p = 0; p < podCount; p++) {
      const lit = podLit(p);
      const focus = highlightPod === p;
      const viaRoom = lit && highlightRoom !== null;
      const grp = svgEl('g', lit ? { cursor: 'pointer' } : { cursor: 'pointer', opacity: 0.22 });
      svgTarget.appendChild(grp);
      (pi => grp.addEventListener('click', e => { e.stopPropagation(); setHighlightPod(pi); }))(p);
      grp.appendChild(svgEl('rect', {
        x: podX(p), y: podY, width: podW, height: podH, rx: 5,
        fill: focus ? hexToRgba(navy, 0.2) : (viaRoom ? hexToRgba(roomColor(highlightRoom), 0.18) : hexToRgba(navy, 0.07)),
        stroke: focus ? navy : (viaRoom ? roomColor(highlightRoom) : accent),
        'stroke-width': (focus || viaRoom) ? 2.2 : 1.2,
      }));
      const label = svgEl('text', {
        x: podCx(p), y: podDetail === 2 ? podY + 15 : podY + 16, 'text-anchor': 'middle',
        'font-size': podDetail === 0 ? 8.5 : 9.5, 'font-weight': 800, fill: navy, 'font-family': 'sans-serif',
      });
      const blockName = podBlockLabel(p, podPlan.split);
      label.textContent = podDetail === 2 ? t('pod_chip', { n: blockName }) : (podDetail === 1 ? 'P' + blockName : blockName);
      grp.appendChild(label);
      if (podDetail === 2) {
        const sub = svgEl('text', { x: podCx(p), y: podY + 27, 'text-anchor': 'middle', 'font-size': 8, 'font-weight': 600, fill: '#8A8072', 'font-family': 'sans-serif' });
        sub.textContent = fmtN(Math.round(podLoadKW)) + 'kW · ' + t('set_label', { n: podSet[p] + 1 });
        grp.appendChild(sub);
      }
    }

    // ----- 급전 회선 -----
    if (combPossible) {
      // 조합형: POD마다 짝이 된 전기실 2곳에서 곡선으로 직접 급전. 평상시 절반씩,
      // 한쪽을 잃으면 남은 쪽이 그 POD를 전량 떠안는다.
      for (let p = 0; p < podCount; p++) {
        const feeds = podFeeds[p];
        const live = podCarriers[p];
        feeds.forEach((k, j) => {
          const room = rooms[k];
          const isOff = room.state === 'offline';
          const isIdleRoom = room.state === 'idle';
          const color = isOff ? offlineBorder : (isIdleRoom ? standbyBorder : roomColor(k));
          const carries = live.indexOf(k) >= 0 ? podLoadKW / live.length : 0;
          const solo = live.length === 1 && carries > 0;
          const x1 = podCx(p), y1 = podY + podH;
          const x2 = startX + k * (boxW + gap) + boxW / 2, y2 = moduleY;
          const lit = edgeLit(p, k), strong = edgeStrong(p, k);
          svgTarget.appendChild(svgEl('path', {
            d: smoothCurvePath(x1, y1, x2, y2),
            fill: 'none', stroke: color,
            'stroke-width': !lit ? 1 : (carries === 0 ? 1.2 : (solo ? 2.6 : 1.6)) * (strong ? 1.8 : 1),
            opacity: !lit ? 0.12 : (carries === 0 ? 0.4 : (solo ? 0.95 : 0.6)),
            'stroke-dasharray': carries === 0 ? '4,4' : 'none',
          }));
          if (podCount <= 12 && lit) {
            const pt = smoothCurvePoint(0.42 + j * 0.13, x1, y1, x2, y2);
            const lbl = svgEl('text', {
              x: pt.x, y: pt.y + (j === 0 ? -3 : 8), 'text-anchor': 'middle', 'font-size': 7.5,
              'font-weight': 700, fill: color, 'font-family': 'sans-serif',
              stroke: '#FFFFFF', 'stroke-width': 2.4, 'paint-order': 'stroke',
            });
            lbl.textContent = fmtN(Math.round(carries)) + 'kW';
            svgTarget.appendChild(lbl);
          }
        });
      }
    } else {
    // 모선형: 전기실마다 자기 색의 수평 모선을 하나씩 깔고, POD는 자기에게 급전하는 모선마다
    // 짧은 수직 분기선을 내려 접점(점)으로 연결한다. 접점이 없는 교차는 연결이 아니다.
    const tapSpacing = Math.min(6, Math.max(2.5, (podW - 5) / Math.max(1, feedsPerPod)));
    const busSpan = [];   // 전기실별 모선의 x 범위
    for (let k = 0; k < moduleCount; k++) busSpan.push(null);
    const taps = [];      // { k, x, y }
    for (let p = 0; p < podCount; p++) {
      const feeds = podFeeds[p];
      feeds.forEach((k, j) => {
        const x = podCx(p) + (j - (feeds.length - 1) / 2) * tapSpacing;
        taps.push({ k, x, podIndex: p });
        const span = busSpan[k];
        if (!span) busSpan[k] = [x, x];
        else { span[0] = Math.min(span[0], x); span[1] = Math.max(span[1], x); }
      });
    }

    for (let k = 0; k < moduleCount; k++) {
      const mod = rooms[k];
      const isOff = mod.state === 'offline';
      const isIdleMod = mod.state === 'idle';
      const color = isOff ? offlineBorder : (isIdleMod ? standbyBorder : roomColor(k));
      const dash = (isOff || isIdleMod) ? '5,4' : 'none';
      const cx = startX + k * (boxW + gap) + boxW / 2;
      const span = busSpan[k] || [cx, cx];
      const x1 = Math.min(span[0], cx) - 8;
      const x2 = Math.max(span[1], cx) + 8;
      const lit = roomLit(k);
      const op = v => (lit ? v : 0.1);
      const wide = (highlightRoom === k || (highlightPod !== null && lit)) ? 1.7 : 1;
      svgTarget.appendChild(svgEl('path', {
        d: `M${x1},${busY(k)} L${x2},${busY(k)}`,
        fill: 'none', stroke: color, 'stroke-width': 2 * wide, 'stroke-dasharray': dash,
        opacity: op(isOff ? 0.55 : 1),
      }));
      // 모선 → 전기실 인입
      svgTarget.appendChild(svgEl('path', {
        d: `M${cx},${busY(k)} L${cx},${moduleY}`,
        fill: 'none', stroke: color, 'stroke-width': 2.25 * wide, 'stroke-dasharray': dash,
        opacity: op(isOff ? 0.55 : 1),
      }));
      svgTarget.appendChild(svgEl('circle', { cx, cy: busY(k), r: 3, fill: color, opacity: op(isOff ? 0.55 : 1) }));
      // 모선 이름 (회선 식별)
      const busLabel = svgEl('text', {
        x: x2 + 5, y: busY(k) + 3.2, 'text-anchor': 'start', 'font-size': 7.5, 'font-weight': 700,
        fill: color, 'font-family': 'sans-serif', opacity: op(isOff ? 0.6 : 1),
      });
      busLabel.textContent = ROOM_LETTERS[k] || String(k + 1);
      svgTarget.appendChild(busLabel);
    }

    taps.forEach(tap => {
      const mod = rooms[tap.k];
      const isOff = mod.state === 'offline';
      const isIdleMod = mod.state === 'idle';
      const color = isOff ? offlineBorder : (isIdleMod ? standbyBorder : roomColor(tap.k));
      const lit = edgeLit(tap.podIndex, tap.k);
      svgTarget.appendChild(svgEl('path', {
        d: `M${tap.x},${podY + podH} L${tap.x},${busY(tap.k)}`,
        fill: 'none', stroke: color, 'stroke-width': edgeStrong(tap.podIndex, tap.k) ? 2.6 : 1.4,
        'stroke-dasharray': (isOff || isIdleMod) ? '3,3' : 'none',
        opacity: !lit ? 0.1 : (isOff ? 0.5 : (isIdleMod ? 0.75 : 0.95)),
      }));
      svgTarget.appendChild(svgEl('circle', {
        cx: tap.x, cy: busY(tap.k), r: edgeStrong(tap.podIndex, tap.k) ? 3 : 2.1, fill: color,
        opacity: !lit ? 0.1 : (isOff ? 0.5 : 1),
      }));
    });

    }

    const topoShort = currentTopo === 'distributed' ? t('topoLabel_distributed') : currentTopo === 'standby' ? t('topoLabel_standby') : t('topoLabel_full');
    const feedCaption = svgEl('text', {
      x: svgW / 2, y: moduleY - 12, 'text-anchor': 'middle', 'font-size': 9.5, 'font-weight': 700,
      fill: '#8A8072', 'font-family': 'sans-serif',
      stroke: '#FFFFFF', 'stroke-width': 3, 'paint-order': 'stroke',
    });
    feedCaption.textContent = t(combPossible ? 'pod_feed_caption_comb' : 'pod_feed_caption', { feeds: feedsPerPod, topo: topoShort, pairs: usedPairKeys.size });
    svgTarget.appendChild(feedCaption);

    rooms.forEach((mod, i) => {
      const x = startX + i * (boxW + gap);
      const isOffline = mod.state === 'offline';
      const isIdle = mod.state === 'idle';
      const isActive = mod.state === 'active';
      const mColor = roomColor(i);
      const mi = mod.moduleIndex;

      // All of this room's own visuals live in one group so a double-click anywhere on the
      // block (box, strip, labels, transformer icons) toggles its 상실 state as a single unit.
      const thisRoomLit = roomLit(i);
      const moduleGroup = svgEl('g', thisRoomLit ? { cursor: 'pointer' } : { cursor: 'pointer', opacity: 0.3 });
      // 한 번 클릭하면 이 전기실의 급전 회선만 또렷해지고, 두 번 클릭하면 상실 지정이다.
      // 더블클릭의 첫 클릭이 하이라이트를 켜버리지 않도록 약간 늦춰서 처리한다.
      let clickTimer = null;
      moduleGroup.addEventListener('click', (e) => {
        e.stopPropagation();
        if (clickTimer) return;
        clickTimer = setTimeout(() => { clickTimer = null; setHighlightRoom(i); }, 220);
      });
      moduleGroup.addEventListener('dblclick', (e) => {
        e.stopPropagation();
        if (clickTimer) { clearTimeout(clickTimer); clickTimer = null; }
        // 상실은 방 단위 — i는 전기실 통번호다 (모듈 번호 mi를 쓰면 다른 세트의 같은 자리도 꺼진다)
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

      // 전기실 이름은 늘 통번호(전기실 1..R), 그 아래에 소속 모듈(트레인/Duty/캐쳐)을 적는다.
      const label = t('module_label_room', { n: i + 1 });
      let ownerLabel;
      if (currentTopo === 'full') ownerLabel = t('module_label_train', { n: mi + 1 });
      else if (currentTopo === 'standby') ownerLabel = mod.role === 'catcher' ? t('module_label_catcher', { n: mi - N + 1 }) : t('module_label_duty', { n: mi + 1 });
      else ownerLabel = t('module_label_group', { n: mi + 1 });
      if (roomPlan.sets > 1) ownerLabel = t('set_label', { n: mod.setIndex + 1 }) + ' · ' + ownerLabel;
      const labelColor = isOffline ? '#C8604F' : (isIdle ? '#9A90BB' : mColor);
      const labelText = svgEl('text', { x: x + boxW / 2, y: moduleY + 25, 'text-anchor': 'middle', 'font-size': moduleCount > 8 ? 10.5 : 12, 'font-weight': 800, fill: labelColor, 'font-family': 'sans-serif' });
      labelText.textContent = label;
      moduleGroup.appendChild(labelText);
      if (ownerLabel) {
        const ownerText = svgEl('text', { x: x + boxW / 2, y: moduleY + 36, 'text-anchor': 'middle', 'font-size': 8, 'font-weight': 700, fill: labelColor, opacity: 0.8, 'font-family': 'sans-serif' });
        ownerText.textContent = ownerLabel;
        moduleGroup.appendChild(ownerText);
      }

      let stateLabel;
      if (isOffline) stateLabel = t('state_offline');
      else if (isIdle) stateLabel = t('state_idle');
      else if (currentTopo === 'standby' && diagramMode === 'emergency' && mod.role === 'catcher') stateLabel = t('state_engaged');
      else stateLabel = t('state_active');
      const stateColor = isOffline ? '#C8604F' : (isIdle ? '#9A90BB' : '#8A8072');
      const stateText = svgEl('text', { x: x + boxW / 2, y: moduleY + (ownerLabel ? 49 : 41), 'text-anchor': 'middle', 'font-size': 9.5, fill: stateColor, 'font-family': 'sans-serif' });
      stateText.textContent = stateLabel;
      moduleGroup.appendChild(stateText);

      // per-transformer load — 방마다 가진 변압기 대수가 다를 수 있다
      const txCount = mod.txCount;
      const perTxKW = isActive && txCount ? mod.loadKW / txCount : 0;
      const perTxPct = isActive ? (perTxKW / effectiveCap * 100) : 0;
      const startTxY = moduleY + (ownerLabel ? 64 : 57);

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
      const capY = moduleY + (ownerLabel ? 64 : 57) + txRowsNeeded * (22 + 34) + 6;
      const countText = svgEl('text', { x: x + boxW / 2, y: capY, 'text-anchor': 'middle', 'font-size': 10, 'font-weight': 700, fill: labelColor, 'font-family': 'sans-serif' });
      countText.textContent = isOffline ? t('count_offline', { n: txCount }) : t('count_active', { n: txCount, kw: fmtN(Math.round(mod.loadKW)) });
      moduleGroup.appendChild(countText);

      // 분배 결과 — 이 방에 배정된 부하가 방 용량의 몇 %인지. 넘치면 붉게.
      const ratio = roomRatio(mod);
      const overCap = mod.capacityKW > 0 && mod.loadKW > mod.capacityKW + 0.5;
      const ratioText = svgEl('text', { x: x + boxW / 2, y: capY + 13, 'text-anchor': 'middle', 'font-size': 8.5, 'font-weight': 700, fill: overCap ? '#C8604F' : '#9A90BB', 'font-family': 'sans-serif' });
      ratioText.textContent = t('room_cap_line', { cap: fmtN(Math.round(mod.capacityKW)), pct: fmtN(Math.round(ratio * 10) / 10) });
      moduleGroup.appendChild(ratioText);

      svgTarget.appendChild(moduleGroup);
    });

    // total caption at bottom
    const totalTx = rooms.reduce((n, r) => n + r.txCount, 0);
    const activeRooms = rooms.filter(r => r.state === 'active');
    const activeTx = activeRooms.reduce((n, r) => n + r.txCount, 0);
    const totalCaption = svgEl('text', { x: svgW / 2, y: svgH - 12, 'text-anchor': 'middle', 'font-size': 11, 'font-weight': 700, fill: navy, 'font-family': 'sans-serif' });
    totalCaption.textContent = diagramMode === 'normal'
      ? t('total_normal_sets', { topo: topoShortName, perSet: roomPlan.perSet, sets: roomPlan.sets, rooms: moduleCount, total: totalTx, rating: fmtN(rating), eff: fmtN(effectiveCap) })
      : t('total_emergency_rooms', { m: M, rooms: moduleCount, activeRooms: activeRooms.length, total: totalTx, activeTx });
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
      const room = rooms[i];
      const mi = room.moduleIndex;
      let owner = currentTopo === 'full' ? t('module_label_train', { n: mi + 1 })
        : currentTopo === 'standby' ? (room.role === 'catcher' ? t('module_label_catcher', { n: mi - N + 1 }) : t('module_label_duty', { n: mi + 1 }))
        : t('module_label_group', { n: mi + 1 });
      if (roomPlan.sets > 1) owner = t('set_label', { n: room.setIndex + 1 }) + ' · ' + owner;
      const nm = t('module_label_room', { n: i + 1 }) + (owner ? ` (${owner})` : '');
      legendItems.push({ color: room.state === 'offline' ? '#FBEDE7' : roomColor(i), label: nm });
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
    const podNoteDiv = document.createElement('div');
    podNoteDiv.className = 'item';
    podNoteDiv.style.width = '100%';
    podNoteDiv.innerHTML = `<span class="swatch" style="background:${hexToRgba(navy, 0.25)}; border:1.2px solid ${accent};"></span>${t(combPossible ? 'legend_pod_note_comb' : 'legend_pod_note', { feeds: feedsPerPod, pairs: usedPairKeys.size })}`;
    legend.appendChild(podNoteDiv);

    const topoLabel = currentTopo === 'distributed' ? t('topoLabel_distributed') : currentTopo === 'standby' ? t('topoLabel_standby') : t('topoLabel_full');
    document.getElementById('diagramDesc').textContent = t('diagramDesc', { topo: topoLabel, mode: diagramMode === 'normal' ? t('mode_normal') : t('mode_emergency') });
    diagramZoom.reset();

    // ⑥번 SLD 자동 작성 모드는 별도 상태를 갖지 않고, 방금 ④번에서 계산한 modules 배열
    // (가동/대기/상실)을 그대로 그래프로 변환해 같은 상태를 단선결선도로 다시 그린다.
  }

  // ===== ⑤ 건축 평·단면 블럭 다이어그램 =====
  // 층별(또는 단면별) 탭마다 자유 배치 캔버스를 두고, 실명을 붙인 블럭을 올려 크기를
  // 조절한다. "한번에 보기"는 모든 탭을 나란히 축소해 한 화면에 깔아 비교용으로 쓴다.
  // 실(室) 분류 — 건축·전기·기계·통신 분야별 표준 실명칭
  const PLAN_GROUPS = [
    { key: 'elec', color: '#6F5FBF', kinds: ['main_elec', 'mv', 'lv', 'tr', 'ups', 'batt', 'gen', 'sts'] },
    { key: 'mech', color: '#0F6E56', kinds: ['mech', 'chiller', 'pump', 'crah', 'cdu', 'water'] },
    { key: 'it', color: '#3A2E75', kinds: ['hall', 'mmr', 'mdf', 'idf', 'network', 'noc', 'soc'] },
    { key: 'ops', color: '#854F0B', kinds: ['control', 'bms', 'security', 'staging', 'storage', 'dock'] },
    { key: 'misc', color: '#8A8072', kinds: ['corridor', 'shaft', 'etc'] },
  ];
  const PLAN_KINDS = [];
  PLAN_GROUPS.forEach(gr => gr.kinds.forEach(k => PLAN_KINDS.push({ key: k, color: gr.color })));
  const PLAN_KIND_GROUP = {};
  PLAN_GROUPS.forEach(gr => gr.kinds.forEach(k => { PLAN_KIND_GROUP[k] = gr.key; }));
  const PLAN_KIND_COLOR = {};
  PLAN_KINDS.forEach(k => { PLAN_KIND_COLOR[k.key] = k.color; });

  const PLAN_SNAP = 10;
  const planZoom = makeZoomable('planSvg');
  const sldZoom = makeZoomable('sldSvg');
  let planTabs = loadPlans();
  let planActive = 0;
  let planSelected = null;   // 선택한 블럭 id
  let planAllMode = false;
  let planSeq = 0;
  let planDrag = null;       // { mode:'move'|'resize', id, handle, ... }

  function loadPlans() {
    try {
      const raw = JSON.parse(localStorage.getItem('prc_plans') || 'null');
      if (raw && Array.isArray(raw.tabs) && raw.tabs.length) {
        raw.tabs.forEach(tab => (tab.blocks || []).forEach(b => {
          const n = parseInt(String(b.id).replace(/\D/g, ''), 10);
          if (isFinite(n) && n > planSeq) planSeq = n;
        }));
        return raw.tabs;
      }
    } catch (e) {}
    return [{ name: t('plan_tab_default', { n: 1 }), blocks: [] }];
  }
  function savePlans() {
    try { localStorage.setItem('prc_plans', JSON.stringify({ tabs: planTabs })); } catch (e) {}
  }
  // 이름 편집 입력칸의 확정 처리. blur만 믿으면 포커스가 잡히지 않은 환경에서 편집이
  // 갇히므로, Enter·Escape·바깥 클릭까지 모두 받아준다.
  function planBindEditor(input, getValue, apply) {
    let done = false;
    const finish = keep => {
      if (done) return;
      done = true;
      document.removeEventListener('pointerdown', outside, true);
      apply(keep ? (input.value || '').trim() : null);
    };
    const outside = e => { if (e.target !== input) finish(true); };
    setTimeout(() => document.addEventListener('pointerdown', outside, true), 0);
    input.addEventListener('blur', () => finish(true));
    input.addEventListener('keydown', e => {
      e.stopPropagation();
      if (e.key === 'Enter') finish(true);
      if (e.key === 'Escape') { input.value = getValue(); finish(false); }
    });
  }

  function planCur() { return planTabs[planActive] || planTabs[0]; }
  function planBlock(id) { return planCur().blocks.find(b => b.id === id) || null; }
  function planSnapOn() {
    const el = document.getElementById('planSnap');
    return el ? el.checked : true;
  }
  function planSnapV(v) { return planSnapOn() ? Math.round(v / PLAN_SNAP) * PLAN_SNAP : Math.round(v); }

  const PLAN_MAGNET = 9;     // 이 거리 안에 들어오면 이웃 블럭에 달라붙는다
  let planGuides = [];       // 스냅이 걸린 자리에 보여줄 안내선

  function planMagnetOn() {
    const el = document.getElementById('planMagnet');
    return el ? el.checked : true;
  }

  // 움직이는 사각형을 이웃 블럭의 면에 맞춘다.
  // 가로/세로 각각 가장 가까운 후보 하나씩만 적용하고, 멀어지면 자연히 떨어진다.
  //  · 벽 맞대기: 내 왼쪽 ↔ 남의 오른쪽, 내 오른쪽 ↔ 남의 왼쪽
  //  · 줄 맞추기: 내 왼쪽 ↔ 남의 왼쪽, 내 오른쪽 ↔ 남의 오른쪽, 중심 ↔ 중심
  function planSnapBox(box, selfId) {
    planGuides = [];
    if (!planMagnetOn()) return box;
    const others = planCur().blocks.filter(o => o.id !== selfId);
    if (!others.length) return box;

    const pick = cands => {
      let best = null;
      cands.forEach(c => {
        if (c.d <= PLAN_MAGNET && (!best || c.d < best.d)) best = c;
      });
      return best;
    };
    const out = { x: box.x, y: box.y, w: box.w, h: box.h };

    const xc = [];
    others.forEach(o => {
      [o.x + o.w, o.x, o.x + o.w / 2 - box.w / 2].forEach(v => xc.push({ at: v, o, line: v }));
      [o.x, o.x + o.w].forEach(v => xc.push({ at: v - box.w, o, line: v }));
    });
    xc.forEach(c => { c.d = Math.abs(c.at - box.x); });
    const hx = pick(xc);
    if (hx) {
      out.x = hx.at;
      planGuides.push({
        x1: hx.line, x2: hx.line,
        y1: Math.min(out.y, hx.o.y), y2: Math.max(out.y + out.h, hx.o.y + hx.o.h),
      });
    }

    const yc = [];
    others.forEach(o => {
      [o.y + o.h, o.y, o.y + o.h / 2 - box.h / 2].forEach(v => yc.push({ at: v, o, line: v }));
      [o.y, o.y + o.h].forEach(v => yc.push({ at: v - box.h, o, line: v }));
    });
    yc.forEach(c => { c.d = Math.abs(c.at - box.y); });
    const hy = pick(yc);
    if (hy) {
      out.y = hy.at;
      planGuides.push({
        y1: hy.line, y2: hy.line,
        x1: Math.min(out.x, hy.o.x), x2: Math.max(out.x + out.w, hy.o.x + hy.o.w),
      });
    }
    return out;
  }

  // 리사이즈로 끌고 있는 변 하나를 이웃 블럭의 면에 맞춘다
  function planSnapEdge(value, selfId, horizontal) {
    if (!planMagnetOn()) return null;
    let best = null;
    planCur().blocks.forEach(o => {
      if (o.id === selfId) return;
      const cands = horizontal ? [o.x, o.x + o.w] : [o.y, o.y + o.h];
      cands.forEach(v => {
        const d = Math.abs(v - value);
        if (d <= PLAN_MAGNET && (!best || d < best.d)) best = { d: d, v: v };
      });
    });
    return best ? best.v : null;
  }

  // 화면 좌표 → 캔버스 좌표 (줌/팬을 되돌린다)
  function planPoint(evt) {
    const svg = document.getElementById('planSvg');
    const m = planZoom.group.getScreenCTM();
    if (!svg || !m) return { x: 0, y: 0 };
    const pt = svg.createSVGPoint();
    pt.x = evt.clientX; pt.y = evt.clientY;
    const q = pt.matrixTransform(m.inverse());
    return { x: q.x, y: q.y };
  }

  function planAddBlock() {
    const kindEl = document.getElementById('planKind');
    const kind = kindEl ? kindEl.value : 'elec';
    const blocks = planCur().blocks;
    // 새 블럭은 겹치지 않게 계단식으로 놓는다
    const n = blocks.length;
    const b = {
      id: 'b' + (++planSeq), kind,
      x: 40 + (n % 6) * 120, y: 40 + Math.floor(n / 6) * 90,
      w: 110, h: 70, label: t('plan_kind_' + kind), m2: 50, note: '',
    };
    blocks.push(b);
    planSelected = b.id;
    savePlans();
    drawPlan();
  }
  // ----- 스페이스 프로그램 자동 작성 -----
  // ①~④에서 나온 구성(POD 수·부하, 전기실 세트, 총 변압기)을 받아 층별 평면과 단면을
  // 블럭으로 깔아준다. 면적은 아래 원단위(㎡/MW)로 잡은 개념 값이고, 깐 뒤에는 자유롭게
  // 끌어서 고치면 된다.
  const PLAN_AREA = {        // ㎡ per MW of IT load
    hall: 22, main_elec: 6, tr: 5, ups: 7, batt: 5, gen: 7,
    chiller: 10, cdu: 5, pump: 3,
  };
  const PLAN_FIXED = {       // 부하와 무관하게 대략 일정한 실 (㎡)
    mmr: 60, mdf: 45, network: 40, noc: 70, control: 50, security: 30,
    staging: 80, storage: 60, dock: 90, water: 40, bms: 30,
  };
  const PLAN_PX_PER_M = 1.9;   // ㎡ → 화면 크기 환산 (√면적 × 이 값)

  // 면적(㎡)을 가로세로 비율 ratio의 블럭 크기로 바꾼다
  function planSize(area, ratio, label) {
    const a = Math.max(8, area);
    const r = ratio || 1.5;
    const side = Math.sqrt(a / r) * PLAN_PX_PER_M;
    // 실명이 들어갈 만큼은 확보한다 (한글 한 자 ≈ 7px, 최대 190px)
    const need = label ? Math.min(200, label.length * 9.5 + 16) : 0;
    return {
      w: Math.max(50, need, Math.round(side * r / 10) * 10),
      h: Math.max(34, Math.round(side / 10) * 10),
    };
  }

  let planLastContext = null;   // ④가 계산해 둔 최신 구성
  function setPlanContext(ctx) { planLastContext = ctx; }

  // 한 줄로 늘어놓으며 x를 전진시키는 작은 도우미
  function planRow(blocks, kind, label, area, ratio, cur, y) {
    const sz = planSize(area, ratio, label);
    blocks.push({ id: 'b' + (++planSeq), kind, label, x: cur.x, y, w: sz.w, h: sz.h,
      m2: Math.round(area), note: '' });
    cur.x += sz.w + 10;
    cur.maxH = Math.max(cur.maxH || 0, sz.h);
    return sz;
  }

  function planAutoGenerate() {
    const c = planLastContext;
    if (!c) return;
    const mw = c.loadKW / 1000;
    const perSetMW = mw / Math.max(1, c.sets);
    const A = (k, m) => PLAN_AREA[k] * (m === undefined ? mw : m);

    // --- 상층: 전산실 + IT/통신 ---
    const upper = [];
    let cur = { x: 40 };
    for (let i = 0; i < c.pods; i++) {
      planRow(upper, 'hall', t('plan_kind_hall') + ' ' + (i + 1) + ' (' + fmtN(Math.round(c.podKW)) + 'kW)',
        A('hall', c.podKW / 1000), 1.6, cur, 40);
    }
    const hallH = cur.maxH;
    const corridorW = Math.max(120, cur.x - 50);
    upper.push({ id: 'b' + (++planSeq), kind: 'corridor', label: t('plan_kind_corridor'), x: 40, y: 40 + hallH + 10, w: corridorW, h: 40 });
    cur = { x: 40 };
    const supY = 40 + hallH + 60;
    [['mmr', PLAN_FIXED.mmr], ['mdf', PLAN_FIXED.mdf], ['network', PLAN_FIXED.network], ['noc', PLAN_FIXED.noc]]
      .forEach(([k, a]) => planRow(upper, k, t('plan_kind_' + k), a, 1.4, cur, supY));

    // --- 하층: 전기 + 기계 ---
    const lower = [];
    cur = { x: 40 };
    for (let si = 0; si < c.sets; si++) {
      const tag = c.sets > 1 ? ' S' + (si + 1) : '';
      planRow(lower, 'tr', t('plan_kind_tr') + tag + ' (' + c.perSet + t('unit_room') + ')', A('tr', perSetMW), 1.8, cur, 40);
      planRow(lower, 'ups', t('plan_kind_ups') + tag, A('ups', perSetMW), 1.5, cur, 40);
      planRow(lower, 'batt', t('plan_kind_batt') + tag, A('batt', perSetMW), 1.5, cur, 40);
    }
    const elecH = cur.maxH;
    cur = { x: 40 };
    const mechY = 40 + elecH + 50;
    planRow(lower, 'main_elec', t('plan_kind_main_elec'), A('main_elec'), 1.6, cur, mechY);
    planRow(lower, 'gen', t('plan_kind_gen'), A('gen'), 1.8, cur, mechY);
    planRow(lower, 'chiller', t('plan_kind_chiller'), A('chiller'), 1.6, cur, mechY);
    planRow(lower, 'cdu', t('plan_kind_cdu'), A('cdu'), 1.4, cur, mechY);
    planRow(lower, 'pump', t('plan_kind_pump'), A('pump'), 1.4, cur, mechY);
    const mechH = cur.maxH;
    cur = { x: 40 };
    const opsY = mechY + mechH + 50;
    [['control', PLAN_FIXED.control], ['bms', PLAN_FIXED.bms], ['security', PLAN_FIXED.security],
     ['staging', PLAN_FIXED.staging], ['storage', PLAN_FIXED.storage], ['dock', PLAN_FIXED.dock]]
      .forEach(([k, a]) => planRow(lower, k, t('plan_kind_' + k), a, 1.4, cur, opsY));

    // --- 단면: 층을 위아래로 쌓아 본다 ---
    const sect = [];
    const sw = Math.max(320, Math.min(620, corridorW));
    sect.push({ m2: 0, note: '', id: 'b' + (++planSeq), kind: 'hall', label: t('plan_sect_upper', { n: c.pods, kw: fmtN(Math.round(c.podKW)) }), x: 40, y: 40, w: sw, h: 90 });
    sect.push({ m2: 0, note: '', id: 'b' + (++planSeq), kind: 'shaft', label: t('plan_kind_shaft'), x: 40 + sw + 10, y: 40, w: 60, h: 220 });
    sect.push({ m2: 0, note: '', id: 'b' + (++planSeq), kind: 'tr', label: t('plan_sect_lower', { sets: c.sets, rooms: c.rooms }), x: 40, y: 140, w: sw, h: 60 });
    sect.push({ m2: 0, note: '', id: 'b' + (++planSeq), kind: 'chiller', label: t('plan_sect_mech'), x: 40, y: 210, w: sw, h: 50 });

    planTabs = [
      { name: t('plan_auto_tab_upper'), blocks: upper },
      { name: t('plan_auto_tab_lower'), blocks: lower },
      { name: t('plan_auto_tab_sect'), blocks: sect },
    ];
    planActive = 0;
    planAllMode = false;
    planSelected = null;
    savePlans();
    renderPlanTabs();
    drawPlan();
    const status = document.getElementById('planStatus');
    if (status) {
      status.textContent = t('plan_auto_done', {
        mw: fmtN(Math.round(mw * 10) / 10), pods: c.pods, rooms: c.rooms,
        area: fmtN(Math.round(mw * 22 + mw * 30)),
      });
      status.style.color = 'var(--primary)';
      status.style.fontWeight = '700';
    }
  }

  function planDeleteSelected() {
    if (!planSelected) return;
    planCur().blocks = planCur().blocks.filter(b => b.id !== planSelected);
    planSelected = null;
    savePlans();
    drawPlan();
  }

  // ----- 탭 -----
  function renderPlanTabs() {
    const box = document.getElementById('planTabs');
    if (!box) return;
    box.innerHTML = '';
    planTabs.forEach((tab, i) => {
      const btn = document.createElement('button');
      btn.className = 'plan-tab' + (!planAllMode && i === planActive ? ' active' : '');
      btn.textContent = tab.name;
      btn.title = t('plan_tab_hint');
      btn.addEventListener('click', () => {
        planAllMode = false; planActive = i; planSelected = null;
        renderPlanTabs(); drawPlan();
      });
      // 더블클릭으로 탭 이름 변경 — 입력칸을 그 자리에 띄운다
      btn.addEventListener('dblclick', e => {
        e.stopPropagation();
        const input = document.createElement('input');
        input.className = 'plan-tab-edit';
        input.value = tab.name;
        planBindEditor(input, () => tab.name, v => {
          if (v) tab.name = v;
          savePlans(); renderPlanTabs(); drawPlan();
        });
        box.replaceChild(input, btn);
        input.focus(); input.select();
      });
      box.appendChild(btn);
      if (planTabs.length > 1) {
        const del = document.createElement('button');
        del.className = 'plan-tab-del';
        del.textContent = '✕';
        del.title = t('plan_tab_del');
        del.addEventListener('click', e => {
          e.stopPropagation();
          planTabs.splice(i, 1);
          if (planActive >= planTabs.length) planActive = planTabs.length - 1;
          planSelected = null;
          savePlans(); renderPlanTabs(); drawPlan();
        });
        box.appendChild(del);
      }
    });
    const add = document.createElement('button');
    add.className = 'plan-tab add';
    add.textContent = t('plan_tab_add');
    add.addEventListener('click', () => {
      planTabs.push({ name: t('plan_tab_default', { n: planTabs.length + 1 }), blocks: [] });
      planActive = planTabs.length - 1;
      planAllMode = false; planSelected = null;
      savePlans(); renderPlanTabs(); drawPlan();
    });
    box.appendChild(add);
  }

  function planContentBox(tab) {
    if (!tab.blocks.length) return { x: 0, y: 0, w: 320, h: 200 };
    let x1 = Infinity, y1 = Infinity, x2 = -Infinity, y2 = -Infinity;
    tab.blocks.forEach(b => {
      x1 = Math.min(x1, b.x); y1 = Math.min(y1, b.y);
      x2 = Math.max(x2, b.x + b.w); y2 = Math.max(y2, b.y + b.h);
    });
    return { x: x1 - 20, y: y1 - 20, w: (x2 - x1) + 40, h: (y2 - y1) + 40 };
  }

  // 실 종류별로 그 안에 들어가는 주요 장비 — ①~④ 계산 결과에서 끌어온다.
  // 실명을 켜면(장비 열) 평면 블럭 안에 작은 글씨로 함께 적힌다.
  function planEquipFor(kind) {
    const c = planLastContext;
    if (!c) return [];
    const n = v => fmtN(Math.round(v));
    const perSetKW = c.loadKW / Math.max(1, c.sets);
    switch (kind) {
      case 'tr': return ['TR ' + n(c.rating) + 'kVA × ' + c.txPerRoom + t('unit_dae_short'),
                         t('plan_eq_rooms', { n: c.perSet })];
      case 'main_elec': return ['MTR ' + n(c.loadKW) + 'kW', t('plan_eq_bus')];
      case 'mv': return ['GCB / VCB × ' + c.rooms];
      case 'lv': return ['ACB / MCCB × ' + c.rooms];
      case 'ups': return ['UPS ' + n(perSetKW) + 'kW', t('plan_eq_per_set')];
      case 'batt': return ['BAT ' + n(perSetKW) + 'kW', t('plan_eq_runtime')];
      case 'gen': return ['GEN ' + n(c.loadKW * 1.25) + 'kW', t('plan_eq_gen')];
      case 'sts': return ['STS / CTTS × ' + c.pods];
      case 'hall': return ['POD ' + n(c.podKW) + 'kW', 'PDU / RACK'];
      case 'chiller': return [t('plan_eq_cool', { kw: n(c.loadKW * 0.95) })];
      case 'cdu': return ['CDU ' + n(c.loadKW * 0.9) + 'kW'];
      case 'crah': return ['CRAH ' + n(c.loadKW * 0.1) + 'kW'];
      case 'pump': return [t('plan_eq_pump')];
      case 'mmr': return ['MMR / MDF'];
      case 'network': return [t('plan_eq_net')];
      default: return [];
    }
  }

  // 글자가 블럭보다 넓으면 먼저 글자 크기를 줄이고, 그래도 넘치면 끝을 잘라 말줄임한다.
  // (getComputedTextLength는 붙인 뒤에만 쓸 수 있어 그리고 나서 손본다.)
  function planFitText(el, text, maxW, baseSize) {
    if (!el.getComputedTextLength || maxW <= 0) return;
    let size = baseSize;
    const min = Math.max(5, baseSize * 0.62);
    while (el.getComputedTextLength() > maxW && size > min) {
      size -= 0.5;
      el.setAttribute('font-size', size);
    }
    if (el.getComputedTextLength() <= maxW) return;
    let cut = text.length;
    while (cut > 1 && el.getComputedTextLength() > maxW) {
      cut -= 1;
      el.textContent = text.slice(0, cut) + '…';
    }
  }

  // 블럭 하나를 target 안에 그린다 (ox/oy/scale로 "한번에 보기"에서도 재사용)
  function drawPlanBlock(target, b, opts) {
    const o = opts || {};
    const sc = o.scale || 1, ox = o.ox || 0, oy = o.oy || 0;
    const color = PLAN_KIND_COLOR[b.kind] || PLAN_KIND_COLOR.etc;
    const x = ox + b.x * sc, y = oy + b.y * sc, w = b.w * sc, h = b.h * sc;
    const selected = !o.readonly && b.id === planSelected;
    const grp = svgEl('g', o.readonly ? {} : { cursor: 'move' });
    target.appendChild(grp);   // 먼저 붙여야 아래 planFitText가 글자 폭을 잴 수 있다
    grp.appendChild(svgEl('rect', {
      x, y, width: w, height: h, rx: 4,
      fill: hexToRgba(color, 0.14), stroke: color,
      'stroke-width': selected ? 2.6 : 1.6,
    }));
    const fs = Math.max(6, Math.min(12, 11 * sc));
    const label = svgEl('text', {
      x: x + w / 2, y: y + h / 2 + (h > 34 * sc ? -2 : 3), 'text-anchor': 'middle',
      'font-size': fs, 'font-weight': 800, fill: color, 'font-family': 'sans-serif',
    });
    label.textContent = b.label;
    grp.appendChild(label);
    planFitText(label, b.label, w - 8, fs);
    // 장비명을 켜면 치수 대신 장비를 적는다 (둘 다 적으면 좁은 블럭이 터진다)
    const eq = b.equip ? planEquipFor(b.kind) : [];
    if (eq.length && h > 30 * sc) {
      eq.slice(0, Math.max(1, Math.floor((h / sc - 24) / 10))).forEach((line, li) => {
        const el = svgEl('text', {
          x: x + w / 2, y: y + h / 2 + fs + li * (fs * 0.82), 'text-anchor': 'middle',
          'font-size': Math.max(5, fs * 0.7), 'font-weight': 600, fill: color, opacity: 0.85,
          'font-family': 'sans-serif',
        });
        el.textContent = line;
        grp.appendChild(el);
        planFitText(el, line, w - 6, Math.max(5, fs * 0.7));
      });
    } else if (h > 34 * sc) {
      const dim = svgEl('text', {
        x: x + w / 2, y: y + h / 2 + fs, 'text-anchor': 'middle',
        'font-size': Math.max(5, fs * 0.72), 'font-weight': 600, fill: '#8A8072', 'font-family': 'sans-serif',
      });
      dim.textContent = Math.round(b.w) + '×' + Math.round(b.h);
      grp.appendChild(dim);
    }
    if (!o.readonly) {
      grp.addEventListener('pointerdown', e => {
        e.stopPropagation();
        planSelected = b.id;
        const p = planPoint(e);
        planDrag = { mode: 'move', id: b.id, dx: p.x - b.x, dy: p.y - b.y };
        drawPlan();
      });
      grp.addEventListener('dblclick', e => { e.stopPropagation(); planEditLabel(b); });
    }

    // 선택한 블럭에만 모서리 핸들 — 끌어서 크기를 바꾼다
    if (selected) {
      const hs = [
        ['nw', x, y], ['n', x + w / 2, y], ['ne', x + w, y],
        ['w', x, y + h / 2], ['e', x + w, y + h / 2],
        ['sw', x, y + h], ['s', x + w / 2, y + h], ['se', x + w, y + h],
      ];
      const cursors = { nw: 'nwse-resize', se: 'nwse-resize', ne: 'nesw-resize', sw: 'nesw-resize', n: 'ns-resize', s: 'ns-resize', e: 'ew-resize', w: 'ew-resize' };
      hs.forEach(([k, hx, hy]) => {
        const dot = svgEl('rect', {
          x: hx - 4, y: hy - 4, width: 8, height: 8, rx: 2,
          fill: '#FFFFFF', stroke: color, 'stroke-width': 1.6, cursor: cursors[k],
        });
        dot.addEventListener('pointerdown', e => {
          e.stopPropagation();
          planDrag = { mode: 'resize', id: b.id, handle: k, start: { x: b.x, y: b.y, w: b.w, h: b.h }, from: planPoint(e) };
        });
        target.appendChild(dot);
      });
    }
  }

  // 블럭 이름 편집 — SVG 위에 입력칸을 겹쳐 띄운다
  function planEditLabel(b) {
    const svg = document.getElementById('planSvg');
    const wrap = svg && svg.closest('.diagram-wrap');
    if (!wrap) return;
    const m = planZoom.group.getScreenCTM();
    const wrapBox = wrap.getBoundingClientRect();
    const pt = svg.createSVGPoint();
    pt.x = b.x + b.w / 2; pt.y = b.y + b.h / 2;
    const scr = pt.matrixTransform(m);
    const input = document.createElement('input');
    input.className = 'plan-label-edit';
    input.value = b.label;
    input.style.left = (scr.x - wrapBox.left - 60) + 'px';
    input.style.top = (scr.y - wrapBox.top - 12) + 'px';
    planBindEditor(input, () => b.label, v => {
      if (v) b.label = v;
      if (input.parentNode) input.parentNode.removeChild(input);
      savePlans(); drawPlan(); syncPlanFields();
    });
    wrap.appendChild(input);
    input.focus(); input.select();
  }

  function syncPlanFields() {
    const name = document.getElementById('planName');
    const wIn = document.getElementById('planW');
    const hIn = document.getElementById('planH');
    const b = planSelected ? planBlock(planSelected) : null;
    [name, wIn, hIn].forEach(el => { if (el) el.disabled = !b || planAllMode; });
    if (name) name.value = b ? b.label : '';
    if (wIn) wIn.value = b ? Math.round(b.w) : '';
    if (hIn) hIn.value = b ? Math.round(b.h) : '';
    const del = document.getElementById('planDelBlock');
    if (del) del.disabled = !b || planAllMode;
    const status = document.getElementById('planStatus');
    if (status) {
      status.textContent = planAllMode
        ? t('plan_status_all', { n: planTabs.length })
        : t('plan_status_tab', { name: planCur().name, n: planCur().blocks.length });
    }
  }

  // ----- 설계개요표 (실 일람표) -----
  // 모든 탭의 블럭을 한 표로 모아 층·실명·면적·비고를 직접 고칠 수 있게 한다.
  // 표에서 고치면 평면이 따라 바뀌고, 평면에서 고치면 표가 따라 바뀐다.
  function planAreaOf(b) { return Number(b.m2) || 0; }

  function renderPlanSchedule() {
    const box = document.getElementById('planSchedule');
    if (!box) return;
    box.innerHTML = '';

    const table = document.createElement('table');
    table.className = 'plan-sched';
    const head = document.createElement('tr');
    ['sched_group', 'sched_name', 'sched_area', 'sched_note', 'sched_equip', 'sched_move', ''].forEach(k => {
      const th = document.createElement('th');
      th.textContent = k ? t(k) : '';
      head.appendChild(th);
    });
    table.appendChild(head);

    // 층마다 머리글 한 줄을 두고 그 아래에 실을 모아 적는다
    planTabs.forEach((tab, ti) => {
      const area = tab.blocks.reduce((n, b) => n + planAreaOf(b), 0);
      const htr = document.createElement('tr');
      htr.className = 'sched-floor';
      const htd = document.createElement('td');
      htd.colSpan = 7;
      const name = document.createElement('b');
      name.textContent = tab.name;
      htd.appendChild(name);
      const meta = document.createElement('span');
      meta.className = 'meta';
      meta.textContent = t('sched_floor_meta', { n: tab.blocks.length, area: fmtN(Math.round(area)) });
      htd.appendChild(meta);
      const add = document.createElement('button');
      add.className = 'sched-add';
      add.textContent = t('sched_add');
      add.title = t('sched_add_hint');
      add.addEventListener('click', e => {
        e.stopPropagation();
        // 표에서 실을 추가하면 그 층 평면에 블럭이 생긴다
        planActive = ti; planAllMode = false;
        planAddBlock();
        renderPlanTabs();
      });
      htd.appendChild(add);
      htr.appendChild(htd);
      table.appendChild(htr);

      tab.blocks.forEach(b => {
        const tr = document.createElement('tr');
        if (b.id === planSelected && ti === planActive) tr.className = 'sel';

        const tdGroup = document.createElement('td');
        tdGroup.className = 'muted';
        tdGroup.textContent = t('plan_group_' + (PLAN_KIND_GROUP[b.kind] || 'misc'));
        tr.appendChild(tdGroup);

        const tdName = document.createElement('td');
        const nm = document.createElement('input');
        nm.type = 'text'; nm.value = b.label;
        nm.addEventListener('input', () => {
          b.label = nm.value;
          savePlans(); drawPlan({ keepSchedule: true });
        });
        tdName.appendChild(nm);
        tr.appendChild(tdName);

        const tdArea = document.createElement('td');
        const ar = document.createElement('input');
        ar.type = 'number'; ar.min = '0'; ar.step = '5'; ar.value = planAreaOf(b) || '';
        ar.addEventListener('input', () => {
          b.m2 = parseFloat(ar.value) || 0;
          savePlans(); updatePlanTotals();
        });
        tdArea.appendChild(ar);
        tr.appendChild(tdArea);

        const tdNote = document.createElement('td');
        const note = document.createElement('input');
        note.type = 'text'; note.value = b.note || '';
        note.addEventListener('input', () => { b.note = note.value; savePlans(); });
        tdNote.appendChild(note);
        tr.appendChild(tdNote);

        // 장비 — 그 실에 들어가는 장비명을 평면 블럭에 작은 글씨로 적는다
        const tdEq = document.createElement('td');
        const eq = planEquipFor(b.kind);
        if (eq.length) {
          const btn = document.createElement('button');
          btn.className = 'sched-eq' + (b.equip ? ' on' : '');
          btn.textContent = b.equip ? eq[0] : t('sched_equip_add');
          btn.title = eq.join(' · ');
          btn.addEventListener('click', e => {
            e.stopPropagation();
            b.equip = !b.equip;
            savePlans(); drawPlan();
          });
          tdEq.appendChild(btn);
        } else {
          tdEq.className = 'muted';
          tdEq.textContent = '-';
        }
        tr.appendChild(tdEq);

        const tdMove = document.createElement('td');
        const sel = document.createElement('select');
        sel.title = t('sched_move');
        planTabs.forEach((o, oi) => {
          const opt = document.createElement('option');
          opt.value = oi; opt.textContent = o.name;
          sel.appendChild(opt);
        });
        sel.value = ti;
        sel.addEventListener('change', () => {
          const to = parseInt(sel.value, 10);
          if (to === ti) return;
          tab.blocks = tab.blocks.filter(x => x.id !== b.id);
          planTabs[to].blocks.push(b);
          planSelected = null;
          savePlans(); drawPlan();
        });
        tdMove.appendChild(sel);
        tr.appendChild(tdMove);

        const tdDel = document.createElement('td');
        const del = document.createElement('button');
        del.className = 'sched-del'; del.textContent = '✕';
        del.title = t('plan_del');
        del.addEventListener('click', e => {
          e.stopPropagation();
          tab.blocks = tab.blocks.filter(x => x.id !== b.id);
          if (planSelected === b.id) planSelected = null;
          savePlans(); drawPlan();
        });
        tdDel.appendChild(del);
        tr.appendChild(tdDel);

        tr.addEventListener('click', e => {
          if (['INPUT', 'SELECT', 'BUTTON'].indexOf(e.target.tagName) >= 0) return;
          planAllMode = false; planActive = ti; planSelected = b.id;
          renderPlanTabs(); drawPlan();
        });
        table.appendChild(tr);
      });
    });

    if (!planTabs.some(tb => tb.blocks.length)) {
      const tr = document.createElement('tr');
      const td = document.createElement('td');
      td.colSpan = 7; td.className = 'muted'; td.textContent = t('sched_empty');
      tr.appendChild(td); table.appendChild(tr);
    }
    box.appendChild(table);

    const sum = document.createElement('div');
    sum.className = 'plan-sched-sum';
    sum.id = 'planSchedSum';
    box.appendChild(sum);
    updatePlanTotals();
  }

  function updatePlanTotals() {
    const el = document.getElementById('planSchedSum');
    if (!el) return;
    let total = 0;
    const parts = planTabs.map(tab => {
      const a = tab.blocks.reduce((n, b) => n + planAreaOf(b), 0);
      total += a;
      return tab.name + ' ' + fmtN(Math.round(a)) + '㎡';
    });
    const rooms = planTabs.reduce((n, tab) => n + tab.blocks.length, 0);
    el.textContent = t('sched_sum', {
      floors: planTabs.length, rooms, total: fmtN(Math.round(total)), detail: parts.join(' · '),
    });
  }

  function drawPlan(opts) {
    const svg = document.getElementById('planSvg');
    if (!svg) return;
    planZoom.clear();
    const target = planZoom.group;

    if (planAllMode) {
      // 모든 탭을 가로로 나란히, 각자 내용에 맞춰 축소해서 깐다
      const cellW = 360, cellH = 260, gap = 22;
      const perRow = Math.min(3, planTabs.length);
      const rows = Math.ceil(planTabs.length / perRow);
      const svgW = Math.max(760, perRow * cellW + (perRow - 1) * gap + 40);
      const svgH = Math.max(320, rows * (cellH + 34) + 30);
      svg.setAttribute('width', svgW);
      svg.setAttribute('height', svgH);
      svg.setAttribute('viewBox', '0 0 ' + svgW + ' ' + svgH);
      const startX = (svgW - (perRow * cellW + (perRow - 1) * gap)) / 2;
      planTabs.forEach((tab, i) => {
        const r = Math.floor(i / perRow), c = i % perRow;
        const ox = startX + c * (cellW + gap), oy = 26 + r * (cellH + 34);
        target.appendChild(svgEl('rect', {
          x: ox, y: oy, width: cellW, height: cellH, rx: 12,
          fill: '#FFFFFF', stroke: '#E6DECB', 'stroke-width': 1.5,
        }));
        const cap = svgEl('text', {
          x: ox + cellW / 2, y: oy - 7, 'text-anchor': 'middle',
          'font-size': 11, 'font-weight': 800, fill: '#3A2E75', 'font-family': 'sans-serif',
        });
        cap.textContent = tab.name;
        target.appendChild(cap);
        const bb = planContentBox(tab);
        const sc = Math.min((cellW - 20) / bb.w, (cellH - 20) / bb.h, 1);
        const inX = ox + (cellW - bb.w * sc) / 2 - bb.x * sc;
        const inY = oy + (cellH - bb.h * sc) / 2 - bb.y * sc;
        tab.blocks.forEach(b => drawPlanBlock(target, b, { readonly: true, scale: sc, ox: inX, oy: inY }));
      });
      planZoom.reset();
      syncPlanFields();
      if (!(opts && opts.keepSchedule)) renderPlanSchedule();
      return;
    }

    const tab = planCur();
    let maxX = 720, maxY = 380;
    tab.blocks.forEach(b => { maxX = Math.max(maxX, b.x + b.w); maxY = Math.max(maxY, b.y + b.h); });
    const svgW = Math.max(760, maxX + 60), svgH = Math.max(420, maxY + 60);
    svg.setAttribute('width', svgW);
    svg.setAttribute('height', svgH);
    svg.setAttribute('viewBox', '0 0 ' + svgW + ' ' + svgH);

    // 배치 감각을 잡아주는 격자
    const grid = svgEl('g', { opacity: 0.5 });
    for (let x = 0; x <= svgW; x += 40) {
      grid.appendChild(svgEl('path', { d: 'M' + x + ',0 L' + x + ',' + svgH, stroke: '#EDE7D8', 'stroke-width': 1 }));
    }
    for (let y = 0; y <= svgH; y += 40) {
      grid.appendChild(svgEl('path', { d: 'M0,' + y + ' L' + svgW + ',' + y, stroke: '#EDE7D8', 'stroke-width': 1 }));
    }
    target.appendChild(grid);

    tab.blocks.forEach(b => drawPlanBlock(target, b, {}));

    // 붙은 자리를 알려주는 안내선
    planGuides.forEach(gd => {
      target.appendChild(svgEl('path', {
        d: 'M' + gd.x1 + ',' + gd.y1 + ' L' + gd.x2 + ',' + gd.y2,
        stroke: '#C8604F', 'stroke-width': 1.4, 'stroke-dasharray': '4,3',
      }));
    });

    if (!tab.blocks.length) {
      const hint = svgEl('text', {
        x: svgW / 2, y: 70, 'text-anchor': 'middle', 'font-size': 12,
        'font-weight': 700, fill: '#8A8072', 'font-family': 'sans-serif',
      });
      hint.textContent = t('plan_empty');
      target.appendChild(hint);
    }
    planZoom.reset();
    syncPlanFields();
    if (!(opts && opts.keepSchedule)) renderPlanSchedule();
  }

  // 드래그(이동/크기조절)는 창 전체에서 받아, 커서가 블럭을 벗어나도 끊기지 않게 한다
  window.addEventListener('pointermove', e => {
    if (!planDrag) return;
    const b = planBlock(planDrag.id);
    if (!b) { planDrag = null; return; }
    const p = planPoint(e);
    if (planDrag.mode === 'move') {
      // 이웃에 붙는 쪽이 우선이고, 걸리는 이웃이 없는 축만 격자로 떨어뜨린다
      const raw = { x: Math.max(0, p.x - planDrag.dx), y: Math.max(0, p.y - planDrag.dy), w: b.w, h: b.h };
      const snapped = planSnapBox(raw, b.id);
      b.x = Math.max(0, snapped.x !== raw.x ? snapped.x : planSnapV(raw.x));
      b.y = Math.max(0, snapped.y !== raw.y ? snapped.y : planSnapV(raw.y));
    } else {
      planGuides = [];
      const st = planDrag.start, k = planDrag.handle;
      const dx = p.x - planDrag.from.x, dy = p.y - planDrag.from.y;
      let x = st.x, y = st.y, w = st.w, h = st.h;
      // 끌고 있는 변만 이웃 면에 붙인다
      if (k.indexOf('e') >= 0) {
        const edge = planSnapEdge(st.x + st.w + dx, b.id, true);
        const right = edge !== null ? edge : planSnapV(st.x + st.w + dx);
        if (edge !== null) planGuides.push({ x1: edge, y1: st.y, x2: edge, y2: st.y + st.h });
        w = right - st.x;
      }
      if (k.indexOf('s') >= 0) {
        const edge = planSnapEdge(st.y + st.h + dy, b.id, false);
        const bottom = edge !== null ? edge : planSnapV(st.y + st.h + dy);
        if (edge !== null) planGuides.push({ x1: st.x, y1: edge, x2: st.x + st.w, y2: edge });
        h = bottom - st.y;
      }
      if (k.indexOf('w') >= 0) {
        const edge = planSnapEdge(st.x + dx, b.id, true);
        const left = Math.max(0, edge !== null ? edge : planSnapV(st.x + dx));
        if (edge !== null) planGuides.push({ x1: edge, y1: st.y, x2: edge, y2: st.y + st.h });
        w = st.x + st.w - left; x = left;
      }
      if (k.indexOf('n') >= 0) {
        const edge = planSnapEdge(st.y + dy, b.id, false);
        const top = Math.max(0, edge !== null ? edge : planSnapV(st.y + dy));
        if (edge !== null) planGuides.push({ x1: st.x, y1: edge, x2: st.x + st.w, y2: edge });
        h = st.y + st.h - top; y = top;
      }
      if (w < 30) { if (k.indexOf('w') >= 0) x = st.x + st.w - 30; w = 30; }
      if (h < 24) { if (k.indexOf('n') >= 0) y = st.y + st.h - 24; h = 24; }
      b.x = Math.max(0, Math.round(x)); b.y = Math.max(0, Math.round(y));
      b.w = Math.round(w); b.h = Math.round(h);
    }
    drawPlan({ keepSchedule: true });
  });
  window.addEventListener('pointerup', () => {
    if (!planDrag) return;
    planDrag = null;
    planGuides = [];
    savePlans();
    drawPlan();
  });

  document.getElementById('planSvg').addEventListener('pointerdown', e => {
    if (e.target === e.currentTarget && planSelected) { planSelected = null; drawPlan(); }
  });
  document.addEventListener('keydown', e => {
    if (e.key !== 'Delete' && e.key !== 'Backspace') return;
    const tag = (e.target && e.target.tagName) || '';
    if (tag === 'INPUT' || tag === 'TEXTAREA' || tag === 'SELECT') return;
    if (planSelected && !planAllMode) { e.preventDefault(); planDeleteSelected(); }
  });

  document.getElementById('planAddBlock').addEventListener('click', () => {
    if (planAllMode) { planAllMode = false; renderPlanTabs(); }
    planAddBlock();
  });
  document.getElementById('planAutoBtn').addEventListener('click', () => {
    if (planTabs.some(tab => tab.blocks.length) && !window.confirm(t('plan_auto_confirm'))) return;
    planAutoGenerate();
  });
  document.getElementById('planDelBlock').addEventListener('click', planDeleteSelected);
  document.getElementById('planSnap').addEventListener('change', () => {});
  document.getElementById('planAllView').addEventListener('click', () => {
    planAllMode = !planAllMode;
    planSelected = null;
    document.getElementById('planAllView').classList.toggle('on', planAllMode);
    renderPlanTabs();
    drawPlan();
  });
  document.getElementById('planName').addEventListener('input', () => {
    const b = planSelected ? planBlock(planSelected) : null;
    if (!b) return;
    b.label = document.getElementById('planName').value;
    savePlans(); drawPlan();
  });
  ['planW', 'planH'].forEach(id => {
    document.getElementById(id).addEventListener('input', () => {
      const b = planSelected ? planBlock(planSelected) : null;
      if (!b) return;
      const v = parseInt(document.getElementById(id).value, 10);
      if (!isFinite(v) || v < 20) return;
      if (id === 'planW') b.w = v; else b.h = v;
      savePlans(); drawPlan();
    });
  });
  document.getElementById('sldZoomIn').addEventListener('click', () => sldZoom.zoomIn());
  document.getElementById('sldZoomOut').addEventListener('click', () => sldZoom.zoomOut());
  document.getElementById('sldZoomReset').addEventListener('click', () => sldZoom.reset());
  document.getElementById('planZoomIn').addEventListener('click', () => planZoom.zoomIn());
  document.getElementById('planZoomOut').addEventListener('click', () => planZoom.zoomOut());
  document.getElementById('planZoomReset').addEventListener('click', () => planZoom.reset());

  function refreshPlanTexts() {
    const sel = document.getElementById('planKind');
    if (sel) {
      const keep = sel.value;
      sel.innerHTML = '';
      PLAN_GROUPS.forEach(gr => {
        const og = document.createElement('optgroup');
        og.label = t('plan_group_' + gr.key);
        gr.kinds.forEach(k => {
          const opt = document.createElement('option');
          opt.value = k;
          opt.textContent = t('plan_kind_' + k);
          og.appendChild(opt);
        });
        sel.appendChild(og);
      });
      if (keep) sel.value = keep;
    }
    renderPlanTabs();
    drawPlan();
  }
  refreshPlanTexts();

  // ===== ⑥ 데이터홀 평면 검토 =====
  // POD 1개를 실제 랙 배치로 펼쳐 본다. 랙 수는 POD 부하 ÷ 랙당 전력에서 나오고,
  // 열 구성·통로·CDU·전기실까지 위 설정값과 아래 치수 입력으로 작도한다.
  // 모든 좌표 단위는 mm, 그릴 때만 축척을 곱한다.
  const HALL_PIPES = [
    { key: 'chw_s', color: '#1F4E9C' },
    { key: 'chw_r', color: '#7CB342' },
    { key: 'cdu_ps', color: '#29A8E0' },
    { key: 'cdu_pr', color: '#F5A623' },
    { key: 'cdu_ss', color: '#9FD6F2' },
    { key: 'cdu_sr', color: '#D0021B' },
  ];
  const hallZoom = makeZoomable('hallSvg');
  let hallView = 'plan';
  let hallScale = 'fit';

  // ----- 랙 구성 (POD 스터디) -----
  // POD 1개를 어떤 랙으로 채울지 종류별 수량·전력으로 직접 짠다. 합계가 POD 부하가 되고,
  // 열 수를 1~4로 바꿔가며 외곽 치수와 모선 길이를 비교한다.
  const RACK_DEFAULTS = [
    { name: 'Vera Rubin NVL72', qty: 16, kw: 227, color: '#6F5FBF' },
    { name: 'Groq 3 LPX', qty: 10, kw: 130, color: '#854F0B' },
    { name: 'Vera CPU 랙', qty: 2, kw: 100, color: '#185FA5' },
    { name: 'BlueField-4 STX', qty: 2, kw: 40, color: '#993556' },
    { name: 'Spectrum-6 SPX', qty: 10, kw: 30, color: '#0F6E56' },
  ];
  const RACK_PALETTE = ['#6F5FBF', '#854F0B', '#185FA5', '#993556', '#0F6E56', '#993C1D', '#3B6D11', '#2E2419'];
  let hallRacks = loadHallRacks();
  let hallRowsOpt = 1;
  let hallRackSeq = 0;

  function loadHallRacks() {
    try {
      const raw = JSON.parse(localStorage.getItem('prc_hallracks') || 'null');
      if (Array.isArray(raw) && raw.length) return raw;
    } catch (e) {}
    return RACK_DEFAULTS.map(r => Object.assign({}, r));
  }
  function saveHallRacks() {
    try { localStorage.setItem('prc_hallracks', JSON.stringify(hallRacks)); } catch (e) {}
  }
  function hallRackTotals() {
    let qty = 0, kw = 0;
    hallRacks.forEach(r => {
      const q = Math.max(0, parseInt(r.qty, 10) || 0);
      const k = Math.max(0, parseFloat(r.kw) || 0);
      qty += q; kw += q * k;
    });
    return { qty, kw };
  }
  // 이름에서 짧은 식별자를 뽑는다 (Vera Rubin NVL72 → NVL72)
  function rackAbbr(name) {
    const caps = String(name || '').match(/[A-Z][A-Z0-9-]{1,}/g);
    if (caps && caps.length) return caps[caps.length - 1];
    return String(name || '').trim().split(/\s+/)[0].slice(0, 6);
  }

  // 랙을 열에 까는 순서. 패턴에 따라 종류를 열마다 고르게 나누거나, 모아 두거나, 거울상으로.
  //  · even   : 종류별 수량을 열 수로 나눠 각 열이 같은 구성을 갖게 한다
  //  · mirror : even 과 같되 짝수 열을 뒤집어 통로를 기준으로 대칭이 되게 한다
  //  · group  : 종류별로 모아 순서대로 채운다
  function hallRowSequences(rows) {
    const pattern = (document.getElementById('hallPattern') || {}).value || 'even';
    const list = hallRacks.map(r => ({ ref: r, qty: Math.max(0, parseInt(r.qty, 10) || 0) }));
    const out = Array.from({ length: rows }, () => []);

    if (pattern === 'group') {
      const flat = [];
      list.forEach(x => { for (let i = 0; i < x.qty; i++) flat.push(x.ref); });
      const perRow = Math.ceil(flat.length / rows);
      for (let r = 0; r < rows; r++) out[r] = flat.slice(r * perRow, (r + 1) * perRow);
      return out;
    }

    // 종류마다 몫을 나누고, 나머지는 열을 돌려가며 준다.
    // 늘 앞쪽 열부터 주면 나머지가 한쪽에 쌓여 열 길이가 크게 어긋난다
    // (40랙·4열이면 12/12/8/8). 시작 열을 옮겨가며 주면 10/10/10/10이 된다.
    let offset = 0;
    const count = new Array(rows).fill(0);
    list.forEach(x => {
      const base = Math.floor(x.qty / rows), rem = x.qty % rows;
      for (let r = 0; r < rows; r++) {
        for (let i = 0; i < base; i++) { out[r].push(x.ref); count[r]++; }
      }
      for (let k = 0; k < rem; k++) {
        const r = (offset + k) % rows;
        out[r].push(x.ref); count[r]++;
      }
      offset = (offset + rem) % rows;
    });

    // 그래도 2개 이상 차이가 나면 긴 열에서 짧은 열로 한 대씩 옮겨 맞춘다
    for (let guard = 0; guard < rows * 4; guard++) {
      let lo = 0, hi = 0;
      for (let r = 1; r < rows; r++) {
        if (count[r] < count[lo]) lo = r;
        if (count[r] > count[hi]) hi = r;
      }
      if (count[hi] - count[lo] < 2) break;
      out[lo].push(out[hi].pop());
      count[hi]--; count[lo]++;
    }
    // 열 안에서는 종류 순서를 유지한다
    const order = new Map();
    list.forEach((x, i) => order.set(x.ref, i));
    out.forEach(row => row.sort((a, b) => order.get(a) - order.get(b)));
    if (pattern === 'mirror') {
      for (let r = 1; r < rows; r += 2) out[r].reverse();
    }
    return out;
  }

  function hallRackSequence() {
    const seq = [];
    hallRacks.forEach(r => {
      const q = Math.max(0, parseInt(r.qty, 10) || 0);
      for (let i = 0; i < q; i++) seq.push(r);
    });
    return seq;
  }

  // ----- POD 제너레이티브 디자인 -----
  // 목표 부하와 작업 성향을 주면 랙 구성을 만들어 준다. 성향별 비율은 '어떤 일을 돌리는
  // POD인가'에서 끌어낸 설계 원형이지, 특정 사업자가 공개한 사양이 아니다 (화면에도 명시).
  // share = 그 랙 종류가 가져가는 IT 전력 비중, 합계 1.
  const GEN_PROFILES = [
    { key: 'train', cooling: 'dlc', rows: 2,
      share: { nvl: 0.86, lpx: 0.00, cpu: 0.04, stx: 0.02, spx: 0.08 } },
    { key: 'infer', cooling: 'hybrid', rows: 3,
      share: { nvl: 0.45, lpx: 0.35, cpu: 0.10, stx: 0.02, spx: 0.08 } },
    { key: 'cloud', cooling: 'hybrid', rows: 3,
      share: { nvl: 0.55, lpx: 0.20, cpu: 0.13, stx: 0.04, spx: 0.08 } },
    { key: 'edge', cooling: 'dlc', rows: 1,
      share: { nvl: 0.70, lpx: 0.10, cpu: 0.08, stx: 0.02, spx: 0.10 } },
  ];
  const GEN_RACKS = {
    nvl: { name: 'Vera Rubin NVL72', kw: 227, color: '#6F5FBF' },
    lpx: { name: 'Groq 3 LPX', kw: 130, color: '#854F0B' },
    cpu: { name: 'Vera CPU 랙', kw: 100, color: '#185FA5' },
    stx: { name: 'BlueField-4 STX', kw: 40, color: '#993556' },
    spx: { name: 'Spectrum-6 SPX', kw: 30, color: '#0F6E56' },
  };
  let genResults = [];

  function genProfile() {
    const sel = document.getElementById('genProfile');
    const key = sel ? sel.value : 'train';
    return GEN_PROFILES.find(p => p.key === key) || GEN_PROFILES[0];
  }

  // 비중 → 랙 수량. 가장 큰 항목으로 반올림 오차를 흡수해 목표에 붙인다.
  function genCompose(targetKW, share) {
    const list = [];
    Object.keys(GEN_RACKS).forEach(k => {
      const sh = share[k] || 0;
      if (sh <= 0) return;
      const spec = GEN_RACKS[k];
      const qty = Math.max(1, Math.round(targetKW * sh / spec.kw));
      list.push({ key: k, name: spec.name, kw: spec.kw, color: spec.color, qty });
    });
    if (!list.length) return list;
    let total = list.reduce((n, r) => n + r.qty * r.kw, 0);
    const big = list.reduce((a, b) => (a.qty * a.kw >= b.qty * b.kw ? a : b));
    const adjust = Math.round((targetKW - total) / big.kw);
    big.qty = Math.max(1, big.qty + adjust);
    return list;
  }

  // 우선 기준에 맞는 열 수를 고른다
  function genBestRows(racks, goal) {
    let best = null;
    [1, 2, 3, 4].forEach(r => {
      const o = hallRowOptionFor(racks, r);
      const score = goal === 'area' ? o.area : (goal === 'bus' ? o.busway : o.depth);
      if (!best || score < best.score) best = { rows: r, score, o };
    });
    return best;
  }

  function genRun() {
    const prof = genProfile();
    const targetKW = Math.max(100, (parseFloat(document.getElementById('genTargetMW').value) || 6) * 1000);
    const goal = document.getElementById('genGoal').value;

    // 같은 목표를 세 가지 성격으로 — 프로파일 그대로 / 밀도 치우침 / 범용 치우침
    const variants = [
      { key: 'as_is', share: prof.share },
      { key: 'dense', share: genShift(prof.share, 'nvl', 0.12) },
      { key: 'broad', share: genShift(prof.share, 'lpx', 0.12) },
    ];
    genResults = variants.map(v => {
      const racks = genCompose(targetKW, v.share);
      const qty = racks.reduce((n, r) => n + r.qty, 0);
      const kw = racks.reduce((n, r) => n + r.qty * r.kw, 0);
      const best = genBestRows(racks, goal);
      return { key: v.key, racks, qty, kw, rows: best.rows, geom: best.o, cooling: prof.cooling };
    });
    renderGenResults();
  }

  // 한 종류의 비중을 끌어올리고 나머지를 비례로 줄인다
  function genShift(share, key, amount) {
    const out = Object.assign({}, share);
    const rest = Object.keys(out).filter(k => k !== key);
    const restSum = rest.reduce((n, k) => n + out[k], 0);
    const take = Math.min(amount, restSum * 0.6);
    out[key] = (out[key] || 0) + take;
    rest.forEach(k => { out[k] = out[k] - take * (out[k] / (restSum || 1)); });
    return out;
  }

  function renderGenResults() {
    const box = document.getElementById('genResults');
    if (!box) return;
    box.innerHTML = '';
    if (!genResults.length) return;
    genResults.forEach(r => {
      const card = document.createElement('div');
      card.className = 'gen-card';
      const mix = r.racks.map(x => x.name.replace(/\s*\(.*\)/, '') + ' ×' + x.qty).join(' · ');
      card.innerHTML = `<div class="gen-head">${t('gen_var_' + r.key)}</div>`
        + `<div class="gen-main">${fmtN(r.kw / 1000, 2)}MW · ${t('gen_racks', { n: r.qty })}</div>`
        + `<div class="gen-sub">${mix}</div>`
        + `<div class="gen-geo">${t('gen_geo', {
              rows: r.rows, w: Math.round(r.geom.w), d: Math.round(r.geom.depth),
              area: fmtN(Math.round(r.geom.area)), bus: fmtN(r.geom.busway / 1000, 1),
            })}</div>`;
      const btn = document.createElement('button');
      btn.className = 'quick-btn';
      btn.textContent = t('gen_apply');
      btn.addEventListener('click', () => genApply(r));
      card.appendChild(btn);
      box.appendChild(card);
    });
  }

  function genApply(r) {
    hallRacks = r.racks.map(x => ({ name: x.name, qty: x.qty, kw: x.kw, color: x.color }));
    saveHallRacks();
    const cool = document.getElementById('hallCooling');
    if (cool) cool.value = r.cooling;
    const btn = document.querySelector('#hallRowsToggle .mode-btn[data-rows="' + r.rows + '"]');
    if (btn) btn.click(); else { hallRowsOpt = r.rows; }
    renderHallRackTable();
    drawHall();
    const note = document.getElementById('genProfileNote');
    if (note) note.textContent = t('gen_applied', { kw: fmtN(Math.round(r.kw)), rows: r.rows });
  }

  function refreshGenProfiles() {
    const sel = document.getElementById('genProfile');
    if (!sel) return;
    const keep = sel.value;
    sel.innerHTML = '';
    GEN_PROFILES.forEach(pr => {
      const o = document.createElement('option');
      o.value = pr.key;
      o.textContent = t('gen_prof_' + pr.key);
      sel.appendChild(o);
    });
    if (keep) sel.value = keep;
    updateGenNote();
  }
  function updateGenNote() {
    const note = document.getElementById('genProfileNote');
    if (note) note.textContent = t('gen_prof_' + genProfile().key + '_d') + ' ' + t('gen_disclaimer');
  }
  const genProfileSel = document.getElementById('genProfile');
  if (genProfileSel) genProfileSel.addEventListener('change', updateGenNote);
  document.getElementById('genRunBtn').addEventListener('click', genRun);

  function renderHallRackTable() {
    const box = document.getElementById('hallRackTable');
    if (!box) return;
    box.innerHTML = '';
    const table = document.createElement('table');
    table.className = 'rack-mix';
    const head = document.createElement('tr');
    ['rackmix_kind', 'rackmix_qty', 'rackmix_kw', 'rackmix_sub', ''].forEach(k => {
      const th = document.createElement('th');
      th.textContent = k ? t(k) : '';
      head.appendChild(th);
    });
    table.appendChild(head);

    hallRacks.forEach((r, i) => {
      if (!r.color) r.color = RACK_PALETTE[i % RACK_PALETTE.length];
      const tr = document.createElement('tr');

      const tdName = document.createElement('td');
      const dot = document.createElement('span');
      dot.className = 'rack-dot';
      dot.style.background = r.color;
      tdName.appendChild(dot);
      const nm = document.createElement('input');
      nm.type = 'text'; nm.value = r.name;
      nm.addEventListener('input', () => { r.name = nm.value; saveHallRacks(); drawHall(); });
      tdName.appendChild(nm);
      tr.appendChild(tdName);

      const mkNum = (key, step) => {
        const td = document.createElement('td');
        const el = document.createElement('input');
        el.type = 'number'; el.min = '0'; el.step = step; el.value = r[key];
        el.addEventListener('input', () => {
          r[key] = parseFloat(el.value) || 0;
          saveHallRacks();
          renderHallRackTotals();
          drawHall();
        });
        td.appendChild(el);
        return td;
      };
      tr.appendChild(mkNum('qty', '1'));
      tr.appendChild(mkNum('kw', '1'));

      const tdSub = document.createElement('td');
      tdSub.className = 'sub';
      tdSub.textContent = fmtN(Math.round((parseInt(r.qty, 10) || 0) * (parseFloat(r.kw) || 0)));
      tr.appendChild(tdSub);

      const tdDel = document.createElement('td');
      const del = document.createElement('button');
      del.className = 'sched-del'; del.textContent = '✕';
      del.addEventListener('click', () => {
        hallRacks = hallRacks.filter(x => x !== r);
        saveHallRacks(); renderHallRackTable(); drawHall();
      });
      tdDel.appendChild(del);
      tr.appendChild(tdDel);
      table.appendChild(tr);
    });

    const tot = hallRackTotals();
    const ftr = document.createElement('tr');
    ftr.className = 'total';
    const c1 = document.createElement('td'); c1.textContent = t('rackmix_total'); ftr.appendChild(c1);
    const c2 = document.createElement('td'); c2.textContent = fmtN(tot.qty); ftr.appendChild(c2);
    const c3 = document.createElement('td'); c3.textContent = ''; ftr.appendChild(c3);
    const c4 = document.createElement('td'); c4.className = 'sub'; c4.textContent = fmtN(Math.round(tot.kw)); ftr.appendChild(c4);
    ftr.appendChild(document.createElement('td'));
    table.appendChild(ftr);
    box.appendChild(table);
    renderHallRackTotals();
  }

  function renderHallRackTotals() {
    const tot = hallRackTotals();
    const el = document.getElementById('hallMixTotal');
    if (el) el.value = t('rackmix_summary', { racks: fmtN(tot.qty), kw: fmtN(Math.round(tot.kw)), mw: fmtN(tot.kw / 1000, 2) });
    const box = document.getElementById('hallRackTable');
    if (box) {
      const subs = box.querySelectorAll('td.sub');
      hallRacks.forEach((r, i) => {
        if (subs[i]) subs[i].textContent = fmtN(Math.round((parseInt(r.qty, 10) || 0) * (parseFloat(r.kw) || 0)));
      });
      if (subs[hallRacks.length]) subs[hallRacks.length].textContent = fmtN(Math.round(tot.kw));
      const qtyCell = box.querySelector('tr.total td:nth-child(2)');
      if (qtyCell) qtyCell.textContent = fmtN(tot.qty);
    }
  }

  document.getElementById('hallRackAdd').addEventListener('click', () => {
    hallRacks.push({ name: t('rackmix_new', { n: ++hallRackSeq }), qty: 1, kw: 30, color: RACK_PALETTE[hallRacks.length % RACK_PALETTE.length] });
    saveHallRacks(); renderHallRackTable(); drawHall();
  });
  document.getElementById('hallRackReset').addEventListener('click', () => {
    hallRacks = RACK_DEFAULTS.map(r => Object.assign({}, r));
    saveHallRacks(); renderHallRackTable(); drawHall();
  });
  document.getElementById('hallRackApply').addEventListener('click', () => {
    const tot = hallRackTotals();
    if (!tot.kw) return;
    const cap = document.getElementById('podCapacity');
    cap.value = Math.round(tot.kw);
    cap.dispatchEvent(new Event('input', { bubbles: true }));
    const note = document.getElementById('hallRackApplyNote');
    if (note) {
      note.textContent = t('rackmix_applied', { kw: fmtN(Math.round(tot.kw)) });
      note.style.color = 'var(--primary)';
      note.style.fontWeight = '700';
    }
  });
  Array.prototype.forEach.call(document.querySelectorAll('#hallRowsToggle .mode-btn'), btn => {
    btn.addEventListener('click', () => {
      hallRowsOpt = parseInt(btn.dataset.rows, 10) || 1;
      Array.prototype.forEach.call(document.querySelectorAll('#hallRowsToggle .mode-btn'), b => {
        const on = b === btn;
        b.classList.toggle('active', on);
        b.classList.toggle('normal', on);
      });
      drawHall();
    });
  });

  const hallNum = (id, dflt) => {
    const el = document.getElementById(id);
    const v = el ? parseFloat(el.value) : NaN;
    return isFinite(v) && v > 0 ? v : dflt;
  };

  // 위 섹션에서 정한 POD 구성 + 이 섹션의 치수 입력 → 배치 계산
  function hallPlanData() {
    const c = planLastContext;
    const sel = document.getElementById('hallPodSel');
    const podIdx = sel && sel.value !== '' ? parseInt(sel.value, 10) : 0;
    const mix = hallRackTotals();
    const podKW = mix.kw > 0 ? mix.kw : (c ? c.podKW : 6000);
    const racksTotal = mix.qty > 0 ? mix.qty : Math.max(1, Math.ceil(podKW / 133));
    const rackKW = racksTotal ? podKW / racksTotal : 0;
    const rowsOpt = Math.max(1, hallRowsOpt);
    const perRow = Math.max(1, Math.ceil(racksTotal / rowsOpt));
    const rackW = hallNum('hallRackW', 600);
    const rackD = hallNum('hallRackD', 1200);
    const cold = hallNum('hallCold', 1200);
    const hot = hallNum('hallHot', 1000);
    const cduKW = hallNum('hallCduKW', 1800);
    const elecW = hallNum('hallElecW', 4600);

    const racks = racksTotal;
    const rows = rowsOpt;
    const perim = hallNum('hallPerim', 1200);
    // 열은 등을 맞대 짝으로 세운다: 짝 사이는 핫 통로, 짝과 짝 사이는 콜드 통로
    const pairs = Math.ceil(rows / 2);
    const rowLen = perRow * rackW;
    const cduQty = Math.max(1, Math.ceil(podKW / cduKW)) + 1;   // N+1
    const cduW = 1500, aisleEnd = 2000, manifoldW = 800;

    // 가로: 전기실 | 전실 | 랙열 | 매니폴드 | CDU
    const bands = [
      { key: 'elec', mm: elecW },
      { key: 'front', mm: aisleEnd },
      { key: 'racks', mm: rowLen },
      { key: 'manifold', mm: manifoldW },
      { key: 'cdu', mm: cduW + 1200 },
    ];
    const totalW = bands.reduce((n, b) => n + b.mm, 0);

    // 세로: 상·하 여유 + (열 + 통로)
    const edge = perim;
    let depth = edge * 2 + rows * rackD;
    depth += (pairs - 1) * cold + Math.min(pairs, Math.floor(rows / 2)) * hot;

    const areaM2 = (totalW / 1000) * (depth / 1000);
    return {
      podIdx, podKW, rackKW, racks, rows, perRow, pairs, rackW, rackD, cold, hot,
      rowLen, cduQty, cduKW, cduW, manifoldW, aisleEnd, elecW, edge,
      bands, totalW, depth, areaM2, perim, seq: hallRackSequence(),
      buswayLen: rows * rowLen,
      raised: hallNum('hallRaised', 800), rackH: hallNum('hallRackH', 2200),
      busway: hallNum('hallBusway', 3202), ceil: hallNum('hallCeil', 6000),
      cooling: (document.getElementById('hallCooling') || {}).value || 'dlc',
    };
  }

  // 치수선 (mm 표기)
  function hallDim(target, x1, y1, x2, y2, text, side) {
    const col = '#8A8072';
    target.appendChild(svgEl('path', { d: `M${x1},${y1} L${x2},${y2}`, stroke: col, 'stroke-width': 0.8 }));
    const tick = 3;
    if (y1 === y2) {
      [x1, x2].forEach(x => target.appendChild(svgEl('path', { d: `M${x},${y1 - tick} L${x},${y1 + tick}`, stroke: col, 'stroke-width': 0.8 })));
    } else {
      [y1, y2].forEach(y => target.appendChild(svgEl('path', { d: `M${x1 - tick},${y} L${x1 + tick},${y}`, stroke: col, 'stroke-width': 0.8 })));
    }
    const el = svgEl('text', {
      x: (x1 + x2) / 2, y: (y1 + y2) / 2 + (y1 === y2 ? -4 : 0),
      'text-anchor': 'middle', 'font-size': 7.5, 'font-weight': 600, fill: col, 'font-family': 'sans-serif',
      stroke: '#FFFFFF', 'stroke-width': 2.2, 'paint-order': 'stroke',
    });
    if (y1 !== y2) el.setAttribute('transform', `rotate(-90 ${x1} ${(y1 + y2) / 2})`);
    if (y1 !== y2) { el.setAttribute('x', x1); el.setAttribute('y', (y1 + y2) / 2); }
    el.textContent = text;
    target.appendChild(el);
  }

  function drawHallPlan(target, d, sc, ox, oy) {
    const X = mm => ox + mm * sc, Y = mm => oy + mm * sc, S = mm => mm * sc;
    const navy = '#3A2E75';

    // 외벽
    target.appendChild(svgEl('rect', {
      x: X(0), y: Y(0), width: S(d.totalW), height: S(d.depth),
      fill: '#FFFFFF', stroke: '#5A5A5A', 'stroke-width': 2,
    }));

    // 가로 밴드 경계
    let cursor = 0;
    const bandX = {};
    d.bands.forEach(b => { bandX[b.key] = cursor; cursor += b.mm; });

    // 전기실 / UPS
    target.appendChild(svgEl('rect', {
      x: X(0), y: Y(0), width: S(d.elecW), height: S(d.depth),
      fill: hexToRgba('#6F5FBF', 0.1), stroke: '#6F5FBF', 'stroke-width': 1.4,
    }));
    const elecLabel = svgEl('text', {
      x: X(d.elecW / 2), y: Y(d.depth / 2), 'text-anchor': 'middle',
      'font-size': 11, 'font-weight': 800, fill: '#6F5FBF', 'font-family': 'sans-serif',
    });
    elecLabel.textContent = t('hall_elec_room');
    target.appendChild(elecLabel);
    const elecSub = svgEl('text', {
      x: X(d.elecW / 2), y: Y(d.depth / 2) + 13, 'text-anchor': 'middle',
      'font-size': 8, 'font-weight': 600, fill: '#6F5FBF', 'font-family': 'sans-serif',
    });
    elecSub.textContent = 'UPS / ' + t('plan_kind_batt');
    target.appendChild(elecSub);

    // 랙 열 — 패턴대로 나눈 순서를 열마다 깐다
    const rackX = bandX.racks;
    const rowSeq = hallRowSequences(d.rows);
    const wPx = S(d.rackW), hPx = S(d.rackD);
    let y = d.edge;
    const rowYs = [];
    let num = 0;
    for (let r = 0; r < d.rows; r++) {
      rowYs.push(y);
      const seq = rowSeq[r] || [];
      for (let i = 0; i < seq.length && i < d.perRow; i++) {
        const kind = seq[i];
        const col = (kind && kind.color) || navy;
        const rx = X(rackX + i * d.rackW), ry = Y(y);
        target.appendChild(svgEl('rect', {
          x: rx, y: ry, width: wPx - 0.6, height: hPx,
          fill: hexToRgba(col, 0.82), stroke: col, 'stroke-width': 0.8,
        }));
        num += 1;
        // 칸이 좁으면 번호만, 넓어지면 명칭과 kW까지
        if (wPx >= 13) {
          const id = svgEl('text', {
            x: rx + wPx / 2, y: ry + Math.min(11, hPx * 0.3), 'text-anchor': 'middle',
            'font-size': Math.min(7.5, wPx * 0.3), 'font-weight': 800, fill: '#FFFFFF', 'font-family': 'sans-serif',
          });
          id.textContent = 'R' + String(num).padStart(2, '0');
          target.appendChild(id);
        }
        if (wPx >= 24 && hPx >= 26) {
          const ab = svgEl('text', {
            x: rx + wPx / 2, y: ry + hPx * 0.58, 'text-anchor': 'middle',
            'font-size': Math.min(7, wPx * 0.26), 'font-weight': 700, fill: '#FFFFFF', 'font-family': 'sans-serif',
          });
          ab.textContent = rackAbbr(kind && kind.name);
          target.appendChild(ab);
          const kwEl = svgEl('text', {
            x: rx + wPx / 2, y: ry + hPx * 0.84, 'text-anchor': 'middle',
            'font-size': Math.min(6.2, wPx * 0.23), 'font-weight': 600, fill: 'rgba(255,255,255,0.85)', 'font-family': 'sans-serif',
          });
          kwEl.textContent = fmtN(kind && kind.kw) + 'kW';
          target.appendChild(kwEl);
        }
      }
      // 열 이름
      const rowLab = svgEl('text', {
        x: X(rackX + d.rowLen / 2), y: Y(y) - 4, 'text-anchor': 'middle',
        'font-size': 8.5, 'font-weight': 800, fill: navy, 'font-family': 'sans-serif',
      });
      rowLab.textContent = t('hall_row_label', { letter: 'ABCDEFGH'[r] || (r + 1) });
      target.appendChild(rowLab);
      // 짝 안쪽은 핫 통로, 짝 사이는 콜드 통로
      y += d.rackD + ((r % 2 === 0) ? d.hot : d.cold);
    }

    // 통로 표시
    for (let r = 0; r < d.rows - 1; r++) {
      const gapTop = rowYs[r] + d.rackD, gapBot = rowYs[r + 1];
      const isHot = (r % 2 === 0);
      target.appendChild(svgEl('rect', {
        x: X(rackX), y: Y(gapTop), width: S(d.rowLen), height: S(gapBot - gapTop),
        fill: isHot ? hexToRgba('#D0021B', 0.07) : hexToRgba('#29A8E0', 0.09),
        stroke: 'none',
      }));
      const lab = svgEl('text', {
        x: X(rackX + d.rowLen / 2), y: Y((gapTop + gapBot) / 2) + 3, 'text-anchor': 'middle',
        'font-size': 7.5, 'font-weight': 700, fill: isHot ? '#D0021B' : '#1F7FB5', 'font-family': 'sans-serif',
      });
      lab.textContent = t(isHot ? 'hall_hot_aisle' : 'hall_cold_aisle') + ' ' + Math.round(gapBot - gapTop);
      target.appendChild(lab);
    }

    // 매니폴드 + CDU
    target.appendChild(svgEl('rect', {
      x: X(bandX.manifold), y: Y(d.edge), width: S(d.manifoldW), height: S(d.depth - d.edge * 2),
      fill: hexToRgba('#9013FE', 0.12), stroke: '#9013FE', 'stroke-width': 1,
    }));
    const cduGap = (d.depth - d.edge * 2) / d.cduQty;
    for (let i = 0; i < d.cduQty; i++) {
      const cy = d.edge + i * cduGap + cduGap * 0.1;
      target.appendChild(svgEl('rect', {
        x: X(bandX.cdu + 400), y: Y(cy), width: S(d.cduW), height: S(cduGap * 0.8),
        fill: hexToRgba('#0F6E56', 0.12), stroke: '#0F6E56', 'stroke-width': 1.2,
      }));
      const cl = svgEl('text', {
        x: X(bandX.cdu + 400 + d.cduW / 2), y: Y(cy + cduGap * 0.4) + 3, 'text-anchor': 'middle',
        'font-size': 8, 'font-weight': 700, fill: '#0F6E56', 'font-family': 'sans-serif',
      });
      cl.textContent = 'CDU ' + (i + 1);
      target.appendChild(cl);
    }

    // 배관 — 매니폴드에서 각 열로, 색은 범례와 같다
    const pipeBase = bandX.manifold + d.manifoldW / 2;
    HALL_PIPES.forEach((pp, pi) => {
      const px = pipeBase + (pi - 2.5) * (d.manifoldW / 7);
      target.appendChild(svgEl('path', {
        d: `M${X(px)},${Y(d.edge)} L${X(px)},${Y(d.depth - d.edge)}`,
        stroke: pp.color, 'stroke-width': 1.4, fill: 'none',
      }));
    });
    rowYs.forEach((ry, r) => {
      const c1 = HALL_PIPES[4].color, c2 = HALL_PIPES[5].color;
      target.appendChild(svgEl('path', {
        d: `M${X(rackX)},${Y(ry + d.rackD * 0.3)} L${X(pipeBase)},${Y(ry + d.rackD * 0.3)}`,
        stroke: c1, 'stroke-width': 1.2, fill: 'none',
      }));
      target.appendChild(svgEl('path', {
        d: `M${X(rackX)},${Y(ry + d.rackD * 0.7)} L${X(pipeBase)},${Y(ry + d.rackD * 0.7)}`,
        stroke: c2, 'stroke-width': 1.2, fill: 'none',
      }));
    });

    // 치수
    hallDim(target, X(0), Y(d.depth) + 26, X(d.totalW), Y(d.depth) + 26, Math.round(d.totalW) + '', 'b');
    let bx = 0;
    d.bands.forEach(b => {
      hallDim(target, X(bx), Y(d.depth) + 12, X(bx + b.mm), Y(d.depth) + 12, Math.round(b.mm) + '');
      bx += b.mm;
    });
    hallDim(target, X(0) - 26, Y(0), X(0) - 26, Y(d.depth), Math.round(d.depth) + '');
  }

  function drawHallSection(target, d, sc, ox, oy) {
    const X = mm => ox + mm * sc, S = mm => mm * sc;
    const base = oy + d.ceil * sc;              // 바닥 슬래브 기준선
    const Y = mm => base - mm * sc;             // 높이는 위로
    const navy = '#3A2E75';
    const widthMM = d.totalW;

    // 슬래브 / 외벽
    target.appendChild(svgEl('rect', { x: X(0), y: Y(0), width: S(widthMM), height: 8, fill: '#8A8072' }));
    target.appendChild(svgEl('rect', {
      x: X(0), y: Y(d.ceil), width: S(widthMM), height: S(d.ceil),
      fill: 'none', stroke: '#5A5A5A', 'stroke-width': 2,
    }));

    // 이중바닥
    target.appendChild(svgEl('rect', {
      x: X(0), y: Y(d.raised), width: S(widthMM), height: S(d.raised),
      fill: hexToRgba('#8A8072', 0.12), stroke: '#8A8072', 'stroke-width': 0.8,
    }));
    const rf = svgEl('text', { x: X(d.elecW / 2), y: Y(d.raised / 2) + 3, 'text-anchor': 'middle', 'font-size': 7.5, 'font-weight': 600, fill: '#8A8072', 'font-family': 'sans-serif' });
    rf.textContent = t('hall_raised') + ' ' + Math.round(d.raised);
    target.appendChild(rf);

    // 전기실
    target.appendChild(svgEl('rect', {
      x: X(0), y: Y(d.ceil), width: S(d.elecW), height: S(d.ceil),
      fill: hexToRgba('#6F5FBF', 0.08), stroke: '#6F5FBF', 'stroke-width': 1.2,
    }));
    const el = svgEl('text', { x: X(d.elecW / 2), y: Y(d.ceil * 0.6), 'text-anchor': 'middle', 'font-size': 10, 'font-weight': 800, fill: '#6F5FBF', 'font-family': 'sans-serif' });
    el.textContent = t('hall_elec_room');
    target.appendChild(el);

    // 랙 (열 단면)
    const rackStart = d.elecW + d.aisleEnd;
    for (let i = 0; i < d.perRow; i++) {
      const x = rackStart + i * d.rackW;
      if (x + d.rackW > widthMM) break;
      target.appendChild(svgEl('rect', {
        x: X(x), y: Y(d.raised + d.rackH), width: S(d.rackW) - 0.6, height: S(d.rackH),
        fill: hexToRgba(navy, 0.14), stroke: navy, 'stroke-width': 0.7,
      }));
    }
    const rl = svgEl('text', {
      x: X(rackStart + d.rowLen / 2), y: Y(d.raised + d.rackH / 2), 'text-anchor': 'middle',
      'font-size': 9, 'font-weight': 800, fill: navy, 'font-family': 'sans-serif',
    });
    rl.textContent = t('hall_rack_row', { n: d.perRow, kw: fmtN(d.rackKW) });
    target.appendChild(rl);

    // 버스웨이 (2단) + 배관
    [0, 1].forEach(k => {
      const by = d.busway + k * 420;
      target.appendChild(svgEl('path', {
        d: `M${X(rackStart - 400)},${Y(by)} L${X(widthMM - 600)},${Y(by)}`,
        stroke: '#7A6BCB', 'stroke-width': 3, fill: 'none',
      }));
    });
    const bl = svgEl('text', { x: X(rackStart - 420), y: Y(d.busway + 500), 'text-anchor': 'start', 'font-size': 7.5, 'font-weight': 700, fill: '#7A6BCB', 'font-family': 'sans-serif' });
    bl.textContent = t('hall_busway') + ' ' + Math.round(d.busway);
    target.appendChild(bl);

    const pipeY = Math.max(d.busway + 900, d.ceil - 1200);
    HALL_PIPES.slice(0, 4).forEach((pp, pi) => {
      target.appendChild(svgEl('path', {
        d: `M${X(rackStart - 200)},${Y(pipeY + pi * 160)} L${X(widthMM - 300)},${Y(pipeY + pi * 160)}`,
        stroke: pp.color, 'stroke-width': 2, fill: 'none',
      }));
    });

    // 높이 치수
    [[d.raised, 'hall_raised'], [d.raised + d.rackH, 'hall_rack_top'], [d.busway, 'hall_busway'], [d.ceil, 'hall_ceil']]
      .forEach(([v], i) => {
        const dx = X(widthMM) + 18 + i * 22;
        hallDim(target, dx, Y(0), dx, Y(v), Math.round(v) + '');
      });
  }

  // ----- 데이터홀 규모 산정 -----
  // POD 유닛을 평면에 깔아 홀 외곽을 낸다. 유닛 안의 콜드/핫 통로는 그대로 두고,
  // 유닛끼리는 이격(점검·배관 통로)으로 띄우며, 전기실은 유닛별 전용 또는 홀 측면 공용.
  function hallIncludeCdu() {
    const el = document.getElementById('hallIncCdu');
    return el ? el.checked : false;
  }

  // POD 유닛을 깔아 데이터홀 외곽을 낸다.
  // 외곽 기준은 POD(랙 열)와 그 사이 콜드/핫 아일뿐이다 — 전기실은 홀 밖의 지원실이므로
  // 여기서 빼고, 매니폴드·CDU는 홀 안에 둘지 선택할 수 있게 한다.
  function hallUnitSize(rowLen, rows, rackD, cold, hot, perim, withCdu, manifoldW, cduW) {
    let gaps = 0;
    for (let r = 0; r < rows - 1; r++) gaps += (r % 2 === 0) ? hot : cold;
    const w = rowLen + (withCdu ? manifoldW + cduW + 1200 : 0);
    const d = rows * rackD + gaps;
    return { w, d, gaps, perim };
  }

  function hallCluster(d) {
    const units = Math.max(1, Math.round(hallNum('hallUnits', 3)));
    const mode = (document.getElementById('hallGrid') || {}).value || 'auto';
    const gap = hallNum('hallPodGap', 2400);
    const service = hallNum('hallService', 2000);
    const withCdu = hallIncludeCdu();

    const u = hallUnitSize(d.rowLen, d.rows, d.rackD, d.cold, d.hot, d.perim, withCdu, d.manifoldW, d.cduW);

    let cols, rows;
    if (mode === 'row') { cols = units; rows = 1; }
    else if (mode === 'col') { cols = 1; rows = units; }
    else {
      // 홀이 지나치게 길어지지 않도록 가로·세로를 비슷하게 잡는다
      cols = Math.min(units, Math.max(1, Math.round(Math.sqrt(units * (u.d / Math.max(1, u.w))))));
      rows = Math.ceil(units / cols);
    }

    const hallW = service * 2 + cols * u.w + (cols - 1) * gap;
    const hallD = service * 2 + rows * u.d + (rows - 1) * gap;
    const areaM2 = (hallW / 1000) * (hallD / 1000);
    const totalKW = d.podKW * units;
    return {
      units, cols, rows, gap, service, withCdu,
      unitW: u.w, unitD: u.d,
      hallW, hallD, areaM2, totalKW,
      perMW: totalKW > 0 ? areaM2 / (totalKW / 1000) : 0,
      racks: d.racks * units,
    };
  }

  function drawHallCluster(target, d, c, sc, ox, oy) {
    const X = mm => ox + mm * sc, Y = mm => oy + mm * sc, S = mm => mm * sc;
    const navy = '#3A2E75';

    target.appendChild(svgEl('rect', {
      x: X(0), y: Y(0), width: S(c.hallW), height: S(c.hallD),
      fill: '#FFFFFF', stroke: '#5A5A5A', 'stroke-width': 2,
    }));

    for (let i = 0; i < c.units; i++) {
      const cx = i % c.cols, cy = Math.floor(i / c.cols);
      const ux = c.service + cx * (c.unitW + c.gap);
      const uy = c.service + cy * (c.unitD + c.gap);
      target.appendChild(svgEl('rect', {
        x: X(ux), y: Y(uy), width: S(c.unitW), height: S(c.unitD),
        fill: hexToRgba(navy, 0.04), stroke: navy, 'stroke-width': 1.2, 'stroke-dasharray': '6,3',
      }));

      // 랙 열과 그 사이 콜드/핫 아일 — 외곽을 결정하는 요소 그대로
      let ry = uy;
      for (let r = 0; r < d.rows; r++) {
        target.appendChild(svgEl('rect', {
          x: X(ux), y: Y(ry), width: S(d.rowLen), height: S(d.rackD),
          fill: hexToRgba(navy, 0.3), stroke: navy, 'stroke-width': 0.6,
        }));
        if (r < d.rows - 1) {
          const isHot = (r % 2 === 0);
          const gapH = isHot ? d.hot : d.cold;
          target.appendChild(svgEl('rect', {
            x: X(ux), y: Y(ry + d.rackD), width: S(d.rowLen), height: S(gapH),
            fill: isHot ? hexToRgba('#D0021B', 0.12) : hexToRgba('#29A8E0', 0.14), stroke: 'none',
          }));
          if (S(gapH) > 9 && i === 0) {
            const lab = svgEl('text', {
              x: X(ux + d.rowLen / 2), y: Y(ry + d.rackD + gapH / 2) + 3, 'text-anchor': 'middle',
              'font-size': 7, 'font-weight': 700,
              fill: isHot ? '#D0021B' : '#1F7FB5', 'font-family': 'sans-serif',
            });
            lab.textContent = t(isHot ? 'hall_hot_aisle' : 'hall_cold_aisle') + ' ' + Math.round(gapH);
            target.appendChild(lab);
          }
          ry += d.rackD + gapH;
        }
      }
      if (c.withCdu) {
        target.appendChild(svgEl('rect', {
          x: X(ux + c.unitW - d.cduW - 600), y: Y(uy), width: S(d.cduW), height: S(c.unitD),
          fill: hexToRgba('#0F6E56', 0.14), stroke: '#0F6E56', 'stroke-width': 1,
        }));
      }
      const tag = svgEl('text', {
        x: X(ux + c.unitW / 2), y: Y(uy) - 5, 'text-anchor': 'middle',
        'font-size': 9, 'font-weight': 800, fill: navy, 'font-family': 'sans-serif',
      });
      tag.textContent = t('hall_unit_tag', { n: i + 1, kw: fmtN(Math.round(d.podKW)) });
      target.appendChild(tag);
    }

    hallDim(target, X(0), Y(c.hallD) + 22, X(c.hallW), Y(c.hallD) + 22, Math.round(c.hallW) + '');
    hallDim(target, X(0) - 24, Y(0), X(0) - 24, Y(c.hallD), Math.round(c.hallD) + '');
  }

  function drawHall() {
    const svg = document.getElementById('hallSvg');
    if (!svg) return;
    hallZoom.clear();
    const target = hallZoom.group;
    const d = hallPlanData();

    const margin = 70;
    const availW = 900;
    const cl = hallCluster(d);
    const baseW = hallView === 'cluster' ? cl.hallW : d.totalW;
    const baseH = hallView === 'plan' ? d.depth : (hallView === 'cluster' ? cl.hallD : d.ceil);
    // 화면 맞춤이면 폭에 맞춰 줄이고, 원래 크기면 랙 글씨가 읽히는 고정 축척으로 둔 뒤 스크롤한다
    const fit = Math.min(availW / baseW, (hallView === 'sect' ? 320 : 460) / baseH);
    const sc = hallScale === 'real' ? Math.max(fit, 0.055) : fit;
    const w = baseW * sc + margin * 2;
    const hgt = baseH * sc + margin * 2;
    svg.setAttribute('width', Math.max(760, w));
    svg.setAttribute('height', Math.max(360, hgt));
    svg.setAttribute('viewBox', `0 0 ${Math.max(760, w)} ${Math.max(360, hgt)}`);
    svg.classList.toggle('hall-real', hallScale === 'real');
    const ox = (Math.max(760, w) - baseW * sc) / 2;
    const oy = margin * 0.6;

    if (hallView === 'plan') drawHallPlan(target, d, sc, ox, oy);
    else if (hallView === 'cluster') drawHallCluster(target, d, cl, sc, ox, oy);
    else drawHallSection(target, d, sc, ox, oy);

    hallZoom.reset();
    renderHallLegend();
    updateHallSummary(d);
  }

  function renderHallLegend() {
    const box = document.getElementById('hallLegend');
    if (!box) return;
    box.innerHTML = '';
    // 랙 종류를 먼저 — 평면에서 색으로 구분되는 대상이다
    hallRacks.forEach(r => {
      if (!(parseInt(r.qty, 10) > 0)) return;
      const div = document.createElement('div');
      div.className = 'item';
      div.innerHTML = `<span class="swatch" style="background:${r.color}"></span>`
        + `${rackAbbr(r.name)} · ${fmtN(r.kw)}kW ×${r.qty}`;
      box.appendChild(div);
    });
    const br = document.createElement('div');
    br.style.width = '100%';
    br.style.height = '2px';
    box.appendChild(br);
    HALL_PIPES.forEach(pp => {
      const div = document.createElement('div');
      div.className = 'item';
      div.innerHTML = `<span class="swatch" style="background:${pp.color}"></span>${t('pipe_' + pp.key)}`;
      box.appendChild(div);
    });
  }

  // 1~4열을 같은 규칙으로 돌려 외곽 치수를 나란히 비교한다
  function hallRowOption(rows) {
    return hallRowOptionFor(hallRacks, rows);
  }
  function hallRowOptionFor(rackList, rows) {
    const racks = Math.max(1, (rackList || []).reduce((n, r) => n + (parseInt(r.qty, 10) || 0), 0));
    const perRow = Math.ceil(racks / rows);
    const rackW = hallNum('hallRackW', 600), rackD = hallNum('hallRackD', 1200);
    const cold = hallNum('hallCold', 1200), hot = hallNum('hallHot', 1000);
    const perim = hallNum('hallPerim', 1200);
    const elecW = hallNum('hallElecW', 4600);
    const rowLen = perRow * rackW;
    let gaps = 0;
    for (let r = 0; r < rows - 1; r++) gaps += (r % 2 === 0) ? hot : cold;
    const w = elecW + 2000 + rowLen + 800 + 2700;
    const depth = perim * 2 + rows * rackD + gaps;
    return { rows, perRow, rowLen, w, depth, area: (w / 1000) * (depth / 1000), busway: rows * rowLen };
  }

  // 비교표용 — 열 수 옵션 하나에 대해 순수 데이터홀 외곽만 빠르게 낸다
  function hallClusterFor(o) {
    const units = Math.max(1, Math.round(hallNum('hallUnits', 3)));
    const mode = (document.getElementById('hallGrid') || {}).value || 'auto';
    const gap = hallNum('hallPodGap', 2400), service = hallNum('hallService', 2000);
    const rackD = hallNum('hallRackD', 1200);
    const cold = hallNum('hallCold', 1200), hot = hallNum('hallHot', 1000);
    const perim = hallNum('hallPerim', 1200);
    const withCdu = hallIncludeCdu();
    const cduW = hallNum('hallCduW', 1500) || 1500;
    const u = hallUnitSize(o.rowLen, o.rows, rackD, cold, hot, perim, withCdu, 800, cduW);

    let cols, rows;
    if (mode === 'row') { cols = units; rows = 1; }
    else if (mode === 'col') { cols = 1; rows = units; }
    else {
      cols = Math.min(units, Math.max(1, Math.round(Math.sqrt(units * (u.d / Math.max(1, u.w))))));
      rows = Math.ceil(units / cols);
    }
    const hallW = service * 2 + cols * u.w + (cols - 1) * gap;
    const hallD = service * 2 + rows * u.d + (rows - 1) * gap;
    const areaM2 = (hallW / 1000) * (hallD / 1000);
    const mix = hallRackTotals();
    const totalKW = mix.kw * units;
    return { cols, rows, unitW: u.w, unitD: u.d, hallW, hallD, areaM2,
      perMW: totalKW ? areaM2 / (totalKW / 1000) : 0 };
  }

  function renderHallCompare() {
    const box = document.getElementById('hallCompare');
    if (!box) return;
    box.innerHTML = '';
    const label = document.createElement('span');
    label.className = 'cmp-label';
    label.textContent = t('hall_cmp_label');
    box.appendChild(label);
    [1, 2, 3, 4].forEach(r => {
      const o = hallRowOption(r);
      const div = document.createElement('div');
      div.className = 'cmp-item' + (r === hallRowsOpt ? ' on' : '');
      const hall = hallClusterFor(o);
      div.innerHTML = `<b>${t('hall_cmp_rows', { n: r })}</b>`
        + `<span>${t('hall_cmp_unit', { w: Math.round(hall.unitW), d: Math.round(hall.unitD) })}</span>`
        + `<span>${t('hall_cmp_hall', { w: Math.round(hall.hallW), d: Math.round(hall.hallD), area: fmtN(Math.round(hall.areaM2)) })}</span>`
        + `<span>${t('hall_cmp_permw', { v: fmtN(Math.round(hall.perMW)) })}</span>`;
      div.addEventListener('click', () => {
        const btn = document.querySelector('#hallRowsToggle .mode-btn[data-rows="' + r + '"]');
        if (btn) btn.click();
      });
      box.appendChild(div);
    });
  }

  // 수치에서 바로 읽히는 전기·기계·건축 메모
  function renderHallReading(d) {
    const box = document.getElementById('hallReading');
    if (!box) return;
    const pue = 1.2;
    const rows = [
      ['elec', t('hall_read_elec', {
        mw: fmtN(d.podKW / 1000, 2), fac: fmtN(d.podKW * pue / 1000, 2),
        rowKW: fmtN(Math.round(d.rowLen / d.rackW * d.rackKW)), rows: d.rows,
      })],
      ['mech', t('hall_read_mech', {
        kw: fmtN(Math.round(d.podKW * 0.9)), cdu: d.cduQty - 1, total: d.cduQty,
        each: fmtN(d.cduKW),
      })],
      ['arch', t('hall_read_arch', {
        w: fmtN(d.totalW / 1000, 1), depth: fmtN(d.depth / 1000, 1), area: fmtN(Math.round(d.areaM2)),
        rows: d.rows, perRow: d.perRow,
      })],
    ];
    box.innerHTML = '<div class="read-head">' + t('hall_read_title') + '</div>';
    rows.forEach(([k, text]) => {
      const div = document.createElement('div');
      div.className = 'read-row';
      div.innerHTML = `<b>${t('hall_read_' + k + '_h')}</b><span>${text}</span>`;
      box.appendChild(div);
    });
  }

  function updateHallSummary(d) {
    const cl = hallCluster(d);
    const unitsNote = document.getElementById('hallUnitsNote');
    if (unitsNote) {
      unitsNote.textContent = t('hall_units_note', {
        cols: cl.cols, rows: cl.rows, w: Math.round(cl.hallW), d: Math.round(cl.hallD),
        area: fmtN(Math.round(cl.areaM2)), perMW: fmtN(Math.round(cl.perMW)),
      });
    }
    const el = document.getElementById('hallSummary');
    if (el && hallView === 'cluster') {
      el.textContent = t('hall_summary_cluster', {
        units: cl.units, cols: cl.cols, rows: cl.rows, kw: fmtN(Math.round(cl.totalKW)),
        racks: cl.racks, w: Math.round(cl.hallW), d: Math.round(cl.hallD),
        area: fmtN(Math.round(cl.areaM2)), perMW: fmtN(Math.round(cl.perMW)),
      });
    } else if (el) {
      el.textContent = t('hall_summary', {
        pod: d.podIdx + 1, kw: fmtN(Math.round(d.podKW)), racks: d.racks, rackKW: fmtN(d.rackKW),
        rows: d.rows, perRow: d.perRow, cdu: d.cduQty,
        w: Math.round(d.totalW), depth: Math.round(d.depth), area: fmtN(Math.round(d.areaM2)),
      });
    }
    const note = document.getElementById('hallRackNote');
    if (note) note.textContent = t('hall_rack_note', { racks: d.racks, rows: d.rows, perRow: d.perRow });
    renderHallCompare();
    renderHallReading(d);
    const cdu = document.getElementById('hallCduNote');
    if (cdu) cdu.textContent = t('hall_cdu_note', { n: d.cduQty - 1, total: d.cduQty });
    const cool = document.getElementById('hallCoolNote');
    if (cool) cool.textContent = t('hall_cool_' + d.cooling);
  }

  function refreshHallPodOptions() {
    const sel = document.getElementById('hallPodSel');
    if (!sel) return;
    const c = planLastContext;
    const keep = sel.value;
    sel.innerHTML = '';
    const n = c ? c.pods : 1;
    for (let i = 0; i < n; i++) {
      const o = document.createElement('option');
      o.value = i;
      o.textContent = t('hall_pod_opt', { n: i + 1, kw: fmtN(Math.round(c ? c.podKW : 0)) });
      sel.appendChild(o);
    }
    if (keep && parseInt(keep, 10) < n) sel.value = keep;
    const note = document.getElementById('hallPodNote');
    if (note && c) note.textContent = t('hall_pod_note', { n: c.pods, kw: fmtN(Math.round(c.podKW)) });
    // 홀에 들어갈 유닛 수의 출발점은 ④가 정한 POD 개수다 (직접 고치면 그 값을 쓴다)
    const unitsEl = document.getElementById('hallUnits');
    if (unitsEl && c && !unitsEl.dataset.touched) unitsEl.value = c.pods;
  }

  ['hallRackW', 'hallRackD', 'hallCold', 'hallHot', 'hallPerim',
   'hallCduKW', 'hallElecW', 'hallRaised', 'hallRackH', 'hallBusway', 'hallCeil']
    .forEach(id => {
      const el = document.getElementById(id);
      if (el) el.addEventListener('input', drawHall);
    });
  ['hallPodSel', 'hallCooling'].forEach(id => {
    const el = document.getElementById(id);
    if (el) el.addEventListener('change', () => {
      // 냉각 방식을 바꾸면 통상적인 랙 밀도를 기본값으로 제안한다
      drawHall();
    });
  });
  document.getElementById('hallPlanBtn').addEventListener('click', () => setHallView('plan'));
  document.getElementById('hallSectBtn').addEventListener('click', () => setHallView('sect'));
  function setHallView(v) {
    hallView = v;
    [['plan', 'hallPlanBtn'], ['sect', 'hallSectBtn'], ['cluster', 'hallClusterBtn']].forEach(([k, id]) => {
      const b = document.getElementById(id);
      if (!b) return;
      b.classList.toggle('active', k === v);
      b.classList.toggle('normal', k === v);
    });
    drawHall();
  }
  document.getElementById('hallClusterBtn').addEventListener('click', () => setHallView('cluster'));
  const patSel = document.getElementById('hallPattern');
  if (patSel) patSel.addEventListener('change', drawHall);
  Array.prototype.forEach.call(document.querySelectorAll('#hallScaleToggle .mode-btn'), btn => {
    btn.addEventListener('click', () => {
      hallScale = btn.dataset.scale;
      Array.prototype.forEach.call(document.querySelectorAll('#hallScaleToggle .mode-btn'), b => {
        const on = b === btn;
        b.classList.toggle('active', on);
        b.classList.toggle('normal', on);
      });
      drawHall();
    });
  });
  ['hallUnits', 'hallPodGap', 'hallService'].forEach(id => {
    const el = document.getElementById(id);
    if (el) el.addEventListener('input', () => { el.dataset.touched = '1'; drawHall(); });
  });
  ['hallGrid', 'hallIncCdu'].forEach(id => {
    const el = document.getElementById(id);
    if (el) el.addEventListener('change', drawHall);
  });
  document.getElementById('hallZoomIn').addEventListener('click', () => hallZoom.zoomIn());
  document.getElementById('hallZoomOut').addEventListener('click', () => hallZoom.zoomOut());
  document.getElementById('hallZoomReset').addEventListener('click', () => hallZoom.reset());

  function refreshHallTexts() {
    refreshHallPodOptions();
    if (typeof refreshGenProfiles === 'function') { try { refreshGenProfiles(); renderGenResults(); } catch (e) {} }
    renderHallRackTable();
    drawHall();
  }
  refreshHallTexts();

  // ===== ⑦ SLD (단선결선도) 에디터 =====
  // 자동 작성: ①~⑤ 계산 결과를 그래프(노드+엣지)로 변환해 그린다 (읽기 전용, 재계산 시 갱신).
  // 수동 작성: 같은 그래프 모델을 직접 편집한다 — 팔레트 클릭으로 블럭 추가, 드래그로 이동,
  //            블럭 2개를 차례로 클릭하면 연결, 선 클릭으로 기본↔예비 전환, 더블클릭으로 삭제.
  //            편집 내용은 localStorage에 저장되어 새로고침 후에도 유지된다.
  const SLD_CATS = {
    source: '#3A2E75', switch: '#6759B0', breaker: '#7A6BCB', tr: '#0F6E56',
    bus: '#2E2419', gen: '#993C1D', transfer: '#854F0B', ups: '#185FA5', load: '#993556',
    pod: '#3B6D11',
  };
  const SLD_EDGE_COLORS = { main: '#3A2E75', standby: '#854F0B', lost: '#DB8478' };
  const SLD_BLOCK_TYPES = [
    { key: 'kepco', abbr: 'KEPCO', cat: 'source' },
    { key: 'ds', abbr: 'DS', cat: 'switch' },
    { key: 'gcb', abbr: 'GCB', cat: 'breaker' },
    { key: 'vcb', abbr: 'VCB', cat: 'breaker' },
    { key: 'acb', abbr: 'ACB', cat: 'breaker' },
    { key: 'mccb', abbr: 'MCCB', cat: 'breaker' },
    { key: 'mtr', abbr: 'MTR', cat: 'tr' },
    { key: 'tr', abbr: 'TR', cat: 'tr' },
    { key: 'bus', abbr: 'BUS', cat: 'bus' },
    { key: 'gen', abbr: 'GEN', cat: 'gen' },
    { key: 'gcp', abbr: 'GCP', cat: 'gen' },
    { key: 'syn', abbr: 'SYN', cat: 'gen' },
    { key: 'ctts', abbr: 'CTTS', cat: 'transfer' },
    { key: 'sts', abbr: 'STS', cat: 'transfer' },
    { key: 'ups', abbr: 'UPS', cat: 'ups' },
    { key: 'bat', abbr: 'BAT', cat: 'ups' },
    { key: 'pdu', abbr: 'PDU', cat: 'load' },
    { key: 'pod', abbr: 'POD', cat: 'pod' },
    { key: 'rack', abbr: 'RACK', cat: 'load' },
    { key: 'load', abbr: 'LOAD', cat: 'load' },
  ];
  const SLD_TYPE_MAP = {};
  SLD_BLOCK_TYPES.forEach(b => { SLD_TYPE_MAP[b.key] = b; });
  // 분기점: 팔레트에는 없고, 선에 분기를 만들 때 자동으로 생성된다 (배터리·발전기처럼
  // 블럭끼리가 아니라 기존 선에서 따내야 하는 장비를 연결하기 위한 노드).
  SLD_TYPE_MAP.junction = { key: 'junction', abbr: '', cat: 'bus' };

  let sldMode = localStorage.getItem('prc_sld_mode') === 'manual' ? 'manual' : 'auto';
  let sldAutoGraph = { nodes: [], edges: [], notes: [] };
  let sldSelectedId = null;
  let sldSeq = 0;
  let sldDrag = null;

  function loadSldManualGraph() {
    try {
      const g = JSON.parse(localStorage.getItem('prc_sld_graph') || 'null');
      if (g && Array.isArray(g.nodes) && Array.isArray(g.edges)) {
        g.nodes.forEach(n => {
          const num = parseInt(String(n.id).replace(/\D/g, ''), 10);
          if (isFinite(num) && num > sldSeq) sldSeq = num;
        });
        return { nodes: g.nodes, edges: g.edges, notes: [] };
      }
    } catch (e) {}
    return { nodes: [], edges: [], notes: [] };
  }
  let sldManualGraph = loadSldManualGraph();

  function saveSldManualGraph() {
    try {
      localStorage.setItem('prc_sld_graph', JSON.stringify({ nodes: sldManualGraph.nodes, edges: sldManualGraph.edges }));
    } catch (e) {}
  }
  function sldGraph() { return sldMode === 'manual' ? sldManualGraph : sldAutoGraph; }

  function makeSldNode(typeKey, x, y, opts) {
    opts = opts || {};
    const type = SLD_TYPE_MAP[typeKey] || SLD_TYPE_MAP.load;
    return {
      id: 'n' + (++sldSeq), type: typeKey, x, y,
      w: opts.w || 96, h: opts.h || 44,
      label: opts.label || type.abbr,
      sub: opts.sub === undefined ? null : opts.sub,
      state: opts.state || 'active',
    };
  }
  function sldNodeColor(node) {
    if (node.type === 'junction') return SLD_EDGE_COLORS.main;
    if (node.state === 'offline') return SLD_EDGE_COLORS.lost;
    if (node.state === 'idle') return '#9A90BB';
    return SLD_CATS[(SLD_TYPE_MAP[node.type] || {}).cat] || SLD_CATS.load;
  }
  function sldNodeSub(node) {
    if (node.sub !== null && node.sub !== undefined) return node.sub;
    return t('sldb_' + node.type);
  }

  // ①~④ 계산 결과 → 그래프. 한전 수전 → 주변압기 → 주모선 → (모듈별) 변압기 → UPS → PDU → POD.
  // modules: ④에서 만든 '전기실' 배열 (각 방의 소속 모듈·상태·변압기 대수를 들고 있다)
  function buildAutoSLD(modules, N, C, perModuleUnits, load, rating, effectiveCap) {
    const nodes = [], edges = [], notes = [];
    const M = modules.length;
    if (!M) { sldAutoGraph = { nodes, edges, notes }; if (sldMode === 'auto') drawSLD(); return; }

    // POD(랙군) 분할 — 모듈 1개가 감당해야 하는 설계부하를 POD 용량으로 나눠 개수를 정하고,
    // UPS에서 각 POD로 분배선을 뽑는다. POD 용량을 바꾸면 개수와 분배선이 함께 갱신된다.
    // 데이터홀 전체 POD 수(①번 공통 설정)를 설계기준으로 모듈에 나눠 담는다 —
    // 완전이중화는 트레인 1개가 전체 POD를 100% 커버하고, 그 외에는 N개 모듈이 분담한다.
    const hallPlan = getPodPlan(load);
    // 설계기준으로 전체 POD를 떠받치는 전기실 수 — 완전이중화는 트레인 1개의 방들이,
    // 그 외에는 Duty 모듈(N개)에 속한 방들이 전체 POD를 나눠 받는다.
    const designRooms = currentTopo === 'full'
      ? ((modules[0] && modules[0].roomsInModule) || 1)
      : (modules.filter(r => (r.moduleIndex === undefined ? 0 : r.moduleIndex) < N).length || 1);
    const podCount = Math.max(1, Math.ceil(hallPlan.count / designRooms));
    const podW = 56, podH = 38, podGap = 6, podRowGap = 10;
    // POD 용량을 작게 잡으면 개수가 많아지므로 한 줄에 최대 6개씩 줄바꿈해 가로폭을 유지한다.
    const podPerRow = Math.min(podCount, 6);
    const podRows = Math.ceil(podCount / podPerRow);
    const podsRowW = podPerRow * podW + (podPerRow - 1) * podGap;

    const colW = Math.max(116, podsRowW), gap = 20;
    const totalW = M * colW + (M - 1) * gap;
    const svgW = Math.max(760, totalW + 100);
    const startX = (svgW - totalW) / 2;
    const add = n => { nodes.push(n); return n; };
    const link = (a, b, kind) => edges.push({ id: 'e' + a.id + '-' + b.id + '-' + (++sldSeq), from: a.id, to: b.id, kind: kind || 'main' });

    const kepco = add(makeSldNode('kepco', startX, 16, { w: 120, sub: t('sld_utility_sub') }));
    const mtr = add(makeSldNode('mtr', startX, 92, { w: 120 }));
    const gen = add(makeSldNode('gen', startX + totalW - 120, 16, { w: 120, sub: t('sld_generator_sub') }));
    const bus = add(makeSldNode('bus', startX, 170, { w: totalW, h: 30, label: t('sld_mainbus') + ' (BUS)', sub: '' }));
    link(kepco, mtr, 'main');
    link(mtr, bus, 'main');
    link(gen, bus, 'standby');

    modules.forEach((mod, i) => {
      const x = startX + i * (colW + gap);
      const isActive = mod.state === 'active';
      const kind = mod.state === 'offline' ? 'lost' : (isActive ? 'main' : 'standby');
      const mi = mod.moduleIndex === undefined ? i : mod.moduleIndex;
      let roleLabel = t('module_label_room', { n: i + 1 });
      if (currentTopo === 'full') roleLabel += ' (' + t('module_label_train', { n: mi + 1 }) + ')';
      else if (currentTopo === 'standby') roleLabel += ' (' + (mod.role === 'catcher' ? t('module_label_catcher', { n: mi - N + 1 }) : t('module_label_duty', { n: mi + 1 })) + ')';
      const stateLabel = mod.state === 'offline' ? t('state_offline') : mod.state === 'idle' ? t('state_idle')
        : (currentTopo === 'standby' && diagramMode === 'emergency' && mod.role === 'catcher') ? t('state_engaged') : t('state_active');
      notes.push({ x: x + colW / 2, y: 224, text: roleLabel, size: 10.5, weight: 800, color: sldNodeColor({ type: 'tr', state: mod.state }) });
      notes.push({ x: x + colW / 2, y: 236, text: stateLabel, size: 8, weight: 600, color: mod.state === 'active' ? '#8A8072' : sldNodeColor({ type: 'tr', state: mod.state }) });

      const roomTx = mod.txCount === undefined ? perModuleUnits : mod.txCount;
      const tr = add(makeSldNode('tr', x, 244, { w: colW, label: `TR ${fmtN(rating)}kVA`, sub: '×' + t('unit_dae', { n: roomTx }), state: mod.state }));
      const ups = add(makeSldNode('ups', x, 318, { w: colW, sub: isActive ? `${fmtN(mod.loadKW)}kW` : '-', state: mod.state }));
      const pdu = add(makeSldNode('pdu', x, 392, { w: colW, label: 'PDU', state: mod.state }));
      link(bus, tr, kind);
      link(tr, ups, kind);
      link(ups, pdu, kind);

      // PDU → POD 분배선. POD 개수는 POD 용량에 따라 자동으로 늘거나 줄어든다.
      const podsStartX = x + (colW - podsRowW) / 2;
      const podLoadKW = isActive ? mod.loadKW / podCount : 0;
      for (let p = 0; p < podCount; p++) {
        const row = Math.floor(p / podPerRow), col = p % podPerRow;
        const inRow = Math.min(podPerRow, podCount - row * podPerRow);
        const rowW = inRow * podW + (inRow - 1) * podGap;
        const rowX = x + (colW - rowW) / 2;
        const pod = add(makeSldNode('pod', rowX + col * (podW + podGap), 470 + row * (podH + podRowGap), {
          w: podW, h: podH, label: 'POD ' + (p + 1),
          sub: isActive ? fmtN(Math.round(podLoadKW)) + 'kW' : '-',
          state: mod.state,
        }));
        link(pdu, pod, kind);
      }
    });

    sldAutoGraph = { nodes, edges, notes };
    if (sldMode === 'auto') drawSLD();
  }

  function sldEdgePath(a, b) {
    const acx = a.x + a.w / 2, bcx = b.x + b.w / 2;
    const aTop = a.y, aBot = a.y + a.h, bTop = b.y, bBot = b.y + b.h;
    if (bTop >= aBot - 4) {
      const midY = (aBot + bTop) / 2;
      return `M${acx},${aBot} L${acx},${midY} L${bcx},${midY} L${bcx},${bTop}`;
    }
    if (aTop >= bBot - 4) {
      const midY = (aTop + bBot) / 2;
      return `M${acx},${aTop} L${acx},${midY} L${bcx},${midY} L${bcx},${bBot}`;
    }
    const acy = a.y + a.h / 2, bcy = b.y + b.h / 2;
    const ax = bcx > acx ? a.x + a.w : a.x;
    const bx = bcx > acx ? b.x : b.x + b.w;
    const midX = (ax + bx) / 2;
    return `M${ax},${acy} L${midX},${acy} L${midX},${bcy} L${bx},${bcy}`;
  }

  function sldClientToGraph(evt) {
    const svg = document.getElementById('sldSvg');
    const m = sldZoom.group.getScreenCTM();
    if (!svg || !m) return { x: 0, y: 0 };
    const pt = svg.createSVGPoint();
    pt.x = evt.clientX; pt.y = evt.clientY;
    return pt.matrixTransform(m.inverse());
  }

  function drawSLD() {
    const svg = document.getElementById('sldSvg');
    if (!svg) return;
    const g = sldGraph();
    const manual = sldMode === 'manual';
    sldZoom.clear();
    const target = sldZoom.group;

    let maxX = 700, maxY = 260;
    g.nodes.forEach(n => { maxX = Math.max(maxX, n.x + n.w); maxY = Math.max(maxY, n.y + n.h); });
    (g.notes || []).forEach(nt => { maxX = Math.max(maxX, nt.x + 60); maxY = Math.max(maxY, nt.y); });
    const svgW = Math.max(760, maxX + 40);
    const svgH = Math.max(manual ? 440 : 300, maxY + 40);
    svg.setAttribute('width', svgW);
    svg.setAttribute('height', svgH);
    svg.setAttribute('viewBox', `0 0 ${svgW} ${svgH}`);
    svg.classList.toggle('sld-editing', manual);

    const byId = {};
    g.nodes.forEach(n => { byId[n.id] = n; });

    // ----- 연결선 -----
    g.edges.forEach(edge => {
      const a = byId[edge.from], b = byId[edge.to];
      if (!a || !b) return;
      const d = sldEdgePath(a, b);
      const color = SLD_EDGE_COLORS[edge.kind] || SLD_EDGE_COLORS.main;
      target.appendChild(svgEl('path', {
        d, fill: 'none', stroke: color,
        'stroke-width': edge.kind === 'main' ? 2 : 1.6,
        'stroke-dasharray': edge.kind === 'main' ? 'none' : '5,4',
      }));
      if (edge.kind !== 'main') {
        const mid = sldEdgeMidpoint(a, b);
        const lbl = svgEl('text', {
          x: mid.x, y: mid.y - 3, 'text-anchor': 'middle', 'font-size': 8, 'font-weight': 700,
          fill: color, 'font-family': 'sans-serif', stroke: '#FFFFFF', 'stroke-width': 2.4, 'paint-order': 'stroke',
        });
        lbl.textContent = t('sld_edge_standby');
        target.appendChild(lbl);
      }
      if (manual) {
        const hit = svgEl('path', { d, fill: 'none', stroke: 'transparent', 'stroke-width': 14, cursor: 'pointer' });
        hit.addEventListener('click', e => {
          e.stopPropagation();
          // 블럭이 선택된 상태에서 선을 클릭하면 그 선에 분기점을 만들어 연결한다
          // (배터리·발전기처럼 선에서 따내는 장비). 선택이 없으면 기본↔예비 전환.
          const selected = sldManualGraph.nodes.find(n => n.id === sldSelectedId);
          if (selected) {
            tapEdgeWithNode(edge, selected, sldClientToGraph(e));
          } else {
            edge.kind = edge.kind === 'main' ? 'standby' : 'main';
            saveSldManualGraph();
            drawSLD();
          }
        });
        hit.addEventListener('dblclick', e => {
          e.stopPropagation();
          sldManualGraph.edges = sldManualGraph.edges.filter(x => x !== edge);
          saveSldManualGraph();
          drawSLD();
          updateSldStatus();
        });
        target.appendChild(hit);
      }
    });

    // ----- 주석(자동 작성 모드의 모듈 명칭/상태) -----
    (g.notes || []).forEach(nt => {
      const el = svgEl('text', {
        x: nt.x, y: nt.y, 'text-anchor': 'middle', 'font-size': nt.size || 10,
        'font-weight': nt.weight || 700, fill: nt.color || '#8A8072', 'font-family': 'sans-serif',
      });
      el.textContent = nt.text;
      target.appendChild(el);
    });

    // ----- 블럭 -----
    g.nodes.forEach(node => {
      const color = sldNodeColor(node);
      const selected = manual && node.id === sldSelectedId;
      const grp = svgEl('g', manual ? { cursor: 'move' } : {});
      const dashed = node.state !== 'active';
      if (node.type === 'junction') {
        // 분기점은 선 위의 점으로만 표시 (라벨 없음)
        const cxj = node.x + node.w / 2, cyj = node.y + node.h / 2;
        grp.appendChild(svgEl('circle', { cx: cxj, cy: cyj, r: selected ? 7 : 5, fill: color }));
        if (selected) grp.appendChild(svgEl('circle', { cx: cxj, cy: cyj, r: 10, fill: 'none', stroke: color, 'stroke-width': 1.5 }));
        if (manual) grp.appendChild(svgEl('circle', { cx: cxj, cy: cyj, r: 11, fill: 'transparent' }));
      } else {
        grp.appendChild(svgEl('rect', {
          x: node.x, y: node.y, width: node.w, height: node.h, rx: 8,
          fill: node.state === 'offline' ? '#FBEDE7' : hexToRgba(color, 0.12),
          stroke: color, 'stroke-width': selected ? 3 : (dashed ? 1.4 : 2),
          'stroke-dasharray': dashed ? '5,4' : 'none',
        }));
        const sub = sldNodeSub(node);
        const cx = node.x + node.w / 2;
        const labelY = sub ? node.y + node.h / 2 - 3 : node.y + node.h / 2 + 4;
        const nameEl = svgEl('text', {
          x: cx, y: labelY, 'text-anchor': 'middle', 'font-size': 11, 'font-weight': 800,
          fill: color, 'font-family': 'sans-serif',
        });
        nameEl.textContent = node.label;
        grp.appendChild(nameEl);
        if (sub) {
          const subEl = svgEl('text', {
            x: cx, y: node.y + node.h / 2 + 11, 'text-anchor': 'middle', 'font-size': 8,
            'font-weight': 600, fill: node.state === 'active' ? '#8A8072' : color, 'font-family': 'sans-serif',
          });
          subEl.textContent = sub;
          grp.appendChild(subEl);
        }
      }
      if (manual) {
        grp.addEventListener('mousedown', e => {
          e.stopPropagation();
          const p = sldClientToGraph(e);
          sldDrag = { node, dx: p.x - node.x, dy: p.y - node.y, moved: false };
        });
        grp.addEventListener('dblclick', e => {
          e.stopPropagation();
          removeSldNode(node);
        });
      }
      target.appendChild(grp);
    });

    renderSldLegend(g, manual);
    sldZoom.reset();
  }

  function sldEdgeMidpoint(a, b) {
    const acx = a.x + a.w / 2, bcx = b.x + b.w / 2;
    const aBot = a.y + a.h, bTop = b.y;
    if (bTop >= aBot - 4) return { x: (acx + bcx) / 2, y: (aBot + bTop) / 2 };
    return { x: (acx + bcx) / 2, y: (a.y + a.h / 2 + b.y + b.h / 2) / 2 };
  }

  function renderSldLegend(g, manual) {
    const legend = document.getElementById('sldLegend');
    if (!legend) return;
    legend.innerHTML = '';
    if (manual) {
      [['main', t('sld_edge_main')], ['standby', t('sld_edge_standby')]].forEach(([kind, label]) => {
        const div = document.createElement('div');
        div.className = 'item';
        div.innerHTML = `<span class="swatch" style="background:${SLD_EDGE_COLORS[kind]}"></span>${label}`;
        legend.appendChild(div);
      });
      const note = document.createElement('div');
      note.className = 'item';
      note.style.width = '100%';
      note.style.marginTop = '4px';
      note.textContent = t('sld_legend_manual');
      legend.appendChild(note);
      return;
    }
    const seen = {};
    g.nodes.forEach(n => {
      const cat = (SLD_TYPE_MAP[n.type] || {}).cat;
      if (!cat || seen[cat]) return;
      seen[cat] = true;
      const div = document.createElement('div');
      div.className = 'item';
      div.innerHTML = `<span class="swatch" style="background:${SLD_CATS[cat]}"></span>${t('sldb_' + n.type)}`;
      legend.appendChild(div);
    });
    const note = document.createElement('div');
    note.className = 'item';
    note.style.width = '100%';
    note.style.marginTop = '4px';
    note.textContent = t('sld_legend_note');
    legend.appendChild(note);
  }

  function updateSldStatus() {
    const el = document.getElementById('sldStatus');
    const nameEl = document.getElementById('sldNodeName');
    const delEl = document.getElementById('sldDelNode');
    const sel = sldManualGraph.nodes.find(n => n.id === sldSelectedId);
    // 선택한 블럭이 있을 때만 이름 칸과 삭제 버튼이 살아난다
    if (nameEl) {
      nameEl.disabled = !(sldMode === 'manual' && sel);
      if (document.activeElement !== nameEl) nameEl.value = sel ? sel.label : '';
    }
    if (delEl) delEl.disabled = !(sldMode === 'manual' && sel);
    if (!el) return;
    if (sldMode !== 'manual') { el.textContent = ''; return; }
    el.textContent = sel
      ? t('sld_status_selected', { name: sel.label })
      : t('sld_status_idle', { n: sldManualGraph.nodes.length, e: sldManualGraph.edges.length });
  }

  document.getElementById('sldNodeName').addEventListener('input', () => {
    const sel = sldManualGraph.nodes.find(n => n.id === sldSelectedId);
    if (!sel) return;
    sel.label = document.getElementById('sldNodeName').value;
    saveSldManualGraph();
    drawSLD();
  });
  document.getElementById('sldDelNode').addEventListener('click', () => {
    const sel = sldManualGraph.nodes.find(n => n.id === sldSelectedId);
    if (sel) removeSldNode(sel);
  });

  // 기존 선에 분기점을 끼워 넣고 그 분기점에서 블럭으로 선을 뽑는다.
  // 원래 선은 (시작→분기점) + (분기점→끝)으로 쪼개져 kind(기본/예비)를 그대로 유지한다.
  function tapEdgeWithNode(edge, node, point) {
    const g = sldManualGraph;
    if (edge.from === node.id || edge.to === node.id) { sldSelectedId = null; drawSLD(); updateSldStatus(); return; }
    const j = makeSldNode('junction', point.x - 6, point.y - 6, { w: 12, h: 12, label: '', sub: '' });
    g.nodes.push(j);
    g.edges = g.edges.filter(e => e !== edge);
    g.edges.push({ id: 'e' + edge.from + '-' + j.id + '-' + (++sldSeq), from: edge.from, to: j.id, kind: edge.kind });
    g.edges.push({ id: 'e' + j.id + '-' + edge.to + '-' + (++sldSeq), from: j.id, to: edge.to, kind: edge.kind });
    g.edges.push({ id: 'e' + j.id + '-' + node.id + '-' + (++sldSeq), from: j.id, to: node.id, kind: 'main' });
    sldSelectedId = null;
    saveSldManualGraph();
    drawSLD();
    updateSldStatus();
  }

  // 분기점을 지울 때는 통과 경로를 다시 하나로 이어줘야 한다 — 그러지 않으면 분기만
  // 지웠는데 본선까지 두 동으로 끊어져 사라진 것처럼 보인다.
  function removeSldNode(node) {
    const g = sldManualGraph;
    const attached = g.edges.filter(e => e.from === node.id || e.to === node.id);
    if (node.type === 'junction') {
      const other = e => (e.from === node.id ? e.to : e.from);
      const byKind = {};
      attached.forEach(e => { (byKind[e.kind] = byKind[e.kind] || []).push(e); });
      Object.keys(byKind).forEach(kind => {
        const list = byKind[kind];
        if (list.length < 2) return;
        const a = other(list[0]), b = other(list[1]);
        const dup = g.edges.some(e => (e.from === a && e.to === b) || (e.from === b && e.to === a));
        if (a !== b && !dup) g.edges.push({ id: 'e' + a + '-' + b + '-' + (++sldSeq), from: a, to: b, kind });
      });
    }
    g.nodes = g.nodes.filter(n => n !== node);
    g.edges = g.edges.filter(e => e.from !== node.id && e.to !== node.id);
    if (sldSelectedId === node.id) sldSelectedId = null;
    saveSldManualGraph();
    drawSLD();
    updateSldStatus();
  }

  function handleSldNodeClick(node) {
    if (sldMode !== 'manual') return;
    if (!sldSelectedId) {
      sldSelectedId = node.id;
    } else if (sldSelectedId === node.id) {
      sldSelectedId = null;
    } else {
      const from = sldSelectedId, to = node.id;
      const dup = sldManualGraph.edges.some(e => (e.from === from && e.to === to) || (e.from === to && e.to === from));
      if (!dup) sldManualGraph.edges.push({ id: 'e' + from + '-' + to + '-' + (++sldSeq), from, to, kind: 'main' });
      sldSelectedId = null;
      saveSldManualGraph();
    }
    drawSLD();
    updateSldStatus();
  }

  window.addEventListener('mousemove', e => {
    if (!sldDrag) return;
    const p = sldClientToGraph(e);
    const nx = p.x - sldDrag.dx, ny = p.y - sldDrag.dy;
    if (Math.abs(nx - sldDrag.node.x) > 2 || Math.abs(ny - sldDrag.node.y) > 2) sldDrag.moved = true;
    sldDrag.node.x = Math.max(0, nx);
    sldDrag.node.y = Math.max(0, ny);
    drawSLD();
  });
  window.addEventListener('mouseup', () => {
    if (!sldDrag) return;
    const { node, moved } = sldDrag;
    sldDrag = null;
    if (moved) saveSldManualGraph();
    else handleSldNodeClick(node);
  });

  function renderSldPalette() {
    const pal = document.getElementById('sldPalette');
    if (!pal) return;
    pal.innerHTML = '';
    SLD_BLOCK_TYPES.forEach(b => {
      const color = SLD_CATS[b.cat];
      const chip = document.createElement('button');
      chip.className = 'sld-chip';
      chip.style.borderColor = color;
      chip.innerHTML = `<span class="abbr" style="color:${color}">${b.abbr}</span><span class="desc">${t('sldb_' + b.key)}</span>`;
      chip.addEventListener('click', () => {
        const n = sldManualGraph.nodes.length;
        sldManualGraph.nodes.push(makeSldNode(b.key, 50 + (n % 7) * 120, 40 + Math.floor(n / 7) * 78));
        saveSldManualGraph();
        drawSLD();
        updateSldStatus();
      });
      pal.appendChild(chip);
    });
  }

  function setSldMode(mode) {
    sldMode = mode === 'manual' ? 'manual' : 'auto';
    localStorage.setItem('prc_sld_mode', sldMode);
    document.getElementById('sldAutoBtn').classList.toggle('active', sldMode === 'auto');
    document.getElementById('sldManualBtn').classList.toggle('active', sldMode === 'manual');
    document.getElementById('sldManualUI').style.display = sldMode === 'manual' ? 'block' : 'none';
    const hintEl = document.getElementById('sldHint');
    if (hintEl) hintEl.textContent = t(sldMode === 'manual' ? 'hint_sld_manual' : 'hint_sld');
    sldSelectedId = null;
    sldDrag = null;
    drawSLD();
    updateSldStatus();
  }

  function refreshSldTexts() {
    renderSldPalette();
    const hintEl = document.getElementById('sldHint');
    if (hintEl) hintEl.textContent = t(sldMode === 'manual' ? 'hint_sld_manual' : 'hint_sld');
    drawSLD();
    updateSldStatus();
  }

  document.getElementById('sldAutoBtn').addEventListener('click', () => setSldMode('auto'));
  document.getElementById('sldManualBtn').addEventListener('click', () => setSldMode('manual'));
  document.getElementById('sldSeedBtn').addEventListener('click', () => {
    const clone = JSON.parse(JSON.stringify({ nodes: sldAutoGraph.nodes, edges: sldAutoGraph.edges }));
    clone.nodes.forEach(n => { n.state = 'active'; });
    clone.edges.forEach(e => { if (e.kind === 'lost') e.kind = 'standby'; });
    sldManualGraph = { nodes: clone.nodes, edges: clone.edges, notes: [] };
    sldSelectedId = null;
    saveSldManualGraph();
    drawSLD();
    updateSldStatus();
  });
  document.getElementById('sldClearBtn').addEventListener('click', () => {
    sldManualGraph = { nodes: [], edges: [], notes: [] };
    sldSelectedId = null;
    saveSldManualGraph();
    drawSLD();
    updateSldStatus();
  });
  document.getElementById('sldSvg').addEventListener('click', e => {
    if (sldMode === 'manual' && e.target === e.currentTarget && sldSelectedId) {
      sldSelectedId = null;
      drawSLD();
      updateSldStatus();
    }
  });

  renderSldPalette();
  setSldMode(sldMode);

  // POD별 세트 배정 선택 UI — 블록마다 어느 세트로 보낼지 직접 고른다.
  function renderPodSetAssign(podPlan, roomPlan, podSet) {
    const box = document.getElementById('podSetAssign');
    if (!box) return;
    box.innerHTML = '';
    if (roomPlan.sets < 2) { box.style.display = 'none'; return; }
    box.style.display = 'flex';

    const label = document.createElement('span');
    label.className = 'assign-label';
    label.textContent = t('assign_label');
    box.appendChild(label);

    const manual = Object.keys(podSetOverride).length > 0;
    for (let gi = 0; gi < podPlan.pods; gi++) {
      const group = document.createElement('span');
      group.className = 'assign-group';
      const name = document.createElement('b');
      name.textContent = 'POD ' + (gi + 1);
      group.appendChild(name);
      for (let bi = 0; bi < podPlan.split; bi++) {
        const p = gi * podPlan.split + bi;
        const sel = document.createElement('select');
        sel.title = podBlockLabel(p, podPlan.split);
        for (let si = 0; si < roomPlan.sets; si++) {
          const opt = document.createElement('option');
          opt.value = si;
          opt.textContent = (podPlan.split > 1 ? 'ABCDEFGH'[bi] + '→' : '') + t('set_label', { n: si + 1 });
          sel.appendChild(opt);
        }
        sel.value = podSet[p];
        if (podSetOverride[p] !== undefined) sel.classList.add('pinned');
        sel.addEventListener('change', () => {
          podSetOverride[p] = parseInt(sel.value, 10);
          calculate();
        });
        group.appendChild(sel);
      }
      box.appendChild(group);
    }

    const auto = document.createElement('button');
    auto.className = 'quick-btn';
    auto.textContent = t('assign_auto');
    auto.disabled = !manual;
    auto.addEventListener('click', clearPodSetOverride);
    box.appendChild(auto);

    const note = document.createElement('span');
    note.className = 'hint';
    note.style.margin = '0';
    note.textContent = t(manual ? 'assign_manual_note' : 'assign_auto_note');
    box.appendChild(note);
  }

  // ===== POD 구성 스터디 연동 =====
  // ai-factory-study 의 "구성 JSON" 은 랙 종류별 수량(counts)과 랙당 kW(kw)를 담고 있다.
  // 둘을 곱해 더하면 POD 1개의 IT 부하가 나오고, 그 값을 ①번 POD 부하로 가져온다.
  function parsePodStudyJson(text) {
    let data;
    try { data = JSON.parse(text); } catch (e) { return { error: 'parse' }; }
    if (!data || !Array.isArray(data.counts) || !Array.isArray(data.kw)) return { error: 'shape' };
    const n = Math.min(data.counts.length, data.kw.length);
    let racks = 0, kw = 0;
    for (let i = 0; i < n; i++) {
      const c = Number(data.counts[i]) || 0;
      const k = Number(data.kw[i]) || 0;
      racks += c;
      kw += c * k;
    }
    if (!(kw > 0)) return { error: 'empty' };
    const names = Array.isArray(data.names) ? data.names : [];
    const rows = [];
    for (let i = 0; i < n; i++) {
      rows.push({ name: names[i] || '', qty: Number(data.counts[i]) || 0, kw: Number(data.kw[i]) || 0 });
    }
    return { racks, kw, rows, pue: Number(data.pue) || null };
  }

  const podJsonToggle = document.getElementById('podJsonToggle');
  const podJsonBox = document.getElementById('podJsonBox');
  if (podJsonToggle && podJsonBox) {
    podJsonToggle.addEventListener('click', () => {
      const open = podJsonBox.style.display === 'none';
      podJsonBox.style.display = open ? 'block' : 'none';
      if (open) document.getElementById('podJsonInput').focus();
    });
  }
  const podJsonApply = document.getElementById('podJsonApply');
  if (podJsonApply) {
    podJsonApply.addEventListener('click', () => {
      const status = document.getElementById('podJsonStatus');
      const res = parsePodStudyJson(document.getElementById('podJsonInput').value || '');
      const say = (key, vars, bad) => {
        if (!status) return;
        status.textContent = t(key, vars || {});
        status.style.color = bad ? 'var(--warn)' : 'var(--primary)';
        status.style.fontWeight = '700';
      };
      if (res.error) { say('podJson_err_' + res.error, {}, true); return; }
      // 랙 종류별 수량·전력도 그대로 ⑥번 랙 구성표로 옮긴다
      if (res.rows && res.rows.length && typeof hallRacks !== 'undefined') {
        hallRacks = res.rows.map((r, i) => ({
          name: r.name || t('rackmix_new', { n: i + 1 }),
          qty: r.qty, kw: r.kw, color: RACK_PALETTE[i % RACK_PALETTE.length],
        }));
        saveHallRacks();
        if (typeof renderHallRackTable === 'function') { renderHallRackTable(); drawHall(); }
      }
      const capInput = document.getElementById('podCapacity');
      capInput.value = Math.round(res.kw);
      capInput.dispatchEvent(new Event('input', { bubbles: true }));
      say('podJson_ok', {
        racks: res.racks, kw: fmtN(Math.round(res.kw)),
        mw: fmtN(Math.round(res.kw / 100) / 10),
        pue: res.pue ? fmtN(res.pue) : '-',
      });
      const bar = document.getElementById('podStudyStatus');
      if (bar) bar.textContent = t('podStudy_loaded', { racks: res.racks, kw: fmtN(Math.round(res.kw)) });
    });
  }

  // POD 설정을 바꾸면 ④·⑤가 함께 다시 그려진다.
  function onPodSettingChange() {
    updatePodControls();
    calculate();
  }
  ['podCapacity', 'podCount', 'podSplit'].forEach(id => {
    const el = document.getElementById(id);
    if (el) el.addEventListener('input', onPodSettingChange);
  });
  const podAutoCheckbox = document.getElementById('podAuto');
  if (podAutoCheckbox) podAutoCheckbox.addEventListener('change', onPodSettingChange);

  function onRoomSettingChange() { calculate(); }
  ['roomSets', 'roomsPerSet'].forEach(id => {
    const el = document.getElementById(id);
    if (el) el.addEventListener('input', onRoomSettingChange);
  });
  const roomsPerSetAuto = document.getElementById('roomsPerSetAuto');
  if (roomsPerSetAuto) roomsPerSetAuto.addEventListener('change', onRoomSettingChange);
  const roomCapacityInput = document.getElementById('roomCapacity');
  if (roomCapacityInput) roomCapacityInput.addEventListener('input', onRoomSettingChange);
  const roomCapAutoCheckbox = document.getElementById('roomCapAuto');
  if (roomCapAutoCheckbox) roomCapAutoCheckbox.addEventListener('change', onRoomSettingChange);


  // digits를 주면 그 자리까지 (IT용량처럼 소수 둘째 자리가 필요한 값), 없으면 한 자리.
  function fmtN(n, digits) {
    return Number(n).toLocaleString('ko-KR', { maximumFractionDigits: digits === undefined ? 1 : digits });
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

  applyDistButtons();
  document.getElementById('distBusBtn').addEventListener('click', () => setDistMode('bus'));
  document.getElementById('distCombBtn').addEventListener('click', () => setDistMode('comb'));

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
  // 전기실 2개씩 짝을 짓는 조합(N choose 2) — '조합형 분배'에서 POD마다 다른 짝에 물린다.
  function combPairs(M) {
    const pairs = [];
    for (let i = 0; i < M; i++) {
      for (let j = i + 1; j < M; j++) pairs.push([i, j]);
    }
    return pairs;
  }

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

  function isItSyncedToSets() {
    const el = document.getElementById('itSyncSets');
    return el ? el.checked : false;
  }
  function setsTotalMW() {
    return sets.reduce((n, st) => n + (parseFloat(st.loadMW) || 0), 0);
  }
  // 연동이 켜져 있으면 IT용량은 데이터홀 용량의 합이고(읽기 전용), 끄면 직접 넣는 목표값이다.
  function syncItCapacityFromSets() {
    const note = document.getElementById('itSyncNote');
    const synced = isItSyncedToSets();
    itCapacityInput.disabled = synced;
    itCapacityInput.style.background = synced ? 'var(--primary-bg)' : '';
    itCapacityInput.style.color = synced ? 'var(--primary)' : '';
    itCapacityInput.style.fontWeight = synced ? '700' : '';
    if (synced && sets.length) {
      const total = Number(setsTotalMW().toFixed(2));
      if (parseFloat(itCapacityInput.value) !== total) itCapacityInput.value = total;
    }
    if (note) {
      note.textContent = synced
        ? ' ' + t('hint_itSync_on', { n: sets.length, mw: fmtN(setsTotalMW(), 2) })
        : ' ' + t('hint_itSync_off', { mw: fmtN(setsTotalMW(), 2) });
    }
  }
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
    // ①의 유효용량(정격×PF×안전율×UPS효율) × N × 모듈당 변압기 대수.
    // 모듈당 1대로 고정해두면 2대 이상 쓰는 구성에서 멀쩡한 데이터홀마다 경고가 떴다.
    const rating = parseFloat(ratingInput.value);
    const { pf, upsEff, safety } = getGlobalDeratingFactors();
    if (!rating || !safety) return null;
    const effectiveCap = computeEffectiveCapacity(rating, pf, safety, upsEff);
    const n = Math.max(1, parseInt(nInput.value) || 3);
    const perModule = Math.max(1, lastPerModuleUnits || 1);
    return (effectiveCap * n * perModule) / 1000; // MW
  }

  function refreshMaxSetCapacityHint() {
    const derived = computeMaxSetCapacity();
    if (derived) {
      maxSetCapacityInput.value = Number(derived.toFixed(2));
    }
  }

  function updatePueDisplay() {
    const pue = computePue();
    pueDisplay.value = pue ? fmtN(pue, 2) : '-';   // PUE는 통상 소수 둘째 자리까지
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

  // ----- 분석할 데이터홀 고르기 -----
  // ①에 값을 넣기 전에 "어느 데이터홀을 보는가"부터 정한다.
  //  · 홀당 평균: ⓪의 IT용량 ÷ 데이터홀 개수 (기존 연동 동작)
  //  · 개별 홀:   그 홀의 용량과 ⓪ 표에서 고른 이중화 방식을 함께 가져온다
  //  · 직접 입력: 아래 칸에 자유롭게
  const loadSourceSel = document.getElementById('loadSource');
  const loadSourceNote = document.getElementById('loadSourceNote');
  let loadSource = 'avg';

  function refreshLoadSourceOptions() {
    if (!loadSourceSel) return;
    const keep = loadSource;
    loadSourceSel.innerHTML = '';
    const add = (value, label) => {
      const o = document.createElement('option');
      o.value = value; o.textContent = label;
      loadSourceSel.appendChild(o);
    };
    const count = sets.length;
    add('avg', t('src_avg', { n: count, mw: fmtN(count ? setsTotalMW() / count : 0, 2) }));
    sets.forEach((st, i) => {
      const preset = TOPO_PRESETS[st.presetKey] || TOPO_PRESETS['3oo4'];
      add('set:' + st.id, t('src_hall', {
        n: i + 1, mw: fmtN(st.loadMW, 2), topo: t(preset.labelKey),
      }));
    });
    add('manual', t('src_manual'));
    // 홀이 지워졌으면 평균으로 되돌린다
    const has = [...loadSourceSel.options].some(o => o.value === keep);
    loadSourceSel.value = has ? keep : 'avg';
    loadSource = loadSourceSel.value;
    updateLoadSourceNote();
  }

  function updateLoadSourceNote() {
    if (!loadSourceNote) return;
    if (loadSource === 'avg') loadSourceNote.textContent = t('src_note_avg');
    else if (loadSource === 'manual') loadSourceNote.textContent = t('src_note_manual');
    else {
      const st = sets.find(x => 'set:' + x.id === loadSource);
      loadSourceNote.textContent = st
        ? t('src_note_hall', { mw: fmtN(st.loadMW, 2) })
        : t('src_note_avg');
    }
  }

  function applyLoadSource() {
    const synced = loadSource === 'avg';
    loadSyncCheckbox.checked = synced;
    loadInput.disabled = synced;
    loadInput.style.background = synced ? 'var(--primary-bg)' : 'var(--surface)';
    if (synced) {
      const podAutoEl = document.getElementById('podAuto');
      if (podAutoEl && !podAutoEl.checked) { podAutoEl.checked = true; updatePodControls(); }
      updateHallCapacityDisplay(); updateLoadSourceNote(); calculate(); return;
    }
    if (loadSource === 'manual') { updateLoadSourceNote(); calculate(); return; }
    const st = sets.find(x => 'set:' + x.id === loadSource);
    if (!st) { updateLoadSourceNote(); return; }
    // 홀을 고르면 그 홀 부하가 기준이 되므로, POD 수량은 거기서 자동 산정되게 돌려놓는다
    // (POD 주도 모드로 두면 POD 합계가 다시 총부하를 덮어쓴다).
    const podAuto = document.getElementById('podAuto');
    if (podAuto && !podAuto.checked) { podAuto.checked = true; updatePodControls(); }
    // 그 홀에 지정해 둔 이중화 방식까지 함께 가져온다
    const preset = TOPO_PRESETS[st.presetKey];
    if (preset) {
      nInput.value = preset.n;
      cInput.value = preset.c;
      currentTopo = preset.topo;
      Array.prototype.forEach.call(redundancyOpts, o => {
        o.classList.toggle('active', o.dataset.topo === preset.topo && o.dataset.n == preset.n && o.dataset.c == preset.c);
      });
      manualFail4.clear();
      diagramMode = 'normal';
      updateDiagramModeButtons();
      applyTopoMeta();
    }
    updateLoadSourceNote();
    applyMainLoad(st.loadMW);
  }

  if (loadSourceSel) {
    loadSourceSel.addEventListener('change', () => {
      loadSource = loadSourceSel.value;
      applyLoadSource();
    });
  }

  loadSyncCheckbox.addEventListener('change', () => {
    loadInput.disabled = loadSyncCheckbox.checked;
    loadInput.style.background = loadSyncCheckbox.checked ? 'var(--primary-bg)' : 'var(--surface)';
    if (loadSyncCheckbox.checked) updateHallCapacityDisplay();
  });

  function computeSetResult(set) {
    const rating = parseFloat(ratingInput.value);
    const { pf, upsEff, safety } = getGlobalDeratingFactors();
    const preset = TOPO_PRESETS[set.presetKey] || TOPO_PRESETS['3oo4'];
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
    return { M, perModuleUnits, totalUnits, normalPct, emergencyPct, perModuleLoad };
  }

  // 참고 예시 표 — 더 이상 고정 숫자가 아니라 지금 ①번 총부하·정격·안전율(등)로 5가지
  // 대표 방식을 실시간 계산해 비교해준다.
  const REF_TABLE_ROWS = [
    { presetKey: '2oo3', labelKey: 'refTable_row1' },
    { presetKey: '3oo4', labelKey: 'refTable_row2' },
    { presetKey: 'n+1', labelKey: 'refTable_row3' },
    { presetKey: 'n+2c', labelKey: 'refTable_row4' },
    { presetKey: '2n', labelKey: 'refTable_row5' },
  ];
  function renderRefTable() {
    const refBody = document.getElementById('refTableBody');
    const refTitle = document.getElementById('refTableTitle');
    if (!refBody || !refTitle) return;
    const rating = parseFloat(ratingInput.value);
    const { safety } = getGlobalDeratingFactors();
    const load = parseFloat(loadInput.value);
    refTitle.textContent = t('refTable_title', { load: fmtN(load), rating: fmtN(rating), safety });
    refBody.innerHTML = '';
    if (!load || load <= 0 || !rating || rating <= 0 || !safety) return;
    REF_TABLE_ROWS.forEach(row => {
      const result = computeSetResult({ loadMW: load, presetKey: row.presetKey });
      const tr = document.createElement('tr');
      const tdTopo = document.createElement('td'); tdTopo.textContent = t(row.labelKey);
      const tdLoad = document.createElement('td'); tdLoad.textContent = fmtN(load) + ' MW';
      const tdStep1 = document.createElement('td'); tdStep1.textContent = fmtN(result.perModuleLoad / 1000) + ' MW';
      const tdStep2 = document.createElement('td'); tdStep2.textContent = t('unit_dae', { n: result.perModuleUnits });
      const tdStep3 = document.createElement('td'); tdStep3.className = 'accent'; tdStep3.textContent = t('unit_dae', { n: result.totalUnits });
      tr.appendChild(tdTopo); tr.appendChild(tdLoad); tr.appendChild(tdStep1); tr.appendChild(tdStep2); tr.appendChild(tdStep3);
      refBody.appendChild(tr);
    });
  }

  function renderSets() {
    if (typeof syncItCapacityFromSets === 'function') { try { syncItCapacityFromSets(); } catch (e) {} }
    if (typeof refreshLoadSourceOptions === 'function') { try { refreshLoadSourceOptions(); } catch (e) {} }
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
      loadInputEl.step = '0.01';
      loadInputEl.min = '0';
      loadInputEl.value = set.loadMW;
      if (overCap) loadInputEl.style.borderColor = 'var(--warn)';
      loadInputEl.addEventListener('input', () => {
        set.loadMW = parseFloat(loadInputEl.value) || 0;
        syncItCapacityFromSets();
        updatePueDisplay();
        updateHallCapacityDisplay();
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
        // ①의 "분석할 데이터홀"을 이 홀로 맞추면 용량과 이중화 방식이 함께 따라온다
        loadSource = 'set:' + set.id;
        refreshLoadSourceOptions();
        applyLoadSource();
        loadSourceSel.scrollIntoView({ behavior: 'smooth', block: 'center' });
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
  const itSyncCheckbox = document.getElementById('itSyncSets');
  if (itSyncCheckbox) itSyncCheckbox.addEventListener('change', () => {
    syncItCapacityFromSets();
    updatePueDisplay();
    updateHallCapacityDisplay();
    renderSets();
  });
  [ratingInput, safetyInput, pfInput, upsEfficiencyInput].forEach(el => el.addEventListener('input', () => {
    refreshMaxSetCapacityHint();
    renderSets();
  }));

  // init: compute PUE, derive recommended max cap from ① defaults, set default hall count from it, auto-split once
  updatePueDisplay();
  refreshMaxSetCapacityHint();
  updateHallCapacityDisplay();
  autoSplitSets();
  refreshLoadSourceOptions();

  // ===== 설정 저장 / 불러오기 =====
  // 규모가 다른 데이터센터를 여러 개 검토할 수 있도록 입력값 전체를 이름 붙여 저장한다.
  // 저장 대상: ⓪~④의 모든 입력란·체크박스, 이중화 방식, 분배 방식, ⓪ 데이터홀 목록.
  const PRESET_KEY = 'prc_presets';
  const PRESET_FIELDS = [
    'utilityCapacity', 'itCapacityInput', 'hallCountInput', 'load', 'rating',
    'pf', 'upsEfficiency', 'safety', 'podCapacity', 'podCount', 'podSplit',
    'nInput', 'cInput', 'roomSets', 'roomsPerSet', 'roomCapacity',
  ];
  const PRESET_CHECKS = ['loadSyncCheckbox', 'podAuto', 'roomCapAuto', 'roomsPerSetAuto'];
  const presetSelect = document.getElementById('presetSelect');
  const presetNameInput = document.getElementById('presetName');
  const presetStatus = document.getElementById('presetStatus');

  function loadPresetStore() {
    try {
      const raw = JSON.parse(localStorage.getItem(PRESET_KEY) || '{}');
      return (raw && typeof raw === 'object') ? raw : {};
    } catch (e) { return {}; }
  }
  function savePresetStore(store) {
    try { localStorage.setItem(PRESET_KEY, JSON.stringify(store)); } catch (e) {}
  }
  function snapshotSettings() {
    const fields = {}, checks = {};
    PRESET_FIELDS.forEach(id => { const el = document.getElementById(id); if (el) fields[id] = el.value; });
    PRESET_CHECKS.forEach(id => { const el = document.getElementById(id); if (el) checks[id] = el.checked; });
    const activeOpt = Array.prototype.findIndex.call(redundancyOpts, o => o.classList.contains('active'));
    return {
      v: 1, fields, checks, topo: currentTopo, opt: activeOpt, dist: distMode,
      podSet: Object.assign({}, podSetOverride), loadSource,
      sets: sets.map(st => ({ loadMW: st.loadMW, presetKey: st.presetKey })),
    };
  }
  function restoreSettings(snap) {
    if (!snap || !snap.fields) return;
    // 이중화 방식 먼저 — 프리셋 클릭이 N/C를 덮어쓰므로 그 다음에 수치를 복원한다
    if (snap.opt >= 0 && redundancyOpts[snap.opt]) {
      Array.prototype.forEach.call(redundancyOpts, o => o.classList.remove('active'));
      redundancyOpts[snap.opt].classList.add('active');
    }
    if (snap.topo) currentTopo = snap.topo;
    Object.keys(snap.fields).forEach(id => {
      const el = document.getElementById(id);
      if (el) el.value = snap.fields[id];
    });
    Object.keys(snap.checks || {}).forEach(id => {
      const el = document.getElementById(id);
      if (el) el.checked = !!snap.checks[id];
    });
    if (Array.isArray(snap.sets)) {
      sets = snap.sets.map(st => ({ id: setIdCounter++, loadMW: st.loadMW, presetKey: st.presetKey }));
    }
    manualFail4.clear();
    podSetOverride = Object.assign({}, snap.podSet || {});
    if (snap.loadSource) loadSource = snap.loadSource;
    diagramMode = 'normal';
    updateDiagramModeButtons();
    distMode = snap.dist === 'comb' ? 'comb' : 'bus';
    localStorage.setItem('prc_dist', distMode);
    applyDistButtons();
    applyTopoMeta();
    updatePueDisplay();
    refreshMaxSetCapacityHint();
    updateHallCapacityDisplay();
    renderSets();
    calculate();
  }
  // ===== 개선 의견 =====
  // 쓰는 즉시 이 브라우저에 쌓이고, 주간 취합은 메일 본문 또는 마크다운으로 뽑는다.
  // 각 항목은 반영 / 보류 / 미반영을 눌러 분류하고 내용은 그 자리에서 고칠 수 있다.
  const FB_KEY = 'prc_feedback';
  const FB_MAIL = 'twight2000@gmail.com';
  const FB_CATS = ['bug', 'calc', 'feature', 'ui', 'etc'];
  const FB_STATES = ['new', 'applied', 'hold', 'rejected'];
  let feedback = loadFeedback();
  let fbFilter = 'all';

  function loadFeedback() {
    try {
      const raw = JSON.parse(localStorage.getItem(FB_KEY) || '[]');
      if (Array.isArray(raw)) return raw;
    } catch (e) {}
    return [];
  }
  function saveFeedback() {
    try { localStorage.setItem(FB_KEY, JSON.stringify(feedback)); } catch (e) {}
  }

  // 의견과 함께 남겨 두면 나중에 재현하기 쉬운 현재 상태 한 줄
  function fbContext() {
    try {
      const topo = Array.prototype.filter.call(redundancyOpts, o => o.classList.contains('active'))[0];
      return [
        'load=' + loadInput.value + 'MW',
        'topo=' + (topo ? topo.textContent.trim().split('\n')[0] : '-'),
        'sets=' + (document.getElementById('roomSets') || {}).value,
        'pods=' + (document.getElementById('podCount') || {}).value,
        'podKW=' + (document.getElementById('podCapacity') || {}).value,
        'dist=' + distMode,
      ].join(' · ');
    } catch (e) { return ''; }
  }

  function fbAdd() {
    const title = (document.getElementById('fbTitle').value || '').trim();
    const body = (document.getElementById('fbBody').value || '').trim();
    if (!title && !body) { fbSay('fb_need_text', null, true); return; }
    feedback.unshift({
      id: 'f' + Date.now(),
      at: new Date().toISOString(),
      cat: document.getElementById('fbCategory').value || 'etc',
      title: title || body.slice(0, 40),
      body,
      ctx: document.getElementById('fbAttach').checked ? fbContext() : '',
      status: 'new',
    });
    saveFeedback();
    document.getElementById('fbTitle').value = '';
    document.getElementById('fbBody').value = '';
    renderFeedback();
    fbSay('fb_added');
  }

  function fbSay(key, vars, bad) {
    const el = document.getElementById('fbStatus');
    if (!el) return;
    el.textContent = key ? t(key, vars || {}) : '';
    el.style.color = bad ? 'var(--warn)' : 'var(--primary)';
    el.style.fontWeight = '700';
  }

  // 최근 7일 항목을 사람이 읽을 수 있는 한 덩어리로
  function fbDigest(days) {
    const since = Date.now() - (days || 7) * 86400000;
    const recent = feedback.filter(f => new Date(f.at).getTime() >= since);
    const list = recent.length ? recent : feedback;
    const lines = [t('fb_digest_head', { n: list.length, days: days || 7 }), ''];
    FB_STATES.forEach(st => {
      const group = list.filter(f => f.status === st);
      if (!group.length) return;
      lines.push('## ' + t('fb_state_' + st) + ' (' + group.length + ')');
      group.forEach((f, i) => {
        lines.push((i + 1) + '. [' + t('fb_cat_' + f.cat) + '] ' + f.title);
        if (f.body) lines.push('   ' + f.body.replace(/\n/g, '\n   '));
        if (f.ctx) lines.push('   · ' + f.ctx);
        lines.push('   · ' + new Date(f.at).toLocaleString(currentLang === 'ko' ? 'ko-KR' : 'en-US'));
      });
      lines.push('');
    });
    return lines.join('\n');
  }

  function renderFeedback() {
    const box = document.getElementById('fbList');
    if (!box) return;
    box.innerHTML = '';
    const shown = feedback.filter(f => fbFilter === 'all' || f.status === fbFilter);
    const count = document.getElementById('fbCount');
    if (count) {
      count.textContent = t('fb_count', {
        total: feedback.length,
        n: feedback.filter(f => f.status === 'new').length,
      });
    }
    if (!shown.length) {
      const empty = document.createElement('div');
      empty.className = 'fb-empty';
      empty.textContent = t('fb_empty');
      box.appendChild(empty);
      return;
    }
    shown.forEach(f => {
      const card = document.createElement('div');
      card.className = 'fb-item ' + f.status;

      const head = document.createElement('div');
      head.className = 'fb-item-head';
      const cat = document.createElement('span');
      cat.className = 'fb-cat';
      cat.textContent = t('fb_cat_' + f.cat);
      head.appendChild(cat);
      const when = document.createElement('span');
      when.className = 'fb-when';
      when.textContent = new Date(f.at).toLocaleDateString(currentLang === 'ko' ? 'ko-KR' : 'en-US');
      head.appendChild(when);
      // 상태를 눌러서 바꾼다 — 반영 / 보류 / 미반영
      const states = document.createElement('span');
      states.className = 'fb-states';
      ['applied', 'hold', 'rejected'].forEach(st => {
        const b = document.createElement('button');
        b.className = 'fb-state' + (f.status === st ? ' on ' + st : '');
        b.textContent = t('fb_state_' + st);
        b.addEventListener('click', () => {
          f.status = (f.status === st) ? 'new' : st;
          saveFeedback(); renderFeedback();
        });
        states.appendChild(b);
      });
      head.appendChild(states);
      const del = document.createElement('button');
      del.className = 'sched-del';
      del.textContent = '✕';
      del.addEventListener('click', () => {
        feedback = feedback.filter(x => x.id !== f.id);
        saveFeedback(); renderFeedback();
      });
      head.appendChild(del);
      card.appendChild(head);

      const title = document.createElement('input');
      title.type = 'text'; title.className = 'fb-edit-title'; title.value = f.title;
      title.addEventListener('input', () => { f.title = title.value; saveFeedback(); });
      card.appendChild(title);

      const body = document.createElement('textarea');
      body.className = 'fb-edit-body'; body.rows = 2; body.value = f.body || '';
      body.addEventListener('input', () => { f.body = body.value; saveFeedback(); });
      card.appendChild(body);

      if (f.ctx) {
        const ctx = document.createElement('div');
        ctx.className = 'fb-ctx';
        ctx.textContent = f.ctx;
        card.appendChild(ctx);
      }
      box.appendChild(card);
    });
  }

  function refreshFeedbackTexts() {
    const cat = document.getElementById('fbCategory');
    if (cat) {
      const keep = cat.value;
      cat.innerHTML = '';
      FB_CATS.forEach(k => {
        const o = document.createElement('option');
        o.value = k; o.textContent = t('fb_cat_' + k);
        cat.appendChild(o);
      });
      if (keep) cat.value = keep;
    }
    const fil = document.getElementById('fbFilter');
    if (fil) {
      const keep = fil.value || 'all';
      fil.innerHTML = '';
      ['all'].concat(FB_STATES).forEach(k => {
        const o = document.createElement('option');
        o.value = k; o.textContent = k === 'all' ? t('fb_filter_all') : t('fb_state_' + k);
        fil.appendChild(o);
      });
      fil.value = keep;
    }
    renderFeedback();
  }

  const fbModal = document.getElementById('fbModal');
  function fbOpen(open) {
    fbModal.classList.toggle('open', open);
    fbModal.setAttribute('aria-hidden', open ? 'false' : 'true');
    document.body.classList.toggle('modal-open', open);
    if (open) { refreshFeedbackTexts(); fbSay(null); }
  }
  document.getElementById('fbOpenBtn').addEventListener('click', () => fbOpen(true));
  document.getElementById('fbCloseBtn').addEventListener('click', () => fbOpen(false));
  fbModal.addEventListener('click', e => { if (e.target === fbModal) fbOpen(false); });
  document.getElementById('fbAddBtn').addEventListener('click', fbAdd);
  document.getElementById('fbFilter').addEventListener('change', e => {
    fbFilter = e.target.value; renderFeedback();
  });

  document.getElementById('fbMailBtn').addEventListener('click', () => {
    const subject = t('fb_mail_subject', { date: new Date().toISOString().slice(0, 10) });
    const url = 'mailto:' + FB_MAIL
      + '?subject=' + encodeURIComponent(subject)
      + '&body=' + encodeURIComponent(fbDigest(7));
    // 본문이 길면 메일 앱이 잘라내므로, 그럴 때는 복사 쪽을 안내한다
    if (url.length > 1900) { fbSay('fb_mail_long', null, true); return; }
    window.location.href = url;
    fbSay('fb_mail_opened');
  });
  document.getElementById('fbCopyBtn').addEventListener('click', () => {
    const text = fbDigest(7);
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(text).then(() => fbSay('fb_copied'), () => fbSay('fb_copy_fail', null, true));
    } else {
      fbSay('fb_copy_fail', null, true);
    }
  });
  document.getElementById('fbExportBtn').addEventListener('click', () => {
    const name = 'feedback_' + new Date().toISOString().slice(0, 10) + '.json';
    downloadBlob(new Blob([JSON.stringify({ app: 'power_redundancy_calculator', kind: 'feedback', items: feedback }, null, 2)],
      { type: 'application/json' }), name);
    fbSay('fb_exported', { name });
  });
  document.getElementById('fbImportBtn').addEventListener('click', () => document.getElementById('fbImportInput').click());
  document.getElementById('fbImportInput').addEventListener('change', e => {
    const file = e.target.files && e.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => {
      let d = null;
      try { d = JSON.parse(reader.result); } catch (err) { d = null; }
      if (!d || !Array.isArray(d.items)) { fbSay('fb_import_bad', null, true); return; }
      // 같은 id는 들어온 쪽 상태로 덮고, 새 항목은 붙인다
      const byId = {};
      feedback.forEach(f => { byId[f.id] = f; });
      d.items.forEach(f => { byId[f.id] = Object.assign({}, byId[f.id], f); });
      feedback = Object.keys(byId).map(k => byId[k]).sort((a, b) => (a.at < b.at ? 1 : -1));
      saveFeedback(); renderFeedback();
      fbSay('fb_imported', { n: d.items.length });
    };
    reader.readAsText(file);
    e.target.value = '';
  });

  // ----- 파일로 저장 / 불러오기 -----
  // localStorage 프리셋이 이 브라우저에만 남는 반면, 파일은 들고 다니거나 공유할 수 있다.
  // ⓪~④ 입력값만이 아니라 ⑤ 평면 탭, ⑥ 데이터홀 치수, ⑦ SLD 수동 작도까지 함께 담는다.
  const HALL_FIELDS = [
    'hallCooling', 'hallRackKW', 'hallRacksPerRow', 'hallRackW', 'hallRackD',
    'hallCold', 'hallHot', 'hallCduKW', 'hallElecW',
    'hallRaised', 'hallRackH', 'hallBusway', 'hallCeil',
    'hallUnits', 'hallGrid', 'hallPodGap', 'hallService', 'hallPerim', 'hallPattern',
  ];

  function snapshotBundle() {
    const hall = {};
    HALL_FIELDS.forEach(id => { const el = document.getElementById(id); if (el) hall[id] = el.value; });
    return {
      app: 'power_redundancy_calculator',
      version: 1,
      savedAt: new Date().toISOString(),
      name: (presetNameInput.value || '').trim() || presetSelect.value || '',
      settings: snapshotSettings(),
      hall,
      plans: { tabs: planTabs },
      sld: { nodes: sldManualGraph.nodes, edges: sldManualGraph.edges },
      racks: { list: hallRacks, rows: hallRowsOpt },
      ui: { lang: currentLang, view: document.body.classList.contains('view-dual') ? 'dual' : 'sequential' },
    };
  }

  function restoreBundle(data) {
    if (!data || data.app !== 'power_redundancy_calculator' || !data.settings) return false;
    // 평면·SLD를 먼저 되돌리고, 마지막에 settings를 적용해 한 번만 다시 계산되게 한다
    if (data.plans && Array.isArray(data.plans.tabs) && data.plans.tabs.length) {
      planTabs = data.plans.tabs;
      planActive = 0; planAllMode = false; planSelected = null;
      planTabs.forEach(tab => (tab.blocks || []).forEach(b => {
        const n = parseInt(String(b.id).replace(/\D/g, ''), 10);
        if (isFinite(n) && n > planSeq) planSeq = n;
      }));
      savePlans();
    }
    if (data.sld && Array.isArray(data.sld.nodes)) {
      sldManualGraph = { nodes: data.sld.nodes, edges: data.sld.edges || [], notes: [] };
      sldSelectedId = null;
      sldManualGraph.nodes.forEach(n => {
        const num = parseInt(String(n.id).replace(/\D/g, ''), 10);
        if (isFinite(num) && num > sldSeq) sldSeq = num;
      });
      saveSldManualGraph();
    }
    if (data.racks && Array.isArray(data.racks.list) && data.racks.list.length) {
      hallRacks = data.racks.list;
      hallRowsOpt = Math.max(1, Math.min(4, data.racks.rows || 1));
      saveHallRacks();
      const btn = document.querySelector('#hallRowsToggle .mode-btn[data-rows="' + hallRowsOpt + '"]');
      Array.prototype.forEach.call(document.querySelectorAll('#hallRowsToggle .mode-btn'), b => {
        const on = b === btn;
        b.classList.toggle('active', on);
        b.classList.toggle('normal', on);
      });
      if (typeof renderHallRackTable === 'function') renderHallRackTable();
    }
    if (data.hall) {
      Object.keys(data.hall).forEach(id => {
        const el = document.getElementById(id);
        if (el) el.value = data.hall[id];
      });
    }
    if (data.ui && data.ui.lang && data.ui.lang !== currentLang) setLang(data.ui.lang);
    restoreSettings(data.settings);
    if (typeof refreshPlanTexts === 'function') { try { refreshPlanTexts(); } catch (e) {} }
    if (typeof refreshHallTexts === 'function') { try { refreshHallTexts(); } catch (e) {} }
    if (typeof renderSldPalette === 'function') { try { renderSldPalette(); drawSLD(); updateSldStatus(); } catch (e) {} }
    return true;
  }

  document.getElementById('presetFileSave').addEventListener('click', () => {
    const bundle = snapshotBundle();
    const stamp = new Date();
    const pad = n => String(n).padStart(2, '0');
    const date = stamp.getFullYear() + pad(stamp.getMonth() + 1) + pad(stamp.getDate());
    const base = (bundle.name || t('preset_file_default')).replace(/[\\/:*?"<>|]/g, '_');
    downloadBlob(new Blob([JSON.stringify(bundle, null, 2)], { type: 'application/json' }),
      base + '_' + date + '.json');
    setPresetStatus('preset_file_saved', { name: base + '_' + date + '.json' });
  });

  document.getElementById('presetFileLoad').addEventListener('click', () => {
    document.getElementById('presetFileInput').click();
  });
  document.getElementById('presetFileInput').addEventListener('change', e => {
    const file = e.target.files && e.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => {
      let data = null;
      try { data = JSON.parse(reader.result); } catch (err) { data = null; }
      if (!data) { setPresetStatus('preset_file_badjson'); return; }
      if (!restoreBundle(data)) { setPresetStatus('preset_file_badfile'); return; }
      if (data.name) presetNameInput.value = data.name;
      setPresetStatus('preset_file_loaded', { name: file.name });
    };
    reader.onerror = () => setPresetStatus('preset_file_badjson');
    reader.readAsText(file);
    e.target.value = '';   // 같은 파일을 다시 골라도 change가 걸리도록
  });

  function refreshPresetOptions(selectName) {
    const store = loadPresetStore();
    const names = Object.keys(store).sort();
    presetSelect.innerHTML = '';
    const blank = document.createElement('option');
    blank.value = '';
    blank.textContent = t('preset_choose');
    presetSelect.appendChild(blank);
    names.forEach(n => {
      const opt = document.createElement('option');
      opt.value = n; opt.textContent = n;
      presetSelect.appendChild(opt);
    });
    if (selectName && store[selectName]) presetSelect.value = selectName;
  }
  function setPresetStatus(key, vars) {
    if (!presetStatus) return;
    presetStatus.textContent = key ? t(key, vars) : '';
    const bad = key && key.indexOf('bad') >= 0;
    presetStatus.style.color = bad ? 'var(--warn)' : '';
    presetStatus.style.fontWeight = bad ? '700' : '';
  }
  presetSelect.addEventListener('change', () => {
    const name = presetSelect.value;
    if (!name) { setPresetStatus(null); return; }
    const store = loadPresetStore();
    if (!store[name]) return;
    restoreSettings(store[name]);
    presetNameInput.value = name;
    setPresetStatus('preset_loaded', { name });
  });
  document.getElementById('presetSaveBtn').addEventListener('click', () => {
    const name = (presetNameInput.value || '').trim() || presetSelect.value;
    if (!name) { setPresetStatus('preset_need_name'); return; }
    const store = loadPresetStore();
    store[name] = snapshotSettings();
    savePresetStore(store);
    refreshPresetOptions(name);
    setPresetStatus('preset_saved', { name });
  });
  document.getElementById('presetDeleteBtn').addEventListener('click', () => {
    const name = presetSelect.value;
    if (!name) { setPresetStatus('preset_need_pick'); return; }
    const store = loadPresetStore();
    delete store[name];
    savePresetStore(store);
    refreshPresetOptions();
    presetNameInput.value = '';
    setPresetStatus('preset_deleted', { name });
  });
  document.getElementById('presetResetBtn').addEventListener('click', () => {
    restoreSettings(DEFAULT_SETTINGS);
    presetSelect.value = '';
    presetNameInput.value = '';
    setPresetStatus('preset_reset_done');
  });
  // 페이지가 처음 뜬 상태 = 기본값
  const DEFAULT_SETTINGS = snapshotSettings();
  refreshPresetOptions();

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
      svgToPngDataUrl(document.getElementById('planSvg')),
    ]);
    return {
      title: t('pageTitle'),
      dateStr: new Date().toLocaleDateString(currentLang === 'ko' ? 'ko-KR' : 'en-US'),
      inputs, diagram4, diagram5,
      h4Title: '④ ' + t('h4_title'),
      h5Title: '⑤ ' + t('h_plan_title'),
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
