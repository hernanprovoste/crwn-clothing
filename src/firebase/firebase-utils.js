import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyBtUYnzzEm_6nYGXg7rdQFJLSQOdU7pQmY",
  authDomain: "crwn-db-510c5.firebaseapp.com",
  projectId: "crwn-db-510c5",
  storageBucket: "crwn-db-510c5.appspot.com",
  messagingSenderId: "699654482638",
  appId: "1:699654482638:web:276983a3a1d0b022d43e9f",
  measurementId: "G-0GK9T46P4B",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ propmt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
