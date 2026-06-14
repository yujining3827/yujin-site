import { useState } from "react";

export default function TechStacks() {
  const techStacks = {
    "☕ Java": {
      projects: ["MOCA", "오늘 시장은", "DDADANG"],
      skills: [
        "객체지향 프로그래밍",
        "컬렉션 프레임워크 활용",
      ],
    },

    "🍃 Spring Boot": {
      projects: ["MOCA", "오늘 시장은", "DDADANG"],
      skills: [
        "REST API 설계 및 구현",
        "Spring Security + JWT",
        "JPA / Hibernate",
        "Swagger 문서화",
      ],
    },

    "🐬 MySQL": {
      projects: ["MOCA", "오늘 시장은", "DDADANG"],
      skills: [
        "ERD 설계",
        "정규화",
        "복잡한 조회 쿼리 작성",
      ],
    },

    "⚛️ React": {
      projects: ["돈워리", "오늘 시장은"],
      skills: [
        "컴포넌트 기반 개발",
        "상태 관리",
      ],
    },

    "🔷 TypeScript": {
      projects: ["돈워리"],
      skills: [
        "타입 기반 개발",
        "React와 함께 사용",
      ],
    },

    "🐍 Python": {
      projects: ["GURU1", "MOCA"],
      skills: [
        "기초 알고리즘",
        "데이터 처리",
      ],
    },

    "☁️ AWS": {
      projects: ["DDADANG", "오늘 시장은"],
      skills: [
        "EC2 배포 경험",
        "서버 운영 경험",
      ],
    },

    "🔧 Git": {
      projects: ["모든 팀 프로젝트"],
      skills: [
        "Git Flow",
        "PR 리뷰",
        "협업 경험",
      ],
    },
  };

  const [selected, setSelected] =
    useState<keyof typeof techStacks>("🍃 Spring Boot");

  return (
    <section
      style={{
        marginTop: "100px",
      }}
    >
      <h2
        style={{
          fontSize: "2rem",
          marginBottom: "16px",
        }}
      >
        Tech Stacks
      </h2>

      <p
        style={{
          color: "#666",
          marginBottom: "32px",
        }}
      >
        프로젝트에서 실제 사용한 기술 스택입니다.
      </p>

      {/* 태그 */}
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "12px",
          marginBottom: "32px",
        }}
      >
        {Object.keys(techStacks).map((tech) => (
          <button
            key={tech}
            onClick={() =>
              setSelected(
                tech as keyof typeof techStacks
              )
            }
            style={{
              padding: "10px 18px",
              borderRadius: "999px",
              border: "1px solid #eee",
              cursor: "pointer",

              background:
                selected === tech
                  ? "#111"
                  : "#f7f7f7",

              color:
                selected === tech
                  ? "#fff"
                  : "#444",

              fontSize: "15px",
              fontWeight: 500,

              transition: "all 0.2s ease",
            }}
          >
            {tech}
          </button>
        ))}
      </div>

      {/* 상세 영역 */}
      <div
        style={{
          border: "1px solid #eee",
          borderRadius: "16px",
          padding: "28px",
          background: "#fff",
        }}
      >
        <h3
          style={{
            marginBottom: "20px",
            fontSize: "1.4rem",
          }}
        >
          {selected}
        </h3>

        <div style={{ marginBottom: "20px" }}>
          <h4
            style={{
              fontSize: "14px",
              color: "#888",
              marginBottom: "8px",
            }}
          >
            대표 프로젝트
          </h4>

          <div
            style={{
              display: "flex",
              gap: "8px",
              flexWrap: "wrap",
            }}
          >
            {techStacks[selected].projects.map(
              (project) => (
                <span
                  key={project}
                  style={{
                    padding: "6px 12px",
                    borderRadius: "999px",
                    background: "#f5f5f5",
                    fontSize: "13px",
                  }}
                >
                  {project}
                </span>
              )
            )}
          </div>
        </div>

        <div>
          <h4
            style={{
              fontSize: "14px",
              color: "#888",
              marginBottom: "12px",
            }}
          >
            활용 경험
          </h4>

          <ul
            style={{
              margin: 0,
              paddingLeft: "18px",
              lineHeight: 1.9,
              color: "#555",
            }}
          >
            {techStacks[selected].skills.map(
              (skill) => (
                <li key={skill}>{skill}</li>
              )
            )}
          </ul>
        </div>
      </div>
    </section>
  );
}
