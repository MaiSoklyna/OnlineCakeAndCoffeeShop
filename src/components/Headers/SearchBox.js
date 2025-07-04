// Updated SearchBox.js with our custom CSS
import React, { useState } from 'react';
import { IoSearch } from 'react-icons/io5';

const SearchBox = ({ onSearch, placeholder = "Search for Product..." }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    if (onSearch) {
      onSearch(searchTerm);
    } else {
      // Default search behavior - you can customize this
      console.log('Searching for:', searchTerm);
      // Here you would typically navigate to search results or filter products
      // For now, we'll just show an alert
      if (searchTerm.trim()) {
        alert(`Searching for: ${searchTerm}`);
      }
    }
  };

  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSearch(e);
    }
  };

  return (
    <div className="search-box-container">
      <form onSubmit={handleSearch} className="flex">
        <input 
          type="text" 
          placeholder={placeholder}
          value={searchTerm}
          onChange={handleInputChange}
          onKeyPress={handleKeyPress}
          className="search-box-input"
        />
        <button 
          type="submit" 
          className="search-box-button"
        >
          <IoSearch size={18} />
        </button>
      </form>
    </div>
  );
};

export default SearchBox;