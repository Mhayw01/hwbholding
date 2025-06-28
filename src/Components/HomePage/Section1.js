import React from 'react';
import { Link } from 'react-router-dom';
import './Section1.css';
import coldIcon from '../../assets/cold-icon.svg';
import fireIcon from '../../assets/fire-icon.svg';
import massageIcon from '../../assets/massage-icon.svg';
import communityIcon from '../../assets/community-icon.svg';

const Section1 = () => (
  <section className="home-section1">
    <h2 className="home-section1__title">OUR CORE SERVICES INCLUDE</h2>
    <ul className="home-section1__list">
      <li className="home-section1__item">
        <img src={coldIcon} alt="Ice Plunge Therapy" className="home-section1__icon" />
        <span className="home-section1__text">Ice Plunge Therapy</span>
      </li>
      <li className="home-section1__item">
        <img src={fireIcon} alt="Infrared & Traditional Saunas" className="home-section1__icon" />
        <span className="home-section1__text">Infrared & Traditional Saunas</span>
      </li>
      <li className="home-section1__item">
        <img src={massageIcon} alt="Massage Therapies" className="home-section1__icon" />
        <span className="home-section1__text">Massage Therapies</span>
      </li>
      <li className="home-section1__item">
        <img src={communityIcon} alt="Community Well-being Room" className="home-section1__icon" />
        <span className="home-section1__text">Community Well-being Room</span>
      </li>
    </ul>
    <Link to="/services" className="home-section1__button">View</Link>
  </section>
);

export default Section1;
