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
                Position <span className="name">Lead Instructor</span> A+
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
            <div className="category"> Rebecca Lee </div>
            <div className="heading">
              {" "}
              Rebecca is a software developer and data scientist with 8 years of
              experience. She has built web applications and data pipelines for
              major corporations and focuses on hands-on learning, ensuring
              students are ready to build real-world projects.
              <div className="author">
                {" "}
                Position <span className="name">Lead Instructor</span> Python
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
            <div className="category"> Mark Taylor </div>
            <div className="heading">
              {" "}
              With 10+ years of experience in front-end development, Mark is an
              expert in JavaScript frameworks, particularly React. He helps
              students build dynamic websites and simplify complex concepts for
              portfolio-ready projects.
              <div className="author">
                {" "}
                Position <span className="name">Lead Instructor </span>React
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
            <div className="category"> Sophia Green </div>
            <div className="heading">
              {" "}
              Sophia has over a decade of experience in IT training,
              specializing in office software and database management. As an
              ICDL-certified instructor, she equips students with practical
              skills for success in modern office environments.
              <div className="author">
                {" "}
                Position <span className="name">Lead Instructor </span> ICDL
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
            <div className="category"> David White </div>
            <div className="heading">
              {" "}
              David is a software engineer with 12 years of enterprise-level
              Java development experience. He has worked on Android apps and
              large-scale systems, focusing on object-oriented programming and
              real-world project skills.
              <div className="author">
                {" "}
                Position <span className="name">Lead Instructor </span> Java
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
            <div className="category"> Laura Bennett </div>
            <div className="heading">
              {" "}
              Laura, a PMP-certified IT project manager, has led projects using
              Agile, Scrum, and Waterfall methodologies. She teaches students
              the tools and strategies needed to manage IT projects from
              planning to execution.
              <div className="author">
                {" "}
                Position <span className="name">Lead Instructor </span> Project
                Management Bootcamp
              </div>
            </div>
          </div>
        </div>
      </Col>
    </Row>
  );
}

export default MeetTheTeam;
