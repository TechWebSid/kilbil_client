"use client";
import { useState } from 'react';
import Link from 'next/link';

const BENEFITS = [
  {
    title: 'Art & Craft',
    benefits: [
      'Enhances creativity and imagination',
      'Develops fine motor skills',
      'Improves hand-eye coordination',
      'Boosts self-expression and confidence'
    ],
    icon: '🎨',
    color: 'from-pink-100 to-pink-50',
    slug: 'art-and-craft'
  },
  {
    title: 'Outdoor Play',
    benefits: [
      'Builds physical fitness and strength',
      'Develops teamwork and social skills',
      'Improves balance and coordination',
      'Promotes healthy lifestyle habits'
    ],
    icon: '⚽',
    color: 'from-green-100 to-green-50',
    slug: 'outdoor-play'
  },
  {
    title: 'Music & Dance',
    benefits: [
      'Improves rhythm and coordination',
      'Enhances self-expression',
      'Develops listening skills',
      'Boosts emotional development'
    ],
    icon: '🎵',
    color: 'from-purple-100 to-purple-50',
    slug: 'music-and-dance'
  },
  {
    title: 'Story Time',
    benefits: [
      'Enhances language development',
      'Stimulates imagination',
      'Improves listening skills',
      'Develops empathy and emotions'
    ],
    icon: '📚',
    color: 'from-yellow-100 to-yellow-50',
    slug: 'story-time'
  }
];

export default function BenefitsSection() {
  const [activeIndex, setActiveIndex] = useState(null);

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Benefits of Activities 🌟
          </h2>
          <p className="text-xl text-gray-600">
            Discover how our activities contribute to your child's development
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {BENEFITS.map((benefit, index) => (
            <div
              key={benefit.title}
              className={`rounded-2xl p-6 bg-gradient-to-b ${benefit.color} shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer transform hover:-translate-y-2`}
              onMouseEnter={() => setActiveIndex(index)}
              onMouseLeave={() => setActiveIndex(null)}
            >
              <div className="text-center mb-6">
                <span className="text-5xl mb-4 block animate-bounce">
                  {benefit.icon}
                </span>
                <h3 className="text-2xl font-bold text-gray-800">
                  {benefit.title}
                </h3>
              </div>

              <ul className="space-y-3">
                {benefit.benefits.map((item, i) => (
                  <li
                    key={i}
                    className={`flex items-center text-gray-700 transition-all duration-300 transform ${
                      activeIndex === index
                        ? 'translate-x-2'
                        : ''
                    }`}
                  >
                    <span className="mr-2 text-purple-500">•</span>
                    {item}
                  </li>
                ))}
              </ul>

              <div className={`mt-6 text-center transition-opacity duration-300 ${
                activeIndex === index ? 'opacity-100' : 'opacity-0'
              }`}>
                <Link 
                  href={`/benefits/${benefit.slug}`}
                  className="bg-white px-4 py-2 rounded-full text-purple-600 font-semibold shadow-md hover:bg-purple-50 transition-colors inline-block"
                >
                  Learn More
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 