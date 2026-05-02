import { useParams } from "react-router-dom";
import { getPosts } from "../data/posts";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

export default function BlogDetail() {
  const { id } = useParams();
  const posts = getPosts();

  const post = posts.find((p) => p.id === Number(id));

  if (!post) return <div>글 없음</div>;

  return (
    <div style={{ padding: "40px 80px" }}>
        <Navbar />
        <hr />
        <br />

        <div style={{ marginBottom: "20px" }}>
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

      <h1>{post.title}</h1>
      <p style={{ color: "#888" }}>{post.date}</p>

      <hr
        style={{
            margin: "20px 0",
            border: "none",
            borderTop: "1px solid #e5e5e5", // 연한 회색
        }}
      />

      <div style={{ marginTop: "20px" }}>
        {post.content}
      </div>

      <hr
          style={{
            marginTop: "100px",
            marginBottom: "20px",
          }}
        />
        
        <Footer/>
      
    </div>
  );
}