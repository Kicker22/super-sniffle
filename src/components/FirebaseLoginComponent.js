// FirebaseLoginComponent.js

import React, { useState } from 'react';
import firebase from '../config/firebase';

function FirebaseLoginComponent() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        setErrorMessage('');  // Reset error message on new submission

        try {
            await firebase.auth().signInWithEmailAndPassword(email, password);
            console.log('Logged in successfully');
            // Here, you can redirect or do other tasks on successful login
        } catch (error) {
            setErrorMessage(error.message);
        }
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>
                    Email:
                    <input 
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required 
                    />
                </label>
                <br />
                <label>
                    Password:
                    <input 
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required 
                    />
                </label>
                <br />
                {errorMessage && <p style={{color: 'red'}}>{errorMessage}</p>}
                <button type="submit">Login</button>
            </form>
        </div>
    );
}

export default FirebaseLoginComponent;
