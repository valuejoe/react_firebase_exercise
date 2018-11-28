import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

// Initialize Firebase
var config = {
  apiKey: "AIzaSyBtYVlBiu4w8mu34j4XMXpesMf8EqNGc54",
  authDomain: "test-62217.firebaseapp.com",
  databaseURL: "https://test-62217.firebaseio.com",
  projectId: "test-62217",
  storageBucket: "test-62217.appspot.com",
  messagingSenderId: "979643114373"
};

firebase.initializeApp(config);
firebase.firestore().settings({timestampsInSnapshots: true})

export default firebase;