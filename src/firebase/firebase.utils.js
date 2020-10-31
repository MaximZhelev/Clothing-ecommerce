import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyDd1l1mkNK6KR26YPiH0MH3vGmHY4njpYI",
  authDomain: "crwn-clothing-db-94473.firebaseapp.com",
  databaseURL: "https://crwn-clothing-db-94473.firebaseio.com",
  projectId: "crwn-clothing-db-94473",
  storageBucket: "crwn-clothing-db-94473.appspot.com",
  messagingSenderId: "283411719065",
  appId: "1:283411719065:web:7fee2c1e7adff82e866908",
  measurementId: "G-6PMSJ9SCLR",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase;