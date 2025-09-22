import { memo } from "react";
import mainPhoto from "../../assets/unnamed (5).png";
import mail from "../../assets/mail-line (2).png";
import "./index.css";

const Main = () => {
  return (
    <div className="main-content">
      <div className="main-info">
        <h2>Hello! I'm</h2>
        <h1>
          Gustavo <br />
          Vieira Serpa
        </h1>
        <p>
          <span className="subtitle"><strong>React Front-End Web Developer</strong></span>
        </p>
        <p>
          <span className="description">
            I build clean, responsive user interfaces with React, turning
            designs into fast, accessible experiences that solve real problems.
            I enjoy collaborating with product teams, refining UI details, and
            learning new tools to deliver polished, user-focused web
            applications.
          </span>
        </p>
        <div className="email">
          <img src={mail} alt="mail-icon" />
          <h3>gvieiraserpa@gmail.com</h3>
        </div>
      </div>
      <div className="main-photo">
        <img src={mainPhoto} />
      </div>
    </div>
  );
};

export default memo(Main);
