import { useState } from "react";
import BlogList from "./BlogList";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function AdminPage() {
  const [isAdmin, setIsAdmin] = useState(
    localStorage.getItem("isAdmin") === "true"
  );

  function handleLogin() {
    const password = prompt("관리자 비밀번호 입력");

    if (password === "Iloveyou") {
      localStorage.setItem("isAdmin", "true");
      setIsAdmin(true);
    } else {
      alert("비밀번호 틀림");
    }
  }

  // 로그인 안 된 상태
  if (!isAdmin) {
    return (
      <div style={{ padding: "40px 80px" }}>

        <Navbar />
        <hr />

        <div style={{ padding: "80px" }}>
          <h2 style={{ marginBottom: "20px", textAlign: "center" }}>관리자 페이지</h2>

          <p style={{ marginBottom: "20px", textAlign: "center", color: "#666" }}>
            관리자만 접근 가능합니다
          </p>

          <button onClick={handleLogin}
            style={{
              display: "block",
              margin: "0 auto",
              padding: "8px 16px",
              border: "1px solid #ccc",
              borderRadius: "6px",
              cursor: "pointer",
            }}
          >
            관리자 로그인
          </button>
        </div>

        <hr style={{ margin: "40px 0" }} />
        <Footer />
      </div>
    );
  }

  // 로그인 된 상태
  return <BlogList />;
}