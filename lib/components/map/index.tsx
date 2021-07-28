import { memo } from "react";
import { GoogleMap, LoadScript } from "@react-google-maps/api";

const center = {
  lat: -33.79798,
  lng: 151.28826,
};

function Map() {
  return (
    <LoadScript googleMapsApiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}>
      <GoogleMap
        mapContainerStyle={{
          width: "100vw",
          height: "calc(100vh - 3.5rem)",
        }}
        center={center}
        zoom={13}
        options={{
          mapTypeControl: false,
          streetViewControl: false,
        }}
      ></GoogleMap>
    </LoadScript>
  );
}

export default memo(Map);
