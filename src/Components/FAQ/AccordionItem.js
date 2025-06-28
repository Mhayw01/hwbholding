import React from 'react';
import './AccordionItem.css';
import plusIcon from '../../assets/plus-icon.svg';

const AccordionItem = ({ id, question, answer, isOpen, onToggle, themeColor }) => {
  return (
    <div className="accordion-item">
      <button
        className="accordion-item__header"
        style={{ backgroundColor: themeColor }}
        onClick={() => onToggle(id)}
        aria-expanded={isOpen}
      >
        <span className="accordion-item__question">{question}</span>
        <img
          className={`accordion-item__icon ${isOpen ? 'open' : ''}`}
          src={plusIcon}
          alt={isOpen ? 'Collapse' : 'Expand'}
        />
      </button>
      {isOpen && (
        <div
          className="accordion-item__content"
          style={{
            backgroundColor: themeColor,
            color: '#fff',
            borderLeftColor: themeColor
          }}
          dangerouslySetInnerHTML={{ __html: answer }}
        />
      )}
    </div>
  );
};

export default AccordionItem;