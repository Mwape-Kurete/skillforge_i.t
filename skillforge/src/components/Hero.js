//Hero.js in src/components
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import "../Styles/hero.css";
import { Link } from "react-router-dom";

function Hero({ title, subtitle }) {
  return (
    <div className="py-5 hero-sect-container">
      <Container>
        <Row className="hero-section">
          <Col className="title-sec">
            <h1 className="hero-header">SkillForge I.T</h1>
            <p className="tag-line">
              Kickstart Your IT Career with Our 4-Month Bootcamps
            </p>
          </Col>
          <Col className="col-5 right-copy">
            <div className="copy d-flex flex-column justify-content-end align-items-end">
              <p>
                Master essential IT skills with our intensive, career-focused
                courses in A+, Python, React, ICDL, Java, and Project
                Management.
              </p>
              <Button as={Link} to="/courses" className="buttonCTA text-center">
                Explore Our Courses
              </Button>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Hero;
