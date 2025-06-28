import React from 'react';
import './Section2.css';

const Section2 = () => (
  <section className="story-section2">
    {/* Full black background */}
    <div className="story-section2__background" />
    
    <div className="story-section2__content">
      <h3 className="story-section2__title">
        The Birth of HWB – A People-First Vision
      </h3>
      <p className="story-section2__text">
        I created HWB with one clear mission: to put people before profit.
        <br/><br/>
        I wanted to build something for Barry — a space that’s welcoming, inclusive, and genuinely supportive. A place where you can reset, slow down, and feel part of something bigger.
        <br/><br/>
        “I wanted a place where anyone—shift workers, nurses, students, vets—could come, reset, and feel part of something bigger.”
        <br/><br/>
        HWB isn’t just a wellness centre. It’s a hub for connection. A place to breathe, reflect, recover — without pressure or judgment.
      </p>
    </div>
  </section>
);

export default Section2;
