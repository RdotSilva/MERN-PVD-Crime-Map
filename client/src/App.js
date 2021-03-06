import React, { Fragment, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Navbar from "./components/layout/Navbar";
import Landing from "./components/layout/Landing";
import Register from "./components/auth/Register";
import Login from "./components/auth/Login";
import Alert from "./components/layout/Alert";
import setAuthToken from "./utils/setAuthToken";
import PrivateRoute from "./components/routing/PrivateRoute";
import Dashboard from "./components/dashboard/Dashboard";
import CrimeList from "./components/crime/CrimeList";
import CrimeMap from "./components/crime/CrimeMap";
import CreateProfile from "./components/profile/CreateProfile";

// Redux
import { Provider } from "react-redux";
import store from "./store";
import { loadUser } from "./actions/auth";

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

const App = () => {
  // TODO: Comment this out for now to avoid login error.
  useEffect(() => {
    store.dispatch(loadUser());
  }, []);

  return (
    <Provider store={store}>
      <Router>
        <Fragment>
          <Navbar></Navbar>
          <Route exact path="/" component={Landing}></Route>
          <Alert />
          <Switch>
            <Route exact path="/register" component={Register} />
            <Route exact path="/login" component={Login} />
            <PrivateRoute exact path="/crimelist" component={CrimeList} />
            <PrivateRoute exact path="/crimemap" component={CrimeMap} />
            <PrivateRoute exact path="/dashboard" component={Dashboard} />
            <PrivateRoute
              exact
              path="/createprofile"
              component={CreateProfile}
            />
          </Switch>
        </Fragment>
      </Router>
    </Provider>
  );
};

export default App;
