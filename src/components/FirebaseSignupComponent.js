// FirebaseSignupComponent.js

import React, { useState } from 'react';
import firebase from '../config/firebase';
import { Button, Form, FormGroup, Label, Input, Alert } from 'reactstrap';

function FirebaseSignupComponent() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [successMessage, setSuccessMessage] = useState('');

    const handleSignup = async (e) => {
        e.preventDefault();
        setErrorMessage('');  // Reset error message
        setSuccessMessage(''); // Reset success message

        try {
            await firebase.auth().createUserWithEmailAndPassword(email, password);
            console.log('Signed up successfully');
            setSuccessMessage('Signed up successfully! You can now log in.');

            // Optionally, clear the form or redirect the user
            setEmail('');
            setPassword('');
        } catch (error) {
            setErrorMessage(error.message);
        }
    };

    return (
        <div>
            <Form onSubmit={handleSignup}>
                <FormGroup>
                    <Label for="email">Email</Label>
                    <Input 
                        type="email" 
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required 
                    />
                </FormGroup>
                <FormGroup>
                    <Label for="password">Password</Label>
                    <Input 
                        type="password" 
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required 
                    />
                </FormGroup>
                {errorMessage && <Alert color="danger">{errorMessage}</Alert>}
                {successMessage && <Alert color="success">{successMessage}</Alert>}
                <Button type="submit" color="primary">Sign Up</Button>
            </Form>
        </div>
    );
}

export default FirebaseSignupComponent;
