// File: src/firebase.js
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDnrPLJsW3gMay1ROJIncI0Bwey91NXGto",
  authDomain: "netflix--clone-6725a.firebaseapp.com",
  projectId: "netflix--clone-6725a",
  storageBucket: "netflix--clone-6725a.firebasestorage.app",
  messagingSenderId: "549864184028",
  appId: "1:549864184028:web:3b24c8ae814467e7d1fc19",
  measurementId: "G-67JDYW4FFE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);