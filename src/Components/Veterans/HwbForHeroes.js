import React from 'react';
import './HwbForHeroes.css';
import VeteransLogo from '../../assets/Veterans-logo.svg';

const items = [
  {
    title: 'Monthly Veterans Wellbeing Day',
    body:
      'Every last Tuesday of the month, Hwb for Heroes runs a dedicated Veterans Wellbeing Day offering free access to contrast therapy sessions, including traditional sauna, infrared sauna and ice baths. Veterans are also encouraged to stay for a brew, conversation and peer support in a relaxed environment.',
  },
  {
    title: "Stand Tall - Men's Mental Health Group",
    body:
      "Every Monday evening, the Health Hwb hosts Stand Tall, a men's mental health support group focused on creating a safe environment for men to open up, connect and support one another through honest conversation and community.",
  },
  {
    title: 'Veterans Safe Space Garden',
    body:
      'The Hwb for Heroes Veterans Safe Space Garden was created through community collaboration and support from local businesses. The garden provides veterans with a quiet outdoor area to relax, reflect and connect with others in a safe environment.',
  },
  {
    title: 'HMS Raleigh to Barry Awareness Walk',
    body:
      'Jake Hudson, Helen George and Ian George completed an 8-day, 182-mile walk from HMS Raleigh in Plymouth back to Barry to raise awareness around veteran wellbeing and mental health. The challenge also helped raise funds towards building the Veterans Safe Space Garden.',
  },
  {
    title: 'Community Walk & Talk',
    body:
      'Weekly Walk & Talk sessions are organised to encourage veterans and members of the local community to get outside, move more and connect socially. These sessions help combat isolation and support mental wellbeing.',
  },
  {
    title: 'Veterans Christmas Dinner',
    body:
      'Hwb for Heroes proudly organised and delivered a free Veterans Christmas Dinner on Christmas Day, ensuring veterans had somewhere welcoming and supportive to attend during the festive period. This was made possible with the support of Barry Athletic Football Club, who kindly provided the venue.',
  },
  {
    title: 'Annual Veteran Charity Fundraising',
    body:
      "Health Hwb / Hwb for Heroes dedicates an entire year of fundraising and awareness efforts towards a chosen veteran organisation. This year's chosen charity is Riverside Retreat Veterans Camp — a veteran safe space that offers support all year round, including camping stays, family breaks, safe accommodation and emergency support for vulnerable veterans, all completely free of charge.",
  },
  {
    title: 'Partnership with WRKHAUS',
    body:
      'Hwb for Heroes has recently partnered with WRKHAUS, an internationally recognised branded workwear, embroidery, printing, PPE, toolwear and industrial supply company. WRKHAUS has generously committed to providing branded Hwb for Heroes merchandise free of charge throughout the year to support veterans within the community.',
  },
  {
    title: 'Snap Fitness Partnership',
    body:
      'Partnerships with organisations such as Snap Fitness Barry play a huge role in helping us continue supporting our veteran community in a meaningful way. By making fitness more affordable and accessible, this partnership gives veterans the opportunity to improve not only their physical health, but also their mental wellbeing, routine, confidence and social connection.',
  },
];

const HwbForHeroes = () => {
  return (
    <section className="hwb-heroes">
      <div className="hwb-heroes__inner">
        <img src={VeteransLogo} alt="Hwb for Heroes logo" className="hwb-heroes__logo" />
        <h2 className="hwb-heroes__title">Hwb for Heroes</h2>
        <p className="hwb-heroes__subtitle">
          Supporting Veterans Through Community, Wellness &amp; Connection
        </p>

        <div className="hwb-heroes__items">
          {items.map((item) => (
            <div className="hwb-heroes__item" key={item.title}>
              <h3 className="hwb-heroes__item-title">{item.title}</h3>
              <p className="hwb-heroes__item-body">{item.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HwbForHeroes;
