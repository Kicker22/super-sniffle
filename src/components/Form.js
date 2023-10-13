import React, { useState } from 'react';
import { Button, Form, FormGroup, Label, Input, Container } from 'reactstrap';

function FormComponent() {
    const [formData, setFormData] = useState({
        name: '',
        email: ''
    });

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(formData);
    };

    return (
        <Container>
            <Form onSubmit={handleSubmit}>
                <FormGroup>
                    <Label for="name">Name</Label>
                    <Input 
                        type="text" 
                        name="name" 
                        id="name" 
                        placeholder="Enter your name" 
                        value={formData.name} 
                        onChange={handleInputChange} 
                    />
                </FormGroup>
                <FormGroup>
                    <Label for="email">Email</Label>
                    <Input 
                        type="email" 
                        name="email" 
                        id="email" 
                        placeholder="Enter your email" 
                        value={formData.email} 
                        onChange={handleInputChange} 
                    />
                </FormGroup>
                <Button type="submit">Submit</Button>
            </Form>
        </Container>
    );
}

export default FormComponent;
