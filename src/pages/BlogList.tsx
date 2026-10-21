import { useSearchParams } from "react-router-dom";

import ArticleList from "../components/ArticleList";
import Endpoint from "../components/Endpoint";
import { getAllPosts } from "../lib/posts";
import styles from "./BlogList.module.css";

const PAGE_SIZE = 8;

export default function BlogList() {
  const posts = getAllPosts();
  const [searchParams, setSearchParams] = useSearchParams();

  const totalPages = Math.max(1, Math.ceil(posts.length / PAGE_SIZE));
  const page = Math.min(
    Math.max(1, Number(searchParams.get("page")) || 1),
    totalPages,
  );

  const pagePosts = posts.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);

  const goToPage = (next: number) => {
    if (next === 1) {
      searchParams.delete("page");
    } else {
      searchParams.set("page", String(next));
    }
    setSearchParams(searchParams);
  };

  return (
    <div className={styles.page}>
      <Endpoint
        as="h1"
        path={page === 1 ? "/articles" : `/articles?page=${page}`}
        title="Articles"
        description={`만들면서 고민한 것들을 기록합니다. 총 ${posts.length}개의 글.`}
      />

      {posts.length === 0 ? (
        <p className={styles.empty}>업데이트 될 예정입니다.</p>
      ) : (
        <>
          <ArticleList posts={pagePosts} />

          {totalPages > 1 && (
            <div className={styles.pagination}>
              <button
                className={styles.pageButton}
                onClick={() => goToPage(page - 1)}
                disabled={page === 1}
              >
                ← Prev
              </button>
              <span className={styles.pageStatus}>
                {page} / {totalPages}
              </span>
              <button
                className={styles.pageButton}
                onClick={() => goToPage(page + 1)}
                disabled={page === totalPages}
              >
                Next →
              </button>
            </div>
          )}
        </>
      )}
    </div>
  );
}
