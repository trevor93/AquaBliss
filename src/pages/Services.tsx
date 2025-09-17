import { Link } from 'react-router-dom';
import SEOHead from '../components/SEOHead';
import { Truck, Clock, Shield, CheckCircle, Smartphone, Banknote, Package, Palette, ShoppingCart } from 'lucide-react';

const Services = () => {
  const retailServices = [
    {
      category: 'Buying with Bottle',
      items: [
        { size: '5 Litres', price: 'KSh 150', note: '(includes bottle)' },
        { size: '10 Litres', price: 'KSh 250', note: '(includes bottle)' },
        { size: '20 Litres', price: 'KSh 450', note: '(includes bottle)' }
      ]
    },
    {
      category: 'Refilling Services',
      items: [
        { size: '5 Litres', price: 'KSh 50', note: '(bring your own bottle)' },
        { size: '10 Litres', price: 'KSh 100', note: '(bring your own bottle)' },
        { size: '20 Litres', price: 'KSh 180', note: '(bring your own bottle)' }
      ]
    }
  ];

  const wholesalePackages = [
    { product: '500ml carton', quantity: '24 pcs', price: 'KSh 350' },
    { product: '1 Litre carton', quantity: '12 pcs', price: 'KSh 350' },
    { product: '5 Litre carton', quantity: '4 pcs', price: 'KSh 370' },
    { product: '10 Litre carton', quantity: '4 pcs', price: 'KSh 800' },
    { product: '20 Litre carton', quantity: '4 pcs', price: 'KSh 1,600' }
  ];

  const emptyBottles = [
    { size: '10 Litre bottle', price: 'KSh 150' },
    { size: '20 Litre bottle', price: 'KSh 250' }
  ];

  const brandingServices = [
    {
      service: 'Branding + Designing',
      description: 'Complete design and branding service',
      price: 'KSh 480',
      unit: 'per carton (500ml or 1L)'
    },
    {
      service: 'Branding Service Only',
      description: 'Using your existing design',
      price: 'KSh 350',
      unit: 'per carton (500ml or 1L)'
    }
  ];

  const deliveryAreas = [
    'Thika Town', 'Makongeni', 'Garissa Road', 'Kiganjo', 'Kiandutu',
    'Kamenu', 'Gatuanyaga', 'Landless', 'Kenyatta Road', 'Uhuru Market',
    'Biashara Street', 'Stadium Area', 'Blue Post', 'Thika Road', 'Juja Road'
  ];

  const paymentMethods = [
    {
      icon: Smartphone,
      title: 'M-Pesa Payment',
      description: 'Pay instantly using M-Pesa. Safe, secure, and convenient.',
      features: ['Instant payment confirmation', 'SMS receipts', 'No cash handling needed']
    },
    {
      icon: Banknote,
      title: 'Cash on Delivery',
      description: 'Pay when you receive your water. Simple and trusted.',
      features: ['Pay on delivery', 'No upfront payment needed', 'Change provided if needed']
    }
  ];

  return (
    <div className="py-20">
      <SEOHead
        title="Water Delivery Services in Thika | Retail, Wholesale & Custom Branding - Aqua Bliss"
        description="Complete water services in Thika: Retail water from KSh 50, wholesale packages from KSh 350, custom branding from KSh 350. M-Pesa payments, same-day delivery. View all services."
        keywords="water services Thika, retail water delivery, wholesale water packages, custom water branding, water refill services, M-Pesa water payment, empty bottles Thika, water delivery pricing Kenya"
        ogTitle="Complete Water Services in Thika - Aqua Bliss"
        ogDescription="Retail, wholesale, and custom branding water services in Thika. Competitive pricing, same-day delivery, flexible payment options."
        ogImage="/AquaBliss Wholesale Package Image.jpg"
        canonicalUrl="https://aquabliss.co.ke/services"
      />
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-sky-50 to-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex justify-center mb-6">
            <img 
              src="/AquaBliss Logo Image.jpg" 
              alt="Aqua Bliss Logo" 
              className="h-16 w-auto object-contain"
            />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our Water Services
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            From retail to wholesale, custom branding to refilling services - we provide comprehensive water solutions 
            for individuals, families, businesses, and special events in Thika and surrounding areas.
          </p>
        </div>
      </section>

      {/* Retail Water Services */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Retail Water Services
            </h2>
            <p className="text-xl text-gray-600">
              Quality water for your daily needs - buy new or refill your existing bottles
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {retailServices.map((service, index) => (
              <div key={index} className="bg-gradient-to-br from-sky-50 to-white rounded-2xl shadow-lg p-8">
                <div className="flex items-center mb-6">
                  <div className="bg-gradient-to-r from-sky-100 to-sky-200 p-3 rounded-full mr-4">
                    <ShoppingCart className="h-8 w-8 text-sky-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">{service.category}</h3>
                </div>
                
                <div className="space-y-4">
                  {service.items.map((item, itemIndex) => (
                    <div key={itemIndex} className="bg-white p-6 rounded-xl shadow-md">
                      <div className="flex justify-between items-center">
                        <div>
                          <h4 className="text-lg font-semibold text-gray-900">{item.size}</h4>
                          <p className="text-sm text-gray-600">{item.note}</p>
                        </div>
                        <div className="text-2xl font-bold text-sky-600">{item.price}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Wholesale Packages */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Wholesale Packages
            </h2>
            <p className="text-xl text-gray-600">
              Bulk water solutions for businesses, events, and large orders
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            {/* Wholesale Pricing Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {wholesalePackages.map((pkg, index) => (
                <div key={index} className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-shadow">
                  <div className="text-center">
                    <div className="bg-gradient-to-r from-sky-100 to-sky-200 p-3 rounded-full w-fit mx-auto mb-4">
                      <Package className="h-6 w-6 text-sky-600" />
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">{pkg.product}</h3>
                    <p className="text-gray-600 mb-3">{pkg.quantity}</p>
                    <div className="text-2xl font-bold text-sky-600 mb-4">{pkg.price}</div>
                    <Link
                      to="/contact"
                      className="w-full bg-gradient-to-r from-sky-500 to-sky-600 text-white py-2 px-4 rounded-full font-semibold hover:from-sky-600 hover:to-sky-700 transition-all block text-center text-sm"
                    >
                      Order Now
                    </Link>
                    <a
                      href="https://wa.me/254746808075?text=Hello%20Aqua%20Bliss,%20I%20would%20like%20to%20order%20wholesale%20water"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full bg-green-500 text-white py-2 px-4 rounded-full font-semibold hover:bg-green-600 transition-all text-center text-sm mt-2 flex items-center justify-center space-x-1"
                    >
                      <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.787"/>
                      </svg>
                      <span>WhatsApp</span>
                    </a>
                  </div>
                </div>
              ))}
            </div>

            {/* Wholesale Water Image - Updated with the new uploaded image */}
            <div className="relative">
              <div className="bg-gradient-to-br from-sky-50 to-sky-100 rounded-3xl p-6 shadow-2xl">
                <img 
                  src="/AquaBliss Wholesale Package Image.jpg" 
                  alt="Aqua Bliss wholesale water packages ready for delivery" 
                  className="w-full h-auto object-cover rounded-2xl shadow-lg transform hover:scale-105 transition-transform duration-500"
                />
                <div className="mt-4 text-center">
                  <p className="text-sm text-gray-600 leading-relaxed">
                    Sample Aqua Bliss wholesale water package – ready for delivery.
                  </p>
                </div>
                {/* Floating badge */}
                <div className="absolute -top-4 -right-4 bg-gradient-to-r from-sky-500 to-sky-600 text-white px-4 py-2 rounded-full shadow-xl">
                  <span className="font-bold text-sm">Bulk Ready</span>
                </div>
              </div>
              
              {/* Bulk Order Inquiry Button */}
              <div className="mt-6 text-center">
                <a
                  href="tel:0743970594"
                  className="bg-gradient-to-r from-green-500 to-green-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:from-green-600 hover:to-green-700 transform hover:scale-105 transition-all shadow-xl inline-flex items-center space-x-2"
                >
                  <Package className="h-5 w-5" />
                  <span>Bulk Order Inquiry</span>
                </a>
                <a
                  href="https://wa.me/254743970594?text=Hello%20Aqua%20Bliss,%20I%20would%20like%20to%20inquire%20about%20bulk%20orders"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-green-500 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-green-600 transform hover:scale-105 transition-all shadow-xl inline-flex items-center space-x-2 ml-4"
                >
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.787"/>
                  </svg>
                  <span>WhatsApp Bulk</span>
                </a>
              </div>
            </div>
          </div>

          <div className="text-center">
            <div className="bg-sky-100 p-6 rounded-2xl max-w-2xl mx-auto">
              <p className="text-sky-800 font-medium">
                📞 For wholesale orders, contact our business line: <strong>0743970594 / 0708045934</strong>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Empty Bottles Pricing */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Empty Bottles Pricing
            </h2>
            <p className="text-xl text-gray-600">
              Need replacement bottles? We've got you covered
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {emptyBottles.map((bottle, index) => (
              <div key={index} className="bg-gradient-to-br from-sky-50 to-white rounded-2xl shadow-lg p-8">
                <div className="text-center">
                  <div className="bg-gradient-to-r from-sky-100 to-sky-200 p-4 rounded-full w-fit mx-auto mb-6">
                    <img 
                      src="/AquaBliss Logo Image.jpg" 
                      alt="Aqua Bliss Logo" 
                      className="h-8 w-auto object-contain"
                    />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{bottle.size}</h3>
                  <div className="text-4xl font-bold text-sky-600 mb-6">{bottle.price}</div>
                  <Link
                    to="/contact"
                    className="bg-gradient-to-r from-sky-500 to-sky-600 text-white py-3 px-8 rounded-full font-semibold hover:from-sky-600 hover:to-sky-700 transition-all"
                  >
                    Order Bottle
                  </Link>
                  <a
                    href="https://wa.me/254746808075?text=Hello%20Aqua%20Bliss,%20I%20would%20like%20to%20order%20empty%20bottles"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-green-500 text-white py-3 px-8 rounded-full font-semibold hover:bg-green-600 transition-all mt-3 inline-flex items-center space-x-2"
                  >
                    <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.787"/>
                    </svg>
                    <span>WhatsApp Order</span>
                  </a>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <div className="bg-yellow-50 border border-yellow-200 p-4 rounded-lg max-w-md mx-auto">
              <p className="text-yellow-800 text-sm">
                <strong>Note:</strong> 5 Litre bottles already come included with water purchase
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Custom Water Branding */}
      <section className="py-20 bg-gradient-to-br from-sky-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Custom Water Branding
            </h2>
            <p className="text-xl text-gray-600">
              Make your events memorable with personalized water bottles for birthdays, weddings, graduations & more
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-16">
            {brandingServices.map((service, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg p-8">
                <div className="flex items-center mb-6">
                  <div className="bg-gradient-to-r from-sky-100 to-sky-200 p-4 rounded-full mr-4">
                    <Palette className="h-8 w-8 text-sky-600" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">{service.service}</h3>
                    <p className="text-gray-600">{service.description}</p>
                  </div>
                </div>
                
                <div className="text-center mb-6">
                  <div className="text-4xl font-bold text-sky-600 mb-2">{service.price}</div>
                  <p className="text-gray-600">{service.unit}</p>
                </div>

                <div className="space-y-3 mb-6">
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span className="text-gray-600">Perfect for events</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span className="text-gray-600">High-quality printing</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span className="text-gray-600">500ml or 1L options</span>
                  </div>
                </div>

                <a
                  href="tel:0743970594"
                  className="w-full bg-gradient-to-r from-sky-500 to-sky-600 text-white py-3 px-6 rounded-full font-semibold hover:from-sky-600 hover:to-sky-700 transition-all block text-center"
                >
                  Call for Branding: 0743970594
                </a>
                <Link
                  to="/branding-order"
                  className="w-full bg-gradient-to-r from-purple-500 to-purple-600 text-white py-3 px-6 rounded-full font-semibold hover:from-purple-600 hover:to-purple-700 transition-all block text-center mt-3"
                >
                  Order Branding Online
                </Link>
              </div>
            ))}
          </div>

          {/* Branding Examples Section - Updated with uploaded images */}
          <div className="bg-white rounded-3xl shadow-xl p-8 mb-12">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Branding Work Examples</h3>
              <p className="text-lg text-gray-600">
                See the quality and variety of our custom water bottle branding services
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Aqua Bliss Brand Quality */}
              <div className="relative group">
                <div className="bg-gradient-to-br from-sky-50 to-sky-100 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                  <img 
                    src="/AquaBliss Brand Image.jpg" 
                    alt="Aqua Bliss branded water bottles showcase" 
                    className="w-full h-80 object-cover rounded-xl shadow-md group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="mt-4 text-center">
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">Aqua Bliss Brand Quality</h4>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      Aqua Bliss branded water bottles showcasing our professional quality and branding standards.
                    </p>
                  </div>
                </div>
              </div>

              {/* Custom Event Branding */}
              <div className="relative group">
                <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                  <img 
                    src="/AquaBliss Custom Event Branding Image.jpg" 
                    alt="Custom branded water bottles for special events" 
                    className="w-full h-80 object-cover rounded-xl shadow-md group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="mt-4 text-center">
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">Custom Event Branding</h4>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      Example of personalized water bottles with custom branding for special events and celebrations.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quality Assurance */}
            <div className="mt-8 bg-gradient-to-r from-sky-50 to-purple-50 p-6 rounded-2xl">
              <div className="text-center">
                <h4 className="text-lg font-semibold text-gray-900 mb-3">Professional Branding Quality</h4>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="flex items-center justify-center space-x-2">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span className="text-sm text-gray-700">Waterproof Labels</span>
                  </div>
                  <div className="flex items-center justify-center space-x-2">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span className="text-sm text-gray-700">Vibrant Colors</span>
                  </div>
                  <div className="flex items-center justify-center space-x-2">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span className="text-sm text-gray-700">Durable Printing</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center">
            <div className="bg-purple-50 border border-purple-200 p-6 rounded-2xl max-w-3xl mx-auto">
              <h4 className="font-semibold text-purple-900 mb-2">Perfect for Special Events</h4>
              <p className="text-purple-700">
                Birthdays • Weddings • Graduations • Corporate Events • Baby Showers • Anniversaries
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Payment Methods */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Flexible Payment Options
            </h2>
            <p className="text-xl text-gray-600">
              Choose the payment method that works best for you
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {paymentMethods.map((method, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
                <div className="flex items-center mb-6">
                  <div className="bg-gradient-to-r from-sky-100 to-sky-200 p-4 rounded-full mr-4">
                    <method.icon className="h-8 w-8 text-sky-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">{method.title}</h3>
                </div>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {method.description}
                </p>
                <ul className="space-y-2">
                  {method.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-2">
                      <CheckCircle className="h-5 w-5 text-green-500" />
                      <span className="text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Delivery Information */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Fast & Reliable Delivery
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                We deliver fresh, purified water across Thika and surrounding areas. 
                Our delivery team is trained to provide excellent service and ensure your water arrives in perfect condition.
              </p>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-gradient-to-r from-sky-100 to-sky-200 p-3 rounded-full flex-shrink-0">
                    <Clock className="h-6 w-6 text-sky-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Same-Day Delivery</h3>
                    <p className="text-gray-600">Order before 8:00 PM and receive your water the same day.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-gradient-to-r from-sky-100 to-sky-200 p-3 rounded-full flex-shrink-0">
                    <Truck className="h-6 w-6 text-sky-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Affordable Delivery</h3>
                    <p className="text-gray-600">Competitive delivery rates across Thika and surrounding areas.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-gradient-to-r from-sky-100 to-sky-200 p-3 rounded-full flex-shrink-0">
                    <Shield className="h-6 w-6 text-sky-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Safe Handling</h3>
                    <p className="text-gray-600">Our delivery team follows strict hygiene protocols for safe water handling.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-sky-50 to-white p-8 rounded-2xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Delivery Areas</h3>
              <p className="text-gray-600 mb-6">
                We currently deliver to the following areas in and around Thika:
              </p>
              <div className="grid grid-cols-2 gap-3">
                {deliveryAreas.map((area, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                    <span className="text-sm text-gray-700">{area}</span>
                  </div>
                ))}
              </div>
              <div className="mt-6 p-4 bg-sky-100 rounded-lg">
                <p className="text-sm text-sky-800">
                  <strong>Don't see your area?</strong> Contact us! We're expanding our delivery coverage regularly.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Business Location & Contact with Google Maps */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Visit Us or Get in Touch
            </h2>
            <p className="text-xl text-gray-600">
              Located in the heart of Thika, we're here to serve you
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="bg-gradient-to-br from-sky-50 to-white p-8 rounded-2xl shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-green-100 p-3 rounded-full flex-shrink-0">
                    <Smartphone className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Orders & Deliveries</h4>
                    <p className="text-lg text-gray-700">0746808075</p>
                    <p className="text-sm text-gray-600">Mon-Sun: 6AM-8PM, Sat: CLOSED</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-blue-100 p-3 rounded-full flex-shrink-0">
                    <Smartphone className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Business Line</h4>
                    <p className="text-lg text-gray-700">0743970594 / 0708045934</p>
                    <p className="text-sm text-gray-600">For branding services & wholesale orders</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-purple-100 p-3 rounded-full flex-shrink-0">
                    <Smartphone className="h-6 w-6 text-purple-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Email</h4>
                    <p className="text-lg text-gray-700">aquabliss217@gmail.com</p>
                    <p className="text-sm text-gray-600">We respond within 24 hours</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-white p-8 rounded-2xl shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Our Location</h3>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="bg-green-100 p-3 rounded-full flex-shrink-0">
                    <Truck className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Business Address</h4>
                    <p className="text-gray-700">Alongside Garissa Road</p>
                    <p className="text-gray-700">Oryx Makongeni, Thika</p>
                  </div>
                </div>

                <div className="mt-6 p-4 bg-green-100 rounded-lg">
                  <p className="text-green-800 font-medium text-center">
                    🚗 Easy to find along Garissa Road - look for our Aqua Bliss signage!
                  </p>
                </div>

                <div className="mt-6">
                  <Link
                    to="/contact"
                    className="w-full bg-gradient-to-r from-green-500 to-green-600 text-white py-3 px-6 rounded-full font-semibold hover:from-green-600 hover:to-green-700 transition-all block text-center"
                  >
                    Place Your Order
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Google Maps Embed */}
          <div className="w-full h-[400px] mt-10 rounded-xl overflow-hidden shadow-lg bg-white">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.7234567890123!2d37.0691234567890!3d-1.0345678901234!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f4b123456789a%3A0x123456789abcdef0!2sGarissa%20Road%2C%20Thika%2C%20Kenya!5e0!3m2!1sen!2ske!4v1234567890123!5m2!1sen!2ske"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Aqua Bliss Location - Alongside Garissa Road, Oryx Makongeni, Thika"
            ></iframe>
          </div>
          
          <a
            href="https://www.google.com/maps/place/Garissa+Road,+Thika,+Kenya"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sky-600 underline text-sm block text-center mt-2"
          >
            Open in Google Maps
          </a>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-sky-500 to-sky-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Experience Pure Water?
          </h2>
          <p className="text-xl text-sky-100 mb-8 leading-relaxed">
            From retail to wholesale, custom branding to refilling - we have the perfect water solution for you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-white text-sky-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transform hover:scale-105 transition-all shadow-xl"
            >
              Place Your Order
            </Link>
            <a
              href="https://wa.me/254746808075?text=Hello%20Aqua%20Bliss,%20I%20would%20like%20to%20place%20an%20order"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-green-600 transform hover:scale-105 transition-all duration-300 shadow-xl flex items-center justify-center space-x-2"
            >
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.787"/>
              </svg>
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

export default Services;