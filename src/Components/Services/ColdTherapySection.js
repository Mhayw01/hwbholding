import React from 'react';
import './ColdTherapySection.css';
import coldIcon from '../../assets/cold-icon-services.svg';

const ColdTherapySection = () => (
  <section className="cold-therapy">
    {/* Background bars */}
    <div className="cold-therapy__bar cold-therapy__bar--black" />
    <div className="cold-therapy__bar cold-therapy__bar--blue" />

    {/* Inner content */}
    <div className="cold-therapy__inner">
      <h2 className="cold-therapy__header-text">OUR SERVICES &amp; BENEFITS</h2>

      <div className="cold-therapy__icon">
        <img src={coldIcon} alt="Cold Plunge Baths" />
      </div>

      <h3 className="cold-therapy__title">Cold Plunge Baths</h3>

      <div className="cold-therapy__descriptions">
        <p>
          Two deep ice plunge baths kept between 6–10°C for powerful contrast therapy.
        </p>
        <p>
          <strong>What it does:</strong> Cold immersion stimulates blood flow, reduces inflammation, and releases endorphins.
        </p>
        <p>
          Whether you’re an athlete, shift worker, or just need a reset — you’ll feel the mental clarity and physical relief almost instantly.
        </p>
        <p>
          <strong>Why it works:</strong> Used regularly, cold therapy can support better sleep, a stronger immune system, and reduced muscle soreness.
        </p>
      </div>

      <p className="cold-therapy__tagline">
        Step in, reset your system<br/>and leave feeling recharged.
      </p>
    </div>
  </section>
);

export default ColdTherapySection;
