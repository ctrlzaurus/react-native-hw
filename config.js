// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCKhHb4iW09Xaipo7UA-DcdLQR0IMGFJEc",
  authDomain: "react-native-app-e617c.firebaseapp.com",
  projectId: "react-native-app-e617c",
  storageBucket: "react-native-app-e617c.appspot.com",
  messagingSenderId: "903426937433",
  appId: "1:903426937433:web:9a3683bc102e89de845748",
  measurementId: "G-GF6WFYKGP6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);