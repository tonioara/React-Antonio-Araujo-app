// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCIJlLluJFreyOiAGNdZJEewsWlvbN7x48",
  authDomain: "coderflex-react-harrypotter.firebaseapp.com",
  projectId: "coderflex-react-harrypotter",
  storageBucket: "coderflex-react-harrypotter.firebasestorage.app",
  messagingSenderId: "25621109573",
  appId: "1:25621109573:web:9730eb08c1e2a9cded3c2c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

//export la instacia de firestore
export const db = getFirestore(app);