import React from 'react';
import { Link } from 'react-router-dom';
import { Alert, Button, Container } from 'react-bootstrap';

export default function UnauthorizedPage() {
  return (
    <Container className="d-flex flex-column align-items-center justify-content-center" style={{ minHeight: '70vh' }}>
      <Alert variant="danger" className="text-center">
        <Alert.Heading>Access Denied</Alert.Heading>
        <p>
          You don't have permission to access this page. This area is restricted to administrators only.
        </p>
      </Alert>
      <p>
        If you believe you should have access, please contact the system administrator.
      </p>
      <div className="mt-3">
        <Link to="/">
          <Button variant="primary" style={{ backgroundColor: "#a690c9", borderColor: "#a690c9" }}>
            Return to Home Page
          </Button>
        </Link>
      </div>
    </Container>
  );
}