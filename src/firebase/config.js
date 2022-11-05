import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBEvL8ISr8Vfa0V8IJ6KEnlvShhQbIoMVI",
  authDomain: "fandom-cb866.firebaseapp.com",
  projectId: "fandom-cb866",
  storageBucket: "fandom-cb866.appspot.com",
  messagingSenderId: "341797942151",
  appId: "1:341797942151:web:5788ffad8f349e65e15922"
}

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const firestoreInit = () => app;