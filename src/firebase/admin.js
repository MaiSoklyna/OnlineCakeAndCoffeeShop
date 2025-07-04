// This file is meant to be used only in a Node.js environment (server-side)
// For example with Next.js API routes or an Express backend
// Do NOT import this file in browser code

// NOTE: This file is for reference and would need to be used in a Node.js environment
// You would typically use this in your backend API, not directly in the React app

/*
import admin from 'firebase-admin';
import serviceAccount from '../../online-cake-and-coffee-firebase-adminsdk-fbsvc-6ea5e18344.json';

// Initialize the app with a service account
if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://online-cake-and-coffee.firebaseio.com"
  });
}

export const adminAuth = admin.auth();
export const adminDb = admin.firestore();
export default admin;
*/

// In browser code, you can use a special "isAdmin" check in the client
// For example:
export const checkIsAdmin = (user) => {
  return user && user.email && user.email.includes('admin');
};

// For a real application, you would verify admin status with Firebase custom claims
// This would require a backend endpoint that uses the Firebase Admin SDK