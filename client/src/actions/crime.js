import axios from "axios";

import { FETCH_CRIMES } from "./types";

const crimeAPI = "https://data.providenceri.gov/resource/rz3y-pz8v.json";

// Fetch crime data from external API
export const fetchCrimeData = () => async dispatch => {
  try {
    const res = await axios.get(crimeAPI);

    // TODO: Double check res.data the data may come from a different endpoint
    dispatch({
      type: FETCH_CRIMES,
      payload: res.data
    });
  } catch (error) {
    console.log(`CAUGHT ERROR in fetchCrimeData: ${error.response}`);
  }
};
