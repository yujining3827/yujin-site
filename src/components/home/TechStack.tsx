import Endpoint from "../Endpoint";
import { STACK } from "../../content/profile";
import styles from "./TechStack.module.css";

export default function TechStack() {
  return (
    <section id="stack" className={styles.section}>
      <Endpoint
        path="/stack"
        title="실제 프로젝트에서 써본 기술"
        description="응답 스키마처럼, 손에 익은 순서대로 정리했습니다."
      />

      <div className={styles.schema}>
        <p className={styles.schemaHead}>
          <span className={styles.keyword}>interface</span>{" "}
          <span className={styles.type}>Stack</span> {"{"}
        </p>
        <dl className={styles.groups}>
          {STACK.map((group) => (
            <div key={group.key} className={styles.group}>
              <dt className={styles.key}>{group.key}:</dt>
              <dd className={styles.items}>
                {group.items.map((item) => (
                  <span key={item} className={styles.item}>
                    {item}
                  </span>
                ))}
              </dd>
            </div>
          ))}
        </dl>
        <p className={styles.schemaHead}>{"}"}</p>
      </div>
    </section>
  );
}
