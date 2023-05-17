// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD5JAnrbDVIqm9G2GFwvslepXnUQaVZlFo",
  authDomain: "formula-portfolio.firebaseapp.com",
  projectId: "formula-portfolio",
  storageBucket: "formula-portfolio.appspot.com",
  messagingSenderId: "281508210210",
  appId: "1:281508210210:web:70ca07e0bc91a80acc4c7b",
  measurementId: "G-GJYT5HJLFQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


// Initialize Firebase Authentication and get a reference to the service
getAuth(app);
