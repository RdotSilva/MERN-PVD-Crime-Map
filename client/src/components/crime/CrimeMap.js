import React, { useState, useEffect, Fragment } from "react";
import axios from "axios";

import {
  LoadScript,
  GoogleMap,
  Marker,
  MarkerClusterer
} from "@react-google-maps/api";

// Geocode package to make geocoding easier.
import Geocode from "react-geocode";

// Redux
import { useDispatch, useSelector } from "react-redux";

// Add this to prevent "google not found" error.
const google = window.google;

const apiKey = process.env.REACT_APP_API_KEY;

// GEOCODE SETTINGS
Geocode.setApiKey(apiKey);
Geocode.enableDebug();

const CrimeMap = () => {
  const [locationArray, setLocationArray] = useState([]);

  // User Profile data from profile state
  const profile = useSelector(state => state.profile.profile);

  // Crime Data from crime state
  const isLoading = useSelector(state => state.crime.loading);
  const crimes = useSelector(state => state.crime.crimes);

  // User Home Position set in profile data
  // Also use this to center map
  const position = {
    lat: profile.data.location.coordinates[1],
    lng: profile.data.location.coordinates[0]
  };

  const corsProxy = "https://cors-anywhere.herokuapp.com/";

  // Take the array of crimes from Redux state, map through the crimes and create a geolocation coordinate
  // for each crime. Add this coordinate to locationArray state. This array will be used to plot a marker
  // cluster on the map.
  const geocodeCrimes = crimes => {
    let locArray = [];

    crimes.map(crime => {
      axios
        .get(
          `${corsProxy}https://us1.locationiq.com/v1/search.php?key=566f1952e2f33e&q=${crime.location}+Providence%2C+RI&format=json`
        )
        .then(res => {
          locArray.push({ lat: res.data[0].lat, lng: res.data[0].lon });
        });

      setLocationArray([...locationArray, locArray]);
    });
  };

  // useEffect(() => {
  //   geocodeCrimes(crimes);
  // }, []);

  return (
    <Fragment>
      {isLoading ? (
        <div>Loading</div>
      ) : (
        <LoadScript id="script-loader" googleMapsApiKey={apiKey}>
          <div>
            <button onClick={() => geocodeCrimes(crimes)}>
              GEOCODE CRIMES
            </button>
          </div>
          <GoogleMap
            id="crime-map"
            mapContainerStyle={{
              height: "900px",
              width: "1900px"
            }}
            zoom={15}
            center={position}
          >
            <Marker position={position} title="Home"></Marker>
          </GoogleMap>
        </LoadScript>
      )}
    </Fragment>
  );
};

export default CrimeMap;
