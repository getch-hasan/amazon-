// Import the functions you need from the SDKs you need
import {getAuth} from 'firebase/auth'
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBuXnUmjqrziPHSJUAJq9GSvJ7eYdqt9VM",
  authDomain: "fir-8fc6b.firebaseapp.com",
  projectId: "fir-8fc6b",
  storageBucket: "fir-8fc6b.appspot.com",
  messagingSenderId: "854183864672",
  appId: "1:854183864672:web:6671d74657f47d0fad1605"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth=getAuth(app)
export default auth;