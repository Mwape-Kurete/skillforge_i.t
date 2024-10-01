import React from "react";
import { Row, Col } from "react-bootstrap";
import Card from "react-bootstrap/Card";

import "../Styles/tests.css";

function Testimonials() {
  return (
    <Row className="whole-tests">
      <Col className="tests-header">
        <h1>Testimonials</h1>
      </Col>
      <Row className="mb-3">
        <Col className="cards-tests-scroll">
          <Row>
            <Col className="testimonial">
              <Card className="card-tests">
                <Card.Header as="h5">John Doe</Card.Header>
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
                <Card.Header as="h5">John Doe</Card.Header>
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
                <Card.Header as="h5">John Doe</Card.Header>
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
      </Row>
    </Row>
  );
}

export default Testimonials;
