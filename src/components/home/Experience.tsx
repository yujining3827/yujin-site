import { useEffect, useRef, useState, type CSSProperties } from "react";

import CountUp from "../CountUp";
import Endpoint from "../Endpoint";
import { useInView } from "../../hooks/useInView";
import { ACTIVITY_LOG, FEATURED_CAREER as career, type Metric } from "../../content/profile";
import styles from "./Experience.module.css";

const activities = ACTIVITY_LOG.filter((entry) => !entry.hidden);

function CompareBars({ compare }: { compare: NonNullable<Metric["compare"]> }) {
  const max = Math.max(compare.before, compare.after);
  const bar = (value: number) => ({ "--w": `${(value / max) * 100}%` }) as CSSProperties;

  return (
    <div className={styles.compare} aria-hidden="true">
      <span className={styles.compareLabel}>before</span>
      <span className={styles.track}>
        <span className={`${styles.fill} ${styles.fillBefore}`} style={bar(compare.before)} />
      </span>
      <span className={styles.compareLabel}>after</span>
      <span className={styles.track}>
        <span className={styles.fill} style={bar(compare.after)} />
      </span>
    </div>
  );
}

// 스크롤 위치에 맞춰 타임라인의 진한 점이 아래로 내려간다.
// 화면 위쪽 40% 지점을 지난 마지막 항목이 현재 항목이 된다.
function useActiveEvent() {
  const listRef = useRef<HTMLOListElement>(null);
  const [active, setActive] = useState(0);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const list = listRef.current;
    if (!list) return;

    // 점이 몇 개 안 되므로 스크롤마다 바로 계산한다
    const update = () => {
      const line = window.innerHeight * 0.4;
      const dots = list.querySelectorAll<HTMLElement>("[data-dot]");
      let next = 0;
      dots.forEach((dot, index) => {
        if (dot.getBoundingClientRect().top <= line) next = index;
      });
      setActive(next);

      // 진행선은 첫 점부터 현재 점까지 채운다
      const listTop = list.getBoundingClientRect().top;
      const first = dots[0]?.getBoundingClientRect().top ?? listTop;
      const current = dots[next]?.getBoundingClientRect().top ?? first;
      setProgress(current - first);
      list.style.setProperty("--start", `${first - listTop + 5}px`);
    };

    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  return { listRef, active, progress };
}

export default function Experience() {
  const [panelRef, panelInView] = useInView<HTMLDivElement>(0.3);
  const { listRef, active, progress } = useActiveEvent();

  return (
    <section id="experience" className={styles.section}>
      <Endpoint
        index="01"
        path="/experience"
        meta={`200 OK · 1 career, ${activities.length} activities`}
        title="문제를 발견하고, 고치고, 숫자로 확인했습니다"
        description="가장 최근의 인턴십에서는 기획·데이터·백엔드를 오가며 가입 퍼널을 직접 개선했습니다."
      />

      <article className={styles.career}>
        <header className={styles.careerHead}>
          <div className={styles.identity}>
            <span className={styles.logo} aria-hidden="true">
              {career.company}
            </span>
            <div>
              <p className={styles.company}>
                {career.company}
                <span className={styles.team}> · {career.team}</span>
              </p>
              <p className={styles.role}>
                <span className={styles.roleTitle}>{career.role}</span>
                {career.keywords.map((keyword) => (
                  <span key={keyword} className={styles.keyword}>
                    {keyword}
                  </span>
                ))}
              </p>
            </div>
          </div>
          <p className={styles.period}>{career.period}</p>
        </header>

        <div className={styles.careerBody}>
          <div className={styles.story}>
            <p className={styles.summary}>{career.summary}</p>

            <ol className={styles.trace}>
              {career.highlights.map((item, index) => (
                <li key={item.step} className={styles.traceItem}>
                  <span className={styles.traceStep}>
                    <span className={styles.traceNo}>{String(index + 1).padStart(2, "0")}</span>
                    {item.step}
                  </span>
                  <p className={styles.traceText}>{item.text}</p>
                </li>
              ))}
            </ol>
          </div>

          <div
            ref={panelRef}
            className={`${styles.panel} ${panelInView ? styles.panelVisible : ""}`}
          >
            <p className={styles.panelBar}>
              <span className={styles.panelFile}>metrics.json</span>
              <span className={styles.panelStatus}>200 OK</span>
            </p>
            <dl className={styles.metrics}>
              {career.metrics.map((metric) => (
                <div key={metric.label} className={styles.metric}>
                  <dt className={styles.metricLabel}>{metric.label}</dt>
                  <dd className={styles.metricValue}>
                    <CountUp value={metric.value} />
                  </dd>
                  <dd className={styles.metricDetail}>{metric.detail}</dd>
                  {metric.compare && (
                    <dd className={styles.metricCompare}>
                      <CompareBars compare={metric.compare} />
                    </dd>
                  )}
                </div>
              ))}
            </dl>
          </div>
        </div>

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
        <ol
          ref={listRef}
          className={styles.timeline}
          style={{ "--progress": `${progress}px` } as CSSProperties}
        >
          <span className={styles.progress} aria-hidden="true" />
          {activities.map((entry, index) => (
            <li
              key={entry.title + entry.period}
              className={`${styles.event} ${index === active ? styles.eventActive : ""} ${
                index < active ? styles.eventPassed : ""
              }`}
              aria-current={index === active ? "step" : undefined}
            >
              <span className={styles.eventPeriod}>{entry.period}</span>
              <span className={styles.eventDot} data-dot aria-hidden="true" />
              <div className={styles.eventBody}>
                <p className={styles.eventHeading}>
                  {entry.title}
                  <span className={styles.eventRole}>{entry.role}</span>
                </p>
                {entry.note && <p className={styles.eventNote}>{entry.note}</p>}
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
