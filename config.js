import firebase from 'firebase';
require('@firebase/firestore')

var firebaseConfig = {
  apiKey: "AIzaSyAdMfjbkY6DA0yyUhcitVCJRkg6xAfw29k",
  authDomain: "book-santa-f688a.firebaseapp.com",
  projectId: "book-santa-f688a",
  storageBucket: "book-santa-f688a.appspot.com",
  messagingSenderId: "420143425244",
  appId: "1:420143425244:web:7b1909b4318413f5ca3619"
  };


// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
