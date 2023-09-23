import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyA7nWBih9kWKMForK4lIsRmZvkpz-zgnp4",
    authDomain: "reading-list-app-77d8f.firebaseapp.com",
    projectId: "reading-list-app-77d8f",
    storageBucket: "reading-list-app-77d8f.appspot.com",
    messagingSenderId: "822330714808",
    appId: "1:822330714808:web:1472535f1eacf4f318224d"
  };

// init Firebase
initializeApp(firebaseConfig)

// init Firestore
const db = getFirestore()

export { db } 