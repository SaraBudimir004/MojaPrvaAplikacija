// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDxt7xt8Iv5fpWuE9mpyNEUrwjFr2hToWo",
  authDomain: "mojaprvaaplikacija-d38ba.firebaseapp.com",
  projectId: "mojaprvaaplikacija-d38ba",
  storageBucket: "mojaprvaaplikacija-d38ba.firebasestorage.app",
  messagingSenderId: "726104293898",
  appId: "1:726104293898:web:9e54ef7024af834966d5f3",
  measurementId: "G-9ZWBJ179TG",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const firestore = getFirestore(app);
