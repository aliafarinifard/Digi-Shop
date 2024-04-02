// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB9M71RAdwjoI82g0L0mq4uGYqkleUtSoc",
  authDomain: "digi-shop-kala.firebaseapp.com",
  projectId: "digi-shop-kala",
  storageBucket: "digi-shop-kala.appspot.com",
  messagingSenderId: "1050600643598",
  appId: "1:1050600643598:web:18cade09bd99a37647f05f"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

export default firebaseApp;