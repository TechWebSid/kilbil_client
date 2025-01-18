export default function WhyChooseUs() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-6">Why Choose Kids Academy?</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We provide a unique blend of academic excellence and creative development, ensuring your child receives the best possible start in life.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {[
            {
              title: 'Expert Teachers',
              description: 'Highly qualified and experienced educators dedicated to nurturing young minds.',
              icon: '👩‍🏫',
              stat: '50+',
              statLabel: 'Certified Teachers'
            },
            {
              title: 'Modern Facilities',
              description: 'State-of-the-art classrooms, play areas, and learning resources.',
              icon: '🏫',
              stat: '20+',
              statLabel: 'Learning Spaces'
            },
            {
              title: 'Enrichment Programs',
              description: 'Diverse range of activities including arts, music, sports, and technology.',
              icon: '🎨',
              stat: '15+',
              statLabel: 'Special Programs'
            }
          ].map((feature) => (
            <div 
              key={feature.title}
              className="group bg-gradient-to-b from-purple-50 to-pink-50 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <span className="text-3xl">{feature.icon}</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">{feature.title}</h3>
              <p className="text-gray-600 mb-6">{feature.description}</p>
              <div className="flex items-end gap-2">
                <span className="text-3xl font-bold text-purple-600">{feature.stat}</span>
                <span className="text-gray-600 mb-1">{feature.statLabel}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-purple-100 to-pink-100 rounded-2xl p-8 md:p-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h3 className="text-3xl font-bold text-gray-800">Our Commitment to Excellence</h3>
              <p className="text-gray-600">
                We are committed to providing the highest quality early childhood education through:
              </p>
              <ul className="space-y-4">
                {[
                  'Personalized learning paths for each child',
                  'Regular parent-teacher communication',
                  'Safe and stimulating environment',
                  'Continuous staff development',
                  'Research-based curriculum'
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <span className="text-purple-600 text-xl">✓</span>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="grid grid-cols-2 gap-6">
              {[
                {
                  stat: '98%',
                  label: 'Parent Satisfaction',
                  color: 'bg-purple-100'
                },
                {
                  stat: '15:1',
                  label: 'Student-Teacher Ratio',
                  color: 'bg-pink-100'
                },
                {
                  stat: '100%',
                  label: 'Safety Score',
                  color: 'bg-purple-100'
                },
                {
                  stat: '95%',
                  label: 'Learning Goals Met',
                  color: 'bg-pink-100'
                }
              ].map((stat) => (
                <div 
                  key={stat.label}
                  className={`${stat.color} p-6 rounded-xl text-center hover:scale-105 transition-transform duration-300`}
                >
                  <div className="text-3xl font-bold text-gray-800 mb-2">{stat.stat}</div>
                  <div className="text-gray-600 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 