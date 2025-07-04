import React, { useContext, useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Logo from '../../../src/asset/logo.png';
import { Button } from 'react-bootstrap';
import SearchBox from './SearchBox';
import { FaUser, FaAngleDown } from "react-icons/fa";
import { IoBagHandleSharp } from "react-icons/io5";
import { FiMenu, FiX } from 'react-icons/fi';
import { FaLock } from "react-icons/fa";
import { MyContext } from '../../App';
import { useAuth } from '../../auth/AuthContext';

const Header = () => {
    const context = useContext(MyContext);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const { currentUser, loading, logout, isAdmin } = useAuth();
    const navigate = useNavigate();
    const [isUserAdmin, setIsUserAdmin] = useState(false);
    
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
            <div className="headerWrapper">
                <div className="top-strip d-flex bg-sky-500 align-items-center justify-content-center">
                    <div className="container">
                        <p className="mb-0 mt-0 text-capitalize text-center">
                            Welcome to my cake and coffee shop - Free delivery on orders over $50
                        </p>
                    </div>
                </div>
            </div>

            <header className="header">
                <div className="container">
                    <div className="d-flex align-items-center justify-content-between">
                        <div className="logoWrapper">
                            <Link to={'/'}>
                                <img src={Logo} alt="logo" />
                            </Link>
                        </div>

                        {/* Mobile Menu Button */}
                        <div className="d-block d-md-none">
                            <button 
                                className="circle" 
                                style={{ border: 'none', outline: 'none', background: 'transparent' }}
                                onClick={toggleMenu}
                            >
                                {isMenuOpen ? (
                                    <FiX size={24} color="#a690c9" />
                                ) : (
                                    <FiMenu size={24} color="#a690c9" />
                                )}
                            </button>
                        </div>

                        {/* Desktop Navigation */}
                        <div className="col-sm-10 d-none d-md-flex align-items-center justify-items-center part2">
                            <SearchBox />

                            <div className="d-flex align-items-center justify-content-center">
                                {/* User Account Menu */}
                                <div className="position-relative" style={{ marginRight: '20px' }}>
                                    <div className="dropdown">
                                        <button 
                                            className="circle dropdown-toggle d-flex align-items-center" 
                                            style={{ border: 'none', outline: 'none', background: 'transparent' }}
                                            id="userDropdown" 
                                            data-bs-toggle="dropdown" 
                                            aria-expanded="false"
                                        >
                                            <FaUser size={40} color="#a690c9" />
                                            <span className="ms-2 d-none d-lg-inline">
                                                {currentUser?.displayName || currentUser?.email?.split('@')[0] || 'My Account'}
                                            </span>
                                            <FaAngleDown className="ms-1 d-none d-lg-inline" />
                                        </button>
                                        <ul className="dropdown-menu" aria-labelledby="userDropdown">
                                            <li><Link className="dropdown-item" to="/account">My Profile</Link></li>
                                            <li><Link className="dropdown-item" to="/orders">My Orders</Link></li>
                                            <li><Link className="dropdown-item" to="/wishlist">Wishlist</Link></li>
                                            {isUserAdmin && (
                                                <li><Link className="dropdown-item" to="/admin">Admin Dashboard</Link></li>
                                            )}
                                            <li><hr className="dropdown-divider" /></li>
                                            <li>
                                                <button 
                                                    className="dropdown-item" 
                                                    onClick={handleLogout}
                                                >
                                                    Logout
                                                </button>
                                            </li>
                                        </ul>
                                    </div>
                                </div>

                                {/* Cart */}
                                <div className="ml-auto cartTable">
                                    <span className="price">$333.29</span>
                                    <Button
                                        className="circle btn1 ml-2 cart-btn"
                                        style={{
                                            border: 'none',
                                            marginLeft: '20px',
                                            outline: 'none',
                                            background: 'transparent'
                                        }}
                                    >
                                        <div style={{ position: 'relative' }}>
                                            <IoBagHandleSharp size={40} color="#a690c9" />
                                            <span
                                                className="count d-flex align-items-center justify-content-center"
                                                style={{ color: "#a690c9" }}
                                            >
                                                1
                                            </span>
                                        </div>
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Mobile Menu */}
                    {isMenuOpen && (
                        <div className="mobile-menu d-md-none" style={{ marginTop: '20px', borderTop: '1px solid #eee', paddingTop: '20px' }}>
                            <SearchBox />
                            
                            <nav className="mt-3">
                                <ul className="list-unstyled">
                                    <li className="mb-2">
                                        <Link to="/" className="text-decoration-none" style={{ color: '#333', display: 'block', padding: '8px 0' }}>Home</Link>
                                    </li>
                                    <li className="mb-2">
                                        <Link to="/category/cakes" className="text-decoration-none" style={{ color: '#333', display: 'block', padding: '8px 0' }}>Cakes</Link>
                                    </li>
                                    <li className="mb-2">
                                        <Link to="/category/coffee" className="text-decoration-none" style={{ color: '#333', display: 'block', padding: '8px 0' }}>Coffee</Link>
                                    </li>
                                    <li className="mb-2">
                                        <Link to="/category/pastries" className="text-decoration-none" style={{ color: '#333', display: 'block', padding: '8px 0' }}>Pastries</Link>
                                    </li>
                                    <li className="mb-2">
                                        <Link to="/about" className="text-decoration-none" style={{ color: '#333', display: 'block', padding: '8px 0' }}>About Us</Link>
                                    </li>
                                    <li className="mb-2">
                                        <Link to="/contact" className="text-decoration-none" style={{ color: '#333', display: 'block', padding: '8px 0' }}>Contact</Link>
                                    </li>
                                    {isUserAdmin && (
                                        <li className="mb-2">
                                            <Link 
                                                to="/admin" 
                                                className="text-decoration-none d-flex align-items-center" 
                                                style={{ 
                                                    color: '#a690c9', 
                                                    display: 'block', 
                                                    padding: '8px 0',
                                                    fontWeight: 'bold'
                                                }}
                                            >
                                                <FaLock className="me-2" /> Admin Dashboard
                                            </Link>
                                        </li>
                                    )}
                                </ul>
                            </nav>
                            
                            <div className="mobile-buttons mt-3 d-flex flex-wrap" style={{ borderTop: '1px solid #eee', paddingTop: '15px' }}>
                                <Link to="/account" className="btn mb-2 me-2" style={{ backgroundColor: '#a690c9', color: 'white' }}>
                                    <FaUser className="me-2" /> My Account
                                </Link>
                                <Link to="/cart" className="btn mb-2" style={{ backgroundColor: '#a690c9', color: 'white' }}>
                                    <IoBagHandleSharp className="me-2" /> Cart ($333.29)
                                </Link>
                                <button 
                                    className="btn mb-2 w-100 mt-2" 
                                    onClick={handleLogout}
                                    style={{ backgroundColor: '#dc3545', color: 'white' }}
                                >
                                    Logout
                                </button>
                            </div>
                        </div>
                    )}
                </div>
            </header>

            {/* Main Navigation */}
            <nav className="main-navigation d-none d-md-block" style={{ backgroundColor: '#fff', borderBottom: '1px solid #eee', boxShadow: '0 2px 5px rgba(0,0,0,0.05)' }}>
                <div className="container">
                    <ul className="d-flex list-unstyled mb-0">
                        <li>
                            <Link to="/" className="nav-link" style={{ padding: '15px 20px', color: '#333', display: 'block', textDecoration: 'none', borderBottom: '2px solid transparent', transition: 'all 0.2s' }}>Home</Link>
                        </li>
                        <li>
                            <Link to="/category/cakes" className="nav-link" style={{ padding: '15px 20px', color: '#333', display: 'block', textDecoration: 'none', borderBottom: '2px solid transparent', transition: 'all 0.2s' }}>Cakes</Link>
                        </li>
                        <li>
                            <Link to="/category/coffee" className="nav-link" style={{ padding: '15px 20px', color: '#333', display: 'block', textDecoration: 'none', borderBottom: '2px solid transparent', transition: 'all 0.2s' }}>Coffee</Link>
                        </li>
                        <li>
                            <Link to="/category/pastries" className="nav-link" style={{ padding: '15px 20px', color: '#333', display: 'block', textDecoration: 'none', borderBottom: '2px solid transparent', transition: 'all 0.2s' }}>Pastries</Link>
                        </li>
                        <li>
                            <Link to="/category/gifts" className="nav-link" style={{ padding: '15px 20px', color: '#333', display: 'block', textDecoration: 'none', borderBottom: '2px solid transparent', transition: 'all 0.2s' }}>Gift Sets</Link>
                        </li>
                        <li>
                            <Link to="/category/specials" className="nav-link" style={{ padding: '15px 20px', color: '#333', display: 'block', textDecoration: 'none', borderBottom: '2px solid transparent', transition: 'all 0.2s' }}>Specials</Link>
                        </li>
                        <li>
                            <Link to="/about" className="nav-link" style={{ padding: '15px 20px', color: '#333', display: 'block', textDecoration: 'none', borderBottom: '2px solid transparent', transition: 'all 0.2s' }}>About Us</Link>
                        </li>
                        <li>
                            <Link to="/contact" className="nav-link" style={{ padding: '15px 20px', color: '#333', display: 'block', textDecoration: 'none', borderBottom: '2px solid transparent', transition: 'all 0.2s' }}>Contact</Link>
                        </li>
                        {isUserAdmin && (
                            <li>
                                <Link 
                                    to="/admin" 
                                    className="nav-link d-flex align-items-center" 
                                    style={{ 
                                        padding: '15px 20px', 
                                        color: '#a690c9', 
                                        fontWeight: 'bold',
                                        display: 'flex', 
                                        textDecoration: 'none', 
                                        borderBottom: '2px solid #a690c9'
                                    }}
                                >
                                    <FaLock className="me-1" /> Admin
                                </Link>
                            </li>
                        )}
                    </ul>
                </div>
            </nav>
            
            <div className="hero-section" style={{ backgroundColor: '#f9f6ff' }}>
                <div className="hero-content">
                    <h1>Delicious Cakes & Coffee</h1>
                    <p>Enjoy our handcrafted cakes and premium coffee!</p>
                    <button className="cta-button">Order Now</button>
                </div>
            </div>

            {/* Featured Categories */}
            <div className="featured-categories">
                <h2>Featured Categories</h2>
                <div className="category-grid">
                    <div className="category-item">
                        <h3>Birthday Cakes</h3>
                        <p>Custom birthday cakes for any occasion!</p>
                        <Link to="/category/birthday" className="shop-link" style={{ color: '#a690c9', fontWeight: '500', textDecoration: 'none' }}>
                            Shop Now →
                        </Link>
                    </div>
                    <div className="category-item">
                        <h3>Coffee Specials</h3>
                        <p>Try our specialty coffee today!</p>
                        <Link to="/category/coffee" className="shop-link" style={{ color: '#a690c9', fontWeight: '500', textDecoration: 'none' }}>
                            Shop Now →
                        </Link>
                    </div>
                </div>
            </div>

            {/* Promotional Banner */}
            <div className="promo-banner">
                <h2>Special Offer!</h2>
                <p>Get 10% off on your first order!</p>
                <Link to="/signup" className="btn" style={{ backgroundColor: '#fff', color: '#a690c9', fontWeight: '500', padding: '10px 20px', borderRadius: '4px' }}>
                    Sign Up Now
                </Link>
            </div>

            {/* Testimonials */}
            <div className="testimonials">
                <h2>What Our Customers Say</h2>
                <div className="testimonial-grid">
                    <div className="testimonial-item">
                        <p className="testimonial-text" style={{ fontStyle: 'italic', marginBottom: '10px' }}>
                            "Amazing cakes and coffee! The best I've ever had."
                        </p>
                        <p className="testimonial-author" style={{ fontWeight: '500' }}>- Jane D.</p>
                    </div>
                    <div className="testimonial-item">
                        <p className="testimonial-text" style={{ fontStyle: 'italic', marginBottom: '10px' }}>
                            "Best experience ever! Will definitely come back again."
                        </p>
                        <p className="testimonial-author" style={{ fontWeight: '500' }}>- John S.</p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Header;