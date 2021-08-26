import { useState, useEffect } from "react";
import Select from "react-select";
import makeAnimated from "react-select/animated";
import Overlay from "../../..";

const SearchFilters = ({ speciesList, setFilters, filters, toggleState }) => {
  const animatedComponents = makeAnimated();
  const speciesNames = speciesList.map((opt) => {
    return { value: opt.id, label: opt.common_name };
  });

  const [currentFilters, setCurrentFilters] = useState(null);

  useEffect(() => {
    if (filters.species.length === 0) {
      setCurrentFilters(speciesNames);
    } else {
      const filterValues = filters.species.map((opt) => {
        return { value: opt.id, label: opt.common_name };
      });
      setCurrentFilters(filterValues);
    }
  }, []);

  console.log(filters);

  return (
    <Overlay toggleState={toggleState}>
      <h1>Species list:</h1>
      <Select
        defaultValue={currentFilters}
        components={animatedComponents}
        options={speciesNames}
        isMulti
        onChange={(e) => {
          const formattedFilters = e.map((speciesOption) => {
            return {
              common_name: speciesOption.label,
              id: speciesOption.value,
            };
          });
          setFilters({ ...filters, species: formattedFilters });
        }}
      />
      <h1>Time since sighting:</h1>
      <Select
        defaultValue={filters.daysSinceReport}
        options={[
          { label: "3 days", value: 3 },
          { label: "Last week", value: 7 },
          { label: "Last 2 weeks", value: 14 },
          { label: "Last 3 months", value: 90 },
          { label: "Last Year", value: 365 },
          { label: "All time", value: 0 },
        ]}
        onChange={(e) => {
          setFilters({
            ...filters,
            daysSinceReport: { value: e.value, label: e.label },
          });
        }}
      />
    </Overlay>
  );
};

export default SearchFilters;
