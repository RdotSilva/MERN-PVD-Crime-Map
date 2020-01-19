import React, { Fragment } from "react";
import { LoadScript, GoogleMap, Marker } from "@react-google-maps/api";

// Redux
import { useDispatch, useSelector } from "react-redux";

const google = window.google;

const apiKey = process.env.REACT_APP_API_KEY;

const CrimeMap = () => {
  // User Profile data from profile state
  const profile = useSelector(state => state.profile.profile);

  // User Home Position set in profile data
  // Also use this to center map
  const position = {
    lat: profile.data.location.coordinates[1],
    lng: profile.data.location.coordinates[0]
  };

  return (
    <Fragment>
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
    </Fragment>
  );
};

export default CrimeMap;
