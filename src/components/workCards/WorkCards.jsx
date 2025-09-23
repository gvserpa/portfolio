import { memo } from "react";
import "./index.css";

const WorkCards = () => {
  return (
    <div>
      <div className="work-card">
        <h4>Dentist-booking.com</h4>
        <p>
          Dentist Booking is a modern web application for dental clinics that
          allows patients to book appointments and administrators to manage
          bookings dynamically and efficiently. The project is built with React
          and uses Firebase for authentication, data storage, and a serverless
          backend.
        </p>
        <p>
          The system is fully responsive and provides a seamless experience for
          both users and administrators.
        </p>
        <div className="technology">
          <div className="tech">
            <h4>Technologies: </h4>
            <p>React</p>
            <p>Firebase Authetication(Login/Register)</p>
            <p>Firebase (data and appointment storage)</p>
            <p>GitHub Actions (CI/CD)</p>
          </div>
          <div className="tech-buttons">
            <a href="https://github.com/gvserpa/dentist-booking" target="_blank">Repository</a>
            <a href="https://dentist-booking-ten.vercel.app/" target="_blank">Live</a>
          </div>
        </div>
      </div>
      <div className="work-card">
        <h4>Labour Hire - FrontEnd</h4>
        <p>
          The Labour Hire Frontend is the client-side of the full-stack Labour
          Hire project. It provides a modern, responsive and dynamic user
          interface that connects to the backend API hosted on Render. Through
          this platform, users can:
        </p>
        <div className="technology">
          <div className="tech">
            <h4>Technologies: </h4>
            <p>React</p>
            <p>JSONWeb Token</p>
            <p>BCrypt</p>
            <p>Vercel</p>
          </div>
          <div className="tech-buttons">
            <a href="https://github.com/gvserpa/labour-hire-frontend" target="_blank">Repository</a>
            <a href="https://labour-hire-frontend.vercel.app/" target="_blank">Live</a>
          </div>
        </div>
      </div>
      <div className="work-card">
        <h4>Labour Hire Backend</h4>
        <p>
          The Labour Hire Backend is the server-side of the full-stack Labour
          Hire project, where users can:
          <br /> - Sign up and log in (authentication using JWT and bcrypt)
          <br /> - Mark themselves as available for work
          <br /> - Create and manage tasks visible to other users
          <br /> - Interact with tasks created by others by submitting offers
          and approving/rejecting proposals
          <br /> The backend is built with Node.js, Express, and MongoDB,
          following best practices with controllers, models, routes, and
          middlewares.
        </p>

        <div className="technology">
          <div className="tech">
            <h4>Technologies: </h4>
            <p>Node.JS</p>
            <p>MongoDB + Mongoose</p>
            <p>Stripe</p>
            <p>JWT + Bcrypt</p>
          </div>
          <div className="tech-buttons">
            <a href="https://github.com/gvserpa/labour-hire-backend" target="_blank">Repository</a>
            <a href="https://labour-hire-frontend.vercel.app/" target="_blank">Live</a>
          </div>
        </div>
      </div>
      <div className="work-card">
        <h4>Car-Rental-Website</h4>
        <p>
          The Car Rental Website is a responsive web application built with
          React. It allows users to view and book cars with ease. The app
          includes smooth navigation using React Router, payment integration via
          Stripe, and a modern, mobile-friendly design.
        </p>

        <div className="technology">
          <div className="tech">
            <h4>Technologies: </h4>
            <p>React</p>
            <p>HTML5 & CSS3</p>
            <p>Node.JS (Stripe Integration) </p>
            <p>Express</p>
          </div>
          <div className="tech-buttons">
            <a href="https://github.com/gvserpa/Car-Rental-Website" target="_blank">Repository</a>
            <a href="https://car-rental-project-alpha-ten.vercel.app/" target="_blank">Live</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default memo(WorkCards);
