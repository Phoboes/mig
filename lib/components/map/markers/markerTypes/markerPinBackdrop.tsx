import { Marker } from "@react-google-maps/api";

const DefaultMarker = ({
  overlayViewToggleHandler,
  lat,
  lng,
  fill,
  opacity,
}) => {
  return (
    <>
      <Marker
        onClick={overlayViewToggleHandler}
        icon={{
          path: "M299.1,207.7c95.2,0.8,171.6,78.8,170.9,174.2c-0.8,95.4-78.6,172.1-173.7,171.3S124.6,474.4,125.4,379C126.2,283.6,203.9,206.9,299.1,207.7z",
          // fillColor: sighting.editMode ? "grey" : "#082b5e",
          // fillOpacity: sighting.editMode ? 0.4 : 1,
          fillColor: fill,
          fillOpacity: opacity,
          scale: 0.08,
          anchor: { x: 300, y: 655 },
          strokeColor: "rgba(0,0,0,0.2)",
          strokeWeight: 2,
        }}
        position={{
          lat: lat,
          lng: lng,
        }}
      />
    </>
  );
};

export default DefaultMarker;
