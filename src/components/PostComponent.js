import React from 'react';
import { Card, CardBody, CardTitle, CardText } from 'reactstrap';

const PostComponent = (props) => {
  return (
    <Card className="mb-3">
      <CardBody>
        {/* <CardTitle tag="h5">{props.postData.title}</CardTitle> */}
        <CardTitle tag="h5">{props.title}</CardTitle>
        {/* <CardText>{props.postData.content}</CardText> */}
        <CardText>{props.content}</CardText>
      </CardBody>
    </Card>
  );
};

export default PostComponent;