import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyD-wsxekk_ue-l06FPjrrjOwNwS7y6Dr8Y",
  authDomain: "dimondshop2-3c83d.firebaseapp.com",
  databaseURL:
    "https://dimondshop2-3c83d-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "dimondshop2-3c83d",
  storageBucket: "dimondshop2-3c83d.appspot.com",
  messagingSenderId: "956226477493",
  appId: "1:956226477493:web:e32069a028827d2c218dfc",
  measurementId: "G-R9KHT2EGJW",
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
