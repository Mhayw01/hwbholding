import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Slides from './Components/Slides/Slides';
import Banner from './Components/Banner/Banner';
import HomePage from './Pages/HomePage';
import ServicesPage from './Pages/ServicesPage';
import OurStoryPage from './Pages/OurStoryPage';
import FAQsPage from './Pages/FAQsPage';
import VeteransPage from './Pages/VeteransPage';
import PartnerPage from './Pages/PartnerPage';
import ReviewsPage from './Pages/ReviewsPage';
import './App.css';

// Wrapper to show Slides on select pages
function AppRoutes() {
  const { pathname } = useLocation();
  const showSlides = ['/services', '/our-story', '/faqs', '/veterans', '/reviews'].includes(pathname);
  return (
    <>
      {showSlides && <Slides />}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/our-story" element={<OurStoryPage />} />
        <Route path="/faqs" element={<FAQsPage />} />
        <Route path="/veterans" element={<VeteransPage />} />
        <Route path="/partners" element={<PartnerPage />} />
        <Route path="/reviews" element={<ReviewsPage />} />
      </Routes>
    </>
  );
}

function App() {
  return (
    <Router>
      <Banner />
      <AppRoutes />
    </Router>
  );
}

export default App;