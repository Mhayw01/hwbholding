import React from 'react';
import './RecoveryCymru.css';
import recoveryLogo from '../../assets/recovery-cymru-logo.jpg';
import recoveryPic from '../../assets/recovery-cymru-pic.jpg';

const RecoveryCymru = () => {
  return (
    <section className="recovery">
      <div className="recovery__inner">
        <h2 className="recovery__title">Recovery Cymru</h2>
        <img src={recoveryLogo} alt="Recovery Cymru logo" className="recovery__logo" />
        <p className="recovery__copy">
          Every Tuesday, we’re proud to welcome Recovery Cymru into the Hwb.
          <br /><br />
          Recovery Cymru offer peer support for people affected by addiction, mental health struggles and life challenges. It’s real conversations, lived experience, no judgement and helping people feel less alone.
          <br /><br />
          Bringing them here was important to us because recovery isn’t just about the body. It’s about connection, support, purpose and having safe people around you when you need them most.
        </p>
        <img src={recoveryPic} alt="Recovery Cymru at the Health Hwb" className="recovery__image" />
        <p className="recovery__copy">
          The Hwb has always been about creating a safe space for the community, and having Recovery Cymru here means we can support people in a deeper way, right here in the heart of Barry.
          <br /><br />
          Whether someone needs a chat, guidance, support or just somewhere they feel understood… this is why we do what we do.
          <br /><br />
          Community supporting community.
          <br /><br />
          Wellness belongs to everyone. We’re making sure of it.
        </p>
      </div>
    </section>
  );
};

export default RecoveryCymru;
