import React from 'react';
import PostComponent from './PostComponent';
import { Container, Card, CardBody, CardTitle, CardText } from 'reactstrap';
import "../css/Discover.css";

const NonAuthDiscoverPage = () => {
  // Example static posts
  const posts = [
    { id: 1, title: 'Post 1', content: 'This is an interesting post 1.' },
    { id: 2, title: 'Post 2', content: 'This is an interesting post 2.' },
    // Add more sample posts as desired...
  ];

  return (
    <Container className="discover-container">
        <PostComponent title="Post Title 1" content="This is the content of the first post."></PostComponent>
        <PostComponent title="Post Title 1" content="This is the content of the first post."></PostComponent>
    </Container>
  );
};

export default NonAuthDiscoverPage;
