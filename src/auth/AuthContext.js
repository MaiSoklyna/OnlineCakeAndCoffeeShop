import React, { createContext, useContext, useState, useEffect } from 'react';
import { 
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  sendPasswordResetEmail,
  updateProfile,
  onAuthStateChanged
} from 'firebase/auth';
import { doc, setDoc, getDoc } from 'firebase/firestore';
import { auth, db } from '../firebase/config';

// Create auth context
const AuthContext = createContext();

// Custom hook to use auth context
export function useAuth() {
  return useContext(AuthContext);
}

// Auth provider component
export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [userProfile, setUserProfile] = useState(null);

  // Monitor auth state changes
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      setCurrentUser(user);
      
      if (user) {
        // Fetch user profile data from Firestore
        try {
          const userDocRef = doc(db, "users", user.uid);
          const userDoc = await getDoc(userDocRef);
          
          if (userDoc.exists()) {
            setUserProfile(userDoc.data());
          }
        } catch (error) {
          console.error("Error fetching user profile:", error);
        }
      } else {
        setUserProfile(null);
      }
      
      setLoading(false);
    });

    // Cleanup subscription on unmount
    return unsubscribe;
  }, []);

  // Login function
  async function login(email, password) {
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      localStorage.setItem('isAuthenticated', 'true');
      return userCredential;
    } catch (error) {
      console.error("Login error:", error);
      throw error;
    }
  }

  // Signup function
  async function signup(email, password, displayName) {
    try {
      // Create user with Firebase Authentication
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      
      // Update profile with display name if provided
      if (displayName) {
        await updateProfile(user, { displayName });
      }
      
      // Store user data in Firestore
      const isAdmin = email.includes('admin');
      await setDoc(doc(db, "users", user.uid), {
        id: user.uid,
        name: displayName || email.split('@')[0],
        email: email,
        isAdmin: isAdmin,
        createdAt: new Date().toISOString()
      });
      
      localStorage.setItem('isAuthenticated', 'true');
      return userCredential;
    } catch (error) {
      console.error("Signup error:", error);
      throw error;
    }
  }

  // Logout function
  async function logout() {
    try {
      await signOut(auth);
      localStorage.removeItem('isAuthenticated');
      localStorage.removeItem('userInfo');
      return true;
    } catch (error) {
      console.error("Logout error:", error);
      throw error;
    }
  }

  // Reset password function
  async function resetPassword(email) {
    try {
      await sendPasswordResetEmail(auth, email);
      return true;
    } catch (error) {
      console.error("Reset password error:", error);
      throw error;
    }
  }

  // Update user profile
  async function updateUserProfile(user, data) {
    try {
      // Update Firebase Auth profile
      await updateProfile(user, data);
      
      // Update Firestore user document
      if (user.uid) {
        const userRef = doc(db, "users", user.uid);
        await setDoc(userRef, { ...data }, { merge: true });
      }
      
      return true;
    } catch (error) {
      console.error("Update profile error:", error);
      throw error;
    }
  }

  // Check if user is admin
  function isAdmin() {
    return (currentUser && currentUser.email && currentUser.email.includes('admin')) || 
           (userProfile && userProfile.isAdmin === true);
  }

  const value = {
    currentUser,
    userProfile,
    loading,
    login,
    signup,
    logout,
    resetPassword,
    updateUserProfile,
    isAdmin
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
} 