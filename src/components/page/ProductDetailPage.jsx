import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { FaShoppingCart, FaHeart, FaFacebook, FaTwitter, FaInstagram, FaShare } from 'react-icons/fa';
import { motion } from 'framer-motion';

const ProductDetailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState('medium');
  const [selectedOption, setSelectedOption] = useState(null);
  const [message, setMessage] = useState('');
  
  // Dummy product data (in a real app, fetch this from Firebase)
  const [product, setProduct] = useState({
    id: id,
    name: 'Chocolate Truffle Cake',
    price: 28.99,
    category: 'Cake',
    description: 'A rich chocolate cake with smooth truffle filling, perfect for special occasions. Made with premium dark chocolate and fresh cream.',
    longDescription: 'Indulge in our signature Chocolate Truffle Cake, a decadent dessert that combines layers of moist chocolate sponge with smooth, rich truffle filling. Each cake is carefully crafted using the finest quality Belgian chocolate and fresh cream, creating an unforgettable taste experience. Whether you\'re celebrating a birthday, anniversary, or simply treating yourself, this cake is the perfect centerpiece for any occasion.',
    ingredients: ['Premium dark chocolate', 'Fresh cream', 'Organic eggs', 'Unbleached flour', 'Cane sugar', 'Madagascar vanilla extract', 'Sea salt'],
    allergens: ['Contains: Eggs, Dairy, Wheat', 'May contain traces of nuts'],
    images: [
      'https://images.unsplash.com/photo-1578985545062-69928b1d9587?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1562777717-dc6984f65a63?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1565498546237-caee5443b31d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    ],
    sizes: [
      { name: 'small', label: 'Small (6")', price: 24.99 },
      { name: 'medium', label: 'Medium (8")', price: 28.99 },
      { name: 'large', label: 'Large (10")', price: 34.99 },
    ],
    customizationOptions: [
      { id: 1, name: 'Birthday decoration', price: 3.99 },
      { id: 2, name: 'Special occasion writing', price: 2.99 },
      { id: 3, name: 'Edible flowers', price: 4.99 },
    ],
    reviews: [
      { id: 1, user: 'Sarah J.', rating: 5, comment: 'Absolutely divine! Everyone at my party loved it.' },
      { id: 2, user: 'Michael T.', rating: 4, comment: 'Great flavor, though a bit rich for some of my guests.' },
    ]
  });

  const [mainImage, setMainImage] = useState(product.images[0]);
  const [activeTab, setActiveTab] = useState('description');
  
  // Update price based on selected size
  useEffect(() => {
    const sizeOption = product.sizes.find(size => size.name === selectedSize);
    if (sizeOption) {
      setProduct(prev => ({...prev, price: sizeOption.price}));
    }
  }, [selectedSize, product.sizes]);

  const handleAddToCart = () => {
    // Add to cart logic (integrate with Firebase)
    console.log('Added to cart:', {
      product,
      quantity,
      selectedSize,
      selectedOption,
      message
    });
    
    // Show success toast or redirect to cart
    // In a real implementation, you would update cart state/data
  };

  const calculateTotalPrice = () => {
    let total = product.price * quantity;
    
    if (selectedOption) {
      const option = product.customizationOptions.find(opt => opt.id === selectedOption);
      if (option) total += option.price;
    }
    
    return total.toFixed(2);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Product Images */}
        <div className="lg:w-1/2">
          <div className="bg-white rounded-xl overflow-hidden mb-4">
            <img 
              src={mainImage} 
              alt={product.name} 
              className="w-full h-96 object-cover"
            />
          </div>
          <div className="flex gap-2 overflow-x-auto pb-2">
            {product.images.map((img, index) => (
              <div 
                key={index} 
                className={`cursor-pointer border-2 rounded-lg overflow-hidden ${mainImage === img ? 'border-[#a690c9]' : 'border-gray-200'}`}
                onClick={() => setMainImage(img)}
              >
                <img 
                  src={img} 
                  alt={`${product.name} view ${index + 1}`} 
                  className="w-24 h-24 object-cover"
                />
              </div>
            ))}
          </div>
        </div>
        
        {/* Product Info */}
        <div className="lg:w-1/2">
          <div className="bg-white rounded-xl p-6 shadow-sm mb-6">
            <h1 className="text-3xl font-bold text-gray-800 mb-2">{product.name}</h1>
            <div className="flex items-center gap-2 mb-4">
              <span className="bg-[#a690c9] text-white px-2 py-1 rounded-md text-xs">
                {product.category}
              </span>
              <div className="text-amber-400">
                {'★'.repeat(4)}{'☆'.repeat(1)}
                <span className="text-gray-500 text-sm ml-1">(12 reviews)</span>
              </div>
            </div>
            
            <p className="text-2xl font-bold text-[#a690c9] mb-4">
              ${calculateTotalPrice()}
            </p>
            
            <p className="text-gray-600 mb-6">{product.description}</p>
            
            {/* Size Selection */}
            <div className="mb-6">
              <h3 className="font-semibold text-gray-700 mb-2">Choose Size:</h3>
              <div className="flex flex-wrap gap-3">
                {product.sizes.map((size) => (
                  <button
                    key={size.name}
                    className={`px-4 py-2 rounded-full border ${
                      selectedSize === size.name
                        ? 'bg-[#a690c9] text-white border-[#a690c9]'
                        : 'border-gray-300 text-gray-700 hover:border-[#a690c9]'
                    }`}
                    onClick={() => setSelectedSize(size.name)}
                  >
                    {size.label}
                  </button>
                ))}
              </div>
            </div>
            
            {/* Customization Options */}
            <div className="mb-6">
              <h3 className="font-semibold text-gray-700 mb-2">Customization (Optional):</h3>
              <div className="flex flex-wrap gap-3">
                {product.customizationOptions.map((option) => (
                  <button
                    key={option.id}
                    className={`px-4 py-2 rounded-full border ${
                      selectedOption === option.id
                        ? 'bg-[#a690c9] text-white border-[#a690c9]'
                        : 'border-gray-300 text-gray-700 hover:border-[#a690c9]'
                    }`}
                    onClick={() => setSelectedOption(selectedOption === option.id ? null : option.id)}
                  >
                    {option.name} (+${option.price.toFixed(2)})
                  </button>
                ))}
              </div>
            </div>
            
            {/* Cake Message */}
            <div className="mb-6">
              <h3 className="font-semibold text-gray-700 mb-2">Cake Message (Optional):</h3>
              <textarea
                className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-[#a690c9] focus:border-transparent"
                placeholder="E.g., Happy Birthday John!"
                rows="2"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              ></textarea>
            </div>
            
            {/* Quantity */}
            <div className="mb-6">
              <h3 className="font-semibold text-gray-700 mb-2">Quantity:</h3>
              <div className="flex items-center">
                <button 
                  className="w-10 h-10 rounded-l-lg bg-gray-100 flex items-center justify-center text-gray-700 hover:bg-gray-200"
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                >
                  -
                </button>
                <input 
                  type="number" 
                  min="1"
                  className="w-16 h-10 text-center border-y border-gray-200"
                  value={quantity}
                  onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
                />
                <button 
                  className="w-10 h-10 rounded-r-lg bg-gray-100 flex items-center justify-center text-gray-700 hover:bg-gray-200"
                  onClick={() => setQuantity(quantity + 1)}
                >
                  +
                </button>
              </div>
            </div>
            
            {/* Action Buttons */}
            <div className="flex flex-wrap gap-3">
              <motion.button
                whileTap={{ scale: 0.95 }}
                className="flex-1 bg-[#a690c9] hover:bg-[#8065b0] text-white px-6 py-3 rounded-lg flex items-center justify-center gap-2 font-semibold transition"
                onClick={handleAddToCart}
              >
                <FaShoppingCart />
                Add to Cart
              </motion.button>
              <motion.button
                whileTap={{ scale: 0.95 }}
                className="px-4 py-3 rounded-lg border border-gray-300 text-gray-700 hover:bg-gray-50"
              >
                <FaHeart className="text-[#a690c9]" />
              </motion.button>
              <motion.button
                whileTap={{ scale: 0.95 }}
                className="px-4 py-3 rounded-lg border border-gray-300 text-gray-700 hover:bg-gray-50"
              >
                <FaShare />
              </motion.button>
            </div>
          </div>
          
          {/* Social Sharing */}
          <div className="bg-white rounded-xl p-4 shadow-sm flex items-center justify-center gap-4">
            <span className="text-gray-600 font-medium">Share:</span>
            <a href="#" className="text-blue-600 hover:text-blue-800">
              <FaFacebook size={20} />
            </a>
            <a href="#" className="text-sky-500 hover:text-sky-700">
              <FaTwitter size={20} />
            </a>
            <a href="#" className="text-pink-600 hover:text-pink-800">
              <FaInstagram size={20} />
            </a>
          </div>
        </div>
      </div>
      
      {/* Product Tabs - Description, Ingredients, Reviews */}
      <div className="mt-12 bg-white rounded-xl shadow-sm overflow-hidden">
        <div className="border-b border-gray-200">
          <div className="flex overflow-x-auto">
            <button
              className={`px-6 py-3 font-medium text-sm ${
                activeTab === 'description'
                  ? 'border-b-2 border-[#a690c9] text-[#a690c9]'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
              onClick={() => setActiveTab('description')}
            >
              Description
            </button>
            <button
              className={`px-6 py-3 font-medium text-sm ${
                activeTab === 'ingredients'
                  ? 'border-b-2 border-[#a690c9] text-[#a690c9]'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
              onClick={() => setActiveTab('ingredients')}
            >
              Ingredients
            </button>
            <button
              className={`px-6 py-3 font-medium text-sm ${
                activeTab === 'reviews'
                  ? 'border-b-2 border-[#a690c9] text-[#a690c9]'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
              onClick={() => setActiveTab('reviews')}
            >
              Reviews
            </button>
          </div>
        </div>
        
        {/* Tab Content */}
        <div className="p-6">
          {activeTab === 'description' && (
            <div>
              <p className="text-gray-700 leading-relaxed">{product.longDescription}</p>
            </div>
          )}
          
          {activeTab === 'ingredients' && (
            <div>
              <h3 className="font-semibold mb-3 text-lg">Ingredients</h3>
              <ul className="list-disc pl-5 mb-6 text-gray-700 space-y-1">
                {product.ingredients.map((ingredient, index) => (
                  <li key={index}>{ingredient}</li>
                ))}
              </ul>
              
              <h3 className="font-semibold mb-3 text-lg">Allergen Information</h3>
              <ul className="text-gray-700">
                {product.allergens.map((allergen, index) => (
                  <li key={index} className="mb-1">{allergen}</li>
                ))}
              </ul>
            </div>
          )}
          
          {activeTab === 'reviews' && (
            <div>
              <div className="flex justify-between items-center mb-6">
                <h3 className="font-semibold text-lg">Customer Reviews</h3>
                <button className="bg-[#a690c9] text-white px-4 py-2 rounded-lg text-sm hover:bg-[#8065b0] transition">
                  Write a Review
                </button>
              </div>
              
              {product.reviews.length > 0 ? (
                <div className="space-y-6">
                  {product.reviews.map((review) => (
                    <div key={review.id} className="border-b border-gray-100 pb-4">
                      <div className="flex justify-between mb-2">
                        <span className="font-medium">{review.user}</span>
                        <span className="text-amber-400">
                          {'★'.repeat(review.rating)}{'☆'.repeat(5 - review.rating)}
                        </span>
                      </div>
                      <p className="text-gray-600">{review.comment}</p>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-gray-500 italic">No reviews yet. Be the first to review!</p>
              )}
            </div>
          )}
        </div>
      </div>
      
      {/* Related Products Section */}
      <div className="mt-12">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">You May Also Like</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Sample related products - would need to fetch these dynamically */}
          {[1, 2, 3, 4].map((item) => (
            <div key={item} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <div className="h-48 bg-gray-200 animate-pulse"></div>
              <div className="p-4">
                <div className="h-6 bg-gray-200 rounded animate-pulse mb-2"></div>
                <div className="h-4 bg-gray-200 rounded animate-pulse mb-4"></div>
                <div className="flex justify-between items-center">
                  <div className="h-6 w-16 bg-gray-200 rounded animate-pulse"></div>
                  <div className="h-8 w-24 bg-gray-200 rounded-full animate-pulse"></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage; 