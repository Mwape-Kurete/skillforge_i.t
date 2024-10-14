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
    <Container fluid>
      <NavbarComponent />
      <br />
      {/* Enroll Section */}
      <Row className="py-5">
        <Col xs={12} className="text-center mb-4">
          <h1>Enroll Now!</h1>
        </Col>
        <Col xs={12} md={8} lg={6} className="mx-auto">
          <FormComp />
        </Col>
      </Row>

      {/* FAQ Section */}
      <Row>
        <Col xs={12} className="text-center mb-4">
          <h1>FAQs</h1>
        </Col>
        <Col xs={12} md={10} lg={8} className="mx-auto">
          <AccordionComponent />
        </Col>
      </Row>

      <br />

      {/* Get in Touch Section */}
      <Row>
        <Col
          xs={12}
          className="in-touch d-flex justify-content-center align-self-center"
        >
          <Card className="socials-card">
            <Card.Header className="text-center">Get in Touch</Card.Header>
            <Card.Body>
              <Row>
                <Col xs={3} className="text-center">
                  <i className="bi bi-instagram"></i>
                </Col>
                <Col xs={3} className="text-center">
                  <i className="bi bi-envelope-at"></i>
                </Col>
                <Col xs={3} className="text-center">
                  <i className="bi bi-twitter-x"></i>
                </Col>
                <Col xs={3} className="text-center">
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
