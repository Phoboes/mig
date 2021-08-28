import Silhouette from "./minkeWhaleAssets/silhouette";
import FinShadow from "./minkeWhaleAssets/finShadow";
import BellyFill from "./minkeWhaleAssets/bellyFill";
import DefaultMarker from "../markerPin";
import MarkerBackdrop from "../markerPinBackdrop";

const MinkeWhale = ({
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
        fill={"#0c4a66"}
        opacity={opacity}
      />
      <FinShadow
        overlayViewToggleHandler={overlayViewToggleHandler}
        lat={lat}
        lng={lng}
        fill={"#010f16"}
        opacity={opacity}
      />
    </>
  );
};

export default MinkeWhale;
