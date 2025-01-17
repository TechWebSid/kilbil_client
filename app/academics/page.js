import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Link from 'next/link';

export default function Academics() {
  return (
    <main className="min-h-screen">
      <Navbar />

      {/* Hero Section - Updated with playful illustration */}
      <section className="pt-28 pb-16 bg-gradient-to-b from-orange-100 via-yellow-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2 space-y-6">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-800">
                Discover the Joy of
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-yellow-500 to-pink-500">
                  Learning! 📚
                </span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Our curriculum is designed to inspire curiosity, creativity, and confidence in every child.
              </p>
            </div>
            <div className="md:w-1/2">
              <img 
                src="https://img.freepik.com/free-vector/hand-drawn-colorful-science-education-wallpaper_23-2148489183.jpg"
                alt="Kids learning"
                className="rounded-2xl shadow-xl hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Learning Programs - Updated with colorful illustrations */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-16">
            Our Learning Programs 🎯
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Early Learning',
                age: '3-4 Years',
                description: 'Foundation skills through play-based learning',
                image: 'https://img.freepik.com/free-vector/cute-kids-playing-kindergarten-illustration_23-2148548346.jpg',
                color: 'bg-orange-50'
              },
              {
                title: 'Pre-School',
                age: '4-5 Years',
                description: 'Structured learning with creative activities',
                image: 'https://img.freepik.com/free-vector/cartoon-kids-learning-classroom_23-2148541935.jpg',
                color: 'bg-yellow-50'
              },
              {
                title: 'Kindergarten',
                age: '5-6 Years',
                description: 'Advanced concepts with interactive methods',
                image: 'https://img.freepik.com/free-vector/happy-diverse-students-children-sitting-desk-classroom_74855-5675.jpg',
                color: 'bg-pink-50'
              }
            ].map((program) => (
              <div 
                key={program.title}
                className={`${program.color} rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 group`}
              >
                <div className="h-48 overflow-hidden rounded-xl mb-6">
                  <img 
                    src={program.image}
                    alt={program.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-2">{program.title}</h3>
                <p className="text-purple-600 font-medium mb-2">{program.age}</p>
                <p className="text-gray-600">{program.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Subjects - Updated with themed illustrations */}
      <section className="py-20 bg-gradient-to-b from-white to-orange-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-16">
            Core Subjects 📖
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                subject: 'Language & Literacy',
                description: 'Reading, writing, and communication skills',
                image: 'https://img.freepik.com/free-vector/cute-children-reading-book-cartoon-vector-icon-illustration_138676-2784.jpg',
                features: ['Phonics', 'Storytelling', 'Writing Practice']
              },
              {
                subject: 'Mathematics',
                description: 'Numbers, patterns, and basic calculations',
                image: 'https://img.freepik.com/free-vector/cute-children-learning-math-cartoon-vector-icon-illustration_138676-2781.jpg',
                features: ['Number Recognition', 'Basic Operations', 'Shapes & Patterns']
              },
              {
                subject: 'Science & Discovery',
                description: 'Hands-on experiments and nature exploration',
                image: 'https://img.freepik.com/free-vector/cute-children-science-experiment-cartoon-vector-icon-illustration_138676-2788.jpg',
                features: ['Nature Study', 'Simple Experiments', 'Environmental Awareness']
              },
              {
                subject: 'Arts & Creativity',
                description: 'Expression through various art forms',
                image: 'https://img.freepik.com/free-vector/cute-children-painting-with-paintbrush-paper_138676-2786.jpg',
                features: ['Drawing', 'Crafts', 'Music & Movement']
              }
            ].map((subject) => (
              <div 
                key={subject.subject}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                <div className="h-64 overflow-hidden">
                  <img 
                    src={subject.image}
                    alt={subject.subject}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">{subject.subject}</h3>
                  <p className="text-gray-600 mb-4">{subject.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {subject.features.map((feature) => (
                      <span 
                        key={feature}
                        className="bg-orange-100 text-orange-700 px-3 py-1 rounded-full text-sm"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Teaching Methodology - Added illustrations to methodology cards */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-16">
            Our Teaching Approach 🎨
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                title: 'Play-Based Learning',
                icon: 'https://img.freepik.com/free-vector/cute-children-playing-toys-cartoon-vector-icon-illustration_138676-2783.jpg',
                description: 'Learning through interactive play and games',
                color: 'bg-blue-50'
              },
              {
                title: 'Hands-on Activities',
                icon: 'https://img.freepik.com/free-vector/cute-children-doing-experiment-cartoon-vector-icon-illustration_138676-2789.jpg',
                description: 'Practical experiences for better understanding',
                color: 'bg-green-50'
              },
              {
                title: 'Individual Attention',
                icon: 'https://img.freepik.com/free-vector/cute-teacher-student-cartoon-vector-icon-illustration_138676-2785.jpg',
                description: 'Personalized guidance for each child',
                color: 'bg-yellow-50'
              },
              {
                title: 'Regular Assessment',
                icon: 'https://img.freepik.com/free-vector/cute-children-studying-together-cartoon-vector-icon-illustration_138676-2787.jpg',
                description: 'Continuous evaluation of progress',
                color: 'bg-pink-50'
              }
            ].map((method) => (
              <div 
                key={method.title}
                className={`${method.color} p-6 rounded-xl text-center hover:shadow-lg transition-all duration-300 hover:scale-105`}
              >
                <img 
                  src={method.icon}
                  alt={method.title}
                  className="w-24 h-24 mx-auto mb-4 rounded-full"
                />
                <h3 className="text-xl font-bold text-gray-800 mb-2">{method.title}</h3>
                <p className="text-gray-600">{method.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section - Added playful background illustration */}
      <section className="py-20 bg-gradient-to-r from-orange-400 via-pink-500 to-purple-500 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img 
            src="https://img.freepik.com/free-vector/hand-drawn-colorful-education-doodle_23-2149483652.jpg"
            alt="Background pattern"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Start Learning? 🚀
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Join our academic programs and watch your child thrive!
          </p>
          <Link 
            href="/admissions" 
            className="inline-block bg-white text-purple-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition-colors duration-200 shadow-lg hover:scale-105 transform"
          >
            Get Started
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
} 