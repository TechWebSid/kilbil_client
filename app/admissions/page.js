import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function Admissions() {
  return (
    <main className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-28 pb-16 bg-gradient-to-b from-blue-100 via-purple-50 to-pink-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2 space-y-6">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-800">
                Begin Your Child's
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500">
                  Learning Journey! 🎓
                </span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Join our vibrant community where every child's potential is nurtured with care and creativity.
              </p>
            </div>
            <div className="md:w-1/2">
              <img 
                src="https://img.freepik.com/free-vector/happy-diverse-students-celebrating-graduation-from-school_74855-5853.jpg"
                alt="Happy students"
                className="rounded-2xl shadow-xl hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Admission Process Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-16">
            Admission Process 📝
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                step: '1',
                title: 'Submit Application',
                description: 'Fill out our online application form with your child\'s details',
                image: 'https://img.freepik.com/free-vector/woman-filling-online-application-form_74855-11136.jpg',
                color: 'bg-blue-50'
              },
              {
                step: '2',
                title: 'Visit & Interview',
                description: 'Schedule a campus tour and meet our friendly teachers',
                image: 'https://img.freepik.com/free-vector/teacher-student-cartoon-characters_52683-37841.jpg',
                color: 'bg-purple-50'
              },
              {
                step: '3',
                title: 'Welcome Aboard!',
                description: 'Receive acceptance letter and welcome package',
                image: 'https://img.freepik.com/free-vector/welcome-concept-illustration_114360-5185.jpg',
                color: 'bg-pink-50'
              }
            ].map((step) => (
              <div 
                key={step.title}
                className={`${step.color} rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 group`}
              >
                <div className="relative">
                  <div className="absolute -top-4 -left-4 w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white text-2xl font-bold">
                    {step.step}
                  </div>
                  <div className="h-48 overflow-hidden rounded-xl mb-6">
                    <img 
                      src={step.image}
                      alt={step.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-3">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Requirements Section */}
      <section className="py-20 bg-gradient-to-b from-blue-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <img 
                src="https://img.freepik.com/free-vector/teacher-explaining-lesson-cute-diverse-kids_74855-6674.jpg"
                alt="Requirements"
                className="rounded-2xl shadow-xl hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="md:w-1/2 space-y-6">
              <h2 className="text-4xl font-bold text-gray-800">
                Admission Requirements 📋
              </h2>
              <div className="space-y-4">
                {[
                  'Age: 3-6 years old',
                  'Birth Certificate',
                  'Medical Records',
                  'Previous School Records (if any)',
                  'Parent ID'
                ].map((requirement) => (
                  <div key={requirement} className="flex items-center space-x-3 bg-white p-4 rounded-lg shadow-md">
                    <span className="text-2xl">✨</span>
                    <span className="text-gray-700">{requirement}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Fee Structure */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-16">
            Fee Structure 💰
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                plan: 'Pre-Nursery',
                age: '3-4 years',
                price: '$500/month',
                features: ['Basic Learning', 'Play Activities', 'Snack Time', 'Nap Time'],
                image: 'https://img.freepik.com/free-vector/cute-baby-playing-with-toys_74855-5646.jpg'
              },
              {
                plan: 'Nursery',
                age: '4-5 years',
                price: '$600/month',
                features: ['Advanced Learning', 'Art & Craft', 'Music Classes', 'Outdoor Activities'],
                image: 'https://img.freepik.com/free-vector/children-learning-classroom-illustration_74855-5675.jpg'
              },
              {
                plan: 'Kindergarten',
                age: '5-6 years',
                price: '$700/month',
                features: ['Structured Learning', 'Sports Activities', 'Language Classes', 'Field Trips'],
                image: 'https://img.freepik.com/free-vector/kindergarten-interior-with-playing-kids_74855-5688.jpg'
              }
            ].map((plan) => (
              <div 
                key={plan.plan}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:scale-105 border-2 border-purple-100"
              >
                <div className="h-48 overflow-hidden">
                  <img 
                    src={plan.image}
                    alt={plan.plan}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">{plan.plan}</h3>
                  <p className="text-purple-600 font-medium mb-2">{plan.age}</p>
                  <p className="text-3xl font-bold text-gray-800 mb-4">{plan.price}</p>
                  <ul className="space-y-2">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-center text-gray-600">
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

      {/* Apply Now CTA */}
      <section className="py-20 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Apply? 🎈
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Start your child's educational journey with us today!
          </p>
          <button className="bg-white text-purple-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition-colors duration-200 shadow-lg hover:scale-105 transform">
            Apply Now
          </button>
        </div>
      </section>

      <Footer />
    </main>
  );
} 