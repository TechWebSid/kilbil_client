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
        title: 'Active Play Area',
        description: 'Develop physical strength and coordination through fun indoor activities.',
        image: 'https://img.freepik.com/free-vector/children-playing-different-games-kindergarten_74855-7370.jpg',
        skills: ['Physical Fitness', 'Social Skills', 'Coordination']
      },
      {
        title: 'Reading Corner',
        description: 'Cozy corner for storytelling and early literacy development.',
        image: 'https://img.freepik.com/free-vector/children-reading-concept-illustration_114360-8559.jpg',
        skills: ['Literacy', 'Imagination', 'Language']
      }
    ],
    creative: [
      {
        title: 'Music & Movement',
        description: 'Express through rhythm, dance, and musical instruments.',
        image: 'https://img.freepik.com/free-vector/children-playing-music-class_74855-5247.jpg',
        skills: ['Rhythm', 'Coordination', 'Expression']
      },
      {
        title: 'Dramatic Play',
        description: 'Develop social skills and creativity through role-playing activities.',
        image: 'https://img.freepik.com/free-vector/children-doing-theater-performance_74855-5289.jpg',
        skills: ['Social Skills', 'Imagination', 'Communication']
      },
      {
        title: 'Sensory Play',
        description: 'Explore different textures and materials to develop sensory awareness.',
        image: 'https://img.freepik.com/free-vector/children-playing-with-different-toys_74855-5280.jpg',
        skills: ['Sensory Development', 'Fine Motor Skills', 'Discovery']
      },
      {
        title: 'Learning Games',
        description: 'Educational games that make learning fun and interactive.',
        image: 'https://img.freepik.com/free-vector/children-playing-educational-game_74855-5287.jpg',
        skills: ['Problem Solving', 'Memory', 'Cognitive Skills']
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
          {['indoor', 'creative'].map((type) => (
            <button
              key={type}
              onClick={() => setActiveTab(type)}
              className={`px-6 py-3 rounded-full text-lg font-semibold transition-all duration-300 ${
                activeTab === type
                  ? 'bg-yellow-400 text-white shadow-lg scale-105'
                  : 'bg-white text-gray-600 hover:bg-yellow-50'
              }`}
            >
              {type === 'indoor' ? 'Indoor Activities' : 'Creative Activities'}
            </button>
          ))}
        </div>

        {/* Activity Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
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