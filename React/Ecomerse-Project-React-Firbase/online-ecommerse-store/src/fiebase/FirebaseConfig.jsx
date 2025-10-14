import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyCE7uex7QEskee6F4P8f1Ykfiibr10KJeE",
  authDomain: "online-ecommerce-application.firebaseapp.com",
  projectId: "online-ecommerce-application",
  storageBucket: "online-ecommerce-application.firebasestorage.app",
  messagingSenderId: "790700834183",
  appId: "1:790700834183:web:3a30547e95070ea53be722"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export {db ,auth};