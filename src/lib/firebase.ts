// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBDpXySykiIUB6Ms92pcSgN2OI4KICktJM",
  authDomain: "mywebsiteadmin-ba30b.firebaseapp.com",
  projectId: "mywebsiteadmin-ba30b",
  storageBucket: "mywebsiteadmin-ba30b.firebasestorage.app",
  messagingSenderId: "322060217815",
  appId: "1:322060217815:web:913af5aefa29d4c3bfaf92",
  measurementId: "G-6JFKRG6X3F"
};

// Initialize Firebase
// To prevent reinitialization in Next.js/Fast Refresh environments:
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

const auth = getAuth(app);
const db = getFirestore(app);

export { app, auth, db };
