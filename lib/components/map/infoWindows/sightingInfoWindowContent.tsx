import { useState, useRef } from "react";
// import Image from "next/image";
// import ExpandArrow from "../../SVG/expandArrow";
// import Overlay from "Components/Overlay/Overlay";
// import SightingReport from "../../../Overlay/OverlayCards/SightingReport";
import CloseButton from "components/svgs/closeButton";
import styles from "./sightingInfoWindow.module.scss";
import { OverlayView } from "@react-google-maps/api";
// import Overlay from "components/overlay";
import SightingOverlay from "../../overlay/cards/sighting";

// TODO:
// Pan to the marker if it's clicked

export default function SightingInfoWindowContent({
  sighting,
  closed,
  closeWindow,
}) {
  // Determines whether to display overlay with full sighting info
  const [expanded, setExpanded] = useState(false);

  // Offets for the InfoWindow from the Marker on the map
  const [offsetValues, setOffsetValues] = useState({ set: false, x: 0, y: 0 });

  // Ref to get the dynamic heights of OverlayView content
  const contentRef = useRef(null);

  // If the user expands the popup, render the Sighting report in an overlay above everything. /Overlay/OverlayCards/Sighting
  return (
    <>
      <OverlayView
        getPixelPositionOffset={() => {
          return { x: offsetValues.x, y: offsetValues.y };
        }}
        mapPaneName={"floatPane"}
        onLoad={() => {
          // Once this component renders, set a record of it in the Markers component.
          const wrapper = contentRef.current;
          setOffsetValues({
            set: true,
            x: -(wrapper.clientWidth / 2),
            y: -(wrapper.clientHeight + 65),
          });
        }}
        position={{ lat: `${sighting.latitude}`, lng: sighting.longitude }}
      >
        <>
          <div
            className={`text-left bg-white rounded-md w-40 ${styles["speech-bubble"]}`}
            ref={contentRef}
          >
            <div
              className={`shadow-lg ${
                closed
                  ? `${styles["content-wrapper"]} ${styles["collapse"]}`
                  : `${styles["content-wrapper"]} ${styles["expand"]}`
              }`}
            >
              <div
                className={styles["close-button"]}
                onClick={() => {
                  closeWindow();
                }}
              >
                <CloseButton classes="cursor-pointer fill-current text-blue-300 hover:text-blue-500 active:text-blue-500 w-3" />
              </div>
              <div>
                <span>Species:</span>
                <h2 className="text-base font-medium text-blue-500">
                  {sighting.species}
                </h2>
              </div>
              <hr className="my-1" />
              <div className={null}>
                <span>Last seen: </span>
                <span className="text-blue-500 font-medium">
                  {sighting.date}
                </span>
              </div>
              <hr className="my-1" />
              <div className="flex flex-col items-center">
                {false && (
                  <div>
                    <p className="">Logged in</p>
                    <p className="">Belongs to user</p>
                    <button
                      className="bg-blue-300 p-1 rounded font-bold text-gray-100
                  hover:bg-blue-600 hover:text-gray-200"
                    >
                      Edit
                    </button>
                  </div>
                )}
                <div>
                  <button
                    className="bg-blue-300 p-1 rounded font-bold text-gray-100
                  hover:bg-blue-600 hover:text-gray-200 mt-1"
                    onClick={() => {
                      setExpanded(true);
                    }}
                  >
                    More +
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div
            className={
              closed
                ? `${styles.pointer} ${styles["pointer-collapse"]}`
                : styles.pointer
            }
          />
        </>
      </OverlayView>
      {expanded && (
        <SightingOverlay
          toggleState={() => {
            setExpanded(false);
          }}
          sighting={sighting}
        ></SightingOverlay>
      )}
    </>
  );
}
