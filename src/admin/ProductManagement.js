import React, { useState, useEffect } from 'react';
import { FaEdit, FaTrash, FaPlus, FaSearch } from 'react-icons/fa';
import { motion } from 'framer-motion';

const ProductManagement = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [formMode, setFormMode] = useState('add'); // 'add' or 'edit'
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    price: '',
    category: 'cakes',
    image: '',
    ingredients: '',
    featured: false
  });

  const itemsPerPage = 10;

  // Sample data - in a real app, fetch from Firebase
  useEffect(() => {
    // Simulate API fetch
    setTimeout(() => {
      setProducts([
        {
          id: 1,
          name: "Chocolate Truffle Cake",
          description: "Rich chocolate cake with truffle filling",
          price: 28.99,
          category: "cakes",
          featured: true,
          image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
          ingredients: "Chocolate, flour, sugar, eggs, butter"
        },
        {
          id: 2,
          name: "Vanilla Bean Latte",
          description: "Espresso with vanilla bean and steamed milk",
          price: 4.99,
          category: "coffee",
          featured: true,
          image: "https://images.unsplash.com/photo-1497636577773-f1231844b336?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
          ingredients: "Espresso, milk, vanilla syrup"
        },
        {
          id: 3,
          name: "Red Velvet Cupcake",
          description: "Classic red velvet with cream cheese frosting",
          price: 3.99,
          category: "pastries",
          featured: false,
          image: "https://images.unsplash.com/photo-1614707267537-b85aaf00c4b7?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
          ingredients: "Flour, cocoa powder, buttermilk, vinegar, food coloring"
        },
        {
          id: 4,
          name: "Caramel Macchiato",
          description: "Espresso with caramel and foamed milk",
          price: 5.49,
          category: "coffee",
          featured: true,
          image: "https://images.unsplash.com/photo-1485808191679-5f86510681a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
          ingredients: "Espresso, milk, caramel syrup"
        },
        {
          id: 5,
          name: "Strawberry Cheesecake",
          description: "Creamy cheesecake with strawberry topping",
          price: 32.99,
          category: "cakes",
          featured: true,
          image: "https://images.unsplash.com/photo-1565958011703-44f9829ba187?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
          ingredients: "Cream cheese, sugar, eggs, strawberries, graham crackers"
        }
      ]);
      setLoading(false);
    }, 500);
  }, []);

  // Filter products based on search term
  const filteredProducts = products.filter(product => 
    product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    product.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Calculate pagination
  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);
  const paginatedProducts = filteredProducts.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    });
  };

  const handleAddProduct = () => {
    setFormMode('add');
    setFormData({
      name: '',
      description: '',
      price: '',
      category: 'cakes',
      image: '',
      ingredients: '',
      featured: false
    });
    setShowForm(true);
  };

  const handleEditProduct = (product) => {
    setFormMode('edit');
    setSelectedProduct(product);
    setFormData({
      name: product.name,
      description: product.description,
      price: product.price,
      category: product.category,
      image: product.image,
      ingredients: product.ingredients || '',
      featured: product.featured
    });
    setShowForm(true);
  };

  const handleDeleteProduct = (productId) => {
    // In a real app, this would call Firebase to delete the product
    if (window.confirm('Are you sure you want to delete this product?')) {
      setProducts(products.filter(product => product.id !== productId));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.price || !formData.category) {
      alert('Please fill in all required fields');
      return;
    }

    if (formMode === 'add') {
      // In a real app, this would add the product to Firebase
      const newProduct = {
        id: Date.now(), // Use Firebase auto-generated ID in real app
        ...formData,
        price: parseFloat(formData.price)
      };
      setProducts([...products, newProduct]);
    } else {
      // In a real app, this would update the product in Firebase
      const updatedProducts = products.map(product => 
        product.id === selectedProduct.id ? {
          ...product,
          ...formData,
          price: parseFloat(formData.price)
        } : product
      );
      setProducts(updatedProducts);
    }
    
    setShowForm(false);
    setSelectedProduct(null);
  };

  return (
    <div className="bg-white rounded-xl shadow-sm overflow-hidden">
      {/* Header */}
      <div className="px-6 py-4 border-b border-gray-100 flex justify-between items-center">
        <h2 className="font-semibold text-lg text-gray-800">Products Management</h2>
        <button 
          onClick={handleAddProduct}
          className="px-4 py-2 bg-[#a690c9] hover:bg-[#8065b0] text-white rounded-lg transition-colors flex items-center gap-2 text-sm"
        >
          <FaPlus size={12} />
          Add New Product
        </button>
      </div>
      
      {/* Search and Filters */}
      <div className="p-6 border-b border-gray-100">
        <div className="flex flex-col md:flex-row md:items-center gap-4">
          <div className="relative flex-grow max-w-md">
            <input
              type="text"
              placeholder="Search products..."
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#a690c9]"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          </div>
          
          <div className="flex items-center gap-2 ml-auto">
            <span className="text-sm text-gray-500">Filter:</span>
            <select 
              className="border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#a690c9]"
              onChange={(e) => setSearchTerm(e.target.value === 'all' ? '' : e.target.value)}
            >
              <option value="all">All Products</option>
              <option value="cakes">Cakes</option>
              <option value="coffee">Coffee</option>
              <option value="pastries">Pastries</option>
              <option value="gifts">Gift Sets</option>
            </select>
          </div>
        </div>
      </div>
      
      {/* Product List */}
      <div className="overflow-x-auto">
        {loading ? (
          <div className="p-6 text-center">
            <div className="inline-block w-8 h-8 border-4 border-[#a690c9] border-t-transparent rounded-full animate-spin"></div>
            <p className="mt-2 text-gray-500">Loading products...</p>
          </div>
        ) : (
          <table className="w-full">
            <thead className="bg-gray-50 text-gray-600 text-sm">
              <tr>
                <th className="py-3 px-4 text-left font-medium">Product</th>
                <th className="py-3 px-4 text-left font-medium">Category</th>
                <th className="py-3 px-4 text-left font-medium">Price</th>
                <th className="py-3 px-4 text-left font-medium">Status</th>
                <th className="py-3 px-4 text-center font-medium">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {paginatedProducts.length > 0 ? (
                paginatedProducts.map((product) => (
                  <tr key={product.id} className="hover:bg-gray-50">
                    <td className="py-3 px-4">
                      <div className="flex items-center">
                        <div className="h-10 w-10 flex-shrink-0 mr-3">
                          <img 
                            src={product.image} 
                            alt={product.name} 
                            className="h-10 w-10 rounded-md object-cover"
                          />
                        </div>
                        <div className="flex flex-col">
                          <span className="font-medium text-gray-800">{product.name}</span>
                          <span className="text-xs text-gray-500 truncate max-w-xs">{product.description}</span>
                        </div>
                      </div>
                    </td>
                    <td className="py-3 px-4 capitalize">{product.category}</td>
                    <td className="py-3 px-4">${product.price.toFixed(2)}</td>
                    <td className="py-3 px-4">
                      {product.featured ? (
                        <span className="px-2 py-1 text-xs rounded-full bg-green-100 text-green-800">
                          Featured
                        </span>
                      ) : (
                        <span className="px-2 py-1 text-xs rounded-full bg-gray-100 text-gray-800">
                          Regular
                        </span>
                      )}
                    </td>
                    <td className="py-3 px-4">
                      <div className="flex justify-center space-x-2">
                        <button
                          onClick={() => handleEditProduct(product)}
                          className="p-1.5 hover:bg-gray-100 rounded-md"
                          title="Edit product"
                        >
                          <FaEdit className="text-[#a690c9]" />
                        </button>
                        <button
                          onClick={() => handleDeleteProduct(product.id)}
                          className="p-1.5 hover:bg-gray-100 rounded-md"
                          title="Delete product"
                        >
                          <FaTrash className="text-red-500" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="5" className="py-6 text-center text-gray-500">
                    No products found matching your search.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        )}
      </div>
      
      {/* Pagination */}
      {filteredProducts.length > itemsPerPage && (
        <div className="px-6 py-4 border-t border-gray-100 flex justify-center">
          <nav className="flex items-center gap-1">
            <button 
              className={`w-8 h-8 flex items-center justify-center rounded border ${
                currentPage === 1 ? 'border-gray-200 text-gray-300 cursor-not-allowed' : 'border-gray-300 hover:bg-gray-50'
              }`}
              onClick={() => currentPage > 1 && handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
            >
              &lt;
            </button>
            
            {[...Array(totalPages)].map((_, i) => (
              <button
                key={i + 1}
                className={`w-8 h-8 flex items-center justify-center rounded ${
                  currentPage === i + 1
                    ? 'bg-[#a690c9] text-white'
                    : 'border border-gray-300 hover:bg-gray-50'
                }`}
                onClick={() => handlePageChange(i + 1)}
              >
                {i + 1}
              </button>
            ))}
            
            <button 
              className={`w-8 h-8 flex items-center justify-center rounded border ${
                currentPage === totalPages ? 'border-gray-200 text-gray-300 cursor-not-allowed' : 'border-gray-300 hover:bg-gray-50'
              }`}
              onClick={() => currentPage < totalPages && handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
            >
              &gt;
            </button>
          </nav>
        </div>
      )}
      
      {/* Add/Edit Product Form Modal */}
      {showForm && (
        <div className="fixed inset-0 bg-black bg-opacity-30 flex items-center justify-center z-50 p-4">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white rounded-xl shadow-lg w-full max-w-2xl max-h-[90vh] overflow-y-auto"
          >
            <div className="px-6 py-4 border-b border-gray-100 flex justify-between items-center">
              <h3 className="font-semibold text-lg text-gray-800">
                {formMode === 'add' ? 'Add New Product' : 'Edit Product'}
              </h3>
              <button 
                onClick={() => setShowForm(false)} 
                className="text-gray-500 hover:text-gray-700"
              >
                &times;
              </button>
            </div>
            
            <form onSubmit={handleSubmit} className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4 md:col-span-2">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Product Name*</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#a690c9]"
                      required
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Description*</label>
                    <textarea
                      name="description"
                      value={formData.description}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#a690c9]"
                      rows="3"
                      required
                    ></textarea>
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Price ($)*</label>
                  <input
                    type="number"
                    name="price"
                    value={formData.price}
                    onChange={handleInputChange}
                    step="0.01"
                    min="0"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#a690c9]"
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Category*</label>
                  <select
                    name="category"
                    value={formData.category}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#a690c9]"
                    required
                  >
                    <option value="cakes">Cakes</option>
                    <option value="coffee">Coffee</option>
                    <option value="pastries">Pastries</option>
                    <option value="gifts">Gift Sets</option>
                    <option value="specials">Specials</option>
                  </select>
                </div>
                
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-1">Image URL*</label>
                  <input
                    type="url"
                    name="image"
                    value={formData.image}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#a690c9]"
                    placeholder="https://example.com/image.jpg"
                    required
                  />
                  {formData.image && (
                    <div className="mt-2">
                      <div className="relative w-24 h-24 rounded overflow-hidden">
                        <img 
                          src={formData.image} 
                          alt="Product preview" 
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                  )}
                </div>
                
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-1">Ingredients (comma separated)</label>
                  <textarea
                    name="ingredients"
                    value={formData.ingredients}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#a690c9]"
                    rows="2"
                    placeholder="Flour, sugar, eggs, butter..."
                  ></textarea>
                </div>
                
                <div className="md:col-span-2">
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      name="featured"
                      id="featured"
                      checked={formData.featured}
                      onChange={handleInputChange}
                      className="h-4 w-4 text-[#a690c9] border-gray-300 rounded focus:ring-[#a690c9]"
                    />
                    <label htmlFor="featured" className="ml-2 block text-sm text-gray-700">
                      Featured Product
                    </label>
                  </div>
                </div>
              </div>
              
              <div className="mt-6 flex justify-end space-x-3">
                <button
                  type="button"
                  onClick={() => setShowForm(false)}
                  className="px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#a690c9]"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-[#a690c9] hover:bg-[#8065b0] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#a690c9]"
                >
                  {formMode === 'add' ? 'Add Product' : 'Update Product'}
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      )}
    </div>
  );
};

export default ProductManagement; 