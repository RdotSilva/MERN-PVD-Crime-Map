import React from "react";
import { GoogleMap, useLoadScript } from '@react-google-maps/api'

const options = {
  zoomControlOptions: {
    position: google.maps.ControlPosition.RIGHT_CENTER
  }
}

const CrimeMap = () => {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: process.env.GOOGLE_MAPS_API_KEY
  })

  const renderMap = () => {
    const onLoad = React.useCallback(
      function onLoad (mapInstance) {
      }
    )

  return ()
    
};

export default CrimeMap;
