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
    period: "2025.07 - 2025.08",
    role: "Backend Developer",
    description:
      "소상공인을 위한 경영 컨설턴트 Agent 서비스",

    tech: [
      "Spring Boot",
      "JPA",
      "MySQL",
      "AWS",
    ],

    contribution: [
      "예약 관련 API 개발",
      "데이터베이스 설계",
      "백엔드 서버 구조 설계",
    ],

    result: [
      "멋쟁이사자처럼 중앙해커톤 상위 3% 2차 진출",
    ],

    github: "#",
    demo: "#",
  },

  "today-market": {
    title: "오늘 시장은",
    image: "/todaymarket.png",
    period: "2026.06 - Present",
    role: "PM · Backend",

    description:
      "경제 초보자를 위한 시장 흐름 해석 플랫폼",

    tech: [
      "Spring Boot",
      "React",
      "OpenAI",
    ],

    contribution: [
      "서비스 기획",
      "백엔드 API 개발",
      "뉴스레터 자동화 기능 설계",
    ],

    result: [
      "프로젝트 진행 중",
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
          marginBottom: "8px",
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
