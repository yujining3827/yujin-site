import Endpoint from "../Endpoint";
import { ACTIVITY_LOG, FEATURED_CAREER as career } from "../../content/profile";
import styles from "./Experience.module.css";

export default function Experience() {
  return (
    <section id="experience" className={styles.section}>
      <Endpoint
        path="/experience"
        title="문제를 발견하고, 고치고, 숫자로 확인했습니다"
        description="가장 최근의 인턴십에서는 기획·데이터·백엔드를 오가며 가입 퍼널을 직접 개선했습니다."
      />

      <article className={styles.career}>
        <div className={styles.careerHead}>
          <div>
            <p className={styles.company}>
              {career.company}
              <span className={styles.team}> · {career.team}</span>
            </p>
            <p className={styles.role}>{career.role}</p>
          </div>
          <p className={styles.period}>{career.period}</p>
        </div>

        <p className={styles.summary}>{career.summary}</p>

        <dl className={styles.metrics}>
          {career.metrics.map((metric) => (
            <div key={metric.label} className={styles.metric}>
              <dt className={styles.metricLabel}>{metric.label}</dt>
              <dd className={styles.metricValue}>{metric.value}</dd>
              <dd className={styles.metricDetail}>{metric.detail}</dd>
            </div>
          ))}
        </dl>

        <ul className={styles.highlights}>
          {career.highlights.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>

        <div className={styles.tags}>
          {career.tech.map((tech) => (
            <span key={tech} className={styles.tag}>
              {tech}
            </span>
          ))}
        </div>
      </article>

      <div className={styles.log}>
        <p className={styles.logTitle}>
          <span className={styles.logMethod}>GET</span> /experience/activities
        </p>
        <ol className={styles.logList}>
          {ACTIVITY_LOG.map((entry) => (
            <li key={entry.title + entry.period} className={styles.logItem}>
              <span className={styles.logPeriod}>{entry.period}</span>
              <div>
                <p className={styles.logHeading}>
                  {entry.title} <span className={styles.logRole}>{entry.role}</span>
                </p>
                {entry.note && <p className={styles.logNote}>{entry.note}</p>}
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
