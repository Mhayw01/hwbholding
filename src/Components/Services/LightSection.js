

import React from 'react';
import './LightSection.css';
import lightIcon from '../../assets/light-icon.svg';

const LightSection = () => (
  <section className="light-section">
    <div className="light-section__inner">
      <div className="light-section__icon">
        <img src={lightIcon} alt="Chromatherapy Lighting" />
      </div>
      <h3 className="light-section__title">Chromatherapy Lighting</h3>
      <div className="light-section__descriptions">
        <p>
          Immersive colour therapy lighting flows through every hot and cold space, creating a full-body sensory experience.
        </p>
        <p>
          <strong>What it does:</strong> Shifting light tones support mood, energy, sleep, and emotional balance — with colours like blue to calm, red to energise, and green to restore harmony.
        </p>
        <p>
          Whether you’re unwinding in the sauna or stepping into the cold, the light helps guide your mindset and deepen your reset.
        </p>
        <p>
          <strong>Why it works:</strong> Each colour emits a unique frequency that interacts with the body’s energy systems, helping to regulate your circadian rhythm, boost melatonin, and promote natural healing.
        </p>
      </div>
      <p className="light-section__tagline">
        Bathed in colour, you find your mood<br/>shift and your energy return.
      </p>
    </div>
  </section>
);

export default LightSection;