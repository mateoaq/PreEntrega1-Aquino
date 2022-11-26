// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { collection, getFirestore } from "firebase/firestore/lite";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBvucmyxgbKqu7pJpROSierBoJDzyZCo2Q",
  authDomain: "react-coderhouse-c3fd3.firebaseapp.com",
  projectId: "react-coderhouse-c3fd3",
  storageBucket: "react-coderhouse-c3fd3.appspot.com",
  messagingSenderId: "660761435868",
  appId: "1:660761435868:web:2ac8c7d70b580d13bfde19",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const collectionProducts = collection(db, "productos");
