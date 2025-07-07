import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaTimes, FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const GalleryPage = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [activeFilter, setActiveFilter] = useState('all');

  const openLightbox = (image) => {
    setSelectedImage(image);
    document.body.style.overflow = 'hidden'; // Prevent scrolling when lightbox is open
  };

  const closeLightbox = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'auto'; // Re-enable scrolling
  };

  const navigateImage = (direction) => {
    const currentIndex = galleryImages.findIndex(img => img.id === selectedImage.id);
    let newIndex;
    
    if (direction === 'next') {
      newIndex = (currentIndex + 1) % galleryImages.length;
    } else {
      newIndex = (currentIndex - 1 + galleryImages.length) % galleryImages.length;
    }
    
    setSelectedImage(galleryImages[newIndex]);
  };

  const handleFilterChange = (filter) => {
    setActiveFilter(filter);
  };

  const filteredImages = activeFilter === 'all' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === activeFilter);

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative py-20 bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')" }}>
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center text-white">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-5xl font-bold mb-4"
            >
              Our Gallery
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl"
            >
              Browse through our delicious creations and cozy café moments
            </motion.p>
          </div>
        </div>
      </section>

      {/* Gallery Filters */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center mb-12">
            <button 
              onClick={() => handleFilterChange('all')}
              className={`px-6 py-2 mx-2 mb-2 rounded-full transition-all duration-300 ${
                activeFilter === 'all' 
                  ? 'bg-primary text-white' 
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              All
            </button>
            <button 
              onClick={() => handleFilterChange('cakes')}
              className={`px-6 py-2 mx-2 mb-2 rounded-full transition-all duration-300 ${
                activeFilter === 'cakes' 
                  ? 'bg-primary text-white' 
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              Cakes
            </button>
            <button 
              onClick={() => handleFilterChange('coffee')}
              className={`px-6 py-2 mx-2 mb-2 rounded-full transition-all duration-300 ${
                activeFilter === 'coffee' 
                  ? 'bg-primary text-white' 
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              Coffee
            </button>
            <button 
              onClick={() => handleFilterChange('pastries')}
              className={`px-6 py-2 mx-2 mb-2 rounded-full transition-all duration-300 ${
                activeFilter === 'pastries' 
                  ? 'bg-primary text-white' 
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              Pastries
            </button>
            <button 
              onClick={() => handleFilterChange('cafe')}
              className={`px-6 py-2 mx-2 mb-2 rounded-full transition-all duration-300 ${
                activeFilter === 'cafe' 
                  ? 'bg-primary text-white' 
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              Our Café
            </button>
          </div>

          {/* Gallery Grid */}
          <motion.div 
            layout
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
          >
            <AnimatePresence>
              {filteredImages.map((image) => (
                <motion.div
                  layout
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  key={image.id}
                  className="relative overflow-hidden rounded-lg shadow-md cursor-pointer"
                  style={{ height: '250px' }}
                  onClick={() => openLightbox(image)}
                  whileHover={{ 
                    scale: 1.03,
                    transition: { duration: 0.3 }
                  }}
                >
                  <img 
                    src={image.src} 
                    alt={image.title} 
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-40 transition-all duration-300 flex items-end">
                    <div className="p-4 text-white transform translate-y-full hover:translate-y-0 transition-transform duration-300">
                      <h3 className="font-bold text-lg">{image.title}</h3>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black bg-opacity-90 flex items-center justify-center p-4"
          >
            <div className="relative w-full max-w-5xl">
              <button 
                onClick={closeLightbox}
                className="absolute top-4 right-4 text-white z-10 p-2 rounded-full bg-black bg-opacity-50 hover:bg-opacity-70"
              >
                <FaTimes size={24} />
              </button>
              
              <button 
                onClick={() => navigateImage('prev')}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white z-10 p-2 rounded-full bg-black bg-opacity-50 hover:bg-opacity-70"
              >
                <FaChevronLeft size={24} />
              </button>
              
              <button 
                onClick={() => navigateImage('next')}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white z-10 p-2 rounded-full bg-black bg-opacity-50 hover:bg-opacity-70"
              >
                <FaChevronRight size={24} />
              </button>
              
              <motion.img 
                key={selectedImage.id}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.3 }}
                src={selectedImage.src} 
                alt={selectedImage.title} 
                className="w-full object-contain max-h-[80vh]"
              />
              
              <div className="text-white text-center mt-4">
                <h3 className="text-xl font-bold">{selectedImage.title}</h3>
                <p className="text-gray-300">{selectedImage.description}</p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Call to Action */}
      <section className="py-16 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Want to See More?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Follow us on social media for daily updates and behind-the-scenes content.
          </p>
          <div className="flex justify-center space-x-4">
            <a href="#" className="bg-white text-primary hover:bg-gray-100 font-bold py-2 px-6 rounded-full transition duration-300">
              Instagram
            </a>
            <a href="#" className="bg-transparent hover:bg-white hover:text-primary border-2 border-white text-white font-bold py-2 px-6 rounded-full transition duration-300">
              Facebook
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

// Sample data for gallery images
const galleryImages = [
  {
    id: 1,
    src: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    title: 'Chocolate Truffle Cake',
    description: 'Our signature chocolate truffle cake with ganache frosting.',
    category: 'cakes'
  },
  {
    id: 2,
    src: 'https://images.unsplash.com/photo-1550617931-e17a7b70dce2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    title: 'Birthday Celebration',
    description: 'A custom birthday cake for a special celebration.',
    category: 'cakes'
  },
  {
    id: 3,
    src: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    title: 'Latte Art',
    description: 'Our baristas create beautiful latte art with every cup.',
    category: 'coffee'
  },
  {
    id: 4,
    src: 'https://images.unsplash.com/photo-1517231925375-bf2cb42917a5?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    title: 'Freshly Brewed Coffee',
    description: 'We use only the finest coffee beans for our brews.',
    category: 'coffee'
  },
  {
    id: 5,
    src: 'https://images.unsplash.com/photo-1505253758473-96b7015fcd40?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    title: 'Assorted Pastries',
    description: 'A selection of our freshly baked pastries.',
    category: 'pastries'
  },
  {
    id: 6,
    src: 'https://images.unsplash.com/photo-1608198093002-ad4e005484ec?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    title: 'Pain au Chocolat',
    description: 'Buttery croissant filled with rich chocolate.',
    category: 'pastries'
  },
  {
    id: 7,
    src: 'https://images.unsplash.com/photo-1445116572660-236099ec97a0?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    title: 'Cozy Corner',
    description: 'A comfortable spot to enjoy your coffee and cake.',
    category: 'cafe'
  },
  {
    id: 8,
    src: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    title: 'Our Café Interior',
    description: 'The warm and welcoming interior of our café.',
    category: 'cafe'
  },
  {
    id: 9,
    src: 'https://images.unsplash.com/photo-1586788680434-30d324b2d46f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    title: 'Red Velvet Cake',
    description: 'Our popular red velvet cake with cream cheese frosting.',
    category: 'cakes'
  },
  {
    id: 10,
    src: 'https://images.unsplash.com/photo-1517231925375-bf2cb42917a5?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    title: 'Espresso Shot',
    description: 'A perfectly pulled shot of espresso.',
    category: 'coffee'
  },
  {
    id: 11,
    src: 'https://images.unsplash.com/photo-1555507036-ab1f4038808a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    title: 'Fresh Croissants',
    description: 'Buttery, flaky croissants baked fresh daily.',
    category: 'pastries'
  },
  {
    id: 12,
    src: 'https://images.unsplash.com/photo-1521017432531-fbd92d768814?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    title: 'Outdoor Seating',
    description: 'Enjoy your treats in our lovely outdoor seating area.',
    category: 'cafe'
  }
];

export default GalleryPage; 