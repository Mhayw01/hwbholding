

import React from 'react';
import './Section3.css';

const Section3 = () => (
  <section className="home-section3">
    <div className="home-section3__inner">
      <h2 className="home-section3__title">
        WHAT MAKES US<br/>DIFFERENT
      </h2>
      <ul className="home-section3__list">
        <li className="home-section3__item">
          <span className="home-section3__bullet" />
          <span className="home-section3__text">Community first approach</span>
        </li>
        <li className="home-section3__item">
          <span className="home-section3__bullet" />
          <span className="home-section3__text">
            Affordable access to<br/>premium therapies
          </span>
        </li>
        <li className="home-section3__item">
          <span className="home-section3__bullet" />
          <span className="home-section3__text">Supportive environment to all</span>
        </li>
        <li className="home-section3__item">
          <span className="home-section3__bullet" />
          <span className="home-section3__text">Driven by purpose, not profit</span>
        </li>
      </ul>
    </div>
  </section>
);

export default Section3;