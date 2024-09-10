// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCfLQS7cC6wmQkWtorAaoU-GdMYUk-Ujdg",
  authDomain: "reclaimrbackendservice.firebaseapp.com",
  projectId: "reclaimrbackendservice",
  storageBucket: "reclaimrbackendservice.appspot.com",
  messagingSenderId: "811886502958",
  appId: "1:811886502958:web:d1d99b0977b05ab6996bbf",
  measurementId: "G-6LY4NJ6J0S",
};

// Initialize Firebase
export const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIREBASE_AUTH = getAuth(FIREBASE_APP);
export const FIRESTORE_DB = getFirestore(FIREBASE_APP);
