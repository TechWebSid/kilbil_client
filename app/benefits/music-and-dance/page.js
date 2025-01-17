"use client";
import { useState } from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

const ACTIVITIES = [
  {
    title: "Musical Games",
    description: "Fun rhythm and melody activities",
    image: "https://img.freepik.com/free-vector/cute-children-playing-music-cartoon-vector-icon-illustration_138676-2782.jpg",
    skills: ["Rhythm recognition", "Musical memory", "Team coordination"]
  },
  {
    title: "Dance Expression",
    description: "Creative movement and dance routines",
    image: "https://img.freepik.com/free-vector/cute-children-dancing-cartoon-illustration_138676-2783.jpg",
    skills: ["Body awareness", "Balance", "Self-expression"]
  },
  {
    title: "Singing Time",
    description: "Voice training and group singing",
    image: "https://img.freepik.com/free-vector/cute-children-singing-cartoon-illustration_138676-2784.jpg",
    skills: ["Vocal control", "Language development", "Confidence building"]
  }
];

const GALLERY_IMAGES = [
  "https://img.freepik.com/free-vector/children-music-class_1308-28445.jpg",
  "https://img.freepik.com/free-vector/children-dance-class_1308-28446.jpg",
  "https://img.freepik.com/free-vector/children-singing-together_1308-28447.jpg",
  "https://img.freepik.com/free-vector/children-musical-performance_1308-28448.jpg"
];

export default function MusicAndDance() {
  const [activeImage, setActiveImage] = useState(0);

  return (
    <main className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-28 pb-16 bg-gradient-to-b from-purple-100 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2 space-y-6">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-800">
                Music & Dance
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500">
                  Move & Groove
                </span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Let your child discover the joy of rhythm, movement, and self-expression! 🎵
              </p>
            </div>
            <div className="md:w-1/2">
              <img 
                src="https://img.freepik.com/free-vector/children-music-dance-illustration_1308-28449.jpg"
                alt="Children dancing and playing music"
                className="rounded-2xl shadow-xl hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
            Key Benefits 🌟
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Physical Development",
                description: "Improve coordination and motor skills",
                icon: "💃"
              },
              {
                title: "Cognitive Growth",
                description: "Enhance memory and pattern recognition",
                icon: "🧠"
              },
              {
                title: "Social Skills",
                description: "Build teamwork and communication",
                icon: "🤝"
              }
            ].map((benefit) => (
              <div
                key={benefit.title}
                className="bg-purple-50 rounded-xl p-6 text-center hover:shadow-lg transition-shadow"
              >
                <span className="text-4xl mb-4 block">{benefit.icon}</span>
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  {benefit.title}
                </h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Activities */}
      <section className="py-20 bg-gradient-to-b from-white to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
            Musical Adventures 🎵
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {ACTIVITIES.map((activity) => (
              <div
                key={activity.title}
                className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
              >
                <img
                  src={activity.image}
                  alt={activity.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">
                    {activity.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{activity.description}</p>
                  <div className="space-y-2">
                    {activity.skills.map((skill) => (
                      <div
                        key={skill}
                        className="flex items-center text-sm text-purple-600"
                      >
                        <span className="mr-2">🎵</span>
                        {skill}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
            Musical Moments 📸
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {GALLERY_IMAGES.map((image, index) => (
              <div
                key={index}
                className="relative group overflow-hidden rounded-xl cursor-pointer"
                onClick={() => setActiveImage(index)}
              >
                <img
                  src={image}
                  alt={`Gallery image ${index + 1}`}
                  className="w-full h-48 object-cover transform group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-purple-600/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center">
                  <span className="text-white text-lg font-bold p-4">View</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-500 to-pink-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready to Make Some Music? 🎵
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Join our music and dance programs to unlock your child's artistic potential!
          </p>
          <button className="bg-white text-purple-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition-colors duration-200 shadow-lg">
            Enroll Now
          </button>
        </div>
      </section>

      <Footer />
    </main>
  );
} 