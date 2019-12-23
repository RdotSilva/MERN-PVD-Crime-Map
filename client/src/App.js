import React, { Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Navbar from "./components/layout/Navbar";
import Landing from "./components/layout/Landing";

const App = () => (
  <Router>
    <Fragment>
      <Navbar></Navbar>
      <Route exact path="/" component={Landing}></Route>
    </Fragment>
  </Router>
);

export default App;
