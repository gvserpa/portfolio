import { memo } from "react";
import aboutme from "../../assets/me-mac (2).png";
import github from "../../assets/github-fill (5).png";
import linkedin from "../../assets/linkedin-box-fill (6).png";
import Main from '../../components/main/Main.jsx'
import "./index.css";
import Projects from "../../components/projects/Projects.jsx";
import About from "../../components/about/About.jsx";

const Home = () => {
  return (
    <main>
      <Main />
      <Projects />
      <About />
    </main>
  );
};

export default memo(Home);
