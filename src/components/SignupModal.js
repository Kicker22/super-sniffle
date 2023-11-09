import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, Form, FormGroup, Label, Input, ModalFooter } from 'reactstrap';
import firebase from '../config/firebase';
import 'firebase/auth';
import 'firebase/firestore';
import SignupWithGoogle from './SignUpWithGoogle';

// Ensure Firebase is initialized with your config before using it here
// firebase.initializeApp(yourFirebaseConfig);

const LoginModal = (props) => {
  const [modal, setModal] = useState(false);
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [firstname, setFirstName] = useState('');
  const [lastname, setLastName] = useState('');

  const toggle = () => setModal(!modal);
  const db = firebase.firestore();

  const handleSignUp = (e) => {
    e.preventDefault();
    firebase.auth().createUserWithEmailAndPassword(email, password)
      .then((result) => {
        // Update the Firebase user profile
        result.user.updateProfile({ displayName: username});
  
        // Add a new document in Firestore with the user's UID
        return db.collection('users').doc(result.user.uid).set({
          firstname: firstname,
          lastname: lastname,
          username: username,
          email: email,
          // Any additional fields you want to include
        });
      })
      .then(() => {
        console.log('User signed up and data added to Firestore!');
        toggle(); // Close the modal
      })
      .catch((error) => {
        console.error('Error signing up: ', error.message);
        // Here you would typically want to show the error to the user
      });
  };

  return (
    <div>
      <Button color="primary" onClick={toggle}>Sign Up</Button>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Sign Up</ModalHeader>
        <ModalBody>

          <Form onSubmit={handleSignUp}>
          <FormGroup>
              <Label for="email">Email</Label>
              <Input type="email" name="email" id="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
        </FormGroup>

          <FormGroup>
              <Label for="username">Username</Label>
              <Input type="username" name="username" id="username" placeholder="Username" onChange={(e) => setUsername(e.target.value)} />
        </FormGroup>

            <FormGroup>
              <Label for="firstname">FirstName</Label>
              <Input type="text" name="firstname" id="firstname" placeholder="FirstName" onChange={(e) => setFirstName(e.target.value)} />
            </FormGroup>
            <FormGroup>
              <Label for="lastname">LastName</Label>
              <Input type="text" name="lastname" id="lastname" placeholder="LastName" onChange={(e) => setLastName(e.target.value)} />
            </FormGroup>
          
            <FormGroup>
              <Label for="password">Password</Label>
              <Input type="password" name="password" id="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
            </FormGroup>

            <Button color="primary" type="submit">Sign Up</Button>
          </Form>

        </ModalBody>
        <ModalFooter>
          <SignupWithGoogle/>
          <Button color="secondary" onClick={toggle}>Cancel</Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};

export default LoginModal;
