import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import './Banner.css';
import logo from '../../assets/hwblogo2.svg';

const Banner = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(prev => !prev);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className="banner">
      <div className="banner__container">
        {/* Logo */}
        <div className="banner__logo">
          <Link to="/" onClick={closeMenu}>
            <img src={logo} alt="HWB Logo" />
          </Link>
        </div>

        {/* Hamburger icon for mobile */}
        <button
          className="banner__menu-icon"
          onClick={toggleMenu}
          aria-label="Toggle navigation"
          aria-expanded={menuOpen}
        >
          ☰
        </button>

        {/* Navigation */}
        <nav className={`banner__nav${menuOpen ? ' active' : ''}`}>
          <NavLink to="/" end className={({ isActive }) => isActive ? 'active' : ''} onClick={closeMenu}>
            Home
          </NavLink>
          <NavLink to="/services" className={({ isActive }) => isActive ? 'active' : ''} onClick={closeMenu}>
            Services
          </NavLink>
          <NavLink to="/our-story" className={({ isActive }) => isActive ? 'active' : ''} onClick={closeMenu}>
            Our Story
          </NavLink>
          <NavLink to="/faqs" className={({ isActive }) => isActive ? 'active' : ''} onClick={closeMenu}>
            FAQs
          </NavLink>
          <NavLink to="/veterans" className={({ isActive }) => isActive ? 'active' : ''} onClick={closeMenu}>
            Veterans
          </NavLink>
          <NavLink to="/partners" className={({ isActive }) => isActive ? 'active' : ''} onClick={closeMenu}>
            Hwb Partners
          </NavLink>
          <NavLink to="/reviews" className={({ isActive }) => isActive ? 'active' : ''} onClick={closeMenu}>
            Reviews
          </NavLink>
        </nav>
      </div>
    </header>
  );
};

export default Banner;