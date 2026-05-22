import React from 'react';
import SnapFitness from '../Components/Collabs/SnapFitness';
import ValeRunners from '../Components/Collabs/ValeRunners';
import BarryRFC from '../Components/Collabs/BarryRFC';

const CollabsPage = () => {
  return (
    <main>
      <h1 className="page-title" style={{ textAlign: 'center' }}>Collabs</h1>
      <SnapFitness />
      <ValeRunners />
      <BarryRFC />
    </main>
  );
};

export default CollabsPage;
