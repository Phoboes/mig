import EditOverlayForm from "../../overlay/cards/forms/sightingForm";
import AddNewMarker from "../../svgs/addNewMarker";
import PlaceMarker from "../../svgs/placeMarker";
import DragMarker from "../../svgs/dragMarker";
import FilterButton from "../../svgs/filterButton";
import Filter from "../../overlay/cards/forms/filters";

export default function ActionBar({
  pageState,
  setPageState,
  filters,
  setFilters,
  mapData,
}) {
  return (
    //   TODO: Export these all to a taskbar component.
    <div className="absolute bottom-0 flex justify-center align-center w-full mb-4">
      {/* No edit in progress -- default display*/}
      {!pageState.active && (
        <>
          <div
            className="cursor-pointer"
            onClick={() => {
              setPageState({ ...pageState, active: true });
            }}
          >
            <AddNewMarker classes="h-20 mx-2" />
          </div>
          <div
            className="cursor-pointer"
            onClick={() => {
              setPageState({
                filter: true,
                active: false,
                complete: false,
                marker: { lat: null, lng: null },
              });
            }}
          >
            <FilterButton classes="h-20 mx-2" />
          </div>
        </>
      )}
      {/* ----------------------------------- */}
      {/* EDIT STATE DISPLAYS: */}
      {/* ----------------------------------- */}

      {/* Edit has been engaged, but no marker placed */}
      {pageState.active && pageState.marker.lat === null && (
        <PlaceMarker classes="h-20 absolute bottom-40 pointer-events-none" />
      )}
      {/* A marker has been placed on the map, but the user hasn't locked it in. */}
      {pageState.active &&
        pageState.marker.lat !== null &&
        !pageState.complete && (
          <div>
            <DragMarker classes="h-28 absolute bottom-40 pointer-events-none" />
            <button
              className="bg-green-500 mx-2 px-2 py-1 text-gray-700 font-bold rounded hover:bg-green-600 hover:text-gray-100 shadow"
              onClick={() => {
                setPageState({ ...pageState, complete: true });
              }}
            >
              Done
            </button>
            <button
              className="bg-red-300 mx-2 px-2 py-1 text-gray-600 font-bold rounded hover:bg-red-600 hover:text-gray-100 shadow"
              onClick={() => {
                setPageState({
                  ...pageState,
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
      {/* The user has clicked 'Done'; render a blank form */}
      {pageState.complete && (
        <EditOverlayForm
          sighting={{
            id: null,
            species: {
              species_id: null,
              common_name: null,
            },
            description: "",
            latitude: pageState.marker.lat,
            longitude: pageState.marker.lng,
          }}
          speciesList={mapData.species}
          toggleState={() => {
            setPageState({
              ...pageState,
              active: false,
              complete: false,
              marker: { lat: null, lng: null },
            });
          }}
        />
      )}
      {/* ----------------------------------- */}
      {/* FILTER STATE DISPLAYS */}
      {/* ----------------------------------- */}

      {pageState.filter && (
        <Filter
          speciesList={mapData.species}
          filters={filters}
          setFilters={setFilters}
          toggleState={() => {
            // Cancel all state changes
            setPageState({
              filter: false,
              active: false,
              complete: false,
              marker: { lat: null, lng: null },
            });
          }}
        />
      )}
    </div>
  );
}
