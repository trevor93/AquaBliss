import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Heart, Facebook, Twitter, Instagram, MessageCircle } from 'lucide-react';

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
                  src="/IMG-20250703-WA0001.jpg" 
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
              <Link to="/contact" className="block text-gray-300 hover:text-sky-400 transition-colors">
                Order Water
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
                className="bg-green-500 hover:bg-green-600 p-3 rounded-full transition-colors transform hover:scale-110 shadow-lg"
                aria-label="Contact us on WhatsApp"
              >
                <MessageCircle className="h-6 w-6 text-white" />
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