import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaCoffee, FaBirthdayCake, FaShoppingBag } from 'react-icons/fa';

const HomePage = () => {
    return (
        <>
            {/* Hero Section */}
            <section className="relative h-[80vh] bg-cover bg-center flex items-center" 
                style={{ backgroundImage: "url('https://images.unsplash.com/photo-1559925393-8be0ec4767c8?ixlib=rb-1.2.1&auto=format&fit=crop&w=1951&q=80')" }}>
                <div className="absolute inset-0 bg-violet-900 bg-opacity-70"></div>
                <div className="container mx-auto px-4 z-10 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-white"
                    >
                        <h1 className="text-4xl md:text-6xl font-bold mb-4 text-white drop-shadow-lg">Delicious Cakes & Premium Coffee</h1>
                        <p className="text-xl md:text-2xl mb-8 text-violet-100">Experience the perfect blend of sweetness and warmth</p>
                        <Link to="/menu" className="bg-primary hover:bg-primary-dark text-white font-bold py-3 px-8 rounded-full transition duration-300 shadow-violet">
                            View Our Menu
                        </Link>
                    </motion.div>
                </div>
            </section>

            {/* Welcome Section */}
            <section className="py-16 bg-gradient-to-b from-violet-50 to-white">
                <div className="container mx-auto px-4">
                    <motion.div 
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 1 }}
                        className="text-center max-w-3xl mx-auto"
                    >
                        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800">Welcome to Our Cake & Coffee Shop</h2>
                        <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
                        <p className="text-lg text-gray-600 mb-8">
                            At our shop, we believe in creating moments of joy through delicious treats and perfect brews. 
                            Every cake is baked with love, and every coffee cup is crafted with care.
                        </p>
                        <div className="flex flex-col md:flex-row justify-center items-center gap-6">
                            <Link to="/about" className="bg-transparent hover:bg-primary text-primary hover:text-white border border-primary font-semibold py-2 px-6 rounded-full transition duration-300">
                                Learn More About Us
                            </Link>
                            <Link to="/contact" className="bg-transparent hover:bg-primary text-primary hover:text-white border border-primary font-semibold py-2 px-6 rounded-full transition duration-300">
                                Contact Us
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Featured Categories */}
            <section className="py-16">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold text-center mb-4 text-gray-800">Our Specialties</h2>
                    <div className="w-24 h-1 bg-primary mx-auto mb-12"></div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <motion.div 
                            whileHover={{ y: -10 }}
                            className="bg-white rounded-lg shadow-lg overflow-hidden border-t-4 border-primary"
                        >
                            <div className="p-6 text-center">
                                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4 shadow-violet">
                                    <FaBirthdayCake className="text-white text-2xl" />
                                </div>
                                <h3 className="text-xl font-bold mb-2 text-violet-800">Specialty Cakes</h3>
                                <p className="text-gray-600 mb-4">Handcrafted cakes for every occasion, made with the finest ingredients.</p>
                                <Link to="/category/cakes" className="text-primary hover:text-primary-dark font-medium inline-flex items-center">
                                    Explore Cakes <span className="ml-1">→</span>
                                </Link>
                            </div>
                        </motion.div>

                        <motion.div 
                            whileHover={{ y: -10 }}
                            className="bg-white rounded-lg shadow-lg overflow-hidden border-t-4 border-primary"
                        >
                            <div className="p-6 text-center">
                                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4 shadow-violet">
                                    <FaCoffee className="text-white text-2xl" />
                                </div>
                                <h3 className="text-xl font-bold mb-2 text-violet-800">Premium Coffee</h3>
                                <p className="text-gray-600 mb-4">Expertly brewed coffee from ethically sourced beans around the world.</p>
                                <Link to="/category/coffee" className="text-primary hover:text-primary-dark font-medium inline-flex items-center">
                                    Discover Coffee <span className="ml-1">→</span>
                                </Link>
                            </div>
                        </motion.div>

                        <motion.div 
                            whileHover={{ y: -10 }}
                            className="bg-white rounded-lg shadow-lg overflow-hidden border-t-4 border-primary"
                        >
                            <div className="p-6 text-center">
                                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4 shadow-violet">
                                    <FaShoppingBag className="text-white text-2xl" />
                                </div>
                                <h3 className="text-xl font-bold mb-2 text-violet-800">Gift Sets</h3>
                                <p className="text-gray-600 mb-4">Perfect combinations of our treats, packaged beautifully for any occasion.</p>
                                <Link to="/category/gifts" className="text-primary hover:text-primary-dark font-medium inline-flex items-center">
                                    Browse Gift Sets <span className="ml-1">→</span>
                                </Link>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Featured Products */}
            <section className="py-16 bg-gradient-to-b from-white to-violet-50">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold text-center mb-4 text-gray-800">Featured Products</h2>
                    <div className="w-24 h-1 bg-primary mx-auto mb-12"></div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {featuredProducts.map((product) => (
                            <motion.div
                                key={product.id}
                                whileHover={{ scale: 1.03 }}
                                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-violet transition-shadow duration-300"
                            >
                                <img 
                                    src={product.image} 
                                    alt={product.name} 
                                    className="w-full h-48 object-cover"
                                />
                                <div className="p-4">
                                    <h3 className="font-bold text-lg mb-1 text-violet-800">{product.name}</h3>
                                    <p className="text-gray-600 text-sm mb-2">{product.description}</p>
                                    <div className="flex justify-between items-center">
                                        <span className="font-bold text-primary">${product.price.toFixed(2)}</span>
                                        <button className="bg-primary hover:bg-primary-dark text-white px-3 py-1 rounded-full text-sm transition duration-300">
                                            Add to Cart
                                        </button>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                    <div className="text-center mt-10">
                        <Link to="/menu" className="bg-primary hover:bg-primary-dark text-white font-bold py-2 px-6 rounded-full transition duration-300 shadow-violet">
                            View All Products
                        </Link>
                    </div>
                </div>
            </section>

            {/* Testimonials */}
            <section className="py-16">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold text-center mb-4 text-gray-800">What Our Customers Say</h2>
                    <div className="w-24 h-1 bg-primary mx-auto mb-12"></div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {testimonials.map((testimonial, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.2 }}
                                className="bg-white p-6 rounded-lg shadow-md hover:shadow-violet transition-shadow duration-300 border-l-4 border-primary"
                            >
                                <div className="flex items-center mb-4">
                                    <img 
                                        src={testimonial.avatar} 
                                        alt={testimonial.name} 
                                        className="w-12 h-12 rounded-full object-cover mr-4 border-2 border-primary"
                                    />
                                    <div>
                                        <h4 className="font-bold text-violet-800">{testimonial.name}</h4>
                                        <p className="text-gray-500 text-sm">{testimonial.location}</p>
                                    </div>
                                </div>
                                <p className="text-gray-600 italic">"{testimonial.comment}"</p>
                                <div className="mt-3 text-primary">
                                    {'★'.repeat(testimonial.rating)}
                                    {'☆'.repeat(5 - testimonial.rating)}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Call to Action */}
            <section className="py-16 bg-gradient-to-r from-primary to-violet-800 text-white">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl font-bold mb-6">Ready to Experience Our Delicious Treats?</h2>
                    <p className="text-lg mb-8 max-w-2xl mx-auto text-violet-100">
                        Visit our shop today or order online for delivery or pickup. We can't wait to serve you!
                    </p>
                    <div className="flex flex-col md:flex-row justify-center gap-4">
                        <Link to="/menu" className="bg-white text-primary hover:bg-gray-100 font-bold py-3 px-8 rounded-full transition duration-300 shadow-lg">
                            Order Online
                        </Link>
                        <Link to="/contact" className="bg-transparent hover:bg-white hover:text-primary border-2 border-white text-white font-bold py-3 px-8 rounded-full transition duration-300">
                            Contact Us
                        </Link>
                    </div>
                </div>
            </section>
        </>
    );
};

// Sample data for featured products
const featuredProducts = [
    {
        id: 1,
        name: "Chocolate Truffle Cake",
        description: "Rich chocolate cake with truffle filling",
        price: 28.99,
        image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    },
    {
        id: 2,
        name: "Vanilla Bean Latte",
        description: "Espresso with vanilla bean and steamed milk",
        price: 4.99,
        image: "https://images.unsplash.com/photo-1497636577773-f1231844b336?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    },
    {
        id: 3,
        name: "Red Velvet Cupcake",
        description: "Classic red velvet with cream cheese frosting",
        price: 3.99,
        image: "https://images.unsplash.com/photo-1614707267537-b85aaf00c4b7?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    },
    {
        id: 4,
        name: "Caramel Macchiato",
        description: "Espresso with caramel and foamed milk",
        price: 5.49,
        image: "https://images.unsplash.com/photo-1485808191679-5f86510681a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    }
];

// Sample data for testimonials
const testimonials = [
    {
        name: "Sarah Johnson",
        location: "New York, NY",
        comment: "The chocolate cake is absolutely divine! I order it for every special occasion.",
        rating: 5,
        avatar: "https://randomuser.me/api/portraits/women/44.jpg"
    },
    {
        name: "Michael Chen",
        location: "San Francisco, CA",
        comment: "Their coffee is the best in town. I stop by every morning on my way to work.",
        rating: 5,
        avatar: "https://randomuser.me/api/portraits/men/32.jpg"
    },
    {
        name: "Emily Rodriguez",
        location: "Chicago, IL",
        comment: "The pastries are always fresh and the staff is incredibly friendly. Highly recommend!",
        rating: 4,
        avatar: "https://randomuser.me/api/portraits/women/68.jpg"
    }
];

export default HomePage;