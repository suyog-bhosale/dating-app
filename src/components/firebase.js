import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyDL8FA-tYapDT_noPV6-pTuIYusWa16Aqk",
  authDomain: "tinder-50204.firebaseapp.com",
  databaseURL: "https://tinder-50204.firebaseio.com",
  projectId: "tinder-50204",
  storageBucket: "tinder-50204.appspot.com",
  messagingSenderId: "661467005802",
  appId: "1:661467005802:web:b27cad4aed01e7269e5b13",
  measurementId: "G-E92VYS6ZPS",
};

const firebaseapp = firebase.initializeApp(firebaseConfig);

const db = firebaseapp.firestore();
export default db;
