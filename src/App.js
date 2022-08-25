import React from "react";
import NavBar from "./Components/NavBar";
import Home from "./Pages/Home";
import About from "./Pages/About";
import GoToAccomodation from "./Pages/accomodationDetails";
import Footer from "./Components/Footer";
import { Route, Routes } from "react-router-dom";
import NotFound from "./Components/NotFound";

function App() {
  return (
    <>
      <NavBar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route
            path="/accomodationDetails/:accomodationId"
            element={<GoToAccomodation />}
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;
