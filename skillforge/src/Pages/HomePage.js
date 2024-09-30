import React from "react";

import NavbarComponent from "../Components/NavbarComponent"; // Corrected path
import Hero from "../Components/Hero"; // Corrected path

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

  // Define currentPage, it should default to '/' if you're on the home page
  const currentPage = window.location.pathname; // Get current path

  return (
    <div>
      <NavbarComponent />
      <Hero
        title={heroData[currentPage]?.title || "Default Title"} // Add fallback if heroData[currentPage] is undefined
        subtitle={heroData[currentPage]?.subtitle || "Default Subtitle"}
      />
    </div>
  );
}

export default HomePage;
