import React, { useState, useRef, useEffect } from 'react';
import { MdLocationOn } from "react-icons/md";
import { FaAngleDown } from "react-icons/fa";

const cambodianProvinces = [
  'Phnom Penh',
  'Banteay Meanchey',
  'Battambang',
  'Kampong Cham',
  'Kampong Chhnang',
  'Kampong Speu',
  'Kampong Thom',
  'Kampot',
  'Kandal',
  'Kep',
  'Koh Kong',
  'Kratie',
  'Mondulkiri',
  'Oddar Meanchey',
  'Pailin',
  'Preah Sihanouk',
  'Preah Vihear',
  'Prey Veng',
  'Pursat',
  'Ratanakiri',
  'Siem Reap',
  'Stung Treng',
  'Svay Rieng',
  'Takeo',
  'Tbong Khmum'
];

const LocationDropdown = ({ selectedLocation, onLocationChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const dropdownRef = useRef(null);
  
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
    setSearchTerm('');
  };

  const handleSelectLocation = (location) => {
    onLocationChange(location);
    setIsOpen(false);
  };
  
  // Filter provinces based on search term
  const filteredProvinces = searchTerm 
    ? cambodianProvinces.filter(province => 
        province.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : cambodianProvinces;

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="relative" ref={dropdownRef}>
      <div className="text-[#4b7bec] font-bold text-sm mb-1">
        YOUR LOCATION
        <MdLocationOn size={16} className="inline ml-1 text-[#4b7bec]" />
      </div>
      
      <div
        className="flex items-center text-[#a690c9] font-bold cursor-pointer"
        onClick={toggleDropdown}
      >
        {selectedLocation}
        <FaAngleDown className="ml-1" />
      </div>
      
      {isOpen && (
        <div className="absolute z-50 bg-white border border-gray-200 shadow-md mt-2 w-64 max-h-80 overflow-y-auto rounded">
          <div className="sticky top-0 bg-white p-2 border-b">
            <input
              type="text"
              placeholder="Search province..."
              className="w-full p-2 border border-gray-200 rounded text-sm"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              autoFocus
            />
          </div>
          
          {filteredProvinces.length > 0 ? (
            filteredProvinces.map((province) => (
              <div
                key={province}
                onClick={() => handleSelectLocation(province)}
                className={`cursor-pointer px-4 py-2 border-b last:border-b-0 text-sm hover:bg-gray-100 ${
                  selectedLocation === province ? 'text-[#a690c9] font-bold' : 'text-gray-800'
                }`}
              >
                {province}
              </div>
            ))
          ) : (
            <div className="px-4 py-2 text-sm text-gray-500">No provinces found</div>
          )}
        </div>
      )}
    </div>
  );
};

export default LocationDropdown; 