import { createContext } from "react";

const FilterContext = createContext({
  searchValue: "",
  region: [],
  inputSearch: (value) => {},
  selectRegion: (value) => {},
});

export default FilterContext;
