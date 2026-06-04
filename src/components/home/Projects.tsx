import { useNavigate } from "react-router-dom";

const projects = [
    {
      slug: "moca",
      title: "MOCA",
      image: "/moca.png",
      tags: ["Backend", "Spring Boot", "Hackathon"],
      description:
        "소상공인을 위한 경영 컨설턴트 Agent 서비스",
    },
    {
      slug: "today-market",
      title: "오늘 시장은",
      image: "/todaymarket.png",
      tags: ["PM", "Backend", "Data"],
      description:
        "경제 초보자를 위한 시장 흐름 해석 플랫폼",
    },
    {
      slug: "donworry",
      title: "돈워리",
      image: "/donworry.png",
      tags: ["PM", "Frontend", "React"],
      description:
        "대학생 금융 교육 서비스",
    },
    {
      slug: "ddadang",
      title: "DDADANG",
      image: "/ddadang.png",
      tags: ["Backend", "Healthcare"],
      description:
        "혈당관리 지속화를 위한 플랫폼",
    },
  ];

  export default function Projects() {
    const navigate = useNavigate();
  
    return (
      <section style={{ marginTop: "100px" }}>
        <h2
          style={{
            fontSize: "2rem",
            marginBottom: "16px",
          }}
        >
          Featured Projects
        </h2>
  
        <p
          style={{
            color: "#666",
            marginBottom: "40px",
          }}
        >
          사용자 문제를 해결하기 위해 참여했던 주요 프로젝트입니다.
        </p>
  
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(2, 1fr)",
            gap: "24px",
          }}
        >
          {projects.map((project) => (
            <div
              key={project.title}
              onClick={() => navigate(`/projects/${project.slug}`)}
              style={{
                border: "1px solid #eee",
                borderRadius: "16px",
                overflow: "hidden",
                background: "#fff",
                cursor: "pointer",
  
                transition:
                  "transform 0.25s ease, box-shadow 0.25s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-6px)";
                e.currentTarget.style.boxShadow =
                  "0 20px 40px rgba(0,0,0,0.08)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "none";
              }}
            >
              <div
                style={{
                  overflow: "hidden",
                }}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  style={{
                    width: "100%",
                    height: "220px",
                    objectFit: "cover",
                    transition: "transform 0.3s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "scale(1.03)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "scale(1)";
                  }}
                />
              </div>
  
              <div style={{ padding: "20px" }}>
                <h3
                  style={{
                    marginBottom: "12px",
                    fontSize: "1.8rem",
                  }}
                >
                  {project.title}
                </h3>
  
                <div
                  style={{
                    display: "flex",
                    flexWrap: "wrap",
                    gap: "8px",
                    marginBottom: "16px",
                  }}
                >
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      style={{
                        fontSize: "12px",
                        padding: "6px 12px",
                        borderRadius: "999px",
                        background: "#f5f5f5",
                        color: "#666",
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
  
                <p
                  style={{
                    color: "#666",
                    lineHeight: 1.6,
                    marginBottom: "16px",
                  }}
                >
                  {project.description}
                </p>
  
                <div
                  style={{
                    color: "#888",
                    fontSize: "14px",
                    fontWeight: 500,
                  }}
                >
                  View Project →
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    );
  }
