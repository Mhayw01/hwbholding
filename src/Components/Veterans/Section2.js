

import React from 'react';
import './Section2.css';
import FamilyPic from '../../assets/family-pic.svg';

const Section2 = () => {
  return (
    <section className="veterans2">
      <div className="veterans2__inner">
        <p className="veterans2__text">
          Jake often speaks honestly about the lows. About staying quiet instead of speaking up.
          About the nights that felt longer than they should. But through all of it, he discovered something powerful: you don’t have to carry it alone.
          <br /><br />
          This finalist nomination stands as a symbol, not just of past service, but of ongoing purpose. It reinforced Jake’s belief in what truly matters:
          supporting the Armed Forces community, especially those facing the invisible wounds of service.
        </p>
        <img src={FamilyPic} alt="Jake and family at awards" className="veterans2__image" />
        <p className="veterans2__text">
          As Jake said at the time:<br />
          “This photo isn’t just a photo. It’s a reminder that no matter how far you’ve fallen, it’s still possible to rise.”
          <br /><br />
          That message sits at the heart of The Health Hwb. Because from lived experience, we know the road can be long, but it doesn’t have to be walked alone.
          And for Jake, this isn’t just a passion, it’s a mission.
          <br /><br />
          To find out more or support this fantastic cause visit <a href="https://www.veteransawards.co.uk" target="_blank" rel="noopener noreferrer">www.veteransawards.co.uk</a>
        </p>
      </div>
    </section>
  );
};

export default Section2;