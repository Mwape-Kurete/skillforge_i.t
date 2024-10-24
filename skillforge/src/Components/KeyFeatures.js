import React from "react";
import { Row, Col } from "react-bootstrap";
import "../Styles/keyFeatures.css";

function KeyFeatures() {
  return (
    <Row className="key-feat text-center py-5">
      <Col xs={12} className="key-features-header mb-4">
        <h1>What Sets Us Apart</h1>
      </Col>

      <Col xs={12} md={6} className="cont mb-4">
        <div className="features">
          <h1>Industry-Recognized Certifications</h1>
          <p>Gain certifications in A+, ICDL, and Project Management.</p>
        </div>
      </Col>

      <Col xs={12} md={6} className="cont mb-4">
        <div className="features">
          <h1>Experienced Instructors</h1>
          <p>Learn from IT experts with years of industry experience.</p>
        </div>
      </Col>

      <Col xs={12} md={6} className="cont mb-4">
        <div className="features">
          <h1>Hands-on Learning</h1>
          <p>
            Project-based learning approach to ensure practical application of
            skills.
          </p>
        </div>
      </Col>

      <Col xs={12} md={6} className="cont mb-4">
        <div className="features">
          <h1>Flexible Schedule</h1>
          <p>Online courses designed to fit your schedule.</p>
        </div>
      </Col>
    </Row>
  );
}

export default KeyFeatures;
