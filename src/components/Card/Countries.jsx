import { useContext } from "react";
import styled from "styled-components";
import CountryCard from "./CountryCard";
import { useHistory } from "react-router-dom";
import FilterContext from "../../store/Filter-context";
import useFetch from "../Hooks/useFetch";
import Spinner from "../Spinner";

const Countries = () => {
  const { searchValue, region } = useContext(FilterContext);
  const [isLoading, data] = useFetch("all", []);

  let history = useHistory();

  const goToDetailHandler = (code) => {
    history.push(`/${code}`);
  };

  const searchRegex = new RegExp(`${searchValue}`, "gi");
  const filterRegion =
    region.length === 0
      ? data
      : data.filter((country) => region.some((reg) => reg === country.region));
  const filterSearch =
    searchValue === ""
      ? filterRegion
      : filterRegion.filter((country) => searchRegex.test(country.name));

  if (isLoading) return <Spinner />;
  if (filterSearch.length === 0) return <NotFound>No Countries Found</NotFound>;

  return (
    <>
      <Grid>
        <ul>
          {filterSearch.map((country) => {
            return (
              <CountryCard
                id={country.name}
                key={country.name}
                code={country.alpha3Code}
                name={country.name}
                capital={country.capital}
                flag={country.flags.svg}
                region={country.region}
                population={country.population}
                onClick={goToDetailHandler}
              />
            );
          })}
        </ul>
      </Grid>
    </>
  );
};

const NotFound = styled.h2`
  color: var(--text);
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
const Grid = styled.main`
  width: 90%;
  margin: 0 auto;
  padding-block: 1.5rem;
  ul {
    margin: 0 auto;
    width: 100%;
    display: grid;
    gap: 2rem;
    grid-template-columns: repeat(auto-fill, 250px);
    grid-auto-flow: dense;
    justify-items: center;
    align-items: center;
    justify-content: space-around;
  }
`;

export default Countries;
