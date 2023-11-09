import React from 'react';
import { Button } from 'reactstrap';
import firebase from '../config/firebase';
import 'firebase/auth';
import 'firebase/firestore';

// Make sure Firebase is initialized with your config before using it here.
// firebase.initializeApp(yourFirebaseConfig);

const SignupWithGoogle = () => {
  const db = firebase.firestore();

  // Function to create or update the user document in Firestore
  const createUserDocument = (user) => {
    db.collection('users').doc(user.uid).set({
      uid: user.uid,
      displayName: user.displayName,
      email: user.email,
      photoURL: user.photoURL,
      // ... any other user fields
    }, { merge: true }) // Using merge to not overwrite existing fields
    .then(() => {
      console.log('User document successfully written!');
    })
    .catch((error) => {
      console.error('Error writing document: ', error);
    });
  };

  const handleGoogleSignup = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        // const token = result.credential.accessToken;

        // The signed-in user info.
        const user = result.user;

        // If the user is new, create a new document in Firestore.
        if (result.additionalUserInfo.isNewUser) {
          createUserDocument(user);
        }
      })
      .catch((error) => {
        console.error('Error during sign up with Google: ', error);
        // Handle errors here, such as a cancelled popup, etc.
      });
  };

  return (
    <Button color="danger" onClick={handleGoogleSignup}>
      Sign up with Google
    </Button>
  );
};

export default SignupWithGoogle;
