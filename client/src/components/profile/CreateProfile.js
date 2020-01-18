import React, { useEffect, useState, Fragment } from "react";
import { Link, withRouter, Redirect } from "react-router-dom";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Icon from "@material-ui/core/Icon";

// Redux
import { useDispatch, useSelector } from "react-redux";
import {
  getCurrentUserProfile,
  createUserProfile
} from "./../../actions/profile";

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

const CreateProfile = () => {
  const dispatch = useDispatch();
  const classes = useStyles();

  const [formData, setFormData] = useState({
    address: ""
  });

  // User Profile data from profile state
  const isLoading = useSelector(state => state.profile.loading);
  const profile = useSelector(state => state.profile.profile);

  const { address } = formData;

  // Handle input change for text fields using [e.target.name] to select the unique name for each text field.
  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    dispatch(getCurrentUserProfile());
  }, [dispatch]);

  const onSubmit = e => {
    e.preventDefault();
    dispatch(createUserProfile(formData));
  };

  return profile !== null ? (
    <Redirect to="/dashboard" />
  ) : (
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
            label="Address"
            name="address"
            value={address}
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
            endIcon={<Icon>update</Icon>}
            type="submit"
          >
            Create Profile
          </Button>
        </div>
      </form>
    </Fragment>
  );
};

export default CreateProfile;
