export default function AboutHero() {
  return (
    <section className="pt-28 pb-16 bg-gradient-to-b from-purple-100 via-white to-pink-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
          <div className="w-full md:w-1/2 space-y-6 px-4 sm:px-6 md:px-0">
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-800 leading-tight">
                Where Learning 
                <span className="block">Meets</span>
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-500">
                  Adventure & Fun!
                </span>
              </h1>
              <p className="text-lg sm:text-xl text-gray-600 leading-relaxed max-w-xl">
                At Kilbil, we create a magical environment where every child's potential is nurtured through play, discovery, and creative learning experiences.
              </p>
            </div>

            <div className="grid grid-cols-3 gap-3 sm:gap-4 md:gap-6">
              <div className="bg-white p-3 sm:p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <h3 className="text-xl sm:text-2xl font-bold text-purple-600">15+</h3>
                <p className="text-sm sm:text-base text-gray-600">Years Experience</p>
              </div>
              <div className="bg-white p-3 sm:p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <h3 className="text-xl sm:text-2xl font-bold text-pink-500">500+</h3>
                <p className="text-sm sm:text-base text-gray-600">Happy Students</p>
              </div>
              <div className="bg-white p-3 sm:p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <h3 className="text-xl sm:text-2xl font-bold text-purple-600">50+</h3>
                <p className="text-sm sm:text-base text-gray-600">Expert Teachers</p>
              </div>
            </div>
          </div>

          <div className="w-full md:w-1/2 mt-8 md:mt-0">
            <div className="relative">
              <img 
                src="https://images.pexels.com/photos/8613070/pexels-photo-8613070.jpeg"
                alt="Kids having fun while learning"
                className="w-full rounded-2xl shadow-xl hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-lg shadow-lg">
                <span className="text-4xl">🌟</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 