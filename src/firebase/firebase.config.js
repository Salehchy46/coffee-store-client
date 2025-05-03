// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBBsyuWsu2FR4B8Ecj6PvOr36Ct7a8HmRE",
  authDomain: "coffee-store-1cb89.firebaseapp.com",
  projectId: "coffee-store-1cb89",
  storageBucket: "coffee-store-1cb89.firebasestorage.app",
  messagingSenderId: "203581077771",
  appId: "1:203581077771:web:87cef211d04f963f810a0e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;