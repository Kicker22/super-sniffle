import React, { useState, useEffect } from 'react';
import { Card, CardBody, CardTitle, CardText, CardImg } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';
import firebase from '../config/firebase'; // your firebase config file

const UserTray = () => {
  const [users, setUser] = useState(null);

  console.log(JSON.stringify(users))

  useEffect(() => {
    // Listen for authentication state changes
    const unsubscribe = firebase.auth().onAuthStateChanged((users) => {
      if (users) {
        // User is signed in, retrieve user profile
        const userProfileRef = firebase.firestore().collection('users').doc(users.uid);
        userProfileRef.get().then((doc) => {
          if (doc.exists) {
            setUser(doc.data());
          }
        });
      } else {
        // No user is signed in.
        setUser(null);
      }
    });

    // Clean up the listener on unmount
    return () => unsubscribe();
  }, []);

  if (!users) {
    return <div>User not found</div>;
  }

  return (
    <Card>
      <CardBody>
        <CardImg
          top
          referrerpolicy="no-referrer"
          src={users.photoURL || 'https://robohash.org/mail@ashallendesign.co.uk'} // Place a default image URL here
          alt={`${users.firstname}'s profile picture`}
          style={{ width: '100px', height: '100px', borderRadius: '50%' }}
        />
        <CardTitle tag="h5">{users.firstname} {users.lastname}</CardTitle>
        <CardText>@{users.username}</CardText>
        {/* Social Icons Links */}
        <div>
          <a href={users.twitterLink} className="social-icon">
            <FontAwesomeIcon icon={faTwitter} size="lg" />
          </a>
          <a href={users.facebookLink} className="social-icon">
            <FontAwesomeIcon icon={faFacebook} size="lg" />
          </a>
          <a href={users.instagramLink} className="social-icon">
            <FontAwesomeIcon icon={faInstagram} size="lg" />
          </a>
        </div>
      </CardBody>
    </Card>
  );
};

export default UserTray;
