import React from 'react';
import { motion } from 'framer-motion';
import { FaLeaf, FaCoffee, FaHeart, FaUsers, FaStar, FaAward, FaHistory } from 'react-icons/fa';

const AboutPage = () => {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative py-20 bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')" }}>
        <div className="absolute inset-0 bg-violet-900 bg-opacity-70"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center text-white">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-5xl font-bold mb-4 drop-shadow-lg"
            >
              Our Story
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl text-violet-100"
            >
              Crafting Delicious Moments Since 2015
            </motion.p>
          </div>
        </div>
      </section>

      {/* Our Mission */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold mb-4 text-gray-800">Our Mission</h2>
              <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
              <p className="text-lg text-gray-600">
                To create a warm, welcoming space where people can enjoy exceptional cakes and premium coffee, 
                while fostering community connections and delivering unforgettable culinary experiences.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <motion.div 
                whileInView={{ x: [50, 0], opacity: [0, 1] }}
                transition={{ duration: 0.8 }}
                className="bg-white p-6 rounded-lg shadow-lg border-l-4 border-primary"
              >
                <div className="flex items-center mb-4">
                  <div className="bg-primary rounded-full p-3 mr-4">
                    <FaHistory className="text-white text-xl" />
                  </div>
                  <h3 className="text-2xl font-bold text-violet-800">Our Beginnings</h3>
                </div>
                <p className="text-gray-600 mb-4">
                  Founded in 2015, our shop began with a simple dream: to create a place where people could enjoy exceptional cakes 
                  and premium coffee in a warm, welcoming environment. What started as a small family business has grown into a 
                  beloved local destination.
                </p>
                <p className="text-gray-600">
                  We believe in using only the finest ingredients in our products. From locally-sourced dairy to premium 
                  imported chocolates and freshly roasted coffee beans, quality is at the heart of everything we create.
                </p>
              </motion.div>
              
              <motion.div 
                whileInView={{ x: [-50, 0], opacity: [0, 1] }}
                transition={{ duration: 0.8 }}
              >
                <img 
                  src="https://images.unsplash.com/photo-1559620192-032c4bc4674e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80" 
                  alt="Our cafe" 
                  className="rounded-lg shadow-lg w-full h-full object-cover border-4 border-white shadow-violet"
                />
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 bg-gradient-to-b from-violet-50 to-white">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4 text-gray-800">Our Values</h2>
            <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              These core principles guide everything we do, from baking our cakes to serving our customers.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <motion.div 
              whileInView={{ y: [50, 0], opacity: [0, 1] }}
              transition={{ duration: 0.6 }}
              className="bg-white p-6 rounded-lg shadow-lg text-center border-t-4 border-primary hover:shadow-violet transition-shadow duration-300"
            >
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4 shadow-md">
                <FaLeaf className="text-white text-2xl" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-violet-800">Quality</h3>
              <p className="text-gray-600">
                We never compromise on quality. From ingredients to presentation, excellence is our standard.
              </p>
            </motion.div>

            <motion.div 
              whileInView={{ y: [50, 0], opacity: [0, 1] }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white p-6 rounded-lg shadow-lg text-center border-t-4 border-primary hover:shadow-violet transition-shadow duration-300"
            >
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4 shadow-md">
                <FaCoffee className="text-white text-2xl" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-violet-800">Creativity</h3>
              <p className="text-gray-600">
                We love to innovate and create unique flavor combinations that surprise and delight.
              </p>
            </motion.div>

            <motion.div 
              whileInView={{ y: [50, 0], opacity: [0, 1] }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-white p-6 rounded-lg shadow-lg text-center border-t-4 border-primary hover:shadow-violet transition-shadow duration-300"
            >
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4 shadow-md">
                <FaHeart className="text-white text-2xl" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-violet-800">Passion</h3>
              <p className="text-gray-600">
                We pour our hearts into every creation, ensuring each item is made with love and care.
              </p>
            </motion.div>

            <motion.div 
              whileInView={{ y: [50, 0], opacity: [0, 1] }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="bg-white p-6 rounded-lg shadow-lg text-center border-t-4 border-primary hover:shadow-violet transition-shadow duration-300"
            >
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4 shadow-md">
                <FaUsers className="text-white text-2xl" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-violet-800">Community</h3>
              <p className="text-gray-600">
                We're proud to be part of the local community and strive to give back whenever possible.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4 text-gray-800">Meet Our Team</h2>
            <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              The passionate individuals behind our delicious creations.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {teamMembers.map((member, index) => (
              <motion.div 
                key={index}
                whileInView={{ y: [50, 0], opacity: [0, 1] }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-violet transition-shadow duration-300"
              >
                <div className="relative">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-64 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-violet-900 to-transparent opacity-60"></div>
                </div>
                <div className="p-4 text-center relative -mt-16">
                  <div className="bg-white rounded-lg p-4 shadow-lg">
                    <h3 className="text-xl font-bold mb-1 text-violet-800">{member.name}</h3>
                    <p className="text-primary font-medium mb-2">{member.position}</p>
                    <p className="text-gray-600 text-sm">{member.bio}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* History Timeline */}
      <section className="py-16 bg-gradient-to-b from-white to-violet-50">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4 text-gray-800">Our Journey</h2>
            <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              From humble beginnings to where we are today.
            </p>
          </motion.div>

          <div className="relative max-w-4xl mx-auto">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-primary to-violet-300"></div>
            
            {/* Timeline events */}
            {timeline.map((event, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className={`relative mb-12 ${index % 2 === 0 ? 'text-right pr-12 md:pr-0 md:mr-auto md:ml-0 md:w-1/2' : 'pl-12 md:pl-0 md:ml-auto md:mr-0 md:w-1/2'}`}
              >
                <div className={`bg-white p-6 rounded-lg shadow-lg hover:shadow-violet transition-shadow duration-300 ${index % 2 === 0 ? 'md:mr-6 border-r-4 border-primary' : 'md:ml-6 border-l-4 border-primary'}`}>
                  <div className="absolute top-6 w-8 h-8 rounded-full bg-primary border-4 border-white shadow-lg"
                    style={{ [index % 2 === 0 ? 'right' : 'left']: '-4px', [index % 2 === 0 ? 'left' : 'right']: 'auto' }}
                  >
                    <div className="absolute inset-0 animate-ping bg-primary rounded-full opacity-50"></div>
                  </div>
                  <span className="block text-primary font-bold mb-2 text-lg">{event.year}</span>
                  <h3 className="text-xl font-bold mb-2 text-violet-800">{event.title}</h3>
                  <p className="text-gray-600">{event.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4 text-gray-800">Our Achievements</h2>
            <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Recognitions that inspire us to continue our journey of excellence.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <motion.div 
              whileInView={{ scale: [0.8, 1], opacity: [0, 1] }}
              transition={{ duration: 0.6 }}
              className="bg-white p-6 rounded-lg shadow-lg text-center hover:shadow-violet transition-shadow duration-300"
            >
              <div className="bg-primary w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaStar className="text-white text-2xl" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-violet-800">Best Local Bakery</h3>
              <p className="text-gray-600">Awarded by City Food Magazine, 2018-2023</p>
            </motion.div>
            
            <motion.div 
              whileInView={{ scale: [0.8, 1], opacity: [0, 1] }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white p-6 rounded-lg shadow-lg text-center hover:shadow-violet transition-shadow duration-300"
            >
              <div className="bg-primary w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaAward className="text-white text-2xl" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-violet-800">Master Barista Championship</h3>
              <p className="text-gray-600">First place in the Regional Coffee Competition, 2022</p>
            </motion.div>
            
            <motion.div 
              whileInView={{ scale: [0.8, 1], opacity: [0, 1] }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-white p-6 rounded-lg shadow-lg text-center hover:shadow-violet transition-shadow duration-300"
            >
              <div className="bg-primary w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaHeart className="text-white text-2xl" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-violet-800">Community Choice Award</h3>
              <p className="text-gray-600">Voted #1 by local residents for 3 consecutive years</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-primary to-violet-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Come Visit Us Today</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-violet-100">
            123 Bakery Street, Sweet Town<br />
            Open Daily: 7 AM - 8 PM
          </p>
          <a href="/contact" className="bg-white text-primary hover:bg-gray-100 font-bold py-3 px-8 rounded-full transition duration-300 shadow-lg">
            Contact Us
          </a>
        </div>
      </section>
    </div>
  );
};

// Sample data for team members
const teamMembers = [
  {
    name: "Emily Johnson",
    position: "Head Baker",
    bio: "With over 15 years of experience, Emily brings creativity and precision to every cake she creates.",
    image: "https://randomuser.me/api/portraits/women/44.jpg"
  },
  {
    name: "Michael Rodriguez",
    position: "Master Barista",
    bio: "A certified coffee expert who has traveled the world to perfect his craft.",
    image: "https://randomuser.me/api/portraits/men/32.jpg"
  },
  {
    name: "Sarah Williams",
    position: "Pastry Chef",
    bio: "Trained in Paris, Sarah specializes in creating delicate and flavorful pastries.",
    image: "https://randomuser.me/api/portraits/women/68.jpg"
  },
  {
    name: "David Chen",
    position: "Shop Manager",
    bio: "Ensures everything runs smoothly so customers always have the best experience.",
    image: "https://randomuser.me/api/portraits/men/75.jpg"
  }
];

// Sample data for timeline
const timeline = [
  {
    year: "2015",
    title: "Our Beginning",
    description: "Started as a small coffee cart at the local farmers market with just a few cake varieties."
  },
  {
    year: "2016",
    title: "First Shop Opens",
    description: "Opened our first permanent location downtown, expanding our menu to include more cake varieties and coffee options."
  },
  {
    year: "2018",
    title: "Award Winning",
    description: "Won 'Best Local Bakery' award and expanded our team to include specialized pastry chefs."
  },
  {
    year: "2020",
    title: "Online Ordering",
    description: "Launched our website with online ordering capabilities to better serve our growing customer base."
  },
  {
    year: "2023",
    title: "Today",
    description: "Continuing to grow while maintaining our commitment to quality, creativity, and community."
  }
];

export default AboutPage;