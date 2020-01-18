import axios from "axios";
import {
  GET_PROFILE,
  UPDATE_PROFILE,
  CLEAR_PROFILE,
  PROFILE_ERROR
} from "./types";
import { setAlert } from "./alert";

// Get Current User Profile
export const getCurrentUserProfile = () => async dispatch => {
  try {
    const res = await axios.get("/api/v1/profile/me");

    dispatch({
      type: GET_PROFILE,
      payload: res.data
    });
  } catch (error) {
    dispatch({
      type: PROFILE_ERROR,
      payload: { msg: error.response.statusText, status: error.response.status }
    });
  }
};

// Create or update user profile
export const createUserProfile = formData => async dispatch => {
  try {
    const res = await axios.post("/api/v1/profile/", formData);

    dispatch({
      type: GET_PROFILE,
      payload: res.data
    });
  } catch (error) {
    const errors = error.response.data.errors;
    if (errors) {
      errors.forEach(error => dispatch(setAlert(error.msg, "danger")));
    }

    dispatch({
      type: PROFILE_ERROR,
      payload: { msg: error.response.statusText, status: error.response.status }
    });
  }
};
