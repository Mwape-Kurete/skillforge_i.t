import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { useLocation } from "react-router-dom";

import Courses from "./Pages/Courses";
import Enroll from "./Pages/Enroll";
import About from "./Pages/About";
import HomePage from "./Pages/HomePage";

import "./Styles/main.css";

function App() {
  const location = useLocation();

  useEffect(() => {
    // Push page view event to the GTM dataLayer
    const handleRouteChange = (url) => {
      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push({
        event: "pageview",
        page_path: url,
      });
    };

    handleRouteChange(location.pathname + location.search); // Fire on route change
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
