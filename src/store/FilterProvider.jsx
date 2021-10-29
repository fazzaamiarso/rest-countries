import FilterContext from "./Filter-context";
import PropTypes from "prop-types";
import { useState } from "react";

const FilterProvider = ({ children }) => {
  const [search, setSearch] = useState("");
  const [region, setRegion] = useState([]);

  const searchHandler = (input) => {
    setSearch(input);
  };
  const selectRegionHandler = (region) => {
    setRegion(region);
  };

  const context = {
    searchValue: search,
    region,
    inputSearch: searchHandler,
    selectRegion: selectRegionHandler,
  };
  return (
    <FilterContext.Provider value={context}>{children}</FilterContext.Provider>
  );
};

FilterProvider.propTypes = {
  children: PropTypes.element.isRequired,
};
export default FilterProvider;
