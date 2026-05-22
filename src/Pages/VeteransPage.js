import React from 'react';
import HwbForHeroes from '../Components/Veterans/HwbForHeroes';
import Section1 from '../Components/Veterans/Section1';
import Section2 from '../Components/Veterans/Section2';
import WellbeingDay from '../Components/Veterans/WellbeingDay';

const VeteransPage = () => {
  return (
    <main>
      <h1 className="page-title" style={{ textAlign: 'center' }}>Veterans</h1>
      <HwbForHeroes />
      <Section1 />
      <Section2 />
      <WellbeingDay />
    </main>
  );
};

export default VeteransPage;
