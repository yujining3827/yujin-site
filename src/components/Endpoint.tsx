import type { ReactNode } from "react";

import styles from "./Endpoint.module.css";

type Props = {
  method?: "GET" | "POST";
  path: string;
  title: ReactNode;
  description?: ReactNode;
  as?: "h1" | "h2";
  /** 홈 섹션 순번 (예: "01") */
  index?: string;
  /** 요청 줄 오른쪽에 붙는 응답 요약 (예: "200 OK · 6 items") */
  meta?: string;
};

// 사이트 공통 섹션 헤더. 모든 섹션을 API 엔드포인트처럼 표기한다.
export default function Endpoint({
  method = "GET",
  path,
  title,
  description,
  as: Heading = "h2",
  index,
  meta,
}: Props) {
  return (
    <header className={styles.endpoint}>
      <div className={styles.requestRow}>
        {index && <span className={styles.index}>{index}</span>}
        <p className={styles.request}>
          <span className={`${styles.method} ${method === "POST" ? styles.post : ""}`}>
            {method}
          </span>
          <span className={styles.path}>{path}</span>
        </p>
        {meta && (
          <span className={styles.meta}>
            <span className={styles.metaDot} aria-hidden="true" />
            {meta}
          </span>
        )}
      </div>
      <Heading className={styles.title}>{title}</Heading>
      {description && <p className={styles.description}>{description}</p>}
    </header>
  );
}
