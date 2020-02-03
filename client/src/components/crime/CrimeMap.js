import React, { useState, useEffect, Fragment } from "react";

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

  const [loading, setLoading] = useState(true);

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

  useEffect(() => {
    // Map through each crime and create an array of coordinates.
    // This array will be used to creater a cluster of map pins.
    let coordArray = crimes.map(crime => {
      return crime.coords;
    });

    setLocationArray(coordArray);
    setLoading(false);
  }, []);

  return (
    <Fragment>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <LoadScript id="script-loader" googleMapsApiKey={apiKey}>
          <GoogleMap
            id="crime-map"
            mapContainerStyle={{
              height: "900px",
              width: "1900px"
            }}
            zoom={15}
            center={position}
          >
            {/* <Marker position={position} title="Home"></Marker> */}
            <MarkerClusterer>
              {clusterer =>
                locationArray.map((location, i) => (
                  <Marker key={i} position={location} clusterer={clusterer} />
                ))
              }
            </MarkerClusterer>
          </GoogleMap>
        </LoadScript>
      )}
    </Fragment>
  );
};

export default CrimeMap;
