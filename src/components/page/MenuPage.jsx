import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaCoffee, FaBirthdayCake, FaCookieBite, FaGift } from 'react-icons/fa';

const MenuPage = () => {
  const [activeTab, setActiveTab] = useState('cakes');

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative py-20 bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1517433367423-c7e5b0f35086?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')" }}>
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center text-white">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-5xl font-bold mb-4"
            >
              Our Menu
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl"
            >
              Explore our delicious cakes, premium coffee, and more
            </motion.p>
          </div>
        </div>
      </section>

      {/* Menu Tabs */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center mb-12">
            <button 
              onClick={() => handleTabChange('cakes')}
              className={`flex items-center px-6 py-3 mx-2 mb-2 rounded-full transition-all duration-300 ${
                activeTab === 'cakes' 
                  ? 'bg-primary text-white' 
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              <FaBirthdayCake className="mr-2" /> Cakes
            </button>
            <button 
              onClick={() => handleTabChange('coffee')}
              className={`flex items-center px-6 py-3 mx-2 mb-2 rounded-full transition-all duration-300 ${
                activeTab === 'coffee' 
                  ? 'bg-primary text-white' 
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              <FaCoffee className="mr-2" /> Coffee
            </button>
            <button 
              onClick={() => handleTabChange('pastries')}
              className={`flex items-center px-6 py-3 mx-2 mb-2 rounded-full transition-all duration-300 ${
                activeTab === 'pastries' 
                  ? 'bg-primary text-white' 
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              <FaCookieBite className="mr-2" /> Pastries
            </button>
            <button 
              onClick={() => handleTabChange('gifts')}
              className={`flex items-center px-6 py-3 mx-2 mb-2 rounded-full transition-all duration-300 ${
                activeTab === 'gifts' 
                  ? 'bg-primary text-white' 
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              <FaGift className="mr-2" /> Gift Sets
            </button>
          </div>

          {/* Menu Content */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
            >
              {activeTab === 'cakes' && (
                <div>
                  <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">Our Cakes</h2>
                  
                  {/* Menu Categories */}
                  <div className="mb-12">
                    <h3 className="text-xl font-bold mb-6 pb-2 border-b border-gray-200 text-primary">Birthday Cakes</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                      {cakes.filter(cake => cake.category === 'birthday').map((item) => (
                        <MenuCard key={item.id} item={item} />
                      ))}
                    </div>
                  </div>

                  <div className="mb-12">
                    <h3 className="text-xl font-bold mb-6 pb-2 border-b border-gray-200 text-primary">Wedding Cakes</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                      {cakes.filter(cake => cake.category === 'wedding').map((item) => (
                        <MenuCard key={item.id} item={item} />
                      ))}
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold mb-6 pb-2 border-b border-gray-200 text-primary">Special Occasion Cakes</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                      {cakes.filter(cake => cake.category === 'special').map((item) => (
                        <MenuCard key={item.id} item={item} />
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'coffee' && (
                <div>
                  <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">Our Coffee</h2>
                  
                  <div className="mb-12">
                    <h3 className="text-xl font-bold mb-6 pb-2 border-b border-gray-200 text-primary">Hot Coffee</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                      {coffee.filter(item => item.category === 'hot').map((item) => (
                        <MenuCard key={item.id} item={item} />
                      ))}
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold mb-6 pb-2 border-b border-gray-200 text-primary">Cold Coffee</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                      {coffee.filter(item => item.category === 'cold').map((item) => (
                        <MenuCard key={item.id} item={item} />
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'pastries' && (
                <div>
                  <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">Our Pastries</h2>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {pastries.map((item) => (
                      <MenuCard key={item.id} item={item} />
                    ))}
                  </div>
                </div>
              )}

              {activeTab === 'gifts' && (
                <div>
                  <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">Gift Sets</h2>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {giftSets.map((item) => (
                      <MenuCard key={item.id} item={item} />
                    ))}
                  </div>
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* Order Information */}
      <section className="py-16 bg-[#f9f6ff]">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6 text-gray-800">How to Order</h2>
            <p className="text-lg text-gray-600 mb-8">
              You can place your order online, by phone, or visit us in person. For custom orders or special requests,
              please contact us at least 48 hours in advance.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-3 text-gray-800">Order Online</h3>
                <p className="text-gray-600 mb-4">
                  Browse our menu and place your order directly through our website.
                </p>
                <button className="bg-primary hover:bg-primary-dark text-white font-bold py-2 px-4 rounded-full transition duration-300">
                  Order Now
                </button>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-3 text-gray-800">Call Us</h3>
                <p className="text-gray-600 mb-4">
                  Call us at (555) 123-4567 to place your order by phone.
                </p>
                <button className="bg-primary hover:bg-primary-dark text-white font-bold py-2 px-4 rounded-full transition duration-300">
                  Call Now
                </button>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-3 text-gray-800">Visit Us</h3>
                <p className="text-gray-600 mb-4">
                  Come to our store at 123 Bakery Street, Sweet Town.
                </p>
                <button className="bg-primary hover:bg-primary-dark text-white font-bold py-2 px-4 rounded-full transition duration-300">
                  Get Directions
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Special Dietary Options */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">Special Dietary Options</h2>
            <p className="text-lg text-center text-gray-600 mb-8">
              We cater to various dietary needs. Please inform us of any allergies or preferences when ordering.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
              <div className="bg-white p-4 rounded-lg shadow-md text-center">
                <span className="block text-primary font-bold mb-2">Gluten-Free</span>
                <p className="text-sm text-gray-600">Options available upon request</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-md text-center">
                <span className="block text-primary font-bold mb-2">Vegan</span>
                <p className="text-sm text-gray-600">Plant-based alternatives</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-md text-center">
                <span className="block text-primary font-bold mb-2">Nut-Free</span>
                <p className="text-sm text-gray-600">Safe options for nut allergies</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-md text-center">
                <span className="block text-primary font-bold mb-2">Sugar-Free</span>
                <p className="text-sm text-gray-600">Sweetened with alternatives</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Order?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Place your order now and enjoy our delicious treats!
          </p>
          <button className="bg-white text-primary hover:bg-gray-100 font-bold py-3 px-8 rounded-full transition duration-300">
            Order Now
          </button>
        </div>
      </section>
    </div>
  );
};

// Menu Card Component
const MenuCard = ({ item }) => {
  return (
    <motion.div 
      whileHover={{ y: -10 }}
      className="bg-white rounded-lg shadow-md overflow-hidden"
    >
      <img 
        src={item.image} 
        alt={item.name} 
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <div className="flex justify-between items-start mb-2">
          <h3 className="font-bold text-lg">{item.name}</h3>
          <span className="text-primary font-bold">${item.price.toFixed(2)}</span>
        </div>
        <p className="text-gray-600 text-sm mb-4">{item.description}</p>
        <button className="bg-primary hover:bg-primary-dark text-white font-bold py-2 px-4 rounded-full transition duration-300 w-full">
          Add to Cart
        </button>
      </div>
    </motion.div>
  );
};

// Sample data for menu items
const cakes = [
  {
    id: 'cake1',
    name: 'Chocolate Truffle Cake',
    description: 'Rich chocolate cake with truffle filling and chocolate ganache.',
    price: 28.99,
    image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    category: 'birthday'
  },
  {
    id: 'cake2',
    name: 'Red Velvet Cake',
    description: 'Classic red velvet cake with cream cheese frosting.',
    price: 26.99,
    image: 'https://images.unsplash.com/photo-1586788680434-30d324b2d46f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    category: 'birthday'
  },
  {
    id: 'cake3',
    name: 'Vanilla Bean Cake',
    description: 'Light vanilla cake with vanilla bean buttercream.',
    price: 24.99,
    image: 'https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    category: 'birthday'
  },
  {
    id: 'cake4',
    name: 'Elegant White Wedding Cake',
    description: 'Three-tier white cake with delicate floral decorations.',
    price: 199.99,
    image: 'https://images.unsplash.com/photo-1522767131594-6b7e96848fba?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    category: 'wedding'
  },
  {
    id: 'cake5',
    name: 'Rustic Wedding Cake',
    description: 'Semi-naked cake with fresh berries and flowers.',
    price: 189.99,
    image: 'https://images.unsplash.com/photo-1535254973040-607b474cb50d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    category: 'wedding'
  },
  {
    id: 'cake6',
    name: 'Anniversary Cake',
    description: 'Elegant cake with gold accents and personalized topper.',
    price: 45.99,
    image: 'https://images.unsplash.com/photo-1535254973040-607b474cb50d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    category: 'special'
  },
  {
    id: 'cake7',
    name: 'Graduation Cake',
    description: 'Celebration cake with graduation cap and diploma design.',
    price: 42.99,
    image: 'https://images.unsplash.com/photo-1557979619-445218f326b9?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    category: 'special'
  },
  {
    id: 'cake8',
    name: 'Baby Shower Cake',
    description: 'Delicate cake with baby-themed decorations.',
    price: 39.99,
    image: 'https://images.unsplash.com/photo-1557979619-445218f326b9?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    category: 'special'
  }
];

const coffee = [
  {
    id: 'coffee1',
    name: 'Espresso',
    description: 'Strong, concentrated coffee served in a small cup.',
    price: 2.99,
    image: 'https://images.unsplash.com/photo-1510591509098-f4b5d5636b09?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    category: 'hot'
  },
  {
    id: 'coffee2',
    name: 'Cappuccino',
    description: 'Espresso with steamed milk and milk foam.',
    price: 3.99,
    image: 'https://images.unsplash.com/photo-1517256673644-36ad11246d21?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    category: 'hot'
  },
  {
    id: 'coffee3',
    name: 'Latte',
    description: 'Espresso with a lot of steamed milk and little foam.',
    price: 4.49,
    image: 'https://images.unsplash.com/photo-1570968915860-54d5c301fa9f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    category: 'hot'
  },
  {
    id: 'coffee4',
    name: 'Iced Coffee',
    description: 'Chilled coffee served over ice.',
    price: 3.99,
    image: 'https://images.unsplash.com/photo-1517701604599-bb29b565090c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    category: 'cold'
  },
  {
    id: 'coffee5',
    name: 'Cold Brew',
    description: 'Coffee brewed with cold water over 12-24 hours.',
    price: 4.99,
    image: 'https://images.unsplash.com/photo-1461023058943-07fcbe16d735?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    category: 'cold'
  },
  {
    id: 'coffee6',
    name: 'Frappuccino',
    description: 'Blended iced coffee with whipped cream.',
    price: 5.49,
    image: 'https://images.unsplash.com/photo-1572490122747-3968b75cc699?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    category: 'cold'
  }
];

const pastries = [
  {
    id: 'pastry1',
    name: 'Croissant',
    description: 'Buttery, flaky pastry with a golden crust.',
    price: 2.99,
    image: 'https://images.unsplash.com/photo-1555507036-ab1f4038808a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'pastry2',
    name: 'Pain au Chocolat',
    description: 'Chocolate-filled croissant pastry.',
    price: 3.49,
    image: 'https://images.unsplash.com/photo-1608198093002-ad4e005484ec?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'pastry3',
    name: 'Cinnamon Roll',
    description: 'Sweet roll with cinnamon-sugar filling and vanilla glaze.',
    price: 3.99,
    image: 'https://images.unsplash.com/photo-1509365465985-25d11c17e812?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'pastry4',
    name: 'Blueberry Muffin',
    description: 'Moist muffin packed with fresh blueberries.',
    price: 2.99,
    image: 'https://images.unsplash.com/photo-1607958996333-41aef7caefaa?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'pastry5',
    name: 'Eclair',
    description: 'Choux pastry filled with cream and topped with chocolate.',
    price: 4.49,
    image: 'https://images.unsplash.com/photo-1528975604071-b4dc52a2d18c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'pastry6',
    name: 'Fruit Tart',
    description: 'Buttery crust with custard and fresh seasonal fruits.',
    price: 5.99,
    image: 'https://images.unsplash.com/photo-1488477181946-6428a0291777?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
  }
];

const giftSets = [
  {
    id: 'gift1',
    name: 'Coffee Lover\'s Box',
    description: 'Premium coffee beans, mug, and chocolate-covered espresso beans.',
    price: 39.99,
    image: 'https://images.unsplash.com/photo-1589985270826-4b7bb135bc9d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'gift2',
    name: 'Sweet Treats Box',
    description: 'Assortment of mini pastries and desserts.',
    price: 34.99,
    image: 'https://images.unsplash.com/photo-1549312142-c6b1f8b4e468?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'gift3',
    name: 'Birthday Celebration Set',
    description: 'Small cake, candles, party hats, and balloons.',
    price: 49.99,
    image: 'https://images.unsplash.com/photo-1530103862676-de8c9debad1d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'gift4',
    name: 'Thank You Gift Box',
    description: 'Assorted cookies, coffee, and a thank you card.',
    price: 29.99,
    image: 'https://images.unsplash.com/photo-1549312142-c6b1f8b4e468?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
  }
];

export default MenuPage; 