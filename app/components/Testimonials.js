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
            Hear from our community of parents about their experience with Kilbil
          </p>
        </div>

        {/* Featured Video Testimonial */}
        <div className="mb-20">
          <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="aspect-w-16 aspect-h-9 relative">
              <video 
                className="w-full h-full object-fit"
                controls
                preload="metadata"
                poster="/kilbil_logo.png"
              >
                <source src="/images/video.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
            </div>
            <div className="p-8 bg-gradient-to-b from-purple-50 to-white">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Featured Parent Testimonial</h3>
              <p className="text-gray-600 mb-4">
                Watch this heartfelt testimonial from one of our parents sharing their experience with Kilbil The Learning Home.
              </p>
              <div className="flex items-center gap-4">
                <div className="h-12 w-12 rounded-full bg-purple-100 flex items-center justify-center">
                  <span className="text-2xl">👨‍👩‍👧‍👦</span>
                </div>
                <div>
                  <p className="font-semibold text-gray-800">Parent Testimonial</p>
                  <p className="text-sm text-gray-500">Duration: 1:17</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Written Testimonials */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-gray-800 text-center mb-12">More Parent Reviews</h3>
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
                quote: 'The teachers at Kilbil are exceptional. My son has grown so much in confidence and skills since joining.'
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
      </div>

      {/* Add required CSS for aspect ratio */}
      <style jsx global>{`
        .aspect-w-16 {
          position: relative;
          padding-bottom: 56.25%; /* 16:9 Aspect Ratio */
        }
        .aspect-w-16 > * {
          position: absolute;
          height: 100%;
          width: 100%;
          top: 0;
          right: 0;
          bottom: 0;
          left: 0;
        }
      `}</style>
    </section>
  );
} 