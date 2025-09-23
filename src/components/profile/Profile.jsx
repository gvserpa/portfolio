import { memo, useEffect } from "react";
import "./index.css";
import profile from "../../assets/img-profile.png";
import freecode from "../../assets/freecode.png";
import high from "../../assets/high.png";

const Profile = () => {
  useEffect(() => {
    // Injeta o script da Credly sempre que o componente monta
    const script = document.createElement("script");
    script.src = "//cdn.credly.com/assets/utilities/embed.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Remove o script ao desmontar (para evitar duplicação)
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="profile">
      <div className="profile-photo">
        <img src={profile} alt="Profile" />
      </div>

      <div className="profile-card">
        <div className="card-info">
          <h3>3+</h3>
          <p>Years of Experience</p>
        </div>
        <div className="card-info">
          <h3>15+</h3>
          <p>Deployed Projects</p>
        </div>
        <div className="card-info">
          <h3>AWS</h3>
          <p>Certificate</p>
        </div>
      </div>

      <div className="certificates">
        <h3>Certifications & Awards</h3>

        <div className="certificate">
          <h3>AWS</h3>
          <p>AWS Cloud Practitioner</p>
          <div className="badge-wrapper">
            <div className="img-wrapper">
              <div
                data-iframe-width="150"
                data-iframe-height="270"
                data-share-badge-id="522c8f56-fa30-469b-ab7f-88f30d3088be"
                data-share-badge-host="https://www.credly.com"
              ></div>
            </div>
          </div>
        </div>

        <div className="certificate">
          <h3>FreeCodeCamp</h3>
          <p>Responsive Web Design</p>
          <a
            href="https://freecodecamp.org/certification/gvserpa/responsive-web-design"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={freecode} alt="FreeCodeCamp badge" />
          </a>
        </div>

        <div className="certificate">
          <h3>Laneway Education</h3>
          <p>High Achiever</p>
          <img src={high} alt="High Achiever badge" />
        </div>
      </div>
    </div>
  );
};

export default memo(Profile);
