// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth}from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCL7Mt1Fiy6f1Wo1Pn5E05m06UafY3x8Q0",
  authDomain: "dreamsvehicle-54dec-49699.firebaseapp.com",
  projectId: "dreamsvehicle-54dec-49699",
  storageBucket: "dreamsvehicle-54dec-49699.appspot.com",
  messagingSenderId: "934833840625",
  appId: "1:934833840625:web:bf1dfef14ea8b183fde450"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth=getAuth(app)

const analytics = getAnalytics(app);
export default auth
