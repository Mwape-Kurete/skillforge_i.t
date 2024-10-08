import React from "react";
import { Row, Col } from "react-bootstrap";
import "../Styles/team.css";

function MeetTheTeam() {
  return (
    <Row>
      <h1>Meet The Team</h1>
      <Col>
        <div className="team-deets">
          <div className="card">
            <div className="card-image"></div>
            <div className="category"> John Matthews</div>
            <div className="heading">
              John has over 15 years of IT support and infrastructure
              experience, specializing in hardware troubleshooting, networking,
              and cybersecurity. CompTIA A+ certified, he has trained hundreds
              of students for global tech companies.
              <div className="author">
                {" "}
                Position <span className="name">Lead Instructor</span>A+
                Bootcamp
              </div>
            </div>
          </div>
        </div>
      </Col>
      <Col>
        <div className="team-deets">
          <div className="card">
            <div className="card-image"></div>
            <div className="category"> Illustration </div>
            <div className="heading">
              {" "}
              A heading that must span over two lines
              <div className="author">
                {" "}
                By <span className="name">Abi</span> 4 days ago
              </div>
            </div>
          </div>
        </div>
      </Col>
      <Col>
        <div className="team-deets">
          <div className="card">
            <div className="card-image"></div>
            <div className="category"> Illustration </div>
            <div className="heading">
              {" "}
              A heading that must span over two lines
              <div className="author">
                {" "}
                By <span className="name">Abi</span> 4 days ago
              </div>
            </div>
          </div>
        </div>
      </Col>
      <Col>
        <div className="team-deets">
          <div className="card">
            <div className="card-image"></div>
            <div className="category"> Illustration </div>
            <div className="heading">
              {" "}
              A heading that must span over two lines
              <div className="author">
                {" "}
                By <span className="name">Abi</span> 4 days ago
              </div>
            </div>
          </div>
        </div>
      </Col>
      <Col>
        <div className="team-deets">
          <div className="card">
            <div className="card-image"></div>
            <div className="category"> Illustration </div>
            <div className="heading">
              {" "}
              A heading that must span over two lines
              <div className="author">
                {" "}
                By <span className="name">Abi</span> 4 days ago
              </div>
            </div>
          </div>
        </div>
      </Col>
    </Row>
  );
}

export default MeetTheTeam;
