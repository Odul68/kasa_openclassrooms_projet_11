import React, { Component } from "react";
import NavBar from "./NavBar";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Trial from "./Pages/accomodationDetails";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <NavBar />
      <div className="container">
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route
            // path="/accomodationDetails"
            // element={<Trial />}
            path="/accomodationDetails/:accomodationId"
            element={<Trial />}
          />
        </Routes>
      </div>
    </>
  );
}

export default App;
