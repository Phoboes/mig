import Silhouette from "./spermWhaleAssets/silhouette";
import FinTips from "./spermWhaleAssets/finTips";
import BellyFill from "./spermWhaleAssets/bellyFill";
import DefaultMarker from "../markerPin";
import MarkerBackdrop from "../markerPinBackdrop";

const SpermWhale = ({
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
    </>
  );
};

export default SpermWhale;
