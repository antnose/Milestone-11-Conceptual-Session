// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBUyTChxHY9wwhjNaP8hnprWzpln9b0S9c",
  authDomain: "new-one-c7f72.firebaseapp.com",
  projectId: "new-one-c7f72",
  storageBucket: "new-one-c7f72.firebasestorage.app",
  messagingSenderId: "216212560597",
  appId: "1:216212560597:web:ff5b90fc49e560b44e605c",
  measurementId: "G-4JZ4KLV106",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
