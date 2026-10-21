import { Link } from "react-router-dom";

import { PROFILE, SOCIAL_LINKS } from "../content/profile";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.cta}>
          <p className={styles.request}>
            <span className={styles.method}>POST</span> /contact
          </p>
          <p className={styles.headline}>
            함께 풀고 싶은 문제가 있다면,
            <br />
            요청을 보내주세요.
          </p>
          <div className={styles.actions}>
            <a href={`mailto:${PROFILE.email}`} className={styles.primary}>
              {PROFILE.email}
            </a>
            <Link to="/guestbook" className={styles.secondary}>
              방명록 남기기 →
            </Link>
          </div>
        </div>

        <div className={styles.bottom}>
          <div className={styles.links}>
            {SOCIAL_LINKS.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.link}
              >
                <img
                  src={social.icon}
                  alt=""
                  className={`${styles.icon} ${social.mono ? styles.iconMono : ""}`}
                />
                {social.label}
              </a>
            ))}
          </div>
          <p className={styles.copyright}>
            <span className={styles.status}>201 Created</span> © 2026 Dev.ing
          </p>
        </div>
      </div>
    </footer>
  );
}
