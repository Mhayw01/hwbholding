import React from 'react';
import Section1 from '../Components/HomePage/Section1';
import Section2 from '../Components/HomePage/Section2';
import Section3 from '../Components/HomePage/Section3';
import Section4 from '../Components/HomePage/Section4';

function HomePage() {
  return (
    <main className="page">
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
    </main>
  );
}

export default HomePage;