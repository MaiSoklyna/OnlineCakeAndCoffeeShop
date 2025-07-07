import React, { useState, useEffect } from 'react';
import { useAuth } from '../../auth/AuthContext';
import { doc, getDoc, setDoc } from 'firebase/firestore';
import { updateProfile } from 'firebase/auth';
import { db } from '../../firebase/config';
import { Link, useNavigate } from 'react-router-dom';
import { FaUser, FaHistory, FaHeart, FaLock, FaExclamationCircle, FaCheckCircle } from 'react-icons/fa';

const ProfilePage = () => {
  const { currentUser } = useAuth();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [profile, setProfile] = useState({
    displayName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    postalCode: '',
    country: 'Cambodia',
  });

  useEffect(() => {
    const fetchUserProfile = async () => {
      if (!currentUser) return;
      
      setLoading(true);
      try {
        // Get user data from Firestore if it exists
        const userDocRef = doc(db, 'users', currentUser.uid);
        const userDoc = await getDoc(userDocRef);
        
        // Initialize profile with current user data
        setProfile({
          displayName: currentUser.displayName || '',
          email: currentUser.email || '',
          phone: userDoc.exists() ? userDoc.data().phone || '' : '',
          address: userDoc.exists() ? userDoc.data().address || '' : '',
          city: userDoc.exists() ? userDoc.data().city || '' : '',
          postalCode: userDoc.exists() ? userDoc.data().postalCode || '' : '',
          country: userDoc.exists() ? userDoc.data().country || 'Cambodia' : 'Cambodia',
        });
      } catch (err) {
        console.error('Error fetching user profile:', err);
        setError('Failed to load profile data. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    fetchUserProfile();
  }, [currentUser]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfile((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setSuccess('');

    try {
      // Update display name in Firebase Auth
      if (currentUser.displayName !== profile.displayName) {
        await updateProfile(currentUser, {
          displayName: profile.displayName,
        });
      }

      // Update additional user information in Firestore
      const userDocRef = doc(db, 'users', currentUser.uid);
      
      // Use setDoc with merge option to handle both create and update scenarios
      await setDoc(userDocRef, {
        displayName: profile.displayName,
        phone: profile.phone,
        address: profile.address,
        city: profile.city,
        postalCode: profile.postalCode,
        country: profile.country,
        updatedAt: new Date(),
      }, { merge: true });

      setSuccess('Profile updated successfully!');
      
      // Show success message for 3 seconds, then clear it
      setTimeout(() => {
        setSuccess('');
      }, 3000);
    } catch (err) {
      console.error('Error updating profile:', err);
      setError('Failed to update profile. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  if (!currentUser) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded-md">
          <div className="flex">
            <div className="flex-shrink-0">
              <FaExclamationCircle className="h-5 w-5 text-yellow-400" />
            </div>
            <div className="ml-3">
              <p className="text-sm text-yellow-700">
                Please log in to view your profile.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <div className="flex flex-col md:flex-row gap-6">
        {/* Sidebar */}
        <div className="w-full md:w-1/4 lg:w-1/5">
          <div className="bg-white rounded-xl shadow-sm overflow-hidden">
            {/* User Profile Summary */}
            <div className="px-6 py-8 text-center border-b border-gray-100">
              <div className="mb-4">
                <div 
                  className="mx-auto rounded-full flex items-center justify-center w-24 h-24"
                  style={{ background: 'linear-gradient(135deg, #a690c9 0%, #8065b0 100%)' }}
                >
                  {profile.displayName ? (
                    <span className="text-4xl font-bold text-white">
                      {profile.displayName.charAt(0).toUpperCase()}
                    </span>
                  ) : (
                    <span className="text-4xl font-bold text-white">U</span>
                  )}
                </div>
              </div>
              <h3 className="font-semibold text-lg">{profile.displayName || 'User'}</h3>
              <p className="text-sm text-gray-500 mt-1">{profile.email}</p>
            </div>
            
            {/* Navigation Links */}
            <nav className="p-2">
  <Link
    to="/profile"
    className="flex items-center gap-3 px-4 py-3 rounded-lg bg-purple-50 text-purple-700 font-medium hover:bg-purple-100 hover:text-purple-800 transition-colors"
  >
    <FaUser className="text-purple-600 group-hover:text-purple-800" />
    <span>My Profile</span>
  </Link>

  <Link
    to="/orders"
    className="flex items-center gap-3 px-4 py-3 rounded-lg text-gray-700 hover:bg-purple-50 hover:text-purple-700 transition-colors"
  >
    <FaHistory className="group-hover:text-purple-700" />
    <span>Orders History</span>
  </Link>

  <Link
    to="/wishlist"
    className="flex items-center gap-3 px-4 py-3 rounded-lg text-gray-700 hover:bg-purple-50 hover:text-purple-700 transition-colors"
  >
    <FaHeart className="group-hover:text-purple-700" />
    <span>Wishlist</span>
  </Link>

  <Link
    to="/change-password"
    className="flex items-center gap-3 px-4 py-3 rounded-lg text-gray-700 hover:bg-purple-50 hover:text-purple-700 transition-colors"
  >
    <FaLock className="group-hover:text-purple-700" />
    <span>Change Password</span>
  </Link>
</nav>

          </div>
        </div>
        
        {/* Main Content */}
        <div className="flex-1">
          <div className="bg-white rounded-xl shadow-sm overflow-hidden">
            <div className="border-b border-gray-100 px-6 py-4">
              <h2 className="font-semibold text-xl text-gray-800">Profile Information</h2>
            </div>
            
            <div className="p-6">
              {/* Alert Messages */}
              {error && (
                <div className="mb-6 bg-red-50 border-l-4 border-red-500 p-4 rounded-md">
                  <div className="flex">
                    <div className="flex-shrink-0">
                      <FaExclamationCircle className="h-5 w-5 text-red-500" />
                    </div>
                    <div className="ml-3">
                      <p className="text-sm text-red-700">{error}</p>
                    </div>
                  </div>
                </div>
              )}
              {success && (
                <div className="mb-6 bg-green-50 border-l-4 border-green-500 p-4 rounded-md">
                  <div className="flex">
                    <div className="flex-shrink-0">
                      <FaCheckCircle className="h-5 w-5 text-green-500" />
                    </div>
                    <div className="ml-3">
                      <p className="text-sm text-green-700">{success}</p>
                    </div>
                  </div>
                </div>
              )}
              
              {/* Profile Form */}
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="displayName" className="block text-sm font-medium text-gray-700 mb-1">
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="displayName"
                      name="displayName"
                      value={profile.displayName}
                      onChange={handleChange}
                      placeholder="Enter your full name"
                      className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-200 focus:border-purple-400 outline-none transition-colors"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={profile.email}
                      disabled
                      readOnly
                      className="w-full px-4 py-2.5 rounded-lg border border-gray-200 bg-gray-50 text-gray-500 cursor-not-allowed"
                    />
                    <p className="mt-1 text-xs text-gray-500">Email cannot be changed</p>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                      Phone Number
                    </label>
                    <input
                      type="text"
                      id="phone"
                      name="phone"
                      value={profile.phone}
                      onChange={handleChange}
                      placeholder="Enter your phone number"
                      className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-200 focus:border-purple-400 outline-none transition-colors"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="country" className="block text-sm font-medium text-gray-700 mb-1">
                      Country
                    </label>
                    <select
                      id="country"
                      name="country"
                      value={profile.country}
                      onChange={handleChange}
                      className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-200 focus:border-purple-400 outline-none transition-colors"
                    >
                      <option value="Cambodia">Cambodia</option>
                      <option value="Thailand">Thailand</option>
                      <option value="Vietnam">Vietnam</option>
                      <option value="Laos">Laos</option>
                      <option value="Myanmar">Myanmar</option>
                      <option value="Malaysia">Malaysia</option>
                      <option value="Singapore">Singapore</option>
                    </select>
                  </div>
                </div>
                
                <div>
                  <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-1">
                    Address
                  </label>
                  <input
                    type="text"
                    id="address"
                    name="address"
                    value={profile.address}
                    onChange={handleChange}
                    placeholder="Enter your address"
                    className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-200 focus:border-purple-400 outline-none transition-colors"
                  />
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="city" className="block text-sm font-medium text-gray-700 mb-1">
                      City
                    </label>
                    <input
                      type="text"
                      id="city"
                      name="city"
                      value={profile.city}
                      onChange={handleChange}
                      placeholder="Enter your city"
                      className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-200 focus:border-purple-400 outline-none transition-colors"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="postalCode" className="block text-sm font-medium text-gray-700 mb-1">
                      Postal Code
                    </label>
                    <input
                      type="text"
                      id="postalCode"
                      name="postalCode"
                      value={profile.postalCode}
                      onChange={handleChange}
                      placeholder="Enter postal code"
                      className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-200 focus:border-purple-400 outline-none transition-colors"
                    />
                  </div>
                </div>
                
                <div className="flex justify-end gap-4 pt-4">
                  <button
                    type="button"
                    onClick={() => navigate('/')}
                    className="px-6 py-2.5 rounded-lg bg-gray-100 text-gray-700 hover:bg-gray-200 transition-colors"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    disabled={loading}
                    className={`px-6 py-2.5 rounded-lg bg-[#a690c9] hover:bg-[#8065b0] text-white transition-colors ${
                      loading ? 'opacity-70 cursor-not-allowed' : ''
                    }`}
                  >
                    {loading ? (
                      <div className="flex items-center justify-center">
                        <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
                        <span>Saving...</span>
                      </div>
                    ) : (
                      'Save Changes'
                    )}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage; 