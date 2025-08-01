import React from 'react';
import { Link } from 'react-router-dom';
import { Truck, Shield, Clock, Star, CheckCircle, Package, Palette, MessageCircle } from 'lucide-react';

const Home = () => {
  const features = [
    {
      icon: Shield,
      title: 'Pure & Clean',
      description: 'Our water goes through rigorous purification processes to ensure the highest quality standards.',
    },
    {
      icon: Truck,
      title: 'Fast Delivery',
      description: 'Same-day delivery across Thika and surrounding areas. Order before 8PM for guaranteed delivery.',
    },
    {
      icon: Clock,
      title: 'Flexible Services',
      description: 'From retail to wholesale, refilling to custom branding - we have solutions for every need.',
    },
    {
      icon: Star,
      title: 'Affordable Prices',
      description: 'Starting at just KSh 50 for refills. Premium quality water at unbeatable prices.',
    },
  ];

  const services = [
    {
      icon: Package,
      title: 'Retail Water',
      description: 'Individual bottles from 5L to 20L with bottle included or refilling services',
      price: 'From KSh 50'
    },
    {
      icon: Package,
      title: 'Wholesale Packages',
      description: 'Carton packages for businesses and bulk orders',
      price: 'From KSh 350'
    },
    {
      icon: Palette,
      title: 'Custom Branding',
      description: 'Personalized water bottles for events and special occasions',
      price: 'From KSh 350'
    }
  ];

  const testimonials = [
    {
      name: 'Sarah Wanjiku',
      location: 'Makongeni, Thika',
      comment: 'Aqua Bliss has been our family\'s water supplier for over a year. The quality is excellent and delivery is always on time!',
      rating: 5,
    },
    {
      name: 'David Ochieng',
      location: 'Thika Town',
      comment: 'Affordable, clean water delivered right to my office. The M-Pesa payment option makes it so convenient.',
      rating: 5,
    },
    {
      name: 'Grace Mutua',
      location: 'Kiganjo, Thika',
      comment: 'I love the reliability. Never have to worry about running out of clean water for my family.',
      rating: 5,
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-sky-50 to-white py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=%2260%22 height=%2260%22 viewBox=%220 0 60 60%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%22none%22 fill-rule=%22evenodd%22%3E%3Cg fill=%22%23e0f2fe%22 fill-opacity=%220.4%22%3E%3Ccircle cx=%227%22 cy=%227%22 r=%221%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-30"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex justify-center mb-8">
              <img 
                src="/IMG-20250703-WA0001.jpg" 
                alt="Aqua Bliss - Pure Water, Pure Bliss" 
                className="h-32 w-auto object-contain animate-pulse"
              />
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Welcome to{' '}
              <span className="bg-gradient-to-r from-sky-500 to-sky-700 bg-clip-text text-transparent">
                Aqua Bliss
              </span>
            </h1>
            
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              Experience Thika's most trusted water delivery service. Clean, affordable, and delivered straight to your doorstep. 
              From retail to wholesale, refilling to custom branding - we serve all your water needs.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-sky-500 to-sky-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:from-sky-600 hover:to-sky-700 transform hover:scale-105 transition-all shadow-xl"
              >
                Order Water Now
              </Link>
              <Link
                to="/services"
                className="border-2 border-sky-500 text-sky-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-sky-50 transition-colors"
              >
                View Our Services
              </Link>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap justify-center items-center gap-6 text-sm text-gray-600">
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-5 w-5 text-green-500" />
                <span>M-Pesa Payments</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-5 w-5 text-green-500" />
                <span>Same Day Delivery</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-5 w-5 text-green-500" />
                <span>100% Pure Water</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-5 w-5 text-green-500" />
                <span>Custom Branding</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Showcase Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Product Image */}
            <div className="relative">
              <div className="bg-gradient-to-br from-sky-50 to-sky-100 rounded-3xl p-8 shadow-2xl">
                <img 
                  src="/IMG-20250703-WA0002.jpg" 
                  alt="Aqua Bliss branded water bottles with pure clean water" 
                  className="w-full h-auto object-cover rounded-2xl shadow-lg transform hover:scale-105 transition-transform duration-500"
                />
                {/* Floating badge */}
                <div className="absolute -top-4 -right-4 bg-gradient-to-r from-sky-500 to-sky-600 text-white px-6 py-3 rounded-full shadow-xl">
                  <span className="font-bold text-sm">100% Pure</span>
                </div>
              </div>
            </div>

            {/* Marketing Content */}
            <div className="space-y-8">
              <div>
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                  Trusted, Branded & Delivered
                </h2>
                <p className="text-2xl text-sky-600 font-semibold mb-4">
                  Experience Aqua Bliss Today
                </p>
                <p className="text-lg text-gray-600 leading-relaxed mb-8">
                  Our premium water bottles showcase the quality and purity you can trust. 
                  Each bottle is carefully filled with purified water and branded with our 
                  commitment to excellence. From our facility in Thika to your doorstep, 
                  we ensure every drop meets the highest standards.
                </p>
              </div>

              {/* Key Benefits */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex items-start space-x-3">
                  <div className="bg-sky-100 p-2 rounded-full flex-shrink-0">
                    <Shield className="h-6 w-6 text-sky-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Premium Quality</h3>
                    <p className="text-sm text-gray-600">Rigorous purification process</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="bg-sky-100 p-2 rounded-full flex-shrink-0">
                    <Truck className="h-6 w-6 text-sky-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Fast Delivery</h3>
                    <p className="text-sm text-gray-600">Same-day service across Thika</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="bg-sky-100 p-2 rounded-full flex-shrink-0">
                    <Star className="h-6 w-6 text-sky-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Affordable Pricing</h3>
                    <p className="text-sm text-gray-600">Starting from just KSh 50</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="bg-sky-100 p-2 rounded-full flex-shrink-0">
                    <Palette className="h-6 w-6 text-sky-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Custom Branding</h3>
                    <p className="text-sm text-gray-600">Personalized for your events</p>
                  </div>
                </div>
              </div>

              {/* Call to Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/contact"
                  className="bg-gradient-to-r from-sky-500 to-sky-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:from-sky-600 hover:to-sky-700 transform hover:scale-105 transition-all shadow-xl flex items-center justify-center space-x-2"
                >
                  <span>Order Now</span>
                </Link>
                <a
                  href="https://wa.me/254746808075?text=Hello%20Aqua%20Bliss,%20I%20would%20like%20to%20place%20an%20order"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-green-500 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-green-600 transform hover:scale-105 transition-all shadow-xl flex items-center justify-center space-x-2"
                >
                  <MessageCircle className="h-5 w-5" />
                  <span>WhatsApp Order</span>
                </a>
                <a
                  href="https://wa.me/254746808075?text=Hello%20Aqua%20Bliss,%20I%20would%20like%20to%20place%20an%20order"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-green-500 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-green-600 transform hover:scale-105 transition-all shadow-xl flex items-center justify-center space-x-2"
                >
                  <MessageCircle className="h-5 w-5" />
                  <span>WhatsApp Order</span>
                </a>
                <Link
                  to="/services"
                  className="border-2 border-sky-500 text-sky-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-sky-50 transition-colors flex items-center justify-center space-x-2"
                >
                  <span>Explore Our Services</span>
                  <Package className="h-5 w-5" />
                </Link>
              </div>

              {/* Trust Indicators */}
              <div className="bg-sky-50 p-6 rounded-2xl">
                <div className="flex flex-wrap gap-4 text-sm">
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span className="text-gray-700">BPA-Free Bottles</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span className="text-gray-700">Quality Tested</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span className="text-gray-700">Eco-Friendly</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span className="text-gray-700">Locally Sourced</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Aqua Bliss?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We're not just delivering water - we're delivering peace of mind, convenience, and quality you can trust.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow border border-gray-100 group hover:border-sky-200"
              >
                <div className="bg-gradient-to-r from-sky-100 to-sky-200 p-4 rounded-full w-fit mb-6 group-hover:from-sky-200 group-hover:to-sky-300 transition-colors">
                  <feature.icon className="h-8 w-8 text-sky-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20 bg-gradient-to-br from-sky-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="flex justify-center mb-6">
              <img 
                src="/IMG-20250703-WA0001.jpg" 
                alt="Aqua Bliss Logo" 
                className="h-16 w-auto object-contain"
              />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Water Services
            </h2>
            <p className="text-xl text-gray-600">
              Comprehensive water solutions for every need and budget
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="text-center">
                  <div className="bg-gradient-to-r from-sky-100 to-sky-200 p-4 rounded-full w-fit mx-auto mb-6">
                    <service.icon className="h-8 w-8 text-sky-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">{service.title}</h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <div className="text-2xl font-bold text-sky-600 mb-6">{service.price}</div>
                  <Link
                    to="/services"
                    className="bg-gradient-to-r from-sky-500 to-sky-600 text-white px-6 py-3 rounded-full font-semibold hover:from-sky-600 hover:to-sky-700 transition-all"
                  >
                    Learn More
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/services"
              className="bg-gradient-to-r from-sky-500 to-sky-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:from-sky-600 hover:to-sky-700 transform hover:scale-105 transition-all shadow-xl"
            >
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What Our Customers Say
            </h2>
            <p className="text-xl text-gray-600">
              Join thousands of satisfied customers across Thika
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-gray-50 p-8 rounded-2xl hover:shadow-lg transition-shadow"
              >
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-6 italic leading-relaxed">
                  "{testimonial.comment}"
                </p>
                <div>
                  <div className="font-semibold text-gray-900">{testimonial.name}</div>
                  <div className="text-sm text-gray-500">{testimonial.location}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-sky-500 to-sky-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready for Pure, Clean Water?
          </h2>
          <p className="text-xl text-sky-100 mb-8 leading-relaxed">
            Don't wait for clean water. Order now and experience the Aqua Bliss difference. 
            Same-day delivery available across Thika and surrounding areas.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-white text-sky-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transform hover:scale-105 transition-all shadow-xl"
            >
              Order Now
            </Link>
            <a
              href="https://wa.me/254746808075?text=Hello%20Aqua%20Bliss,%20I%20would%20like%20to%20place%20an%20order"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-green-600 transform hover:scale-105 transition-all shadow-xl flex items-center justify-center space-x-2"
            >
              <MessageCircle className="h-5 w-5" />
              <span>WhatsApp Order</span>
            </a>
            <a
              href="tel:0746808075"
              className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-sky-600 transition-colors"
            >
              Call: 0746808075
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;