import React, { useState, useEffect } from 'react';
import firebase from '../config/firebase';
import PostComponent from './PostComponent';
import { Button, Container, Row, Col, Card, CardImg, CardBody, CardTitle } from 'reactstrap';

function StemplotHomepage() {
  const samplePost = {
    authorName: 'John Doe',
    authorProfileImage: 'https://example.com/path-to-image.jpg',
    timestamp: '10 minutes ago',
    content: 'This is a sample post content.'
  };

  const [user, setUser] = useState(null);

  const signInWithGoogle = async () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    try {
      const result = await firebase.auth().signInWithPopup(provider);
      setUser(result.user);
    } catch (error) {
      console.error("Error signing in:", error.message);
    }
  };

  const signOut = async () => {
    await firebase.auth().signOut();
    setUser(null);
  };

  useEffect(() => {
    const unsubscribe = firebase.auth().onAuthStateChanged(user => {
      setUser(user);
    });

    return () => unsubscribe();
  }, []);

  return (
    <Container >
      {user ? (
        <Row className='flex-nowrap mt-3'>
          <Col md="5">
            <Card>
              <CardImg  style={{width:"13rem"}}className="img-fluid rounded-circle"
                 src={user.photoURL} alt="User profile image" />
              <CardBody>
                <CardTitle tag="h5">{user.displayName}</CardTitle>
                <Button color="danger" onClick={signOut}>Sign Out</Button>

              </CardBody>
            </Card>
          </Col>
          <Col md="8">
            {/* Here you'd typically load and display the user's tweets or a feed */}
            <h5>Your Feed:</h5>
            {/* Example static tweet */}
            <PostComponent post={samplePost}></PostComponent>
          </Col>
        </Row>
      ) : (
        <Button color="primary" onClick={signInWithGoogle}>Sign In with Google</Button>
      )}
    </Container>
  );
}

export default StemplotHomepage;
