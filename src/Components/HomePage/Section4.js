import React, { useState } from 'react';
import './Section4.css';
import facebookIcon from '../../assets/facebook.svg';
import instagramIcon from '../../assets/instagram.svg';
import mailIcon from '../../assets/mail.svg';

const Section4 = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);

    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams(formData).toString(),
    })
      .then(() => setSubmitted(true))
      .catch((error) => alert("Error: " + error));
  };

  return (
    <section className="home-section4">
      <div className="home-section4__inner">
        {/* Subtitle */}
        <h2 className="home-section4__title">
          FOLLOW US<br/>ON SOCIALS
        </h2>

        {/* Social Links */}
        <ul className="home-section4__socials">
          <li>
            <a
              href="https://www.facebook.com/share/16BZHyFPAw/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={facebookIcon} alt="Facebook" />
              <span>Health Hwb</span>
            </a>
          </li>
          <li>
            <a
              href="https://www.instagram.com/healthhwbbarry/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={instagramIcon} alt="Instagram" />
              <span>healthhwbbarry</span>
            </a>
          </li>
          <li>
            <a href="mailto:info@healthhwb.co.uk">
              <img src={mailIcon} alt="Email" />
              <span>info@healthhwb.co.uk</span>
            </a>
          </li>
        </ul>

        {/* Mailing List Form */}
        {!submitted ? (
          <form
            name="subscribe"
            method="POST"
            data-netlify="true"
            netlify-honeypot="bot-field"
            className="home-section4__form"
            onSubmit={handleSubmit}
          >
            <input type="hidden" name="form-name" value="subscribe" />
            <p hidden>
              <label>Don’t fill this out: <input name="bot-field" /></label>
            </p>
            <label htmlFor="email">Join our mailing list here:</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="you@example.com"
              required
            />
            <button type="submit">Subscribe</button>
          </form>
        ) : (
          <p className="home-section4__success">Thanks for subscribing!</p>
        )}

        {/* Footer Slogan */}
        <p className="home-section4__slogan">
          A PLACE TO RESET, RECHARGE<br/>& FEEL BETTER
        </p>
      </div>
    </section>
  );
};

export default Section4;