import About from "../components/home/About";
import Projects from "../components/home/Projects"
// import Timeline from "../components/home/Timeline";
import Experience from "../components/home/Experience";
import TechStacks from "../components/home/TechStack";

  export default function Home() {
    return (
      <>
        <About />
        <Experience />
        <Projects />
        <TechStacks />
      </>
    );
  }
