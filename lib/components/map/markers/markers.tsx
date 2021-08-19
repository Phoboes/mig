import Marker from "./marker";
import { useState } from "react";
import moment from "moment";

// Pins handler; will ultimately handle the logic of marker icons etc, for now renders a default marker/pin.

const Markers = ({ sightings, editMode }) => {
  const [activeMarker, setActiveMarker] = useState(null);
  const markers = sightings.map((marker) => {
    // User friendly date format for time since last seen
    const momentDate = moment(marker.created_at).fromNow();

    // A less friendly numerical value used to colour code the marker pins based on time since seen.
    const hoursSinceSeen = moment().diff(moment(marker.created_at), "hours");
    return (
      <Marker
        key={marker.id}
        sighting={{
          ...marker,
          date: momentDate,
          hoursSinceSeen: hoursSinceSeen,
          editMode: editMode,
        }}
        // overlayView={overlayViewData}
        // setOverlayView={setOverlayViewData}
        setActive={setActiveMarker}
        active={activeMarker !== null ? marker.id === activeMarker.id : false}
      />
    );
  });
  return <>{markers}</>;
};
export default Markers;
