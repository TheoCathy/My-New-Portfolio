//import React from 'react'

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./contents/Home";
import Projects from "./contents/Projects";

export const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </Router>
  );
};

// YOU ADDED ROUTER!
