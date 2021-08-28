import { Marker } from "@react-google-maps/api";

const SpineHighlight = ({
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
          path: "M258.69,129.1c-1.37,21.82-3.89,27.11-5.6,38.55-.56,3.79-.8,6.73-1.13,10.57-1.2,14-2.35,27.37-2.78,46.34-.25,10.88.06,9.2-.21,17.44-.06,1.88-.56,16.19-2.47,32.92-1.05,9.16-3.07,21.29-5.18,32.83-1.51-.08-3-.2-4.5-.33Q246,191.15,255.23,74.88q1.61,10,3.22,20A243.87,243.87,0,0,1,258.69,129.1Z",
          fillColor: fill,
          fillOpacity: opacity,
          fillSaturation: 0,
          scale: 0.1,
          strokeWeight: 0,
          anchor: { x: 250, y: 420 },
        }}
        position={{
          lat: lat,
          lng: lng,
        }}
      />
    </>
  );
};

export default SpineHighlight;
