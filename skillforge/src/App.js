//App.js in src
import React from "react";
import { Route, Routes } from "react-router-dom";

import Courses from "./Pages/Courses";
import Enroll from "./Pages/Enroll";
import About from "./Pages/About";
import HomePage from "./Pages/HomePage";

function App() {
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
