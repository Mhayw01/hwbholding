import React from 'react';
import './PartnerSection.css';
import partnerIcon from '../../assets/partner-icon.svg';

const PartnerSection = () => (
  <section className="partner-section">
    <div className="partner-section__inner">
      <div className="partner-section__icon">
        <img src={partnerIcon} alt="Community Partners" />
      </div>
      <h3 className="partner-section__title">Community Partners</h3>
      <div className="partner-section__item">
        <h4 className="partner-section__item-title">Hair &amp; Nails</h4>
        <p className="partner-section__item-desc">
          Relaxing treatments that help you feel fresh, reset, and ready — because wellbeing is head to toe.
        </p>
      </div>
      <div className="partner-section__item">
        <h4 className="partner-section__item-title">Massage Therapy</h4>
        <p className="partner-section__item-desc">
          Sports recovery, deep tissue, or holistic massage to release tension and support your body’s natural recovery process.
        </p>
      </div>
      <div className="partner-section__item">
        <h4 className="partner-section__item-title">Pop-ups &amp; Wellbeing Sessions</h4>
        <p className="partner-section__item-desc">
          From mental health workshops to breathwork, journaling, and seasonal self-care events — our space is open to the community.
        </p>
      </div>
      <p className="partner-section__tagline">
        Everything here is designed to help you <br/>feel better, physically, mentally, emotionally.
      </p>
    </div>
  </section>
);

export default PartnerSection;
