import { memo, useState } from "react";
import "./index.css";
import menuLine from "../../assets/menu-line (2).png";
import github from "../../assets/github-fill (5).png";
import linkedin from "../../assets/linkedin-box-fill (6).png";
import { useNavigate } from "react-router-dom";

const Menu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => setIsOpen(false)

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const navigate = useNavigate();

  const handleTitle = (e) => {
    e.preventDefault();
    navigate("/");
    closeMenu();
  };

  return (
    <header>
      <div className="menu">
        {isOpen && (
          <nav className="menu-list">
            <ul>
              <li onClick={handleTitle}>Home</li>
                            <hr />
              <li onClick={() => {
                scrollToSection("projects");
                closeMenu()
                }}>Projects</li>
              <hr />
              <li onClick={() => {
                navigate('/about');
                closeMenu()
                }}>About Me</li>
            </ul>
          </nav>
        )}

        <div onClick={toggleMenu} className="menu-nav">
          <img src={menuLine} alt="menu-icon" />
          <h3>MENU</h3>
        </div>
        <div onClick={handleTitle} className="title">
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
