import { memo } from "react";
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
