// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDLMWYP7hfx7mMoaoinhIpIAt6qltqrAo4",
  authDomain: "vite-contact-11f7c.firebaseapp.com",
  projectId: "vite-contact-11f7c",
  storageBucket: "vite-contact-11f7c.firebasestorage.app",
  messagingSenderId: "1084572531667",
  appId: "1:1084572531667:web:ce018f672e1e8628e00d26"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);