import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock, FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [formStatus, setFormStatus] = useState({
    submitted: false,
    error: false,
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      setFormStatus({
        submitted: false,
        error: true,
        message: 'Please fill in all required fields.'
      });
      return;
    }
    
    // Here you would normally send the data to your backend or email service
    // For demo purposes, we'll just simulate a successful submission
    setFormStatus({
      submitted: true,
      error: false,
      message: 'Thank you for your message! We will get back to you soon.'
    });
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  };

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative py-20 bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1554118811-1e0d58224f24?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')" }}>
        <div className="absolute inset-0 bg-violet-900 bg-opacity-70"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center text-white">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-5xl font-bold mb-4 drop-shadow-lg"
            >
              Contact Us
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl text-violet-100"
            >
              We'd love to hear from you! Get in touch with our team.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Contact Form and Info Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {/* Contact Form */}
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-lg shadow-lg p-8 border-t-4 border-primary"
            >
              <h2 className="text-2xl font-bold mb-6 text-violet-800">Send Us a Message</h2>
              
              {formStatus.submitted && (
                <div className="bg-green-100 border-l-4 border-green-500 text-green-700 px-4 py-3 rounded mb-4">
                  <div className="flex">
                    <div className="py-1">
                      <svg className="fill-current h-6 w-6 text-green-500 mr-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                        <path d="M2.93 17.07A10 10 0 1 1 17.07 2.93 10 10 0 0 1 2.93 17.07zm12.73-1.41A8 8 0 1 0 4.34 4.34a8 8 0 0 0 11.32 11.32zM9 11V9h2v6H9v-4zm0-6h2v2H9V5z"/>
                      </svg>
                    </div>
                    <div>
                      <p className="font-bold">Success!</p>
                      <p className="text-sm">{formStatus.message}</p>
                    </div>
                  </div>
                </div>
              )}
              
              {formStatus.error && (
                <div className="bg-red-100 border-l-4 border-red-500 text-red-700 px-4 py-3 rounded mb-4">
                  <div className="flex">
                    <div className="py-1">
                      <svg className="fill-current h-6 w-6 text-red-500 mr-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                        <path d="M2.93 17.07A10 10 0 1 1 17.07 2.93 10 10 0 0 1 2.93 17.07zm12.73-1.41A8 8 0 1 0 4.34 4.34a8 8 0 0 0 11.32 11.32zM9 11V9h2v6H9v-4zm0-6h2v2H9V5z"/>
                      </svg>
                    </div>
                    <div>
                      <p className="font-bold">Error!</p>
                      <p className="text-sm">{formStatus.message}</p>
                    </div>
                  </div>
                </div>
              )}
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-gray-700 font-medium mb-2">Name <span className="text-primary">*</span></label>
                  <input 
                    type="text" 
                    id="name"
                    name="name" 
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition duration-300"
                    placeholder="Your name"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Email <span className="text-primary">*</span></label>
                  <input 
                    type="email" 
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition duration-300"
                    placeholder="your.email@example.com"
                  />
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-gray-700 font-medium mb-2">Subject</label>
                  <input 
                    type="text" 
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition duration-300"
                    placeholder="What is this regarding?"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-gray-700 font-medium mb-2">Message <span className="text-primary">*</span></label>
                  <textarea 
                    id="message"
                    name="message"
                    rows="5"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition duration-300"
                    placeholder="Your message here..."
                  ></textarea>
                </div>
                
                <button 
                  type="submit" 
                  className="bg-primary hover:bg-primary-dark text-white font-bold py-3 px-8 rounded-md transition duration-300 shadow-lg w-full md:w-auto"
                >
                  Send Message
                </button>
              </form>
            </motion.div>
            
            {/* Contact Information */}
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="bg-gradient-to-br from-violet-50 to-white rounded-lg shadow-lg p-8 mb-8 border-t-4 border-primary">
                <h2 className="text-2xl font-bold mb-6 text-violet-800">Get In Touch</h2>
                
                <div className="space-y-6">
                  <motion.div 
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                    className="flex items-start"
                  >
                    <div className="bg-primary rounded-full p-3 mr-4 shadow-md">
                      <FaMapMarkerAlt className="text-white text-xl" />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-800">Address</h3>
                      <p className="text-gray-600">123 Bakery Street<br />Sweet Town, ST 12345</p>
                    </div>
                  </motion.div>
                  
                  <motion.div 
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                    className="flex items-start"
                  >
                    <div className="bg-primary rounded-full p-3 mr-4 shadow-md">
                      <FaPhone className="text-white text-xl" />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-800">Phone</h3>
                      <p className="text-gray-600">(555) 123-4567</p>
                    </div>
                  </motion.div>
                  
                  <motion.div 
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                    className="flex items-start"
                  >
                    <div className="bg-primary rounded-full p-3 mr-4 shadow-md">
                      <FaEnvelope className="text-white text-xl" />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-800">Email</h3>
                      <p className="text-gray-600">info@cakeandcoffee.com</p>
                    </div>
                  </motion.div>
                  
                  <motion.div 
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                    className="flex items-start"
                  >
                    <div className="bg-primary rounded-full p-3 mr-4 shadow-md">
                      <FaClock className="text-white text-xl" />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-800">Business Hours</h3>
                      <p className="text-gray-600 mb-1">Monday - Friday: 7 AM - 8 PM</p>
                      <p className="text-gray-600 mb-1">Saturday: 8 AM - 8 PM</p>
                      <p className="text-gray-600">Sunday: 8 AM - 5 PM</p>
                    </div>
                  </motion.div>
                </div>
              </div>
              
              {/* Social Media Links */}
              <div className="bg-white rounded-lg shadow-lg p-8 border-t-4 border-primary">
                <h2 className="text-2xl font-bold mb-4 text-violet-800">Follow Us</h2>
                <p className="text-gray-600 mb-6">Stay connected with us on social media for updates and special offers!</p>
                <div className="flex space-x-4">
                  <motion.a 
                    whileHover={{ y: -5 }}
                    transition={{ duration: 0.2 }}
                    href="#" 
                    className="bg-[#3b5998] text-white px-6 py-3 rounded-md hover:opacity-90 transition duration-300 flex items-center shadow-md"
                  >
                    <FaFacebookF className="mr-2" /> Facebook
                  </motion.a>
                  <motion.a 
                    whileHover={{ y: -5 }}
                    transition={{ duration: 0.2 }}
                    href="#" 
                    className="bg-[#1da1f2] text-white px-6 py-3 rounded-md hover:opacity-90 transition duration-300 flex items-center shadow-md"
                  >
                    <FaTwitter className="mr-2" /> Twitter
                  </motion.a>
                  <motion.a 
                    whileHover={{ y: -5 }}
                    transition={{ duration: 0.2 }}
                    href="#" 
                    className="bg-[#e1306c] text-white px-6 py-3 rounded-md hover:opacity-90 transition duration-300 flex items-center shadow-md"
                  >
                    <FaInstagram className="mr-2" /> Instagram
                  </motion.a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Google Maps Section */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="rounded-lg overflow-hidden shadow-lg border-4 border-white"
            style={{ height: '450px' }}
          >
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.215583125629!2d-74.00597492404002!3d40.71277427932946!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a22a3bda30d%3A0xb89d1fe6bc499443!2sDowntown%20Manhattan%2C%20New%20York%2C%20NY!5e0!3m2!1sen!2sus!4v1699382802663!5m2!1sen!2sus" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen="" 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </motion.div>
        </div>
      </section>
      
      {/* FAQ Section */}
      <section className="py-16 bg-gradient-to-b from-white to-violet-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-gray-800">Frequently Asked Questions</h2>
            <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Find answers to our most commonly asked questions.
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            {faqs.map((faq, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="mb-6 bg-white rounded-lg shadow-md overflow-hidden hover:shadow-violet transition-shadow duration-300"
              >
                <div className="p-6 border-l-4 border-primary">
                  <h3 className="text-lg font-bold mb-2 text-violet-800">{faq.question}</h3>
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-primary to-violet-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Place an Order?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-violet-100">
            Check out our menu and place your order online for pickup or delivery.
          </p>
          <a href="/menu" className="bg-white text-primary hover:bg-gray-100 font-bold py-3 px-8 rounded-full transition duration-300 shadow-lg">
            View Our Menu
          </a>
        </div>
      </section>
    </div>
  );
};

// Sample FAQs data
const faqs = [
  {
    question: "Do you offer custom cake designs?",
    answer: "Yes, we specialize in custom cake designs for all occasions. Please contact us at least 48 hours in advance for custom orders."
  },
  {
    question: "What are your delivery options?",
    answer: "We offer local delivery within a 10-mile radius for a small fee. Free delivery is available for orders over $50."
  },
  {
    question: "Do you accommodate dietary restrictions?",
    answer: "Absolutely! We offer gluten-free, vegan, and nut-free options. Please specify your dietary needs when placing an order."
  },
  {
    question: "How far in advance should I place my order?",
    answer: "For regular menu items, 24 hours notice is appreciated. For custom cakes, we recommend at least 48-72 hours notice."
  }
];

export default Contact;
