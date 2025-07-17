import React from 'react';
import review1 from '../assets/Review1.svg';

const ReviewsPage = () => {
  return (
    <div className="reviews-page" style={{ padding: '4rem 1rem', textAlign: 'center' }}>
      <h1 style={{ fontFamily: 'Montserrat', fontSize: '24px', marginBottom: '2rem' }}>Reviews</h1>
      <img src={review1} alt="Review 1" style={{ width: '100%', maxWidth: '600px', height: 'auto', borderRadius: '5px' }} />
    </div>
  );
};

export default ReviewsPage;
