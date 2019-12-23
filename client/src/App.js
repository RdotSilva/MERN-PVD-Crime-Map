import React, { Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Navbar from "./components/layout/Navbar";

const App = () => (
  <Router>
    <Fragment>
      <Navbar></Navbar>
      <h1>PVD Crime Map</h1>
    </Fragment>
  </Router>
);

export default App;
