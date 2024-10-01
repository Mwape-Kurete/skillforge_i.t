import React from "react";

import Card from "react-bootstrap/Card";
import { Col, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";

function CourseCards() {
  return (
    <Row className="courses-all-cont">
      <Col md={6}>
        <Card className="course-cards">
          <Card.Header>A+ Bootcamp (4 Months)</Card.Header>
          <Card.Body>
            <Card.Title>
              This bootcamp prepares students for the CompTIA A+ certification
              exam, focusing on hardware, networking, and troubleshooting.
            </Card.Title>
            <Card.Text>
              <ol>
                <li>
                  Month 1: Introduction to hardware components, system
                  architecture.
                </li>
                <li>
                  Month 2: Networking essentials: IP addressing, routers, and
                  switches.
                </li>
                <li>
                  Month 3: Operating systems: Windows, Linux, and MacOS
                  troubleshooting.
                </li>
                <li>
                  Month 4: Security fundamentals, maintenance, and preparation
                  for the CompTIA A+ exam.
                </li>
              </ol>
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
      </Col>

      <Col md={6}>
        <Card className="course-cards">
          <Card.Header>A+ Bootcamp (4 Months)</Card.Header>
          <Card.Body>
            <Card.Title>
              This bootcamp prepares students for the CompTIA A+ certification
              exam, focusing on hardware, networking, and troubleshooting.
            </Card.Title>
            <Card.Text>
              <ol>
                <li>
                  Month 1: Introduction to hardware components, system
                  architecture.
                </li>
                <li>
                  Month 2: Networking essentials: IP addressing, routers, and
                  switches.
                </li>
                <li>
                  Month 3: Operating systems: Windows, Linux, and MacOS
                  troubleshooting.
                </li>
                <li>
                  Month 4: Security fundamentals, maintenance, and preparation
                  for the CompTIA A+ exam.
                </li>
              </ol>
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
      </Col>

      <Col md={6}>
        <Card className="course-cards">
          <Card.Header>A+ Bootcamp (4 Months)</Card.Header>
          <Card.Body>
            <Card.Title>
              This bootcamp prepares students for the CompTIA A+ certification
              exam, focusing on hardware, networking, and troubleshooting.
            </Card.Title>
            <Card.Text>
              <ol>
                <li>
                  Month 1: Introduction to hardware components, system
                  architecture.
                </li>
                <li>
                  Month 2: Networking essentials: IP addressing, routers, and
                  switches.
                </li>
                <li>
                  Month 3: Operating systems: Windows, Linux, and MacOS
                  troubleshooting.
                </li>
                <li>
                  Month 4: Security fundamentals, maintenance, and preparation
                  for the CompTIA A+ exam.
                </li>
              </ol>
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
      </Col>

      <Col md={6}>
        <Card className="course-cards">
          <Card.Header>A+ Bootcamp (4 Months)</Card.Header>
          <Card.Body>
            <Card.Title>
              This bootcamp prepares students for the CompTIA A+ certification
              exam, focusing on hardware, networking, and troubleshooting.
            </Card.Title>
            <Card.Text>
              <ol>
                <li>
                  Month 1: Introduction to hardware components, system
                  architecture.
                </li>
                <li>
                  Month 2: Networking essentials: IP addressing, routers, and
                  switches.
                </li>
                <li>
                  Month 3: Operating systems: Windows, Linux, and MacOS
                  troubleshooting.
                </li>
                <li>
                  Month 4: Security fundamentals, maintenance, and preparation
                  for the CompTIA A+ exam.
                </li>
              </ol>
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
}

export default CourseCards;
