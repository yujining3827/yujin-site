import { Link } from "react-router-dom";

import type { Post } from "../lib/posts";
import styles from "./ArticleList.module.css";

export default function ArticleList({ posts }: { posts: Post[] }) {
  return (
    <ul className={styles.list}>
      {posts.map((post) => (
        <li key={post.slug}>
          <Link to={`/post/${post.slug}`} className={styles.item}>
            <time className={styles.date} dateTime={post.date}>
              {post.date.replaceAll("-", ".")}
            </time>
            <div className={styles.body}>
              <h3 className={styles.title}>{post.title}</h3>
              {post.description && <p className={styles.description}>{post.description}</p>}
              {post.tags.length > 0 && (
                <div className={styles.tags}>
                  {post.tags.map((tag) => (
                    <span key={tag} className={styles.tag}>
                      #{tag}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </Link>
        </li>
      ))}
    </ul>
  );
}
