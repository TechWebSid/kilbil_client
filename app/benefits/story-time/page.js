"use client";
import { useState } from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

const ACTIVITIES = [
  {
    title: "Interactive Storytelling",
    description: "Engaging stories with active participation",
    image: "https://img.freepik.com/free-vector/cute-children-listening-story-cartoon-illustration_138676-2790.jpg",
    skills: ["Active listening", "Imagination", "Verbal expression"]
  },
  {
    title: "Reading Adventures",
    description: "Exploring different genres and stories",
    image: "https://img.freepik.com/free-vector/cute-children-reading-books-cartoon-illustration_138676-2791.jpg",
    skills: ["Reading comprehension", "Vocabulary building", "Literary appreciation"]
  },
  {
    title: "Story Creation",
    description: "Creating and sharing original stories",
    image: "https://img.freepik.com/free-vector/cute-children-writing-stories-cartoon-illustration_138676-2792.jpg",
    skills: ["Creative writing", "Storytelling", "Self-expression"]
  }
];

const GALLERY_IMAGES = [
  "https://img.freepik.com/free-vector/children-story-time_1308-28896.jpg",
  "https://img.freepik.com/free-vector/children-reading-together_1308-28897.jpg",
  "https://img.freepik.com/free-vector/children-library-illustration_1308-28898.jpg",
  "https://img.freepik.com/free-vector/children-storytelling-session_1308-28899.jpg"
];

export default function StoryTime() {
  const [activeImage, setActiveImage] = useState(0);

  return (
    <main className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-28 pb-16 bg-gradient-to-b from-yellow-100 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2 space-y-6">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-800">
                Story Time
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 to-orange-500">
                  Imagine & Learn
                </span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Embark on magical adventures through the power of storytelling! 📚
              </p>
            </div>
            <div className="md:w-1/2">
              <img 
                src="https://img.freepik.com/free-vector/children-listening-story-illustration_1308-28900.jpg"
                alt="Children during story time"
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
                title: "Language Skills",
                description: "Enhance vocabulary and communication",
                icon: "📖"
              },
              {
                title: "Imagination",
                description: "Develop creativity and visualization",
                icon: "✨"
              },
              {
                title: "Emotional Growth",
                description: "Build empathy and understanding",
                icon: "💝"
              }
            ].map((benefit) => (
              <div
                key={benefit.title}
                className="bg-yellow-50 rounded-xl p-6 text-center hover:shadow-lg transition-shadow"
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
      <section className="py-20 bg-gradient-to-b from-white to-yellow-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
            Story Adventures 📚
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
                        className="flex items-center text-sm text-yellow-600"
                      >
                        <span className="mr-2">📖</span>
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
            Story Time Moments 📸
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
                <div className="absolute inset-0 bg-gradient-to-t from-yellow-600/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center">
                  <span className="text-white text-lg font-bold p-4">View</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-yellow-500 to-orange-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready to Start the Story? 📚
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Join our storytelling sessions and unlock your child's imagination!
          </p>
          <button className="bg-white text-yellow-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition-colors duration-200 shadow-lg">
            Enroll Now
          </button>
        </div>
      </section>

      <Footer />
    </main>
  );
} 