import React from 'react';
import Nailgirl from '../Components/Partner/Nailgirl';
import Salon from '../Components/Partner/Salon';
import Helen from '../Components/Partner/Helen';
import Solpathy from '../Components/Partner/Solpathy';

const PartnerPage = () => {
  return (
    <main>
      <h1 className="page-title" style={{ textAlign: 'center' }}>Hwb Partners</h1>
      <Nailgirl />
      <Salon />
      <Helen />
      <Solpathy />
    </main>
  );
};

export default PartnerPage;
