// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth"


const firebaseConfig = {
  apiKey: "AIzaSyDzrcGd3p1WWQKe0zCcgwRrn4SeeVFNb-s",
  authDomain: "valaint-aa920.firebaseapp.com",
  databaseURL: "https://valaint-aa920-default-rtdb.firebaseio.com",
  projectId: "valaint-aa920",
  storageBucket: "valaint-aa920.appspot.com",
  messagingSenderId: "148390222129",
  appId: "1:148390222129:web:9de861410861fc1b55f810",
  measurementId: "G-6RGS5WXLS8",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();