import { Marker } from "@react-google-maps/api";

const BellyFill = ({ overlayViewToggleHandler, lat, lng, fill, opacity }) => {
  return (
    <>
      <Marker
        onClick={overlayViewToggleHandler}
        icon={{
          path: "M187,160.11c.31,4.14,2.28,29.93,3,47,.11,2.73.26,6.74,0,12a95.94,95.94,0,0,1-2,17c-2.56,11.48-6.7,17.15-4,20,.82.87,2.21,1.25,5,2a27.33,27.33,0,0,0,7,1c3.46-.19,6.72-36.83,8-165Q195.49,127.11,187,160.11Z",
          fillColor: fill,
          fillOpacity: opacity,
          fillSaturation: 0,
          scale: 0.12,
          strokeWeight: 0,
          anchor: { x: 200, y: 360 },
        }}
        position={{
          lat: lat,
          lng: lng,
        }}
      />
      <Marker
        onClick={overlayViewToggleHandler}
        icon={{
          path: "M92.49,86.61l-56-24a262.83,262.83,0,0,0,49,41c11.74,7.6,60.59,39.22,75,26,3.46-3.17,7.09-10.92,0-33Z",
          fillColor: fill,
          fillOpacity: opacity,
          fillSaturation: 0,
          scale: 0.1,
          strokeWeight: 0,
          anchor: { x: 210, y: 370 },
        }}
        position={{
          lat: lat,
          lng: lng,
        }}
      />
    </>
  );
};

export default BellyFill;
