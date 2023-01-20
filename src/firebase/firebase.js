import {initializeApp} from "firebase/app";


const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: "hbsistemas-682ce.firebaseapp.com",
  databaseURL: "https://hbsistemas-682ce-default-rtdb.firebaseio.com",
  projectId: "hbsistemas-682ce",
  storageBucket: "hbsistemas-682ce.appspot.com",
  messagingSenderId: "682676997693",
  appId: process.env.REACT_APP_APP_ID
  };
  
  // Initialize Firebase
const app = initializeApp(firebaseConfig);


export default app