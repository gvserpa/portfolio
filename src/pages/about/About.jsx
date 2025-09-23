import { memo } from "react";
import Profile from "../../components/profile/Profile";
import Cards from "../../components/cards/Cards";
import WorkCards from "../../components/workCards/WorkCards.jsx"
import "./index.css";

const About = () => {
  return (
    <div className="about-content">
      <div className="about-title">
        <h2>About Gustavo</h2>
        <p>
          Fullstack Developer passionate about creating exceptional digital
          experiences
        </p>
      </div>
      <div className="about-main">
        <Profile />
        <div className="about-info">
          <p>
            Hello! I’m Gustavo Vieira Serpa, a fullstack developer specializing
            in Front-End React with strong experience in JavaScript and Node.js.
            My passion is turning complex ideas into intuitive interfaces and
            robust systems that truly make a difference in people’s lives.
          </p>
          <p>
            With over 15 projects deployed in production using Vercel, AWS, and
            Render, I combine solid technical expertise with strategic vision to
            deliver solutions that not only work but also scale and evolve
            alongside the business.
          </p>
          <h3>🚀 Technologies Stach</h3>
          <hr />
          <Cards /> <hr />
          <h3>💼 Practical Experience</h3>
          <WorkCards />
        </div>
      </div>
    </div>
  );
};

export default memo(About);
