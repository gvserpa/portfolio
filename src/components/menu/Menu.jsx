import { memo, useState } from "react";
import "./index.css";
import menuLine from "../../assets/menu-line (2).png";
import github from "../../assets/github-fill (5).png";
import linkedin from "../../assets/linkedin-box-fill (6).png";

const Menu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

    const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header>
      <div className="menu">
        {isOpen && (
          <nav className="menu-list">
            <ul>
              <li onClick={() => scrollToSection("projects")}>
                Projects
              </li>
              <hr />
              <li onClick={() => scrollToSection("about")}>
                About Me
              </li>
            </ul>
          </nav>
        )}

        <div onClick={toggleMenu} className="menu-nav">
          <img src={menuLine} alt="menu-icon" />
          <h3>MENU</h3>
        </div>
        <div className="title">
          <h2>DevGustavo</h2>
        </div>
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
      </div>
    </header>
  );
};

export default memo(Menu);
