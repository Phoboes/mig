import Silhouette from "./blueWhaleAssets/silhouette";
import SpineHighlight from "./blueWhaleAssets/spineHighlight";
import BellyFill from "./blueWhaleAssets/bellyFill";
import DefaultMarker from "../marker";
import MarkerBackdrop from "../markerBackdrop";

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
        opacity={1}
      />
      <MarkerBackdrop
        overlayViewToggleHandler={overlayViewToggleHandler}
        lat={lat}
        lng={lng}
        fill={backgroundFill}
        opacity={1}
      />
      <Silhouette
        overlayViewToggleHandler={overlayViewToggleHandler}
        lat={lat}
        lng={lng}
        fill={silhouetteFill}
        opacity={1}
      />
      <BellyFill
        overlayViewToggleHandler={overlayViewToggleHandler}
        lat={lat}
        lng={lng}
        fill={"#1b446d"}
        opacity={1}
      />
      <SpineHighlight
        overlayViewToggleHandler={overlayViewToggleHandler}
        lat={lat}
        lng={lng}
        fill={"lightBlue"}
        opacity={1}
      />
    </>
  );
};

export default BlueWhale;
