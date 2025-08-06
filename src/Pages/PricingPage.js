import React from 'react';
import pricingAsset from '../assets/pricing-asset.svg';

const PricingPage = () => {
  return (
    <div className="pricing-page">
      <h1 style={{ textAlign: 'center', marginTop: '20px', fontFamily: 'Montserrat', fontSize: '24px' }}>Pricing</h1>
      <div style={{ display: 'flex', justifyContent: 'center', marginTop: '30px' }}>
        <img src={pricingAsset} alt="Pricing Information" style={{ maxWidth: '90%', height: 'auto' }} />
      </div>
    </div>
  );
};

export default PricingPage;
