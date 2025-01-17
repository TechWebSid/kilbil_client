"use client";
import { useState } from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

const ACTIVITIES = [
  {
    title: "Drawing & Painting",
    description: "Express creativity through colors and shapes",
    image: "https://img.freepik.com/free-vector/cute-children-painting-with-paintbrush-paper-cartoon-vector-illustration-icon-isolated_138676-3324.jpg",
    skills: ["Color recognition", "Shape understanding", "Creative expression"]
  },
  {
    title: "Clay Modeling",
    description: "Develop fine motor skills with hands-on clay work",
    image: "https://img.freepik.com/free-vector/cute-children-playing-with-modeling-clay-cartoon-illustration_138676-2786.jpg",
    skills: ["Hand strength", "3D visualization", "Tactile development"]
  },
  {
    title: "Paper Crafts",
    description: "Learn cutting, folding, and creating with paper",
    image: "https://img.freepik.com/free-vector/cute-children-doing-origami-paper-craft-cartoon-illustration_138676-2787.jpg",
    skills: ["Scissor skills", "Following instructions", "Spatial awareness"]
  }
];

const GALLERY_IMAGES = [
  "https://img.freepik.com/free-vector/children-doing-art-activities_1308-28440.jpg",
  "https://img.freepik.com/free-vector/children-painting-together_1308-28441.jpg",
  "https://img.freepik.com/free-vector/children-craft-class-illustration_1308-28442.jpg",
  "https://img.freepik.com/free-vector/children-art-class_1308-28443.jpg"
];

export default function ArtAndCraft() {
  const [activeImage, setActiveImage] = useState(0);

  return (
    <main className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-28 pb-16 bg-gradient-to-b from-pink-100 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2 space-y-6">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-800">
                Art & Craft
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-500">
                  Unleash Creativity
                </span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Watch your child's imagination soar through our engaging art and craft activities! 🎨
              </p>
            </div>
            <div className="md:w-1/2">
              <img 
                src="https://img.freepik.com/free-vector/children-painting-together-illustration_1308-28444.jpg"
                alt="Children doing art"
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
                title: "Creative Expression",
                description: "Develop unique artistic voice and imagination",
                icon: "🎨"
              },
              {
                title: "Motor Skills",
                description: "Enhance fine motor control and coordination",
                icon: "✌️"
              },
              {
                title: "Self-Confidence",
                description: "Build confidence through artistic achievements",
                icon: "⭐"
              }
            ].map((benefit) => (
              <div
                key={benefit.title}
                className="bg-pink-50 rounded-xl p-6 text-center hover:shadow-lg transition-shadow"
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
      <section className="py-20 bg-gradient-to-b from-white to-pink-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
            Our Creative Activities 🎯
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
                        <span className="mr-2">✨</span>
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
            Creative Gallery 📸
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
                <div className="absolute inset-0 bg-gradient-to-t from-pink-600/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center">
                  <span className="text-white text-lg font-bold p-4">View</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-pink-500 to-purple-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready to Start Creating? 🎨
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Join our art and craft sessions and watch your child's creativity bloom!
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