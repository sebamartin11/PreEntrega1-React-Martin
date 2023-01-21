// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCMuiH7BPa7L6dAW-82j6AAischRSqIts8",
    authDomain: "ecommerce-marvarsnacks.firebaseapp.com",
    projectId: "ecommerce-marvarsnacks",
    storageBucket: "ecommerce-marvarsnacks.appspot.com",
    messagingSenderId: "797961182459",
    appId: "1:797961182459:web:29a3308e1d8c55b9b3e45e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app)