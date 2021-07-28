import { memo } from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

const center = {
  lat: -33.79063314253369,
  lng: 151.29607059265138,
};

const tempMarkers = [
  [-33.76694771865754, 151.3131508996582],
  [-33.79205976612762, 151.29958965087891],
  [-33.80118959417948, 151.3201890161133],
];

function Map() {
  const markers = tempMarkers.map(([lat, lng]) => {
    return <Marker position={{ lat, lng }} key={`${lat}${lng}-marker`} />;
  });
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
          disableDefaultUI: true,
        }}
        onClick={({ latLng: { lat, lng } }) => {
          console.log(lat(), lng());
        }}
      >
        {markers}
      </GoogleMap>
    </LoadScript>
  );
}

export default memo(Map);
