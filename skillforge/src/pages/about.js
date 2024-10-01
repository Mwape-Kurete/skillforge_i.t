//About.js in src/pages
import React from "react";
import Container from "react-bootstrap/Container";
import NavbarComponent from "../Components/NavbarComponent";

import FooterComponent from "../Components/FooterComponent";
import WhyUs from "../Components/WhyUs";
import MeetTheTeam from "../Components/MeetTheTeam";

function About() {
  return (
    <Container>
      <NavbarComponent />
      <br />
      <WhyUs />
      <br />
      <MeetTheTeam />
      <br />
      <br />
      <FooterComponent />
    </Container>
  );
}

export default About;
