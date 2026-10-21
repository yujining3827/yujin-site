// 노션 "경험정리"를 원본으로 한 사이트 콘텐츠.
// 수치·수상은 증빙 가능한 범위만 적는다.

export const PROFILE = {
  name: "정유진",
  email: "j_yujin_swu22@naver.com",
  school: "서울여자대학교 소프트웨어융합학과",
  graduation: "2027.02 졸업 예정",
  roles: ["Backend", "AI Service", "Product"],
};

export const SOCIAL_LINKS = [
  { href: "https://github.com/yujining3827", icon: "/github.svg", label: "GitHub", mono: true },
  { href: "https://velog.io/@yujindeang_/posts", icon: "/velog.png", label: "Velog", mono: false },
  { href: "https://www.instagram.com/dev.ing_/", icon: "/instagram.svg", label: "Instagram", mono: false },
];

export type Metric = {
  value: string;
  label: string;
  detail: string;
};

export type Career = {
  company: string;
  team: string;
  role: string;
  period: string;
  summary: string;
  metrics: Metric[];
  highlights: string[];
  tech: string[];
};

export const FEATURED_CAREER: Career = {
  company: "FYI",
  team: "멋쟁이사자처럼 해외 신사업팀",
  role: "AI PM 인턴 · 기획 / 데이터 분석 / 백엔드 구현",
  period: "2026.07 — 2026.08",
  summary:
    "사용자 행동 데이터를 분석해 가입 퍼널과 운영 흐름을 개선하고, 문제 발견부터 개발, 지표 확인까지 직접 이어갔습니다.",
  metrics: [
    { value: "−45%", label: "가입 CAC", detail: "1,746원 → 955원" },
    { value: "10.7%", label: "가입 전환율", detail: "8.9%에서 상승" },
    { value: "+38", label: "신규 이벤트", detail: "171종 점검 · 17,387건 수집" },
    { value: "20", label: "API", detail: "커밋 189 · 마이그레이션 5" },
  ],
  highlights: [
    "사용자 행동과 유입 퍼널을 점검해 이탈 구간과 계측 공백을 발견",
    "사용자 정보 회수 흐름을 랜딩 → API → DB → 이메일 발송 → 관리자 화면까지 연결",
    "페이지네이션 정렬 기준, 스크롤 도달 이벤트 누락, 빈 값 덮어쓰기 문제를 수정",
    "A/B 실험용 사용자 식별·기능 분기와 운영 자동화, AI 추천 기능 구현",
  ],
  tech: ["Spring", "Java", "SQL", "Event Tracking", "A/B Test", "Python", "GPT API"],
};

export type LogEntry = {
  period: string;
  title: string;
  role: string;
  note?: string;
};

export const ACTIVITY_LOG: LogEntry[] = [
  {
    period: "2026",
    title: "UMC 10기",
    role: "서버 파트",
    note: "JWT 인증·인가, 공통 응답·예외 처리, Public/Private API 구조 적용",
  },
  {
    period: "2025.01 — 2026.01",
    title: "멋쟁이사자처럼 중앙운영단",
    role: "홍보부장",
    note: "공식 SNS 콘텐츠 운영, 평균 조회수 약 9,500회",
  },
  {
    period: "2024.12 — 2025.12",
    title: "멋쟁이사자처럼 서울여대",
    role: "백엔드 운영진",
    note: "백엔드 교육 세션과 자체 행사 기획·운영",
  },
  {
    period: "2024.09 — 2024.12",
    title: "㈜유락",
    role: "정보보안·포렌식 인턴",
    note: "보안 기업의 포렌식 업무 환경과 실무 프로세스 경험",
  },
  {
    period: "2024",
    title: "UMC 7기",
    role: "Plan 파트",
    note: "서비스 기획 스터디, STACKPOT 프로젝트 PM",
  },
];

export type StackGroup = {
  key: string;
  items: string[];
};

export const STACK: StackGroup[] = [
  { key: "backend", items: ["Java", "Spring Boot", "JPA", "REST API", "JWT"] },
  { key: "data_infra", items: ["MySQL", "PostgreSQL", "Redis", "AWS"] },
  { key: "product_ai", items: ["Event Tracking", "A/B Test", "Python", "GPT API"] },
  { key: "collab", items: ["React", "TypeScript", "GitHub", "Figma"] },
  { key: "certificates", items: ["SQLD", "정보처리기사 필기"] },
];
