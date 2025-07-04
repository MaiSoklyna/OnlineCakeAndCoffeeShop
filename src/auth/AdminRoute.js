import React, { useState, useEffect } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from './AuthContext';

export default function AdminRoute({ children }) {
  const { currentUser, loading } = useAuth();
  const location = useLocation();
  const [isAdmin, setIsAdmin] = useState(false);
  const [checkingAdmin, setCheckingAdmin] = useState(true);

  useEffect(() => {
    const checkAdminStatus = async () => {
      if (currentUser) {
        // This is a placeholder - in a real app, you'd check if the user is an admin
        // For demo purposes, we'll just check if the email contains "admin"
        const isAdminUser = currentUser.email && currentUser.email.includes('admin');
        setIsAdmin(isAdminUser);
      }
      setCheckingAdmin(false);
    };

    if (!loading) {
      checkAdminStatus();
    }
  }, [currentUser, loading]);

  // Show loading spinner while checking auth or admin status
  if (loading || checkingAdmin) {
    return (
      <div className="d-flex justify-content-center align-items-center" style={{ height: '100vh' }}>
        <div className="spinner-border" style={{ color: '#a690c9' }} role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }

  // If not logged in, redirect to login page
  if (!currentUser) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  // If logged in but not admin, redirect to unauthorized page
  if (!isAdmin) {
    return <Navigate to="/unauthorized" state={{ from: location }} replace />;
  }

  // If admin, show the admin content
  return children;
}

