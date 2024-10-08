//Enroll.js in src/pages
import React from "react";
import Container from "react-bootstrap/Container";
import NavbarComponent from "../Components/NavbarComponent";
import { Row, Col } from "react-bootstrap";
import FooterComponent from "../Components/FooterComponent";
import FormComp from "../Components/FormComp";
import AccordionComponent from "../Components/AccordionComponent";
import "bootstrap-icons/font/bootstrap-icons.css";

import "../Styles/enroll.css";

import Card from "react-bootstrap/Card";

function Enroll() {
  return (
    <Container>
      <NavbarComponent />
      <br />
      <Row className="py-5">
        <h1>Enroll Now!</h1>
        <Col>
          <FormComp />
        </Col>
      </Row>

      <Row>
        <h1>FAQs</h1>
        <Col>
          <AccordionComponent />
        </Col>
      </Row>
      <br />

      <Row>
        <Col
          xs={12}
          className="in-touch d-flex justify-content-center align-self-center"
        >
          <Card className="socials">
            <Card.Header>Get in Touch</Card.Header>
            <Card.Body>
              <Row>
                <Col className="text-align-center">
                  <i className="bi bi-instagram "></i>
                </Col>
                <Col>
                  <i className="bi bi-envelope-at"></i>
                </Col>
                <Col>
                  <i className="bi bi-twitter-x"></i>
                </Col>
                <Col>
                  <i className="bi bi-facebook"></i>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <br />
      <FooterComponent />
    </Container>
  );
}

export default Enroll;
