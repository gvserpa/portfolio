import { memo } from "react";
import aboutme from "../../assets/me-mac (2).png";
import github from "../../assets/github-fill (5).png";
import linkedin from "../../assets/linkedin-box-fill (6).png";
import "./index.css";
import { useNavigate } from "react-router-dom";

const About = () => {


  const navigate = useNavigate()
  const handleAbout = (e) => {
    e.preventDefault()
    navigate('/about')
  }

  return (
    <div id="about" className="about">
      <div className="about-photo">
        <img src={aboutme} alt="personal photo" />
      </div>
      <div className="about-content">
        <h2>About Gustavo</h2>
        <p>
          I am a web developer passionate about technology, currently based in
          Australia and about to complete my IT degree. Over the past few years,
          I have been focused on studying and practicing both front-end and
          back-end development, working mainly with JavaScript, React, Node.js,
          and AWS. I have built real-world projects such as corporate websites
          and applications with APIs, always aiming to combine design,
          performance, and scalability.
        </p>
        <p>
          My goal is to create digital solutions that simplify people’s lives
          and add value to businesses. I have experience across the entire
          development cycle, from architecture and responsiveness to cloud
          deployment. I am constantly learning and open to new challenges that
          allow me to grow as a programmer and contribute meaningfully to
          innovative projects.
        </p>
        <div className="social-media">
          <a
            href="https://www.linkedin.com/in/devgustavoserpa/"
            target="_blank"
          >
            <img src={linkedin} alt="linkedin" />
          </a>
          <a href="https://github.com/gvserpa" target="_blank">
            <img src={github} alt="github" />
          </a>
        </div>
        <div className="about-button">
          <button onClick={handleAbout}>See more</button>
        </div>
      </div>
    </div>
  );
};

export default memo(About);
