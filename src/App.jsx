import React, { useState } from "react";
import Home from "./pages/Home";
import Query from "./pages/Query";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Teams from "./pages/Teams";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/teams" element={<Teams />} />
        <Route path="/contact" element={<Query />} />
      </Routes>
    </Router>
  );
};

export default App;
