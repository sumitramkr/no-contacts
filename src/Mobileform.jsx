import React, { useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/material.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function Mobileform() {
    const [value, setValue] = useState();
    let phoneNumber = "https://wa.me/" + value;
    console.log(phoneNumber);
    return (
        <Container className="mobileForm">
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
            <Row className="buttonRow">
                <Col>
                    <a className="btn btn-success" href={phoneNumber} role="button">
                        Message
                    </a>
                </Col>
            </Row>
        </Container>
    );
}

export default Mobileform;
