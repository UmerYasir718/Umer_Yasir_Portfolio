import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Header from "./components/Header";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Home from "./Pages/Home";
import MyResume from "./Pages/MyResume";
import Portfolio from "./Pages/Portfolio";
export default function MainRoutes() {
  return (
    <div>
      {" "}
      <Router>
        <Header />
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/about' element={<About />} />
          <Route exact path='/Resume' element={<MyResume />} />
          <Route exact path='/portfolio' element={<Portfolio />} />
          <Route exact path='/contact' element={<Contact />} />
          <Route element={<Home />} />
        </Routes>
      </Router>
    </div>
  );
}
