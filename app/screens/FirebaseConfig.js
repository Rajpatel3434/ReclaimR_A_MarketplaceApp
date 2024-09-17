// Import the functions you need from the SDKs you need
import { initializeApp, getApps } from "firebase/app";
import {
  getAuth,
  initializeAuth,
  getReactNativePersistence,
} from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import AsyncStorage from "@react-native-async-storage/async-storage"; // Import AsyncStorage

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCfLQS7cC6wmQkWtorAaoU-GdMYUk-Ujdg",
  authDomain: "reclaimrbackendservice.firebaseapp.com",
  projectId: "reclaimrbackendservice",
  storageBucket: "reclaimrbackendservice.appspot.com",
  messagingSenderId: "811886502958",
  appId: "1:811886502958:web:d1d99b0977b05ab6996bbf",
  measurementId: "G-6LY4NJ6J0S",
};

// Initialize Firebase app only if it hasn't been initialized already
let FIREBASE_APP;
if (getApps().length === 0) {
  FIREBASE_APP = initializeApp(firebaseConfig);
} else {
  FIREBASE_APP = getApps()[0];
}

// Initialize Firestore
export const FIRESTORE_DB = getFirestore(FIREBASE_APP);

// Initialize Firebase Auth with persistence for React Native
export const FIREBASE_AUTH = initializeAuth(FIREBASE_APP, {
  persistence: getReactNativePersistence(AsyncStorage),
});
