export default function OurFounders() {
  const founders = [
    {
      name: "Mrs. Kavita Chandrashekhar Kasar",
      education: "B.Com, Teacher Training Course",
      experience: [
        "7 years experience in popular organization as a teacher",
        "9 years running own preschool and daycare"
      ],
      contact: "9158983918",
      image: "/images/founders/founder1.jpg",
      icons: {
        education: "🎓",
        experience: "⭐",
        contact: "📱",
        role: "👩‍🏫"
      }
    },
    {
      name: "Mrs. Vaishali Vishwas Walhekar",
      education: "B.A, Teacher Training Course",
      experience: [
        "7 years experience in popular organization as a teacher",
        "9 years running own preschool and daycare"
      ],
      contact: "9028548398",
      image: "/images/founders/founder2.jpg",
      icons: {
        education: "🎓",
        experience: "⭐",
        contact: "📱",
        role: "👩‍🏫"
      }
    },
    {
      name: "Mrs. Ashwini Sunil Kurpe",
      education: "B.A.B.Ed",
      experience: [
        "11 years experience in popular organization as a teacher and coordinator",
        "9 years running own preschool and daycare",
        "Received ideal teacher award in 2020-21"
      ],
      contact: "9881149277",
      image: "/images/founders/founder3.jpg",
      icons: {
        education: "🎓",
        experience: "⭐",
        contact: "📱",
        role: "👩‍🏫",
        award: "🏆"
      }
    },
    {
      name: "Mrs. Pradnya Suhas Umbrajkar",
      education: "B.Sc, Teacher Training Course",
      experience: [
        "7 years experience in popular organization as a teacher",
        "9 years running own preschool and daycare"
      ],
      contact: "9049770024",
      image: "/images/founders/founder4.jpg",
      icons: {
        education: "🎓",
        experience: "⭐",
        contact: "📱",
        role: "👩‍🏫"
      }
    }
  ];

  return (
    <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-b from-purple-50 to-pink-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-3 sm:mb-4">Meet Our Founders</h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto px-4">
            Dedicated educators with a passion for early childhood development and years of experience in nurturing young minds.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
          {founders.map((founder, index) => (
            <div
              key={index}
              className="group bg-white rounded-xl sm:rounded-2xl p-4 sm:p-5 md:p-6 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 sm:hover:-translate-y-2 relative overflow-hidden"
            >
              {/* Decorative Background Pattern */}
              <div className="absolute top-0 right-0 w-24 sm:w-28 md:w-32 h-24 sm:h-28 md:h-32 bg-gradient-to-br from-purple-100 to-pink-100 rounded-bl-full -z-1 transition-transform duration-300 group-hover:scale-150 opacity-50"></div>

              {/* Founder Image */}
              <div className="mb-4 sm:mb-5 md:mb-6 relative">
                <div className="w-20 h-20 sm:w-24 sm:h-24 mx-auto rounded-full overflow-hidden border-3 sm:border-4 border-purple-100 shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <img
                    src={founder.image}
                    alt={founder.name}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Founder Details */}
              <div className="space-y-3 sm:space-y-4 relative">
                <h3 className="text-lg sm:text-xl font-bold text-gray-800 group-hover:text-purple-600 transition-colors duration-300 text-center">
                  {founder.name}
                </h3>

                <div className="space-y-2">
                  <div className="flex items-start gap-2">
                    <span className="text-lg sm:text-xl flex-shrink-0">{founder.icons.education}</span>
                    <p className="text-sm sm:text-base text-gray-600">{founder.education}</p>
                  </div>

                  <div className="space-y-1.5 sm:space-y-2">
                    {founder.experience.map((exp, i) => (
                      <div key={i} className="flex items-start gap-2">
                        <span className="text-lg sm:text-xl flex-shrink-0">
                          {i === 2 ? founder.icons.award || founder.icons.experience : founder.icons.experience}
                        </span>
                        <p className="text-xs sm:text-sm text-gray-600">{exp}</p>
                      </div>
                    ))}
                  </div>

                  <div className="flex items-center gap-2 pt-2">
                    <span className="text-lg sm:text-xl flex-shrink-0">{founder.icons.contact}</span>
                    <a 
                      href={`tel:+91${founder.contact}`}
                      className="text-sm sm:text-base text-purple-600 font-semibold hover:text-purple-700 transition-colors duration-200"
                    >
                      +91 {founder.contact}
                    </a>
                  </div>
                </div>
              </div>

              {/* Decorative Bottom Pattern */}
              <div className="absolute bottom-0 left-0 w-full h-0.5 sm:h-1 bg-gradient-to-r from-purple-500 to-pink-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 