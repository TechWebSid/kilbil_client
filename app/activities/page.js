import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import BenefitsSection from '../components/BenefitsSection';
import GallerySlider from '../components/GallerySlider';
import LearningThroughPlay from '../components/LearningThroughPlay';
import CreativeArts from '../components/CreativeArts';
import ScheduleOverview from '../components/ScheduleOverview';
import Link from 'next/link';

// Add metadata for SEO
export const metadata = {
  title: 'Activities & Programs | Kilbil The Learning Home - Best Kindergarten in Pune',
  description: 'Explore our diverse range of engaging activities and programs designed to nurture your child\'s creativity, learning, and development. From art and music to outdoor play and educational games.',
  keywords: 'kindergarten activities, preschool programs, children activities pune, creative arts for kids, early learning activities',
  openGraph: {
    title: 'Activities & Programs | Kilbil The Learning Home',
    description: 'Discover fun and educational activities that help your child learn and grow.',
    images: [
      {
        url: 'https://img.freepik.com/premium-vector/learning-is-fun-with-happy-kids-wall-art-classroom-poster_97378-2603.jpg',
        width: 1200,
        height: 630,
        alt: 'Kilbil Activities',
      },
    ],
  }
};

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
              <div className="flex gap-4 flex-wrap">
                <Link href="/contact" className="inline-flex items-center px-6 py-3 rounded-full bg-yellow-400 text-white font-semibold hover:bg-yellow-500 transition-colors duration-200">
                  Join Our Activities
                  <span className="ml-2">→</span>
                </Link>
                <Link href="/about" className="inline-flex items-center px-6 py-3 rounded-full bg-white text-gray-800 font-semibold hover:bg-gray-50 transition-colors duration-200">
                  Learn More
                </Link>
              </div>
            </div>
            <div className="md:w-1/2">
              <img 
                src="https://img.freepik.com/premium-vector/learning-is-fun-with-happy-kids-wall-art-classroom-poster_97378-2603.jpg"
                alt="Cartoon kids playing"
                className="rounded-2xl shadow-xl hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <BenefitsSection />

      {/* Learning Through Play Section */}
      <LearningThroughPlay />

      {/* Creative Arts Section */}
      <CreativeArts />

      {/* Daily Schedule Section */}
      <ScheduleOverview />

      {/* Fun Gallery Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-16">
            Fun Moments Gallery 📸
          </h2>
          <GallerySlider />
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
          <Link href="/contact" className="inline-flex items-center px-8 py-4 rounded-full bg-white text-purple-600 text-lg font-semibold hover:bg-gray-100 transition-colors duration-200 shadow-lg hover:scale-105 transform">
            Join Our Activities
            <span className="ml-2">→</span>
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
} 