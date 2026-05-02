import About from "../components/home/About";
import Projects from "../components/home/Projects";
// import Career from "../components/home/Career";
import TechStacks from "../components/home/TechStack";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

export default function Home() {
    return (
        <div style={{ maxWidth: "900px", margin: "0 auto", padding: "40px", }}>

            <div>
                <Navbar />
                <hr />
                <About />
                <Projects />
                <TechStacks />
                <hr style={{ margin: "40px 0" }} />
                <Footer />            
            </div>
            
        </div>
    );
    // <Career /> 는 우선 생략, 그리고 <Projects/ > 랑 묶어서 TImeline으로 표기 중

  }