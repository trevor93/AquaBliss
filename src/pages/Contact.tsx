import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle, Smartphone, Banknote, Truck, Facebook, Twitter, Instagram } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    address: '',
    serviceType: 'retail',
    waterSize: '',
    quantity: '1',
    paymentMethod: 'mpesa',
    needChange: '',
    changeAmount: '',
    message: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    
    // Reset waterSize when service type changes
    if (name === 'serviceType') {
      setFormData({
        ...formData,
        [name]: value,
        waterSize: '' // Reset to empty so user must select
      });
    } else {
      setFormData({
        ...formData,
        [name]: value
      });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Create WhatsApp message with order details
    const serviceOptions = getServiceOptions();
    const selectedService = serviceOptions.find(opt => opt.value === formData.waterSize);
    const serviceName = selectedService ? selectedService.label.split(' - ')[0] : 'Selected item';
    const total = calculateTotal();
    
    let whatsappMessage = `🌊 *AQUA BLISS ORDER* 🌊\n\n`;
    whatsappMessage += `👤 *Customer Details:*\n`;
    whatsappMessage += `Name: ${formData.name}\n`;
    whatsappMessage += `Phone: ${formData.phone}\n`;
    if (formData.email) whatsappMessage += `Email: ${formData.email}\n`;
    whatsappMessage += `\n📍 *Delivery Address:*\n${formData.address}\n\n`;
    
    whatsappMessage += `🛒 *Order Details:*\n`;
    whatsappMessage += `Service: ${formData.serviceType.charAt(0).toUpperCase() + formData.serviceType.slice(1)}\n`;
    whatsappMessage += `Product: ${serviceName}\n`;
    whatsappMessage += `Quantity: ${formData.quantity}\n`;
    whatsappMessage += `Total: KSh ${total}\n\n`;
    
    whatsappMessage += `💳 *Payment Method:* ${formData.paymentMethod === 'mpesa' ? 'M-Pesa' : 'Cash on Delivery'}\n`;
    
    if (formData.paymentMethod === 'cash') {
      if (formData.needChange === 'yes' && formData.changeAmount) {
        whatsappMessage += `💰 *Change needed:* Paying with ${formData.changeAmount}\n`;
      } else if (formData.needChange === 'no') {
        whatsappMessage += `💰 *Change:* Exact amount\n`;
      }
    }
    
    if (formData.message) {
      whatsappMessage += `\n📝 *Additional Notes:*\n${formData.message}\n`;
    }
    
    whatsappMessage += `\n✅ *Please confirm this order and delivery details.*`;
    
    // Encode the message for URL
    const encodedMessage = encodeURIComponent(whatsappMessage);
    const whatsappUrl = `https://wa.me/254746808075?text=${encodedMessage}`;
    
    // Open WhatsApp in new tab
    window.open(whatsappUrl, '_blank');
    
    // Show success message
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
        waterSize: '',
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
          <div className="bg-gradient-to-r from-blue-100 to-cyan-100 p-6 rounded-full w-24 h-24 mx-auto mb-6 flex items-center justify-center">
            <CheckCircle className="h-12 w-12 text-blue-600" />
          </div>
          <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent mb-4">Water Order Received!</h2>
          <p className="text-lg text-blue-700 mb-8 font-medium">
            Thank you for your order. We'll contact you shortly to confirm delivery details.
          </p>
          
          {/* Delivery Car Image Section */}
          <div className="mb-8">
            <h3 className="text-xl font-semibold text-gray-900 mb-6">Your Aqua Bliss order is delivered right to your doorstep — fast and professional.</h3>
            
            <div className="bg-white rounded-2xl shadow-xl p-6 max-w-2xl mx-auto mb-6">
              <img 
                src="/AquaBliss Order Image.jpg" 
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
      <section className="bg-gradient-to-br from-blue-50 via-sky-50 to-cyan-50 py-16 border-b-4 border-blue-400">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-gradient-to-r from-blue-100 to-cyan-100 p-4 rounded-full w-fit mx-auto mb-6">
            <div className="bg-white p-3 rounded-full">
              <img 
                src="/AquaBliss Logo Image.jpg" 
                alt="Aqua Bliss Logo" 
                className="h-12 w-auto object-contain"
              />
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent mb-6">
            Order for Water Services
          </h1>
          <p className="text-xl text-blue-700 max-w-3xl mx-auto leading-relaxed font-medium">
            Fill out the form below to place your order. We'll contact you to confirm delivery details and process your payment.
          </p>
          <div className="mt-8 bg-white/80 backdrop-blur-sm p-4 rounded-2xl shadow-lg max-w-2xl mx-auto border border-blue-200">
            <p className="text-blue-800 font-semibold">
              🌊 Premium Water Delivery Services • Same Day Delivery • M-Pesa & Cash Payments
            </p>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Order Form */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl shadow-xl p-8 border-t-4 border-blue-400">
              <div className="flex items-center space-x-3 mb-6">
                <div className="bg-gradient-to-r from-blue-100 to-cyan-100 p-3 rounded-full">
                  <svg className="h-6 w-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <h2 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">Place Your Water Order</h2>
              </div>
              
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
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
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
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
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
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
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
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-sky-500 transition-colors"
                      >
                        <option value="">Select a product/service</option>
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
                      <input
                        type="number"
                        name="quantity"
                        value={formData.quantity}
                        onChange={handleChange}
                        required
                        min="1"
                        step="1"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-sky-500 transition-colors"
                        placeholder="Enter quantity (e.g., 5, 20, 100)"
                      />
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
                    {formData.waterSize ? (
                      <>
                        <div className="flex justify-between">
                          <span>{formData.quantity}x {getServiceOptions().find(opt => opt.value === formData.waterSize)?.label.split(' - ')[0] || 'Selected item'}</span>
                          <span>KSh {calculateTotal()}</span>
                        </div>
                        <div className="border-t pt-2 flex justify-between font-semibold">
                          <span>Total</span>
                          <span>KSh {calculateTotal()}</span>
                        </div>
                      </>
                    ) : (
                      <div className="text-gray-500 text-center py-4">
                        Please select a product/service to see pricing
                      </div>
                    )}
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={!formData.waterSize}
                  className={`w-full py-4 px-6 rounded-lg font-semibold text-lg transition-all shadow-lg flex items-center justify-center space-x-2 ${
                    formData.waterSize 
                      ? 'bg-gradient-to-r from-blue-500 to-cyan-500 text-white hover:from-blue-600 hover:to-cyan-600 transform hover:scale-105 shadow-blue-200' 
                      : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                  }`}
                >
                  <Send className="h-5 w-5" />
                  <span>
                    {formData.waterSize ? `Place Order - KSh ${calculateTotal()}` : 'Select Product to Continue'}
                  </span>
                </button>
              </form>

              {/* Delivery Trust Section - Added below the order form */}
              <div className="mt-12 pt-8 border-t border-gray-200">
                <div className="text-center">
                  <h3 className="text-xl font-semibold text-gray-900 mb-6">Your Aqua Bliss order is delivered right to your doorstep — fast and professional.</h3>
                  
                  <div className="bg-gradient-to-br from-sky-50 to-white rounded-2xl shadow-lg p-6 mb-6">
                    <img 
                      src="/AquaBliss Order Image.jpg" 
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

            {/* Social Media Section */}
            <div className="bg-gradient-to-br from-sky-50 to-white rounded-2xl shadow-lg p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Connect With Us</h3>
              
              <div className="space-y-4 mb-6">
                <p className="text-gray-600">
                  Follow us on social media for updates, water tips, and special offers!
                </p>
              </div>

              <div className="flex justify-center space-x-4">
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