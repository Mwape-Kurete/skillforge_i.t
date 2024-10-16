import React from "react";
import { Row, Col } from "react-bootstrap";
import "../Styles/whyus.css";

function WhyUs() {
  return (
    <Row className="why-us-row text-center py-5">
      <Col xs={12} className="mb-4">
        <h1>Why Choose Us?</h1>
      </Col>

      <Col xs={12} md={6} className="mb-4">
        <div className="card-box">
          <div className="tools">
            <div className="circle">
              <span className="red box"></span>
            </div>
            <div className="circle">
              <span className="yellow box"></span>
            </div>
            <div className="circle">
              <span className="green box"></span>
            </div>
          </div>
          <div className="card_content">
            <h4>
              Affordable, intensive, and designed for real-world application.
            </h4>
          </div>
        </div>
      </Col>

      <Col xs={12} md={6} className="mb-4">
        <div className="card-box">
          <div className="tools">
            <div className="circle">
              <span className="red box"></span>
            </div>
            <div className="circle">
              <span className="yellow box"></span>
            </div>
            <div className="circle">
              <span className="green box"></span>
            </div>
          </div>
          <div className="card_content">
            <h4>Curriculum aligned with the latest industry standards.</h4>
          </div>
        </div>
      </Col>
    </Row>
  );
}

export default WhyUs;
