import { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";

import Navbar from "./Navbar";
import Footer from "./Footer";
import styles from "./PortfolioLayout.module.css";

function useScrollOnNavigate() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      document.getElementById(hash.slice(1))?.scrollIntoView();
      return;
    }
    window.scrollTo(0, 0);
  }, [pathname, hash]);
}

// 홈 섹션이 화면에 들어올 때 아래에서 살짝 떠오르게 한다
function useRevealSections() {
  const { pathname } = useLocation();

  useEffect(() => {
    if (
      typeof IntersectionObserver === "undefined" ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      return;
    }

    const sections = document.querySelectorAll<HTMLElement>("main section[id]");
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.removeAttribute("data-reveal");
            observer.unobserve(entry.target);
          }
        }
      },
      { threshold: 0.08 },
    );

    sections.forEach((section) => {
      // 이미 보이는 섹션은 건드리지 않는다
      if (section.getBoundingClientRect().top < window.innerHeight) return;
      section.setAttribute("data-reveal", "");
      observer.observe(section);
    });

    return () => {
      observer.disconnect();
      sections.forEach((section) => section.removeAttribute("data-reveal"));
    };
  }, [pathname]);
}

export default function PortfolioLayout() {
  useScrollOnNavigate();
  useRevealSections();

  return (
    <div className={styles.shell}>
      <Navbar />
      <main className={styles.main}>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
