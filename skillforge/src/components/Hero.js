//Hero.js in src/components
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";

function Hero({ title, subtitle }) {
  return (
    <div className="py-5">
      <Container>
        <Row className="hero-section">
          <Col>
            <h1>SkillForge I.T</h1>
          </Col>
          <Col>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Molestias nobis, quaerat consequatur iste in voluptates maiores
              temporibus doloremque obcaecati ullam nihil laboriosam sed magni
              consequuntur neque, cum ipsam velit libero.
            </p>
            <Button>View Our Courses</Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Hero;
