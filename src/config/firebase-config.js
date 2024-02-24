// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBTrjd6_ZaTY4g8GPx6wEKL6QW5riidxp0",
  authDomain: "expense-tracker-fe2a7.firebaseapp.com",
  projectId: "expense-tracker-fe2a7",
  storageBucket: "expense-tracker-fe2a7.appspot.com",
  messagingSenderId: "733165686032",
  appId: "1:733165686032:web:ca497f014dde7a5d93a995"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);
//firebase login
//firebase init
//firebase deploy