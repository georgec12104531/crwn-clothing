import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyDWmkMFbk22urd5Fn2pQiBbcWVq1aCGssA",
    authDomain: "gc-crwn-clothing.firebaseapp.com",
    databaseURL: "https://gc-crwn-clothing.firebaseio.com",
    projectId: "gc-crwn-clothing",
    storageBucket: "gc-crwn-clothing.appspot.com",
    messagingSenderId: "780511129770",
    appId: "1:780511129770:web:4cc558d12eac11185ee0d3",
    measurementId: "G-E35NQM7G9W"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);
export default firebase;