import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function About() {
  return (
    <main className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-28 pb-16 bg-gradient-to-b from-purple-100 via-white to-pink-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2 space-y-6">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-800">
                Where Learning Meets
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-500">
                  Adventure & Fun!
                </span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                At Kids Academy, we create a magical environment where every child's potential is nurtured through play, discovery, and creative learning experiences.
              </p>
            </div>
            <div className="md:w-1/2">
              <img 
                src="https://images.pexels.com/photos/8613070/pexels-photo-8613070.jpeg"
                alt="Kids having fun while learning"
                className="rounded-2xl shadow-xl hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-6">Our Story</h2>
            <p className="text-xl text-gray-600">
              Founded in 2010, Kids Academy has grown from a small playgroup to a leading early childhood education center.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                year: '2010',
                title: 'The Beginning',
                description: 'Started with just 10 students and a dream to revolutionize early education.',
                image: 'https://images.pexels.com/photos/8612931/pexels-photo-8612931.jpeg'
              },
              {
                year: '2015',
                title: 'Growing Together',
                description: 'Expanded our programs and welcomed hundreds of happy families.',
                image: 'https://images.pexels.com/photos/8613165/pexels-photo-8613165.jpeg'
              },
              {
                year: '2023',
                title: 'Leading the Way',
                description: 'Now a community of over 500 students, still growing and innovating.',
                image: 'https://images.pexels.com/photos/8612987/pexels-photo-8612987.jpeg'
              }
            ].map((milestone) => (
              <div 
                key={milestone.year}
                className="bg-purple-50 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-200"
              >
                <img 
                  src={milestone.image}
                  alt={milestone.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <span className="text-purple-600 font-bold text-lg">{milestone.year}</span>
                  <h3 className="text-xl font-bold text-gray-800 mt-2 mb-3">{milestone.title}</h3>
                  <p className="text-gray-600">{milestone.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="py-20 bg-gradient-to-b from-pink-50 to-purple-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-16">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {[
              {
                title: 'Play-Based Learning',
                description: 'We believe children learn best through play and hands-on experiences.',
                image: 'https://images.pexels.com/photos/8613335/pexels-photo-8613335.jpeg',
                color: 'from-pink-500 to-purple-500'
              },
              {
                title: 'Safe & Nurturing',
                description: 'Creating a secure environment where children feel loved and supported.',
                image: 'https://images.pexels.com/photos/8612933/pexels-photo-8612933.jpeg',
                color: 'from-purple-500 to-pink-500'
              },
              {
                title: 'Individual Growth',
                description: 'Every child develops at their own pace, and we celebrate that uniqueness.',
                image: 'https://images.pexels.com/photos/8612903/pexels-photo-8612903.jpeg',
                color: 'from-pink-500 to-purple-500'
              },
              {
                title: 'Community Spirit',
                description: 'Building strong relationships between children, parents, and teachers.',
                image: 'https://images.pexels.com/photos/8612897/pexels-photo-8612897.jpeg',
                color: 'from-purple-500 to-pink-500'
              }
            ].map((value) => (
              <div 
                key={value.title}
                className="flex flex-col md:flex-row gap-8 items-center bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                <div className="md:w-1/2">
                  <div className="relative">
                    <img 
                      src={value.image}
                      alt={value.title}
                      className="rounded-xl shadow-md"
                    />
                    <div className={`absolute inset-0 bg-gradient-to-tr ${value.color} opacity-20 rounded-xl`}></div>
                  </div>
                </div>
                <div className="md:w-1/2 space-y-4">
                  <h3 className="text-2xl font-bold text-gray-800">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Preview Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-6">Meet Our Team</h2>
          <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto">
            Our dedicated team of educators brings passion, expertise, and creativity to make learning fun and effective.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                name: 'Ms. Sarah',
                role: 'Principal',
                image: 'https://images.pexels.com/photos/8613056/pexels-photo-8613056.jpeg'
              },
              {
                name: 'Mr. John',
                role: 'Art Teacher',
                image: 'https://images.pexels.com/photos/8613082/pexels-photo-8613082.jpeg'
              },
              {
                name: 'Ms. Emily',
                role: 'Music Teacher',
                image: 'https://images.pexels.com/photos/8613169/pexels-photo-8613169.jpeg'
              },
              {
                name: 'Mr. David',
                role: 'Sports Coach',
                image: 'https://images.pexels.com/photos/8613272/pexels-photo-8613272.jpeg'
              }
            ].map((member) => (
              <div 
                key={member.name}
                className="group relative overflow-hidden rounded-xl shadow-lg"
              >
                <img 
                  src={member.image}
                  alt={member.name}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-purple-600/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-6 text-white">
                    <h3 className="text-xl font-bold">{member.name}</h3>
                    <p>{member.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
} 