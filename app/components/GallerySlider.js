'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const images = [
  '/images/gallery1.jpg',
  '/images/gallery2.jpg',
  '/images/gallery3.jpg',
  '/images/gallery14.jpg',
  '/images/gallery15.jpg',
  '/images/gallery16.jpg',
  '/images/gallery17.jpg',
  '/images/gallery18.jpg',
  '/images/gallery19.jpg',
  '/images/gallery20.jpg',
  '/images/gallery21.jpg',
];

export default function GallerySlider() {
  return (
    <Swiper
      modules={[Navigation, Pagination, Autoplay]}
      spaceBetween={20}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      autoplay={{ delay: 3000, disableOnInteraction: false }}
      breakpoints={{
        640: {
          slidesPerView: 2,
        },
        1024: {
          slidesPerView: 3,
        },
      }}
      className="w-full"
    >
      {images.map((image, index) => (
        <SwiperSlide key={index}>
          <div className="group relative overflow-hidden rounded-xl shadow-md hover:shadow-xl transition-all duration-300">
            <img 
              src={image}
              alt={`Fun activity ${index + 1}`}
              className="w-full h-[400px] object-cover group-hover:scale-110 transition-transform duration-300"
            />
           
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
} 