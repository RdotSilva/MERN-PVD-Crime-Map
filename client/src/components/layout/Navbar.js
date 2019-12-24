import React from "react";
import { Link as RouterLink } from "react-router-dom";
import Link from "@material-ui/core/Link";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

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
  const classes = useStyles();

  return (
    <AppBar position="static">
      <Toolbar>
        <i className="fas fa-map-pin"></i>
        <Typography variant="h6" className={classes.title}>
          Crime Map
        </Typography>
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
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
