// LoginComponent.js

import React from 'react';
import { Button } from 'reactstrap';
import firebase from '../config/firebase';

function Login() {
    const handleGoogleLogin = async () => {
        const provider = new firebase.auth.GoogleAuthProvider();

        try {
            const result = await firebase.auth().signInWithPopup(provider);
            const user = result.user;
            console.log("Logged in user:", user);
            // Handle the user data as required
        } catch (error) {
            console.error("Error during Google login:", error.message);
        }
    };

    return (
        <div>
            <Button color="primary" onClick={handleGoogleLogin}>
                Login with Google
            </Button>
        </div>
    );
}

export default Login;
