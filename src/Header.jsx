import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Card } from "react-bootstrap";

export default function Header() {
    return (
        <Card className="card border-light text-center">
            <Card.Body>
                <Row>
                    <Col>
                        <h1 className="text-success">Message WhatsApp Number</h1>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <h2 className="text-success">Without Saving It!</h2>
                    </Col>
                </Row>
            </Card.Body>
        </Card>
    );
}
