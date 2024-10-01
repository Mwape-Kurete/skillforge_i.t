//Courses.js in src/pages
import React from "react";

import { Container, Row, Col } from "react-bootstrap";
import NavbarComponent from "../Components/NavbarComponent";
import FooterComponent from "../Components/FooterComponent.js";

import CourseCards from "../Components/CourseCards.js";
import "../Styles/courses.css";

function Courses() {
  return (
    <Container>
      <NavbarComponent />

      <br />
      <Row className="courses-cont">
        <h1 className="course-head">Our Courses</h1>
        <Col>
          <CourseCards />
        </Col>
      </Row>
      <FooterComponent />
    </Container>
  );
}

export default Courses;
