import React from "react";
import { Row, Col } from "react-bootstrap";
import "../Styles/keyFeatures.css";

function KeyFeatures() {
  return (
    <Row className="key-feat">
      <Col className="key-features-header">
        <h1>What Sets Us Apart</h1>
      </Col>
      <Col className="cont">
        <div className="features">
          <h1>Industry-Recognized Certifications: </h1>
          <p>Gain certifications in A+, ICDL, and Project Management.</p>
        </div>
        <div className="features">
          <h1>Experienced Instructors: </h1>
          <p> Learn from IT experts with years of industry experience.</p>
        </div>
        <div className="features">
          <h1>Hands-on Learning:</h1>
          <p>
            Project-based learning approach to ensure practical application of
            skills.
          </p>
        </div>
        <div className="features">
          <h1>Flexible Schedule: </h1>
          <p> Online courses designed to fit your schedule.</p>
        </div>
      </Col>
    </Row>
  );
}

export default KeyFeatures;
