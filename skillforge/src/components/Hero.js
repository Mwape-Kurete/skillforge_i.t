import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import "../Styles/hero.css";
import { Link } from "react-router-dom";

function Hero({ title, subtitle }) {
  return (
    <div className="py-5 hero-sect-container">
      <Container>
        <Row className="hero-section align-items-center">
          {/* Left Section with Title and Tagline */}
          <Col
            xs={12}
            md={6}
            className="text-center text-md-start title-sec mb-4 mb-md-0"
          >
            <h1 className="hero-header">{title}</h1>
            <p className="tag-line">{subtitle}</p>
          </Col>

          {/* Right Section with Copy and Button */}
          <Col xs={12} md={6} className="right-copy">
            <div className="copy d-flex flex-column justify-content-center align-items-center align-items-md-end">
              <p className="text-center text-md-end">
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
