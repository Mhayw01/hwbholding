

import React from 'react';
import './Helen.css';
import helenLogo from '../../assets/helen-logo.svg';
import helenPic from '../../assets/helen-pic.svg';
import facebookIcon from '../../assets/facebook-helen.svg';
import whatsappIcon from '../../assets/whatsapp-helen.svg';

const Helen = () => {
  return (
    <section className="helen">
      <h2 className="helen-title">REIKI - by Helen</h2>
      <img src={helenLogo} alt="Helen Logo" className="helen-logo" />
      <h3 className="helen-subtitle">Namaste</h3>
      <p className="helen-text">
        Tucked inside the Health Hwb is a space where the noise quiets, the tension softens, and you’re invited to simply breathe.
        That space is held by Helen, the calming presence behind Reiki by Helen.
      </p>
      <p className="helen-text">
        Helen offers Reiki, a gentle, energy-based therapy that promotes balance, deep relaxation, and emotional release.
        Whether you’re carrying stress, recovering from burnout, or just need to reconnect with yourself,
        Helen’s sessions create a moment of stillness in the middle of a busy life.
      </p>
      <p className="helen-text">
        Her approach is intuitive and deeply compassionate. Every session is tailored to the individual — a safe, nurturing environment
        where nothing is expected, and everything is welcome. Many who visit her talk about feeling lighter, more grounded,
        and more in tune with themselves after just one session.
      </p>
      <img src={helenPic} alt="Helen Therapy Room" className="helen-image" />
      <p className="helen-text">
        As Helen puts it: “We all hold onto more than we realise — tension, emotion, pressure. Reiki gives you space to let go.
        To feel held. To feel whole.”
      </p>
      <p className="helen-text">
        Reiki by Helen is a vital part of the Health Hwb’s mission to support mind, body, and soul. Whether you’re new to energy work
        or simply looking for peace in your week, Helen offers a gentle, healing hand and an open heart.
      </p>
      <p className="helen-text">Discover more and book a session via Facebook or WhatsApp</p>
      <div className="helen-icons">
        <a href="https://www.facebook.com/profile.php?id=100067395978872" target="_blank" rel="noopener noreferrer">
          <img src={facebookIcon} alt="Facebook" />
        </a>
        <a href="https://wa.me/447855646430" target="_blank" rel="noopener noreferrer">
          <img src={whatsappIcon} alt="WhatsApp" />
        </a>
      </div>
    </section>
  );
};

export default Helen;