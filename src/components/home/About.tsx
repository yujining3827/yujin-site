export default function About() {

  const linkStyle = {
    display: "inline-flex",
    alignItems: "center",
    gap: "6px",
    textDecoration: "none",
    color: "#000",
    fontSize: "13px",
    marginRight: "12px",
  };

  const iconStyle = {
    width: "16px",
    height: "16px",
  };

  return (
    <div>

      {/* Intro */}
      <section style={{ marginBottom: "36px" }}>
        <h1
          style={{
            fontSize: "2.2rem",
            fontWeight: 700,
            lineHeight: 1.3,
            marginBottom: "12px",
          }}
        >
          사용자의 문제를 해결하는   <br />
          백엔드 개발자 정유진입니다.
        </h1>

        <p
          style={{
            fontSize: "1.6rem",
            fontWeight: 500,
            color: "#666",
            marginBottom: "32px",
          }}
        >
          기획부터 개발까지 하나의 흐름으로 이해하고 구현하는 것을 좋아합니다.
        </p>
      </section>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "28px",
          marginBottom: "48px",
          fontSize: "18px",
          lineHeight: 1.4,
          maxWidth: "800px",
        }}
      >
      <p style={{ margin: 0 }}>
        프로젝트에서 PM과 백엔드 개발을 맡으며 
        사용자의 문제를 정의하고 해결하는 과정을 경험했습니다. <br />
        단순히 기능을 구현하는 것을 넘어,
        왜 이 기능이 필요한지 고민하며 서비스를 만들어갑니다.
      </p>
      
    </div>

      {/* Profile */}
      <section
        style={{
          display: "flex",
          gap: "48px",
          alignItems: "flex-start",
          justifyContent: "center",
        }}
      >
        <img
          src="/image.png"
          alt="profile"
          style={{
            width: "340px",
            height: "340px",
            objectFit: "cover",
          }}
        />

        <div style={{ flex: 1 }}>

          {/* Keywords */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "24px",
              marginBottom: "36px",
              fontSize: "18px",
            }}
          >
            <p style={{ margin: 0 }}>
              현재는 AI와 생산성·교육 도메인에 관심을 가지고 있으며,<br />
              사용자에게 실제로 도움이 되는 제품을 만드는 데 <br />
              집중하고 있습니다.
            </p>
          </div>


          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "10px",
              marginBottom: "28px",
              fontSize: "20px",
              fontWeight: 600,
              color: "#222",
            }}
          >
            <span>👩‍💻 PM & Backend Development</span>
            <span>🤖 AI · Education Technology</span>
            <span>🚀 Product Thinking</span>
          </div>

          {/* Info */}
          <div
            style={{
              paddingTop: "16px",
            }}
          >
            <p
              style={{
                margin: "0 0 8px 0",
                color: "#555",
              }}
            >
              🎓 서울여자대학교 소프트웨어융합학과
            </p>

            <p
              style={{
                margin: "0 0 10px 0",
                color: "#555",
              }}
            >
              📧 j_yujin_swu22@naver.com
            </p>

            <div
              style={{
                display: "flex",
                gap: "10px",
                flexWrap: "wrap",
              }}
            >
              <a
                href="https://github.com/yujining3827"
                target="_blank"
                rel="noopener noreferrer"
                style={linkStyle}
              >
                <img src="/github.svg" style={iconStyle} />
                GitHub
              </a>

              <a
                href="https://velog.io/@yujindeang_/posts"
                target="_blank"
                rel="noopener noreferrer"
                style={linkStyle}
              >
                <img src="/velog.png" style={iconStyle} />
                Velog
              </a>

              <a
                href="https://www.instagram.com/yujindeang_/"
                target="_blank"
                rel="noopener noreferrer"
                style={linkStyle}
              >
                <img src="/instagram.svg" style={iconStyle} />
                Instagram
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}