import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCqQRQ7u9AqRnDLOV5i8-fxtdQ-D8eZfkU",
  authDomain: "online-cake-and-coffee.firebaseapp.com",
  projectId: "online-cake-and-coffee",
  storageBucket: "online-cake-and-coffee.firebasestorage.app",
  messagingSenderId: "169545291974",
  appId: "1:169545291974:web:3d3bc6fe18aa46e6405fc7",
  measurementId: "G-RM17WP7R1S"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize services
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

export { auth, db, storage };
export default app; 