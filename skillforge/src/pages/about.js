import React, { useEffect } from "react";
import Container from "react-bootstrap/Container";
import { Row, Col } from "react-bootstrap";
import NavbarComponent from "../Components/NavbarComponent";
import Carousel from "react-bootstrap/Carousel";
import FooterComponent from "../Components/FooterComponent";
import WhyUs from "../Components/WhyUs";
import MeetTheTeam from "../Components/MeetTheTeam";

import Img1 from "../Assets/student1.jpg";
import Img2 from "../Assets/student2.jpg";
import Img3 from "../Assets/student3.jpg";
import Img4 from "../Assets/student4.jpg";
import Img5 from "../Assets/student5.jpg";

import "../Styles/about.css";

function preloadImages(imageArray) {
  imageArray.forEach((imageSrc) => {
    const img = new Image();
    img.src = imageSrc;
  });
}

function About() {
  useEffect(() => {
    // Preload images when the component mounts
    preloadImages([Img1, Img2, Img3, Img4, Img5]);
  }, []);

  return (
    <Container fluid>
      <NavbarComponent />
      <br />

      {/* Mission Section */}
      <Row className="text-center mb-4">
        <Col xs={12}>
          <h1>Our Mission:</h1>
          <p>
            At SkillForge I.T, we aim to bridge the skills gap in the IT
            industry by offering comprehensive bootcamps that prepare students
            for the demands of the workforce.
          </p>
        </Col>
      </Row>

      {/* Why Us Section */}
      <Row className="mb-4">
        <Col xs={12}>
          <WhyUs />
        </Col>
      </Row>

      {/* Meet The Team Section */}
      <Row className="mb-4">
        <Col xs={12}>
          <MeetTheTeam />
        </Col>
      </Row>

      {/* Students Carousel Section */}
      <Row className="text-center mb-4">
        <Col xs={12}>
          <h1>Our Students:</h1>
          <p>
            From beginners to experienced professionals, our bootcamps cater to
            all levels.
          </p>
        </Col>
        <Col xs={12} className="d-flex justify-content-center">
          <Carousel className="student-caro">
            <Carousel.Item>
              <img className="caro-image" src={Img1} alt="First slide" />
            </Carousel.Item>
            <Carousel.Item>
              <img className="caro-image" src={Img2} alt="Second slide" />
            </Carousel.Item>
            <Carousel.Item>
              <img className="caro-image" src={Img3} alt="Third slide" />
            </Carousel.Item>
            <Carousel.Item>
              <img className="caro-image" src={Img4} alt="Fourth slide" />
            </Carousel.Item>
            <Carousel.Item>
              <img className="caro-image" src={Img5} alt="Fifth slide" />
            </Carousel.Item>
          </Carousel>
        </Col>
      </Row>

      <FooterComponent />
    </Container>
  );
}

export default About;
