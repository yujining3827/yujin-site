import { Link } from "react-router-dom";

import ArticleList from "../ArticleList";
import Endpoint from "../Endpoint";
import { getAllPosts } from "../../lib/posts";
import styles from "./Articles.module.css";

const LATEST_COUNT = 3;

export default function Articles() {
  const posts = getAllPosts();

  return (
    <section id="articles" className={styles.section}>
      <Endpoint
        path={`/articles?limit=${LATEST_COUNT}`}
        title="만들면서 배운 것을 기록합니다"
        description="문제를 풀며 고민한 과정과 기술적인 선택의 이유를 아티클로 정리합니다."
      />

      {posts.length === 0 ? (
        <p className={styles.empty}>
          <code>[]</code> 아직 공개된 아티클이 없어요.
        </p>
      ) : (
        <ArticleList posts={posts.slice(0, LATEST_COUNT)} />
      )}

      <Link to="/blog" className={styles.all}>
        전체 아티클 보기 <span aria-hidden="true">→</span>
      </Link>
    </section>
  );
}
