//About.js in src/pages
import React from "react";
import Container from "react-bootstrap/Container";
import { Row, Col } from "react-bootstrap";
import NavbarComponent from "../Components/NavbarComponent";

import Carousel from "react-bootstrap/Carousel";
import Img1 from "../Assets/student1.jpg";
import Img2 from "../Assets/student2.jpg";
import Img3 from "../Assets/student3.jpg";
import Img4 from "../Assets/student4.jpg";
import Img5 from "../Assets/student5.jpg";

import FooterComponent from "../Components/FooterComponent";
import WhyUs from "../Components/WhyUs";
import MeetTheTeam from "../Components/MeetTheTeam";
import "../Styles/about.css";
import { useEffect } from "react";

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
    <Container>
      <NavbarComponent />
      <br />
      <Row>
        <Col className="col-12 mission text-align-center">
          <h1>Our Mission: </h1>
          <p>
            At SkillForge I.T, we aim to bridge the skills gap in the IT
            industry by offering comprehensive bootcamps that prepare students
            for the demands of the workforce.
          </p>
        </Col>
        <Col className="col-12 choice">
          <WhyUs />
        </Col>
        <Col className="col-12 meet">
          <MeetTheTeam />
        </Col>
        <Col className="col-12 students text-align-center">
          <h1>Our Students: </h1>
          <p>
            From beginners to experienced professionals, our bootcamps cater to
            all levels.
          </p>
          <Row>
            <Col className="student-caro d-flex justify-content-center align-items-center">
              <Carousel className="d-flex justify-content-center align-items-center">
                <Carousel.Item>
                  <img className="caro-image" src={Img1} alt="First slide" />
                  <Carousel.Caption></Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <img className="caro-image" src={Img2} alt="Second" />
                  <Carousel.Caption></Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <img className="caro-image" src={Img3} alt="third" />
                  <Carousel.Caption></Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <img className="caro-image" src={Img4} alt="third" />
                  <Carousel.Caption></Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <img className="caro-image" src={Img5} alt="third" />
                  <Carousel.Caption></Carousel.Caption>
                </Carousel.Item>
              </Carousel>
            </Col>
          </Row>
        </Col>
      </Row>
      <FooterComponent />
    </Container>
  );
}

export default About;
