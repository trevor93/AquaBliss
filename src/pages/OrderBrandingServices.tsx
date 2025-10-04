import React, { useState } from 'react';
import { Palette, Sparkles, Award, CheckCircle, ArrowRight } from 'lucide-react';
import SEOHead from '../components/SEOHead';

const OrderBrandingServices = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    brandingType: '',
    budget: '',
    timeline: '',
    description: '',
    currentBranding: '',
    targetAudience: '',
    brandValues: '',
    competitors: '',
    designPreferences: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Simulate form submission
      await new Promise(resolve => setTimeout(resolve, 2000));
      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        brandingType: '',
        budget: '',
        timeline: '',
        description: '',
        currentBranding: '',
        targetAudience: '',
        brandValues: '',
        competitors: '',
        designPreferences: ''
      });
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const brandingServices = [
    {
      icon: <Palette className="w-8 h-8 text-blue-600" />,
      title: "Logo Design",
      description: "Custom logo creation that captures your brand essence"
    },
    {
      icon: <Sparkles className="w-8 h-8 text-blue-600" />,
      title: "Brand Identity",
      description: "Complete visual identity system including colors, fonts, and guidelines"
    },
    {
      icon: <Award className="w-8 h-8 text-blue-600" />,
      title: "Brand Strategy",
      description: "Strategic positioning and messaging for your brand"
    }
  ];

  return (
    <>
      <SEOHead
        title="Order Branding Services - Professional Brand Design | AquaBliss"
        description="Order professional branding services from AquaBliss. Get custom logo design, brand identity, and complete visual branding solutions for your business."
        canonicalUrl="https://aquabliss.com/order-branding-services"
        keywords="branding services, logo design, brand identity, AquaBliss"
      />
      
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
        {/* Hero Section */}
        <section className="pt-20 pb-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
                Order Professional
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
                  {' '}Branding Services
                </span>
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Transform your business with our comprehensive branding solutions. From logo design to complete brand identity systems.
              </p>
            </div>

            {/* Services Overview */}
            <div className="grid md:grid-cols-3 gap-8 mb-16">
              {brandingServices.map((service, index) => (
                <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                  <div className="flex items-center mb-4">
                    {service.icon}
                    <h3 className="text-xl font-semibold text-gray-900 ml-3">{service.title}</h3>
                  </div>
                  <p className="text-gray-600">{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Order Form Section */}
        <section className="pb-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Start Your Branding Project</h2>
                <p className="text-gray-600">Fill out the form below and we'll get back to you within 24 hours</p>
              </div>

              {submitStatus === 'success' && (
                <div className="mb-8 p-4 bg-green-50 border border-green-200 rounded-lg flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-600 mr-3" />
                  <span className="text-green-800">Thank you! Your branding request has been submitted successfully.</span>
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="mb-8 p-4 bg-red-50 border border-red-200 rounded-lg">
                  <span className="text-red-800">There was an error submitting your request. Please try again.</span>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Contact Information */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Your phone number"
                    />
                  </div>
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                      Company Name
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Your company name"
                    />
                  </div>
                </div>

                {/* Project Details */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="brandingType" className="block text-sm font-medium text-gray-700 mb-2">
                      Branding Service Type *
                    </label>
                    <select
                      id="brandingType"
                      name="brandingType"
                      value={formData.brandingType}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    >
                      <option value="">Select a service</option>
                      <option value="logo-design">Logo Design Only</option>
                      <option value="brand-identity">Complete Brand Identity</option>
                      <option value="brand-strategy">Brand Strategy & Identity</option>
                      <option value="rebrand">Complete Rebrand</option>
                      <option value="custom">Custom Package</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="budget" className="block text-sm font-medium text-gray-700 mb-2">
                      Budget Range
                    </label>
                    <select
                      id="budget"
                      name="budget"
                      value={formData.budget}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    >
                      <option value="">Select budget range</option>
                      <option value="under-1000">Under $1,000</option>
                      <option value="1000-2500">$1,000 - $2,500</option>
                      <option value="2500-5000">$2,500 - $5,000</option>
                      <option value="5000-10000">$5,000 - $10,000</option>
                      <option value="over-10000">Over $10,000</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="timeline" className="block text-sm font-medium text-gray-700 mb-2">
                    Project Timeline
                  </label>
                  <select
                    id="timeline"
                    name="timeline"
                    value={formData.timeline}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="">Select timeline</option>
                    <option value="asap">ASAP (Rush Job)</option>
                    <option value="1-2-weeks">1-2 weeks</option>
                    <option value="3-4-weeks">3-4 weeks</option>
                    <option value="1-2-months">1-2 months</option>
                    <option value="flexible">Flexible</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-2">
                    Project Description *
                  </label>
                  <textarea
                    id="description"
                    name="description"
                    value={formData.description}
                    onChange={handleInputChange}
                    required
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Describe your branding needs, goals, and vision..."
                  />
                </div>

                {/* Additional Information */}
                <div className="space-y-6">
                  <h3 className="text-xl font-semibold text-gray-900">Additional Information</h3>
                  
                  <div>
                    <label htmlFor="currentBranding" className="block text-sm font-medium text-gray-700 mb-2">
                      Current Branding Status
                    </label>
                    <textarea
                      id="currentBranding"
                      name="currentBranding"
                      value={formData.currentBranding}
                      onChange={handleInputChange}
                      rows={3}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Tell us about your current branding, if any..."
                    />
                  </div>

                  <div>
                    <label htmlFor="targetAudience" className="block text-sm font-medium text-gray-700 mb-2">
                      Target Audience
                    </label>
                    <textarea
                      id="targetAudience"
                      name="targetAudience"
                      value={formData.targetAudience}
                      onChange={handleInputChange}
                      rows={3}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Describe your target audience and customers..."
                    />
                  </div>

                  <div>
                    <label htmlFor="brandValues" className="block text-sm font-medium text-gray-700 mb-2">
                      Brand Values & Personality
                    </label>
                    <textarea
                      id="brandValues"
                      name="brandValues"
                      value={formData.brandValues}
                      onChange={handleInputChange}
                      rows={3}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="What values and personality should your brand convey?"
                    />
                  </div>

                  <div>
                    <label htmlFor="competitors" className="block text-sm font-medium text-gray-700 mb-2">
                      Competitors & Inspiration
                    </label>
                    <textarea
                      id="competitors"
                      name="competitors"
                      value={formData.competitors}
                      onChange={handleInputChange}
                      rows={3}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="List competitors or brands you admire..."
                    />
                  </div>

                  <div>
                    <label htmlFor="designPreferences" className="block text-sm font-medium text-gray-700 mb-2">
                      Design Preferences
                    </label>
                    <textarea
                      id="designPreferences"
                      name="designPreferences"
                      value={formData.designPreferences}
                      onChange={handleInputChange}
                      rows={3}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Any specific design preferences, colors, styles, or requirements..."
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-4 px-8 rounded-lg font-semibold text-lg hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-3"></div>
                      Submitting...
                    </>
                  ) : (
                    <>
                      Submit Branding Request
                      <ArrowRight className="w-5 h-5 ml-2" />
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default OrderBrandingServices;