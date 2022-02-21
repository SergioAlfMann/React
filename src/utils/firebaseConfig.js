// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCDpboWaHTvjscpPwwnQ8SalbJg20ruieA",
  authDomain: "ecomerce23245.firebaseapp.com",
  projectId: "ecomerce23245",
  storageBucket: "ecomerce23245.appspot.com",
  messagingSenderId: "242603045350",
  appId: "1:242603045350:web:fad4699936c8faf3972627"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);