// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCGgU6ibtOVDUUWG-m6wzqVLwG3aDnh1Bo",
  authDomain: "innovativecenter-9976e.firebaseapp.com",
  projectId: "innovativecenter-9976e",
  storageBucket: "innovativecenter-9976e.appspot.com",
  messagingSenderId: "370343794256",
  appId: "1:370343794256:web:2a75a03b763ac127df2355",
  measurementId: "G-YQ652TJLGY",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
