import axios from "axios";

import { FETCH_CRIMES } from "./types";

// TODO: Temp cors fix for 'Access-Control-Allow-Origin' error.
// Must use this url in front of the API url.
const corsProxy = "https://cors-anywhere.herokuapp.com/";

// Edit this to limit number of results per API request.
// TODO: Setting this low for testing, increase later.
const resultsLimit = "?$limit=2";

const crimeAPI = "https://data.providenceri.gov/resource/rz3y-pz8v.json";

const geoCodeAPI =
  "https://us1.locationiq.com/v1/search.php?key=566f1952e2f33e&q=";

// Fetch crime data from external API
export const fetchCrimeData = () => async dispatch => {
  try {
    const crimes = await axios.get(corsProxy + crimeAPI + resultsLimit);
    console.log("Crimes", crimes);

    const crimeData = crimes.data;

    // TODO need to add the geocode for each crime to the crime object, BEFORE sending the payload to Redux.

    crimeData.map(crime => {
      axios
        .get(
          `${corsProxy}${geoCodeAPI}${crime.location}+Providence%2C+RI&format=json`
        )
        .then(res => {
          console.log("Geocode Data: ", res.data[0]);
          crime.coords = {
            lat: res.data[0].lat,
            lng: res.data[0].lon
          };
        });
    });

    dispatch({
      type: FETCH_CRIMES,
      payload: crimeData
    });
  } catch (error) {
    console.log(`CAUGHT ERROR in fetchCrimeData: ${error.message}`);
  }
};
