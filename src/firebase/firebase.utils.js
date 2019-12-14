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

/* saving user to firebase database */
export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.log(`Error creating user ${error.message}`);
    }
  }

  /* always return userRef */
  return userRef;
};

/* to check if the user exists */
export const getCurrentUser = () => {
  return new Promise((resolve, reject) => {
    const unsubscribe = auth.onAuthStateChanged(userAuth => {
      unsubscribe();
      resolve(userAuth);
    }, reject);
  });
};

/* util function to add collection and documents to firebase database */
export const addCollectionAndDocuments = async (
  collectionKey,
  objectsToAdd
) => {
  console.log(objectsToAdd);
  const collectionRef = firestore.collection(collectionKey);

  /* through this we can make batch request */
  const batch = firestore.batch();

  objectsToAdd.forEach(obj => {
    /* it create new empty document/object with unique Id */
    const newDocRef = collectionRef.doc();
    batch.set(newDocRef, obj);
  });

  /* fire off our batch call 
    if it success, it returns promise and if resoled, returns null else error 
  */
  return await batch.commit();
};

/* convert shopData array into the required object  */
export const convertCollectionsSnapshotToMap = collections => {
  const transformedCollection = collections.docs.map(doc => {
    /* we get the data on collections using doc.data() */
    const { title, items } = doc.data();

    return {
      /* encodeURI => This function encodes special characters, except: , / ? : @ & = + $ #
       (Use encodeURIComponent() to encode these characters). */
      routeName: encodeURI(title.toLowerCase()),
      id: doc.id,
      title,
      items
    };
  });

  return transformedCollection.reduce((accumulator, collection) => {
    accumulator[collection.title.toLowerCase()] = collection;
    return accumulator;
  }, {});
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// exporting auth object
export const auth = firebase.auth();

// exporting firestore for storing data to firebase db
export const firestore = firebase.firestore();

// google authentication. It takes some custom parameters
export const googleProvider = new firebase.auth.GoogleAuthProvider();
googleProvider.setCustomParameters({
  prompt: "select_account" // always trigger google popup whenever we use google auth provider
});
export const signInWithGoogle = () => auth.signInWithPopup(googleProvider);

export default firebase;
