import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper';
import 'swiper/css';
import 'swiper/css/autoplay';
import './Slides.css';

import slide1 from '../../assets/Slide1.svg';
import slide2 from '../../assets/slide2.svg';
import slide3 from '../../assets/slide3.svg';

const slides = [slide1, slide2, slide3];

const Slides = () => (
  <section className="slides">
    <Swiper
      modules={[Autoplay]}
      autoplay={{ delay: 3000, disableOnInteraction: false }}
      loop
      spaceBetween={20}
      breakpoints={{
        0:    { slidesPerView: 1 },
        768:  { slidesPerView: 3 },
        1024: { slidesPerView: 5 },
      }}
    >
      {slides.map((src, idx) => (
        <SwiperSlide key={idx}>
          <img src={src} alt={`Slide ${idx + 1}`} />
        </SwiperSlide>
      ))}
    </Swiper>
  </section>
);

export default Slides;