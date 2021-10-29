import styled from "styled-components";
import Select from "react-select";
import React, { useContext } from "react";
import FilterContext from "../../store/Filter-context";

const options = [
  { value: "Africa", label: "Africa" },
  { value: "Americas", label: "America" },
  { value: "Asia", label: "Asia" },
  { value: "Europe", label: "Europe" },
  { value: "Oceania", label: "Oceania" },
];
const customStyles = {
  option: (provided, state) => ({
    ...provided,
    color: state.isSelected ? "var(--text)" : "var(--text)",
    backgroundColor: state.isSelected ? "var(--input)" : "var(--input)",
  }),
  control: (provided, state) => ({
    ...provided,
    background: "var(--input)",
  }),
  placeholder: (provided, state) => ({
    ...provided,
    color: "var(--text)",
  }),
  menuList: (provided, state) => ({
    ...provided,
    background: "var(--input)",
  }),
};

const FilterDrop = () => {
  const { selectRegion } = useContext(FilterContext);

  const changeHandler = (selectedOption) => {
    selectRegion(selectedOption.map((region) => region.value));
  };
  return (
    <Container>
      <Select
        options={options}
        placeholder="Filter by Region"
        styles={customStyles}
        className="select"
        onChange={changeHandler}
        isMulti
      />
    </Container>
  );
};
const Container = styled.div`
  width: 250px;
`;

export default FilterDrop;
