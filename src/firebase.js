import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAMLKBqR_xJBrLykAChcK-n_O4soE_rDpE",
  authDomain: "clone-de8eb.firebaseapp.com",
  projectId: "clone-de8eb",
  storageBucket: "clone-de8eb.appspot.com",
  messagingSenderId: "76121336586",
  appId: "1:76121336586:web:c8fc844292321d0f0f28f3",
  measurementId: "G-WL8S6KKE2N",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
