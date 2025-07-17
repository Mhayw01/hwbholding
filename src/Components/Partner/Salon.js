

import React from 'react';
import './Salon.css';
import SalonLogo from '../../assets/salon-logo.svg';
import SalonPic from '../../assets/salon-pic.svg';
import SalonInsta from '../../assets/salon-insta.svg';
import SalonWhatsapp from '../../assets/salon-whatsapp.svg';

const Salon = () => {
  return (
    <section className="salon">
      <div className="salon__inner">
        <h2 className="salon__title">salon revive - with sam Lewis</h2>
        <img src={SalonLogo} alt="Salon Revive logo" className="salon__logo" />
        <p className="salon__copy">
          If you’ve ever walked into a salon and left feeling like a new person, you already know what Sam Lewis brings to the Health Hwb.
          <br /><br />
          Salon Revive isn’t just about great hair (though you’ll absolutely get that too) it’s about transformation in every sense.
          Sam has created a space where you can take a breath, feel seen, and walk out feeling refreshed, not just on the outside but inside too.
          <br /><br />
          With years of experience and a calm, uplifting presence, Sam has a gift for making people feel at ease.
          Whether you’re after a fresh cut, a colour revamp, or just some time out from the stress of life, Salon Revive offers more than a service, it offers sanctuary.
        </p>
        <img src={SalonPic} alt="Salon Revive studio" className="salon__image" />
        <p className="salon__copy">
          Sam believes in the power of small things to make a big difference:<br />
          “A good haircut can boost your whole mood. It’s not vanity, it’s self-worth, it’s identity, it’s confidence.”
          <br /><br />
          At the Health Hwb, that message fits perfectly. Sam is part of a growing circle of local talent who are here to serve the community with care, connection, and authenticity.
          We’re proud to have Salon Revive as one of our core partners, because wellness isn’t just what you do in the gym or therapy room.
          Sometimes, it’s what happens in the chair, with a cup of tea, a good chat, and a brilliant stylist who gets it.
          <br /><br />
          Follow Sam’s work on Insta or Book via WhatsApp
        </p>
        <div className="salon__icons">
          <a href="https://www.instagram.com/sl_salon.revive/" target="_blank" rel="noopener noreferrer">
            <img src={SalonInsta} alt="Instagram" />
          </a>
          <a href="https://wa.me/447565681550" target="_blank" rel="noopener noreferrer">
            <img src={SalonWhatsapp} alt="WhatsApp" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Salon;