import Silhouette from "./blueWhaleAssets/silhouette";
import SpineHighlight from "./blueWhaleAssets/spineHighlight";
import BellyFill from "./blueWhaleAssets/bellyFill";
import DefaultMarker from "../markerPin";
import MarkerBackdrop from "../markerPinBackdrop";

const BlueWhale = ({
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
        fill={"#1b446d"}
        opacity={opacity}
      />
      {/* <SpineHighlight
        overlayViewToggleHandler={overlayViewToggleHandler}
        lat={lat}
        lng={lng}
        fill={"lightBlue"}
        opacity={opacity}
      /> */}
    </>
  );
};

export default BlueWhale;
