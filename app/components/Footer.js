'use client';
import { FaFacebook, FaTwitter, FaInstagram, FaMapMarkerAlt, FaPhone, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  const socialLinks = [
    {
      name: 'Facebook',
      icon: <FaFacebook className="h-6 w-6" />,
      url: 'https://www.facebook.com/kilbilschool'
    },
    {
      name: 'Twitter',
      icon: <FaTwitter className="h-6 w-6" />,
      url: 'https://twitter.com/kilbilschool'
    },
    {
      name: 'Instagram',
      icon: <FaInstagram className="h-6 w-6" />,
      url: 'https://www.instagram.com/kilbilschool'
    }
  ];

  const quickLinks = [
    { name: 'Admissions', url: '/admissions' },
    { name: 'Activities', url: '/activities' },
    { name: 'About Us', url: '/about' },
    { name: 'Contact Us', url: '/contact' }
  ];

  return (
    <footer className="bg-gradient-to-r from-purple-100 to-pink-100">
      <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold text-purple-600 mb-4">Contact Us</h3>
            <div className="space-y-4 text-gray-600">
              <div className="flex items-start space-x-3">
                <FaMapMarkerAlt className="h-5 w-5 text-purple-500 mt-1 flex-shrink-0" />
                <p>Shop no.6/sr. No.2, Walhekar Properties, 1st floor, Nanded City, Pune, India</p>
              </div>
              <div className="flex items-center space-x-3">
                <FaPhone className="h-5 w-5 text-purple-500" />
                <p>(555) 123-4567</p>
              </div>
              <div className="flex items-center space-x-3">
                <FaEnvelope className="h-5 w-5 text-purple-500" />
                <p>info@kilbil.in</p>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold text-purple-600 mb-4">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.url}
                    className="text-gray-600 hover:text-purple-600 transition-colors duration-200 flex items-center space-x-2"
                  >
                    <span className="text-purple-500">•</span>
                    <span>{link.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-xl font-bold text-purple-600 mb-4">Follow Us</h3>
            <div className="flex space-x-6">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-purple-500 hover:text-purple-700 transition-colors duration-200 transform hover:scale-110"
                  aria-label={`Follow us on ${social.name}`}
                >
                  {social.icon}
                </a>
              ))}
            </div>
            <div className="mt-6">
              <p className="text-gray-600">Stay connected with us on social media for updates and announcements!</p>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-purple-200 text-center text-gray-600">
          <p>© {new Date().getFullYear()} Kilbil The Learning Home. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 