import { initializeApp } from 'firebase/app';
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: 'AIzaSyCKhHb4iW09Xaipo7UA-DcdLQR0IMGFJEc',
  authDomain: 'react-native-app-e617c.firebaseapp.com',
  databaseURL: 'https://react-native-app-e617c.firebaseio.com',
  projectId: 'react-native-app-e617c',
  storageBucket: 'react-native-app-e617c.appspot.com',
  messagingSenderId: '903426937433',
  appId: '1:903426937433:android:b78643cf1a07a47b845748',
  measurementId: 'G-measurement-id',
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);