// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAL-ntgrDhCSMOBEqz3uh09nPV-q6PCeeE",
  authDomain: "restaurant-ass-11.firebaseapp.com",
  projectId: "restaurant-ass-11",
  storageBucket: "restaurant-ass-11.appspot.com",
  messagingSenderId: "246021425362",
  appId: "1:246021425362:web:129fae2360e3275364450b",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
