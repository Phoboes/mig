import { useState, useEffect } from "react";
import Overlay from "../..";
import { createClient } from "@supabase/supabase-js";
import AutoCompleteSelect from "./autoCompleteSelect";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

const FullReport = ({ sighting, toggleState }) => {
  const [formData, setFormData] = useState({
    species: {
      id: sighting.species_id,
      common_name: null,
    },
    subspecies: sighting.subspecies,
    description: sighting.description,
  });

  const [options, setOptions] = useState([]);

  console.log(formData);
  // console.log(sighting);

  const {
    id,
    species,
    subspecies,
    description,
    latitude,
    longitude,
    species_id,
  } = sighting;

  const fetchOptions = async () => {
    const { data } = await supabase.from("species").select("*");
    setOptions(data);
  };

  useEffect(() => {
    fetchOptions();
  }, []);

  const deleteButtonHandler = async () => {
    if (id) {
      const { data, error } = await supabase
        .from("sightings")
        .delete()
        .match({ id });
    }
    toggleState();
  };

  const formSubmitHandler = async (e) => {
    e.preventDefault();
    // A portal is needed here to insert the Overlay over the map.
    // If it's nested within the Map component, events are detected by the map through the overlay including clicks and scrolls,
    //  which causes issues navigating the infomation on the tab.

    // Todo: Chuck some form checks in here with friendly error messages, the ones from supabase are too cryptic.

    // If it exists, edit it. If it don't ... don't.
    if (id) {
      const { data, error } = await supabase
        .from("sightings")
        .update({
          // species: formData.species,
          species_id: formData.species.id,
          description: formData.description,
        })
        .match({ id });
    } else {
      const { data, error } = await supabase.from("sightings").insert({
        species_id: formData.species.id,
        // subspecies: formData.subspecies,
        description: formData.description,
        latitude: latitude,
        longitude: longitude,
      });
    }

    toggleState();
  };
  return (
    <>
      <Overlay toggleState={toggleState}>
        <div className="text-center">
          {id ? (
            <h3 className="text-lg mb-4 font-bold text-blue-700">
              What would you like to change?
            </h3>
          ) : (
            <h3 className="text-lg mb-4 font-bold text-blue-700">
              Tell us what you saw:
            </h3>
          )}

          <form
            className="w-80 m-auto text-left"
            onSubmit={(e) => {
              e.preventDefault();
            }}
          >
            <div className="">
              <div>
                {/* Todo: populate this from server, make it autocomplete typing w/ dropdown */}
                <label className="text-blue-700 text-sm block font-bold">
                  Species:
                </label>
              </div>
              <AutoCompleteSelect
                species={formData.species.id}
                speciesList={options}
                formData={formData}
                setFormData={setFormData}
              />
            </div>
            <div className="">
              <div>
                <label className="my-2 text-blue-700 text-sm block font-bold">
                  Description:
                </label>
              </div>
              <textarea
                className="w-full h-32 max-h-40 bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 rounded shadow leading-tight focus:outline-none focus:shadow-outline mt-1"
                defaultValue={description}
                onChange={(e) => {
                  setFormData({ ...formData, description: e.target.value });
                }}
              />
            </div>
            <div className="flex justify-center">
              <button
                onClick={formSubmitHandler}
                className="bg-green-300 py-1 px-2 m-2 rounded-md text-gray-900 font-bold hover:bg-green-400 hover:text-gray-100"
              >
                {id === null ? "Create" : "Update"}
              </button>
              <button
                onClick={deleteButtonHandler}
                className="bg-red-300 py-1 px-2 m-2 rounded-md text-gray-900 font-bold hover:bg-red-400 hover:text-gray-100"
              >
                {id === null ? "Cancel" : "Delete"}
              </button>
            </div>
          </form>
        </div>
      </Overlay>
    </>
  );
};

export default FullReport;
