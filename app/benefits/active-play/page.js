import Image from 'next/image';
import Link from 'next/link';



export default function ActivePlayPage() {
  const benefits = [
    {
      title: 'Physical Development',
      description: 'Strengthens muscles, improves balance, and enhances overall physical fitness through structured play activities.',
      icon: '💪',
      color: 'from-blue-100 to-blue-50'
    },
    {
      title: 'Motor Skills',
      description: 'Develops both fine and gross motor skills through various indoor activities and games.',
      icon: '🎯',
      color: 'from-green-100 to-green-50'
    },
    {
      title: 'Social Skills',
      description: 'Encourages teamwork, sharing, and positive interaction with peers during group activities.',
      icon: '🤝',
      color: 'from-yellow-100 to-yellow-50'
    },
    {
      title: 'Emotional Growth',
      description: 'Builds confidence, self-esteem, and emotional resilience through achievement and overcoming challenges.',
      icon: '🌟',
      color: 'from-purple-100 to-purple-50'
    }
  ];

  const activities = [
    {
      name: 'Movement Games',
      description: 'Fun games that involve running, jumping, and coordination exercises.',
      image: 'https://img.freepik.com/free-vector/children-playing-different-games-kindergarten_74855-7370.jpg'
    },
    {
      name: 'Dance Sessions',
      description: 'Rhythmic movement activities that combine music and exercise.',
      image: 'https://img.freepik.com/free-vector/children-dancing-together_74855-5600.jpg'
    },
    {
      name: 'Balance Activities',
      description: 'Activities focused on developing balance and spatial awareness.',
      image: 'https://img.freepik.com/free-vector/children-playing-different-sports_52683-36631.jpg'
    }
  ];

  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-yellow-50">
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://img.freepik.com/free-vector/children-doing-different-sports-activities_52683-36628.jpg"
            alt="Active Play"
            fill
            className="object-cover opacity-20"
            sizes="100vw"
          />
        </div>
        <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-800 mb-6">
            Active Play Benefits
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto">
            Discover how our active play program helps children develop essential physical and social skills in a fun, safe environment.
          </p>
        </div>
      </section>

      {/* Benefits Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit) => (
              <div
                key={benefit.title}
                className={`rounded-2xl p-6 bg-gradient-to-b ${benefit.color} shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2`}
              >
                <div className="text-center mb-6">
                  <span className="text-5xl mb-4 block animate-bounce">
                    {benefit.icon}
                  </span>
                  <h3 className="text-2xl font-bold text-gray-800">
                    {benefit.title}
                  </h3>
                </div>
                <p className="text-gray-700 text-center">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Activities Showcase */}
      <section className="py-20 bg-white px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-800 text-center mb-16">
            Our Active Play Activities
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {activities.map((activity) => (
              <div
                key={activity.name}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="relative h-48">
                  <Image
                    src={activity.image}
                    alt={activity.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-800 mb-3">
                    {activity.name}
                  </h3>
                  <p className="text-gray-600">
                    {activity.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-b from-yellow-50 to-white px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-8">
            Join Our Active Play Program
          </h2>
          <p className="text-xl text-gray-600 mb-12">
            Give your child the gift of active learning and development in our engaging environment.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-yellow-400 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-yellow-500 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            Contact Us Today
          </Link>
        </div>
      </section>
    </main>
  );
} 