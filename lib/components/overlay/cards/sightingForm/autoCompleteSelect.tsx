// import { useEffect, useState } from "react";
import { createClient } from "@supabase/supabase-js";
import Select from "react-select";

const AutoCompleteSelect = ({ speciesList, formData, setFormData }) => {
  const speciesNames = speciesList.map((opt) => {
    return { value: opt.id, label: opt.common_name };
  });

  let formValue = {
    value: "",
    label: "",
  };

  if (formData.species !== null) {
    formValue = {
      value: formData.species.id,
      label: formData.species.common_name,
    };
  }

  return (
    speciesList.length > 0 && (
      <Select
        value={formData.species.common_name ? formValue : ""}
        placeholder="Please select a species"
        options={speciesNames}
        required
        onChange={(e) => {
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
