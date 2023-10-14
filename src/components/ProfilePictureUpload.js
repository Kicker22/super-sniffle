import React, { useState } from 'react';
import { Button, Input, FormGroup, Label, Form } from 'reactstrap';
import firebase from '../config/firebase'; // Ensure Firebase is configured

const ProfilePictureUpload = () => {
  const [image, setImage] = useState(null);
  const [url, setUrl] = useState("");
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    const file = e.target.files[0];
    if (file && file.type.includes("image")) {
      setImage(file);
    } else {
      setError("Please select an image file");
    }
  };

  const handleUpload = async () => {
    const storageRef = firebase.storage().ref(`profile_pictures/${image.name}`);
    try {
      const result = await storageRef.put(image);
      const url = await result.ref.getDownloadURL();
      setUrl(url);
      // You can update the user profile picture URL in Authentication or Firestore here.
      alert("Image uploaded successfully");
    } catch (error) {
      setError(error.message);
      console.error("Upload Error", error);
    }
  };

  return (
    <Form>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <FormGroup>
        <Label for="file">Profile Picture</Label>
        <Input type="file" name="file" id="file" onChange={handleChange} />
      </FormGroup>
      {image && (
        <FormGroup>
          <Button color="primary" onClick={handleUpload}>
            Upload
          </Button>
        </FormGroup>
      )}
      {url && (
        <FormGroup>
          <img src={url} alt="Uploaded Preview" width="100" />
        </FormGroup>
      )}
    </Form>
  );
};

export default ProfilePictureUpload;
