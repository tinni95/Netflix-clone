import Firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
//import { seedDatabase } from "../seed";

const config = {
  apiKey: "AIzaSyBoIBiFY_Sp6LwEiyDTUwBzy6LlvftJaMY",
  authDomain: "netflix-d1761.firebaseapp.com",
  databaseURL: "https://netflix-d1761.firebaseio.com",
  projectId: "netflix-d1761",
  storageBucket: "netflix-d1761.appspot.com",
  messagingSenderId: "160584166519",
  appId: "1:160584166519:web:fa1620af6ade762f56ea72",
  measurementId: "G-JGS4EM9DMZ",
};

const firebase = Firebase.initializeApp(config);

//seedDatabase(firebase);

export { firebase };
