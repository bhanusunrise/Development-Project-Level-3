import React from 'react';
import { Container, Row, Col, Card, CardBody, CardTitle, CardSubtitle, CardText } from 'reactstrap';

const PriceList = () => {
    return (
        <Container>
            <h1 className="mt-5 mb-4 text-center">Price List</h1>
            <Row>
                <Col sm="4">
                    <Card>
                        <CardBody>
                            <CardTitle tag="h5">Trial Version</CardTitle>
                            <CardSubtitle tag="h6" className="mb-2 text-muted">Free for 30 days</CardSubtitle>
                            <CardText>
                                <ul>
                                    <li>3 users</li>
                                    <li>3 product categories</li>
                                    <li>Feature 2</li>
                                    <li>Feature 3</li>
                                    <li>Feature 4</li>
                                    <li>Feature 5</li>
                                    <li>Feature 6</li>
                                    <li>Feature 7</li>
                                    <li>Feature 8</li>
                                    <li>Feature 9</li>
                                </ul>
                            </CardText>
                        </CardBody>
                    </Card>
                </Col>
                <Col sm="4">
                    <Card>
                        <CardBody>
                            <CardTitle tag="h5">Gold Package</CardTitle>
                            <CardSubtitle tag="h6" className="mb-2 text-muted">20000 LKR / yr</CardSubtitle>
                            <CardText>
                                <ul>
                                    <li>10 users</li>
                                    <li>30 product categories</li>
                                    <li>Feature 2</li>
                                    <li>Feature 3</li>
                                    <li>Feature 4</li>
                                    <li>Feature 5</li>
                                    <li>Feature 6</li>
                                    <li>Feature 7</li>
                                    <li>Feature 8</li>
                                    <li>Feature 9</li>
                                </ul>
                            </CardText>
                        </CardBody>
                    </Card>
                </Col>
                <Col sm="4">
                    <Card>
                        <CardBody>
                            <CardTitle tag="h5">Platinum Package</CardTitle>
                            <CardSubtitle tag="h6" className="mb-2 text-muted">25000 LKR / yr</CardSubtitle>
                            <CardText>
                                <ul>
                                    <li>20 users</li>
                                    <li>unlimited categories</li>
                                    <li>Feature 2</li>
                                    <li>Feature 3</li>
                                    <li>Feature 4</li>
                                    <li>Feature 5</li>
                                    <li>Feature 6</li>
                                    <li>Feature 7</li>
                                    <li>Feature 8</li>
                                    <li>Feature 9</li>
                                </ul>
                            </CardText>
                        </CardBody>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
};

export default PriceList;