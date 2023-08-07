import React, { useEffect, useRef, useState } from "react";
import { Loader } from "@googlemaps/js-api-loader";
import { toast } from "react-toastify";

function PositionPicker({ POSITION = {}, className }) {
  const mapRef = useRef(null);
  const markerRef = useRef(null);
  const rectangleRef = useRef(null);
  useEffect(() => {
    console.log(POSITION);
    const loader = new Loader({
      apiKey: import.meta.env.VITE_API_KEY,
      version: "weekly",
      libraries: ["places"],
    });
    // Promise
    loader
      .load()
      .then((google) => {
        const map = new google.maps.Map(mapRef.current, {
          center: {
            lat: POSITION.latitude,
            lng: POSITION.longitude,
          },
          zoom: 14,
        });
        const marker = new google.maps.Marker({
          map,
        });

        const latlng = new google.maps.LatLng(
          POSITION.latitude,
          POSITION.longitude
        );
        marker.setPosition(latlng);
        console.log(marker);
        markerRef.current = marker;
      })
      .catch((error) => {
        console.error("Error loading Google Maps API:", error);
      });

    return () => {
      if (markerRef.current) {
        markerRef.current.setMap(null);
      }
    };
  }, []);

  return <div ref={mapRef} className={`map ${className}`}></div>;
}

export default PositionPicker;
