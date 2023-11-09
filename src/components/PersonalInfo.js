import React, { useState } from 'react';
import { Button, Form, FormGroup, Label, Input, Alert } from 'reactstrap';
import firebase from '../config/firebase';
import 'firebase/firestore';
import 'firebase/storage';

// Ensure Firebase is initialized with your config before using it here
if (!firebase.apps.length) {
    firebase.initializeApp(firebase);
  }

const PersonalInfoComponent = () => {
  const [displayName, setDisplayName] = useState('');
  const [bio, setBio] = useState('');
  const [profilePic, setProfilePic] = useState(null);
  const [message, setMessage] = useState('');
  const [user] = useState(firebase.auth().currentUser);

  const db = firebase.firestore();
  const storageRef = firebase.storage().ref();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (user) {
      const userProfileRef = db.collection('users').doc(user.uid);
      const promises = [];
      promises.push(userProfileRef.update({
        displayName: displayName,
        bio: bio
      }));

      if (profilePic) {
        const uploadTask = storageRef.child(`profilePictures/${user.uid}`).put(profilePic);
        promises.push(uploadTask.then((snapshot) => snapshot.ref.getDownloadURL()
          .then((downloadURL) => userProfileRef.update({ profilePicture: downloadURL }))));
      }

      Promise.all(promises)
        .then(() => {
          setMessage('Profile updated successfully!');
        })
        .catch((error) => {
          console.error('Error updating profile: ', error);
          setMessage('Error updating profile.');
        });
    } else {
      setMessage('No user is signed in.');
    }
  };

  const handleFileChange = (e) => {
    setProfilePic(e.target.files[0]);
  };

  return (
    <div>
      <Form onSubmit={handleSubmit}>
        <FormGroup>
          <Label for="displayName">Display Name</Label>
          <Input type="text" name="displayName" id="displayName" placeholder="Your display name" onChange={(e) => setDisplayName(e.target.value)} />
        </FormGroup>
        <FormGroup>
          <Label for="bio">Bio</Label>
          <Input type="textarea" name="bio" id="bio" placeholder="Tell us about yourself" onChange={(e) => setBio(e.target.value)} />
        </FormGroup>
        <FormGroup>
          <Label for="profilePic">Profile Picture</Label>
          <Input type="file" name="profilePic" id="profilePic" onChange={handleFileChange} />
        </FormGroup>
        <Button type="submit" color="primary">Update Profile</Button>
      </Form>
      {message && <Alert color="info">{message}</Alert>}
    </div>
  );
};

export default PersonalInfoComponent;
