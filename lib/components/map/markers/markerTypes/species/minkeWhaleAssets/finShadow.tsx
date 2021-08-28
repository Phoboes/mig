import { Marker } from "@react-google-maps/api";

const finShadow = ({ overlayViewToggleHandler, lat, lng, fill, opacity }) => {
  return (
    <>
      <Marker
        onClick={overlayViewToggleHandler}
        icon={{
          path: "M211.49,206.61q.49-58.5,1-117c.09,5.42,1.13,33.89,23.5,52.5a62.34,62.34,0,0,0,23,12,48.88,48.88,0,0,0-29,10C210.53,179.3,211.36,204,211.49,206.61Z",
          fillColor: fill,
          fillOpacity: opacity,
          fillSaturation: 0,
          scale: 0.1,
          strokeWeight: 0,
          anchor: { x: 210, y: 360 },
        }}
        position={{
          lat: lat,
          lng: lng,
        }}
      />
    </>
  );
};

export default finShadow;
