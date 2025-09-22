import { memo } from "react";
import "./index.css";

const Projects = () => {
  return (
    <div id="projects" className="projects">
      <div className="projects-title">
        <h2>My Projects</h2>
      </div>
      <div className="projects-cards">
        <div className="card">
          <a href="https://github.com/gvserpa/dentist-booking" target="_blank">
            <div className="card-info-2">
              <h3>Dentist-booking.com</h3>
              <p>
                <strong>Technology:</strong> React + Vite, FireBase DB, FireBase
                Auth, CI/CD, Vercel
              </p>
              <p>
                <strong>Features:</strong> Login/Register System, Admin
                DashBoard, User DashBoard Schedule Management, Dynamic schedule
              </p>

              <div className="card-links">
                <p>
                  <a
                    href="https://github.com/gvserpa/dentist-booking"
                    target="_blank"
                  >
                    Repository
                  </a>
                </p>
                <p>
                  <a
                    href="https://dentist-booking-ten.vercel.app/"
                    target="_blank"
                  >
                    Live Mode
                  </a>
                </p>
              </div>
            </div>
          </a>
        </div>

        <div className="card">
          <a
            href="https://github.com/gvserpa/labour-hire-frontend"
            target="_blank"
          >
            <div className="card-info-1">
              <h3>LabourHIRE FrontEnd</h3>
              <p>
                <strong>Technology:</strong> React + Vite, Axios, JWT, BCrypt,
                Vercel
              </p>
              <p>
                <strong>Features:</strong> Authentication, Task Management, User
                Interaction (Real-time dynamic ranking system based on
                activity), UI/UX
              </p>
              <div className="card-links">
                <p>
                  <a
                    href="https://github.com/gvserpa/labour-hire-frontend"
                    target="_blank"
                  >
                    Repository
                  </a>
                </p>
                <p>
                  <a
                    href="https://labour-hire-frontend.vercel.app/"
                    target="_blank"
                  >
                    Live Mode
                  </a>
                </p>
              </div>
            </div>
          </a>
        </div>
        <div className="card">
          <a
            href="https://github.com/gvserpa/labour-hire-backend"
            target="_blank"
          >
            <div className="card-info-3">
              <h3>LabourHIRE BackEnd</h3>
              <p>
                <strong>Technology:</strong> Node.JS, Express, MongoDB, JWT,
                BCrypt, Render
              </p>
              <p>
                <strong>Features:</strong> Login/Register System, User
                DashBoard, Authentication via JSON Web Token, DataBase, Tasks
                Interaction
              </p>
              <div className="card-links">
                <p>
                  <a
                    href="https://github.com/gvserpa/labour-hire-backend"
                    target="_blank"
                  >
                    Repository
                  </a>
                </p>
                <p>
                  <a
                    href="https://labour-hire-frontend.vercel.app/"
                    target="_blank"
                  >
                    Live Mode
                  </a>
                </p>
              </div>
            </div>
          </a>
        </div>
        <div className="card">
          <a
            href="https://github.com/gvserpa/Car-Rental-Website"
            target="_blank"
          >
            <div className="card-info-4">
              <h3>CarRental</h3>
              <p>
                <strong>Technology:</strong> React + Vite, Stripe, Node.JS,
                Express
              </p>
              <p>
                <strong>Features:</strong> Car listings, Booking system, Stripe
                payment integration, Scroll-to-top functionality
              </p>
              <div className="card-links">
                <p>
                  <a
                    href="https://github.com/gvserpa/Car-Rental-Website"
                    target="_blank"
                  >
                    Repository
                  </a>
                </p>
                <p>
                  <a
                    href="https://car-rental-project-alpha-ten.vercel.app/"
                    target="_blank"
                  >
                    Live Mode
                  </a>
                </p>
              </div>
            </div>
          </a>
        </div>
        <div className="card">
          <a href="https://github.com/gvserpa/lotr-api-react" target="_blank">
            <div className="card-info-5">
              <h3>BOOKNEST</h3>
              <p>
                <strong>Technology:</strong> React + Vite, Axios, The One API
              </p>
              <p>
                <strong>Features:</strong> Fetch movies and characters, displays
                movie details (duration, etc) and character details (name, race,
                etc), Dynamic Search to filter movies
              </p>
              <div className="card-links">
                <p>
                  <a
                    href="https://github.com/gvserpa/lotr-api-react"
                    target="_blank"
                  >
                    Repository
                  </a>
                </p>
                <p>
                  <a
                    href="https://lotr-api-react.vercel.app/"
                    target="_blank"
                  >
                    Live Mode
                  </a>
                </p>
              </div>
            </div>
          </a>
        </div>
        <div className="card">
          <a href="https://github.com/gvserpa/quick-country" target="_blank">
            <div className="card-info-6">
              <h3>QuickCountry</h3>
              <p>
                <strong>Technology:</strong> React + Vite, Axios, Unsplash API,
                ExchangeRate API, REST Countries API
              </p>
              <p>
                <strong>Features:</strong> Display dynamic country images, show
                countries information, calculate USD to local currance exchange
                rate in real-time
              </p>
              <div className="card-links">
                <p>
                  <a
                    href="https://github.com/gvserpa/quick-country"
                    target="_blank"
                  >
                    Repository
                  </a>
                </p>
                <p>
                  <a href="https://quick-country.vercel.app/" target="_blank">
                    Live Mode
                  </a>
                </p>
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default memo(Projects);
