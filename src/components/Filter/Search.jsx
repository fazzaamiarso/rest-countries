import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { useContext } from "react";
import FilterContext from "../../store/Filter-context";
import debounce from "lodash/debounce";

const Search = () => {
  const { inputSearch } = useContext(FilterContext);

  const changeHandler = (e) => {
    inputSearch(e.target.value);
  };
  const enterHandler = (e) => {
    if (e.key === "enter") return;
  };

  const debouncedHandler = debounce(changeHandler, 500);

  return (
    <Container>
      <SearchBar
        type="text"
        placeholder="Search for a country..."
        onChange={debouncedHandler}
        onKeyDown={enterHandler}
      />
      <FontAwesomeIcon icon={faSearch} className="icon" />
    </Container>
  );
};

const Container = styled.section`
  padding-top: 1.5rem;
  padding-bottom: 1rem;
  position: relative;
  .icon {
    position: absolute;
    left: 1.5rem;
    top: 50%;
    transform: translateY(-30%);
    color: var(--text);
  }

  @media screen and (min-width: 768px) {
    width: 600px;
  }
`;
const SearchBar = styled.input`
  font-weight: 600;
  width: 100%;
  padding: 0.75rem;
  padding-left: 4rem;
  background-color: var(--input);
  color: var(--text);

  border: none;
  border-radius: var(--borderRadius);
  box-shadow: 0 0 7px var(--boxShadow);
  &::placeholder {
    font-family: var(--fontStack);
    color: var(--text);
    opacity: 0.5;
  }
`;

export default Search;
