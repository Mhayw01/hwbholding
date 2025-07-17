import React from 'react';
import Section1 from '../Components/Veterans/Section1';
import Section2 from '../Components/Veterans/Section2';
import Section3 from '../Components/Veterans/Section3';

const VeteransPage = () => {
  return (
    <main>
      <h1 className="page-title" style={{ textAlign: 'center' }}>Veterans</h1>
      <Section1 />
      <Section2 />
      <Section3 />
    </main>
  );
};

export default VeteransPage;
