import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import "../Styles/navbarComp.css";

function NavbarComponent() {
  return (
    <Navbar collapseOnSelect expand="lg" className="navbar-cont py-3">
      <Container>
        <Navbar.Brand as={Link} to="/" className="navbar-brand">
          SkillForge I.T
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link className="nav-text" as={Link} to="/">
              Home
            </Nav.Link>
            <Nav.Link className="nav-text" as={Link} to="/courses">
              Our Courses
            </Nav.Link>
            <Nav.Link className="nav-text" as={Link} to="/enroll">
              Enroll
            </Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link className="nav-text about-us" as={Link} to="/about">
              About Us
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarComponent;
