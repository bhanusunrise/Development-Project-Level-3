import React from 'react';
import { Container, Row, Col, Card, CardBody, CardTitle, CardSubtitle, CardText, Button } from 'reactstrap';

const PriceList = () => {
    return (
        <Container>
            <h1 className="mt-5 mb-4 text-center">Pricing</h1>
            <Row>
                <Col sm="4">
                    <Card color="secondary" outline className="package" id="trial-version">
                        <CardBody>
                            <div className = "card-topic">
                                <CardTitle tag="h5" className="text-secondary">Deluxe Package</CardTitle>
                                <CardSubtitle tag="h6" className="mb-2 text-muted">Free for 30 days</CardSubtitle>
                           </div>
                            
                            <CardText>
                                <dl>
                                    <dd>3 users</dd>
                                    <dd>3 product categories</dd>
                                    <dd>30 days only</dd>
                                    <dd>40 Brands</dd>
                                    <dd>Daily and Weekly Cashflow Statement</dd>
                                    <dd>20 Suppliers</dd>
                                    <dd>500 Bills</dd>
                                </dl>
                            </CardText>
                            <Button
                                color="secondary"

                            >
                                Start free Trial
                            </Button>
                        </CardBody>                     
                    </Card>
                </Col>
                <Col sm="4">
                    <Card color="warning" outline className="package" id="gold-version">
                        <CardBody>
                            <div className = "card-topic">
                            <CardTitle tag="h5" className="text-warning">Gold Package</CardTitle>
                            <CardSubtitle tag="h6" className="mb-2 text-muted">20000 LKR / yr</CardSubtitle>
                            </div>
                            <CardText>
                                <dl>
                                    <dd>10 users</dd>
                                    <dd>30 product categories</dd>
                                    <dd>1 Year Subscription</dd>
                                    <dd>100 Brands</dd>
                                    <dd>Daily, Monthly, Yearly Cashflow Statement</dd>
                                    <dd>50 Suppliers</dd>
                                    <dd>10000 Bills</dd>
                                </dl>
                            </CardText>
                            <Button
                                color="warning"

                            >
                                Subscribe Now
                            </Button>
                        </CardBody>
                    </Card>
                </Col>
                <Col sm="4">
                    <Card color="success" outline className="package" id="platinum-version">
                        <CardBody>
                            <div className = "card-topic">
                                <CardTitle tag="h5" className="text-success">Platinum Package</CardTitle>
                                <CardSubtitle tag="h6" className="mb-2 text-muted">30000 LKR / yr</CardSubtitle>
                            </div>
                            <CardText>
                                <dl>
                                    <dd>Unlimited users</dd>
                                    <dd>Unlimited product categories</dd>
                                    <dd>1 Year Subscription</dd>
                                    <dd>Unlimited Brands</dd>
                                    <dd>Daily, Monthly, Yearly Cashflow Statement</dd>
                                    <dd>Unlimited Suppliers</dd>
                                    <dd>Unlimited Bills</dd>
                                </dl>
                            </CardText>
                            <Button
                                color="success"
                              
                            >
                                Subscribe Now
                            </Button>
                        </CardBody>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
};

export default PriceList;
