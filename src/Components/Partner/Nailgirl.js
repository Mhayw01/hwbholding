

import React from 'react';
import './Nailgirl.css';
import NailgirlLogo from '../../assets/nailgirl-logo.svg';
import NailgirlPic from '../../assets/nailgirl-pic.svg';
import NailgirlInsta from '../../assets/nailgirl-insta.svg';
import NailgirlWhatsapp from '../../assets/nailgirl-whatsapp.svg';

const Nailgirl = () => {
  return (
    <section className="nailgirl">
      <div className="nailgirl__inner">
        <h2 className="nailgirl__title">The nail girl - by Kim Hudson</h2>
        <img src={NailgirlLogo} alt="The Nail Girl logo" className="nailgirl__logo" />
        <p className="nailgirl__copy">
          At the heart of the Health Hwb is a belief that looking after yourself isn’t a luxury, it’s a form of care.
          And no one embodies that more than Kim Hudson, founder of The Nail Girl.
          <br /><br />
          Kim brings more than polish, she brings positivity, connection, and a calm, welcoming space where everyone feels seen.
          Whether it’s your regular gel manicure, a full set of builder gel nails, or just a chance to relax and catch up,
          The Nail Girl is all about that little moment in your week where you pause, feel good, and leave a little lighter than you came in.
          <br /><br />
          Her clients come for the nails, but stay for the warm chat, the uplifting energy,
          and the genuine care that Kim offers in every appointment. It’s more than a treatment, it’s a reset.
        </p>
        <img src={NailgirlPic} alt="The Nail Girl studio" className="nailgirl__image" />
        <p className="nailgirl__copy">
          As Kim puts it, “Everyone deserves a space where they can just be themselves. No judgement, just kindness,
          and a fresh set of nails to remind you that you matter.”
          <br /><br />
          That’s exactly why The Nail Girl is such an important part of the Hwb, because confidence and care go hand in hand.
          We’re proud to have Kim as a partner, and even prouder to offer a space where feeling good starts from the inside out — and maybe a bit of glitter, too ✨
          <br /><br />
          Book an appointment or follow Kim’s work on Insta or book via WhatsApp
        </p>
        <div className="nailgirl__icons">
          <a href="https://www.instagram.com/__thenailgirl__/" target="_blank" rel="noopener noreferrer">
            <img src={NailgirlInsta} alt="Instagram" />
          </a>
          <a href="https://wa.me/447810818573" target="_blank" rel="noopener noreferrer">
            <img src={NailgirlWhatsapp} alt="WhatsApp" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Nailgirl;