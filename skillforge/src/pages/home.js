import React from "react";

import NavbarComponent from "../components/NavbarComponent"; // Corrected path
import Hero from "../components/Hero"; // Corrected path

function Home() {
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

  // Define currentPage, it should default to '/' if you're on the home page
  const currentPage = window.location.pathname; // Get current path

  return (
    <div>
      <h1>Welcome to My App</h1>
      <NavbarComponent />
      <Hero
        title={heroData[currentPage]?.title || "Default Title"} // Add fallback if heroData[currentPage] is undefined
        subtitle={heroData[currentPage]?.subtitle || "Default Subtitle"}
      />
    </div>
  );
}

export default Home;
