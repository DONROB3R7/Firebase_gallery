import firebase from "firebase/app";
import "firebase/storage";
import "firebase/firestore";

// Your web app's Firebase configuration
var config = {
  apiKey: "AIzaSyBaBMdDyEotJCBTlCFg87ZdEMpv7sZWblM",
  authDomain: "fir-gallery-1b939.firebaseapp.com",
  databaseURL: "https://fir-gallery-1b939.firebaseio.com",
  projectId: "fir-gallery-1b939",
  storageBucket: "fir-gallery-1b939.appspot.com",
  messagingSenderId: "117799571564",
  appId: "1:117799571564:web:bd33574ff2fec26341c849"
};

// Initialize Firebase
if (!firebase.apps.length) {
  firebase.initializeApp(config);
}

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectFirestore, projectStorage, timestamp };
