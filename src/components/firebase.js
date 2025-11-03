// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAa63fIRC13pBLx8srTACQlephYCt7ZN38",
  authDomain: "portfolio-bf53e.firebaseapp.com",
  projectId: "portfolio-bf53e",
  storageBucket: "portfolio-bf53e.firebasestorage.app",
  messagingSenderId: "165454941871",
  appId: "1:165454941871:web:7d97ddc12963c79c730e5a",
  measurementId: "G-NDD7D40096"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export {app};