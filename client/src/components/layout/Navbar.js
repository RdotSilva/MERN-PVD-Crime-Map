import React, { Fragment } from "react";
import { Link as RouterLink } from "react-router-dom";
import Link from "@material-ui/core/Link";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

// Redux
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../actions/auth";

const useStyles = makeStyles({
  root: {
    flexGrow: 1
  },
  title: {
    flexGrow: 1,
    margin: "10px"
  }
});

const Navbar = () => {
  const dispatch = useDispatch();

  const isAuthenticated = useSelector(state => state.auth.isAuthenticated);
  const isLoading = useSelector(state => state.auth.isLoading);

  // User Profile data from profile state
  const profileLoading = useSelector(state => state.profile.loading);
  const profile = useSelector(state => state.profile.profile);

  const classes = useStyles();

  // Logout user with Redux action
  const logoutUser = () => {
    dispatch(logout());
  };

  // Links to be shown if user is logged in
  const authLinks = (
    <Fragment>
      <Button onClick={() => logoutUser()} color="inherit">
        Logout
      </Button>
    </Fragment>
  );

  // Links to be shown if user is not logged in
  const guestLinks = (
    <Fragment>
      <Button color="inherit">
        <Link
          color="inherit"
          style={{ textDecoration: "none" }}
          component={RouterLink}
          to="/register"
        >
          Register
        </Link>
      </Button>
      <Button color="inherit">
        <Link
          color="inherit"
          style={{ textDecoration: "none" }}
          className={classes.link}
          component={RouterLink}
          to="/login"
        >
          Login
        </Link>
      </Button>
    </Fragment>
  );

  const editProfileLink = (
    <Fragment>
      <Button color="inherit">
        <Link
          color="inherit"
          style={{ textDecoration: "none" }}
          className={classes.link}
          component={RouterLink}
          to="/editprofile"
        >
          Edit Profile
        </Link>
      </Button>
    </Fragment>
  );

  return (
    <AppBar position="static">
      <Toolbar>
        <i className="fas fa-map-pin"></i>
        <Typography variant="h6" className={classes.title}>
          <Link
            color="inherit"
            style={{ textDecoration: "none" }}
            component={RouterLink}
            to="/dashboard"
          >
            Crime Map
          </Link>
        </Typography>
        {!isLoading && (
          <Fragment>
            {profile !== null ? editProfileLink : null}
            {isAuthenticated ? authLinks : guestLinks}
          </Fragment>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
