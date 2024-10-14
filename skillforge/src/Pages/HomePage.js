import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import NavbarComponent from "../Components/NavbarComponent";
import Hero from "../Components/Hero";
import KeyFeatures from "../Components/KeyFeatures";
import Testimonials from "../Components/Testimonials.js";
import FooterComponent from "../Components/FooterComponent.js";

function HomePage() {
  const heroData = {
    "/": {
      title: "SkillForge I.T",
      subtitle: "Your journey to mastering IT starts here!",
    },
    "/about": {
      title: "About Us",
      subtitle: "Learn more about our mission and team.",
    },
    "/courses": {
      title: "Explore Our Courses",
      subtitle: "Master essential IT skills with our bootcamps.",
    },
  };

  const currentPage = window.location.pathname;

  return (
    <Container fluid>
      <NavbarComponent />
      <Row className="justify-content-center mt-4">
        <Col xs={12} md={10} lg={8}>
          <Hero
            title={heroData[currentPage]?.title || "Default Title"}
            subtitle={heroData[currentPage]?.subtitle || "Default Subtitle"}
          />
        </Col>
      </Row>

      <Row className="mt-4">
        <Col xs={12}>
          <KeyFeatures />
        </Col>
      </Row>

      <Row className="mt-4">
        <Col xs={12}>
          <Testimonials />
        </Col>
      </Row>

      <FooterComponent />
    </Container>
  );
}

export default HomePage;
