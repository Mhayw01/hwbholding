import React from "react";
import "./App.css";
import logo from "./logo.svg"; // Save your logo in src/ as logo.png
import facebookIcon from './facebook.svg';
import instagramIcon from './instagram.svg';
import mailIcon from './mail.svg';

function App() {
  return (
    <div className="container">
      <img src={logo} alt="Health HWB logo" className="logo" />
      <h2 className="highlight">COMING SOON TO BARRY</h2>

      <h3 className="section-title">OUR CORE SERVICES INCLUDE</h3>
      <ul className="services">
        <li>❄️ Ice Plunge Therapy</li>
        <li>🔥 Infrared & Traditional Saunas</li>
        <li>💆 Sports Massage Therapy</li>
        <li>🧘 Community Well-being Room</li>
      </ul>

      <div className="blue-banner">A SPACE FOR WELLBEING RECOVERY & SELF-CARE</div>

      <p className="intro">
        Welcome to Health HWB<br />
        Your local wellbeing hub<br />
        in the heart of Barry
      </p>

      <p className="desc">
        Whether you’re in the blue light services, a student, a carer, a veteran, an athlete,
        or just part of our community –<br />
        <span className="highlight-text">this space is for you</span>
      </p>

      <div className="blue-banner">WHAT MAKES US DIFFERENT</div>
      <ul className="features">
        <li>• Community first approach</li>
        <li>• Affordable access to premium therapies</li>
        <li>• Supportive environment to all</li>
        <li>• Driven by purpose, not profit</li>
      </ul>

      <div className="blue-banner">FOLLOW US ON SOCIALS</div>
      <div className="socials">
        <p>
          <a href="https://facebook.com/healthhwb" target="_blank" rel="noopener noreferrer">
            <img src={facebookIcon} alt="Facebook" className="icon" /> <strong>Health Hwb</strong>
          </a>
        </p>
        <p>
          <a href="https://instagram.com/healthhwbbarry" target="_blank" rel="noopener noreferrer">
            <img src={instagramIcon} alt="Instagram" className="icon" /> <strong>healthhwbbarry</strong>
          </a>
        </p>
        <p>
          <a href="mailto:info@healthhwb.co.uk">
            <img src={mailIcon} alt="Email" className="icon" /> <strong>info@healthhwb.co.uk</strong>
          </a>
        </p>

        <form name="contact" method="POST" data-netlify="true">
          <input type="hidden" name="form-name" value="contact" />
          <p>Join our mailing list here:</p>
          <input type="email" name="email" placeholder="Email address" required />
          <button type="submit">Join</button>
        </form>
      </div>

      <h3 className="footer-highlight">A PLACE TO RESET, RECHARGE & FEEL BETTER</h3>
    </div>
  );
}

export default App;