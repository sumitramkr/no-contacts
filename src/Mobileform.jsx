import React, { useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/material.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Card } from "react-bootstrap";

function Mobileform() {
    const [value, setValue] = useState();
    let phoneNumber = "https://wa.me/+" + value;
    console.log(phoneNumber);
    return (
        <Card className="card border-light text-center">
            <Card.Body>
                <Row>
                    <Col>
                        <PhoneInput
                            country={"in"}
                            preferredCountries={["in", "us"]}
                            placeholder="Mobile Number"
                            value={value}
                            onChange={phone => setValue(phone)}
                            containerClass={"phoneInput"}
                            inputClass={"phoneInput"}
                        />
                    </Col>
                </Row>
                <Row className="buttonRow p-0">
                    <Col>
                        <a className="btn btn-success w-100 fw-bold" target="_blank" rel="noreferrer" href={phoneNumber} role="button">
                            {"Message".toUpperCase()}
                        </a>
                    </Col>
                </Row>
            </Card.Body>
        </Card>
    );
}

export default Mobileform;
