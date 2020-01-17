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
  console.log(`Fetching User Profile Data`);
  try {
    const res = await axios.get("/api/v1/profile/me");
    console.log(`User Profile res.data = : ${res.data}`);

    dispatch({
      type: GET_PROFILE,
      payload: res.data
    });
  } catch (error) {
    console.log(`Fetch User Profile Data Error: ${error}`);
    dispatch({
      type: PROFILE_ERROR,
      payload: { msg: error.response.statusText, status: error.response.status }
    });
  }
};
