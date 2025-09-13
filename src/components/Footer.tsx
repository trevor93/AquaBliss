import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Heart, Facebook, Twitter, Instagram } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="bg-white p-2 rounded-full">
                <img 
                  src="/AquaBliss Logo Image.jpg" 
                  alt="Aqua Bliss - Pure Water, Pure Bliss" 
                  className="h-8 w-auto object-contain"
                />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white">Aqua Bliss</h3>
                <p className="text-gray-400">Pure Water, Pure Bliss</p>
              </div>
            </div>
            <p className="text-gray-300 leading-relaxed mb-6 max-w-md">
              Your trusted water delivery service in Thika. We provide clean, affordable, 
              purified water with same-day delivery. From retail to wholesale, custom branding 
              to refilling services - we serve all your water needs.
            </p>
            <div className="flex items-center space-x-2 text-gray-400">
              <Heart className="h-4 w-4 text-red-500" />
              <span className="text-sm">Serving Thika with pride since 2023</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
            <nav className="space-y-3">
              <Link to="/" className="block text-gray-300 hover:text-sky-400 transition-colors">
                Home
              </Link>
              <Link to="/services" className="block text-gray-300 hover:text-sky-400 transition-colors">
                Our Services
              </Link>
              <Link to="/bottle-design" className="block text-gray-300 hover:text-sky-400 transition-colors">
                Bottle Design
              </Link>
              <Link to="/branding-order" className="block text-gray-300 hover:text-sky-400 transition-colors">
                Order for Branding Services
              </Link>
              <Link to="/contact" className="block text-gray-300 hover:text-sky-400 transition-colors">
                Order for Water Services
              </Link>
            </nav>
            <div className="mt-6">
              <h5 className="font-medium mb-3">Our Services</h5>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>• Retail Water Delivery</li>
                <li>• Wholesale Packages</li>
                <li>• Custom Water Branding</li>
                <li>• Bottle Refilling Services</li>
              </ul>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Contact Us</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <Phone className="h-5 w-5 text-sky-400 mt-1 flex-shrink-0" />
                <div>
                  <div className="font-medium">Orders & Deliveries</div>
                  <a href="tel:0746808075" className="text-gray-300 hover:text-sky-400 transition-colors">
                    0746808075
                  </a>
                  <div className="text-sm text-gray-400 mt-1">Mon-Sun: 6AM-8PM</div>
                  <div className="text-sm text-gray-400">Sat: CLOSED</div>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <Phone className="h-5 w-5 text-sky-400 mt-1 flex-shrink-0" />
                <div>
                  <div className="font-medium">Business Line</div>
                  <a href="tel:0743970594" className="text-gray-300 hover:text-sky-400 transition-colors">
                    0743970594 / 0708045934
                  </a>
                  <div className="text-sm text-gray-400 mt-1">Branding & Wholesale</div>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <Mail className="h-5 w-5 text-sky-400 mt-1 flex-shrink-0" />
                <div>
                  <div className="font-medium">Email</div>
                  <a href="mailto:aquabliss217@gmail.com" className="text-gray-300 hover:text-sky-400 transition-colors">
                    aquabliss217@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-sky-400 mt-1 flex-shrink-0" />
                <div>
                  <div className="font-medium">Location</div>
                  <div className="text-gray-300">Alongside Garissa Road</div>
                  <div className="text-gray-300">Oryx Makongeni, Thika</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Social Media Links */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="text-center">
            <h4 className="font-semibold mb-6 text-white">Follow Us</h4>
            <div className="flex justify-center items-center space-x-6">
              <a
                href="https://www.facebook.com/share/1L5ShFthsi/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-600 hover:bg-blue-700 p-3 rounded-full transition-colors transform hover:scale-110 shadow-lg"
                aria-label="Follow us on Facebook"
              >
                <Facebook className="h-6 w-6 text-white" />
              </a>
              <a
                href="https://x.com/Aquabliss_Ltd?t=1Lb4U9EKipKASCGHmwhZRA&s=09"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-black hover:bg-gray-800 p-3 rounded-full transition-colors transform hover:scale-110 shadow-lg"
                aria-label="Follow us on X (Twitter)"
              >
                <Twitter className="h-6 w-6 text-white" />
              </a>
              <a
                href="https://www.instagram.com/aquablisslimited?igsh=MTVyZHJiNjUzMjZmMA=="
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 p-3 rounded-full transition-colors transform hover:scale-110 shadow-lg"
                aria-label="Follow us on Instagram"
              >
                <Instagram className="h-6 w-6 text-white" />
              </a>
              <a
                href="https://wa.me/254746808075?text=Hello%20Aqua%20Bliss,%20I%20would%20like%20to%20place%20an%20order"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-500 hover:bg-green-600 p-3 rounded-full transition-all duration-300 transform hover:scale-110 shadow-lg hover:shadow-xl"
                aria-label="Contact us on WhatsApp"
              >
                <svg className="h-6 w-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.787"/>
                </svg>
              </a>
            </div>
            <p className="text-gray-400 text-sm mt-4">
              Stay connected for updates, offers, and water delivery tips!
            </p>
          </div>
        </div>

        {/* Payment Methods */}
        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="text-center">
            <h4 className="font-semibold mb-4">We Accept</h4>
            <div className="flex justify-center items-center space-x-8">
              <div className="bg-green-600 px-4 py-2 rounded-lg">
                <span className="font-bold text-white">M-PESA</span>
              </div>
              <div className="border-2 border-gray-600 px-4 py-2 rounded-lg">
                <span className="font-medium text-gray-300">Cash on Delivery</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm">
              © {currentYear} Aqua Bliss. All rights reserved. | Pure Water, Pure Bliss
            </div>
            <div className="text-gray-400 text-sm">
              Made with <Heart className="h-4 w-4 text-red-500 inline mx-1" /> for Thika
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;