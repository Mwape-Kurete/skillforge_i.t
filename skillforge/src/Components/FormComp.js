import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import { Row, Col } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal"; // Import Bootstrap Modal
import "../Styles/form.css";

function FormComp() {
  // State to control the modal visibility
  const [show, setShow] = useState(false);

  // States for form inputs
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    course: "",
    message: "",
  });

  // Validation state
  const [errors, setErrors] = useState({});

  // Function to close the modal
  const handleClose = () => setShow(false);

  // Function to show the modal
  const handleShow = () => setShow(true);

  // Handle form input changes
  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Validate the form inputs
  const validateForm = () => {
    let errors = {};

    // Validate name
    if (!formData.name) {
      errors.name = "Name is required";
    }

    // Validate email
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email) {
      errors.email = "Email is required";
    } else if (!emailPattern.test(formData.email)) {
      errors.email = "Invalid email format";
    }

    // Validate phone
    if (!formData.phone) {
      errors.phone = "Phone number is required";
    } else if (formData.phone.length < 10) {
      errors.phone = "Phone number must be at least 10 digits";
    }

    // Validate course selection
    if (!formData.course) {
      errors.course = "Please select a course";
    }

    setErrors(errors);
    return Object.keys(errors).length === 0; // Return true if no errors
  };

  // Form submission handler
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevents page reload

    if (validateForm()) {
      handleShow(); // Show the pop-up modal after form submission if validation passes
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center form-whole-cont">
      <Form className="form-container" onSubmit={handleSubmit} noValidate>
        <Row className="mb-3">
          <Form.Group as={Col} xs={12} md={6} controlId="formGridName">
            <Form.Label>Name</Form.Label>
            <Form.Control
              name="name"
              placeholder="John Doe"
              value={formData.name}
              onChange={handleInputChange}
              isInvalid={!!errors.name}
            />
            <Form.Control.Feedback type="invalid">
              {errors.name}
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group as={Col} xs={12} md={6} controlId="formGridEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control
              name="email"
              type="email"
              placeholder="Enter email"
              value={formData.email}
              onChange={handleInputChange}
              isInvalid={!!errors.email}
            />
            <Form.Control.Feedback type="invalid">
              {errors.email}
            </Form.Control.Feedback>
          </Form.Group>
        </Row>

        <Row className="mb-3">
          <Form.Group as={Col} xs={12} md={6} controlId="formGridPhone">
            <Form.Label>Phone</Form.Label>
            <Form.Control
              name="phone"
              type="tel"
              placeholder="Phone number"
              value={formData.phone}
              onChange={handleInputChange}
              isInvalid={!!errors.phone}
            />
            <Form.Control.Feedback type="invalid">
              {errors.phone}
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group as={Col} xs={12} md={6} controlId="formGridCourse">
            <Form.Label>Select your course</Form.Label>
            <Form.Select
              name="course"
              aria-label="Select your course"
              value={formData.course}
              onChange={handleInputChange}
              isInvalid={!!errors.course}
            >
              <option value="">Select your course</option>
              <option value="A+ Bootcamp">A+ Bootcamp</option>
              <option value="Python Bootcamp">Python Bootcamp</option>
              <option value="React Bootcamp">React Bootcamp</option>
              <option value="ICDL Bootcamp">ICDL Bootcamp</option>
              <option value="Java Bootcamp">Java Bootcamp</option>
              <option value="Project Management Bootcamp">
                Project Management Bootcamp
              </option>
            </Form.Select>
            <Form.Control.Feedback type="invalid">
              {errors.course}
            </Form.Control.Feedback>
          </Form.Group>
        </Row>

        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Have a question? Let us know:</Form.Label>
          <Form.Control
            as="textarea"
            name="message"
            rows={5}
            placeholder="Your message here"
            value={formData.message}
            onChange={handleInputChange}
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

      {/* Modal to show after form submission */}
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Thank you for signing up!</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Your information has been successfully submitted. We will send you an
          email regarding your next steps.
        </Modal.Body>
        <Modal.Footer>
          <Button className="exit-modal" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default FormComp;
