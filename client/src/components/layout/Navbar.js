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

  const classes = useStyles();

  const guestLinks = (
    <Fragment>
      <Button color="inherit">
        <Link color="inherit" component={RouterLink} to="/register">
          Register
        </Link>
      </Button>
      <Button color="inherit">
        <Link color="inherit" component={RouterLink} to="/login">
          Login
        </Link>
      </Button>
    </Fragment>
  );

  return (
    <AppBar position="static">
      <Toolbar>
        <i className="fas fa-map-pin"></i>
        <Typography variant="h6" className={classes.title}>
          Crime Map
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
