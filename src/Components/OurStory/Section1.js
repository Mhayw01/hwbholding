

import React from 'react';
import './Section1.css';

const Section1 = () => (
  <section className="story-section1">
    {/* Background bars */}
    <div className="story-section1__bar story-section1__bar--black" />
    <div className="story-section1__bar story-section1__bar--orange" />

    {/* Content */}
    <div className="story-section1__content">
      <h2 className="story-section1__header">Our Story - Jake Hudson</h2>
      <h3 className="story-section1__subheader">
        From Royal Navy<br/>to Community Champion
      </h3>
      <p className="story-section1__text">
        At 16, I joined the Royal Navy. It taught me discipline, leadership, and the true value of camaraderie. But life changed when I had to return home unexpectedly after losing my mum. That moment, along with the pressures of military life, sent me on a much deeper journey.
        <br/><br/>
        My biggest battle came after the service, with my own mental health. I reached a crisis point. Depression hit hard. But with the support of veteran networks and mental health services, I slowly started to rebuild.
        <br/><br/>
        That process changed me. It made me realise just how vital community, recovery, and accessible wellbeing spaces really are ,not just for veterans, but for anyone who’s struggling. And that’s when the idea for HWB was born.
      </p>
    </div>
  </section>
);

export default Section1;