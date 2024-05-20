import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function Footer() {
    return (
        <Container className="footer">
            <Row>
                <Col className="text-success">
                    &copy; {new Date().getFullYear()} Copyright:{" "}
                    <a className="text-success" href="https://github.com/sumitramkr/some">
                        @sumitramkr
                    </a>
                </Col>
            </Row>
        </Container>
    );
}
