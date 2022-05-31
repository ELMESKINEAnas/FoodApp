// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import {getFirestore} from 'firebase/firestore'; 
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCB9imroD7s5YngxakmbUNcdQq8jm8Gnv4",
  authDomain: "food-app-4ed05.firebaseapp.com",
  projectId: "food-app-4ed05",
  storageBucket: "food-app-4ed05.appspot.com",
  messagingSenderId: "438160582943",
  appId: "1:438160582943:web:1eb88016d10ac980d0282a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize firestore
export const db = getFirestore(app);