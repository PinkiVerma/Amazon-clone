import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDDBxk4O7OcwBksp_1IhGE66DwNb8F1xK4",
    authDomain: "clone-4fc57.firebaseapp.com",
    projectId: "clone-4fc57",
    storageBucket: "clone-4fc57.appspot.com",
    messagingSenderId: "476144142398",
    appId: "1:476144142398:web:071bc8a1e3f239a329a96f",
    measurementId: "G-PKRV4TF8MT"
  };

// Use this to initialize the firebase App
const firebaseApp = firebase.initializeApp(firebaseConfig);

// Use these for db & auth
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth, db };