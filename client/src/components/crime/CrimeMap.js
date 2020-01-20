import React, { useEffect, Fragment } from "react";
import { LoadScript, GoogleMap, Marker } from "@react-google-maps/api";
// Redux
import { useDispatch, useSelector } from "react-redux";
import { fetchCrimeData } from "./../../actions/crime";

const google = window.google;
const apiKey = process.env.REACT_APP_API_KEY;

const CrimeMap = () => {
  const dispatch = useDispatch();

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

  return (
    <Fragment>
      {isLoading ? (
        <div>Loading</div>
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
            <Marker position={position} title="Home"></Marker>
          </GoogleMap>
        </LoadScript>
      )}
    </Fragment>
  );
};

export default CrimeMap;
