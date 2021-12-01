// Import the functions you need from the SDKs you need
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCsmrG3lNuOsGnqPA4tzHAlHyFki9DAdqM",
  authDomain: "week5-10bc2.firebaseapp.com",
  projectId: "week5-10bc2",
  storageBucket: "week5-10bc2.appspot.com",
  messagingSenderId: "59131054912",
  appId: "1:59131054912:web:21ab901b81d54bf3d608a5",
  measurementId: "G-J6GQB0PD06",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const firestore = firebase.firestore();
const auth = firebase.auth();
const apiKey = firebaseConfig.apiKey;

export { auth, apiKey, firestore };
