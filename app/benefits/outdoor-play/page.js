"use client";
import { useState } from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

const ACTIVITIES = [
  {
    title: "Sports Games",
    description: "Team sports and physical activities",
    image: "https://img.freepik.com/free-vector/cute-children-playing-football-cartoon-vector-illustration_138676-2785.jpg",
    skills: ["Team coordination", "Physical fitness", "Strategic thinking"]
  },
  {
    title: "Nature Exploration",
    description: "Discovering and learning about nature",
    image: "https://img.freepik.com/free-vector/cute-children-exploring-nature-cartoon-illustration_138676-2788.jpg",
    skills: ["Environmental awareness", "Observation skills", "Natural curiosity"]
  },
  {
    title: "Playground Adventures",
    description: "Fun and active playground activities",
    image: "https://img.freepik.com/free-vector/cute-children-playing-playground-cartoon-illustration_138676-2789.jpg",
    skills: ["Balance & coordination", "Social interaction", "Physical development"]
  }
];

const GALLERY_IMAGES = [
  "https://img.freepik.com/free-vector/children-playing-park_1308-28891.jpg",
  "https://img.freepik.com/free-vector/children-playing-playground_1308-28892.jpg",
  "https://img.freepik.com/free-vector/children-playing-sports_1308-28893.jpg",
  "https://img.freepik.com/free-vector/children-nature-exploration_1308-28894.jpg"
];

export default function OutdoorPlay() {
  const [activeImage, setActiveImage] = useState(0);

  return (
    <main className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-28 pb-16 bg-gradient-to-b from-green-100 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2 space-y-6">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-800">
                Outdoor Play
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-teal-500">
                  Active & Healthy
                </span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Experience the joy of active play and outdoor adventures! ⚽
              </p>
            </div>
            <div className="md:w-1/2">
              <img 
                src="https://img.freepik.com/free-vector/children-playing-park-illustration_1308-28895.jpg"
                alt="Children playing outdoors"
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
                title: "Physical Health",
                description: "Build strength, stamina, and coordination",
                icon: "💪"
              },
              {
                title: "Social Development",
                description: "Learn teamwork and communication",
                icon: "🤝"
              },
              {
                title: "Nature Connection",
                description: "Develop environmental awareness",
                icon: "🌿"
              }
            ].map((benefit) => (
              <div
                key={benefit.title}
                className="bg-green-50 rounded-xl p-6 text-center hover:shadow-lg transition-shadow"
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
      <section className="py-20 bg-gradient-to-b from-white to-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
            Outdoor Adventures 🌳
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
                        className="flex items-center text-sm text-green-600"
                      >
                        <span className="mr-2">🌟</span>
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
            Outdoor Fun Gallery 📸
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
                <div className="absolute inset-0 bg-gradient-to-t from-green-600/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center">
                  <span className="text-white text-lg font-bold p-4">View</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-green-500 to-teal-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready for Adventure? 🌟
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Join our outdoor programs and watch your child thrive in nature!
          </p>
          <button className="bg-white text-green-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition-colors duration-200 shadow-lg">
            Enroll Now
          </button>
        </div>
      </section>

      <Footer />
    </main>
  );
} 