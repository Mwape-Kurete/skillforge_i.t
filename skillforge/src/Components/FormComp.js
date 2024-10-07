import React from "react";
import Button from "react-bootstrap/Button";
import { Row, Col } from "react-bootstrap";
import Form from "react-bootstrap/Form";

import "../Styles/form.css";

function FormComp() {
  return (
    <div className="d-flex justify-content-center align-items-center form-whole-cont">
      <Form className="form-">
        <Row className="mb-3">
          <Form.Group as={Col} className="mb-3" controlId="formGridAddress1">
            <Form.Label>Name</Form.Label>
            <Form.Control placeholder="John Doe" />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridPassword">
            <Form.Label>Phone</Form.Label>
            <Form.Control type="number" placeholder="phone number" />
          </Form.Group>
        </Row>

        <Form.Group>
          <Form.Select aria-label="Default select example">
            <option>Select your course</option>
            <option value="1">A+ Bootcamp</option>
            <option value="2">Python Bootcamp</option>
            <option value="3">React Bootcamp</option>
            <option value="4">ICDL Bootcamp</option>
            <option value="3">Java Bootcamp</option>
            <option value="3">Project Management Bootcamp</option>
          </Form.Select>
        </Form.Group>

        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Example textarea</Form.Label>
          <Form.Control
            as="textarea"
            rows={5}
            placeholder="have a question? let us know here"
          />
        </Form.Group>

        <Form.Group className="mb-3" id="formGridCheckbox">
          <Form.Check type="checkbox" label="remember me for next time!" />
        </Form.Group>

        <div className="d-flex justify-content-center align-items-center">
          <Button className="enroll-now-cta" type="submit">
            Submit
          </Button>
        </div>
      </Form>
    </div>
  );
}

export default FormComp;
