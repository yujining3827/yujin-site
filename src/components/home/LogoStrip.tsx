import type { CSSProperties } from "react";
import {
  siFigma,
  siGithub,
  siHibernate,
  siJsonwebtokens,
  siMysql,
  siOpenjdk,
  siPostgresql,
  siPython,
  siReact,
  siRedis,
  siSpringboot,
  siTypescript,
  type SimpleIcon,
} from "simple-icons";

import styles from "./LogoStrip.module.css";

type Logo = { label: string; icon?: SimpleIcon };

// 공식 로고는 simple-icons에서 가져온다. AWS는 로고가 제공되지 않아 이름으로 표시한다.
const LOGOS: Logo[] = [
  { label: "Java", icon: siOpenjdk },
  { label: "Spring Boot", icon: siSpringboot },
  { label: "JPA", icon: siHibernate },
  { label: "MySQL", icon: siMysql },
  { label: "PostgreSQL", icon: siPostgresql },
  { label: "Redis", icon: siRedis },
  { label: "AWS" },
  { label: "JWT", icon: siJsonwebtokens },
  { label: "Python", icon: siPython },
  { label: "React", icon: siReact },
  { label: "TypeScript", icon: siTypescript },
  { label: "GitHub", icon: siGithub },
  { label: "Figma", icon: siFigma },
];

// 검정 계열 로고는 다크 모드에서 안 보이므로 글자색으로 대체한다
function brandColor(hex: string) {
  const value = parseInt(hex, 16);
  const luminance =
    ((value >> 16) & 255) * 0.299 + ((value >> 8) & 255) * 0.587 + (value & 255) * 0.114;
  return luminance < 40 ? "var(--text-heading)" : `#${hex}`;
}

function LogoItem({ logo, copy }: { logo: Logo; copy?: boolean }) {
  const style = logo.icon
    ? ({ "--brand": brandColor(logo.icon.hex) } as CSSProperties)
    : ({ "--brand": "#ff9900" } as CSSProperties);

  return (
    <li className={styles.item} style={style} aria-hidden={copy || undefined}>
      {logo.icon ? (
        <svg viewBox="0 0 24 24" className={styles.icon} aria-hidden="true">
          <path d={logo.icon.path} />
        </svg>
      ) : (
        <span className={styles.wordmark} aria-hidden="true">
          {logo.label}
        </span>
      )}
      <span className={styles.label}>{logo.label}</span>
    </li>
  );
}

export default function LogoStrip() {
  return (
    <div className={styles.strip}>
      <ul className={styles.track} aria-label="주로 쓰는 기술">
        {LOGOS.map((logo) => (
          <LogoItem key={logo.label} logo={logo} />
        ))}
        {/* 끊김 없이 이어지도록 같은 목록을 한 번 더 붙인다 */}
        {LOGOS.map((logo) => (
          <LogoItem key={`${logo.label}-copy`} logo={logo} copy />
        ))}
      </ul>
    </div>
  );
}
