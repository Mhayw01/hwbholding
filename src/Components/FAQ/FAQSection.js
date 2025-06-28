import React from 'react';
import AccordionItem from './AccordionItem';
import './FAQSection.css';

const FAQSection = ({ section, openItemId, onToggle }) => (
  <section className="faq-section">
    {section.id === 'benefits' && (
      <h1 className="faq-page__title">FAQs</h1>
    )}
    <h2 className="faq-section__title">{section.title}</h2>
    <div className="faq-section__items">
      {section.items.map(item => (
        <AccordionItem
          key={item.id}
          id={item.id}
          question={item.question}
          answer={item.answer}
          isOpen={openItemId === item.id}
          onToggle={onToggle}
          themeColor={section.themeColor}
        />
      ))}
    </div>
  </section>
);

export default FAQSection;
