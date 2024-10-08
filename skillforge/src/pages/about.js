//About.js in src/pages
import React from "react";
import Container from "react-bootstrap/Container";
import { Row, Col } from "react-bootstrap";
import NavbarComponent from "../Components/NavbarComponent";

import FooterComponent from "../Components/FooterComponent";
import WhyUs from "../Components/WhyUs";
import MeetTheTeam from "../Components/MeetTheTeam";
import "../Styles/about.css";

function About() {
  return (
    <Container>
      <NavbarComponent />
      <br />
      <Row>
        <Col className="col-12 mission text-align-center">
          <h1>Our Mission: </h1>
          <p>
            At SkillForge I.T, we aim to bridge the skills gap in the IT
            industry by offering comprehensive bootcamps that prepare students
            for the demands of the workforce.
          </p>
        </Col>
        <Col className="col-12 choice">
          <WhyUs />
        </Col>
        <Col className="col-12 meet">
          <MeetTheTeam />
        </Col>
        <Col className="col-12 students text-align-center">
          <h1>Our Students: </h1>
          <p>
            From beginners to experienced professionals, our bootcamps cater to
            all levels.
          </p>
        </Col>
      </Row>
      <FooterComponent />
    </Container>
  );
}

export default About;
