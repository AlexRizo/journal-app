// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore/lite";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDHER4aHo55EV6MWiDC2Uen2MCg6-WNBIU",
  authDomain: "react-cursos-frhr.firebaseapp.com",
  projectId: "react-cursos-frhr",
  storageBucket: "react-cursos-frhr.appspot.com",
  messagingSenderId: "526343786902",
  appId: "1:526343786902:web:f5274268d63612fa324db7"
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth(FirebaseApp);
export const FirebaseDB = getFirestore(FirebaseApp);