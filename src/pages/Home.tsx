import About from "../components/home/About";
import Experience from "../components/home/Experience";
import Projects from "../components/home/Projects";
import TechStack from "../components/home/TechStack";

// 아티클 섹션(components/home/Articles)은 글이 쌓일 때까지 랜딩에서 잠시 숨긴다.
// /blog 페이지와 상단 내비게이션의 articles 링크는 그대로 둔다.
export default function Home() {
  return (
    <>
      <About />
      <Experience />
      <Projects />
      <TechStack />
    </>
  );
}
