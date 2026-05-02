import { Link } from "react-router-dom";
import { getPosts } from "../data/posts";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function BlogList() {

  const posts = getPosts();

  return (
    <div style={{ maxWidth: "900px", margin: "0 auto", padding: "40px", }}>
      
      <Navbar />
      <hr />

      {/* Post List (왼쪽 정렬) */}
      <ul style={{ 
        listStyle: "none", 
        paddingLeft: "0px", 
        marginTop: posts.length === 0 ? "140px" : "30px",}}
      >
        {posts.length === 0 ? (
          <li style={{ color: "#888",textAlign: "center" }}>등록된 글이 없습니다.</li>
        ) : (
          posts.map((post) => {
            const isNew =
              post.date === new Date().toISOString().slice(0, 10);

            return (
              <li key={post.id} style={{ marginBottom: "14px" }}>
                <Link
                  to={`/post/${post.id}`}
                  style={{
                    textDecoration: "none",
                    color: "#000",
                    marginRight: "8px",
                  }}
                >
                  {post.title}
                </Link>

                {isNew && (
                  <span style={{ color: "red", fontSize: "12px" }}>
                    ✦ new
                  </span>
                )}

                <span
                  style={{
                    marginLeft: "10px",
                    color: "#888",
                    fontSize: "13px",
                  }}
                >
                  {post.date}
                </span>
              </li>
            );
          })
        )}
      </ul>

      {/* Pagination */}
      <div style={{ marginTop: "100px" }}>
        <span style={{ marginRight: "10px", color: "#aaa" }}>←</span>
        <span>→</span>
      </div>

      <hr
        style={{
          marginTop: "20px",   // 위만 크게 띄움
          marginBottom: "20px", // 아래는 좁게
        }}
      />
      {/* Footer (왼쪽 정렬) */}
      <Footer />
    </div>
  );
}