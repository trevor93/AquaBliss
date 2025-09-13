import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/services', label: 'Services' },
    { path: '/bottle-design', label: 'Bottle Design' },
    { path: '/branding-order', label: 'Order for Branding Services' },
    { path: '/contact', label: 'Order for Water Services' },
  ];

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="group-hover:scale-105 transition-transform">
              <img 
                src="/AquaBliss Logo Image.jpg" 
                alt="Aqua Bliss - Pure Water, Pure Bliss" 
                className="h-12 w-auto object-contain"
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`font-medium transition-colors ${
                  isActive(link.path)
                    ? 'text-sky-600 border-b-2 border-sky-600 pb-1'
                    : 'text-gray-700 hover:text-sky-600'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center space-x-4">
            <a
              href="tel:0746808075"
              className="flex items-center space-x-2 text-gray-700 hover:text-sky-600 transition-colors"
            >
              <Phone className="h-4 w-4" />
              <span className="text-sm font-medium">0746808075</span>
            </a>
            <Link
              to="/contact"
              className="bg-gradient-to-r from-sky-500 to-sky-600 text-white px-6 py-2 rounded-full font-semibold hover:from-sky-600 hover:to-sky-700 transform hover:scale-105 transition-all shadow-md"
            >
              Order Now
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-md text-gray-700 hover:text-sky-600 hover:bg-gray-100 transition-colors"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <nav className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={`font-medium transition-colors ${
                    isActive(link.path)
                      ? 'text-sky-600 pl-4 border-l-4 border-sky-600'
                      : 'text-gray-700 hover:text-sky-600 pl-4'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <div className="pt-4 border-t border-gray-200">
                <a
                  href="tel:0746808075"
                  className="flex items-center space-x-2 text-gray-700 hover:text-sky-600 transition-colors pl-4 mb-4"
                >
                  <Phone className="h-4 w-4" />
                  <span className="font-medium">0746808075</span>
                </a>
                <Link
                  to="/contact"
                  onClick={() => setIsMenuOpen(false)}
                  className="bg-gradient-to-r from-sky-500 to-sky-600 text-white px-6 py-2 rounded-full font-semibold hover:from-sky-600 hover:to-sky-700 transition-all shadow-md ml-4 inline-block"
                >
                  Order Now
                </Link>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;