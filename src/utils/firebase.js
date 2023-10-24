// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBM9pKiAZ10PcY-sn5NDccX20Ckc8r31BE",
  authDomain: "netflixgpt-d0229.firebaseapp.com",
  projectId: "netflixgpt-d0229",
  storageBucket: "netflixgpt-d0229.appspot.com",
  messagingSenderId: "309509076306",
  appId: "1:309509076306:web:4d735434baa867e335f68b",
  measurementId: "G-5F80RNWG4S"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();