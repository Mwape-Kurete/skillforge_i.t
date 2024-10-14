import React from "react";
import { Row, Col } from "react-bootstrap";
import Accordion from "react-bootstrap/Accordion";
import "../Styles/accordion.css";

function AccordionComponent() {
  return (
    <Row className="justify-content-center">
      <Col xs={12} md={10} lg={8}>
        <Accordion defaultActiveKey="0" flush>
          <Accordion.Item eventKey="0">
            <Accordion.Header>Do I need prior experience?</Accordion.Header>
            <Accordion.Body>
              No prior experience required for most bootcamps.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>
              What is the cost of each bootcamp?
            </Accordion.Header>
            <Accordion.Body>
              Our bootcamps are all priced the same, at R5000 with a R500
              application fee.
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </Col>
    </Row>
  );
}

export default AccordionComponent;
