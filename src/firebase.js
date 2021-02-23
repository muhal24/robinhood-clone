import firebase from "firebase";

const firebaseConfig = {
  // firebase config  paste here
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export { db };