import React from 'react';
import Nailgirl from '../Components/Partner/Nailgirl';
import Salon from '../Components/Partner/Salon';
import Helen from '../Components/Partner/Helen';

const PartnerPage = () => {
  return (
    <main>
      <h1 className="page-title" style={{ textAlign: 'center' }}>Hwb Partners</h1>
      <Nailgirl />
      <Salon />
      <Helen />
    </main>
  );
};

export default PartnerPage;