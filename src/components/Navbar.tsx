import { Link, useLocation } from "react-router-dom";

import styles from "./Navbar.module.css";

// hidden: true인 링크는 메뉴에 보이지 않는다
const NAV_LINKS = [
  { to: "/#projects", label: "projects", match: "/projects", hidden: false },
  { to: "/blog", label: "articles", match: "/blog", hidden: false },
  { to: "/guestbook", label: "guestbook", match: "/guestbook", hidden: false },
].filter((item) => !item.hidden);

export default function Navbar() {
  const location = useLocation();

  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <Link to="/" className={styles.brand} aria-label="홈으로">
          <span className={styles.wordmark}>Dev.ing</span>
        </Link>

        <nav className={styles.nav}>
          {NAV_LINKS.map((item) => {
            const isActive =
              location.pathname.startsWith(item.match) ||
              (item.match === "/blog" && location.pathname.startsWith("/post"));

            return (
              <Link
                key={item.to}
                to={item.to}
                className={`${styles.link} ${isActive ? styles.linkActive : ""}`}
              >
                <span className={styles.slash}>/</span>
                {item.label}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
