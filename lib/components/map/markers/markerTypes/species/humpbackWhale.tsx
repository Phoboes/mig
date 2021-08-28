import Silhouette from "./humpbackWhaleAssets/silhouette";
import BellyFill from "./humpbackWhaleAssets/bellyFill";
import DefaultMarker from "../markerPin";
import MarkerBackdrop from "../markerPinBackdrop";

const HumpbackWhale = ({
  overlayViewToggleHandler,
  lat,
  lng,
  markerFill,
  backgroundFill,
  silhouetteFill,
  opacity,
}) => {
  return (
    <>
      <DefaultMarker
        overlayViewToggleHandler={overlayViewToggleHandler}
        lat={lat}
        lng={lng}
        fill={markerFill}
        opacity={opacity}
      />
      <MarkerBackdrop
        overlayViewToggleHandler={overlayViewToggleHandler}
        lat={lat}
        lng={lng}
        fill={backgroundFill}
        opacity={opacity}
      />
      <Silhouette
        overlayViewToggleHandler={overlayViewToggleHandler}
        lat={lat}
        lng={lng}
        fill={silhouetteFill}
        opacity={opacity}
      />
      <BellyFill
        overlayViewToggleHandler={overlayViewToggleHandler}
        lat={lat}
        lng={lng}
        fill={"lightGrey"}
        opacity={opacity}
      />
    </>
  );
};

export default HumpbackWhale;
