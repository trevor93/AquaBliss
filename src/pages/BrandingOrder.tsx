import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Clock, Upload, User, Phone, Mail, MessageSquare, CheckCircle, Palette, Star, Image as ImageIcon } from 'lucide-react';

const BrandingOrder = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    company: '',
    eventType: '',
    brandingService: 'design-and-branding',
    quantity: '1',
    completionDate: '',
    completionTime: '',
    description: '',
    designFile: null as File | null
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [dragActive, setDragActive] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setFormData({
        ...formData,
        designFile: file
      });
    }
  };

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      const file = e.dataTransfer.files[0];
      setFormData({
        ...formData,
        designFile: file
      });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Create WhatsApp message with branding order details
    let whatsappMessage = `🎨 *AQUA BLISS BRANDING ORDER* 🎨\n\n`;
    whatsappMessage += `👤 *Client Details:*\n`;
    whatsappMessage += `Name: ${formData.name}\n`;
    whatsappMessage += `Phone: ${formData.phone}\n`;
    if (formData.email) whatsappMessage += `Email: ${formData.email}\n`;
    if (formData.company) whatsappMessage += `Company: ${formData.company}\n`;
    
    whatsappMessage += `\n🎯 *Branding Details:*\n`;
    whatsappMessage += `Service: ${formData.brandingService === 'design-and-branding' ? 'Design + Branding Service (KSh 480/carton)' : 'Branding Only (KSh 350/carton)'}\n`;
    whatsappMessage += `Quantity: ${formData.quantity} carton(s)\n`;
    if (formData.eventType) whatsappMessage += `Event Type: ${formData.eventType}\n`;
    
    whatsappMessage += `\n📅 *Timeline:*\n`;
    whatsappMessage += `Completion Date: ${formData.completionDate}\n`;
    whatsappMessage += `Preferred Time: ${formData.completionTime}\n`;
    
    if (formData.description) {
      whatsappMessage += `\n📝 *Project Description:*\n${formData.description}\n`;
    }
    
    if (formData.designFile) {
      whatsappMessage += `\n📎 *Design Reference:* ${formData.designFile.name} (will be shared separately)\n`;
    }
    
    whatsappMessage += `\n✅ *Please confirm this branding order and timeline.*`;
    
    // Encode the message for URL
    const encodedMessage = encodeURIComponent(whatsappMessage);
    const whatsappUrl = `https://wa.me/254743970594?text=${encodedMessage}`;
    
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
        company: '',
        eventType: '',
        brandingService: 'design-and-branding',
        quantity: '1',
        completionDate: '',
        completionTime: '',
        description: '',
        designFile: null
      });
    }, 3000);
  };

  const calculateTotal = () => {
    const basePrice = formData.brandingService === 'design-and-branding' ? 480 : 350;
    return basePrice * parseInt(formData.quantity);
  };

  const eventTypes = [
    'Wedding', 'Birthday Party', 'Corporate Event', 'Graduation', 'Baby Shower', 
    'Anniversary', 'Conference', 'Product Launch', 'Fundraiser', 'Other'
  ];

  const timeSlots = [
    '9:00 AM', '10:00 AM', '11:00 AM', '12:00 PM', '1:00 PM', '2:00 PM', 
    '3:00 PM', '4:00 PM', '5:00 PM', '6:00 PM'
  ];

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-50 to-sky-50 flex items-center justify-center py-20">
        <div className="max-w-4xl mx-auto text-center px-4">
          <div className="bg-gradient-to-r from-blue-100 to-cyan-100 p-6 rounded-full w-24 h-24 mx-auto mb-6 flex items-center justify-center">
            <CheckCircle className="h-12 w-12 text-blue-600" />
          </div>
          <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent mb-4">Branding Order Received!</h2>
          <p className="text-lg text-blue-700 mb-8 font-medium">
            Thank you for your branding order. Our design team will contact you shortly to discuss your project details and timeline.
          </p>
          
          <div className="bg-white rounded-2xl shadow-xl p-8 max-w-2xl mx-auto mb-8">
            <div className="flex items-center justify-center space-x-3 mb-6">
              <Palette className="h-8 w-8 text-purple-600" />
              <h3 className="text-2xl font-semibold text-gray-900">What Happens Next?</h3>
            </div>
            
            <div className="space-y-4 text-left">
              <div className="flex items-start space-x-3">
                <div className="bg-purple-100 text-purple-600 rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold flex-shrink-0 mt-1">1</div>
                <div>
                  <h4 className="font-semibold text-gray-900">Design Consultation</h4>
                  <p className="text-gray-600 text-sm">Our team will review your requirements and design reference</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="bg-purple-100 text-purple-600 rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold flex-shrink-0 mt-1">2</div>
                <div>
                  <h4 className="font-semibold text-gray-900">Design Creation</h4>
                  <p className="text-gray-600 text-sm">We'll create your custom design and send it for approval</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="bg-purple-100 text-purple-600 rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold flex-shrink-0 mt-1">3</div>
                <div>
                  <h4 className="font-semibold text-gray-900">Production & Delivery</h4>
                  <p className="text-gray-600 text-sm">Once approved, we'll print and deliver by your requested date</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg max-w-md mx-auto">
            <p className="text-sm text-gray-600 mb-2">Expected contact time:</p>
            <p className="text-xl font-semibold text-purple-600">Within 2-4 hours</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="py-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 via-cyan-50 to-purple-50 py-16 border-b-4 border-blue-400">
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
            Order for Branding Services
          </h1>
          <p className="text-xl text-blue-700 max-w-3xl mx-auto leading-relaxed mb-8 font-medium">
            Transform your event with custom-branded water bottles. From weddings to corporate events, 
            we create personalized designs that make your occasion unforgettable.
          </p>
          <div className="bg-white/80 backdrop-blur-sm p-4 rounded-2xl shadow-lg max-w-2xl mx-auto border border-blue-200 mb-8">
            <p className="text-blue-800 font-semibold">
              🎨 Custom Branding Services • Professional Design • Waterproof Labels • Event Ready
            </p>
          </div>
          
          {/* Service Options Preview */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <div className="bg-white p-6 rounded-2xl shadow-lg border border-purple-100">
              <div className="bg-gradient-to-r from-purple-100 to-purple-200 p-3 rounded-full w-fit mx-auto mb-4">
                <Star className="h-6 w-6 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Design + Branding Service</h3>
              <div className="text-2xl font-bold text-purple-600 mb-2">KSh 480</div>
              <p className="text-gray-600 text-sm">per carton (500ml or 1L)</p>
              <p className="text-gray-600 text-sm mt-2">Complete design creation and professional printing</p>
            </div>
            
            <div className="bg-white p-6 rounded-2xl shadow-lg border border-sky-100">
              <div className="bg-gradient-to-r from-sky-100 to-sky-200 p-3 rounded-full w-fit mx-auto mb-4">
                <Palette className="h-6 w-6 text-sky-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Branding Service Only</h3>
              <div className="text-2xl font-bold text-sky-600 mb-2">KSh 350</div>
              <p className="text-gray-600 text-sm">per carton (500ml or 1L)</p>
              <p className="text-gray-600 text-sm mt-2">Using your existing design with professional printing</p>
            </div>
          </div>
        </div>
      </section>

      {/* Order Form Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12">
            <div className="text-center mb-12">
              <div className="flex items-center justify-center space-x-3 mb-6">
                <div className="bg-gradient-to-r from-blue-100 to-cyan-100 p-3 rounded-full">
                  <Palette className="h-8 w-8 text-blue-600" />
                </div>
                <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">Place Your Branding Order</h2>
              </div>
              <p className="text-lg text-blue-700 font-medium">
                Fill out the details below and we'll create the perfect branded water bottles for your event
              </p>
            </div>
            
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Personal Information */}
              <div className="bg-gray-50 p-6 rounded-2xl">
                <h3 className="text-xl font-semibold text-gray-900 mb-6 flex items-center">
                  <User className="h-6 w-6 text-purple-600 mr-3" />
                  Contact Information
                </h3>
                
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
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-colors"
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
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-colors"
                      placeholder="0743970594"
                    />
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
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-colors"
                      placeholder="your.email@example.com"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Company/Organization
                    </label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-colors"
                      placeholder="Company name (optional)"
                    />
                  </div>
                </div>
              </div>

              {/* Service Selection */}
              <div className="bg-purple-50 p-6 rounded-2xl">
                <h3 className="text-xl font-semibold text-gray-900 mb-6 flex items-center">
                  <Palette className="h-6 w-6 text-purple-600 mr-3" />
                  Branding Service Details
                </h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Service Type *
                    </label>
                    <select
                      name="brandingService"
                      value={formData.brandingService}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-colors"
                    >
                      <option value="design-and-branding">Design + Branding Service - KSh 480/carton</option>
                      <option value="branding-only">Branding Service Only - KSh 350/carton</option>
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Quantity (Cartons) *
                    </label>
                    <input
                      type="number"
                      name="quantity"
                      value={formData.quantity}
                      onChange={handleChange}
                      required
                      min="1"
                      step="1"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-colors"
                      placeholder="Number of cartons needed"
                    />
                  </div>
                  
                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Event Type
                    </label>
                    <select
                      name="eventType"
                      value={formData.eventType}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-colors"
                    >
                      <option value="">Select event type (optional)</option>
                      {eventTypes.map((type) => (
                        <option key={type} value={type}>{type}</option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>

              {/* Timeline Selection */}
              <div className="bg-sky-50 p-6 rounded-2xl">
                <h3 className="text-xl font-semibold text-gray-900 mb-6 flex items-center">
                  <Calendar className="h-6 w-6 text-sky-600 mr-3" />
                  Completion Timeline
                </h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Completion Date *
                    </label>
                    <input
                      type="date"
                      name="completionDate"
                      value={formData.completionDate}
                      onChange={handleChange}
                      required
                      min={new Date().toISOString().split('T')[0]}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-sky-500 transition-colors"
                    />
                    <p className="text-xs text-gray-500 mt-1">When do you need the branding service completed?</p>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Preferred Time *
                    </label>
                    <select
                      name="completionTime"
                      value={formData.completionTime}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-sky-500 transition-colors"
                    >
                      <option value="">Select preferred time</option>
                      {timeSlots.map((time) => (
                        <option key={time} value={time}>{time}</option>
                      ))}
                    </select>
                    <p className="text-xs text-gray-500 mt-1">Preferred completion/delivery time</p>
                  </div>
                </div>
                
                <div className="mt-4 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
                  <p className="text-yellow-800 text-sm">
                    <strong>Note:</strong> Please allow at least 3-5 business days for design creation and printing. 
                    Rush orders may incur additional charges.
                  </p>
                </div>
              </div>

              {/* Design Upload */}
              <div className="bg-gradient-to-br from-purple-50 to-sky-50 p-6 rounded-2xl">
                <h3 className="text-xl font-semibold text-gray-900 mb-6 flex items-center">
                  <ImageIcon className="h-6 w-6 text-purple-600 mr-3" />
                  Design Reference Upload
                </h3>
                
                <div
                  className={`border-2 border-dashed rounded-xl p-8 text-center transition-colors ${
                    dragActive 
                      ? 'border-purple-500 bg-purple-50' 
                      : 'border-gray-300 hover:border-purple-400 hover:bg-purple-50'
                  }`}
                  onDragEnter={handleDrag}
                  onDragLeave={handleDrag}
                  onDragOver={handleDrag}
                  onDrop={handleDrop}
                >
                  <div className="flex flex-col items-center space-y-4">
                    <div className="bg-gradient-to-r from-purple-100 to-sky-100 p-4 rounded-full">
                      <Upload className="h-8 w-8 text-purple-600" />
                    </div>
                    
                    {formData.designFile ? (
                      <div className="text-center">
                        <p className="text-lg font-medium text-gray-900">File Selected:</p>
                        <p className="text-purple-600 font-semibold">{formData.designFile.name}</p>
                        <p className="text-sm text-gray-500 mt-2">
                          Size: {(formData.designFile.size / 1024 / 1024).toFixed(2)} MB
                        </p>
                      </div>
                    ) : (
                      <div className="text-center">
                        <p className="text-lg font-medium text-gray-900 mb-2">
                          Upload Your Design Reference
                        </p>
                        <p className="text-gray-600 mb-4">
                          Drag and drop your logo, design sample, or reference image here
                        </p>
                      </div>
                    )}
                    
                    <input
                      type="file"
                      onChange={handleFileChange}
                      accept="image/*,.pdf"
                      className="hidden"
                      id="design-upload"
                    />
                    <label
                      htmlFor="design-upload"
                      className="bg-gradient-to-r from-purple-500 to-purple-600 text-white px-6 py-3 rounded-full font-semibold hover:from-purple-600 hover:to-purple-700 transition-all cursor-pointer"
                    >
                      Choose File
                    </label>
                    
                    <p className="text-xs text-gray-500 max-w-md">
                      Supported formats: JPG, PNG, PDF (Max size: 10MB)
                      <br />
                      Upload your logo, design ideas, or reference images to help us understand your vision
                    </p>
                  </div>
                </div>
              </div>

              {/* Project Description */}
              <div className="bg-gray-50 p-6 rounded-2xl">
                <h3 className="text-xl font-semibold text-gray-900 mb-6 flex items-center">
                  <MessageSquare className="h-6 w-6 text-gray-600 mr-3" />
                  Project Description
                </h3>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Describe Your Branding Needs
                  </label>
                  <textarea
                    name="description"
                    value={formData.description}
                    onChange={handleChange}
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-colors"
                    placeholder="Please describe your event, preferred colors, design style, text to include, or any specific requirements for your branded water bottles..."
                  />
                  <p className="text-xs text-gray-500 mt-2">
                    The more details you provide, the better we can create your perfect design
                  </p>
                </div>
              </div>

              {/* Order Summary */}
              <div className="bg-gradient-to-r from-purple-50 to-sky-50 p-6 rounded-2xl">
                <h4 className="text-xl font-semibold text-gray-900 mb-4">Order Summary</h4>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700">Service Type:</span>
                    <span className="font-medium">
                      {formData.brandingService === 'design-and-branding' 
                        ? 'Design + Branding Service' 
                        : 'Branding Service Only'}
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700">Quantity:</span>
                    <span className="font-medium">{formData.quantity} carton(s)</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700">Price per carton:</span>
                    <span className="font-medium">
                      KSh {formData.brandingService === 'design-and-branding' ? '480' : '350'}
                    </span>
                  </div>
                  <div className="border-t pt-3 flex justify-between items-center">
                    <span className="text-lg font-semibold text-gray-900">Total Estimate:</span>
                    <span className="text-2xl font-bold text-purple-600">KSh {calculateTotal()}</span>
                  </div>
                  <p className="text-xs text-gray-500 text-center">
                    Final pricing may vary based on design complexity and special requirements
                  </p>
                </div>
              </div>

              {/* Submit Button */}
              <div className="text-center">
                <button
                  type="submit"
                  disabled={!formData.name || !formData.phone || !formData.completionDate || !formData.completionTime}
                  className={`w-full md:w-auto px-12 py-4 rounded-full font-semibold text-lg transition-all shadow-xl ${
                    formData.name && formData.phone && formData.completionDate && formData.completionTime
                      ? 'bg-gradient-to-r from-blue-500 to-cyan-500 text-white hover:from-blue-600 hover:to-cyan-600 transform hover:scale-105 shadow-blue-200' 
                      : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                  }`}
                >
                  Submit Branding Order
                </button>
                
                <p className="text-sm text-gray-500 mt-4">
                  By submitting this order, you agree to our terms and conditions. 
                  We'll contact you within 2-4 hours to discuss your project.
                </p>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 bg-gradient-to-br from-purple-50 to-sky-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">Need Help with Your Order?</h3>
          <p className="text-lg text-gray-600 mb-8">
            Our branding specialists are here to help you create the perfect design
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-2xl shadow-lg">
              <Phone className="h-8 w-8 text-purple-600 mx-auto mb-4" />
              <h4 className="font-semibold text-gray-900 mb-2">Call Our Branding Team</h4>
              <a href="tel:0743970594" className="text-purple-600 font-semibold text-lg hover:text-purple-700">
                0743970594
              </a>
              <p className="text-sm text-gray-500 mt-1">Mon-Fri: 8AM-6PM</p>
            </div>
            
            <div className="bg-white p-6 rounded-2xl shadow-lg">
              <Mail className="h-8 w-8 text-sky-600 mx-auto mb-4" />
              <h4 className="font-semibold text-gray-900 mb-2">Email Us</h4>
              <a href="mailto:aquabliss217@gmail.com" className="text-sky-600 font-semibold hover:text-sky-700">
                aquabliss217@gmail.com
              </a>
              <p className="text-sm text-gray-500 mt-1">Response within 24 hours</p>
            </div>
          </div>
          
          <div className="mt-8">
            <Link
              to="/bottle-design"
              className="text-purple-600 hover:text-purple-700 font-medium underline"
            >
              View our portfolio of branding work →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BrandingOrder;