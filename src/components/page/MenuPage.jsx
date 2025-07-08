import React, { useState, useEffect } from 'react';
import { FaSearch, FaFilter, FaSortAmountDown, FaSortAmountDownAlt } from 'react-icons/fa';
import { motion } from 'framer-motion';
import ProductCard from '../Cardproduct/ProductCard';

const MenuPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState('all');
  const [activeFilter, setActiveFilter] = useState(null);
  const [sortBy, setSortBy] = useState('popular');
  const [showFilters, setShowFilters] = useState(false);
  const [priceRange, setPriceRange] = useState([0, 100]);
  
  // Sample data - in a real app, fetch from Firebase
  const [products, setProducts] = useState([
    {
      id: 1,
      name: "Chocolate Truffle Cake",
      description: "Rich chocolate cake with truffle filling",
      price: 28.99,
      category: "cakes",
      featured: true,
      rating: 4.8,
      image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 2,
      name: "Vanilla Bean Latte",
      description: "Espresso with vanilla bean and steamed milk",
      price: 4.99,
      category: "coffee",
      featured: true,
      rating: 4.6,
      image: "https://images.unsplash.com/photo-1497636577773-f1231844b336?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 3,
      name: "Red Velvet Cupcake",
      description: "Classic red velvet with cream cheese frosting",
      price: 3.99,
      category: "pastries",
      featured: false,
      rating: 4.7,
      image: "https://images.unsplash.com/photo-1614707267537-b85aaf00c4b7?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 4,
      name: "Caramel Macchiato",
      description: "Espresso with caramel and foamed milk",
      price: 5.49,
      category: "coffee",
      featured: true,
      rating: 4.5,
      image: "https://images.unsplash.com/photo-1485808191679-5f86510681a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 5,
      name: "Strawberry Cheesecake",
      description: "Creamy cheesecake with strawberry topping",
      price: 32.99,
      category: "cakes",
      featured: true,
      rating: 4.9,
      image: "https://images.unsplash.com/photo-1565958011703-44f9829ba187?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 6,
      name: "Mocha Frappuccino",
      description: "Blended coffee with chocolate and whipped cream",
      price: 5.99,
      category: "coffee",
      featured: false,
      rating: 4.3,
      image: "https://images.unsplash.com/photo-1577968897966-3d4325b36b61?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 7,
      name: "Blueberry Muffin",
      description: "Fresh baked muffin with blueberries",
      price: 2.99,
      category: "pastries",
      featured: false,
      rating: 4.4,
      image: "https://images.unsplash.com/photo-1587668178277-295251f900ce?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 8,
      name: "Birthday Cake",
      description: "Colorful celebration cake with sprinkles",
      price: 35.99,
      category: "cakes",
      featured: true,
      rating: 4.8,
      image: "https://images.unsplash.com/photo-1558301211-0d8c8ddee6ec?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 9,
      name: "Cappuccino",
      description: "Equal parts espresso, steamed milk, and foam",
      price: 4.49,
      category: "coffee",
      featured: false,
      rating: 4.7,
      image: "https://images.unsplash.com/photo-1572442388796-11668a67e53d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 10,
      name: "Croissant",
      description: "Buttery, flaky French pastry",
      price: 2.49,
      category: "pastries",
      featured: false,
      rating: 4.6,
      image: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 11,
      name: "Wedding Cake",
      description: "Elegant three-tier cake with fondant",
      price: 199.99,
      category: "cakes",
      featured: false,
      rating: 4.9,
      image: "https://images.unsplash.com/photo-1522767131594-6b7e96848fba?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 12,
      name: "Gift Box - Sweet Treats",
      description: "Assorted pastries and treats in gift packaging",
      price: 24.99,
      category: "gifts",
      featured: true,
      rating: 4.8,
      image: "https://images.unsplash.com/photo-1548848221-0c2e497ed557?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    },
  ]);
  
  // Categories for filter
  const categories = [
    { id: 'all', name: 'All Products' },
    { id: 'cakes', name: 'Cakes' },
    { id: 'coffee', name: 'Coffee' },
    { id: 'pastries', name: 'Pastries' },
    { id: 'gifts', name: 'Gift Sets' },
    { id: 'specials', name: 'Specials' },
  ];
  
  // Filter products based on search, category, and price
  const filteredProducts = products.filter(product => {
    // Search filter
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         product.description.toLowerCase().includes(searchTerm.toLowerCase());
    
    // Category filter
    const matchesCategory = activeCategory === 'all' || product.category === activeCategory;
    
    // Price filter
    const matchesPrice = product.price >= priceRange[0] && product.price <= priceRange[1];
    
    return matchesSearch && matchesCategory && matchesPrice;
  });
  
  // Sort filtered products
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortBy) {
      case 'price-low':
        return a.price - b.price;
      case 'price-high':
        return b.price - a.price;
      case 'name':
        return a.name.localeCompare(b.name);
      case 'popular':
      default:
        return b.rating - a.rating;
    }
  });
  
  const handlePriceChange = (e, index) => {
    const newPriceRange = [...priceRange];
    newPriceRange[index] = Number(e.target.value);
    setPriceRange(newPriceRange);
  };
  
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Hero Banner */}
      <div className="bg-gradient-to-r from-purple-100 to-[#a690c9] rounded-xl p-8 mb-8">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Our Menu</h1>
        <p className="text-gray-600 max-w-2xl">
          Discover our delicious selection of handcrafted cakes, premium coffee, and sweet treats. 
          All made with love and the finest ingredients.
        </p>
      </div>
      
      {/* Search and Filter Bar */}
      <div className="bg-white rounded-xl shadow-sm mb-8 p-4">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          {/* Search Input */}
          <div className="relative flex-grow max-w-xl">
            <input
              type="text"
              placeholder="Search cakes, coffee, and more..."
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#a690c9]"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          </div>
          
          {/* Sort and Filter on Mobile */}
          <div className="flex md:hidden gap-2">
            <button 
              className="flex items-center gap-2 px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-lg text-sm font-medium"
              onClick={() => setShowFilters(!showFilters)}
            >
              <FaFilter />
              Filter
            </button>
            <div className="relative">
              <select 
                className="appearance-none px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-lg text-sm font-medium pr-8"
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
              >
                <option value="popular">Popular</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="name">Name</option>
              </select>
              <FaSortAmountDown className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-500 pointer-events-none" />
            </div>
          </div>
          
          {/* Desktop Sort */}
          <div className="hidden md:flex items-center gap-2">
            <span className="text-sm text-gray-500">Sort by:</span>
            <select 
              className="border-none bg-transparent focus:outline-none text-sm cursor-pointer"
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
            >
              <option value="popular">Most Popular</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="name">Name</option>
            </select>
            {sortBy.includes('price') ? (
              sortBy === 'price-low' ? <FaSortAmountDownAlt size={14} /> : <FaSortAmountDown size={14} />
            ) : null}
            <button 
              className={`ml-4 flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium ${
                showFilters 
                  ? 'bg-[#a690c9] text-white hover:bg-[#8065b0]' 
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
              onClick={() => setShowFilters(!showFilters)}
            >
              <FaFilter />
              Filters
            </button>
          </div>
        </div>
        
        {/* Expandable Filters */}
        {showFilters && (
          <motion.div 
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="mt-4 pt-4 border-t border-gray-200"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Categories */}
              <div>
                <h3 className="font-semibold mb-3 text-sm text-gray-700">Categories</h3>
                <div className="flex flex-wrap gap-2">
                  {categories.map((category) => (
                    <button
                      key={category.id}
                      className={`px-3 py-1 rounded-full text-sm ${
                        activeCategory === category.id
                          ? 'bg-[#a690c9] text-white'
                          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      }`}
                      onClick={() => setActiveCategory(category.id)}
                    >
                      {category.name}
                    </button>
                  ))}
                </div>
              </div>
              
              {/* Price Range */}
              <div>
                <h3 className="font-semibold mb-3 text-sm text-gray-700">Price Range</h3>
                <div className="flex items-center gap-4">
                  <div className="flex-1">
                    <input
                      type="range"
                      min="0"
                      max="200"
                      value={priceRange[0]}
                      onChange={(e) => handlePriceChange(e, 0)}
                      className="w-full accent-[#a690c9]"
                    />
                    <div className="flex justify-between text-xs text-gray-500 mt-1">
                      <span>$0</span>
                      <span>$100</span>
                      <span>$200</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-sm text-gray-600">$</span>
                    <input
                      type="number"
                      min="0"
                      max={priceRange[1]}
                      value={priceRange[0]}
                      onChange={(e) => handlePriceChange(e, 0)}
                      className="w-16 p-1 border border-gray-300 rounded text-center"
                    />
                    <span className="text-sm text-gray-600">to</span>
                    <span className="text-sm text-gray-600">$</span>
                    <input
                      type="number"
                      min={priceRange[0]}
                      max="200"
                      value={priceRange[1]}
                      onChange={(e) => handlePriceChange(e, 1)}
                      className="w-16 p-1 border border-gray-300 rounded text-center"
                    />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </div>
      
      {/* Main Content - Products Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {sortedProducts.length > 0 ? (
          sortedProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))
        ) : (
          <div className="col-span-full text-center py-12">
            <h3 className="text-xl font-medium text-gray-700 mb-2">No products found</h3>
            <p className="text-gray-500">
              Try adjusting your search or filter criteria
            </p>
          </div>
        )}
      </div>
      
      {/* Pagination */}
      {sortedProducts.length > 0 && (
        <div className="mt-12 flex justify-center">
          <nav className="flex items-center gap-1">
            <button className="w-10 h-10 flex items-center justify-center rounded border border-gray-300 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed">
              &lt;
            </button>
            {[1, 2, 3].map((page) => (
              <button
                key={page}
                className={`w-10 h-10 flex items-center justify-center rounded ${
                  page === 1
                    ? 'bg-[#a690c9] text-white'
                    : 'border border-gray-300 hover:bg-gray-50'
                }`}
              >
                {page}
              </button>
            ))}
            <button className="w-10 h-10 flex items-center justify-center rounded border border-gray-300 hover:bg-gray-50">
              &gt;
            </button>
          </nav>
        </div>
      )}
    </div>
  );
};

export default MenuPage; 