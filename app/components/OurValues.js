export default function OurValues() {
  return (
    <section className="py-20 bg-gradient-to-b from-pink-50 to-purple-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-16">Our Core Values</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {[
            {
              title: 'Play-Based Learning',
              description: 'We believe children learn best through play and hands-on experiences. Our curriculum integrates fun activities with educational goals.',
              image: 'https://images.pexels.com/photos/8613335/pexels-photo-8613335.jpeg',
              color: 'from-pink-500 to-purple-500',
              icon: '🎮'
            },
            {
              title: 'Safe & Nurturing',
              description: 'Creating a secure environment where children feel loved, supported, and confident to explore and grow at their own pace.',
              image: 'https://images.pexels.com/photos/8612933/pexels-photo-8612933.jpeg',
              color: 'from-purple-500 to-pink-500',
              icon: '🏡'
            },
            {
              title: 'Individual Growth',
              description: 'Every child develops at their own pace, and we celebrate that uniqueness. Our programs adapt to each childs learning style.',
              image: 'https://images.pexels.com/photos/8612903/pexels-photo-8612903.jpeg',
              color: 'from-pink-500 to-purple-500',
              icon: '🌱'
            },
            {
              title: 'Community Spirit',
              description: 'Building strong relationships between children, parents, and teachers. We believe in the power of community in education.',
              image: 'https://images.pexels.com/photos/8612897/pexels-photo-8612897.jpeg',
              color: 'from-purple-500 to-pink-500',
              icon: '🤝'
            }
          ].map((value) => (
            <div 
              key={value.title}
              className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className="flex flex-col md:flex-row gap-8 items-center">
                <div className="md:w-1/2">
                  <div className="relative">
                    <img 
                      src={value.image}
                      alt={value.title}
                      className="rounded-xl shadow-md group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className={`absolute inset-0 bg-gradient-to-tr ${value.color} opacity-20 rounded-xl group-hover:opacity-30 transition-opacity duration-300`}></div>
                    <div className="absolute -bottom-4 -right-4 bg-white p-3 rounded-full shadow-lg">
                      <span className="text-2xl">{value.icon}</span>
                    </div>
                  </div>
                </div>
                <div className="md:w-1/2 space-y-4">
                  <h3 className="text-2xl font-bold text-gray-800 group-hover:text-purple-600 transition-colors duration-300">
                    {value.title}
                  </h3>
                  <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"></div>
                  <p className="text-gray-600">{value.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 