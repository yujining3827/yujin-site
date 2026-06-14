export default function Experience() {
    const timeline = {
      "2026": [
        "오늘 시장은 | 개인프로젝트",
        "(미정) | UMC 10기 프로젝트",
        "따당 | 메디컬 창업동아리 프로젝트",
        "덴트루스 | 메디컬 창업동아리 프로젝트",
        "돈워리 | SWUWEB 프로젝트",
      ],
      "2025": [
        "MOCA | 멋쟁이사자처럼 중앙해커톤 상위 3% 2차 진출",
        "GURU2 Android | 팀 우수상 수상",
        "축제 사이트 | 서울여자대학교 운영진 프로젝트",
        "Curio | 프로젝트종합설계1",
        "GURU1 Python/HTML | 개인상 수상",
      ],
      "2024": [
        "STACKPOT | PM",
        // "(주)유락 | Backend Intern",
        "UMC Plan 파트 스터디",
      ],
    };
  
    return (
      <section style={{ marginTop: "80px", marginBottom: "80px" }}>
        <h2
          style={{
            fontSize: "2rem",
            marginBottom: "16px",
          }}
        >
          Experience
        </h2>
  
        {/* Timeline */}
        <div style={{ marginBottom: "60px" }}>
          <h3
            style={{
              fontSize: "1.3rem",
              marginBottom: "24px",
            }}
          >
            Timeline
          </h3>
  
          {Object.entries(timeline).map(([year, items]) => (
            <div
              key={year}
              style={{
                display: "flex",
                marginBottom: "28px",
              }}
            >
              <div
                style={{
                  width: "80px",
                  fontWeight: 700,
                  color: "#222",
                  flexShrink: 0,
                }}
              >
                {year}
              </div>
  
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "10px",
                  color: "#555",
                }}
              >
                {items.map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
  
        {/* Leadership */}
        <div>
          <h3
            style={{
              fontSize: "1.3rem",
              marginBottom: "24px",
            }}
          >
            Leadership
          </h3>
  
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "20px",
            }}
          >
            <div>
              <p
                style={{
                  margin: 0,
                  fontWeight: 600,
                }}
              >
                멋쟁이사자처럼 서울여자대학교 백엔드 운영진
              </p>
              <p
                style={{
                  margin: "4px 0 0",
                  color: "#777",
                  fontSize: "14px",
                }}
              >
                2024.12 - 2025.12
              </p>
            </div>
  
            <div>
              <p
                style={{
                  margin: 0,
                  fontWeight: 600,
                }}
              >
                멋쟁이사자처럼 중앙운영단
              </p>
              <p
                style={{
                  margin: "4px 0 0",
                  color: "#777",
                  fontSize: "14px",
                }}
              >
                2024.01 - 2025.12
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  }