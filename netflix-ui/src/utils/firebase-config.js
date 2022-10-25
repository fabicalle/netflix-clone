// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDHcSLhMF7Mu4pCBcKZS-Va4Tma-NfaZWc",
  authDomain: "netflix-ui-756a6.firebaseapp.com",
  projectId: "netflix-ui-756a6",
  storageBucket: "netflix-ui-756a6.appspot.com",
  messagingSenderId: "660254147601",
  appId: "1:660254147601:web:d3a5f6e3aa54614b6d1db0",
  measurementId: "G-141D0P7ZVL"
};


const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app);