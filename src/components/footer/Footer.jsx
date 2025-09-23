import { memo } from "react";
import "./index.css";
import mail from "../../assets/mail-fill (1).png";
import linkedin from "../../assets/linkedin-white.png";
import github from "../../assets/github-fill (6).png";
import insta from "../../assets/instagram-fill (1).png";
import zap from "../../assets/zapzap.png"

const Footer = () => {
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="Footer">
      <div className="footer-top">
        <div className="footer-left">
          <h2>DevGustavo</h2>
          <div className="footer-left-links">
            <ul>
              <li onClick={() => scrollToSection("projects")}>Projects</li>
              <li onClick={() => scrollToSection("about")}>About</li>
            </ul>
          </div>
        </div>
        <div className="footer-center">
          <h2>Subscribe to get latest newsletter</h2>
          <div className="footer-center-input">
            <input placeholder="Enter your email address" />
            <img src={mail} alt="mail icon" />
          </div>

          <div className="footer-socials">
            <p>Find Me in Social</p>
            <div className="footer-social-links">
              <a
                href="https://www.linkedin.com/in/devgustavoserpa/"
                target="_blank"
              >
                <img src={linkedin} alt="linkedin" />
              </a>
              <a href="https://github.com/gvserpa" target="_blank">
                <img src={github} alt="github" />
              </a>
              <a href="https://www.instagram.com/gvserpa/" target="_blank">
                <img src={insta} alt="insta" />
              </a>
              <a
                href="https://wa.me/61451685180?text=Hi%20Gustavo,%20I’d%20like%20to%20get%20in%20touch%20with%20you%20about%20an%20opportunity."
                target="_blank"
              >
                <img src={zap} alt="whatsapp" />
              </a>
            </div>
          </div>
        </div>
        <div className="footer-right">
          <div className="footer-right-links">
            <ul>
              <li>Privacy Policy</li>
              <li>Terms Of Service</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <hr />
        <p>2025 Cronulla @ All Rights Reserved</p>
      </div>
    </div>
  );
};

export default memo(Footer);
