import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAYJkwgsskrUMkn_AEkmHL38u9dflC7SbI",
  authDomain: "pragyaprint-b6083.firebaseapp.com",
  projectId: "pragyaprint-b6083",
  storageBucket: "pragyaprint-b6083.firebasestorage.app",
  messagingSenderId: "418138756136",
  appId: "1:418138756136:web:d25e505d7ee1e8137c911d"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
