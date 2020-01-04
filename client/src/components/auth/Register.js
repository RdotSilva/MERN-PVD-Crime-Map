import React, { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Icon from "@material-ui/core/Icon";

// Redux
import { useDispatch, useSelector } from "react-redux";
import { setAlert } from "../../actions/alert";
import { register } from "../../actions/auth";

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
  }
}));

const Register = () => {
  const dispatch = useDispatch();
  const isAuthenticated = useSelector(state => state.auth.isAuthenticated);
  const classes = useStyles();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    password2: ""
  });

  const { name, email, password, password2 } = formData;

  // Handle input change for text fields using [e.target.name] to select the unique name for each text field.
  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Check passwords match. Temporarily console log for testing. Later this will handle error properly.
  const onSubmit = e => {
    e.preventDefault();
    if (password !== password2) {
      dispatch(setAlert("Passwords do not match!", "danger"));
    } else {
      dispatch(register({ name, email, password }));
    }
  };

  return (
    <Fragment>
      <form
        className={classes.root}
        noValidate
        autoComplete="off"
        onSubmit={e => onSubmit(e)}
      >
        <div>
          <TextField
            id="outlined-name"
            label="Name"
            name="name"
            value={name}
            onChange={handleChange}
            variant="outlined"
            required
          />
        </div>
        <div>
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
        <div>
          <TextField
            id="outlined-name"
            label="Password"
            name="password"
            value={password}
            onChange={handleChange}
            variant="outlined"
            required
          />
        </div>
        <div>
          <TextField
            id="outlined-name"
            label="Confirm Password"
            name="password2"
            value={password2}
            onChange={handleChange}
            variant="outlined"
            required
          />
        </div>
        <Button
          variant="contained"
          color="primary"
          className={classes.button}
          endIcon={<Icon>send</Icon>}
          type="submit"
        >
          Send
        </Button>
      </form>
      <p>
        Already have an account?
        <Link to="/login">Login</Link>
      </p>
    </Fragment>
  );
};

export default Register;
