

import React from 'react';
import './Section3.css';
import AboutLogo from '../../assets/about-logo.svg';

const Section3 = () => {
  return (
    <section className="veterans3">
      <div className="veterans3__inner">
        <h2 className="veterans3__title">Support Beyond the Hwb</h2>
        <img src={AboutLogo} alt="About Turn logo" className="veterans3__logo" />
        <p className="veterans3__text">
          <strong>About Turn: Veteran-Led Support That Understands</strong>
          <br /><br />
          If you’re a veteran or family member struggling with mental health or the transition back to civilian life, we want you to know about <strong>About Turn</strong>, a brilliant community organisation based here in Wales, founded by veterans, for veterans.
          <br /><br />
          They offer free, non-judgemental support for anyone impacted by their time in the Armed Forces. That could be anxiety, depression, isolation, or simply struggling to find a new sense of purpose. About Turn gets it, because they’ve lived it.
          <br /><br />
          What makes them special is the peer-led approach: you’ll be supported by people who understand your journey, because they’ve walked it too. Whether it’s 1-to-1 support, group sessions, or simply a safe place to talk, they’re doing life-changing work across Wales and we’re proud to signpost anyone who needs it.
          <br /><br />
          Learn more at <a href="https://aboutturnwales.org" target="_blank" rel="noopener noreferrer">aboutturnwales.org</a>
        </p>
      </div>
    </section>
  );
};

export default Section3;