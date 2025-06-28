

import React from 'react';
import './TradSaunaSection.css';
import tradIcon from '../../assets/trad-sauna-icon.svg';

const TradSaunaSection = () => (
  <section className="trad-sauna">
    <div className="trad-sauna__inner">
      <div className="trad-sauna__icon">
        <img src={tradIcon} alt="Traditional Finnish Sauna" />
      </div>
      <h3 className="trad-sauna__title">Traditional Finnish Sauna</h3>
      <div className="trad-sauna__descriptions">
        <p>
          A high-temperature, dry-air sauna with centuries of healing heritage.
        </p>
        <p>
          <strong>What it does:</strong> The intense heat promotes full-body detox, supports cardiovascular health, improves breathing, and relaxes deep muscle tension.
        </p>
        <p>
          As your body sweats, it flushes out toxins, clears the skin, and eases tightness, perfect to start the day, reset after training, or unwind after a long shift.
        </p>
        <p>
          <strong>Why it works:</strong> The dry air raises your core temperature, increasing circulation, calming the nervous system, and triggering natural recovery from the inside out.
        </p>
      </div>
      <p className="trad-sauna__tagline">
        Sweat it out, breathe deep,<br/>come back to balance.
      </p>
    </div>
  </section>
);

export default TradSaunaSection;