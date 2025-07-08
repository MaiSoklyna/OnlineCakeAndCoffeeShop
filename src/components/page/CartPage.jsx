import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaPlus, FaMinus, FaTrash, FaArrowLeft, FaShoppingCart } from 'react-icons/fa';
import { motion } from 'framer-motion';

const CartPage = () => {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: 'Chocolate Truffle Cake',
      price: 28.99,
      quantity: 1,
      image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      customization: 'Happy Birthday Message'
    },
    {
      id: 2,
      name: 'Vanilla Bean Latte',
      price: 4.99,
      quantity: 2,
      image: 'https://images.unsplash.com/photo-1497636577773-f1231844b336?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 3,
      name: 'Red Velvet Cupcake',
      price: 3.99,
      quantity: 3,
      image: 'https://images.unsplash.com/photo-1614707267537-b85aaf00c4b7?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
    }
  ]);

  const [couponCode, setCouponCode] = useState('');
  const [discountApplied, setDiscountApplied] = useState(false);
  const [discountAmount, setDiscountAmount] = useState(0);
  
  const updateQuantity = (id, newQuantity) => {
    if (newQuantity < 1) return;
    
    setCartItems(cartItems.map(item => 
      item.id === id ? { ...item, quantity: newQuantity } : item
    ));
  };
  
  const removeItem = (id) => {
    setCartItems(cartItems.filter(item => item.id !== id));
  };
  
  const applyCoupon = () => {
    // In a real app, this would validate the coupon code with Firebase
    if (couponCode.toLowerCase() === 'cake10') {
      setDiscountApplied(true);
      setDiscountAmount(calculateSubtotal() * 0.1); // 10% discount
    } else {
      alert('Invalid coupon code');
    }
  };
  
  const calculateSubtotal = () => {
    return cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
  };
  
  const calculateTax = () => {
    return calculateSubtotal() * 0.08; // 8% tax
  };
  
  const calculateShipping = () => {
    return calculateSubtotal() > 50 ? 0 : 5.99;
  };
  
  const calculateTotal = () => {
    return calculateSubtotal() + calculateTax() + calculateShipping() - discountAmount;
  };

  // Check for empty cart
  if (cartItems.length === 0) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="bg-white rounded-xl shadow-sm p-8 text-center">
          <div className="flex justify-center mb-6">
            <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center">
              <FaShoppingCart className="text-gray-400" size={36} />
            </div>
          </div>
          <h2 className="text-2xl font-bold mb-2 text-gray-800">Your cart is empty</h2>
          <p className="text-gray-600 mb-6">Looks like you haven't added any items to your cart yet.</p>
          <Link 
            to="/menu" 
            className="inline-flex items-center px-6 py-3 bg-[#a690c9] text-white rounded-lg hover:bg-[#8065b0] transition-colors"
          >
            <FaArrowLeft className="mr-2" />
            Browse Our Menu
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-800">Your Shopping Cart</h1>
        <Link to="/menu" className="text-[#a690c9] hover:underline flex items-center">
          <FaArrowLeft className="mr-1" /> Continue Shopping
        </Link>
      </div>
      
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Cart Items */}
        <div className="lg:w-2/3">
          <div className="bg-white rounded-xl shadow-sm overflow-hidden mb-6">
            <div className="border-b border-gray-200">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="py-3 px-4 text-left text-sm font-medium text-gray-500">Product</th>
                    <th className="py-3 px-4 text-center text-sm font-medium text-gray-500 hidden sm:table-cell">Price</th>
                    <th className="py-3 px-4 text-center text-sm font-medium text-gray-500">Quantity</th>
                    <th className="py-3 px-4 text-right text-sm font-medium text-gray-500">Subtotal</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {cartItems.map((item) => (
                    <motion.tr 
                      key={item.id}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      layout
                    >
                      <td className="py-4 px-4">
                        <div className="flex items-center">
                          <img 
                            src={item.image} 
                            alt={item.name}
                            className="h-16 w-16 object-cover rounded-md mr-4"
                          />
                          <div>
                            <h3 className="font-medium text-gray-800">{item.name}</h3>
                            {item.customization && (
                              <p className="text-sm text-gray-500">{item.customization}</p>
                            )}
                            <p className="text-sm text-gray-500 sm:hidden mt-1">
                              ${item.price.toFixed(2)}
                            </p>
                            <button 
                              className="text-red-500 hover:text-red-700 text-sm flex items-center mt-1"
                              onClick={() => removeItem(item.id)}
                            >
                              <FaTrash size={12} className="mr-1" /> Remove
                            </button>
                          </div>
                        </div>
                      </td>
                      <td className="py-4 px-4 text-center hidden sm:table-cell">
                        ${item.price.toFixed(2)}
                      </td>
                      <td className="py-4 px-4">
                        <div className="flex items-center justify-center">
                          <button 
                            className="w-8 h-8 rounded-l-lg bg-gray-100 flex items-center justify-center text-gray-700 hover:bg-gray-200"
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          >
                            <FaMinus size={12} />
                          </button>
                          <input 
                            type="number" 
                            min="1"
                            className="w-12 h-8 text-center border-y border-gray-200"
                            value={item.quantity}
                            onChange={(e) => updateQuantity(item.id, parseInt(e.target.value) || 1)}
                          />
                          <button 
                            className="w-8 h-8 rounded-r-lg bg-gray-100 flex items-center justify-center text-gray-700 hover:bg-gray-200"
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          >
                            <FaPlus size={12} />
                          </button>
                        </div>
                      </td>
                      <td className="py-4 px-4 text-right font-medium">
                        ${(item.price * item.quantity).toFixed(2)}
                      </td>
                    </motion.tr>
                  ))}
                </tbody>
              </table>
            </div>
            
            {/* Coupon Code */}
            <div className="p-4 border-t border-gray-200">
              <div className="flex flex-col sm:flex-row items-center gap-2">
                <div className="relative flex-grow">
                  <input
                    type="text"
                    placeholder="Coupon Code"
                    className="w-full pl-4 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#a690c9]"
                    value={couponCode}
                    onChange={(e) => setCouponCode(e.target.value)}
                    disabled={discountApplied}
                  />
                </div>
                <button
                  className={`px-4 py-2 rounded-lg text-sm font-medium ${
                    discountApplied 
                      ? 'bg-green-100 text-green-800 cursor-not-allowed'
                      : 'bg-[#a690c9] hover:bg-[#8065b0] text-white'
                  }`}
                  onClick={applyCoupon}
                  disabled={discountApplied}
                >
                  {discountApplied ? 'Applied' : 'Apply Coupon'}
                </button>
              </div>
            </div>
          </div>
          
          {/* Product Suggestions */}
          <div className="bg-white rounded-xl shadow-sm p-6 mb-6">
            <h3 className="text-lg font-medium mb-4 text-gray-800">You might also like</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {/* Placeholder product suggestions */}
              {[1, 2, 3].map((item) => (
                <div key={item} className="flex items-center">
                  <div className="h-14 w-14 rounded-md bg-gray-200 flex-shrink-0 mr-3"></div>
                  <div className="flex-grow">
                    <p className="font-medium text-sm text-gray-800">Product Name</p>
                    <p className="text-sm text-[#a690c9]">$12.99</p>
                  </div>
                  <button className="px-2 py-1 bg-gray-100 hover:bg-gray-200 rounded-md text-xs">
                    Add
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        {/* Order Summary */}
        <div className="lg:w-1/3">
          <div className="bg-white rounded-xl shadow-sm p-6 sticky top-6">
            <h2 className="text-lg font-bold mb-4 text-gray-800">Order Summary</h2>
            
            <div className="space-y-3 mb-4">
              <div className="flex justify-between text-gray-600">
                <span>Subtotal ({cartItems.reduce((acc, item) => acc + item.quantity, 0)} items)</span>
                <span>${calculateSubtotal().toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-gray-600">
                <span>Shipping</span>
                <span>${calculateShipping().toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-gray-600">
                <span>Tax</span>
                <span>${calculateTax().toFixed(2)}</span>
              </div>
              
              {discountApplied && (
                <div className="flex justify-between text-green-600">
                  <span>Discount (10%)</span>
                  <span>-${discountAmount.toFixed(2)}</span>
                </div>
              )}
              
              <div className="border-t border-gray-200 pt-3 mt-3">
                <div className="flex justify-between font-bold text-gray-800">
                  <span>Total</span>
                  <span>${calculateTotal().toFixed(2)}</span>
                </div>
              </div>
            </div>
            
            <Link 
              to="/checkout" 
              className="w-full bg-[#a690c9] hover:bg-[#8065b0] text-white py-3 rounded-lg text-center block font-medium"
            >
              Proceed to Checkout
            </Link>
            
            <div className="mt-4 text-center">
              <p className="text-sm text-gray-500">
                We accept all major credit cards and PayPal
              </p>
              <div className="flex justify-center mt-2 space-x-2">
                {/* Placeholder for payment icons */}
                <div className="w-10 h-6 bg-gray-200 rounded"></div>
                <div className="w-10 h-6 bg-gray-200 rounded"></div>
                <div className="w-10 h-6 bg-gray-200 rounded"></div>
                <div className="w-10 h-6 bg-gray-200 rounded"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage; 