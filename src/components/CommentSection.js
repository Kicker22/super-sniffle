// CommentSection.js

import React from 'react';
import { Container } from 'reactstrap';
import Comment from './Comment';

function CommentSection({ comments }) {
    // Sort comments by most recent (assuming each comment has a timestamp)
    const sortedComments = [...comments].sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp));

    return (
        <Container>
            {sortedComments.map(comment => (
                <Comment 
                    key={comment.id}
                    author={comment.author}
                    text={comment.text}
                    timestamp={comment.timestamp}
                />
            ))}
        </Container>
    );
}

export default CommentSection;