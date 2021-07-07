import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAbj__oB-lk-6oJTcNO5Kk27aIih5piErM",
  authDomain: "video-chat-app-374e7.firebaseapp.com",
  projectId: "video-chat-app-374e7",
  storageBucket: "video-chat-app-374e7.appspot.com",
  messagingSenderId: "205757451114",
  appId: "1:205757451114:web:48ec8bc4f4244d145f3313",
  measurementId: "G-5Z9BEVMZF2"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore(); // DataBase
const auth = firebaseApp.auth(); //Authorisation
const provider = new firebase.auth.GoogleAuthProvider(); // Google Authorisation

export {auth,provider};
export default db;