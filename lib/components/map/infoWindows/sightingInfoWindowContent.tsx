import { useState, useRef } from "react";
// import Image from "next/image";
// import ExpandArrow from "../../SVG/expandArrow";
// import Overlay from "Components/Overlay/Overlay";
// import SightingReport from "../../../Overlay/OverlayCards/SightingReport";
// import CloseButton from "../../SVG/closeButton";
import styles from "./sightingInfoWindow.module.scss";
import { OverlayView } from "@react-google-maps/api";

// TODO:
// Pan to the marker if it's clicked
// Add a collapse animation

export default function SightingInfoWindowContent({
  sighting,
  // closeButtonHandler,
  setInfoWindow,
  setOverlayView,
}) {
  // Determines whether to display overlay with full sighting info
  // const [collapsed, setCollapsed] = useState(true);
  // Offets for the InfoWindow from the Marker on the map
  const [offsetValues, setOffsetValues] = useState({ x: 0, y: 0 });

  // Ref to get the dynamic heights of InfoWindow content
  const contentRef = useRef(null);
  // const toggleState = () => {
  //   setCollapsed(!collapsed);
  // };

  // Once the ref is set, if the offset values haven't been set, grab them from the infowindow content and set them
  if (contentRef.current !== null && offsetValues.x === 0) {
    const wrapper = contentRef.current;
    setOffsetValues({ x: wrapper.clientWidth, y: wrapper.clientHeight });
  }

  // In order to render the overlayView, initial x/y offsets are required
  // let offsets = { x: 0, y: 0 };

  // // Offset values have been set, change the defaults.
  // if (offsetValues) {
  //   offsets = {
  //     x: -(offsetValues.x / 2),
  //     y: -(offsetValues.y + 65),
  //   };
  // }

  // If the user expands the popup, render the Sighting report in an overlay above everything. /Overlay/OverlayCards/Sighting
  return (
    <>
      <OverlayView
        getPixelPositionOffset={() => {
          return { x: offsetValues.x, y: offsetValues.y };
        }}
        mapPaneName={"floatPane"}
        onCloseClick={() => {
          setInfoWindow(null);
        }}
        onLoad={(e) => {
          // Once this component renders, set a record of it in the Markers component.
          // This allows the calling of .setMap, which we need to remove it from the google map.
          setOverlayView({ data: sighting, functions: e });
        }}
        position={{ lat: `${sighting.latitude}`, lng: sighting.longitude }}
      >
        <div
          className={`text-left bg-white rounded-md w-40 ${styles["speech-bubble"]}`}
          ref={contentRef}
        >
          <div className={`shadow-lg ${styles["content-wrapper"]}`}>
            <div>
              <span>Species:</span>
              <h2 className="text-base font-medium text-blue-500">
                {sighting.species}
              </h2>
            </div>
            <hr className="my-1" />
            <div className={null}>
              <span>Last seen: </span>
              <span className="text-blue-500 font-medium">{sighting.date}</span>
            </div>
          </div>
        </div>
      </OverlayView>
    </>
  );
}
