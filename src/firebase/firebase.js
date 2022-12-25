import {initializeApp} from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyD09A7AKreiMIHEKwUnNB7oTrlrOGk1P3U",
    authDomain: "hbsistemas-682ce.firebaseapp.com",
    projectId: "hbsistemas-682ce",
    storageBucket: "hbsistemas-682ce.appspot.com",
    messagingSenderId: "682676997693",
    appId: "1:682676997693:web:5aaabbfff0ed148c896454"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  export default app;