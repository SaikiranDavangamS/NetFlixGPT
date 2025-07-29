// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBSxRuZ-KMEs2YtOA0U_F4NisPMOMjSRns",
  authDomain: "test-68a5b.firebaseapp.com",
  projectId: "test-68a5b",
  storageBucket: "test-68a5b.firebasestorage.app",
  messagingSenderId: "740729295105",
  appId: "1:740729295105:web:b4041f82104a907610cb00",
  measurementId: "G-W249R7MSF6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();