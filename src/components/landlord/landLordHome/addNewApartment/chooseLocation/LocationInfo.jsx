import React, { useCallback, useRef, useState } from "react";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";
import mapStyles from "./mapstyles";
import Locate from "./Locate";
import LocationBottom from "./LocationBottom";

function ContactMain(props) {
  const libraries = ["places"];

  const [userLocation, setUserLocation] = useState({ lat: null, lng: null });

  const mapContainerStyle = {
    width: "534px",
    height: "419px",
  };

  const center = {
    lat: 40.208285,
    lng: 44.509888,
  };

  const markers = [
    {
      lat: 40.199478,
      lng: 44.490413,
    },
    {
      lat: 40.205242,
      lng: 44.51704,
    },
    {
      lat: 40.212091,
      lng: 44.530402,
    },
  ];

  const mapRef = useRef();
  const onMapLoad = useCallback((map) => {
    mapRef.current = map;
  }, []);
  const panTo = useCallback(({ lat, lng }) => {
    mapRef.current.panTo({ lat, lng });
    mapRef.current.setZoom(14);
  }, []);

  const options = {
    styles: mapStyles,
    disableDefaultUI: true,
    zoomControl: true,
  };

  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
    libraries,
  });
  if (loadError) return "Error loading Maps";
  if (!isLoaded) return "Loading Maps";

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
      }}
    >
      <div
        style={{
          width: "auto",
          height: "auto",
          margin: 30,
        }}
      >
        <GoogleMap
          mapContainerStyle={mapContainerStyle}
          zoom={14}
          center={center}
          options={options}
          onLoad={onMapLoad}
        >
          {userLocation.lat && (
            <Marker
              position={{ lat: userLocation.lat, lng: userLocation.lng }}
              icon={{
                url: "http://maps.google.com/mapfiles/ms/icons/red-dot.png",
              }}
            />
          )}

          {markers.map((el, ind) => {
            return (
              <Marker
                key={ind}
                position={{ lat: el.lat, lng: el.lng }}
                icon={{
                  url: "http://maps.google.com/mapfiles/ms/icons/green-dot.png",
                }}
              />
            );
          })}
        </GoogleMap>
        <LocationBottom />
        {/* <Locate setUserLocation={setUserLocation} panTo={panTo} /> */}
      </div>
    </div>
  );
}

export default ContactMain;
