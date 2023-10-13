import React from 'react';
import { Card, CardImg, CardBody, CardTitle, CardSubtitle, CardText } from 'reactstrap';

function PostComponent({ post }) {
  return (
    <Card>
      <CardBody>
        <div className="d-flex">
          <CardImg 
            style={{ width: '50px', borderRadius: '50%', marginRight:"1rem" }} 
            src="https://via.placeholder.com/150" 
            alt="Author profile"
          />
          <div className="ml-3">
            <CardTitle tag="h5">{post.authorName}</CardTitle>
            <CardSubtitle tag="h6" className="mb-2 text-muted">{post.timestamp}</CardSubtitle>
          </div>
        </div>
        <CardText className="mt-3">{post.content}</CardText>
      </CardBody>
    </Card>
  );
}

export default PostComponent;
