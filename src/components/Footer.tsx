export default function Footer() {
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
    <footer style={{ fontSize: "14px" }}>
      <div style={{ marginBottom: "10px" }}>
        
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

      <p>
        협업 제안 문의 :{" "}
        <a
          href="mailto:j_yujin_swu22@naver.com"
          style={{ textDecoration: "none", color: "#000" }}
        >
          j_yujin_swu22@naver.com
        </a>
      </p>

      <p>© 2026 Dev.ing</p>
    </footer>
  );
}