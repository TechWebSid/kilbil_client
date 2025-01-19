export default function OurFounders() {
  const founders = [
    {
      name: "Kavita Chandrashekhar Kasar",
      education: "B.Com, Teacher Training Course",
      experience: [
        "7 years experience in popular organization as a teacher",
        "9 years running own preschool and daycare"
      ],
      contact: "9158983918",
      icons: {
        education: "🎓",
        experience: "⭐",
        contact: "📱",
        role: "👩‍🏫"
      }
    },
    {
      name: "Vaishali Vishwas Walhekar",
      education: "B.A, Teacher Training Course",
      experience: [
        "7 years experience in popular organization as a teacher",
        "9 years running own preschool and daycare"
      ],
      contact: "9028548398",
      icons: {
        education: "🎓",
        experience: "⭐",
        contact: "📱",
        role: "👩‍🏫"
      }
    },
    {
      name: "Ashwini Sunil Kurpe",
      education: "B.A.B.Ed",
      experience: [
        "11 years experience in popular organization as a teacher and coordinator",
        "9 years running own preschool and daycare",
        "Received ideal teacher award in 2020-21"
      ],
      contact: "9881149277",
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
      icons: {
        education: "🎓",
        experience: "⭐",
        contact: "📱",
        role: "👩‍🏫"
      }
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-purple-50 to-pink-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Meet Our Founders</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Dedicated educators with a passion for early childhood development and years of experience in nurturing young minds.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {founders.map((founder, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 relative overflow-hidden"
            >
              {/* Decorative Background Pattern */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-purple-100 to-pink-100 rounded-bl-full -z-1 transition-transform duration-300 group-hover:scale-150 opacity-50"></div>

              {/* Founder Icon */}
              <div className="mb-6 relative">
                <div className="w-20 h-20 bg-gradient-to-r from-purple-100 to-pink-100 rounded-full flex items-center justify-center text-4xl group-hover:scale-110 transition-transform duration-300">
                  {founder.icons.role}
                </div>
              </div>

              {/* Founder Details */}
              <div className="space-y-4 relative">
                <h3 className="text-xl font-bold text-gray-800 group-hover:text-purple-600 transition-colors duration-300">
                  {founder.name}
                </h3>

                <div className="space-y-2">
                  <div className="flex items-start gap-2">
                    <span className="text-xl">{founder.icons.education}</span>
                    <p className="text-gray-600">{founder.education}</p>
                  </div>

                  <div className="space-y-2">
                    {founder.experience.map((exp, i) => (
                      <div key={i} className="flex items-start gap-2">
                        <span className="text-xl">{i === 2 ? founder.icons.award || founder.icons.experience : founder.icons.experience}</span>
                        <p className="text-gray-600 text-sm">{exp}</p>
                      </div>
                    ))}
                  </div>

                  <div className="flex items-center gap-2 pt-2">
                    <span className="text-xl">{founder.icons.contact}</span>
                    <p className="text-purple-600 font-semibold">{founder.contact}</p>
                  </div>
                </div>
              </div>

              {/* Decorative Bottom Pattern */}
              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 to-pink-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 