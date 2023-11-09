// firebaseConfig.js
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';

const firebaseConfig = {
    apiKey: "AIzaSyCNDal2v9dMF39_6aQUEPOwpiICQ27IjJs",
    authDomain: "stemplot.firebaseapp.com",
    projectId: "stemplot",
    storageBucket: "stemplot.appspot.com",
    messagingSenderId: "248032723796",
    appId: "1:248032723796:web:5d1e2f5a2484c0addc7ec1",
    measurementId: "G-JE2RNXVDXE"
};

firebase.initializeApp(firebaseConfig);
export const auth = firebase.auth();
export const db = firebase.firestore();

export default firebase;
