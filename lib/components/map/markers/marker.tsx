// import SightingInfo from "../../Popups/SightingInfo/SightingInfo";
import { Marker } from "@react-google-maps/api";
import { useState, useEffect } from "react";
import SightingInfoWindowContent from "../infoWindows/sightingInfoWindowContent";

const DefaultMarker = ({ sighting, overlayView, setOverlayView }) => {
  const [infoWindow, setInfoWindow] = useState(null);
  const [infoWindowOffset, setInfoWindowOffset] = useState({ x: 0, y: 0 });

  // HSLA values determined by hours since the last sighting ranging from bright green to red
  const timedColour =
    sighting.hoursSinceSeen > 100 ? 0 : 100 - sighting.hoursSinceSeen;
  const timedSaturation = sighting.hoursSinceSeen < 5 ? 40 : 70;
  const backgroundFill = `hsla(${timedColour},100%,${timedSaturation}%,1)`;

  // Listens for changes in overview data and uses that to determine whether an info window should be open
  // on this marker and to remove it if not.

  useEffect(() => {
    if (overlayView.data !== null) {
      if (infoWindow !== null) {
        if (overlayView.data.id !== infoWindow.id) {
          setInfoWindow(null);
        }
      } else if (overlayView.data.id === sighting.id) {
        setInfoWindow(sighting);
      }
    }
  }, [overlayView.data, infoWindow, sighting]);

  // Used to toggle the infoWindow if a marker is clicked twice
  const toggleWindowInfo = (info) => {
    const state = infoWindow === null ? info : null;
    setInfoWindow(state);
  };

  // Handles clicking the 'x' on the InfoWindow
  const closeButtonHandler = () => {
    if (overlayView.functions !== null) {
      overlayView.functions.setMap(null);
      setOverlayView({ data: null, functions: null });
    }
    setInfoWindow(null);
  };

  return (
    <>
      {/* The coloured background of the marker */}
      <Marker
        onClick={() => {
          toggleWindowInfo(sighting);
        }}
        icon={{
          path: "M299.1,207.7c95.2,0.8,171.6,78.8,170.9,174.2c-0.8,95.4-78.6,172.1-173.7,171.3S124.6,474.4,125.4,379C126.2,283.6,203.9,206.9,299.1,207.7z",
          fillColor: backgroundFill,
          fillOpacity: sighting.editMode ? 0.1 : 1,
          scale: 0.09,
          strokeWeight: 0,
          anchor: new google.maps.Point(300, 666),
        }}
        position={{
          lat: parseFloat(sighting.latitude),
          lng: parseFloat(sighting.longitude),
        }}
      />
      {/* Main marker */}
      <Marker
        onClick={() => {
          toggleWindowInfo(sighting);
        }}
        icon={{
          path: "M298,166.3c35.4,0.4,68.4,9,99.4,25.5c16,8.5,31,18.4,43.7,31.5c7.5,7.8,15.5,15.2,22.2,23.7c15.3,19.1,26.7,40.3,34.2,63.8c7.8,24.7,10.2,49.8,8.8,75.6c-2.1,39.4-15.3,74.9-36.7,107.4c-9.5,14.3-20.3,27.8-31.2,41.1c-8.4,10.4-17.5,20.3-26.7,29.9c-9.6,10-19.9,19.5-29.9,29.1c-11.5,11.1-23.1,22.1-34.7,33.2c-14.9,14.2-29.7,28.4-44.6,42.6c-5.2,4.9-5.1,4.7-10.4-0.3c-14.7-13.8-29.6-27.5-44.3-41.3c-13.9-13-27.9-25.9-41.5-39.3c-15.9-15.7-31.9-31.4-46.8-48.1c-20.8-23.3-39-48.6-51.8-77.3c-8.3-18.6-14-38-17-58.3c-2.6-17-3.1-34.1-1.7-51.1c2.2-26.1,9.5-51.1,21.8-74.5c19.4-36.9,47.4-65.6,83.6-86c20.5-11.5,42.4-19.7,65.8-23.1C272.7,168.5,285.4,167.6,298,166.3z M297.3,207.7c-90.6-1-172.5,72.5-171,173.8c1.4,91.8,75.5,167.1,170.5,167.5c92.2,0.4,174.1-75.1,170.9-176.9C464.8,281.9,390.5,207.5,297.3,207.7zM291.8,522c-3.3-0.7-6.6-1.4-9-1.9c0.8-14.4,2.2-28.8,2.3-43.2c0.1-8-1.7-16.1-3-24.1c-2.3-13.2-9.2-21.9-21.6-27.2c-31.9-13.5-57.9-36.4-83.2-60c-19-17.6-24.8-40.3-20-66.1c0.4-2.3,3-4.1,4.6-6.1c1.8,1.6,4.8,3,5.2,5c2.6,12.2,11.1,14.8,21.2,15.9c32.3,3.5,62,14.8,87.7,35.9c8.4,6.9,15,16.1,22,23.9c23.6-33,56.6-50.7,95.8-57.2c7.3-1.2,14.4-2.8,21.7-4c5.2-0.9,8.6-3.9,10.5-8.9c0.9-2.3,1.6-4.8,2.9-6.8c1.1-1.6,3.2-3.5,4.7-3.4s4.1,2.6,4.1,4c0.1,12.1,0.8,24.4-0.8,36.3c-2,14.6-11.4,25.5-21.9,34.4c-17.8,15.2-36,30-54.9,43.8c-9.3,6.8-20.2,11.2-30.7,16c-7.4,3.4-11.3,9.1-12.8,16.7c-4.6,22.8-6.3,45.7-0.6,68.7c0.5,2,0.5,4,0.8,6.2c-4.6,0.7-9,1.4-13.4,2C299.6,522,295.7,522,291.8,522z",
          fillColor: sighting.editMode ? "grey" : "#082b5e",
          fillOpacity: sighting.editMode ? 0.4 : 1,
          scale: 0.08,
          strokeWeight: 0,
          anchor: new google.maps.Point(300, 700),
        }}
        position={{
          lat: parseFloat(sighting.latitude),
          lng: parseFloat(sighting.longitude),
        }}
      />

      {infoWindow && (
        <SightingInfoWindowContent
          sighting={sighting}
          closeButtonHandler={closeButtonHandler}
          getOffset={infoWindowOffset}
          setOffset={setInfoWindowOffset}
          setOverlayView={setOverlayView}
        />
      )}
    </>
  );
};

export default DefaultMarker;
