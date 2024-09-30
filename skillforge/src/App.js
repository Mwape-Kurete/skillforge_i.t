//App.js in src
import React from "react";
import { Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import Courses from "./pages/Courses";
import Enroll from "./pages/Enroll";
import About from "./pages/About";

function App() {
  return (
    <div>
      <Routes>
        <Route exact path="/" component={Home} />
        <Route path="/courses" component={Courses} />
        <Route path="/enroll" component={Enroll} />
        <Route path="/about" component={About} />
      </Routes>
    </div>
  );
}

export default App;
