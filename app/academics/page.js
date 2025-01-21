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
                image: 'https://www.oakridge.in/wp-content/uploads/2024/02/Bengaluru-Early-Years.png',
                color: 'bg-orange-50'
              },
              {
                title: 'Pre-School',
                age: '4-5 Years',
                description: 'Structured learning with creative activities',
                image: 'https://img.freepik.com/free-vector/group-young-children-cartoon-character-white-background_1308-51579.jpg',
                color: 'bg-yellow-50'
              },
              {
                title: 'Kindergarten',
                age: '5-6 Years',
                description: 'Advanced concepts with interactive methods',
                image: 'https://img.freepik.com/free-vector/students-with-kindergarten-room-elements-white_1308-55756.jpg?semt=ais_incoming',
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

      {/* Thematic Learning Section */}
      <section className="py-20 bg-gradient-to-b from-white to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-6">
            Thematic Learning 🌈
          </h2>
          <p className="text-xl text-gray-600 text-center max-w-3xl mx-auto mb-16">
            We make learning engaging by connecting lessons to real-world themes that children love and understand.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                theme: 'Seasons & Weather',
                description: 'Learning about nature cycles through art, science, and stories',
                image: 'https://img.freepik.com/free-vector/cute-children-seasonal-activities-cartoon-set_74855-7727.jpg',
                activities: ['Weather Chart Making', 'Seasonal Crafts', 'Nature Walks'],
                color: 'from-blue-500 to-green-500'
              },
              {
                theme: 'Festivals & Culture',
                description: 'Celebrating diversity through traditional activities and customs',
                image: 'https://img.freepik.com/free-vector/happy-diverse-children-celebrating-together_74855-5272.jpg',
                activities: ['Cultural Dances', 'Festival Foods', 'Traditional Games'],
                color: 'from-yellow-500 to-red-500'
              },
              {
                theme: 'Animals & Nature',
                description: 'Discovering wildlife and developing environmental awareness',
                image: 'https://img.freepik.com/free-vector/children-learning-about-animals_74855-5280.jpg',
                activities: ['Animal Crafts', 'Nature Projects', 'Zoo Themes'],
                color: 'from-green-500 to-teal-500'
              },
              {
                theme: 'Community Helpers',
                description: 'Learning about different professions and their importance',
                image: 'https://img.freepik.com/free-vector/children-learning-about-professions_74855-5278.jpg',
                activities: ['Role Play', 'Field Trips', 'Helper Visits'],
                color: 'from-purple-500 to-pink-500'
              }
            ].map((theme) => (
              <div 
                key={theme.theme}
                className="group bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 overflow-hidden"
              >
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={theme.image}
                    alt={theme.theme}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className={`absolute inset-0 opacity-20 bg-gradient-to-r ${theme.color}`}></div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">{theme.theme}</h3>
                  <p className="text-gray-600 mb-4 text-sm">{theme.description}</p>
                  <div className="space-y-2">
                    {theme.activities.map((activity) => (
                      <div key={activity} className="flex items-center gap-2">
                        <span className="text-purple-500">•</span>
                        <span className="text-gray-600 text-sm">{activity}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Life Skills Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-6">
            Life Skills Development 🌱
          </h2>
          <p className="text-xl text-gray-600 text-center max-w-3xl mx-auto mb-16">
            Building essential life skills through daily activities and guided practice.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                category: 'Personal Care',
                icon: '🧼',
                skills: [
                  { name: 'Hygiene Habits', description: 'Hand washing, dental care, and cleanliness' },
                  { name: 'Dressing Skills', description: 'Buttoning, zipping, and shoe tying' },
                  { name: 'Grooming', description: 'Basic self-care and appearance maintenance' }
                ],
                color: 'bg-blue-50'
              },
              {
                category: 'Social Skills',
                icon: '🤝',
                skills: [
                  { name: 'Manners & Etiquette', description: 'Please, thank you, and social graces' },
                  { name: 'Sharing & Taking Turns', description: 'Cooperative play and patience' },
                  { name: 'Conflict Resolution', description: 'Problem-solving with peers' }
                ],
                color: 'bg-green-50'
              },
              {
                category: 'Organization',
                icon: '📚',
                skills: [
                  { name: 'Toy Management', description: 'Sorting and cleaning up play areas' },
                  { name: 'Personal Space', description: 'Maintaining desk and cubby organization' },
                  { name: 'Time Management', description: 'Following daily routines and schedules' }
                ],
                color: 'bg-yellow-50'
              }
            ].map((category) => (
              <div 
                key={category.category}
                className={`${category.color} rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2`}
              >
                <div className="text-4xl mb-6">{category.icon}</div>
                <h3 className="text-2xl font-bold text-gray-800 mb-6">{category.category}</h3>
                <div className="space-y-6">
                  {category.skills.map((skill) => (
                    <div key={skill.name} className="group">
                      <h4 className="text-lg font-semibold text-gray-800 mb-2 group-hover:text-purple-600 transition-colors duration-200">
                        {skill.name}
                      </h4>
                      <p className="text-gray-600 text-sm">{skill.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Progress Tracking */}
          <div className="mt-16 bg-gradient-to-r from-purple-100 to-pink-100 rounded-2xl p-8 shadow-lg">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-gray-800">Progress Tracking 📈</h3>
                <p className="text-gray-600">
                  We regularly monitor and celebrate your child's development in life skills through:
                </p>
                <ul className="space-y-2">
                  {[
                    'Monthly progress reports',
                    'Skill achievement certificates',
                    'Parent-teacher meetings',
                    'Development portfolios'
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-2">
                      <span className="text-purple-500">✓</span>
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { stat: '90%', label: 'Skills Mastery' },
                  { stat: '95%', label: 'Parent Satisfaction' },
                  { stat: '100%', label: 'Individual Attention' },
                  { stat: '85%', label: 'Peer Interaction' }
                ].map((item) => (
                  <div key={item.label} className="bg-white p-4 rounded-xl text-center">
                    <div className="text-2xl font-bold text-purple-600">{item.stat}</div>
                    <div className="text-sm text-gray-600">{item.label}</div>
                  </div>
                ))}
              </div>
            </div>
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