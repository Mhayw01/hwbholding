

import React from 'react';
import './InfraredSection.css';
import infraredIcon from '../../assets/infrared-icon.svg';

const InfraredSection = () => (
  <section className="infrared-sauna">
    <div className="infrared-sauna__inner">
      <div className="infrared-sauna__icon">
        <img src={infraredIcon} alt="Infrared Sauna" />
      </div>
      <h3 className="infrared-sauna__title">Infrared Sauna</h3>
      <div className="infrared-sauna__descriptions">
        <p>
          A dry heat therapy that uses infrared light to gently warm the body from within — not just the air around you.
        </p>
        <p>
          <strong>What it does:</strong> Infrared waves penetrate deep into muscles and joints, easing pain, improving circulation, boosting cell regeneration and promoting better sleep.
        </p>
        <p>
          Ideal after training, during recovery, or in times of stress — it helps you fully relax while encouraging your body to heal.
        </p>
        <p>
          <strong>Why it works:</strong> Unlike traditional saunas, infrared heat reaches deeper layers of tissue, raising your internal temperature and supporting natural detox, inflammation reduction, and hormonal balance.
        </p>
      </div>
      <p className="infrared-sauna__tagline">
        Let the warmth sink in,<br/>and feel your body start to heal.
      </p>
    </div>
  </section>
);

export default InfraredSection;