// import { useEffect, useState } from "react";
import { createClient } from "@supabase/supabase-js";
import Select from "react-select";

const AutoCompleteSelect = ({
  species = null,
  speciesList = [],
  formData,
  setFormData,
}) => {
  const speciesNames = speciesList.map((opt) => {
    return { value: opt.id, label: opt.common_name };
  });
  console.log(speciesList);

  let formValue = {
    value: "",
    label: "",
  };

  if (formData.species.id !== null) {
    formValue = {
      value: formData.species.id,
      label: formData.species.common_name,
    };
  }

  console.log(formValue);

  return (
    speciesList.length > 0 && (
      <Select
        value={formData.species.id ? formValue : ""}
        placeholder="Please select a species"
        options={speciesNames}
        required
        onChange={(e) => {
          console.log("Change");
          console.log(e);
          setFormData({
            ...formData,
            species: { id: e.value, common_name: e.label },
          });
        }}
      />
    )
  );
};

export default AutoCompleteSelect;
