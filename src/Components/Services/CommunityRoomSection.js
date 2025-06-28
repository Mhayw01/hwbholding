import React from 'react';
import './CommunityRoomSection.css';
import communityIcon from '../../assets/community-room-icon.svg';

const CommunityRoomSection = () => (
  <section className="community-room">
    <div className="community-room__inner">
      <div className="community-room__icon">
        <img src={communityIcon} alt="Community Well-being Room" />
      </div>
      <h3 className="community-room__title">Community Well-being Room</h3>
      <div className="community-room__descriptions">
        <p>
          A calming space to pause, reflect, and connect – whether you stretch, meditate, breathe or simply sit still.
        </p>
        <p>
          It’s designed to be yours: a moment of quiet before the cold, a place to write or recharge after the sauna.
        </p>
        <p>
          The room adapts to group sessions, 1-to-1 wellbeing work, or solo reflection, always supporting your mental and emotional reset.
        </p>
      </div>
      <p className="community-room__tagline">
        Your calm space to rest,<br/>reflect, or simply be.
      </p>
    </div>
  </section>
);

export default CommunityRoomSection;
