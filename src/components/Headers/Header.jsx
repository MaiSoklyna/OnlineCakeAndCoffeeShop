import React, { useContext, useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Logo from '../../../src/asset/logo.png';
import { Button } from 'react-bootstrap';
import SearchBox from './SearchBox';
import { FaUser, FaAngleDown, FaSearch } from "react-icons/fa";
import { IoBagHandleSharp } from "react-icons/io5";
import { FiMenu, FiX } from 'react-icons/fi';
import { FaLock } from "react-icons/fa";
import { MdLocationOn } from "react-icons/md";
import LocationDropdown from './LocationDropdown';
import { MyContext } from '../../App';
import { useAuth } from '../../auth/AuthContext';

const Header = () => {
    const context = useContext(MyContext);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [showLocationDropdown, setShowLocationDropdown] = useState(false);
    const [showUserDropdown, setShowUserDropdown] = useState(false);
    const { currentUser, loading, logout, isAdmin } = useAuth();
    const navigate = useNavigate();
    const [isUserAdmin, setIsUserAdmin] = useState(false);
    const [location, setLocation] = useState('Kratie');
    
    // Check if user is admin
    useEffect(() => {
        if (currentUser && currentUser.email) {
            setIsUserAdmin(isAdmin());
        } else {
            setIsUserAdmin(false);
        }
    }, [currentUser, isAdmin]);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };
    
    const toggleUserDropdown = () => {
        setShowUserDropdown(!showUserDropdown);
    };
    
    // Close dropdown when clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            const dropdown = document.getElementById('userDropdownContainer');
            if (dropdown && !dropdown.contains(event.target)) {
                setShowUserDropdown(false);
            }
        };
        
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);
    
    const handleLocationChange = (newLocation) => {
        setLocation(newLocation);
    };
    
    const handleLogout = async () => {
        try {
            await logout();
            navigate('/login');
        } catch (error) {
            console.error('Failed to log out:', error);
        }
    };

    // If not authenticated
    if (!currentUser) {
        return (
            <header className="header" style={{ boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>
                <div className="container">
                    <div className="d-flex align-items-center justify-content-between py-3">
                        <div className="logoWrapper">
                            <Link to={'/'}>
                                <img src={Logo} alt="logo" style={{ maxHeight: '60px' }} />
                            </Link>
                        </div>
                        
                        <div className="d-flex align-items-center">
                            <Link to="/login" className="btn me-2" style={{ backgroundColor: 'transparent', color: 'red', borderColor: '#a690c9' }}>
                                Login
                            </Link>
                            <Link to="/signup" className="btn" style={{ backgroundColor: '#a690c9', color: 'white' }}>
                                Sign Up
                            </Link>
                        </div>
                    </div>
                </div>
            </header>
        );
    }

    return (
        <>
            {/* Welcome bar */}
            <div className="headerWrapper">
                <div className="top-strip d-flex align-items-center justify-content-center" style={{ backgroundColor: '#a690c9', padding: '8px 0', color: 'white' }}>
                    <div className="container">
                        <p className="mb-0 mt-0 text-center">
                            Welcome To My Cake And Coffee Shop
                        </p>
                    </div>
                </div>
            </div>

            {/* Main Header */}
            <div className="position-relative">
                <div className="container">
                <div className="flex items-center justify-between gap-4 px-4 py-3">
                  {/* Logo */}
                  <div className="flex-shrink-0">
                            <Link to={'/'}>
                      <img src={Logo} alt="logo" className="h-[60px]" />
                            </Link>
                        </div>

                  {/* Location Dropdown Component */}
                  <div className="hidden md:block">
                    <LocationDropdown 
                      selectedLocation={location}
                      onLocationChange={handleLocationChange}
                    />
                        </div>

                  {/* Search Bar - Takes most space */}
                  <div className="flex-grow max-w-xl">
                    <div className="flex rounded-full overflow-hidden shadow-sm">
                      <input
                        type="text"
                        placeholder="Search for Products..."
                        className="flex-grow bg-[#e7dbff] text-sm px-4 py-2 border border-[#a690c9] rounded-l-full focus:outline-none"
                      />
                      <button className="bg-[#a690c9] text-white px-4 rounded-r-full">
                        <FaSearch />
                                                </button>
                                    </div>
                                </div>

                  {/* User Icon */}
                  <div className="hidden md:flex items-center gap-4">
                    <div className="dropdown relative" id="userDropdownContainer">
                      <div 
                        className="flex items-center gap-2 cursor-pointer" 
                        onClick={toggleUserDropdown}
                      >
                        <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center">
                          <FaUser size={18} className="text-[#a690c9]" />
                        </div>
                        <div className="flex flex-col">
                          <span className="text-sm font-medium">
                            {currentUser?.displayName || currentUser?.email?.split('@')[0] || 'My Account'}
                          </span>
                          <span className="text-xs text-gray-500">My Account</span>
                        </div>
                        <FaAngleDown className="text-gray-500" />
                      </div>
                      {showUserDropdown && (
                        <ul className="dropdown-menu dropdown-menu-end shadow border-0 py-2 absolute right-0 top-full mt-1 bg-white rounded z-10 w-48">
                          <li><Link className="dropdown-item py-2 px-4 block hover:bg-gray-100" to="/profile">My Profile</Link></li>
                          <li><Link className="dropdown-item py-2 px-4 block hover:bg-gray-100" to="/orders">My Orders</Link></li>
                          <li><Link className="dropdown-item py-2 px-4 block hover:bg-gray-100" to="/wishlist">Wishlist</Link></li>
                          {isUserAdmin && (
                            <li><Link className="dropdown-item py-2 px-4 block hover:bg-gray-100" to="/admin">Admin Dashboard</Link></li>
                          )}
                          <li><hr className="dropdown-divider" /></li>
                          <li>
                            <button 
                              className="dropdown-item py-2 px-4 block hover:bg-gray-100 w-full text-left" 
                              onClick={handleLogout}
                            >
                              Logout
                            </button>
                          </li>
                        </ul>
                      )}
                    </div>

                    {/* Price */}
                    <div className="font-bold">$333.29</div>

                                {/* Cart */}
                    <Link to="/cart" className="relative">
                      <IoBagHandleSharp size={20} className="text-[#a690c9]" />
                      <span className="absolute -top-2 -right-2 bg-[#a690c9] text-white text-[10px] px-1.5 py-0.5 rounded-full">
                                                1
                                            </span>
                    </Link>
                                        </div>

                  {/* Mobile Menu Toggle */}
                  <div className="md:hidden">
                    <button onClick={toggleMenu} className="flex items-center text-[#a690c9]">
                      {isMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
                    </button>
                                </div>
                            </div>

                {/* Mobile Dropdown Menu */}
                {isMenuOpen && (
                  <div className="md:hidden px-4 py-2 border-t border-gray-200">
                    {/* Mobile Location */}
                    <div className="mb-3">
                      <LocationDropdown 
                        selectedLocation={location}
                        onLocationChange={handleLocationChange}
                      />
                    </div>
                    
                    {/* Mobile User Options */}
                    <div className="flex items-center justify-between mb-3">
                      <Link to="/profile" className="flex items-center gap-2 text-gray-800">
                        <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center">
                          <FaUser size={14} className="text-[#a690c9]" />
                        </div>
                        <div className="flex flex-col">
                          <span className="text-sm font-medium">
                            {currentUser?.displayName || currentUser?.email?.split('@')[0] || 'My Account'}
                          </span>
                          <span className="text-xs text-gray-500">View Profile</span>
                        </div>
                      </Link>
                      <div className="font-bold">$333.29</div>
                    </div>

                    <Link to="/cart" className="flex items-center gap-2 mb-3 text-gray-800">
                      <IoBagHandleSharp size={18} className="text-[#a690c9]" />
                      <span>Cart</span>
                                            </Link>

                                <button 
                      className="w-full py-2 bg-red-500 text-white rounded mb-2" 
                                    onClick={handleLogout}
                                >
                                    Logout
                                </button>
                            </div>
                )}

                {/* Categories Navigation - Below Header */}
                <div className="w-full bg-[#a690c9] text-white mt-2 rounded-md">
                  <div className="container mx-auto">
                    <div className="flex items-center overflow-x-auto">
                      <div className="px-4 py-2 flex items-center bg-[#9472bf] whitespace-nowrap">
                        <FiMenu className="mr-2" />
                        ALL CATEGORIES
                </div>
                      <div className="flex items-center space-x-6 px-4 overflow-x-auto">
                        <Link to="/" className="text-white whitespace-nowrap py-2">HOME</Link>
                        <Link to="/shop" className="text-white whitespace-nowrap py-2">SHOP</Link>
                        <Link to="/category/meats-seafood" className="text-white whitespace-nowrap py-2">MEATS & SEAFOOD</Link>
                        <Link to="/category/bakery" className="text-white whitespace-nowrap py-2">BAKERY</Link>
                        <Link to="/category/beverages" className="text-white whitespace-nowrap py-2">BEVERAGES</Link>
            </div>
                    </div>
                    </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Header;