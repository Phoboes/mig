import { useState, useRef } from "react";
import CloseButton from "components/svgs/closeButton";
import styles from "./sightingInfoWindow.module.scss";
import { OverlayView } from "@react-google-maps/api";
import SightingOverlay from "../../overlay/cards/sighting";
import EditSightingOverlay from "../../overlay/cards/sightingForm";

// TODO:
// Pan to the marker if it's clicked

export default function SightingInfoWindowContent({
  sighting,
  speciesList,
  closed,
  closeWindow,
}) {
  // Determines whether to display overlay with full sighting info
  const [overlayState, setOverlayState] = useState("collapsed");

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
                  {sighting.species.common_name}
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
                {/* Todo: True/false will be user visibility if logged in */}
                {true && (
                  <div>
                    <button
                      className="bg-blue-300 p-1 rounded font-bold text-gray-100
                  hover:bg-blue-600 hover:text-gray-200"
                      onClick={() => {
                        setOverlayState("editing");
                      }}
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
                      setOverlayState("expanded");
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
      {overlayState === "expanded" && (
        <SightingOverlay
          toggleState={() => {
            setOverlayState("collapsed");
          }}
          sighting={sighting}
          speciesList={speciesList}
        ></SightingOverlay>
      )}{" "}
      {overlayState === "editing" && (
        <EditSightingOverlay
          speciesList={speciesList}
          sighting={sighting}
          toggleState={() => {
            setOverlayState("collapsed");
          }}
        />
      )}
    </>
  );
}
