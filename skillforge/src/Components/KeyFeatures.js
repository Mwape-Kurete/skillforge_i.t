import React from "react";
import { Row, Col } from "react-bootstrap";

function KeyFeatures() {
  return (
    <Row>
      <Col className="key-features-header">
        <h1>What Sets Us Apart</h1>
      </Col>
      <Col>
        <ul>
          <li>Fact #1</li>
          <li>Fact #2</li>
          <li>Fact #3</li>
          <li>Fact #4</li>
        </ul>
      </Col>
    </Row>
  );
}

export default KeyFeatures;
