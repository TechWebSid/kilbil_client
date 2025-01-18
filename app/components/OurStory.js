export default function OurStory() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-6">Our Story</h2>
          <p className="text-xl text-gray-600">
            Founded in 2010, Kids Academy has grown from a small playgroup to a leading early childhood education center, dedicated to nurturing young minds and creating future leaders.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              year: '2010',
              title: 'The Beginning',
              description: 'Started with just 10 students and a dream to revolutionize early education with innovative teaching methods.',
              image: 'https://images.pexels.com/photos/8612931/pexels-photo-8612931.jpeg',
              icon: '🌱'
            },
            {
              year: '2015',
              title: 'Growing Together',
              description: 'Expanded our programs and welcomed hundreds of happy families, introducing new learning methodologies.',
              image: 'https://images.pexels.com/photos/8613165/pexels-photo-8613165.jpeg',
              icon: '🌿'
            },
            {
              year: '2023',
              title: 'Leading the Way',
              description: 'Now a community of over 500 students, still growing and innovating with state-of-the-art facilities.',
              image: 'https://images.pexels.com/photos/8612987/pexels-photo-8612987.jpeg',
              icon: '🌳'
            }
          ].map((milestone) => (
            <div 
              key={milestone.year}
              className="group bg-purple-50 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className="relative h-48">
                <img 
                  src={milestone.image}
                  alt={milestone.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-purple-900/50 to-transparent group-hover:from-purple-900/70 transition-all duration-300" />
                <div className="absolute bottom-4 left-4 text-white">
                  <span className="text-4xl">{milestone.icon}</span>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <span className="px-4 py-1 bg-purple-100 text-purple-600 rounded-full font-bold">{milestone.year}</span>
                  <div className="w-16 h-0.5 bg-purple-200"></div>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">{milestone.title}</h3>
                <p className="text-gray-600">{milestone.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 