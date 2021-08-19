import { memo, useState, useRef, useEffect } from "react";
import {
  GoogleMap,
  LoadScript,
  // InfoWindow,
  // Marker,
} from "@react-google-maps/api";
import { createClient } from "@supabase/supabase-js";
import Markers from "components/map/markers/markers";
import mapStyle from "./mapStyles/water";

function Map() {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
  const supabase = createClient(supabaseUrl, supabaseKey);

  const mapRef = useRef(null);

  // -------------------------------------------------------------
  // STATES & INITIAL VARS:
  // Sightings fetched from the database
  const [sightings, setSightings] = useState([]);
  // Loading state for the fetch request; once loaded, don't fetch more.
  // const [loading, setLoading] = useState(true);
  // Used as both a means of determining what stage of placing a new sighting into the system we are and a means of fading all the currently rendered markers.
  const [editState, setEditState] = useState({
    active: false,
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
    // setLoading(false);
    // console.log(error);
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
        </GoogleMap>
      )}
    </LoadScript>
  );
}

export default memo(Map);
