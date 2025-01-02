// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAJTaFoSkYR4_4wtxwep1Ggd7WtaAqr5aE",
  authDomain: "all-in-one-2024.firebaseapp.com",
  projectId: "all-in-one-2024",
  storageBucket: "all-in-one-2024.firebasestorage.app",
  messagingSenderId: "920442488486",
  appId: "1:920442488486:web:0db68af0ba1f1377dd9667"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)