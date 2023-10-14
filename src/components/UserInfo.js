import React, { useState } from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import firebase from '../config/firebase'; // Ensure Firebase is configured and exported

const UserInformation = () => {
  const [userData, setUserData] = useState({
    username: '',
    bio: '',
    image: null
  });
  const [imageUrl, setImageUrl] = useState("");
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData((prev) => ({ ...prev, [name]: value }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file && file.type.includes("image")) {
      setUserData((prev) => ({ ...prev, image: file }));
    } else {
      setError("Please select an image file");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Image Upload to Firebase Storage
    const storageRef = firebase.storage().ref(`profile_pictures/${userData.image.name}`);
    try {
      const result = await storageRef.put(userData.image);
      const imageUrl = await result.ref.getDownloadURL();
      setImageUrl(imageUrl);
    } catch (error) {
      setError(error.message);
      console.error("Upload Error", error);
      return;
    }

    // Save User Data to Firestore
    try {
      const userDocRef = firebase.firestore().collection('users').doc(firebase.auth().currentUser.uid);
      await userDocRef.set({
        username: userData.username,
        bio: userData.bio,
        profile_picture: imageUrl
      });
      alert("User information updated!");
    } catch (error) {
      setError(error.message);
      console.error("Firestore Write Error", error);
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <FormGroup>
        <Label for="username">Username</Label>
        <Input type="text" name="username" id="username" onChange={handleChange} required />
      </FormGroup>
      <FormGroup>
        <Label for="bio">Bio</Label>
        <Input type="textarea" name="bio" id="bio" onChange={handleChange} required />
      </FormGroup>
      <FormGroup>
        <Label for="image">Profile Picture</Label>
        <Input type="file" name="image" id="image" onChange={handleImageChange} required />
      </FormGroup>
      <Button type="submit" color="primary">Submit</Button>
    </Form>
  );
};

export default UserInformation;


