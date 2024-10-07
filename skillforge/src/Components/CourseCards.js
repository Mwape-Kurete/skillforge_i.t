import React from "react";

import Card from "react-bootstrap/Card";
import { Col, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

function CourseCards() {
  return (
    <Row className="courses-all-cont">
      <Col md={6} className="course-col my-5">
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
            <div className="mt-auto d-flex justify-content-center">
              <Button className="enroll-now-cta">
                <Link to="/enroll" className="link-text">
                  Enroll Now
                </Link>
              </Button>
            </div>
          </Card.Body>
        </Card>
      </Col>

      <Col md={6} className="course-col  my-5">
        <Card className="course-cards">
          <Card.Header>Python Bootcamp (4 Months)</Card.Header>
          <Card.Body>
            <Card.Title>
              Learn the fundamentals of programming with Python, one of the most
              versatile languages in the industry.
            </Card.Title>
            <Card.Text>
              <ol>
                <li>
                  Month 1: Introduction to Python, data types, variables, and
                  functions.
                </li>
                <li>Month 2: Loops, conditionals, and error handling.</li>
                <li>
                  Month 3: Working with files, data structures (lists,
                  dictionaries, sets).
                </li>
                <li>
                  Month 4: Project work: Building a simple Python application
                  (e.g., a calculator or data analysis tool).
                </li>
              </ol>
            </Card.Text>
            <div className="mt-auto d-flex justify-content-center">
              <Button className="enroll-now-cta">
                <Link to="/enroll" className="link-text">
                  Enroll Now
                </Link>
              </Button>
            </div>
          </Card.Body>
        </Card>
      </Col>

      <Col md={6} className="course-col  my-5">
        <Card className="course-cards">
          <Card.Header>React Bootcamp (4 Months)</Card.Header>
          <Card.Body>
            <Card.Title>
              Master front-end web development using React, one of the most
              popular JavaScript libraries.
            </Card.Title>
            <Card.Text>
              <ol>
                <li>Month 1: Introduction to JavaScript and ES6 basics.</li>
                <li>
                  Month 2: Introduction to React, components, and state
                  management.
                </li>
                <li>
                  Month 3: Handling events, forms, and making HTTP requests.
                </li>
                <li>
                  Month 4: Project work: Building a dynamic React-based web
                  application.
                </li>
              </ol>
            </Card.Text>
            <div className="mt-auto d-flex justify-content-center">
              <Button className="enroll-now-cta">
                <Link to="/enroll" className="link-text">
                  Enroll Now
                </Link>
              </Button>
            </div>
          </Card.Body>
        </Card>
      </Col>

      <Col md={6} className="course-col  my-5">
        <Card className="course-cards">
          <Card.Header>ICDL Bootcamp (4 Months)</Card.Header>
          <Card.Body>
            <Card.Title>
              The ICDL bootcamp provides students with the skills to use
              essential computer applications effectively.
            </Card.Title>
            <Card.Text>
              <ol>
                <li>
                  Month 1: Introduction to IT concepts and file management.
                </li>
                <li>Month 2: Word processing (MS Word, Google Docs).</li>
                <li>
                  Month 3: Spreadsheets and data analysis (MS Excel, Google
                  Sheets).
                </li>
                <li>
                  Month 4: Presentations and databases (MS PowerPoint, Google
                  Slides, MS Access).
                </li>
              </ol>
            </Card.Text>
            <div className="mt-auto d-flex justify-content-center">
              <Button className="enroll-now-cta">
                <Link to="/enroll" className="link-text">
                  Enroll Now
                </Link>
              </Button>
            </div>
          </Card.Body>
        </Card>
      </Col>

      <Col md={6} className="course-col  my-5">
        <Card className="course-cards">
          <Card.Header>Java Bootcamp (4 Months)</Card.Header>
          <Card.Body>
            <Card.Title>
              Learn Java programming, an essential language for enterprise-level
              applications and Android development.
            </Card.Title>
            <Card.Text>
              <ol>
                <li>
                  Month 1: Introduction to Java, setting up the environment, and
                  basic syntax.
                </li>
                <li>Month 2: Object-oriented programming (OOP) concepts.</li>
                <li>
                  Month 3: Working with files, collections, and error handling.
                </li>
                <li>
                  Month 4: Project work: Building a Java-based application
                  (e.g., a to-do list app).
                </li>
              </ol>
            </Card.Text>
            <div className="mt-auto d-flex justify-content-center">
              <Button className="enroll-now-cta">
                <Link to="/enroll" className="link-text">
                  Enroll Now
                </Link>
              </Button>
            </div>
          </Card.Body>
        </Card>
      </Col>
      <Col md={6} className="course-col  my-5">
        <Card className="course-cards">
          <Card.Header>Project Management Bootcamp (4 Months)</Card.Header>
          <Card.Body>
            <Card.Title>
              This bootcamp provides foundational knowledge and skills in
              managing IT projects, aligned with the PMP certification.
            </Card.Title>
            <Card.Text>
              <ol>
                <li>
                  Month 1: Introduction to project management frameworks and
                  methodologies (Agile, Waterfall).
                </li>
                <li>
                  Month 2: Project planning, scheduling, and resource
                  management.
                </li>
                <li>
                  Month 3: Risk management, budgeting, and quality assurance.
                </li>
                <li>
                  Month 4: Project work: Managing a simulated IT project using
                  learned skills.
                </li>
              </ol>
            </Card.Text>
            <div className="mt-auto d-flex justify-content-center">
              <Button className="enroll-now-cta">
                <Link to="/enroll" className="link-text">
                  Enroll Now
                </Link>
              </Button>
            </div>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
}

export default CourseCards;
