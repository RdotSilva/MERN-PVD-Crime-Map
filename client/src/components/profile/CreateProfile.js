import React, { useEffect, useState, Fragment } from "react";

// Redux
import { useDispatch, useSelector } from "react-redux";
import { getCurrentUserProfile } from "./../../actions/profile";

const CreateProfile = () => {
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

  return <div></div>;
};

export default CreateProfile;
