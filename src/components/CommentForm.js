// CommentForm.js

import React, { useState } from 'react';
import { Button, Form, FormGroup, Label, Input, Container } from 'reactstrap';

function CommentForm({ onSubmit }) {
    const [comment, setComment] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();

        if (onSubmit) {
            onSubmit(comment);
        }

        // Clear the comment input after submitting
        setComment('');
    };

    return (
        <Container>
            <Form onSubmit={handleSubmit}>
                <FormGroup>
                    <Label for="commentText">Add a comment:</Label>
                    <Input 
                        type="textarea" 
                        name="comment" 
                        id="commentText" 
                        value={comment} 
                        onChange={e => setComment(e.target.value)} 
                    />
                </FormGroup>
                <Button type="submit">Post Comment</Button>
            </Form>
        </Container>
    );
}

export default CommentForm;