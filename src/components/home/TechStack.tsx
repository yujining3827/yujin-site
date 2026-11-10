import Endpoint from "../Endpoint";
import { STACK } from "../../content/profile";
import styles from "./TechStack.module.css";

export default function TechStack() {
  const total = STACK.reduce((sum, group) => sum + group.items.length, 0);

  return (
    <section id="stack" className={styles.section}>
      <Endpoint
        index="04"
        path="/stack"
        meta={`200 OK · ${total} fields`}
        title="실제 프로젝트에서 써본 기술"
        description="응답 스키마처럼, 손에 익은 순서대로 정리했습니다."
      />

      <div className={styles.editor}>
        <div className={styles.bar}>
          <span className={styles.close} />
          <span className={styles.minimize} />
          <span className={styles.zoom} />
          <p className={styles.tab}>
            <span className={styles.tabIcon}>TS</span> stack.d.ts
          </p>
        </div>

        <ol className={styles.code}>
          <li className={styles.line}>
            <span className={styles.keyword}>export interface</span>{" "}
            <span className={styles.type}>Stack</span> {"{"}
          </li>
          {STACK.map((group) => (
            <li key={group.key} className={`${styles.line} ${styles.field}`}>
              <span className={styles.key}>{group.key}</span>
              <span className={styles.punct}>: [</span>
              <span className={styles.items}>
                {group.items.map((item, index) => (
                  <span key={item} className={styles.item}>
                    <span className={styles.string}>"{item}"</span>
                    {index < group.items.length - 1 && (
                      <span className={styles.punct}>,</span>
                    )}
                  </span>
                ))}
              </span>
              <span className={styles.punct}>];</span>
            </li>
          ))}
          <li className={styles.line}>{"}"}</li>
        </ol>
      </div>
    </section>
  );
}
