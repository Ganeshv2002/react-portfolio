
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { getStorage } from 'firebase/storage';
import { getFirestore } from 'firebase/firestore/lite';

const firebaseConfig = {
  apiKey: "AIzaSyAn_m2ikg5Rv0HRfGlu-Ai0SKCy1UDC2i8",
  authDomain: "portfolio-d31b7.firebaseapp.com",
  projectId: "portfolio-d31b7",
  storageBucket: "portfolio-d31b7.appspot.com",
  messagingSenderId: "401021979925",
  appId: "1:401021979925:web:f7d10b369efcc27354ad1c"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth();
const provider = new GoogleAuthProvider();
export const db = getFirestore(app);
export const storage = getStorage(app);


export const signInWithGoogle = () => signInWithPopup(auth, provider);