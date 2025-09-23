import { memo } from "react";
import "./index.css";

const Cards = () => {
  return (
    <div className="about-cards">
      <div className="about-card">
        <div className="front-line">
          <h4>⚛️ FrontEnd</h4>
        </div>
        <div className="techs">
          <p>React</p>
          <p>JavaScript</p>
          <p>HTML5</p>
          <p>CSS3</p>
          <p>Axios</p>
          <p>API</p>
          <p>Styled Components</p>
        </div>
      </div>
      <div className="about-card">
        <div className="front-line">
          <h4>🔧 Backend & DevOps</h4>
        </div>
        <div className="techs">
          <p>Node.JS</p>
          <p>Express.js</p>
          <p>MongoDB</p>
          <p>AWS Services</p>
          <p>CI/CD</p>
          <p>Firebase</p>
        </div>
      </div>
      <div className="about-card">
        <div className="front-line">
          <h4>☁️ Cloud & Deploy</h4>
        </div>
        <div className="techs">
          <p>Vercel</p>
          <p>AWS EC2/S3</p>
          <p>GitHub Actions</p>
          <p>ESLint</p>
          <p>Render</p>
          <p>Jest Testing</p>
        </div>
      </div>
    </div>
  );
};

export default memo(Cards);
