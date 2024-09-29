// src/App.js
import React from "react";
import Accordion from "./components/accordion";
import Carousel from "./components/carousel";
import myGrid from "./components/myGrid";

function App() {
  return (
    <div>
      <h1>Welcome to My App</h1>
      <Carousel />
      <Accordion />
      <myGrid />
    </div>
  );
}

export default App;
