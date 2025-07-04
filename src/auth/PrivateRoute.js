import React from 'react';
import { Navigate, Outlet, useLocation } from 'react-router-dom';
import { useAuth } from './AuthContext';

export function PrivateRoute() {
  const { currentUser } = useAuth();
  const location = useLocation();

  return currentUser ? <Outlet /> : <Navigate to="/login" state={{ from: location }} replace />;
}

export function AdminRoute() {
  const { currentUser, isAdmin } = useAuth();
  const location = useLocation();

  if (!currentUser) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return isAdmin() ? <Outlet /> : <Navigate to="/unauthorized" replace />;
} 