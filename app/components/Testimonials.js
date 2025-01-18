'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

export default function Testimonials() {
  return (
    <section className="py-20 bg-gradient-to-b from-purple-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-6">What Parents Say</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Hear from our community of parents about their experience with Kids Academy
          </p>
        </div>

        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          pagination={{ clickable: true }}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          breakpoints={{
            640: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
          className="pb-12"
        >
          {[
            {
              name: 'Sarah Johnson',
              role: 'Parent of Alex, Age 5',
              image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg',
              quote: 'The teachers at Kids Academy are exceptional. My son has grown so much in confidence and skills since joining.'
            },
            {
              name: 'Michael Chen',
              role: 'Parent of Emma, Age 4',
              image: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg',
              quote: 'The diverse learning activities and caring environment make this school special. Emma loves coming here every day!'
            },
            {
              name: 'Emily Rodriguez',
              role: 'Parent of Sophia, Age 3',
              image: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg',
              quote: 'Were amazed by the progress our daughter has made. The staff truly cares about each childs development.'
            },
            {
              name: 'David Wilson',
              role: 'Parent of James, Age 5',
              image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg',
              quote: 'The facilities are top-notch and the curriculum is well-balanced. Couldnt ask for a better school!'
            }
          ].map((testimonial, index) => (
            <SwiperSlide key={index}>
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 h-full">
                <div className="flex items-center gap-4 mb-6">
                  <img 
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full object-cover"
                  />
                  <div>
                    <h3 className="font-bold text-gray-800">{testimonial.name}</h3>
                    <p className="text-gray-600 text-sm">{testimonial.role}</p>
                  </div>
                </div>
                <div className="relative">
                  <span className="text-6xl text-purple-200 absolute -top-6 -left-2">"</span>
                  <p className="text-gray-600 relative z-10 pl-6">
                    {testimonial.quote}
                  </p>
                  <div className="mt-6 flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className="text-yellow-400">★</span>
                    ))}
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
} 