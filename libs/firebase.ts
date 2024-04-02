// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDpxijusMDFsVDgdj_WIx8Q-R5e-wxtz2Q",
  authDomain: "e-shop-kala-b4b57.firebaseapp.com",
  projectId: "e-shop-kala-b4b57",
  storageBucket: "e-shop-kala-b4b57.appspot.com",
  messagingSenderId: "402633552271",
  appId: "1:402633552271:web:d898e8a6b0a60d55039bfa"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

export default firebaseApp;