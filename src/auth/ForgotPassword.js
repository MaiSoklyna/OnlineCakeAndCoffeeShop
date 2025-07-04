import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from './AuthContext';

import { FaEnvelope } from 'react-icons/fa';

export default function ForgotPassword() {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const { resetPassword } = useAuth();

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      setMessage('');
      setError('');
      setLoading(true);
      await resetPassword(email);
      setMessage('Check your email for further instructions');
    } catch (error) {
      setError('Failed to reset password: ' + error.message);
    }

    setLoading(false);
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-indigo-50 py-12 px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center">
      <div className="max-w-md w-full space-y-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary-dark">
            Cake & Coffee Shop
          </h2>
          <p className="mt-2 text-gray-600 text-lg">Reset your password</p>
        </div>
        
        <div className="bg-white py-8 px-6 shadow-lg rounded-xl border border-gray-100 transition-all duration-300 hover:shadow-xl">
          <h2 className="text-center text-xl font-bold text-gray-800 mb-8">Password Reset</h2>
          
          {error && (
            <div className="bg-red-50 border-l-4 border-red-500 text-red-700 p-4 rounded-md mb-6 animate-pulse" role="alert">
              <p className="font-medium">Error</p>
              <p>{error}</p>
            </div>
          )}
          
          {message && (
            <div className="bg-green-50 border-l-4 border-green-500 text-green-700 p-4 rounded-md mb-6 animate-pulse" role="alert">
              <p className="font-medium">Success</p>
              <p>{message}</p>
            </div>
          )}
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="relative">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Email Address
              </label>
              <div className="relative rounded-md shadow-sm">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FaEnvelope className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="pl-10 block w-full px-3 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-all duration-200"
                  placeholder="your@email.com"
                />
              </div>
            </div>
            
            <div className="pt-2">
              <button
                type="submit"
                disabled={loading}
                className="w-full flex justify-center py-3 px-4 border border-transparent rounded-lg shadow-md text-white bg-gradient-to-r from-primary to-primary-dark hover:from-primary-dark hover:to-primary focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary transform transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
              >
                {loading ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Sending...
                  </>
                ) : (
                  "Reset Password"
                )}
              </button>
            </div>
            
            <div className="text-center mt-4">
              <Link to="/login" className="font-medium text-primary hover:text-primary-dark transition-colors">
                Back to Login
              </Link>
            </div>
          </form>
        </div>
        
        <div className="text-center">
          <p className="text-gray-600">
            Need an account?{" "}
            <Link to="/signup" className="font-medium text-primary hover:text-primary-dark transition-colors">
              Sign Up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}