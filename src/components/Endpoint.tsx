import type { ReactNode } from "react";

import styles from "./Endpoint.module.css";

type Props = {
  method?: "GET" | "POST";
  path: string;
  title: ReactNode;
  description?: ReactNode;
  as?: "h1" | "h2";
};

// 사이트 공통 섹션 헤더. 모든 섹션을 API 엔드포인트처럼 표기한다.
export default function Endpoint({
  method = "GET",
  path,
  title,
  description,
  as: Heading = "h2",
}: Props) {
  return (
    <header className={styles.endpoint}>
      <p className={styles.request}>
        <span className={`${styles.method} ${method === "POST" ? styles.post : ""}`}>
          {method}
        </span>
        <span className={styles.path}>{path}</span>
      </p>
      <Heading className={styles.title}>{title}</Heading>
      {description && <p className={styles.description}>{description}</p>}
    </header>
  );
}
