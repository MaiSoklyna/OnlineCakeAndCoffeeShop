import React, { useState, useEffect } from 'react';
import { FaSearch, FaEye, FaRegCheckCircle, FaTruck, FaBan } from 'react-icons/fa';
import { motion } from 'framer-motion';

const OrderManagement = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedOrder, setSelectedOrder] = useState(null);
  const [showOrderDetails, setShowOrderDetails] = useState(false);

  const itemsPerPage = 10;

  // Sample data - in a real app, fetch from Firebase
  useEffect(() => {
    // Simulate API fetch
    setTimeout(() => {
      setOrders([
        {
          id: 'ORD-1234',
          customer: {
            name: 'John Doe',
            email: 'john.doe@example.com',
            phone: '555-123-4567',
            address: '123 Main St, Anytown, AN 12345'
          },
          items: [
            { id: 1, name: 'Chocolate Truffle Cake', price: 28.99, quantity: 1, customization: 'Happy Birthday Message' },
            { id: 2, name: 'Vanilla Bean Latte', price: 4.99, quantity: 2 }
          ],
          subtotal: 38.97,
          tax: 3.12,
          deliveryFee: 5.00,
          total: 47.09,
          status: 'delivered',
          paymentMethod: 'Credit Card',
          date: '2023-07-15T14:30:00',
          deliveryDate: '2023-07-15T17:45:00',
          notes: 'Please ring the doorbell twice.'
        },
        {
          id: 'ORD-1235',
          customer: {
            name: 'Jane Smith',
            email: 'jane.smith@example.com',
            phone: '555-987-6543',
            address: '456 Oak Ave, Othertown, OT 67890'
          },
          items: [
            { id: 3, name: 'Red Velvet Cupcake', price: 3.99, quantity: 6 }
          ],
          subtotal: 23.94,
          tax: 1.92,
          deliveryFee: 5.00,
          total: 30.86,
          status: 'processing',
          paymentMethod: 'PayPal',
          date: '2023-07-16T10:15:00',
          notes: 'Allergic to nuts.'
        },
        {
          id: 'ORD-1236',
          customer: {
            name: 'Robert Johnson',
            email: 'robert.j@example.com',
            phone: '555-456-7890',
            address: '789 Pine St, Sometown, ST 54321'
          },
          items: [
            { id: 5, name: 'Strawberry Cheesecake', price: 32.99, quantity: 1 },
            { id: 4, name: 'Caramel Macchiato', price: 5.49, quantity: 4 },
            { id: 10, name: 'Croissant', price: 2.49, quantity: 2 }
          ],
          subtotal: 60.93,
          tax: 4.87,
          deliveryFee: 5.00,
          total: 70.80,
          status: 'shipped',
          paymentMethod: 'Credit Card',
          date: '2023-07-16T16:45:00',
          deliveryDate: '2023-07-17T13:30:00',
          notes: ''
        },
        {
          id: 'ORD-1237',
          customer: {
            name: 'Emily Wilson',
            email: 'emily.w@example.com',
            phone: '555-789-0123',
            address: '321 Maple Dr, Lasttown, LT 13579'
          },
          items: [
            { id: 8, name: 'Birthday Cake', price: 35.99, quantity: 1, customization: '30th Birthday - Chocolate Flavor' },
          ],
          subtotal: 35.99,
          tax: 2.88,
          deliveryFee: 7.50,
          total: 46.37,
          status: 'cancelled',
          paymentMethod: 'Debit Card',
          date: '2023-07-17T09:30:00',
          notes: 'Customer cancelled due to date change.'
        },
        {
          id: 'ORD-1238',
          customer: {
            name: 'Michael Brown',
            email: 'michael.b@example.com',
            phone: '555-321-6547',
            address: '654 Elm St, Midtown, MT 24680'
          },
          items: [
            { id: 12, name: 'Gift Box - Sweet Treats', price: 24.99, quantity: 2 }
          ],
          subtotal: 49.98,
          tax: 4.00,
          deliveryFee: 5.00,
          total: 58.98,
          status: 'pending',
          paymentMethod: 'Credit Card',
          date: '2023-07-17T11:20:00',
          notes: 'Corporate gift - please include company card.'
        }
      ]);
      setLoading(false);
    }, 500);
  }, []);

  // Filter orders based on search term and status
  const filteredOrders = orders.filter(order => {
    const matchesSearch = (
      order.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
      order.customer.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      order.customer.email.toLowerCase().includes(searchTerm.toLowerCase())
    );
    
    const matchesStatus = statusFilter === 'all' || order.status === statusFilter;
    
    return matchesSearch && matchesStatus;
  });

  // Calculate pagination
  const totalPages = Math.ceil(filteredOrders.length / itemsPerPage);
  const paginatedOrders = filteredOrders.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handleViewOrder = (order) => {
    setSelectedOrder(order);
    setShowOrderDetails(true);
  };

  const handleUpdateStatus = (orderId, newStatus) => {
    // In a real app, this would update the order status in Firebase
    const updatedOrders = orders.map(order =>
      order.id === orderId ? { ...order, status: newStatus } : order
    );
    setOrders(updatedOrders);
    
    if (selectedOrder && selectedOrder.id === orderId) {
      setSelectedOrder({ ...selectedOrder, status: newStatus });
    }
  };

  const getStatusBadgeClass = (status) => {
    switch (status) {
      case 'pending':
        return 'bg-yellow-100 text-yellow-800';
      case 'processing':
        return 'bg-blue-100 text-blue-800';
      case 'shipped':
        return 'bg-purple-100 text-purple-800';
      case 'delivered':
        return 'bg-green-100 text-green-800';
      case 'cancelled':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const formatDate = (dateString) => {
    const options = { 
      year: 'numeric', 
      month: 'short', 
      day: 'numeric', 
      hour: '2-digit', 
      minute: '2-digit' 
    };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  const calculateTotalItems = (items) => {
    return items.reduce((total, item) => total + item.quantity, 0);
  };

  return (
    <div className="bg-white rounded-xl shadow-sm overflow-hidden">
      {/* Header */}
      <div className="px-6 py-4 border-b border-gray-100 flex justify-between items-center">
        <h2 className="font-semibold text-lg text-gray-800">Orders Management</h2>
        <div className="flex items-center gap-2">
          <button className="px-3 py-1 bg-[#a690c9] hover:bg-[#8065b0] text-white rounded-lg text-sm">
            Export Orders
          </button>
        </div>
      </div>
      
      {/* Search and Filters */}
      <div className="p-6 border-b border-gray-100">
        <div className="flex flex-col md:flex-row md:items-center gap-4">
          <div className="relative flex-grow max-w-md">
            <input
              type="text"
              placeholder="Search by order ID or customer..."
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#a690c9]"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          </div>
          
          <div className="flex items-center gap-2 ml-auto">
            <span className="text-sm text-gray-500">Status:</span>
            <select 
              className="border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#a690c9]"
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
            >
              <option value="all">All Orders</option>
              <option value="pending">Pending</option>
              <option value="processing">Processing</option>
              <option value="shipped">Shipped</option>
              <option value="delivered">Delivered</option>
              <option value="cancelled">Cancelled</option>
            </select>
          </div>
        </div>
      </div>
      
      {/* Orders List */}
      <div className="overflow-x-auto">
        {loading ? (
          <div className="p-6 text-center">
            <div className="inline-block w-8 h-8 border-4 border-[#a690c9] border-t-transparent rounded-full animate-spin"></div>
            <p className="mt-2 text-gray-500">Loading orders...</p>
          </div>
        ) : (
          <table className="w-full">
            <thead className="bg-gray-50 text-gray-600 text-sm">
              <tr>
                <th className="py-3 px-4 text-left font-medium">Order ID</th>
                <th className="py-3 px-4 text-left font-medium">Customer</th>
                <th className="py-3 px-4 text-left font-medium">Date</th>
                <th className="py-3 px-4 text-left font-medium">Items</th>
                <th className="py-3 px-4 text-left font-medium">Total</th>
                <th className="py-3 px-4 text-left font-medium">Status</th>
                <th className="py-3 px-4 text-center font-medium">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {paginatedOrders.length > 0 ? (
                paginatedOrders.map((order) => (
                  <tr key={order.id} className="hover:bg-gray-50">
                    <td className="py-3 px-4 font-medium">{order.id}</td>
                    <td className="py-3 px-4">
                      <div>
                        <span className="block font-medium">{order.customer.name}</span>
                        <span className="block text-sm text-gray-500">{order.customer.email}</span>
                      </div>
                    </td>
                    <td className="py-3 px-4 text-sm">{formatDate(order.date)}</td>
                    <td className="py-3 px-4 text-sm">{calculateTotalItems(order.items)}</td>
                    <td className="py-3 px-4 font-medium">${order.total.toFixed(2)}</td>
                    <td className="py-3 px-4">
                      <span className={`px-2 py-1 text-xs rounded-full ${getStatusBadgeClass(order.status)}`}>
                        {order.status.charAt(0).toUpperCase() + order.status.slice(1)}
                      </span>
                    </td>
                    <td className="py-3 px-4">
                      <div className="flex justify-center space-x-2">
                        <button
                          onClick={() => handleViewOrder(order)}
                          className="p-1.5 hover:bg-gray-100 rounded-md"
                          title="View order details"
                        >
                          <FaEye className="text-[#a690c9]" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="7" className="py-6 text-center text-gray-500">
                    No orders found matching your search.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        )}
      </div>
      
      {/* Pagination */}
      {filteredOrders.length > itemsPerPage && (
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
      
      {/* Order Details Modal */}
      {showOrderDetails && selectedOrder && (
        <div className="fixed inset-0 bg-black bg-opacity-30 flex items-center justify-center z-50 p-4">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white rounded-xl shadow-lg w-full max-w-3xl max-h-[90vh] overflow-y-auto"
          >
            <div className="px-6 py-4 border-b border-gray-100 flex justify-between items-center sticky top-0 bg-white">
              <h3 className="font-semibold text-lg text-gray-800">
                Order Details: {selectedOrder.id}
              </h3>
              <button 
                onClick={() => setShowOrderDetails(false)} 
                className="text-gray-500 hover:text-gray-700"
              >
                &times;
              </button>
            </div>
            
            <div className="p-6">
              {/* Order Status */}
              <div className="mb-6">
                <div className="flex items-center justify-between">
                  <h4 className="text-sm font-medium text-gray-500">Status</h4>
                  <span className={`px-2 py-1 text-xs rounded-full ${getStatusBadgeClass(selectedOrder.status)}`}>
                    {selectedOrder.status.charAt(0).toUpperCase() + selectedOrder.status.slice(1)}
                  </span>
                </div>
                <div className="mt-4 flex flex-wrap gap-2">
                  <button 
                    className={`px-3 py-1.5 rounded-md text-sm font-medium flex items-center gap-1 ${
                      selectedOrder.status === 'processing' 
                        ? 'bg-blue-100 text-blue-700' 
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                    onClick={() => handleUpdateStatus(selectedOrder.id, 'processing')}
                  >
                    <FaRegCheckCircle size={14} /> Processing
                  </button>
                  <button 
                    className={`px-3 py-1.5 rounded-md text-sm font-medium flex items-center gap-1 ${
                      selectedOrder.status === 'shipped' 
                        ? 'bg-purple-100 text-purple-700' 
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                    onClick={() => handleUpdateStatus(selectedOrder.id, 'shipped')}
                  >
                    <FaTruck size={14} /> Shipped
                  </button>
                  <button 
                    className={`px-3 py-1.5 rounded-md text-sm font-medium flex items-center gap-1 ${
                      selectedOrder.status === 'delivered' 
                        ? 'bg-green-100 text-green-700' 
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                    onClick={() => handleUpdateStatus(selectedOrder.id, 'delivered')}
                  >
                    <FaRegCheckCircle size={14} /> Delivered
                  </button>
                  <button 
                    className={`px-3 py-1.5 rounded-md text-sm font-medium flex items-center gap-1 ${
                      selectedOrder.status === 'cancelled' 
                        ? 'bg-red-100 text-red-700' 
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                    onClick={() => handleUpdateStatus(selectedOrder.id, 'cancelled')}
                  >
                    <FaBan size={14} /> Cancelled
                  </button>
                </div>
              </div>
              
              {/* Order Info */}
              <div className="mb-6 grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h4 className="text-sm font-medium text-gray-500 mb-2">Customer Information</h4>
                  <div className="bg-gray-50 p-3 rounded-lg">
                    <p className="font-medium">{selectedOrder.customer.name}</p>
                    <p className="text-gray-600">{selectedOrder.customer.email}</p>
                    <p className="text-gray-600">{selectedOrder.customer.phone}</p>
                  </div>
                </div>
                
                <div>
                  <h4 className="text-sm font-medium text-gray-500 mb-2">Delivery Address</h4>
                  <div className="bg-gray-50 p-3 rounded-lg">
                    <p className="text-gray-600">{selectedOrder.customer.address}</p>
                  </div>
                </div>
                
                <div>
                  <h4 className="text-sm font-medium text-gray-500 mb-2">Order Date</h4>
                  <div className="bg-gray-50 p-3 rounded-lg">
                    <p className="text-gray-600">{formatDate(selectedOrder.date)}</p>
                  </div>
                </div>
                
                <div>
                  <h4 className="text-sm font-medium text-gray-500 mb-2">Payment Method</h4>
                  <div className="bg-gray-50 p-3 rounded-lg">
                    <p className="text-gray-600">{selectedOrder.paymentMethod}</p>
                  </div>
                </div>
              </div>
              
              {/* Order Items */}
              <div className="mb-6">
                <h4 className="text-sm font-medium text-gray-500 mb-2">Order Items</h4>
                <div className="bg-gray-50 rounded-lg overflow-hidden">
                  <table className="w-full text-sm">
                    <thead className="bg-gray-100">
                      <tr>
                        <th className="px-4 py-2 text-left font-medium">Item</th>
                        <th className="px-4 py-2 text-center font-medium">Qty</th>
                        <th className="px-4 py-2 text-right font-medium">Price</th>
                        <th className="px-4 py-2 text-right font-medium">Total</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                      {selectedOrder.items.map((item) => (
                        <tr key={item.id}>
                          <td className="px-4 py-3">
                            <div>
                              <p className="font-medium">{item.name}</p>
                              {item.customization && (
                                <p className="text-xs text-gray-500">{item.customization}</p>
                              )}
                            </div>
                          </td>
                          <td className="px-4 py-3 text-center">{item.quantity}</td>
                          <td className="px-4 py-3 text-right">${item.price.toFixed(2)}</td>
                          <td className="px-4 py-3 text-right">${(item.price * item.quantity).toFixed(2)}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
              
              {/* Order Summary */}
              <div className="mb-6">
                <h4 className="text-sm font-medium text-gray-500 mb-2">Order Summary</h4>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <div className="flex justify-between mb-1">
                    <span className="text-gray-600">Subtotal</span>
                    <span className="font-medium">${selectedOrder.subtotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between mb-1">
                    <span className="text-gray-600">Tax</span>
                    <span className="font-medium">${selectedOrder.tax.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between mb-1">
                    <span className="text-gray-600">Delivery Fee</span>
                    <span className="font-medium">${selectedOrder.deliveryFee.toFixed(2)}</span>
                  </div>
                  <div className="border-t border-gray-200 my-2"></div>
                  <div className="flex justify-between">
                    <span className="font-bold">Total</span>
                    <span className="font-bold">${selectedOrder.total.toFixed(2)}</span>
                  </div>
                </div>
              </div>
              
              {/* Notes */}
              {selectedOrder.notes && (
                <div className="mb-6">
                  <h4 className="text-sm font-medium text-gray-500 mb-2">Notes</h4>
                  <div className="bg-gray-50 p-3 rounded-lg">
                    <p className="text-gray-600">{selectedOrder.notes}</p>
                  </div>
                </div>
              )}
              
              <div className="flex justify-end mt-8">
                <button
                  onClick={() => setShowOrderDetails(false)}
                  className="px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-800 rounded-md text-sm font-medium"
                >
                  Close
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </div>
  );
};

export default OrderManagement; 