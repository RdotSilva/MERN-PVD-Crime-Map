import React, { Fragment, useState } from "react";
import { Link, Redirect } from "react-router-dom";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Icon from "@material-ui/core/Icon";

// Redux
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../actions/auth";
import { getCurrentUserProfile } from "./../../actions/profile";

// Styles used for Material UI
const useStyles = makeStyles(theme => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: 200
    },
    button: {
      margin: theme.spacing(1)
    }
  },
  center: {
    textAlign: "center"
  },
  signUp: {
    textAlign: "center",
    padding: "10px"
  }
}));

const Login = () => {
  const dispatch = useDispatch();
  const isAuthenticated = useSelector(state => state.auth.isAuthenticated);

  const classes = useStyles();

  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });

  const { email, password } = formData;

  // Handle input change for text fields using [e.target.name] to select the unique name for each text field.
  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmit = e => {
    e.preventDefault();
    dispatch(login(email, password));
    dispatch(getCurrentUserProfile);
  };

  // Redirect if user is logged in
  if (isAuthenticated) {
    dispatch(getCurrentUserProfile());
    return <Redirect to="/dashboard" />;
  }

  return (
    <Fragment>
      <form
        className={classes.root}
        noValidate
        autoComplete="off"
        onSubmit={e => onSubmit(e)}
      >
        <div className={classes.center}>
          <TextField
            id="outlined-name"
            label="Email"
            name="email"
            value={email}
            onChange={handleChange}
            variant="outlined"
            required
          />
        </div>
        <div className={classes.center}>
          <TextField
            id="outlined-name"
            type="password"
            label="Password"
            name="password"
            value={password}
            onChange={handleChange}
            variant="outlined"
            required
          />
        </div>
        <div className={classes.center}>
          <Button
            variant="contained"
            color="primary"
            className={classes.button}
            endIcon={<Icon>send</Icon>}
            type="submit"
          >
            Login
          </Button>
        </div>
      </form>
      <p className={classes.signUp}>
        Don't have an account?
        <Link to="/register"> Sign Up</Link>
      </p>
    </Fragment>
  );
};

export default Login;
