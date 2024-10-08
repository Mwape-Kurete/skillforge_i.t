import React from "react";
import { Row, Col } from "react-bootstrap";
import Card from "react-bootstrap/Card";

import "../Styles/tests.css";

function Testimonials() {
  return (
    <Row className="whole-tests">
      <Col className="tests-header">
        <h1 className="testi-head">Testimonials</h1>
      </Col>
      <Row className="mb-3">
        <Col className="cards-tests-scroll">
          <Row>
            <Col className="testimonial">
              <Card className="card-tests">
                <Card.Header as="h5">David R., Front-End Developer</Card.Header>
                <Card.Body>
                  <Card.Title>React Bootcamp Testimonial:</Card.Title>
                  <Card.Text>
                    : "The React bootcamp was exactly what I needed to level up
                    my front-end skills. The instructors were knowledgeable, and
                    the projects we built helped me land a job as a junior
                    developer."
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Col>
        <Col className="cards-tests-scroll">
          <Row>
            <Col className="testimonial">
              <Card className="card-tests">
                <Card.Header as="h5">
                  {" "}
                  James K., Junior IT Technician
                </Card.Header>
                <Card.Body>
                  <Card.Title>A+ Bootcamp Testimonial:</Card.Title>
                  <Card.Text>
                    "The A+ Bootcamp gave me the confidence I needed to pass my
                    certification exam. The hands-on labs made all the
                    difference!"
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Col>
        <Col className="cards-tests-scroll">
          <Row>
            <Col className="testimonial">
              <Card className="card-tests">
                <Card.Header as="h5">Sarah M., Aspiring Developer</Card.Header>
                <Card.Body>
                  <Card.Title>Python Bootcamp Testimonial:</Card.Title>
                  <Card.Text>
                    "Before this bootcamp, I had zero programming experience.
                    Now, I’ve built my own Python projects and even landed an
                    internship!"
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Col>
        <Col className="cards-tests-scroll">
          <Row>
            <Col className="testimonial">
              <Card className="card-tests">
                <Card.Header as="h5">
                  {" "}
                  Emily S., Office Administrator
                </Card.Header>
                <Card.Body>
                  <Card.Title>ICDL Bootcamp Testimonial:</Card.Title>
                  <Card.Text>
                    "The ICDL Bootcamp helped me master everyday software tools
                    that I now use at work. I’m much more confident with Excel,
                    Word, and presentations!"
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Col>
        <Col className="cards-tests-scroll">
          <Row>
            <Col className="testimonial">
              <Card className="card-tests">
                <Card.Header as="h5"> Lucas P., Software Engineer</Card.Header>
                <Card.Body>
                  <Card.Title>Java Bootcamp Testimonial:</Card.Title>
                  <Card.Text>
                    "Java was always intimidating to me, but this bootcamp broke
                    everything down step by step. Now, I’m building full-scale
                    applications!"
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Col>
        <Col className="cards-tests-scroll">
          <Row>
            <Col className="testimonial">
              <Card className="card-tests">
                <Card.Header as="h5">
                  {" "}
                  Amanda T., IT Project Manager
                </Card.Header>
                <Card.Body>
                  <Card.Title>Project Manager Testimonial:</Card.Title>
                  <Card.Text>
                    "I learned so much about managing IT projects, from planning
                    to execution. This bootcamp has already improved how I
                    approach projects at work!"
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Col>
      </Row>
    </Row>
  );
}

export default Testimonials;
