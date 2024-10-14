import React from "react";
import Button from "react-bootstrap/Button";
import { Row, Col } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import "../Styles/form.css";

function FormComp() {
  return (
    <div className="d-flex justify-content-center align-items-center form-whole-cont">
      <Form className="form-container">
        <Row className="mb-3">
          <Form.Group as={Col} xs={12} md={6} controlId="formGridName">
            <Form.Label>Name</Form.Label>
            <Form.Control placeholder="John Doe" />
          </Form.Group>

          <Form.Group as={Col} xs={12} md={6} controlId="formGridEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
          </Form.Group>
        </Row>

        <Row className="mb-3">
          <Form.Group as={Col} xs={12} md={6} controlId="formGridPhone">
            <Form.Label>Phone</Form.Label>
            <Form.Control type="number" placeholder="Phone number" />
          </Form.Group>

          <Form.Group as={Col} xs={12} md={6} controlId="formGridCourse">
            <Form.Label>Select your course</Form.Label>
            <Form.Select aria-label="Select your course">
              <option>Select your course</option>
              <option value="1">A+ Bootcamp</option>
              <option value="2">Python Bootcamp</option>
              <option value="3">React Bootcamp</option>
              <option value="4">ICDL Bootcamp</option>
              <option value="5">Java Bootcamp</option>
              <option value="6">Project Management Bootcamp</option>
            </Form.Select>
          </Form.Group>
        </Row>

        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Have a question? Let us know:</Form.Label>
          <Form.Control
            as="textarea"
            rows={5}
            placeholder="Your message here"
          />
        </Form.Group>

        <Form.Group className="mb-3" id="formGridCheckbox">
          <Form.Check type="checkbox" label="Remember me for next time!" />
        </Form.Group>

        <div className="d-flex justify-content-center">
          <Button className="enroll-now-cta" type="submit">
            Submit
          </Button>
        </div>
      </Form>
    </div>
  );
}

export default FormComp;
