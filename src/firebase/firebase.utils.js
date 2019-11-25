import firebase from "firebase/app";
import "firebase/firestore"; // for database
import "firebase/auth"; // for authentication

const firebaseConfig = {
  apiKey: "AIzaSyCHdoKNLd3BxWOxaKPnKx56fz_IG9tH9z8",
  authDomain: "e-commerce-dfc1f.firebaseapp.com",
  databaseURL: "https://e-commerce-dfc1f.firebaseio.com",
  projectId: "e-commerce-dfc1f",
  storageBucket: "e-commerce-dfc1f.appspot.com",
  messagingSenderId: "450673465776",
  appId: "1:450673465776:web:20d62402e1009342a79e75",
  measurementId: "G-5F8HWQ1ECG"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// exporting auth object
export const auth = firebase.auth();

// exporting firestore for storing data to firebase db
export const firestore = firebase.firestore();

// google authentication. It takes some custom parameters
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({
  prompt: "select_account" // always trigger google popup whenever we use google auth provider
});

export const signInWithGoogle = () => {
  auth.signInWithPopup(provider);
};

export default firebase;
