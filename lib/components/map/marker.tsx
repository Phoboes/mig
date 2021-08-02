import { Marker } from "@react-google-maps/api";
import MyOverlayView from "components/map/overlayView";

export default function MyMarker({
  lat,
  lng,
  setActivePosition,
  isActive = false,
}) {
  return (
    <Marker
      position={{ lat, lng }}
      onClick={() => {
        setActivePosition(`${lat},${lng}`);
      }}
    >
      {isActive && <MyOverlayView lat={lat} lng={lng} />}
    </Marker>
  );
}
