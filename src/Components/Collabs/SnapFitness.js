import React from 'react';
import './SnapFitness.css';
import snapOfferPoster from '../../assets/snap-fitness-offer.jpg';
import snapTogetherPoster from '../../assets/snap-fitness-together.jpg';

const SnapFitness = () => {
  return (
    <section className="snapfitness">
      <div className="snapfitness__inner">
        <img
          className="snapfitness__poster"
          src={snapOfferPoster}
          alt="Snap Fitness Barry — Train Hard, Recover Smarter. 15% off all Health Hwb services for Snap Fitness members."
        />
        <img
          className="snapfitness__poster"
          src={snapTogetherPoster}
          alt="Snap Fitness Barry — Stronger Together, Better Together. Community driven, results focused."
        />
      </div>
    </section>
  );
};

export default SnapFitness;
