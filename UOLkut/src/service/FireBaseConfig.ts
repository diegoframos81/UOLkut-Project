// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
export const firebaseConfig = initializeApp({
    apiKey: "AIzaSyBRW1Sor7I6H1Z8f2OgfUt-BjWs_uqNWPQ",
    authDomain: "uolkut-76db3.firebaseapp.com",
    projectId: "uolkut-76db3",
    storageBucket: "uolkut-76db3.appspot.com",
    messagingSenderId: "74347377966",
    appId: "1:74347377966:web:e7f2b9de36f959ee3c36bf"
});

// Initialize Firebase
export const auth = getAuth(firebaseConfig);