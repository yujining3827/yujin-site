import type { CSSProperties } from "react";
import { Link } from "react-router-dom";

import { PROFILE } from "../../content/profile";
import styles from "./About.module.css";

type Value = string | number | string[];

const RESPONSE: [string, Value][] = [
  ["name", PROFILE.name],
  ["role", PROFILE.roles],
  ["stack", ["Java", "Spring Boot", "JPA", "MySQL"]],
  ["approach", "문제 정의 → API 구현 → 지표 확인"],
  ["recent_impact", "가입 CAC −45% @FYI"],
  ["award", "ACK 2026 정총연합회 회장상"],
];

function renderValue(value: Value) {
  if (Array.isArray(value)) {
    return (
      <>
        [
        {value.map((item, index) => (
          <span key={item}>
            <span className={styles.string}>"{item}"</span>
            {index < value.length - 1 && ", "}
          </span>
        ))}
        ]
      </>
    );
  }
  if (typeof value === "number") {
    return <span className={styles.number}>{value}</span>;
  }
  return <span className={styles.string}>"{value}"</span>;
}

function Prompt() {
  return (
    <>
      <span className={styles.user}>yujin@dev-ing</span>{" "}
      <span className={styles.cwd}>~</span> %
    </>
  );
}

export default function About() {
  // 터미널 줄이 위에서부터 순서대로 찍히도록 줄마다 지연을 준다
  let line = 0;
  const next = () => ({ "--line": line++ }) as CSSProperties;

  return (
    <section className={styles.hero}>
      <div className={styles.copy}>
        <p className={styles.eyebrow}>
          Backend Developer · AI Product
        </p>
        <h1 className={styles.title}>
          문제를 <span className={styles.mark}>요청</span>으로 받고,
          <br />
          결과로 <span className={`${styles.mark} ${styles.markAlt}`}>응답</span>하는
          <br />
          백엔드 개발자 정유진입니다.
        </h1>
        <p className={styles.lead}>
          사용자를 만나 문제를 다시 정의하고, Spring 기반 API로 구현하고, 행동
          데이터로 결과를 확인합니다. 기획부터 지표까지 하나의 흐름으로
          책임지는 개발을 좋아합니다.
        </p>
        <div className={styles.actions}>
          <a href="#projects" className={styles.primary}>
            프로젝트 보기
          </a>
          <Link to="/blog" className={styles.secondary}>
            아티클 읽기 →
          </Link>
        </div>
        <p className={styles.meta}>
          {PROFILE.school} · {PROFILE.graduation}
        </p>
      </div>

      <div className={styles.terminal} role="img" aria-label="정유진 프로필을 JSON 응답으로 표현한 터미널">
        <div className={styles.bar}>
          <span className={styles.close} />
          <span className={styles.minimize} />
          <span className={styles.zoom} />
          <p className={styles.barTitle}>yujin — -zsh — 80×24</p>
        </div>
        <pre className={styles.screen} aria-hidden="true">
          <code>
            <span className={styles.line} style={next()}>
              <Prompt /> curl -i localhost:8080/api/v1/me
            </span>
            <span className={styles.line} style={next()}>
              HTTP/1.1 <span className={styles.status}>200 OK</span>
            </span>
            <span className={styles.line} style={next()}>
              <span className={styles.header}>Content-Type</span>: application/json
            </span>
            <span className={styles.line} style={next()}>
              <span className={styles.header}>X-Powered-By</span>: Spring Boot
            </span>
            <span className={styles.line} style={next()}>{" "}</span>
            <span className={styles.line} style={next()}>{"{"}</span>
            {RESPONSE.map(([key, value], index) => (
              <span key={key} className={styles.line} style={next()}>
                {"  "}
                <span className={styles.key}>"{key}"</span>: {renderValue(value)}
                {index < RESPONSE.length - 1 && ","}
              </span>
            ))}
            <span className={styles.line} style={next()}>{"}"}</span>
            <span className={styles.line} style={next()}>
              <Prompt /> <span className={styles.caret} />
            </span>
          </code>
        </pre>
      </div>
    </section>
  );
}
