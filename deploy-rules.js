const admin = require('firebase-admin');
const fs = require('fs');

// Load service account from environment or file
const serviceAccount = require('./online-cake-and-coffee-firebase-adminsdk-fbsvc-6ea5e18344.json');

// Initialize Firebase Admin
if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://online-cake-and-coffee.firebaseio.com"
  });
}

// Security rules for Firestore
const firestoreRules = {
  rules: {
    ".read": false,
    ".write": false,
    "users": {
      "$uid": {
        ".read": "$uid === auth.uid || auth.token.admin === true",
        ".write": "$uid === auth.uid || auth.token.admin === true"
      }
    },
    "products": {
      ".read": true,
      ".write": "auth.token.admin === true"
    },
    "orders": {
      ".read": "auth.uid !== null",
      "$orderId": {
        ".read": "auth.uid === data.child('userId').val() || auth.token.admin === true",
        ".write": "auth.uid !== null || auth.token.admin === true"
      }
    },
    "admin": {
      ".read": "auth.token.admin === true",
      ".write": "auth.token.admin === true"
    }
  }
};

// Write rules to file
fs.writeFileSync('firebase-rules.json', JSON.stringify(firestoreRules, null, 2));

console.log('Firebase rules file created successfully!');

// Function to make a user an admin
async function setUserAsAdmin(email) {
  try {
    // Get the user by email
    const user = await admin.auth().getUserByEmail(email);
    
    // Set admin custom claim
    await admin.auth().setCustomUserClaims(user.uid, { admin: true });
    
    console.log(`User ${email} has been set as admin`);
  } catch (error) {
    console.error('Error setting admin user:', error);
  }
}

// You can call this function to set an admin
// Example: setUserAsAdmin('admin@example.com');

module.exports = {
  setUserAsAdmin
}; 