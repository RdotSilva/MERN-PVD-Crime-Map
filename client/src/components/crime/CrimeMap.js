import React, { Fragment } from "react";
import { LoadScript, GoogleMap, Marker } from "@react-google-maps/api";

// Redux
import { useDispatch, useSelector } from "react-redux";

const google = window.google;

const apiKey = process.env.REACT_APP_API_KEY;

const CrimeMap = () => {
  // User Profile data from profile state
  const profile = useSelector(state => state.profile.profile);

  return (
    <Fragment>
      <LoadScript id="script-loader" googleMapsApiKey={apiKey}>
        <GoogleMap
          id="crime-map"
          mapContainerStyle={{
            height: "1400px",
            width: "1800px"
          }}
          zoom={15}
          center={position}
        >
          <Marker position={position}></Marker>
        </GoogleMap>
      </LoadScript>
    </Fragment>
  );
};

export default CrimeMap;
