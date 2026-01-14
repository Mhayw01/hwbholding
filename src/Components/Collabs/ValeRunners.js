import React from 'react';
import './ValeRunners.css';
import valerunnersLogo from '../../assets/valerunners-logo.svg';

const ValeRunners = () => {
  return (
    <section className="valerunners">
      <div className="valerunners__inner">
        <img className="valerunners__logo" src={valerunnersLogo} alt="Vale Runners logo" />
        <p className="valerunners__tagline">Moving for Mind, Body & Recovery</p>
        <div className="valerunners__copy">
          <p>
            We’re proud to be collaborating with Vale Runners, a free, all-abilities running group based right here in Barry — and proudly voted Run Wales Running Group of the Year 2022.
          </p>
          <p>
            More than just a running club, Vale Runners are a community built on encouragement, inclusivity and the joy of movement. With weekly sessions ranging from 3K to 10K, hill sprints to easy-paced chatty runs, they create space for everyone — from complete beginners to seasoned runners — to move their body, clear their mind, and connect with others.
          </p>
          <p>
            But the support doesn’t stop at the finish line. As part of their commitment to full-body wellness, Vale Runners are also using the Hwb’s contrast therapy facilities — combining heat and cold exposure as a powerful recovery tool. Whether it’s easing tired muscles after a long run or building mental resilience, contrast therapy has become a popular part of their health and well-being routine.
          </p>
          <p>
            What we love most? Their dedication to well-being through movement, connection and self-care. From supportive run leaders to community-focused sessions, Vale Runners bring exactly the kind of energy we’re proud to host at the Hwb.
          </p>
          <p>
            All sessions are completely free and shared weekly on the Vale Runners Facebook page. Whether you’re starting your running journey or rediscovering your stride, they’re a brilliant place to begin — and you’ll likely find them winding down right here at the Hwb.
          </p>
        </div>
        <div className="valerunners__social">
          <p className="valerunners__socialText">Follow Vale Runners on Facebook</p>
        </div>
      </div>
    </section>
  );
};

export default ValeRunners;
