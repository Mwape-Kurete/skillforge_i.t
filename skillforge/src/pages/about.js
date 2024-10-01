//About.js in src/pages
import React from "react";
import Container from "react-bootstrap/Container";
import NavbarComponent from "../Components/NavbarComponent";
import Hero from "../Components/Hero";
import FooterComponent from "../Components/FooterComponent";
import WhyUs from "../Components/WhyUs";
import MeetTheTeam from "../Components/MeetTheTeam";

function About() {
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
    <Container>
      <NavbarComponent />
      <Hero
        title={heroData[currentPage]?.title || "Default Title"} // Add fallback if heroData[currentPage] is undefined
        subtitle={heroData[currentPage]?.subtitle || "Default Subtitle"}
      />
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
