import React, { useState } from 'react';
import { Button, Form, FormGroup, Label, Input, Container } from 'reactstrap';
import { auth, db } from '../config/firebase';
import 'bootstrap/dist/css/bootstrap.min.css';

import ProfilePictureUpload from './ProfilePictureUpload';

const SignUp = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    username: '',
    firstname: '',
    lastname: '',
    // profilePicture: null
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // const handleFileChange = (e) => {
  //   setFormData({ ...formData, profilePicture: e.target.files[0] });
  // };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        formData.email,
        formData.password
      );

      if (user) {
        await db.collection('users').doc(user.uid).set({
          username: formData.username,
          firstname: formData.firstname,
          lastname: formData.lastname,
          email: formData.email,
          // Add additional fields as needed.
        });
        alert('User created successfully!');
        // Redirect or further user interaction...
      }
    } catch (error) {
      console.error('Error signing up:', error);
      alert('Error signing up:', error.message);
    }
  };

  return (
    <Container className='bg-light mt-5' style={{width: "50%"}}>
      <h1 className='mb-5'>Join the Social Media revelution</h1>
      <Form onSubmit={handleSubmit}>
        <FormGroup>
          <Label for="email">Email</Label>
          <Input type="email" name="email" value={formData.email} onChange={handleChange} required />
        </FormGroup>
        <FormGroup>
          <Label for="password">Password</Label>
          <Input type="password" name="password" value={formData.password} onChange={handleChange} required />
        </FormGroup>
        <FormGroup>
          <Label for="username">Username</Label>
          <Input type="text" name="username" value={formData.username} onChange={handleChange} required />
        </FormGroup>
        <FormGroup>
          <Label for="firstname">Firstname</Label>
          <Input type="text" name="firstname" value={formData.firstname} onChange={handleChange} required />
        </FormGroup>
        <FormGroup>
          <Label for="lastname">LastName</Label>
          <Input type="text" name="lastname" value={formData.lastname} onChange={handleChange} required />
        </FormGroup>
        <Button type="submit">Sign Up</Button>
      </Form>
    </Container>
  );
};

export default SignUp;
