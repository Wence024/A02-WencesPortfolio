import React, {useState} from 'react';
import { Form, Button } from 'react-bootstrap';
// import Flip from 'react-reveal/Flip';

const Contact = () => {
  
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value});
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission (e.g., send an email)
  };

  return (
    // <Flip>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlID="formName">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" name="name" value={formData.name} onChange={handleChange} />
        </Form.Group>

        <Form.Group controlID="formEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" name="email" value={formData.email} onChange={handleChange} />
        </Form.Group>

        <Form.Group controlID="formMessage">
          <Form.Label>Message</Form.Label>
          <Form.Control type="text" name="message" value={formData.message} onChange={handleChange} />
        </Form.Group>

        <Button variant="primary" type="submit">Submit</Button>
      </Form>
    // </Flip>
  );
};

export default Contact;