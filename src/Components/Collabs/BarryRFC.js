import React from 'react';
import './BarryRFC.css';
import barrytownLogo from '../../assets/barrytown-logo.svg';

const BarryRFC = () => {
  return (
    <section className="barryrfc">
      <div className="barryrfc__inner">
        <div className="barryrfc__logoCard">
          <img className="barryrfc__logo" src={barrytownLogo} alt="Barry RFC logo" />
        </div>
        <p className="barryrfc__tagline">Pride, Purpose & Recovery</p>
        <div className="barryrfc__copy">
          <p>
            We’re proud to be working with Barry RFC, a club that’s more than just a rugby team — it’s a family.
          </p>
          <p>
            Based at The Reservoir Fields, Barry Rugby Football Club is a cornerstone of the local community, offering rugby for boys, girls, youth, and senior players in an environment built on respect, teamwork, and belonging.
          </p>
          <p>
            From first tackle to final whistle, the club’s energy comes from its people — the volunteers, coaches, first aiders and supporters who pour their heart into the game week after week. Under the leadership of Director of Rugby Mike Morgan, Barry RFC is focused on development at every age, building strong pathways and investing in the future with new facilities, training spaces, and long-term plans to ensure the club thrives for generations to come.
          </p>
          <p>
            But rugby doesn’t end on the pitch. The physical demands of the sport require smart recovery and well-being practices — and that’s where the Health Hwb comes in. Barry RFC players are now using the Hwb’s contrast therapy facilities as part of their recovery routines, helping to reduce inflammation, improve muscle recovery, and promote long-term resilience.
          </p>
          <p>
            We’re proud to support a club that lives its values — one that gives back, plans ahead, and plays with heart. Barry RFC is a community in motion, and we’re glad to be part of that journey.
          </p>
        </div>
        <div className="barryrfc__social">
          <p className="barryrfc__socialText">Follow Barry RFC and their latest updates on Facebook</p>
        </div>
      </div>
    </section>
  );
};

export default BarryRFC;
