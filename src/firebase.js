// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCDMt-VoUEGZihN5jjIcSL_pC_xORilcVM",
  authDomain: "dimondshop-6146f.firebaseapp.com",
  databaseURL: "https://dimondshop-6146f-default-rtdb.firebaseio.com",
  projectId: "dimondshop-6146f",
  storageBucket: "dimondshop-6146f.appspot.com",
  messagingSenderId: "886155626101",
  appId: "1:886155626101:web:bc0e78dfa184959c699a3c",
  measurementId: "G-4MWB00DW41",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
