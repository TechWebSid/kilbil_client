'use client';

import { useState } from 'react';
import Image from 'next/image';

export default function LearningThroughPlay() {
  const [activeTab, setActiveTab] = useState('indoor');

  const activities = {
    indoor: [
      {
        title: 'Building Blocks Corner',
        description: 'Develop spatial awareness and problem-solving skills through creative construction play.',
        image: 'https://img.freepik.com/free-vector/children-playing-with-toys-kindergarten_74855-7369.jpg',
        skills: ['Motor Skills', 'Problem Solving', 'Creativity']
      },
      {
        title: 'Art & Craft Studio',
        description: 'Express creativity through painting, drawing, and crafting with various materials.',
        image: 'https://img.freepik.com/free-vector/children-doing-art-crafts-with-teacher_74855-5139.jpg',
        skills: ['Creativity', 'Fine Motor Skills', 'Self Expression']
      },
      {
        title: 'Reading Nook',
        description: 'Cozy corner for storytelling and early literacy development.',
        image: 'https://img.freepik.com/free-vector/children-reading-concept-illustration_114360-8559.jpg',
        skills: ['Literacy', 'Imagination', 'Language']
      }
    ],
    outdoor: [
      {
        title: 'Nature Explorer Zone',
        description: 'Discover the wonders of nature through guided exploration and hands-on activities.',
        image: 'https://img.freepik.com/free-vector/children-exploring-nature-park_74855-5299.jpg',
        skills: ['Nature Knowledge', 'Observation', 'Adventure']
      },
      {
        title: 'Active Play Area',
        description: 'Develop physical strength and coordination through fun outdoor activities.',
        image: 'https://img.freepik.com/free-vector/children-playing-playground_1308-28363.jpg',
        skills: ['Physical Fitness', 'Social Skills', 'Coordination']
      },
      {
        title: 'Garden & Growing',
        description: 'Learn about plants, growth, and responsibility through gardening activities.',
        image: 'https://img.freepik.com/free-vector/children-planting-trees_74855-5279.jpg',
        skills: ['Nature Care', 'Responsibility', 'Science']
      }
    ]
  };

  return (
    <section className="py-20 bg-gradient-to-b from-yellow-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Learning Through Play
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We believe that play is the natural way children learn and develop essential life skills.
          </p>
        </div>

        {/* Activity Type Tabs */}
        <div className="flex justify-center gap-4 mb-12">
          {['indoor', 'outdoor'].map((type) => (
            <button
              key={type}
              onClick={() => setActiveTab(type)}
              className={`px-6 py-3 rounded-full text-lg font-semibold transition-all duration-300 ${
                activeTab === type
                  ? 'bg-yellow-400 text-white shadow-lg scale-105'
                  : 'bg-white text-gray-600 hover:bg-yellow-50'
              }`}
            >
              {type.charAt(0).toUpperCase() + type.slice(1)} Activities
            </button>
          ))}
        </div>

        {/* Activity Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {activities[activeTab].map((activity, index) => (
            <div
              key={activity.title}
              className="group bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 overflow-hidden"
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={activity.image}
                  alt={activity.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-300"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-800 mb-3">
                  {activity.title}
                </h3>
                <p className="text-gray-600 mb-4">
                  {activity.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {activity.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 bg-yellow-100 text-yellow-700 rounded-full text-sm font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 