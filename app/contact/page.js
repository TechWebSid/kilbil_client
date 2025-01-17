import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Contact() {
  return (
    <main className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-28 pb-16 bg-gradient-to-b from-green-100 via-blue-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2 space-y-6">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-800">
                Let's Stay
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-green-500 via-blue-500 to-purple-500">
                  Connected! 👋
                </span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                We'd love to hear from you! Reach out with any questions about
                our programs.
              </p>
            </div>
            <div className="md:w-1/2">
              <img
                src="https://img.freepik.com/free-vector/organic-flat-customer-support-illustration_23-2148899173.jpg"
                alt="Contact us"
                className="rounded-2xl shadow-xl hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <h2 className="text-4xl font-bold text-gray-800">
                Get in Touch 📬
              </h2>
              <div className="space-y-6">
                {[
                  {
                    icon: "📍",
                    title: "Visit Us",
                    info: "Shop no.6/sr. No.2, Walhekar Properties, 1st floor, Nanded City, Pune",
                    image:
                      "https://img.freepik.com/free-vector/city-map-concept-illustration_114360-1499.jpg",
                  },
                  {
                    icon: "📞",
                    title: "Call Us",
                    info: "(555) 123-4567",
                    image:
                      "https://img.freepik.com/free-vector/organic-flat-customer-support-illustration_23-2148899174.jpg",
                  },
                  {
                    icon: "✉️",
                    title: "Email Us",
                    info: "info@kilbil.in",
                    image:
                      "https://img.freepik.com/free-vector/email-campaign-concept-illustration_114360-1633.jpg",
                  },
                ].map((contact) => (
                  <div
                    key={contact.title}
                    className="flex items-center space-x-4 bg-purple-50 p-4 rounded-xl hover:shadow-md transition-shadow"
                  >
                    <span className="text-3xl">{contact.icon}</span>
                    <div>
                      <h3 className="font-bold text-gray-800">
                        {contact.title}
                      </h3>
                      <p className="text-gray-600">{contact.info}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-purple-50 p-8 rounded-2xl shadow-lg">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">
                Send us a Message 💌
              </h3>
              <form className="space-y-6">
                <div>
                  <label className="block text-gray-700 mb-2">Your Name</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    placeholder="john@example.com"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 mb-2">Message</label>
                  <textarea
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-500 focus:border-transparent h-32"
                    placeholder="Your message here..."
                  ></textarea>
                </div>
                <button className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      {/* <section className="py-20 bg-gradient-to-b from-purple-50 to-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-16">
            Find Us Here 🗺️
          </h2>
          <div className="relative h-96 rounded-2xl overflow-hidden shadow-xl">
            <img 
              src="https://img.freepik.com/free-vector/city-map-concept-illustration_114360-1502.jpg"
              alt="Location map"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section> */}

      {/* Social Connect Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-12">
            Connect With Us 🌈
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              {
                platform: "Facebook",
                icon: "👍",
                color: "bg-blue-50",
                hover: "hover:bg-blue-100",
                link: "https://www.facebook.com/kilbilthelearninghome",
              },
              {
                platform: "Instagram",
                icon: "📸",
                color: "bg-pink-50",
                hover: "hover:bg-pink-100",
                link: "https://www.instagram.com/kilbilthelearninghome",
              },
              {
                platform: "Twitter",
                icon: "🐦",
                color: "bg-blue-50",
                hover: "hover:bg-blue-100",
                link: "https://www.twitter.com/kilbilthelearninghome",
              },
              {
                platform: "YouTube",
                icon: "🎥",
                color: "bg-red-50",
                hover: "hover:bg-red-100",
                link: "https://www.youtube.com/kilbilthelearninghome",
              },
            ].map((social) => (
              <div
                key={social.platform}
                className={`${social.color} ${social.hover} p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105 cursor-pointer`}
              >
                <span className="text-4xl mb-4 block">{social.icon}</span>

                <h3 className="font-bold text-gray-800">{social.platform}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
