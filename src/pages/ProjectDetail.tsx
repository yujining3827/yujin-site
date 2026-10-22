import { Link, useParams } from "react-router-dom";

import Endpoint from "../components/Endpoint";
import { PROJECTS, STATUS_LABEL, getProjectBySlug } from "../content/projects";
import styles from "./ProjectDetail.module.css";

export default function ProjectDetail() {
  const { slug } = useParams<{ slug: string }>();
  const project = slug ? getProjectBySlug(slug) : undefined;

  if (!project) {
    return (
      <div className={styles.notFound}>
        <p className={styles.notFoundCode}>404 Not Found</p>
        <p>프로젝트를 찾을 수 없습니다.</p>
        <Link to="/#projects" className={styles.back}>
          ← 프로젝트 목록으로
        </Link>
      </div>
    );
  }

  const index = PROJECTS.indexOf(project);
  const nextProject = PROJECTS[(index + 1) % PROJECTS.length];

  return (
    <article className={styles.page}>
      <Link to="/#projects" className={styles.back}>
        ← /projects
      </Link>

      <div className={styles.head}>
        <Endpoint as="h1" path={`/projects/${project.slug}`} title={project.title} />
        <p className={styles.tagline}>{project.tagline}</p>
      </div>

      <dl className={styles.headers}>
        <div>
          <dt>status</dt>
          <dd className={styles.status}>{STATUS_LABEL[project.status]}</dd>
        </div>
        <div>
          <dt>period</dt>
          <dd>{project.period}</dd>
        </div>
        <div>
          <dt>role</dt>
          <dd>{project.role}</dd>
        </div>
        {project.badge && (
          <div>
            <dt>highlight</dt>
            <dd>{project.badge}</dd>
          </div>
        )}
      </dl>

      {project.image && (
        <img src={project.image} alt={`${project.title} 화면`} className={styles.cover} />
      )}

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>
          <span>01</span> Overview
        </h2>
        <p className={styles.description}>{project.overview}</p>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>
          <span>02</span> What I Did
        </h2>
        <ul className={styles.list}>
          {project.contribution.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>
          <span>03</span> Result
        </h2>
        <ul className={`${styles.list} ${styles.result}`}>
          {project.result.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>
          <span>04</span> Stack
        </h2>
        {project.tech.length > 0 ? (
          <div className={styles.techList}>
            {project.tech.map((tech) => (
              <span key={tech} className={styles.techTag}>
                {tech}
              </span>
            ))}
          </div>
        ) : (
          <p className={styles.description}>정리 중입니다.</p>
        )}
        {project.links && project.links.length > 0 && (
          <div className={styles.links}>
            {project.links.map((link) => (
              <a key={link.href} href={link.href} target="_blank" rel="noopener noreferrer">
                {link.label} ↗
              </a>
            ))}
          </div>
        )}
      </section>

      <Link to={`/projects/${nextProject.slug}`} className={styles.next}>
        <span className={styles.nextLabel}>next →</span>
        <span className={styles.nextTitle}>{nextProject.title}</span>
      </Link>
    </article>
  );
}
