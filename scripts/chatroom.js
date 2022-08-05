// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBcWTZtc9FlRzWaAKdw4DheGMXTiTUcCuU",
  authDomain: "yeetsever.firebaseapp.com",
  projectId: "yeetsever",
  storageBucket: "yeetsever.appspot.com",
  messagingSenderId: "880124899974",
  appId: "1:880124899974:web:3985edba02af4fe89e1707",
  measurementId: "G-DY1TGER0NF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);