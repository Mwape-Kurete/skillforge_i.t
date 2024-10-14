import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import NavbarComponent from "../Components/NavbarComponent";
import FooterComponent from "../Components/FooterComponent.js";
import CourseCards from "../Components/CourseCards.js";
import "../Styles/courses.css";

function Courses() {
  return (
    <Container fluid>
      <NavbarComponent />

      <br />

      {/* Courses Header */}
      <Row className="courses-cont text-center mb-4">
        <Col>
          <h1 className="course-head">Our Courses</h1>
        </Col>
      </Row>

      {/* Course Cards */}
      <Row>
        <Col xs={12} md={10} lg={8} className="mx-auto">
          <CourseCards />
        </Col>
      </Row>

      <br />

      <FooterComponent />
    </Container>
  );
}

export default Courses;
