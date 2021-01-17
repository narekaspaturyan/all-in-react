import React from "react";
import StyledButton from "../../../../utils/StyledButton";

export default function Locate({ panTo, setUserLocation }) {
  return (
    <StyledButton
      margin="30px 0 30px 0"
      onClick={() => {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            setUserLocation({
              lat: position.coords.latitude,
              lng: position.coords.longitude,
            });
            panTo({
              lat: position.coords.latitude,
              lng: position.coords.longitude,
            });
          },
          () => null
        );
      }}
    >
      Find Me on Map
    </StyledButton>
  );
}
