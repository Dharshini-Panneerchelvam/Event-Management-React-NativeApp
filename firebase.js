// firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBo4OktRsERofPhAUZdKfX5HwwfqOTt-Bo",
    authDomain: "eventorganizerapp-cd445.firebaseapp.com",
    projectId: "eventorganizerapp-cd445",
    storageBucket: "eventorganizerapp-cd445.firebasestorage.app",
    messagingSenderId: "473207241957",
    appId: "1:473207241957:web:ba93688a8638c9f1d8e80c"
  };

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };
