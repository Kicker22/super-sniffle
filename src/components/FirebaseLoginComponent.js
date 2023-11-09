import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, Form, FormGroup, Label, Input, Alert } from 'reactstrap';
import firebase from '../config/firebase';
import { useNavigate } from 'react-router-dom';
import LoginWithGoogle from './LoginWithGoogle';

const LoginModal = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const [modal, setModal] = useState(true); // State to control modal visibility
  const history = useNavigate();

  const toggleModal = () => setModal(!modal); // Toggle modal visibility

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await firebase.auth().signInWithEmailAndPassword(email, password);
      alert('Logged in successfully!');
      history('/info');
      
      toggleModal(); // Close the modal after successful login
      
    } catch (err) {
      setError(err.message);
      console.error('Issue during login', err);
    }
  };

  return (
    <Modal isOpen={modal} toggle={toggleModal}>
      <ModalHeader toggle={toggleModal}>Login</ModalHeader>
      <ModalBody>
        <Form onSubmit={handleLogin}>
          {error && <Alert color="danger">{error}</Alert>}
          <FormGroup>
            <Label for="email">Email</Label>
            <Input
              type="email"
              name="email"
              id="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </FormGroup>
          <FormGroup>
            <Label for="password">Password</Label>
            <Input
              type="password"
              name="password"
              id="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </FormGroup>
          <Button color="primary" type="submit">Login</Button>
        <LoginWithGoogle></LoginWithGoogle>
        </Form>
      </ModalBody>
    </Modal>
  );
};

export default LoginModal;