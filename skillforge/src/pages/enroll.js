//Enroll.js in src/pages
import React from "react";
import Container from "react-bootstrap/Container";
import NavbarComponent from "../Components/NavbarComponent";
import { Row, Col } from "react-bootstrap";
import FooterComponent from "../Components/FooterComponent";
import FormComp from "../Components/FormComp";
import AccordionComponent from "../Components/AccordionComponent";

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

      <Row>
        <h1>Get In Touch</h1>
        <Col>
          <h1>email</h1>
        </Col>
        <Col>
          <h1>ig</h1>
        </Col>
        <Col>
          <h1>X</h1>
        </Col>
        <Col>
          <h1>facebook</h1>
        </Col>
      </Row>
      <br />
      <FooterComponent />
    </Container>
  );
}

export default Enroll;
