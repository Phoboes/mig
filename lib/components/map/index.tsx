import { memo, useState, useRef, useEffect } from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import { createClient } from "@supabase/supabase-js";
import Markers from "components/map/markers/markers";
import mapStyle from "./mapStyles/water";
import AddNewMarker from "../svgs/addNewMarker";
import PlaceMarker from "../svgs/placeMarker";
import DragMarker from "../svgs/dragMarker";
import EditOverlayForm from "../overlay/cards/sightingForm";

function Map() {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
  const supabase = createClient(supabaseUrl, supabaseKey);
  const mapRef = useRef(null);

  // -------------------------------------------------------------
  // STATES & INITIAL VARS:

  // Sightings fetched from the database
  const [sightings, setSightings] = useState([]);
  // Used as both a means of determining what stage of placing a new sighting into the system we are and a means of fading all the currently rendered markers.
  const [editState, setEditState] = useState({
    active: false,
    complete: false,
    marker: { lat: null, lng: null },
  });
  // Used to throttle events that fire constantly on map drag.
  const [mapMove, setMapMove] = useState(false);
  // The location the map centers on
  const [center, setCenter] = useState(null);
  // A default zoomed out value for the map
  let defaultZoom = 10;

  // -------------------------------------------------------------
  // DATA:

  // Does what it says on the tin; fetches the sightings from supabase and sets loading to false once done.
  async function fetchSightings() {
    const { data } = await supabase.from("sightings").select("*");
    setSightings(data);
  }

  async function fetchSpecies() {
    const { data } = await supabase.from("species").select("*");
    setSightings(data);
  }

  // Initial fetch of all sightings
  useEffect(() => {
    fetchSightings();
    // Subscribe to changes in the database, update the page if they are detected.
    const sightingSubscription = supabase
      .from("sightings")
      .on("*", () => fetchSightings())
      .subscribe();
    return () => {
      supabase.removeSubscription(sightingSubscription);
    };
  }, []);

  // -------------------------------------------------------------
  // LOCAL STORAGE

  // Ensures this line only runs client side.
  if (typeof window !== "undefined") {
    if (window.localStorage.whaleWatchZoom) {
      // If there's a zoom stored from a previous session in local storage grab it and use it, else default is set above.
      defaultZoom = parseFloat(window.localStorage.whaleWatchZoom);
    }
  }

  // If there's a stored center of the map, use it, if not default to near sydney.
  useEffect(() => {
    // Ensures this line only runs client side.
    if (typeof window !== "undefined") {
      if (window.localStorage.whaleWatchLat && center === null) {
        setCenter({
          lat: parseFloat(window.localStorage.whaleWatchLat),
          lng: parseFloat(window.localStorage.whaleWatchLng),
        });
      } else if (center === null) {
        setCenter({
          lat: -33.92499532347403,
          lng: 151.33951453305377,
        });
      }
    }
  }, [center]);

  return (
    <LoadScript googleMapsApiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}>
      {center && (
        <GoogleMap
          ref={mapRef}
          // mapContainerStyle={containerStyle}
          mapContainerStyle={{
            width: "100vw",
            height: "calc(100vh - 3.5rem)",
          }}
          center={center}
          zoom={defaultZoom}
          // This is called when there's a call for a new marker but it has not yet been placed on the map.
          onClick={(e) => {
            if (editState.active && editState.marker.lat === null) {
              // Once the map is clicked in this 'pending' state, grab the lat/lng and use it to render a marker.
              setEditState({
                ...editState,
                marker: {
                  lat: e.latLng.lat(),
                  lng: e.latLng.lng(),
                },
              });
            }
          }}
          // If the zoom changes, store it in localstorage for later use.
          onZoomChanged={() => {
            if (mapRef.current !== null) {
              if (typeof window !== "undefined") {
                if (
                  parseFloat(window.localStorage.whaleWatchZoom) !==
                  mapRef.current.state.map.zoom
                ) {
                  window.localStorage.setItem(
                    "whaleWatchZoom",
                    mapRef.current.state.map.zoom
                  );
                }
              }
            }
          }}
          // On map move/drag, store the new center in local storage.
          onCenterChanged={() => {
            // This event fires constantly during the map panning, so the 'mapMove' state works as a throttle.
            // If the map is in the process of moving, exit the function, if not, initialize a timer to save the lat/lng after 1 second.
            if (mapMove) {
              return;
            } else {
              setMapMove(true);
              setTimeout(() => {
                if (mapRef.current !== null) {
                  const updatedLatLng = {
                    lat: mapRef.current.state.map.center.lat(),
                    lng: mapRef.current.state.map.center.lng(),
                  };
                  if (typeof window !== "undefined") {
                    if (
                      parseFloat(window.localStorage.whaleWatchLat) !==
                      updatedLatLng.lat
                    ) {
                      window.localStorage.setItem(
                        "whaleWatchLat",
                        updatedLatLng.lat
                      );
                      window.localStorage.setItem(
                        "whaleWatchLng",
                        updatedLatLng.lng
                      );
                    }
                  }
                }
                // Reset the mapMove after 1s duration to listen for the next event.
                setMapMove(false);
              }, 1000);
            }
          }}
          options={{
            zoomControl: false,
            mapTypeControl: false,
            scaleControl: false,
            streetViewControl: false,
            rotateControl: false,
            fullscreenControl: false,
            styles: mapStyle,
          }}
        >
          <Markers sightings={sightings} editMode={editState.active} />
          {/* If a lat/lng has been collected from the map, render it and set it to draggable */}

          {editState.active && editState.marker.lat !== null && (
            <Marker
              icon={{
                path: "M298,166.3c35.4,0.4,68.4,9,99.4,25.5c16,8.5,31,18.4,43.7,31.5c7.5,7.8,15.5,15.2,22.2,23.7c15.3,19.1,26.7,40.3,34.2,63.8c7.8,24.7,10.2,49.8,8.8,75.6c-2.1,39.4-15.3,74.9-36.7,107.4c-9.5,14.3-20.3,27.8-31.2,41.1c-8.4,10.4-17.5,20.3-26.7,29.9c-9.6,10-19.9,19.5-29.9,29.1c-11.5,11.1-23.1,22.1-34.7,33.2c-14.9,14.2-29.7,28.4-44.6,42.6c-5.2,4.9-5.1,4.7-10.4-0.3c-14.7-13.8-29.6-27.5-44.3-41.3c-13.9-13-27.9-25.9-41.5-39.3c-15.9-15.7-31.9-31.4-46.8-48.1c-20.8-23.3-39-48.6-51.8-77.3c-8.3-18.6-14-38-17-58.3c-2.6-17-3.1-34.1-1.7-51.1c2.2-26.1,9.5-51.1,21.8-74.5c19.4-36.9,47.4-65.6,83.6-86c20.5-11.5,42.4-19.7,65.8-23.1C272.7,168.5,285.4,167.6,298,166.3z M297.3,207.7c-90.6-1-172.5,72.5-171,173.8c1.4,91.8,75.5,167.1,170.5,167.5c92.2,0.4,174.1-75.1,170.9-176.9C464.8,281.9,390.5,207.5,297.3,207.7zM291.8,522c-3.3-0.7-6.6-1.4-9-1.9c0.8-14.4,2.2-28.8,2.3-43.2c0.1-8-1.7-16.1-3-24.1c-2.3-13.2-9.2-21.9-21.6-27.2c-31.9-13.5-57.9-36.4-83.2-60c-19-17.6-24.8-40.3-20-66.1c0.4-2.3,3-4.1,4.6-6.1c1.8,1.6,4.8,3,5.2,5c2.6,12.2,11.1,14.8,21.2,15.9c32.3,3.5,62,14.8,87.7,35.9c8.4,6.9,15,16.1,22,23.9c23.6-33,56.6-50.7,95.8-57.2c7.3-1.2,14.4-2.8,21.7-4c5.2-0.9,8.6-3.9,10.5-8.9c0.9-2.3,1.6-4.8,2.9-6.8c1.1-1.6,3.2-3.5,4.7-3.4s4.1,2.6,4.1,4c0.1,12.1,0.8,24.4-0.8,36.3c-2,14.6-11.4,25.5-21.9,34.4c-17.8,15.2-36,30-54.9,43.8c-9.3,6.8-20.2,11.2-30.7,16c-7.4,3.4-11.3,9.1-12.8,16.7c-4.6,22.8-6.3,45.7-0.6,68.7c0.5,2,0.5,4,0.8,6.2c-4.6,0.7-9,1.4-13.4,2C299.6,522,295.7,522,291.8,522z",
                fillColor: "#082b5e",
                fillOpacity: 1,
                scale: 0.08,
                strokeWeight: 0,
                anchor: { x: 300, y: 700 },
              }}
              position={{
                lat: parseFloat(editState.marker.lat),
                lng: parseFloat(editState.marker.lng),
              }}
              draggable
              onDragEnd={(e) => {
                setEditState({
                  ...editState,
                  marker: {
                    lat: e.latLng.lat(),
                    lng: e.latLng.lng(),
                  },
                });
              }}
            />
          )}
        </GoogleMap>
      )}
      <div className="absolute bottom-0 flex justify-center align-center w-full">
        {/* No edit in progress */}
        {!editState.active && (
          <div
            className="cursor-pointer"
            onClick={() => {
              setEditState({ ...editState, active: true });
            }}
          >
            <AddNewMarker classes="h-20" />
          </div>
        )}
        {/* Edit has been engaged, but no marker placed */}
        {editState.active && editState.marker.lat === null && (
          <PlaceMarker classes="h-20 absolute bottom-40 pointer-events-none" />
        )}
        {/* A marker has been placed on the map, but the user hasn't locked it in. */}
        {editState.active &&
          editState.marker.lat !== null &&
          !editState.complete && (
            <div>
              <DragMarker classes="h-28 absolute bottom-40 pointer-events-none" />
              <button
                className="bg-green-500 mx-2 px-2 py-1 text-gray-700 font-bold rounded hover:bg-green-600 hover:text-gray-100 shadow"
                onClick={() => {
                  setEditState({ ...editState, complete: true });
                }}
              >
                Done
              </button>
              <button
                className="bg-red-300 mx-2 px-2 py-1 text-gray-600 font-bold rounded hover:bg-red-600 hover:text-gray-100 shadow"
                onClick={() => {
                  setEditState({
                    active: false,
                    complete: false,
                    marker: { lat: null, lng: null },
                  });
                }}
              >
                Cancel
              </button>
            </div>
          )}
        {/* The user has clicked 'Done' */}
        {editState.complete && (
          <EditOverlayForm
            sighting={{
              id: null,
              species_id: null,
              description: "",
              latitude: editState.marker.lat,
              longitude: editState.marker.lng,
            }}
            toggleState={() => {
              setEditState({
                active: false,
                complete: false,
                marker: { lat: null, lng: null },
              });
            }}
          />
        )}
      </div>
    </LoadScript>
  );
}

export default memo(Map);
