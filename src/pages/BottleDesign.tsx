import { Link } from 'react-router-dom';
import SEOHead from '../components/SEOHead';
import { Palette, Star, CheckCircle, Phone } from 'lucide-react';

const BottleDesign = () => {
  const bottleDesigns = [
    {
      id: 1,
      image: '/AquaBliss Bottle Design 1.jpg',
      title: 'Classic AquaBliss Design',
      type: 'AquaBliss Branded',
      description: 'Our signature blue and white design with premium branding'
    },
    {
      id: 2,
      image: '/AquaBliss Bottle Design 2.jpg',
      title: 'Premium AquaBliss Label',
      type: 'AquaBliss Branded',
      description: 'Professional labeling with clear brand identity'
    },
    {
      id: 3,
      image: '/AquaBliss Bottle Design 3.jpg',
      title: 'Custom Event Design',
      type: 'Custom Branded',
      description: 'Personalized design for special occasions and events'
    },
    {
      id: 4,
      image: '/AquaBliss Bottle Design 4.jpg',
      title: 'Corporate Branding',
      type: 'Custom Branded',
      description: 'Professional custom branding for business events'
    },
    {
      id: 5,
      image: '/AquaBliss Bottle Design 5.jpg',
      title: 'Celebration Design',
      type: 'Custom Branded',
      description: 'Festive custom design perfect for celebrations'
    },
    {
      id: 6,
      image: '/AquaBliss Bottle Design 6.jpg',
      title: 'Elegant Custom Label',
      type: 'Custom Branded',
      description: 'Sophisticated custom design with elegant styling'
    },
    {
      id: 7,
      image: '/AquaBliss Bottle Design 7.jpg',
      title: 'Premium Custom Design',
      type: 'Custom Branded',
      description: 'High-end custom branding with sophisticated appeal'
    }
  ];

  const brandedBottles = bottleDesigns.filter(design => design.type === 'AquaBliss Branded');
  const customBottles = bottleDesigns.filter(design => design.type === 'Custom Branded');

  return (
    <div className="py-20">
      <SEOHead
        title="Custom Water Bottle Design & Branding Services Thika | Aqua Bliss"
        description="Professional water bottle design and branding in Thika. Custom designs for weddings, birthdays, corporate events. From KSh 350 per carton. Waterproof labels, vibrant colors."
        keywords="custom water bottle design Thika, water bottle branding Kenya, wedding water bottles, corporate water branding, event water bottles, custom labels Thika, personalized water bottles Kenya"
        ogTitle="Custom Water Bottle Design & Branding - Aqua Bliss"
        ogDescription="Professional custom water bottle designs for events and businesses in Thika. High-quality printing, waterproof labels, competitive pricing."
        ogImage="/AquaBliss Bottle Design 1.jpg"
        canonicalUrl="https://aquabliss.co.ke/bottle-design"
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
            AquaBliss Bottle Design
          </h1>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-8">
            Discover our premium bottle designs that combine functionality with aesthetic appeal. 
            We offer two distinct types of bottle designs to meet all your water needs.
          </p>
          
          {/* Design Types Overview */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white p-6 rounded-2xl shadow-lg border border-sky-100">
              <div className="bg-gradient-to-r from-sky-100 to-sky-200 p-4 rounded-full w-fit mx-auto mb-4">
                <Star className="h-8 w-8 text-sky-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">AquaBliss Branded Bottles</h3>
              <p className="text-gray-600 leading-relaxed">
                Our signature branded bottles featuring the iconic AquaBliss design. 
                Professional, clean, and instantly recognizable quality.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-2xl shadow-lg border border-purple-100">
              <div className="bg-gradient-to-r from-purple-100 to-purple-200 p-4 rounded-full w-fit mx-auto mb-4">
                <Palette className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Custom Branded Bottles</h3>
              <p className="text-gray-600 leading-relaxed">
                Personalized bottle designs for your special events, celebrations, 
                and corporate functions. Make every occasion memorable.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* AquaBliss Branded Bottles Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center space-x-3 mb-4">
              <Star className="h-8 w-8 text-sky-600" />
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                AquaBliss Branded Bottles
              </h2>
            </div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our signature designs that represent the quality and purity of AquaBliss water
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-12">
            {brandedBottles.map((design) => (
              <div key={design.id} className="group bg-gradient-to-br from-sky-50 to-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
                <div className="bg-white p-6">
                  <img
                    src={design.image}
                    alt={design.title}
                    className="w-full h-80 object-cover rounded-xl shadow-md group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center space-x-2 mb-2">
                    <span className="bg-sky-100 text-sky-800 text-xs font-semibold px-3 py-1 rounded-full">
                      {design.type}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{design.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{design.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-sky-50 border border-sky-200 p-6 rounded-2xl text-center">
            <h4 className="text-lg font-semibold text-sky-900 mb-2">Available in All Sizes</h4>
            <p className="text-sky-800 mb-4">
              Our AquaBliss branded bottles are available in 5L, 10L, and 20L sizes
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-4 w-4 text-green-500" />
                <span className="text-gray-700">5L - KSh 150 (with bottle)</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-4 w-4 text-green-500" />
                <span className="text-gray-700">10L - KSh 250 (with bottle)</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-4 w-4 text-green-500" />
                <span className="text-gray-700">20L - KSh 450 (with bottle)</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Custom Branded Bottles Section */}
      <section className="py-20 bg-gradient-to-br from-purple-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center space-x-3 mb-4">
              <Palette className="h-8 w-8 text-purple-600" />
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                Custom Branded Bottles
              </h2>
            </div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Personalized designs that make your events unforgettable and your brand stand out
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {customBottles.map((design) => (
              <div key={design.id} className="group bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
                <div className="aspect-w-4 aspect-h-5 bg-gradient-to-br from-purple-50 to-white p-6">
                  <img
                    src={design.image}
                    alt={design.title}
                    className="w-full h-80 object-cover rounded-xl shadow-md group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center space-x-2 mb-2">
                    <span className="bg-purple-100 text-purple-800 text-xs font-semibold px-3 py-1 rounded-full">
                      {design.type}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{design.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{design.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-white border border-purple-200 p-8 rounded-2xl shadow-lg">
            <div className="text-center mb-6">
              <h4 className="text-2xl font-bold text-gray-900 mb-4">Custom Branding Services</h4>
              <p className="text-lg text-gray-600 mb-6">
                Perfect for weddings, birthdays, corporate events, graduations, and special celebrations
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-gradient-to-br from-purple-50 to-white p-6 rounded-xl">
                <h5 className="text-xl font-bold text-gray-900 mb-3">Branding + Design Service</h5>
                <div className="text-3xl font-bold text-purple-600 mb-3">KSh 480</div>
                <p className="text-gray-600 mb-4">per carton (500ml or 1L)</p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span>Complete design service</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span>Professional graphic design</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span>High-quality printing</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-sky-50 to-white p-6 rounded-xl">
                <h5 className="text-xl font-bold text-gray-900 mb-3">Branding Service Only</h5>
                <div className="text-3xl font-bold text-sky-600 mb-3">KSh 350</div>
                <p className="text-gray-600 mb-4">per carton (500ml or 1L)</p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span>Using your existing design</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span>Professional printing</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span>Waterproof labels</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="mt-8 text-center">
              <div className="bg-gradient-to-r from-purple-100 to-sky-100 p-4 rounded-xl mb-6">
                <p className="text-gray-800 font-medium">
                  🎉 Perfect for: Weddings • Birthdays • Corporate Events • Graduations • Baby Showers • Anniversaries
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="tel:0743970594"
                  className="bg-gradient-to-r from-purple-500 to-purple-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:from-purple-600 hover:to-purple-700 transform hover:scale-105 transition-all shadow-xl flex items-center justify-center space-x-2"
                >
                  <Phone className="h-5 w-5" />
                  <span>Call for Custom Branding: 0743970594</span>
                </a>
                <Link
                  to="/branding-order"
                  className="bg-gradient-to-r from-sky-500 to-sky-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:from-sky-600 hover:to-sky-700 transform hover:scale-105 transition-all shadow-xl flex items-center justify-center space-x-2"
                >
                  <Palette className="h-5 w-5" />
                  <span>Order Branding Online</span>
                </Link>
                <a
                  href="https://wa.me/254743970594?text=Hello%20Aqua%20Bliss,%20I%20would%20like%20to%20inquire%20about%20custom%20bottle%20branding"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-green-500 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-green-600 transform hover:scale-105 transition-all shadow-xl flex items-center justify-center space-x-2"
                >
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.787"/>
                  </svg>
                  <span>WhatsApp Custom Orders</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quality Assurance Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Quality You Can Trust
            </h2>
            <p className="text-xl text-gray-600">
              Every bottle design meets our high standards for quality and durability
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-gradient-to-r from-sky-100 to-sky-200 p-4 rounded-full w-fit mx-auto mb-4">
                <CheckCircle className="h-8 w-8 text-sky-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Waterproof Labels</h3>
              <p className="text-gray-600 text-sm">Durable, water-resistant labels that maintain their quality</p>
            </div>

            <div className="text-center">
              <div className="bg-gradient-to-r from-green-100 to-green-200 p-4 rounded-full w-fit mx-auto mb-4">
                <CheckCircle className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Vibrant Colors</h3>
              <p className="text-gray-600 text-sm">High-quality printing with bright, lasting colors</p>
            </div>

            <div className="text-center">
              <div className="bg-gradient-to-r from-purple-100 to-purple-200 p-4 rounded-full w-fit mx-auto mb-4">
                <CheckCircle className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">BPA-Free Bottles</h3>
              <p className="text-gray-600 text-sm">Safe, food-grade bottles for your health and peace of mind</p>
            </div>

            <div className="text-center">
              <div className="bg-gradient-to-r from-yellow-100 to-yellow-200 p-4 rounded-full w-fit mx-auto mb-4">
                <CheckCircle className="h-8 w-8 text-yellow-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Eco-Friendly</h3>
              <p className="text-gray-600 text-sm">Environmentally conscious materials and processes</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-sky-500 to-purple-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Order Your Perfect Bottle Design?
          </h2>
          <p className="text-xl text-sky-100 mb-8 leading-relaxed">
            Whether you need our signature AquaBliss bottles or custom designs for your special event, 
            we're here to deliver quality that exceeds your expectations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-white text-sky-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transform hover:scale-105 transition-all shadow-xl"
            >
              Place Your Order
            </Link>
            <Link
              to="/services"
              className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-sky-600 transition-colors"
            >
              View All Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BottleDesign;