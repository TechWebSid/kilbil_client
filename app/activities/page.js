import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import BenefitsSection from '../components/BenefitsSection';
import Link from 'next/link';

export default function Activities() {
  return (
    <main className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-28 pb-16 bg-gradient-to-b from-yellow-100 via-pink-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2 space-y-6">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-800">
                Fun & Exciting
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 via-pink-500 to-purple-500">
                  Learning Adventures!
                </span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Join us for amazing activities that make learning a magical experience! 🌟
              </p>
            </div>
            <div className="md:w-1/2">
              <img 
                src="https://img.freepik.com/free-vector/cute-children-playing-park_1308-28891.jpg"
                alt="Cartoon kids playing"
                className="rounded-2xl shadow-xl hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <BenefitsSection />

      {/* Daily Activities Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-16">
            Our Daily Adventures 🎨
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Story Time',
                time: '9:00 AM',
                description: 'Magical stories that spark imagination',
                image: 'https://img.freepik.com/free-vector/cute-children-reading-book-cartoon-vector-icon-illustration_138676-2784.jpg',
                color: 'bg-yellow-100'
              },
              {
                title: 'Art & Craft',
                time: '10:30 AM',
                description: 'Creative hands-on projects',
                image: 'https://img.freepik.com/free-vector/cute-children-painting-with-paintbrush-paper_138676-2786.jpg',
                color: 'bg-pink-100'
              },
              {
                title: 'Music & Dance',
                time: '2:00 PM',
                description: 'Fun rhythms and movements',
                image: 'https://img.freepik.com/free-vector/cute-children-playing-music-cartoon-vector-icon-illustration_138676-2782.jpg',
                color: 'bg-purple-100'
              }
            ].map((activity) => (
              <div 
                key={activity.title}
                className={`${activity.color} rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 group`}
              >
                <div className="h-48 overflow-hidden rounded-xl mb-6">
                  <img 
                    src={activity.image}
                    alt={activity.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <h3 className="text-2xl font-bold text-gray-800">{activity.title}</h3>
                    <span className="text-purple-600 font-medium">{activity.time}</span>
                  </div>
                  <p className="text-gray-600">{activity.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Special Programs Section */}
      <section className="py-20 bg-gradient-to-b from-purple-50 to-yellow-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-16">
            Special Programs 🌈
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {[
              {
                title: 'Science Explorers',
                description: 'Fun experiments and discoveries',
                image: 'https://img.freepik.com/free-vector/cute-children-science-experiment-cartoon-vector-icon-illustration_138676-2788.jpg',
                features: ['Weekly Experiments', 'Interactive Learning', 'Fun Projects']
              },
              {
                title: 'Little Chefs',
                description: 'Cooking adventures for kids',
                image: 'https://img.freepik.com/free-vector/cute-children-cooking-kitchen-cartoon-vector-icon-illustration_138676-2783.jpg',
                features: ['Safe Cooking', 'Healthy Recipes', 'Team Work']
              },
              {
                title: 'Sports Stars',
                description: 'Active games and sports',
                image: 'https://img.freepik.com/free-vector/cute-children-playing-football-cartoon-vector-icon-illustration_138676-2785.jpg',
                features: ['Team Games', 'Motor Skills', 'Fun Exercise']
              },
              {
                title: 'Nature Club',
                description: 'Outdoor exploration and learning',
                image: 'https://img.freepik.com/free-vector/cute-children-planting-tree-cartoon-vector-icon-illustration_138676-2787.jpg',
                features: ['Garden Care', 'Nature Walks', 'Environmental Learning']
              }
            ].map((program) => (
              <div 
                key={program.title}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                <div className="h-64 overflow-hidden">
                  <img 
                    src={program.image}
                    alt={program.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6 space-y-4">
                  <h3 className="text-2xl font-bold text-gray-800">{program.title}</h3>
                  <p className="text-gray-600">{program.description}</p>
                  <ul className="grid grid-cols-2 gap-2">
                    {program.features.map((feature) => (
                      <li key={feature} className="flex items-center text-purple-600">
                        <span className="mr-2">🌟</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Fun Gallery Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-16">
            Fun Moments Gallery 📸
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              'https://img.freepik.com/free-vector/children-playing-playground_1308-28363.jpg',
              'https://img.freepik.com/free-vector/children-playing-park_1308-28892.jpg',
              'https://img.freepik.com/free-vector/children-playing-playground_1308-28364.jpg',
              'https://img.freepik.com/free-vector/children-playing-park_1308-28890.jpg',
              'https://img.freepik.com/free-vector/children-playing-park_1308-28889.jpg',
              'https://img.freepik.com/free-vector/children-playing-playground_1308-28365.jpg',
              'https://img.freepik.com/free-vector/children-playing-park_1308-28893.jpg',
              'https://img.freepik.com/free-vector/children-playing-playground_1308-28366.jpg'
            ].map((image, index) => (
              <div 
                key={index}
                className="group relative overflow-hidden rounded-xl shadow-md hover:shadow-xl transition-all duration-300"
              >
                <img 
                  src={image}
                  alt={`Fun activity ${index + 1}`}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-purple-600/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center">
                  <span className="text-white text-lg font-bold p-4">View More</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Join Activities CTA */}
      <section className="py-20 bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl font-bold text-white mb-6">
          Ready to Join the Fun? 🎉
        </h2>
        <p className="text-xl text-white/90 mb-8">
          Discover exciting activities and make new friends!
        </p>
        <Link href="/contact" passHref>
          <button className="bg-white text-purple-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition-colors duration-200 shadow-lg hover:scale-105 transform">
            Join Our Activities
          </button>
        </Link>
      </div>
    </section>

      <Footer />
    </main>
  );
} 