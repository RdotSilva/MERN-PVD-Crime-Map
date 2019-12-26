import React, { Fragment, useState } from "react";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: 200
    }
  }
}));

const Register = () => {
  const classes = useStyles();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    password2: ""
  });

  const { name, email, password, password2 } = formData;

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmit = e => {
    e.preventDefault();
    if (password !== password2) {
      console.log("Passwords do not match");
    } else {
      console.log(formData);
    }
  };

  return (
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
    </form>
  );
};

export default Register;
