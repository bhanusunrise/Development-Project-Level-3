import React from 'react';
import { Container, Row, Col } from 'reactstrap';

const ContactSection = () => {
  return (
      <Container>
          <Row className = "text-center">
              <p className="h1">Contact Us</p>
          </Row>
          <Row className="contact-type">
              <Col xs={4}>
                  <div className="column-content">
                      <p className="h2">Phone</p>
                      <p className="h5 text-secondary">+94762018348</p>
                      <p className="h5 text-secondary">+94782773562</p>
                  </div>
        </Col>
        <Col xs={4}>
                  <div className="column-content">
                      <p className="h2">Email</p>
                      <p className="h5 text-secondary">bhanusunrisesolutions@gmail.com</p>
                  </div>
                        
        </Col>
        <Col xs={4}>
                  <div className="column-content">
                      <p className="h2">Address</p>
                      <p className="h5 text-secondary">No. 364/M, Mandawala Road, Radawana.</p>
                  </div>
        </Col>
      </Row>
    </Container>
  );
};

export default ContactSection;
