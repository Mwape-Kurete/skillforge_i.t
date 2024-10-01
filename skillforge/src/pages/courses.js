//Courses.js in src/pages
import React from "react";

import { Container, Row, Col } from "react-bootstrap";
import NavbarComponent from "../Components/NavbarComponent";
import Hero from "../Components/Hero";
import FooterComponent from "../Components/FooterComponent.js";

import CourseCards from "../Components/CourseCards.js";
import { CardGroup } from "react-bootstrap";
import "../Styles/courses.css";

function Courses() {
  const heroData = {
    "/": {
      title: "SkillForge I.T",
      subtitle: "Your journey to mastering IT starts here!",
    },
    "/about": {
      title: "About Us",
      subtitle: "Learn more about our mission and team.",
    },
    "/courses": {
      title: "Explore Our Courses",
      subtitle: "Master essential IT skills with our bootcamps.",
    },
  };

  const currentPage = window.location.pathname;

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
