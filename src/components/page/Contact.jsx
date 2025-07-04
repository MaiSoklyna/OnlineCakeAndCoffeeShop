import React, { useState } from 'react';
import { Form, Button, Row, Col, Alert } from 'react-bootstrap';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [formStatus, setFormStatus] = useState({
    submitted: false,
    error: false,
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      setFormStatus({
        submitted: false,
        error: true,
        message: 'Please fill in all required fields.'
      });
      return;
    }
    
    // Here you would normally send the data to your backend or email service
    // For demo purposes, we'll just simulate a successful submission
    setFormStatus({
      submitted: true,
      error: false,
      message: 'Thank you for your message! We will get back to you soon.'
    });
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  };

  return (
    <div className="container py-5">
      <div className="row">
        <div className="col-lg-12 mb-5">
          <h1 className="display-4 mb-4">Contact Us</h1>
          <hr className="mb-4" style={{ width: '50px', height: '3px', backgroundColor: '#a690c9', opacity: '1' }} />
          <p className="lead mb-4">
            We'd love to hear from you! Please fill out the form below and we'll get back to you as soon as possible.
          </p>
        </div>
      </div>
      
      <Row className="mb-5">
        <Col lg={6} className="mb-4 mb-lg-0">
          {formStatus.submitted && (
            <Alert variant="success">
              {formStatus.message}
            </Alert>
          )}
          
          {formStatus.error && (
            <Alert variant="danger">
              {formStatus.message}
            </Alert>
          )}
          
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3">
              <Form.Label>Name *</Form.Label>
              <Form.Control 
                type="text" 
                name="name" 
                value={formData.name}
                onChange={handleChange}
                required
              />
            </Form.Group>
            
            <Form.Group className="mb-3">
              <Form.Label>Email *</Form.Label>
              <Form.Control 
                type="email" 
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </Form.Group>
            
            <Form.Group className="mb-3">
              <Form.Label>Subject</Form.Label>
              <Form.Control 
                type="text" 
                name="subject"
                value={formData.subject}
                onChange={handleChange}
              />
            </Form.Group>
            
            <Form.Group className="mb-3">
              <Form.Label>Message *</Form.Label>
              <Form.Control 
                as="textarea" 
                rows={5}
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
              />
            </Form.Group>
            
            <Button type="submit" style={{ backgroundColor: '#a690c9', borderColor: '#a690c9' }}>
              Send Message
            </Button>
          </Form>
        </Col>
        
        <Col lg={6}>
          <div className="contact-info p-4 h-100" style={{ backgroundColor: '#f9f6ff', borderRadius: '8px' }}>
            <h3 className="mb-4">Get In Touch</h3>
            
            <div className="mb-4">
              <h5>Address</h5>
              <p className="mb-0">123 Bakery Street</p>
              <p>Sweet Town, ST 12345</p>
            </div>
            
            <div className="mb-4">
              <h5>Phone</h5>
              <p>(555) 123-4567</p>
            </div>
            
            <div className="mb-4">
              <h5>Email</h5>
              <p>info@cakeandcoffee.com</p>
            </div>
            
            <div>
              <h5>Business Hours</h5>
              <p className="mb-1">Monday - Friday: 7 AM - 8 PM</p>
              <p className="mb-1">Saturday: 8 AM - 8 PM</p>
              <p>Sunday: 8 AM - 5 PM</p>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Contact;
