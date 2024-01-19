import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function Header() {
    return (
        <Container className="header">
            <Row>
                <Col>
                    <h1>Message WhatsApp Number</h1>
                </Col>
            </Row>
            <Row>
                <Col>
                    <h2>Without Saving It!</h2>
                </Col>
            </Row>
        </Container>
    );
}
