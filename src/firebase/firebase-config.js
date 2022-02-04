// Import the functions you need from the SDKs you need
import firebase from "firebase/app";
import 'firebase/firestore'
import 'firebase/auth'


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAbFEafBw_L9d01xv8lTltNTxVVkWcNNdU",
  authDomain: "ares-5188e.firebaseapp.com",
  projectId: "ares-5188e",
  storageBucket: "ares-5188e.appspot.com",
  messagingSenderId: "808303280700",
  appId: "1:808303280700:web:df1975d31f3ea8fcea7939"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore
const googleAuthProvider = new firebase.auth.GoogleAuthProvider()

export {
    db,
    googleAuthProvider, 
    firebase
}