'use client';

import Image from 'next/image';
import { useState } from 'react';

export default function CreativeArts() {
  const [activeCategory, setActiveCategory] = useState('music');

  const categories = {
    music: {
      title: 'Music & Movement',
      description: 'Explore rhythm, melody, and movement through engaging musical activities.',
      activities: [
        {
          name: 'Mini Orchestra',
          description: 'Children learn to play simple instruments and create beautiful music together.',
          image: 'https://img.freepik.com/free-vector/children-playing-music-class_74855-5247.jpg',
          benefits: ['Rhythm Development', 'Coordination', 'Team Work']
        },
        {
          name: 'Dance Expression',
          description: 'Creative movement and dance help children express emotions and develop motor skills.',
          image: 'https://img.freepik.com/free-vector/children-dancing-together_74855-5271.jpg',
          benefits: ['Body Awareness', 'Self Expression', 'Physical Fitness']
        },
        {
          name: 'Singing Time',
          description: 'Fun vocal exercises and songs that enhance language development and confidence.',
          image: 'https://img.freepik.com/free-vector/children-singing-together-illustration_74855-5245.jpg',
          benefits: ['Language Skills', 'Confidence', 'Memory']
        }
      ]
    },
    art: {
      title: 'Visual Arts',
      description: 'Unleash creativity through various art forms and mediums.',
      activities: [
        {
          name: 'Paint & Draw',
          description: 'Express imagination through colors, shapes, and different art materials.',
          image: 'https://img.freepik.com/free-vector/children-painting-with-brushes_74855-5276.jpg',
          benefits: ['Creative Expression', 'Color Recognition', 'Fine Motor Skills']
        },
        {
          name: 'Clay Modeling',
          description: 'Develop fine motor skills and spatial awareness through clay work.',
          image: 'https://img.freepik.com/free-vector/children-making-pottery_74855-5281.jpg',
          benefits: ['3D Understanding', 'Tactile Development', 'Patience']
        },
        {
          name: 'Craft Workshop',
          description: 'Create unique crafts using various materials and techniques.',
          image: 'https://img.freepik.com/free-vector/children-doing-arts-crafts_74855-5285.jpg',
          benefits: ['Problem Solving', 'Resource Use', 'Creativity']
        }
      ]
    },
    drama: {
      title: 'Drama & Theatre',
      description: 'Build confidence and communication skills through dramatic play.',
      activities: [
        {
          name: 'Story Acting',
          description: 'Bring favorite stories to life through dramatic performance.',
          image: 'https://img.freepik.com/free-vector/children-doing-theater-performance_74855-5289.jpg',
          benefits: ['Storytelling', 'Confidence', 'Imagination']
        },
        {
          name: 'Puppet Shows',
          description: 'Create and perform puppet shows to develop narrative skills.',
          image: 'https://img.freepik.com/free-vector/children-doing-puppet-show_74855-5293.jpg',
          benefits: ['Voice Modulation', 'Creativity', 'Social Skills']
        },
        {
          name: 'Role Play',
          description: 'Explore different roles and scenarios through imaginative play.',
          image: 'https://img.freepik.com/free-vector/children-playing-dress-up_74855-5297.jpg',
          benefits: ['Empathy', 'Social Understanding', 'Expression']
        }
      ]
    }
  };

  return (
    <section className="py-20 bg-gradient-to-b from-pink-50 to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Creative Arts Program</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Nurturing creativity and self-expression through diverse artistic experiences.
          </p>
        </div>

        {/* Category Navigation */}
        <div className="flex justify-center gap-4 mb-16 flex-wrap">
          {Object.keys(categories).map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-3 rounded-full text-lg font-semibold transition-all duration-300 ${
                activeCategory === category
                  ? 'bg-gradient-to-r from-pink-500 to-purple-500 text-white shadow-lg scale-105'
                  : 'bg-white text-gray-600 hover:bg-pink-50'
              }`}
            >
              {categories[category].title}
            </button>
          ))}
        </div>

        {/* Category Description */}
        <div className="text-center mb-12">
          <h3 className="text-2xl font-bold text-gray-800 mb-3">
            {categories[activeCategory].title}
          </h3>
          <p className="text-gray-600">
            {categories[activeCategory].description}
          </p>
        </div>

        {/* Activity Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories[activeCategory].activities.map((activity) => (
            <div
              key={activity.name}
              className="group bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 overflow-hidden"
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={activity.image}
                  alt={activity.name}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-300"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
              <div className="p-6">
                <h4 className="text-xl font-bold text-gray-800 mb-3">{activity.name}</h4>
                <p className="text-gray-600 mb-4">{activity.description}</p>
                <div className="flex flex-wrap gap-2">
                  {activity.benefits.map((benefit) => (
                    <span
                      key={benefit}
                      className="px-3 py-1 bg-purple-100 text-purple-600 rounded-full text-sm font-medium"
                    >
                      {benefit}
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