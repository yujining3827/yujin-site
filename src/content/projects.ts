export type ProjectStatus = "award" | "live" | "wip" | "done";

export type Project = {
  slug: string;
  title: string;
  tagline: string;
  period: string;
  role: string;
  status: ProjectStatus;
  /** true면 목록·상세 페이지 어디에도 노출하지 않는다 */
  hidden?: boolean;
  badge?: string;
  image?: string;
  overview: string;
  contribution: string[];
  result: string[];
  tech: string[];
  links?: { label: string; href: string }[];
};

export const STATUS_LABEL: Record<ProjectStatus, string> = {
  award: "200 AWARDED",
  live: "200 LIVE",
  wip: "202 IN PROGRESS",
  done: "200 DONE",
};

const ALL_PROJECTS: Project[] = [
  {
    slug: "today-market",
    title: "오늘 시장은 (ReadEcon)",
    tagline: "경제 입문자가 시장 흐름의 원인과 결과를 이해하도록 돕는 LLM 학습 도우미",
    period: "2026.06 — 진행 중",
    role: "PM · Backend",
    status: "wip",
    badge: "ACK 2026 정총연합회 회장상",
    image: "/todaymarket.png",
    overview:
      "경제 뉴스를 읽어도 시장이 왜 움직였는지는 알기 어렵다는 문제에서 출발한 졸업 프로젝트입니다. 처음 생각한 서비스에 고정하지 않고 경제 입문자 5명을 인터뷰해 문제를 다시 정의했고, 뉴스를 나열하는 대신 시장 흐름의 원인과 결과를 설명하는 방향으로 서비스를 조정했습니다.",
    contribution: [
      "경제 입문자 5명 인터뷰로 문제와 서비스 방향 재정의",
      "하루 두 번 시장 브리핑, 용어 설명, AI 기반 설명 흐름 기획",
      "API와 서비스 흐름 설계·구현",
      "프론트엔드·백엔드 배포 진행",
    ],
    result: [
      "논문 「ReadEcon: 경제 입문자를 위한 LLM 기반 시장 흐름 학습 도우미」로 ACK 2026 정총연합회 회장상 수상",
      "사용자 조사 → 문제 재정의 → 구현 → 논문화까지 하나의 흐름으로 완주",
    ],
    tech: ["Spring Boot", "React", "OpenAI API", "Figma"],
  },
  {
    slug: "moca",
    title: "MOCA",
    tagline: "카페 운영자가 운영 데이터로 판단하도록 돕는 AI 경영 Agent",
    period: "2025 — 진행 중",
    role: "PM · Backend · UI",
    status: "wip",
    badge: "멋사 중앙해커톤 247팀 중 상위 3%",
    image: "/moca.png",
    overview:
      "카공족 문제를 해결하려는 서비스로 시작했지만, 사용자 조사와 시장 분석을 통해 카페 운영자의 본질적인 문제는 고객 관리보다 운영 의사결정에 있다는 점을 발견했습니다. 이후 데이터 기반 의사결정을 돕는 AI 경영 Agent로 방향을 전환했습니다.",
    contribution: [
      "카공족 서비스에서 카페 운영자용 AI Agent로 서비스 방향 조정",
      "API·데이터 모델링, 예약·사용자 데이터 기능 구현",
      "AI 기능 요구사항 정의와 프롬프트 설계",
      "Python 기반 분석 로직과 Spring API 연결",
    ],
    result: [
      "멋쟁이사자처럼 중앙해커톤 247개 팀 중 상위 3%, 2차 진출",
      "2025 기업데이터 활용 AI 경진대회 본선 진출 (10팀)",
    ],
    tech: ["Spring Boot", "Python", "JWT", "MySQL", "OpenAI"],
    links: [{ label: "GitHub", href: "https://github.com/SustainValley" }],
  },
  {
    slug: "swu-software",
    title: "소프트웨어학과 홈페이지 리디자인",
    tagline: "학과 구성원이 정보를 쉽게 찾고, 학과가 공지를 직접 관리하는 홈페이지",
    period: "2026.09 — 2026.10",
    role: "기획 · IA · Full-stack",
    status: "wip",
    image: "/swu-software-cover.webp",
    badge: "학과장 승인 · 교수 검토 완료",
    overview:
      "학사·교육 정보가 흩어져 있어 찾기 어렵고, 공지 관리도 번거롭다는 실제 이해관계자의 요구에서 시작했습니다. 정보 구조부터 다시 설계하고 관리자 기능까지 포함한 홈페이지를 구축했습니다.",
    contribution: [
      "상단 정보 구조 5개와 주요 페이지·사용자 흐름 설계",
      "교수진, 교육과정, 전공 로드맵, 졸업 요건, 공지 정보 구조 구성",
      "관리자 로그인·대시보드, 공지·졸업프로젝트 작성, 알림 신청 기능 기획",
      "이메일 인증·환영·공지 메일 흐름 검토",
    ],
    result: ["학과장 승인 및 교수 검토 완료", "AWS 기반 백엔드·프론트엔드 배포 요청 상태"],
    tech: ["Spring Boot", "React", "AWS"],
  },
  {
    slug: "curio",
    title: "Curio",
    tagline: "관심 키워드에 맞춰 뉴스를 모으고 요약하는 개인 맞춤 서비스",
    period: "2025 · 종합설계",
    role: "기획 · 디자인 · Backend",
    status: "done",
    hidden: true,
    badge: "ACK 2025 포스터 게재",
    overview:
      "관심 있는 뉴스만 골라 읽고 싶다는 문제에서 출발해, 수집 파이프라인과 API 서버를 연결한 뉴스 요약 서비스를 만들었습니다.",
    contribution: [
      "Python 크롤러와 Spring API 서버 구성",
      "API·DB 설계, 뉴스 수집과 요약 기능 구현",
      "키워드 추천, 요약 길이 선택, 폴더 기능 구현",
    ],
    result: ["ACK 2025 포스터 게재"],
    tech: ["Spring", "Python", "GPT API", "MySQL"],
  },
  {
    slug: "swu-festival-2025",
    title: "서울여대 2025 축제 사이트",
    tagline: "실제 축제 이용자를 대상으로 운영된 서울여자대학교 축제 서비스",
    period: "2025",
    role: "Backend · 멋사 서울여대 운영진",
    status: "done",
    image: "/swu-festival-cover.webp",
    badge: "실사용자 대상 운영",
    overview:
      "멋쟁이사자처럼 서울여대 운영진 프로젝트로, 2025년 서울여자대학교 축제 기간 동안 실제 이용자를 대상으로 운영된 축제 사이트입니다. 백엔드 개발을 맡아 실제 사용자가 있는 서비스를 구현하고 운영했습니다.",
    contribution: ["축제 사이트 백엔드 개발", "축제 기간 실서비스 운영"],
    result: ["실제 축제 이용자를 대상으로 서비스 운영"],
    tech: [],
  },
  {
    slug: "donworry",
    title: "돈워리",
    tagline: "구매 직전의 소비 결정을 다시 생각하게 돕는 소비 절제 가계부",
    period: "2026.05 — 2026.10",
    role: "SWUWEB 프로젝트",
    status: "done",
    image: "/donworry-cover.webp",
    overview:
      "돈을 모으고 싶지만 관리가 어려운 2030을 위해, 소비를 기록하는 데서 끝내지 않고 구매 직전에 한 번 더 생각하도록 돕는 흐름을 기획했습니다.",
    contribution: [
      "온보딩에서 관심사, 저축 목적, 목표 금액 설정",
      "상품 URL로 상품명·카테고리·가격을 가져와 소비 기록에 활용",
      "구매 전 질문 응답에 따라 소비 위험도를 안내하는 흐름",
      "참은 금액을 절약액과 목표 달성률에 반영",
    ],
    result: ["소비 기록을 넘어 의사결정 시점에 개입하는 사용자 흐름 설계"],
    tech: ["React", "TypeScript", "Figma"],
  },
  {
    slug: "dentruth",
    title: "Dentruth",
    tagline: "치과 일정과 상담 정보를 정리해 병원 방문 준비를 돕는 서비스",
    period: "2026",
    role: "Backend",
    status: "done",
    image: "/dentruth-cover.webp",
    overview:
      "치과 상담 전후로 흩어지는 일정과 정보를 한곳에 정리해, 사용자가 병원에 전달할 내용을 미리 준비할 수 있도록 돕는 서비스입니다.",
    contribution: [
      "일정 주간·월간 CRUD API",
      "상담카드 생성·목록·상세, 병원 전달용 요약 기능",
      "추천 질문 재생성 기능",
      "사용자 소유권 검증으로 비인가 접근 차단",
    ],
    result: ["의료 도메인 요구사항을 API·데이터 구조·접근 제어로 구현"],
    tech: ["Java", "Spring Boot", "JPA", "MySQL"],
  },
  {
    slug: "ddadang",
    title: "DDADANG",
    tagline: "혈당 관리를 꾸준히 이어가도록 돕는 헬스케어 플랫폼",
    period: "2026.05 — 진행 중",
    role: "Backend",
    status: "wip",
    image: "/ddadang-cover.webp",
    overview:
      "혈당 관리는 한 번의 측정보다 꾸준한 기록과 관리가 중요하다는 문제에서 출발한 메디컬 창업동아리 장기 프로젝트입니다. 사용자가 혈당 관리를 지속할 수 있도록 돕는 서비스의 백엔드를 맡고 있습니다.",
    contribution: ["백엔드 API 개발", "DB 설계"],
    result: ["메디컬 창업동아리 장기 프로젝트로 진행 중"],
    tech: ["Spring Boot", "MySQL"],
  },
];

export const PROJECTS = ALL_PROJECTS.filter((project) => !project.hidden);

export type MinorProject = {
  title: string;
  note: string;
  year: string;
};

export const MORE_PROJECTS: MinorProject[] = [
  { title: "STACKPOT", note: "UMC 협업 올인원 플랫폼 · PM", year: "2024" },
  { title: "Packingmate", note: "SW GURU2 Android 앱 · 팀 우수상", year: "2025" },
  { title: "GURU1 Python·HTML", note: "과정 수료 · 개인상", year: "2025" },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return PROJECTS.find((project) => project.slug === slug);
}
