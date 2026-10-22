import { useState } from "react";
import { Link } from "react-router-dom";

import Endpoint from "../Endpoint";
import { MORE_PROJECTS, PROJECTS, STATUS_LABEL } from "../../content/projects";
import styles from "./Projects.module.css";

const INITIAL_COUNT = 4;

export default function Projects() {
  const [expanded, setExpanded] = useState(false);
  const hiddenCount = PROJECTS.length - INITIAL_COUNT;
  const visible = expanded ? PROJECTS : PROJECTS.slice(0, INITIAL_COUNT);

  return (
    <section id="projects" className={styles.section}>
      <Endpoint
        path="/projects"
        title="사용자를 만나고, 방향을 바꾸고, 끝까지 구현한 프로젝트"
        description="처음 아이디어에 머무르지 않고 사용자 조사로 문제를 다시 정의한 과정을 함께 기록했습니다."
      />

      <ol className={styles.grid}>
        {visible.map((project, index) => (
          <li key={project.slug}>
            <Link to={`/projects/${project.slug}`} className={styles.card}>
              <div className={styles.cover}>
                {project.image ? (
                  <img src={project.image} alt="" className={styles.image} loading="lazy" />
                ) : (
                  <div className={styles.placeholder} aria-hidden="true">
                    <span className={styles.placeholderPath}>
                      GET /projects/{project.slug}
                    </span>
                    <span className={styles.placeholderTitle}>{project.title}</span>
                  </div>
                )}
                <span
                  className={`${styles.status} ${project.status === "wip" ? styles.statusWip : ""}`}
                >
                  {STATUS_LABEL[project.status]}
                </span>
              </div>

              <div className={styles.body}>
                <p className={styles.meta}>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <span>{project.period}</span>
                </p>
                <h3 className={styles.itemTitle}>
                  {project.title}
                  <span className={styles.arrow} aria-hidden="true">
                    →
                  </span>
                </h3>
                <p className={styles.tagline}>{project.tagline}</p>

                <div className={styles.footer}>
                  {project.badge && <p className={styles.badge}>★ {project.badge}</p>}
                  <p className={styles.role}>{project.role}</p>
                </div>
              </div>
            </Link>
          </li>
        ))}
      </ol>

      {hiddenCount > 0 && (
        <button
          type="button"
          className={styles.toggle}
          onClick={() => setExpanded((prev) => !prev)}
          aria-expanded={expanded}
        >
          <span
            className={`${styles.chevron} ${expanded ? styles.chevronUp : ""}`}
            aria-hidden="true"
          >
            &gt;
          </span>
          {expanded ? "View less" : "View more"}
        </button>
      )}

      <div className={styles.more}>
        <p className={styles.moreTitle}>그 밖의 프로젝트</p>
        <ul className={styles.moreList}>
          {MORE_PROJECTS.map((project) => (
            <li key={project.title}>
              <span className={styles.moreName}>{project.title}</span>
              <span className={styles.moreNote}>{project.note}</span>
              <span className={styles.moreYear}>{project.year}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
