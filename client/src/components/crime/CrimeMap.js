import React, { Fragment } from "react";
import { LoadScript, GoogleMap, Marker } from "@react-google-maps/api";

const google = window.google;

const position = {
  lat: 41.824,
  lng: -71.4128
};

const apiKey = process.env.REACT_APP_API_KEY;

const CrimeMap = () => {
  return (
    <Fragment>
      <LoadScript id="script-loader" googleMapsApiKey={apiKey}>
        <GoogleMap
          id="test"
          mapContainerStyle={{
            height: "1400px",
            width: "1800px"
          }}
          zoom={15}
          center={{
            lat: 41.824,
            lng: -71.4128
          }}
        >
          <Marker position={position}></Marker>
        </GoogleMap>
      </LoadScript>
    </Fragment>
  );
};

export default CrimeMap;
