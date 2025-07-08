import React, { useState } from 'react';
import { FaUsers, FaBox, FaClipboardList, FaChartLine, FaPlus } from 'react-icons/fa';
import { useAuth } from '../auth/AuthContext';
import UserManagement from './UserManagement';
import ProductManagement from './ProductManagement';
import OrderManagement from './OrderManagement';

const AdminDashboard = () => {
  const { currentUser } = useAuth();
  const [activeKey, setActiveKey] = useState('overview');

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900">Admin Dashboard</h1>
        <p className="text-gray-500 mt-1">
          Welcome {currentUser?.displayName || currentUser?.email?.split('@')[0]}!
        </p>
      </div>
      
      <div className="flex flex-col lg:flex-row gap-6">
        {/* Sidebar Navigation */}
        <div className="w-full lg:w-1/4">
          <div className="bg-white rounded-xl shadow-sm overflow-hidden">
            <nav className="p-2">
              <button
                onClick={() => setActiveKey('overview')}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-left transition-colors ${
                  activeKey === 'overview'
                    ? 'bg-purple-50 text-purple-700 font-medium'
                    : 'text-gray-700 hover:bg-gray-50'
                }`}
              >
                <FaChartLine className={activeKey === 'overview' ? 'text-purple-600' : 'text-gray-500'} />
                <span>Overview</span>
              </button>
              
              <button
                onClick={() => setActiveKey('products')}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-left transition-colors ${
                  activeKey === 'products'
                    ? 'bg-purple-50 text-purple-700 font-medium'
                    : 'text-gray-700 hover:bg-gray-50'
                }`}
              >
                <FaBox className={activeKey === 'products' ? 'text-purple-600' : 'text-gray-500'} />
                <span>Products</span>
              </button>
              
              <button
                onClick={() => setActiveKey('orders')}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-left transition-colors ${
                  activeKey === 'orders'
                    ? 'bg-purple-50 text-purple-700 font-medium'
                    : 'text-gray-700 hover:bg-gray-50'
                }`}
              >
                <FaClipboardList className={activeKey === 'orders' ? 'text-purple-600' : 'text-gray-500'} />
                <span>Orders</span>
              </button>
              
              <button
                onClick={() => setActiveKey('users')}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-left transition-colors ${
                  activeKey === 'users'
                    ? 'bg-purple-50 text-purple-700 font-medium'
                    : 'text-gray-700 hover:bg-gray-50'
                }`}
              >
                <FaUsers className={activeKey === 'users' ? 'text-purple-600' : 'text-gray-500'} />
                <span>Users</span>
              </button>
            </nav>
          </div>
        </div>
        
        {/* Main Content */}
        <div className="flex-1">
          {/* Overview Tab */}
          {activeKey === 'overview' && (
            <>
              {/* Stats Cards */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                {/* Orders Card */}
                <div className="bg-white rounded-xl shadow-sm overflow-hidden border-l-4 border-[#a690c9]">
                  <div className="p-5 flex justify-between items-center">
                    <div>
                      <p className="text-sm text-gray-500 mb-1">Total Orders</p>
                      <h3 className="text-2xl font-bold text-gray-800">156</h3>
                    </div>
                    <div className="bg-purple-50 p-3 rounded-lg">
                      <FaClipboardList size={24} className="text-[#a690c9]" />
                    </div>
                  </div>
                </div>
                
                {/* Products Card */}
                <div className="bg-white rounded-xl shadow-sm overflow-hidden border-l-4 border-[#a690c9]">
                  <div className="p-5 flex justify-between items-center">
                    <div>
                      <p className="text-sm text-gray-500 mb-1">Total Products</p>
                      <h3 className="text-2xl font-bold text-gray-800">48</h3>
                    </div>
                    <div className="bg-purple-50 p-3 rounded-lg">
                      <FaBox size={24} className="text-[#a690c9]" />
                    </div>
                  </div>
                </div>
                
                {/* Users Card */}
                <div className="bg-white rounded-xl shadow-sm overflow-hidden border-l-4 border-[#a690c9]">
                  <div className="p-5 flex justify-between items-center">
                    <div>
                      <p className="text-sm text-gray-500 mb-1">Total Users</p>
                      <h3 className="text-2xl font-bold text-gray-800">312</h3>
                    </div>
                    <div className="bg-purple-50 p-3 rounded-lg">
                      <FaUsers size={24} className="text-[#a690c9]" />
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Recent Orders Table */}
              <div className="bg-white rounded-xl shadow-sm overflow-hidden">
                <div className="px-6 py-4 border-b border-gray-100">
                  <h2 className="font-semibold text-lg text-gray-800">Recent Orders</h2>
                </div>
                <div className="p-0">
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead className="bg-gray-50 text-gray-600 text-sm">
                        <tr>
                          <th className="py-3 px-4 text-left font-medium">Order ID</th>
                          <th className="py-3 px-4 text-left font-medium">Customer</th>
                          <th className="py-3 px-4 text-left font-medium">Items</th>
                          <th className="py-3 px-4 text-left font-medium">Total</th>
                          <th className="py-3 px-4 text-left font-medium">Status</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-100">
                        <tr className="hover:bg-gray-50">
                          <td className="py-3 px-4">#ORD-1234</td>
                          <td className="py-3 px-4">John Doe</td>
                          <td className="py-3 px-4">3</td>
                          <td className="py-3 px-4">$45.99</td>
                          <td className="py-3 px-4">
                            <span className="px-2 py-1 text-xs rounded-full bg-green-100 text-green-800">
                              Delivered
                            </span>
                          </td>
                        </tr>
                        <tr className="hover:bg-gray-50">
                          <td className="py-3 px-4">#ORD-1235</td>
                          <td className="py-3 px-4">Jane Smith</td>
                          <td className="py-3 px-4">1</td>
                          <td className="py-3 px-4">$24.50</td>
                          <td className="py-3 px-4">
                            <span className="px-2 py-1 text-xs rounded-full bg-yellow-100 text-yellow-800">
                              Processing
                            </span>
                          </td>
                        </tr>
                        <tr className="hover:bg-gray-50">
                          <td className="py-3 px-4">#ORD-1236</td>
                          <td className="py-3 px-4">Robert Johnson</td>
                          <td className="py-3 px-4">5</td>
                          <td className="py-3 px-4">$112.75</td>
                          <td className="py-3 px-4">
                            <span className="px-2 py-1 text-xs rounded-full bg-blue-100 text-blue-800">
                              Shipped
                            </span>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </>
          )}
          
          {/* Products Tab */}
          {activeKey === 'products' && <ProductManagement />}
          
          {/* Orders Tab */}
          {activeKey === 'orders' && <OrderManagement />}
          
          {/* Users Tab */}
          {activeKey === 'users' && <UserManagement />}
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard; 