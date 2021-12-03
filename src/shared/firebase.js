// Import the functions you need from the SDKs you need

import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB4G42zB9sonaL6H_9fOEtbxcu-h62c9dk",
  authDomain: "reweek5.firebaseapp.com",
  projectId: "reweek5",
  storageBucket: "reweek5.appspot.com",
  messagingSenderId: "451605727247",
  appId: "1:451605727247:web:bba2d7e690e672fddb7b7a",
  measurementId: "G-45JQ228F74",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const firestore = firebase.firestore();
const auth = firebase.auth();
const apiKey = firebaseConfig.apiKey;
const storage = firebase.storage();

export { auth, apiKey, firestore, storage };
