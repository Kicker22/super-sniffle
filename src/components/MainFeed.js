import React, { useState } from 'react';
import { Container, Row, Col, Card, CardBody, CardTitle, CardText, Input, Button, ListGroup, ListGroupItem } from 'reactstrap';
// import UserTray from './UserTray';

const UserProfilePage = () => {
  const [postContent, setPostContent] = useState('');

  // Handlers
  const handlePostChange = (e) => {
    setPostContent(e.target.value);
  };

  const submitPost = () => {
    // Submit post logic here
    console.log('Submitting post:', postContent);
    setPostContent('');
  };

  return (
    <Container>
      <Row>


        {/* Main Content */}
        <Col sm="9">
          {/* Create Post */}
          <Card>
            <CardBody>
              <CardTitle tag="h5">Create a Post</CardTitle>
              <Input
                type="textarea"
                placeholder="What's on your mind?"
                value={postContent}
                onChange={handlePostChange}
              />
              <Button color="primary" onClick={submitPost} className="mt-2">
                Post
              </Button>
            </CardBody>
          </Card>
          
          {/* Post Feed */}
          {/* Here you can map over the posts and display them */}
          {/* For now, just a placeholder */}
          <Card className="mt-4">
            <CardBody>
              <CardTitle tag="h5">User Posts</CardTitle>
              <CardText>Your posts will appear here...</CardText>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default UserProfilePage;
