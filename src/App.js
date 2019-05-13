import React, { useState } from "react";
import "./App.css";
import HeroSection from "./Components/HeroSection.js";
import CssBaseline from "@material-ui/core/CssBaseline";
import NavBar from "./Components/NavBar.js";
import AboutMe from "./Components/AboutMe.js";

import { Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <CssBaseline />
      <Route path="/" exact render={props => <HeroSection {...props} />} />
      <Route path="/" exact render={props => <AboutMe {...props} />} />

      <Route path="/" render={props => <NavBar {...props} />} />
    </div>
  );
}

export default App;
