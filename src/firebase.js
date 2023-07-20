
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyDQxq0WsdwhhM5pIjze9HVi3JlO74G6_7w",
  authDomain: "linkedinclone-7aac1.firebaseapp.com",
  projectId: "linkedinclone-7aac1",
  storageBucket: "linkedinclone-7aac1.appspot.com",
  messagingSenderId: "59344362010",
  appId: "1:59344362010:web:59ef08399cf32f12660fa3",
  measurementId: "G-HXN8ML0XV4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const db = getFirestore(app);