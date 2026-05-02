import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const location = useLocation();
  const isAbout = location.pathname === "/about";

  const isAdmin = localStorage.getItem("isAdmin") === "true";

  return (
    <header
      style={{
        display: "flex",
        justifyContent: "space-between", // 좌우 분리
        alignItems: "center",
        marginBottom: "30px",
      }}
    >
      {/* 왼쪽 (로고) */}
      <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
        {/* 프로필 이미지 */}
        <img
          src="/profile.png"
          alt="profile"
          style={{
            width: "32px",
            height: "32px",
            borderRadius: "50%", 
            objectFit: "cover",
          }}
        />

        {/* 텍스트 */}
        <Link
          to="/"
          style={{
            textDecoration: "none",
            color: "#000",
          }}
        >
          <h2
            style={{
              margin: 0,
              fontWeight: 600,
            }}
          >
            Dev.ing
          </h2>
        </Link>
      </div>

      {/* 오른쪽 (메뉴) */}
      <nav>
        <Link
          to={isAbout ? "/" : "/about"}
          style={{
            marginRight: "16px",
            textDecoration: "none",
            color: "#000",
            fontSize: "16px",
            fontWeight: 600,
          }}
        >
          {isAbout ? "Article" : "About me"}
        </Link>

        {isAdmin ? (
          <Link 
            to="/write"
            style={{
              padding: "6px 12px",
              border: "1px solid #ccc",
              borderRadius: "6px",
              textDecoration: "none",
              color: "#000",
              cursor: "pointer",
            }}
          >
            글 작성
          </Link>
        ) : (
          <button
            onClick={() => alert("🚧 아직 개발 중인 기능입니다.")}
            style={{
              padding: "6px 12px",
              border: "1px solid #ccc",
              borderRadius: "6px",
              background: "transparent",
              color: "#000",
              cursor: "pointer",
              fontSize: "14px",
            }}
          >
            구독하기
          </button>
        )}
      </nav>
    </header>
  );
}