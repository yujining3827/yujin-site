import { useParams } from "react-router-dom";


type Project = {
  title: string;
  image: string;
  period: string;
  role: string;
  description: string;
  tech: string[];
  contribution: string[];
  result: string[];
  github: string;
  demo: string;
};


const projectData: Record<string, Project> = {
  moca: {
    title: "MOCA",
    image: "/moca.png",
    period: "2025.07 - Present",
    role: "PM · Backend Developer",

    description:
      "MOCA는 카공족 문제 해결을 목표로 시작한 프로젝트입니다. 초기에는 장시간 머무르는 고객으로부터 추가 수익을 창출하는 방안을 고민했지만, 사용자 조사와 시장 분석을 통해 카페 운영자가 겪는 본질적인 문제는 고객 관리보다 운영 의사결정에 있다는 점을 발견했습니다. 이후 서비스 방향을 AI 기반 경영 컨설턴트 Agent로 전환하였고, 데이터 기반 의사결정을 지원하는 서비스를 기획하고 개발하고 있습니다.",

    tech: [
      "Spring Boot",
      "JPA",
      "MySQL",
      "AWS",
      "OpenAI",
    ],

    contribution: [
      "초기 문제 정의 및 서비스 방향성 수립 참여",
      "카페 운영자 관점의 사용자 시나리오 설계",
      "서비스 IA 및 핵심 기능 기획",
      "Spring Boot 기반 REST API 설계 및 개발",
      "JPA 기반 데이터 모델링 및 엔티티 설계",
      "예약 및 사용자 데이터 관리 기능 구현",
      "AI 컨설팅 기능 요구사항 정의",
      "OpenAI 활용 방안 검토 및 프롬프트 설계",
      "프로젝트 피벗 과정에서 서비스 방향 재정의",
    ],

    result: [
      "멋쟁이사자처럼 중앙 해커톤 본선 진출",
      "카공족 문제 해결 서비스에서 AI 경영 Agent로 서비스 피벗",
      "문제 정의 → 사용자 조사 → 가설 검증 → 피벗 과정을 경험",
      "백엔드 개발과 서비스 기획을 함께 수행",
      "현재 서비스 고도화 진행 중",
    ],

    github: "https://github.com/SustainValley",
    demo: "#",
  },

  "today-market": {
    title: "오늘 시장은",
    image: "/todaymarket.png",
    period: "2026.06 - Present",
    role: "PM · Backend Developer",

    description:
    "경제 뉴스를 읽어도 시장의 흐름을 이해하기 어렵다는 문제에서 시작한 프로젝트입니다. 초기에는 경제 초보자를 위한 뉴스레터 서비스를 기획했지만, 사용자 인터뷰를 통해 정보의 품질만큼 접근성이 중요하다는 점을 발견했습니다. 이에 따라 뉴스레터 중심 서비스에서 위젯 기반 서비스로 방향을 수정하며 사용자가 일상 속에서 시장 흐름을 쉽게 이해할 수 있는 정보 경험을 설계하고 있습니다.",

    tech: [
    "Spring Boot",
    "React",
    "OpenAI",
    "Figma"
    ],

    contribution: [
    "문제 정의 및 서비스 아이디어 발굴",
    "경제 초보자 대상 사용자 인터뷰 진행",
    "뉴스레터 서비스 기획 및 검증",
    "위젯 기반 서비스로 피벗 제안",
    "사용자 흐름 및 정보 구조 설계",
    "백엔드 API 구조 설계",
    "AI 기반 시장 브리핑 기능 기획"
    ],

    result: [
    "사용자 인터뷰를 통한 가설 검증 수행",
    "뉴스레터 중심 서비스에서 위젯 기반 서비스로 피벗",
    "시장 흐름 중심 정보 구조 설계",
    "현재 MVP 기획 및 개발 진행 중"
    ],

    github: "#",
    demo: "#",
  },

  donworry: {
    title: "돈워리",
    image: "/donworry.png",
    period: "2026.04 - Present",
    role: "PM",

    description:
      "대학생 금융 교육 서비스",

    tech: [
      "React",
      "Figma",
    ],

    contribution: [
      "서비스 기획",
      "UI 설계",
    ],

    result: [
      "프로젝트 진행 중",
    ],

    github: "#",
    demo: "#",
  },

  ddadang: {
    title: "DDADANG",
    image: "/ddadang.png",
    period: "2026.05 - Present",
    role: "Backend",

    description:
      "혈당관리 지속화를 위한 플랫폼",

    tech: [
      "Spring Boot",
      "MySQL",
    ],

    contribution: [
      "백엔드 개발",
      "DB 설계",
    ],

    result: [
      "프로젝트 진행 중",
    ],

    github: "#",
    demo: "#",
  },
};

export default function ProjectDetail() {
  const { slug } = useParams<{ slug: string }>();

  if (!slug) {
    return <div>Project Not Found</div>;
  }

  const project = projectData[slug as keyof typeof projectData];

  return (
    <div
      style={{
        maxWidth: "900px",
        margin: "0 auto",
        padding: "40px",
      }}
    >
      <img
        src={project.image}
        alt={project.title}
        style={{
          width: "100%",
          borderRadius: "16px",
          marginBottom: "40px",
        }}
      />

      <h1
        style={{
          fontSize: "3rem",
          fontWeight: 700,
          marginBottom: "20px",
        }}
      >
        {project.title}
      </h1>

      <p
        style={{
          color: "#666",
          marginBottom: "40px",
        }}
      >
        {project.period} · {project.role}
      </p>

      <section style={{ marginBottom: "40px" }}>
        <h2>Overview</h2>

        <p
          style={{
            lineHeight: 1.8,
            color: "#555",
          }}
        >
          {project.description}
        </p>
      </section>

      <section style={{ marginBottom: "40px" }}>
        <h2>Tech Stack</h2>

        <div
          style={{
            display: "flex",
            gap: "10px",
            flexWrap: "wrap",
            marginTop: "16px",
          }}
        >
          {project.tech.map((tech) => (
            <span
              key={tech}
              style={{
                background: "#f5f5f5",
                padding: "8px 12px",
                borderRadius: "999px",
              }}
            >
              {tech}
            </span>
          ))}
        </div>
      </section>

      <section style={{ marginBottom: "40px" }}>
        <h2>What I Did</h2>

        <ul>
          {project.contribution.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>

      <section style={{ marginBottom: "40px" }}>
        <h2>Result</h2>

        <ul>
          {project.result.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>

      <section>
        <h2>Links</h2>

        <div
          style={{
            display: "flex",
            gap: "20px",
            marginTop: "16px",
          }}
        >
          <a href={project.github}>GitHub</a>
          <a href={project.demo}>Demo</a>
        </div>
      </section>
    </div>
  );
}
