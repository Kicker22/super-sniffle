// FirebaseLoginModalComponent.js

import React, { useState } from 'react';
import firebase from '../config/firebase';
import { Button, Modal, ModalHeader, ModalBody, Form, FormGroup, Label, Input, Alert } from 'reactstrap';

function FirebaseLoginModalComponent() {
    const [modalOpen, setModalOpen] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const toggleModal = () => {
        setModalOpen(!modalOpen);
    };

    const handleLogin = async (e) => {
        e.preventDefault();
        setErrorMessage('');  // Reset error message

        try {
            await firebase.auth().signInWithEmailAndPassword(email, password);
            console.log('Logged in successfully');
            // You can handle further actions like redirecting the user here
            toggleModal();
        } catch (error) {
            setErrorMessage(error.message);
        }
    };

    return (
        <div>
            <Button color="primary" onClick={toggleModal}>Login</Button>

            <Modal isOpen={modalOpen} toggle={toggleModal}>
                <ModalHeader toggle={toggleModal}>Login</ModalHeader>
                <ModalBody>
                    <Form onSubmit={handleLogin}>
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
                        <Button color="primary" type="submit">Submit</Button>
                    </Form>
                </ModalBody>
            </Modal>
        </div>
    );
}

export default FirebaseLoginModalComponent;
