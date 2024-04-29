// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAEEohL56zL64UkiR03bmyAasDPVhLmPA0",
  authDomain: "netflix-51213.firebaseapp.com",
  projectId: "netflix-51213",
  storageBucket: "netflix-51213.appspot.com",
  messagingSenderId: "730348776767",
  appId: "1:730348776767:web:5791a3940b3fd83ee3778a",
  measurementId: "G-M0MDQNHH20"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();