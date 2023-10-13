// Comment.js

import React from 'react';
import { Card, CardText, CardBody, CardTitle } from 'reactstrap';

function Comment({ author, text, timestamp }) {
    return (
        <Card>
            <CardBody>
                <CardTitle tag="h6">{author} <small>({new Date(timestamp).toLocaleString()})</small></CardTitle>
                <CardText>{text}</CardText>
            </CardBody>
        </Card>
    );
}

export default Comment;