import React from 'react';
import ColdTherapySection from '../Components/Services/ColdTherapySection';
import TradSaunaSection from '../Components/Services/TradSaunaSection';
import InfraredSection from '../Components/Services/InfraredSection';
import LightSection from '../Components/Services/LightSection';
import CommunityRoomSection from '../Components/Services/CommunityRoomSection';
import PartnerSection from '../Components/Services/PartnerSection';

function ServicesPage() {
  return (
    <div className="page">
      <ColdTherapySection />
      <TradSaunaSection />
      <InfraredSection />
      <LightSection />
      <CommunityRoomSection />
      <PartnerSection />
    </div>
  );
}

export default ServicesPage;