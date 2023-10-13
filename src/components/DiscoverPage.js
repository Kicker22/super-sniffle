// import React from 'react';
import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Route, Link, BrowserRouter as Router, Switch } from "react-router-dom";
import CommentForm from './CommentForm';
import CommentSection from './CommentSection';
import SideNavbar from './SideNavbar';


import {
  Container,
  Row,
  Col,
  Card,
  CardBody,
  CardTitle,
  CardText,
  Button,
} from 'reactstrap';

function DiscoverPage() {

  const [posts, setPosts] = useState([]);
  const sampleComments = [
    { id: 1, author: 'John', text: 'Great post!', timestamp: '2023-10-08T15:30:00Z' },
    { id: 2, author: 'Alice', text: 'Thanks for sharing!', timestamp: '2023-10-09T12:45:00Z' },
    { id: 3, author: 'Bob', text: 'I totally agree.', timestamp: '2023-10-09T14:10:00Z' }
  ];


  useEffect(() => {
    async function fetchPosts() {
      try {
        const response = await axios.get('http://localhost:3000/api/getPost');
        setPosts(response.data);
        console.log(response.data)
      } catch (error) {
        console.error("Error fetching posts:", error);
      }
    }

    fetchPosts();
  }, []);

  return (
    <Container>
      <SideNavbar></SideNavbar>
      <Row>
        {/* Left Sidebar */}
        <Col sm={3}>
          <Card className="mb-3">
            <CardBody>
              <CardTitle>Trending Topics</CardTitle>
              <CardText>
                <ul>
                  <li>#ReactJS</li>
                  <li>#WebDevelopment</li>
                  <li>#Coding</li>
                </ul>
              </CardText>
            </CardBody>
          </Card>
        </Col>

        {/* Main Feed */}
        <Col className="mt-4" sm={6}>
          {/* Post */}
          <Container className='' >
            <Row className='flex-wrap'>
              {posts.map(post => (
                <Row className='mt-3 ' md="" key={post._id}>
                  <Card className='' body>
                    <Container className='d-flex'>
                      <img
                        src=" https://via.placeholder.com/150"
                        alt="Profile"
                        className="img-fluid rounded-circle"
                      />
                      <Router>
                        <Link to="/">
                          {post.username}
                        </Link>
                      </Router>
                    </Container>
                    <CardText>{post.content}</CardText>
                    <Container className='d-flex justify-content-between flex-wrap'>
                      <CardText> Likes: {post.likes}</CardText>
                      <CardText> Shares: {post.retweets}</CardText>
                      <CardText> Comments: {post.replies}</CardText>
                      <CardText>Created: {post.timestamp}</CardText>
                    </Container>
                    <CommentSection comments={sampleComments}></CommentSection>
                    <div>
                    <Button className="mt-3" color="primary" size="sm">Comment</Button>{' '}
                    </div>

                  </Card>
                </Row>
              ))}
            </Row>
          </Container>
        </Col>

        {/* Right Sidebar */}
        <Col sm={3}>
          <Card className="mb-3">
            <CardBody>
              <CardTitle>Who to Follow</CardTitle>
              <CardText>
                {posts.map(post => (
                  <li style={{ listStyleType: "none" }}>

                    <Router>
                      <Link to="/">
                        {post.username}
                      </Link>
                    </Router>
                  </li>
                ))}
              </CardText>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default DiscoverPage;