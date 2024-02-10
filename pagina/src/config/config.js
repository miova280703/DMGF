// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAr-FcwAAklc4_0YW46FuOubW1IjKCzkq0",
  authDomain: "dmgf-582cd.firebaseapp.com",
  projectId: "dmgf-582cd",
  storageBucket: "dmgf-582cd.appspot.com",
  messagingSenderId: "451461766032",
  appId: "1:451461766032:web:2f69bda5b8bbfaed827115"
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore();
