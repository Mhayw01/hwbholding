import React from 'react';
import './WellbeingDay.css';
import wellbeingDayPoster from '../../assets/hwb-veterans-wellbeing-day.jpg';

const WellbeingDay = () => {
  return (
    <section className="veterans-wellbeing">
      <div className="veterans-wellbeing__inner">
        <img
          src={wellbeingDayPoster}
          alt="Hwb for Heroes — Veterans Wellbeing Day, every last Tuesday of the month"
          className="veterans-wellbeing__poster"
        />
      </div>
    </section>
  );
};

export default WellbeingDay;
