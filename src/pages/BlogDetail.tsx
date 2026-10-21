import { Link, useParams } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

import { getPostBySlug } from "../lib/posts";
import styles from "./BlogDetail.module.css";

export default function BlogDetail() {
  const { slug } = useParams<{ slug: string }>();
  const post = slug ? getPostBySlug(slug) : undefined;

  if (!post) {
    return (
      <div className={styles.notFound}>
        <p className={styles.notFoundCode}>404 Not Found</p>
        <p>글을 찾을 수 없습니다.</p>
        <Link to="/blog" className={styles.back}>
          ← 아티클 목록으로
        </Link>
      </div>
    );
  }

  return (
    <article className={styles.article}>
      <Link to="/blog" className={styles.back}>
        ← /articles
      </Link>

      <header className={styles.header}>
        <h1 className={styles.title}>{post.title}</h1>
        <p className={styles.meta}>
          <time dateTime={post.date}>{post.date.replaceAll("-", ".")}</time>
          {post.tags.map((tag) => (
            <span key={tag} className={styles.tag}>
              #{tag}
            </span>
          ))}
        </p>
      </header>

      <div className={styles.body}>
        <ReactMarkdown remarkPlugins={[remarkGfm]}>{post.content}</ReactMarkdown>
      </div>

      <footer className={styles.end}>
        <span className={styles.endCode}>EOF</span>
        <Link to="/blog" className={styles.back}>
          다른 아티클 보기 →
        </Link>
      </footer>
    </article>
  );
}
