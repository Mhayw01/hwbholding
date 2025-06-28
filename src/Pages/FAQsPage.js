import React, { useState } from 'react';
import FAQSection from '../Components/FAQ/FAQSection';
import faqs from '../data/faqs';

const FAQsPage = () => {
  const [openItemId, setOpenItemId] = useState(null);

  const handleToggle = (id) => {
    setOpenItemId(prev => (prev === id ? null : id));
  };

  return (
    <div className="page">
      {faqs.map(section => (
        <FAQSection
          key={section.id}
          section={section}
          openItemId={openItemId}
          onToggle={handleToggle}
        />
      ))}
    </div>
  );
};

export default FAQsPage;