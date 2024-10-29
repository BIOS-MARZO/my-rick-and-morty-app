import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCaEJ7WxM54feWbE9icBvltlRidhC3jUQY",
  authDomain: "auth-be321.firebaseapp.com",
  projectId: "auth-be321",
  storageBucket: "auth-be321.appspot.com",
  messagingSenderId: "38018104429",
  appId: "1:38018104429:web:8c689d5643ba885ebad364"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app)