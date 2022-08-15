import React from "react";
import NavBar from "./Components/NavBar";
import Home from "./Pages/Home";
import About from "./Pages/About";
import GoToAccomodation from "./Pages/accomodationDetails";
import PageNotfound from "./Pages/404";
import Footer from "./Components/Footer";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <NavBar />
      <div className="container">
        <Routes>
          <Route path="/Home" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route
            path="/accomodationDetails/:accomodationId"
            element={<GoToAccomodation />}
          />
          <Route path="/404" element={<PageNotfound />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;
