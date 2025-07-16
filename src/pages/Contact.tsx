import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle, Smartphone, Banknote, Truck } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    address: '',
    serviceType: 'retail',
    waterSize: '20-bottle',
    quantity: '1',
    paymentMethod: 'mpesa',
    needChange: '',
    changeAmount: '',
    message: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, you would send this data to your backend
    console.log('Order submitted:', formData);
    setIsSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        phone: '',
        email: '',
        address: '',
        serviceType: 'retail',
        waterSize: '20-bottle',
        quantity: '1',
        paymentMethod: 'mpesa',
        needChange: '',
        changeAmount: '',
        message: ''
      });
    }, 3000);
  };

  const calculateTotal = () => {
    let basePrice = 0;
    
    if (formData.serviceType === 'retail') {
      const retailPrices: { [key: string]: number } = {
        '5-bottle': 150,
        '10-bottle': 250,
        '20-bottle': 450,
        '5-refill': 50,
        '10-refill': 100,
        '20-refill': 180
      };
      basePrice = retailPrices[formData.waterSize] || 0;
    } else if (formData.serviceType === 'wholesale') {
      const wholesalePrices: { [key: string]: number } = {
        '500ml-carton': 350,
        '1l-carton': 350,
        '10l-carton': 800,
        '20l-carton': 1600
      };
      basePrice = wholesalePrices[formData.waterSize] || 0;
    } else if (formData.serviceType === 'bottles') {
      const bottlePrices: { [key: string]: number } = {
        '10l-bottle': 150,
        '20l-bottle': 250
      };
      basePrice = bottlePrices[formData.waterSize] || 0;
    }
    
    return basePrice * parseInt(formData.quantity);
  };

  const getServiceOptions = () => {
    switch (formData.serviceType) {
      case 'retail':
        return [
          { value: '5-bottle', label: '5 Litres with Bottle - KSh 150' },
          { value: '10-bottle', label: '10 Litres with Bottle - KSh 250' },
          { value: '20-bottle', label: '20 Litres with Bottle - KSh 450' },
          { value: '5-refill', label: '5 Litres Refill - KSh 50' },
          { value: '10-refill', label: '10 Litres Refill - KSh 100' },
          { value: '20-refill', label: '20 Litres Refill - KSh 180' }
        ];
      case 'wholesale':
        return [
          { value: '500ml-carton', label: '500ml Carton (24 pcs) - KSh 350' },
          { value: '1l-carton', label: '1L Carton (12 pcs) - KSh 350' },
          { value: '10l-carton', label: '10L Carton (4 pcs) - KSh 800' },
          { value: '20l-carton', label: '20L Carton (4 pcs) - KSh 1,600' }
        ];
      case 'bottles':
        return [
          { value: '10l-bottle', label: '10 Litre Empty Bottle - KSh 150' },
          { value: '20l-bottle', label: '20 Litre Empty Bottle - KSh 250' }
        ];
      default:
        return [];
    }
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-sky-50 to-white flex items-center justify-center py-20">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-green-100 p-6 rounded-full w-24 h-24 mx-auto mb-6 flex items-center justify-center">
            <CheckCircle className="h-12 w-12 text-green-600" />
          </div>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Order Received!</h2>
          <p className="text-lg text-gray-600 mb-8">
            Thank you for your order. We'll contact you shortly to confirm delivery details.
          </p>
          
          {/* Delivery Car Image Section */}
          <div className="mb-8">
            <h3 className="text-xl font-semibold text-gray-900 mb-6">Your Aqua Bliss order is delivered right to your doorstep — fast and professional.</h3>
            
            <div className="bg-white rounded-2xl shadow-xl p-6 max-w-2xl mx-auto mb-6">
              <img 
                src="/WhatsApp Image 2025-07-06 at 23.07.20_a116d8b8 copy.jpg" 
                alt="Aqua Bliss branded delivery car with professional service" 
                className="w-full h-auto object-cover rounded-xl shadow-lg"
              />
            </div>
            
            <div className="bg-sky-50 border border-sky-200 p-6 rounded-2xl max-w-2xl mx-auto">
              <div className="flex items-center justify-center space-x-3 mb-3">
                <Truck className="h-6 w-6 text-sky-600" />
                <h4 className="text-lg font-semibold text-sky-900">Professional Delivery Service</h4>
              </div>
              <p className="text-sky-800">
                Our branded delivery vehicles ensure your water arrives safely and on time. 
                Trust Aqua Bliss for reliable, professional service across Thika.
              </p>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg max-w-md mx-auto">
            <p className="text-sm text-gray-600 mb-2">Expected delivery time:</p>
            <p className="text-xl font-semibold text-sky-600">Same day (if ordered before 8PM)</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="py-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-sky-50 to-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Order Your Water Now
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Fill out the form below to place your order. We'll contact you to confirm delivery details and process your payment.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Order Form */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Place Your Order</h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Personal Information */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-sky-500 transition-colors"
                      placeholder="Enter your full name"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-sky-500 transition-colors"
                      placeholder="0746808075"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-sky-500 transition-colors"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Delivery Address *
                  </label>
                  <textarea
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    required
                    rows={3}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-sky-500 transition-colors"
                    placeholder="Enter your complete delivery address including landmarks"
                  />
                </div>

                {/* Service Type Selection */}
                <div className="border-t pt-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Service Type</h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <label className="flex items-center p-4 border border-gray-300 rounded-lg cursor-pointer hover:bg-gray-50 transition-colors">
                      <input
                        type="radio"
                        name="serviceType"
                        value="retail"
                        checked={formData.serviceType === 'retail'}
                        onChange={handleChange}
                        className="mr-3 text-sky-600"
                      />
                      <div>
                        <div className="font-medium">Retail Water</div>
                        <div className="text-sm text-gray-600">Individual bottles</div>
                      </div>
                    </label>

                    <label className="flex items-center p-4 border border-gray-300 rounded-lg cursor-pointer hover:bg-gray-50 transition-colors">
                      <input
                        type="radio"
                        name="serviceType"
                        value="wholesale"
                        checked={formData.serviceType === 'wholesale'}
                        onChange={handleChange}
                        className="mr-3 text-sky-600"
                      />
                      <div>
                        <div className="font-medium">Wholesale</div>
                        <div className="text-sm text-gray-600">Carton packages</div>
                      </div>
                    </label>

                    <label className="flex items-center p-4 border border-gray-300 rounded-lg cursor-pointer hover:bg-gray-50 transition-colors">
                      <input
                        type="radio"
                        name="serviceType"
                        value="bottles"
                        checked={formData.serviceType === 'bottles'}
                        onChange={handleChange}
                        className="mr-3 text-sky-600"
                      />
                      <div>
                        <div className="font-medium">Empty Bottles</div>
                        <div className="text-sm text-gray-600">Replacement bottles</div>
                      </div>
                    </label>
                  </div>
                </div>

                {/* Order Details */}
                <div className="border-t pt-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Order Details</h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Product/Service *
                      </label>
                      <select
                        name="waterSize"
                        value={formData.waterSize}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-sky-500 transition-colors"
                      >
                        {getServiceOptions().map((option) => (
                          <option key={option.value} value={option.value}>
                            {option.label}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Quantity *
                      </label>
                      <select
                        name="quantity"
                        value={formData.quantity}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-sky-500 transition-colors"
                      >
                        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(num => (
                          <option key={num} value={num}>{num}</option>
                        ))}
                      </select>
                    </div>
                  </div>
                </div>

                {/* Payment Method */}
                <div className="border-t pt-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Payment Method</h3>
                  
                  <div className="space-y-3">
                    <label className="flex items-center p-4 border border-gray-300 rounded-lg cursor-pointer hover:bg-gray-50 transition-colors">
                      <input
                        type="radio"
                        name="paymentMethod"
                        value="mpesa"
                        checked={formData.paymentMethod === 'mpesa'}
                        onChange={handleChange}
                        className="mr-3 text-sky-600"
                      />
                      <Smartphone className="h-5 w-5 text-sky-600 mr-3" />
                      <div>
                        <div className="font-medium">M-Pesa Payment</div>
                        <div className="text-sm text-gray-600">Pay instantly via M-Pesa</div>
                      </div>
                    </label>

                    <label className="flex items-center p-4 border border-gray-300 rounded-lg cursor-pointer hover:bg-gray-50 transition-colors">
                      <input
                        type="radio"
                        name="paymentMethod"
                        value="cash"
                        checked={formData.paymentMethod === 'cash'}
                        onChange={handleChange}
                        className="mr-3 text-sky-600"
                      />
                      <Banknote className="h-5 w-5 text-sky-600 mr-3" />
                      <div>
                        <div className="font-medium">Cash on Delivery</div>
                        <div className="text-sm text-gray-600">Pay when you receive your water</div>
                      </div>
                    </label>
                  </div>

                  {/* Change Requirements for Cash Payment */}
                  {formData.paymentMethod === 'cash' && (
                    <div className="mt-6 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
                      <h4 className="font-medium text-yellow-900 mb-3">Change Requirements</h4>
                      <div className="space-y-3">
                        <div>
                          <label className="block text-sm font-medium text-yellow-800 mb-2">
                            Do you need change?
                          </label>
                          <select
                            name="needChange"
                            value={formData.needChange}
                            onChange={handleChange}
                            className="w-full px-3 py-2 border border-yellow-300 rounded-md focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500"
                          >
                            <option value="">Select an option</option>
                            <option value="no">No, I have exact amount</option>
                            <option value="yes">Yes, I need change</option>
                          </select>
                        </div>
                        
                        {formData.needChange === 'yes' && (
                          <div>
                            <label className="block text-sm font-medium text-yellow-800 mb-2">
                              Amount you'll pay with (e.g., KSh 1,000)
                            </label>
                            <input
                              type="text"
                              name="changeAmount"
                              value={formData.changeAmount}
                              onChange={handleChange}
                              className="w-full px-3 py-2 border border-yellow-300 rounded-md focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500"
                              placeholder="e.g., KSh 1,000"
                            />
                            <p className="text-xs text-yellow-700 mt-1">
                              This helps our delivery team prepare the correct change in advance
                            </p>
                          </div>
                        )}
                      </div>
                    </div>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Additional Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={3}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-sky-500 transition-colors"
                    placeholder="Any special instructions or notes for delivery"
                  />
                </div>

                {/* Order Summary */}
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-3">Order Summary</h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span>{formData.quantity}x {getServiceOptions().find(opt => opt.value === formData.waterSize)?.label.split(' - ')[0] || 'Selected item'}</span>
                      <span>KSh {calculateTotal()}</span>
                    </div>
                    <div className="border-t pt-2 flex justify-between font-semibold">
                      <span>Total</span>
                      <span>KSh {calculateTotal()}</span>
                    </div>
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-sky-500 to-sky-600 text-white py-4 px-6 rounded-lg font-semibold text-lg hover:from-sky-600 hover:to-sky-700 transform hover:scale-105 transition-all shadow-lg flex items-center justify-center space-x-2"
                >
                  <Send className="h-5 w-5" />
                  <span>Place Order - KSh {calculateTotal()}</span>
                </button>
              </form>

              {/* Delivery Trust Section - Added below the order form */}
              <div className="mt-12 pt-8 border-t border-gray-200">
                <div className="text-center">
                  <h3 className="text-xl font-semibold text-gray-900 mb-6">Your Aqua Bliss order is delivered right to your doorstep — fast and professional.</h3>
                  
                  <div className="bg-gradient-to-br from-sky-50 to-white rounded-2xl shadow-lg p-6 mb-6">
                    <img 
                      src="/WhatsApp Image 2025-07-06 at 23.07.20_a116d8b8 copy.jpg" 
                      alt="Aqua Bliss branded delivery car with professional service" 
                      className="w-full h-auto object-cover rounded-xl shadow-lg"
                    />
                  </div>
                  
                  <div className="bg-sky-50 border border-sky-200 p-6 rounded-2xl">
                    <div className="flex items-center justify-center space-x-3 mb-3">
                      <Truck className="h-6 w-6 text-sky-600" />
                      <h4 className="text-lg font-semibold text-sky-900">Professional Delivery Service</h4>
                    </div>
                    <p className="text-sky-800">
                      Our branded delivery vehicles ensure your water arrives safely and on time. 
                      Trust Aqua Bliss for reliable, professional service across Thika.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            {/* Contact Details */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Contact Information</h3>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Phone className="h-5 w-5 text-green-600 mt-1" />
                  <div>
                    <div className="font-medium text-gray-900">Orders & Deliveries</div>
                    <div className="text-gray-600">0746808075</div>
                    <div className="text-sm text-gray-500">Mon-Sun: 6AM-8PM, Sat: CLOSED</div>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <Phone className="h-5 w-5 text-blue-600 mt-1" />
                  <div>
                    <div className="font-medium text-gray-900">Business Line</div>
                    <div className="text-gray-600">0743970594 / 0708045934</div>
                    <div className="text-sm text-gray-500">Branding & wholesale services</div>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <Mail className="h-5 w-5 text-sky-600 mt-1" />
                  <div>
                    <div className="font-medium text-gray-900">Email</div>
                    <div className="text-gray-600">aquabliss217@gmail.com</div>
                    <div className="text-sm text-gray-500">We respond within 24 hours</div>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <MapPin className="h-5 w-5 text-sky-600 mt-1" />
                  <div>
                    <div className="font-medium text-gray-900">Location</div>
                    <div className="text-gray-600">Alongside Garissa Road</div>
                    <div className="text-gray-600">Oryx Makongeni, Thika</div>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <Clock className="h-5 w-5 text-sky-600 mt-1" />
                  <div>
                    <div className="font-medium text-gray-900">Delivery Time</div>
                    <div className="text-gray-600">Same day delivery</div>
                    <div className="text-sm text-gray-500">Order before 8PM</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Why Choose Us */}
            <div className="bg-gradient-to-br from-sky-50 to-white rounded-2xl p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Why Choose Aqua Bliss?</h3>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span className="text-gray-700">100% Pure & Filtered Water</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span className="text-gray-700">Same-Day Delivery</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span className="text-gray-700">Affordable Pricing</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span className="text-gray-700">Flexible Payment Options</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span className="text-gray-700">Custom Branding Services</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span className="text-gray-700">Wholesale Packages</span>
                </div>
              </div>

              <div className="mt-6 p-4 bg-sky-100 rounded-lg">
                <p className="text-sm text-sky-800 font-medium">
                  🚚 Serving Thika and surrounding areas with reliable water delivery!
                </p>
              </div>
            </div>

            {/* Emergency Contact */}
            <div className="bg-red-50 border border-red-200 rounded-2xl p-6">
              <h4 className="font-semibold text-red-900 mb-2">Need Water Urgently?</h4>
              <p className="text-sm text-red-700 mb-3">
                Call us directly for same-day emergency delivery
              </p>
              <a
                href="tel:0746808075"
                className="bg-red-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-red-700 transition-colors inline-block"
              >
                Call Now: 0746808075
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;