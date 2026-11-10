import { useState } from "react";
import { Link } from "react-router-dom";

import Endpoint from "../Endpoint";
import { MORE_PROJECTS, PROJECTS, STATUS_LABEL, type Project } from "../../content/projects";
import styles from "./Projects.module.css";

/** 대표작 1개 + 그 아래 3열 한 줄. 나머지는 "View more"로 펼친다 */
const INITIAL_COUNT = 4;

function Cover({ project, featured }: { project: Project; featured?: boolean }) {
  const wide = featured ? project.featuredImage : undefined;
  return (
    <div className={`${styles.cover} ${wide ? styles.hasWide : ""}`}>
      {wide && <img src={wide} alt="" className={styles.wideImage} loading="lazy" />}
      {project.image ? (
        <img src={project.image} alt="" className={styles.image} loading="lazy" />
      ) : (
        <div className={styles.placeholder} aria-hidden="true">
          <span className={styles.placeholderPath}>GET /projects/{project.slug}</span>
          <span className={styles.placeholderTitle}>{project.title}</span>
        </div>
      )}
      <span className={`${styles.status} ${project.status === "wip" ? styles.statusWip : ""}`}>
        {STATUS_LABEL[project.status]}
      </span>
    </div>
  );
}

function TechList({ tech, limit }: { tech: string[]; limit?: number }) {
  if (tech.length === 0) return null;
  const items = limit ? tech.slice(0, limit) : tech;
  return (
    <ul className={styles.tech}>
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
}

export default function Projects() {
  const [expanded, setExpanded] = useState(false);
  const hiddenCount = PROJECTS.length - INITIAL_COUNT;
  const visible = expanded ? PROJECTS : PROJECTS.slice(0, INITIAL_COUNT);

  return (
    <section id="projects" className={styles.section}>
      <Endpoint
        index="02"
        path="/projects"
        meta={`200 OK · ${PROJECTS.length} items`}
        title="사용자를 만나고, 방향을 바꾸고, 끝까지 구현한 프로젝트"
        description="처음 아이디어에 머무르지 않고 사용자 조사로 문제를 다시 정의한 과정을 함께 기록했습니다."
      />

      <ol className={styles.grid}>
        {visible.map((project, index) => {
          const featured = index === 0;
          const number = String(index + 1).padStart(2, "0");

          return (
            <li key={project.slug} className={featured ? styles.featuredItem : undefined}>
              <Link
                to={`/projects/${project.slug}`}
                className={`${styles.card} ${featured ? styles.featured : ""}`}
              >
                <Cover project={project} featured={featured} />

                <div className={styles.body}>
                  <p className={styles.meta}>
                    <span className={styles.number}>{number}</span>
                    <span>{project.period}</span>
                  </p>
                  <h3 className={styles.itemTitle}>
                    {project.title}
                    <span className={styles.arrow} aria-hidden="true">
                      →
                    </span>
                  </h3>
                  <p className={styles.tagline}>{project.tagline}</p>

                  {featured && (
                    <ul className={styles.points}>
                      {project.contribution.slice(0, 3).map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  )}

                  <div className={styles.footer}>
                    {project.badge && <p className={styles.badge}>★ {project.badge}</p>}
                    <p className={styles.role}>{project.role}</p>
                    <TechList tech={project.tech} limit={featured ? undefined : 3} />
                  </div>

                  {featured && (
                    <span className={styles.cta}>
                      자세히 보기 <span aria-hidden="true">→</span>
                    </span>
                  )}
                </div>
              </Link>
            </li>
          );
        })}
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
