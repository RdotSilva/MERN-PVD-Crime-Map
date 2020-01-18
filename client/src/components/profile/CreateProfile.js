import React, { useEffect, useState, Fragment } from "react";
import { Link, withRouter, Redirect } from "react-router-dom";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Icon from "@material-ui/core/Icon";

// Redux
import { useDispatch, useSelector } from "react-redux";
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

const CreateProfile = () => {
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    address: ""
  });

  // User Profile data from profile state
  const isLoading = useSelector(state => state.profile.loading);
  const profile = useSelector(state => state.profile.profile);

  const { address } = formData;

  useEffect(() => {
    dispatch(getCurrentUserProfile());
  }, [dispatch]);

  return isLoading && profile === null ? (
    <Redirect to="/dashboard" />
  ) : (
    <Fragment>
      <h1 className="large text-primary">Create Your Profile</h1>
    </Fragment>
  );
};

export default CreateProfile;
