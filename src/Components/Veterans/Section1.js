

import React from 'react';
import './Section1.css';
import VeteransLogo from '../../assets/Veterans-logo.svg';

const Section1 = () => {
  return (
    <section className="veterans">
      <div className="veterans__inner">
        <img src={VeteransLogo} alt="Veterans logo" className="veterans__logo" />
        <h2 className="veterans__title">From Service to Strength</h2>
        <p className="veterans__copy">
          Earlier this year, our founder Jake was honoured as a finalist at the Welsh Veterans Awards, an unforgettable moment that marked not just recognition, but reflection.
          <br /><br />
          Being named a finalist among so many incredible men and women from the Armed Forces community was overwhelming in the best way. The room was filled with people who had overcome, who had served, who had rebuilt. To be counted among them was something Jake never imagined. Every nominee had a powerful story of courage, of struggle, of growth and standing there together was a reminder that healing and strength come in many forms.
          <br /><br />
          For Jake, this wasn’t just about an award. It was about resilience. About the silent battles with mental health. About the weight he once carried alone. And most of all, it was about family. His wife Kim, and his two sons Jac and Will, the people who stood by him when life felt heavy, when the silence was loudest, and when the only option seemed to be pushing through alone. Their love was and still is his anchor.
        </p>
      </div>
    </section>
  );
};

export default Section1;