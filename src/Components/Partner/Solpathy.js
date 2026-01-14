import React from 'react';
import './Solpathy.css';
import solpathyLogo from '../../assets/solpathy-logo.svg';
import solpathyPic from '../../assets/solpathy-pic.svg';
import solpathyInsta from '../../assets/solpathy-insta.svg';
import solpathyWhatsapp from '../../assets/solpathy-whatsapp.svg';

const Solpathy = () => {
  return (
    <section className="solpathy">
      <div className="solpathy__inner">
        <h2 className="solpathy__title">Sôlpathy - by Leah</h2>
        <img className="solpathy__logo" src={solpathyLogo} alt="Solpathy logo" />
        <h3 className="solpathy__subtitle">Siwmae</h3>

        <div className="solpathy__copy">
          <p>
            Step into the Hwb and you might just hear a gentle “Siwmae” from Leah, our resident massage therapist and the heart behind Sôlpathy, a practice rooted in wholeness, wisdom, and deep reconnection with self.
          </p>
          <p>
            At Sôlpathy, massage is more than a treatment, it’s a conversation between body and soul. Leah’s approach blends skilled hands with intuitive care, helping you return to comfort, strength, and inner balance. Whether you’re managing pain, stress, or simply seeking a moment of peace, her work guides you back to your centre.
          </p>
        </div>

        <img className="solpathy__image" src={solpathyPic} alt="Leah at Solpathy" />

        <div className="solpathy__copy">
          <p className="solpathy__missionLead">Her mission is clear:</p>
          <p className="solpathy__missionQuote">“We all want to feel free to move without struggle or pain. My intention is to help you reconnect with your body, to listen, to support it, to honor what it needs.”</p>
          <p>
            Every session is unique, designed to support your personal journey toward freedom, physically, emotionally, and energetically. When the body feels strong, the spirit can shine even brighter. Leah’s work is about creating space for that light to grow.
          </p>
          <p className="solpathy__closing">Return to comfort. Return to self. That’s the Sôlpathy way.</p>
        </div>

        <div className="solpathy__icons">
          <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
            <img className="solpathy__icon" src={solpathyInsta} alt="Instagram" />
          </a>
          <a href="https://wa.me/" target="_blank" rel="noopener noreferrer">
            <img className="solpathy__icon" src={solpathyWhatsapp} alt="WhatsApp" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Solpathy;
