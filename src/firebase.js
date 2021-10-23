import firebase from "firebase/app";
import "firebase/firestore";

// Config
const config = {
    apiKey: "AIzaSyAzKnibemdD2fMJBUj3C_sdhERSKlEu6gc",
    authDomain: "crochetart-7aa9d.firebaseapp.com",
    projectId: "crochetart-7aa9d",
    storageBucket: "crochetart-7aa9d.appspot.com",
    messagingSenderId: "294395225654",
    appId: "1:294395225654:web:870597e0c7d13a2f301a97",
    measurementId: "G-82BS94T4MQ"

  };

const firebaseInit = firebase.initializeApp(config);

export { firebaseInit };


