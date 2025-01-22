import Navbar from './components/Navbar';
import Footer from './components/Footer';
import constructMetadata from './components/Metadata';
import Link from 'next/link';
import DaycareServices from './components/DaycareServices';

export const metadata = constructMetadata({
  path: '/',
});

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section id="home" className="pt-20 bg-gradient-to-b from-purple-100 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="md:w-1/2 space-y-8">
              <div className="space-y-4">
                <h1 className="text-5xl md:text-6xl font-bold text-gray-800">
                  Welcome to 
                  <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-500">
                    Kilbil Learning School
                  </span>
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Where learning meets fun and imagination takes flight! Join us in creating a bright future for your child.
                </p>
              </div>

              {/* Added Feature Points */}
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="bg-purple-100 p-2 rounded-full">
                    <span className="text-2xl">🎨</span>
                  </div>
                  <p className="text-gray-700">Creative Learning Environment</p>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="bg-pink-100 p-2 rounded-full">
                    <span className="text-2xl">🎮</span>
                  </div>
                  <p className="text-gray-700">Play-Based Education</p>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="bg-yellow-100 p-2 rounded-full">
                    <span className="text-2xl">🌟</span>
                  </div>
                  <p className="text-gray-700">Experienced Teachers</p>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Link 
                  href="/admissions"
                  className="bg-gradient-to-r from-purple-600 to-pink-500 text-white px-8 py-4 rounded-full text-lg font-semibold hover:scale-105 transition-transform duration-200 shadow-lg flex items-center justify-center"
                >
                  <span>Start Learning Journey</span>
                  <span className="ml-2">🚀</span>
                </Link>
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-3 gap-4 pt-4">
                <div className="text-center p-3 bg-purple-50 rounded-xl">
                  <div className="text-2xl font-bold text-purple-600">500+</div>
                  <div className="text-sm text-gray-600">Happy Students</div>
                </div>
                <div className="text-center p-3 bg-pink-50 rounded-xl">
                  <div className="text-2xl font-bold text-pink-600">15+</div>
                  <div className="text-sm text-gray-600">Programs</div>
                </div>
                <div className="text-center p-3 bg-yellow-50 rounded-xl">
                  <div className="text-2xl font-bold text-yellow-600">10+</div>
                  <div className="text-sm text-gray-600">Years Experience</div>
                </div>
              </div>
            </div>

            {/* Right Side with Mascot and Decorative Elements */}
            <div className="md:w-1/2 mt-8 md:mt-0 relative">
              {/* Main Mascot Image */}
              <div className="relative z-10">
                <img 
                  src="https://i.pinimg.com/736x/09/80/a3/0980a36d9d6ecfb005450e5f9af4764b.jpg"
                  alt="Kids Academy Mascot"
                  className="w-full h-auto rounded-2xl animate-float"
                />
              </div>

              {/* Decorative Elements */}
              <div className="absolute top-0 right-0 -z-10">
                <div className="bg-yellow-200 w-32 h-32 rounded-full opacity-20"></div>
              </div>
              <div className="absolute bottom-0 left-0 -z-10">
                <div className="bg-purple-200 w-24 h-24 rounded-full opacity-20"></div>
              </div>

              {/* Floating Elements */}
              <div className="absolute top-10 left-10 animate-bounce">
                <span className="text-4xl">📚</span>
              </div>
              <div className="absolute bottom-10 right-10 animate-bounce delay-100">
                <span className="text-4xl">🎨</span>
              </div>
              <div className="absolute top-1/2 right-0 animate-bounce delay-200">
                <span className="text-4xl">🎭</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
            What Makes Us Special
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Creative Learning',
                description: 'Fun and interactive learning experiences',
                image: 'https://img.freepik.com/free-vector/cute-children-painting-with-paintbrush-paper-cartoon-vector-illustration-icon-isolated_138676-3324.jpg'
              },
              {
                title: 'Safe Environment',
                description: 'Secure and nurturing atmosphere',
                image: 'https://img.freepik.com/free-vector/cute-children-playing-park-cartoon-vector-illustration-icon-concept-isolated-flat_138676-3325.jpg'
              },
              {
                title: 'Expert Teachers',
                description: 'Dedicated and caring educators',
                image: 'https://img.freepik.com/free-vector/cute-teacher-student-cartoon-vector-illustration-icon-concept-isolated-premium-flat_138676-3326.jpg'
              }
            ].map((feature) => (
              <div 
                key={feature.title}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-200 hover:scale-105 transform"
              >
                <img 
                  src={feature.image}
                  alt={feature.title}
                  className="w-full h-48 object-contain rounded-lg mb-4"
                />
                <h3 className="text-xl font-bold text-gray-800 text-center mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-center">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gradient-to-r from-purple-100 to-pink-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { number: '500+', label: 'Happy Students' },
              { number: '50+', label: 'Expert Teachers' },
              { number: '100%', label: 'Success Rate' },
              { number: '25+', label: 'Activities' }
            ].map((stat) => (
              <div key={stat.label} className="bg-white/50 backdrop-blur-sm rounded-lg p-6 hover:shadow-lg transition-shadow">
                <h3 className="text-4xl font-bold text-purple-600 mb-2">{stat.number}</h3>
                <p className="text-gray-600">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Preview Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <img 
                src="https://img.freepik.com/free-vector/cute-children-learning-concept-cartoon-vector-illustration-icon-education-concept-isolated_138676-3159.jpg"
                alt="Children playing and learning"
                className="rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="md:w-1/2 space-y-6">
              <h2 className="text-4xl font-bold text-gray-800">
                Nurturing Young Minds
              </h2>
              <p className="text-lg text-gray-600">
                At Kilbil, we believe every child is unique and deserves an education that sparks curiosity and fosters growth. Our innovative approach combines play-based learning with academic excellence.
              </p>
              <Link 
                href="/about"
                className="bg-purple-600 text-white px-6 py-3 rounded-full text-lg font-semibold hover:bg-purple-700 transition-colors duration-200 inline-block"
              >
                Learn More About Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Activities Preview */}
      <section className="py-20 bg-gradient-to-b from-white to-purple-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
            Fun Learning Activities
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Art & Craft',
                image: 'https://img.freepik.com/free-vector/cute-children-doing-art-craft-cartoon-vector-illustration-icon-concept-isolated-premium_138676-3327.jpg'
              },
              {
                title: 'Music & Dance',
                image: 'https://img.freepik.com/free-vector/cute-children-playing-music-cartoon-vector-illustration-icon-concept-isolated-premium_138676-3328.jpg'
              },
              {
                title: 'Sports & Games',
                image: 'https://img.freepik.com/free-vector/cute-children-playing-park-cartoon-vector-illustration-icon-concept-isolated-premium_138676-3329.jpg'
              }
            ].map((activity) => (
              <div 
                key={activity.title} 
                className="relative group overflow-hidden rounded-xl shadow-lg"
              >
                <img 
                  src={activity.image}
                  alt={activity.title}
                  className="w-full h-64 object-contain transform group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                  <h3 className="text-white text-xl font-bold p-6">{activity.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
            What Parents Say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: 'Sarah Johnson',
                role: 'Parent',
                quote: 'My child loves coming to Kids Academy! The teachers are amazing and the learning environment is perfect.',
                image: 'https://img.freepik.com/free-vector/cute-family-icon-cartoon-vector-illustration-people-family-concept-isolated-vector-flat-cartoon-style_138676-3330.jpg'
              },
              {
                name: 'Michael Chen',
                role: 'Parent',
                quote: 'The creative approach to learning has made such a difference in my child\'s development.',
                image: 'https://img.freepik.com/free-vector/cute-family-icon-cartoon-vector-illustration-people-family-concept-isolated-vector-premium_138676-3331.jpg'
              },
              {
                name: 'Emily Davis',
                role: 'Parent',
                quote: 'We\'re amazed by the progress our daughter has made since joining Kids Academy.',
                image: 'https://img.freepik.com/free-vector/cute-family-icon-cartoon-vector-illustration-people-family-concept-isolated-vector-premium_138676-3332.jpg'
              }
            ].map((testimonial) => (
              <div 
                key={testimonial.name}
                className="bg-purple-50 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-200"
              >
                <div className="flex items-center space-x-4 mb-4">
                  <img 
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full object-contain"
                  />
                  <div>
                    <h3 className="font-bold text-gray-800">{testimonial.name}</h3>
                    <p className="text-gray-600 text-sm">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-gray-600 italic">"{testimonial.quote}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Fun Facts & Quotes Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-8">
            <div className="relative inline-block">
              <img 
                src="https://img.freepik.com/free-vector/cute-boy-girl-cartoon-character-holding-pencil_1308-133831.jpg"
                alt="Kids with pencil"
                className="w-32 h-32 mx-auto mb-4"
              />
              <div className="bg-purple-100 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
                <p className="text-2xl text-gray-800 italic font-serif">
                  "Every child is an artist. The problem is how to remain an artist once we grow up."
                </p>
                <p className="text-purple-600 mt-4 font-semibold">- Pablo Picasso</p>
              </div>
              <div className="absolute -top-4 -right-4 text-4xl animate-bounce">
                🎨
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Daycare Services Section */}
      <DaycareServices />

      {/* FAQ Section */}
      <section className="py-20 bg-gradient-to-b from-white to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
            Frequently Asked Questions
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                question: "What is the teacher-student ratio?",
                answer: "We maintain a 1:8 teacher-student ratio to ensure each child receives personal attention and care.",
                icon: "👩‍🏫"
              },
              {
                question: "Are meals provided?",
                answer: "Yes! We provide healthy, balanced meals and snacks prepared fresh daily in our kitchen.",
                icon: "🍎"
              },
              {
                question: "How do you ensure safety?",
                answer: "We have 24/7 security, CCTV monitoring, and strict pick-up policies to ensure your child's safety.",
                icon: "🛡️"
              },
              {
                question: "What's your teaching methodology?",
                answer: "We use play-based learning combined with structured activities to make education fun and effective.",
                icon: "📚"
              }
            ].map((faq) => (
              <div 
                key={faq.question}
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-200"
              >
                <div className="flex items-start space-x-4">
                  <div className="bg-purple-100 p-3 rounded-full">
                    <span className="text-2xl">{faq.icon}</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-800 mb-2">{faq.question}</h3>
                    <p className="text-gray-600">{faq.answer}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
            Fun Learning Zone
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Memory Game */}
            <div className="bg-yellow-50 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-105">
              <img 
                src="https://img.freepik.com/free-vector/cute-children-playing-memory-game-cartoon-vector-illustration_138676-3333.jpg"
                alt="Memory Game"
                className="w-full h-48 object-contain mb-4"
              />
              <h3 className="text-xl font-bold text-gray-800 mb-2 text-center">Memory Game</h3>
              <p className="text-gray-600 text-center mb-4">Test your memory with our fun matching game!</p>
              <Link 
                href="/games/memory"
                className="w-full bg-yellow-400 text-white py-2 rounded-full hover:bg-yellow-500 transition-colors inline-block text-center"
              >
                Play Now
              </Link>
            </div>

            {/* Color Quiz */}
            <div className="bg-pink-50 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-105">
              <img 
                src="https://img.freepik.com/free-vector/cute-children-learning-colors-cartoon-vector-illustration_138676-3334.jpg"
                alt="Color Quiz"
                className="w-full h-48 object-contain mb-4"
              />
              <h3 className="text-xl font-bold text-gray-800 mb-2 text-center">Color Quiz</h3>
              <p className="text-gray-600 text-center mb-4">Learn colors through fun interactive quizzes!</p>
              <Link 
                href="/games/colors"
                className="w-full bg-pink-400 text-white py-2 rounded-full hover:bg-pink-500 transition-colors inline-block text-center"
              >
                Start Quiz
              </Link>
            </div>

            {/* Number Game */}
            <div className="bg-purple-50 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-105">
              <img 
                src="https://img.freepik.com/free-vector/cute-children-learning-numbers-cartoon-vector-illustration_138676-3335.jpg"
                alt="Number Game"
                className="w-full h-48 object-contain mb-4"
              />
              <h3 className="text-xl font-bold text-gray-800 mb-2 text-center">Number Fun</h3>
              <p className="text-gray-600 text-center mb-4">Count and learn numbers with fun activities!</p>
              <Link 
                href="/games/numbers"
                className="w-full bg-purple-400 text-white py-2 rounded-full hover:bg-purple-500 transition-colors inline-block text-center"
              >
                Play Now
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-pink-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Join Our Family?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Enroll your child today and watch them thrive in our nurturing environment.
          </p>
          <Link 
            href="/admissions"
            className="bg-white text-purple-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition-colors duration-200 shadow-lg inline-block"
          >
            Enroll Now
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
