
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyDaRxuT_Zrgle6TUgxOkRAh33MMCOMvYdI",
  authDomain: "linkedin-clone-8610b.firebaseapp.com",
  projectId: "linkedin-clone-8610b",
  storageBucket: "linkedin-clone-8610b.appspot.com",
  messagingSenderId: "63422855253",
  appId: "1:63422855253:web:07887f001eae4a1b31fcdc",
  measurementId: "G-06CBLDKWHK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const db = getFirestore(app);