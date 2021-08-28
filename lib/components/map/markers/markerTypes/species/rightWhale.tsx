import Silhouette from "./rightWhaleAssets/silhouette";
// import FinTips from "./rightWhaleAssets/finTips";
import BellyFill from "./rightWhaleAssets/bellyFill";
import DefaultMarker from "../marker";
import MarkerBackdrop from "../markerBackdrop";

const RightWhale = ({
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
      {/* <FinTips
        overlayViewToggleHandler={overlayViewToggleHandler}
        lat={lat}
        lng={lng}
        fill={"black"}
        opacity={1}
      /> */}
    </>
  );
};

export default RightWhale;
