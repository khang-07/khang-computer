import { initializeApp } from "firebase/app";

// Your web app's Firebase configuration
const firebaseConfig = {

  apiKey: process.env.FIREBASE_API_KEY,

  authDomain: "khang-computer.firebaseapp.com",

  projectId: "khang-computer",

  storageBucket: "khang-computer.firebasestorage.app",

  messagingSenderId: "410096108754",

  appId: "1:410096108754:web:9dcb485b5961ced2d6d90b"

};


// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);