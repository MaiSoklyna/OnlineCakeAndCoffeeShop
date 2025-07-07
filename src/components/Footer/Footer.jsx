import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaClock, FaHeart } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-6">
      <div className="container mx-auto px-4">
        {/* Newsletter Section */}
        <div className="bg-gradient-to-r from-primary to-violet-800 rounded-lg shadow-lg p-8 -mt-24 mb-12 relative z-10 transform hover:scale-[1.01] transition-transform duration-300">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-6 md:mb-0 md:w-1/2">
              <h3 className="text-2xl font-bold text-white mb-2">Subscribe to Our Newsletter</h3>
              <p className="text-violet-100 text-opacity-90">
                Get updates on special offers, new products, and events.
              </p>
            </div>
            <div className="w-full md:w-1/2">
              <form className="flex flex-col sm:flex-row">
                <input 
                  type="email" 
                  placeholder="Your email address" 
                  className="flex-grow px-4 py-3 rounded-l-md focus:outline-none focus:ring-2 focus:ring-primary text-gray-900 mb-2 sm:mb-0"
                />
                <button 
                  type="submit" 
                  className="bg-white text-primary hover:bg-gray-100 font-bold px-6 py-3 rounded-r-md transition duration-300 hover:shadow-lg"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <h4 className="text-xl font-bold mb-4 relative inline-block">
              About Us
              <span className="absolute bottom-0 left-0 w-1/2 h-1 bg-primary"></span>
            </h4>
            <p className="text-gray-400 mb-4">
              We are dedicated to providing the best cakes and coffee experience. Our handcrafted products are made with love and the finest ingredients.
            </p>
            <div className="flex space-x-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="bg-gray-800 hover:bg-primary w-10 h-10 rounded-full flex items-center justify-center transition duration-300 transform hover:scale-110">
                <FaFacebookF />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="bg-gray-800 hover:bg-primary w-10 h-10 rounded-full flex items-center justify-center transition duration-300 transform hover:scale-110">
                <FaTwitter />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="bg-gray-800 hover:bg-primary w-10 h-10 rounded-full flex items-center justify-center transition duration-300 transform hover:scale-110">
                <FaInstagram />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="bg-gray-800 hover:bg-primary w-10 h-10 rounded-full flex items-center justify-center transition duration-300 transform hover:scale-110">
                <FaLinkedinIn />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-xl font-bold mb-4 relative inline-block">
              Quick Links
              <span className="absolute bottom-0 left-0 w-1/2 h-1 bg-primary"></span>
            </h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-400 hover:text-primary transition duration-300 flex items-center">
                  <span className="mr-2 text-xs">❯</span> Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-400 hover:text-primary transition duration-300 flex items-center">
                  <span className="mr-2 text-xs">❯</span> About Us
                </Link>
              </li>
              <li>
                <Link to="/menu" className="text-gray-400 hover:text-primary transition duration-300 flex items-center">
                  <span className="mr-2 text-xs">❯</span> Menu
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="text-gray-400 hover:text-primary transition duration-300 flex items-center">
                  <span className="mr-2 text-xs">❯</span> Gallery
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-primary transition duration-300 flex items-center">
                  <span className="mr-2 text-xs">❯</span> Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-xl font-bold mb-4 relative inline-block">
              Our Menu
              <span className="absolute bottom-0 left-0 w-1/2 h-1 bg-primary"></span>
            </h4>
            <ul className="space-y-2">
              <li>
                <Link to="/category/cakes" className="text-gray-400 hover:text-primary transition duration-300 flex items-center">
                  <span className="mr-2 text-xs">❯</span> Cakes
                </Link>
              </li>
              <li>
                <Link to="/category/coffee" className="text-gray-400 hover:text-primary transition duration-300 flex items-center">
                  <span className="mr-2 text-xs">❯</span> Coffee
                </Link>
              </li>
              <li>
                <Link to="/category/pastries" className="text-gray-400 hover:text-primary transition duration-300 flex items-center">
                  <span className="mr-2 text-xs">❯</span> Pastries
                </Link>
              </li>
              <li>
                <Link to="/category/gifts" className="text-gray-400 hover:text-primary transition duration-300 flex items-center">
                  <span className="mr-2 text-xs">❯</span> Gift Sets
                </Link>
              </li>
              <li>
                <Link to="/category/specials" className="text-gray-400 hover:text-primary transition duration-300 flex items-center">
                  <span className="mr-2 text-xs">❯</span> Specials
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-xl font-bold mb-4 relative inline-block">
              Contact Us
              <span className="absolute bottom-0 left-0 w-1/2 h-1 bg-primary"></span>
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start">
                <div className="bg-primary rounded-full p-2 mr-3 mt-1">
                  <FaMapMarkerAlt className="text-white" />
                </div>
                <span className="text-gray-400">123 Cake Street, Coffee City, CC 12345</span>
              </li>
              <li className="flex items-center">
                <div className="bg-primary rounded-full p-2 mr-3">
                  <FaPhoneAlt className="text-white" />
                </div>
                <span className="text-gray-400">+123-456-7890</span>
              </li>
              <li className="flex items-center">
                <div className="bg-primary rounded-full p-2 mr-3">
                  <FaEnvelope className="text-white" />
                </div>
                <span className="text-gray-400">info@cakeandcoffee.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Business Hours */}
        <div className="border-t border-gray-800 pt-8 pb-4 mb-4">
          <h4 className="text-xl font-bold mb-6 text-center relative inline-block">
            Business Hours
            <span className="absolute bottom-0 left-0 w-1/2 h-1 bg-primary"></span>
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-3xl mx-auto">
            <div className="text-center p-4 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors duration-300">
              <div className="bg-primary rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3">
                <FaClock className="text-white" />
              </div>
              <h5 className="font-bold text-primary mb-2">Weekdays</h5>
              <p className="text-gray-400">7:00 AM - 8:00 PM</p>
            </div>
            <div className="text-center p-4 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors duration-300">
              <div className="bg-primary rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3">
                <FaClock className="text-white" />
              </div>
              <h5 className="font-bold text-primary mb-2">Saturdays</h5>
              <p className="text-gray-400">8:00 AM - 8:00 PM</p>
            </div>
            <div className="text-center p-4 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors duration-300">
              <div className="bg-primary rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3">
                <FaClock className="text-white" />
              </div>
              <h5 className="font-bold text-primary mb-2">Sundays</h5>
              <p className="text-gray-400">8:00 AM - 5:00 PM</p>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 pt-6 text-center">
          <p className="text-gray-400">
            &copy; {new Date().getFullYear()} Cake and Coffee Shop. All rights reserved. Made with <FaHeart className="inline-block text-primary mx-1" /> in Sweet Town.
          </p>
          <div className="mt-2">
            <Link to="/privacy-policy" className="text-gray-500 hover:text-primary mx-2 text-sm">Privacy Policy</Link>
            <Link to="/terms-of-service" className="text-gray-500 hover:text-primary mx-2 text-sm">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;