import React from 'react';
import { Container, Row, Col } from 'reactstrap';

const Footer = () => {
    return (
        <footer className="footer mt-auto py-3 bg-light">
            <Container>
                <Row>
                        <span className="text-muted text-center h6">© 2024 Bhanu Sunrise Solutions. All Rights Reserved</span>
                </Row>
            </Container>
        </footer>
    );
};

export default Footer;
