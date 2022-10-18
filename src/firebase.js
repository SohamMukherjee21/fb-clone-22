/* eslint-disable */
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC7wjuBZ0QnZuhtJ70iAWpuHpOg4xRZbuw",
  authDomain: "fb-clone-22.firebaseapp.com",
  projectId: "fb-clone-22",
  storageBucket: "fb-clone-22.appspot.com",
  messagingSenderId: "33955877756",
  appId: "1:33955877756:web:1cb9173f619808b4f7caf9",
  measurementId: "G-FYFZ61B86T",
};

// 2:56:56-2:59:56 --> Here we'll connect our React-Frontend with our Firebase-backend, create a firestore database and access that in our react-app, enable google authentication and tell firebase that we want google authentication.
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth(); //2:58:09 --> This auth will allow us to do logging in, signing in etc etc, but inside firebase here we also need to enable google authentication by going to authentication and then to sign-in method
const provider = new firebase.auth.GoogleAuthProvider(); // This tells firebase that we want the Google auth service

export { auth, provider };
export default db;
