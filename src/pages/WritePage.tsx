import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { getPosts, savePosts } from "../data/posts";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

export default function WritePage() {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
  
    const navigate = useNavigate();
  
    function handleSubmit() {
      const posts = getPosts();
  
      const newPost = {
        id: Date.now(),
        title,
        content,
        date: new Date().toISOString().slice(0, 10),
      };
  
      savePosts([newPost, ...posts]);
  
      navigate("/");
    }
  
    return (
      <div style={{ maxWidth: "900px", margin: "0 auto", padding: "40px",  }}>
        <Navbar />
        <hr />
  
        <div style={{ marginTop: "20px" }}>
          <Link
            to="/"
            style={{
              textDecoration: "none",
              color: "#000",
              fontSize: "14px",
            }}
          >
            ← 목록으로
          </Link>
        </div>
  
        {/* 👇 핵심: 폼 영역 제한 */}
        <div
          style={{
            maxWidth: "720px",
            marginTop: "40px",
            marginBottom: "80px",
          }}
        >
          <h2 style={{ marginBottom: "30px" }}>글 작성</h2>
  
          {/* 제목 */}
          <input
            placeholder="제목을 입력하세요"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            style={{
              width: "100%",
              padding: "12px",
              fontSize: "16px",
              border: "1px solid #ddd",
              borderRadius: "8px",
              marginBottom: "20px",
              boxSizing: "border-box", // 👈 중요
            }}
          />
  
          {/* 내용 */}
          <textarea
            placeholder="내용을 입력하세요"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            style={{
              width: "100%",
              height: "300px",
              padding: "12px",
              fontSize: "15px",
              border: "1px solid #ddd",
              borderRadius: "8px",
              lineHeight: "1.6",
              resize: "none",
              boxSizing: "border-box", // 👈 중요
            }}
          />
  
          {/* 버튼 */}
          <div
            style={{
              display: "flex",
              justifyContent: "flex-end",
              marginTop: "20px",
            }}
          >
            <button
              onClick={handleSubmit}
              style={{
                padding: "10px 18px",
                borderRadius: "8px",
                border: "none",
                backgroundColor: "#000",
                color: "#fff",
                cursor: "pointer",
                fontSize: "14px",
              }}
            >
              작성 완료
            </button>
          </div>
        </div>
  
        <hr
          style={{
            marginTop: "100px",
            marginBottom: "20px",
          }}
        />
  
        <Footer />
      </div>
    );
  }