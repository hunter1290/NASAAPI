import firebase from 'firebase'

  const firebaseApp= firebase.initializeApp({
    apiKey: "AIzaSyDQknF0JGniHT3khQv5c16ib4DayRgDCiM",
  authDomain: "shopify-c72d4.firebaseapp.com",
  projectId: "shopify-c72d4",
  storageBucket: "shopify-c72d4.appspot.com",
  messagingSenderId: "72193370730",
  appId: "1:72193370730:web:48af01455a924582c6b813"

  });

  const db= firebaseApp.firestore();
 

  export default db;