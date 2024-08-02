// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import "firebase/auth";
import "firebase/database";
import "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAnRIhX905XDNP4HiXSOSPuZ7tC6xp_G3c",
  authDomain: "react-disney-plus-app-93123.firebaseapp.com",
  projectId: "react-disney-plus-app-93123",
  storageBucket: "react-disney-plus-app-93123.appspot.com",
  messagingSenderId: "648913301085",
  appId: "1:930830399484:web:24d7d96c25ef31b5bc2479"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;