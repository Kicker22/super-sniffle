import React from 'react';
import { Button } from 'reactstrap';
import firebase from '../config/firebase';
import 'firebase/auth';

// Make sure Firebase is initialized with your config before using it here.
// firebase.initializeApp(yourFirebaseConfig);

const LoginWithGoogle = () => {
  const handleGoogleLogin = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        // const token = result.credential.accessToken;

        // The signed-in user info.
        const user = result.user;
        console.log('User logged in:', user);
        // Here you can redirect the user or perform other login success actions
      })
      .catch((error) => {
        console.error('Error during login with Google: ', error);
        // Handle errors here.
      });
  };

  return (
    <Button color="danger" onClick={handleGoogleLogin}>
      Login with Google
    </Button>
  );
};

export default LoginWithGoogle;
