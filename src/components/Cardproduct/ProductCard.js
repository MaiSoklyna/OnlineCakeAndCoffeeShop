import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaHeart, FaRegHeart, FaShoppingCart } from 'react-icons/fa';

const ProductCard = ({ product }) => {
  const [isFavorite, setIsFavorite] = useState(false);
  
  const toggleFavorite = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsFavorite(!isFavorite);
  };

  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <div className="relative">
        {/* Product Image */}
        <Link to={`/product/${product.id}`}>
          <img 
            src={product.image} 
            alt={product.name}
            className="w-full h-48 object-cover"
          />
        </Link>
        
        {/* Favorite Button */}
        <button 
          className="absolute top-2 right-2 p-2 rounded-full bg-white bg-opacity-70 hover:bg-opacity-100 transition-all duration-200"
          onClick={toggleFavorite}
        >
          {isFavorite ? (
            <FaHeart className="text-red-500" />
          ) : (
            <FaRegHeart className="text-gray-600" />
          )}
        </button>
        
        {/* Category Badge */}
        {product.category && (
          <span className="absolute top-2 left-2 text-xs bg-[#a690c9] text-white px-2 py-1 rounded-md">
            {product.category}
          </span>
        )}
      </div>
      
      <div className="p-4">
        {/* Product Name */}
        <Link to={`/product/${product.id}`}>
          <h3 className="font-bold text-lg mb-1 text-violet-800 hover:text-[#a690c9] transition-colors">
            {product.name}
          </h3>
        </Link>
        
        {/* Product Description */}
        <p className="text-gray-600 text-sm mb-3 line-clamp-2">{product.description}</p>
        
        {/* Product Price and Add to Cart */}
        <div className="flex justify-between items-center">
          <span className="font-bold text-[#a690c9]">${product.price.toFixed(2)}</span>
          <button className="bg-[#a690c9] hover:bg-[#8065b0] text-white px-3 py-2 rounded-full text-sm transition duration-300 flex items-center gap-1">
            <FaShoppingCart size={14} />
            <span>Add to Cart</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
