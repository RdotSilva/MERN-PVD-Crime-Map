import axios from "axios";

import { FETCH_CRIMES } from "./types";

// TODO: Temp cors fix for 'Access-Control-Allow-Origin' error.
// Must use this url in front of the API url.
const corsProxy = "https://cors-anywhere.herokuapp.com/";

// Edit this to limit number of results per API request.
// TODO: Setting this low for testing, increase later.
const resultsLimit = "?$limit=2";

const crimeAPI = "https://data.providenceri.gov/resource/rz3y-pz8v.json";

// Fetch crime data from external API
export const fetchCrimeData = () => async dispatch => {
  try {
    const res = await axios.get(corsProxy + crimeAPI + resultsLimit);
    console.log(`fetchCrimeData try action fired off: ${res}`);

    // TODO: Double check res.data the data may come from a different endpoint
    dispatch({
      type: FETCH_CRIMES,
      payload: res.data
    });
  } catch (error) {
    console.log(`CAUGHT ERROR in fetchCrimeData: ${error.message}`);
  }
};
