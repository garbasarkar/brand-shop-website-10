// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBeBEnS0Zily1BHCBG1VMFDIIZvoYEFtp4",
  authDomain: "brand-shop-assignment-10-81447.firebaseapp.com",
  projectId: "brand-shop-assignment-10-81447",
  storageBucket: "brand-shop-assignment-10-81447.appspot.com",
  messagingSenderId: "143922450556",
  appId: "1:143922450556:web:d8a5f0e94c247593c2b9f9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;