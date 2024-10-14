//App.js in src
import React from "react";
import { Route, Routes } from "react-router-dom";

import { useEffect } from "react";
import { useLocation } from "react-router-dom";

import Courses from "./Pages/Courses";
import Enroll from "./Pages/Enroll";
import About from "./Pages/About";
import HomePage from "./Pages/HomePage";

import "./Styles/main.css";

function App() {
  const location = useLocation();

  useEffect(() => {
    // Send pageview to Google Analytics on route change
    const handleRouteChange = (url) => {
      window.gtag("config", "G-0SW4M3T4ZQ", {
        page_path: url,
      });
    };

    handleRouteChange(location.pathname + location.search);

    // Trigger when the route changes
  }, [location]);

  return (
    <div>
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/enroll" element={<Enroll />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
