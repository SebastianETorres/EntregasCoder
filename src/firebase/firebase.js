
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCbe7Plciw2C9MVZ0hWGwvCBlYbVLTSmpk",
  authDomain: "entregafinalnjs.firebaseapp.com",
  projectId: "entregafinalnjs",
  storageBucket: "entregafinalnjs.appspot.com",
  messagingSenderId: "526992417014",
  appId: "1:526992417014:web:3f753d1fda3394f9d54cd7",
  measurementId: "G-R6N9G2THFB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);