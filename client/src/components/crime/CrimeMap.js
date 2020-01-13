import React, { Fragment } from "react";
import { LoadScript, GoogleMap } from "@react-google-maps/api";

const google = window.google;

const CrimeMap = () => {
  return (
    <LoadScript
      id="script-loader"
      googleMapsApiKey="AIzaSyD0qbt_voTTHNHL8bmo9GLFPyvKxAhehec"
    >
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
      ></GoogleMap>
    </LoadScript>
  );
};

export default CrimeMap;
