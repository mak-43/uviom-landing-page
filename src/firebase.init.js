// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth} from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB1sMACNmo9qLOlClAbEWzgVmE7lMMMEl8",
  authDomain: "uviom-cd2d8.firebaseapp.com",
  projectId: "uviom-cd2d8",
  storageBucket: "uviom-cd2d8.appspot.com",
  messagingSenderId: "438785251479",
  appId: "1:438785251479:web:5e81f55208b2ea9532f1d2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig); 
const auth=getAuth(app)

export default auth