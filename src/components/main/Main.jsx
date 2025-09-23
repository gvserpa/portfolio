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
        <address className="email">
          <img src={mail} alt="" aria-hidden="true" />
          <h3>gvieiraserpa@gmail.com</h3>
        </address>
      </div>
      <div className="main-photo">
        <img src={mainPhoto} alt="Gustavo Vieira Serpa, React Front-End Developer" />
      </div>
    </div>
  );
};

export default memo(Main);
