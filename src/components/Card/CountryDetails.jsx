import styled from "styled-components";
import DataPoint from "./DataPoint";
import { useParams, Link, useHistory } from "react-router-dom";
import COUNTRY_CODE from "../../CountryCode";
import useFetch from "../Hooks/useFetch";
import Spinner from "../Spinner";

const CountryDetails = () => {
  let { code } = useParams();
  let history = useHistory();
  const [isLoading, data] = useFetch(`alpha/${code.toLowerCase()}`, {}, code);

  if (isLoading) return <Spinner />;

  const goBackHandler = () => {
    history.goBack();
  };

  return (
    <Section>
      <BackLink onClick={goBackHandler}>&#8592; Back</BackLink>
      <section>
        <ImageContainer>
          <img src={data.flags.svg} alt={data.name} />
        </ImageContainer>
        <Content>
          <h2>{data.name}</h2>
          <Detail>
            <FirstData>
              <DataPoint value="Native Name" data={data.nativeName} />
              <DataPoint
                value="Population"
                data={data.population.toLocaleString()}
              />
              <DataPoint value="Region" data={data.region} />
              <DataPoint value="Sub Region" data={data.subRegion || "-"} />
              <DataPoint value="Capital" data={data.capital || "-"} />
            </FirstData>
            <SecondData>
              <DataPoint
                value="Top Level Domain"
                data={data.topLevelDomain[0]}
              />
              <DataPoint
                value="Currencies"
                data={data.currencies.map((curr) => curr.name).join(", ")}
              />
              <DataPoint
                value="Languages"
                data={data.languages.map((lang) => lang.name).join(", ")}
              />
            </SecondData>
          </Detail>
          <Borders>
            <h3>Border Countries:</h3>
            <ul>
              {data.borders?.map((code) => {
                return (
                  <li key={code}>
                    <BorderLink to={`/${code}`}>
                      {COUNTRY_CODE[code]}
                    </BorderLink>
                  </li>
                );
              })}
            </ul>
          </Borders>
        </Content>
      </section>
    </Section>
  );
};

const Section = styled.section`
  padding-block: 2.5rem;
  width: 90%;
  margin: 0 auto;

  > section {
    @media screen and (min-width: 768px) {
      width: 100%;
      display: flex;
      justify-content: flex-start;
      gap: 5rem;
    }
  }
`;
const Content = styled.div`
  flex-basis: 60%;
  color: var(--text);
`;

const BackLink = styled.div`
  font-weight: 600;
  background-color: var(--input);
  color: var(--text);

  display: inline-block;
  padding: 0.5rem 1.5rem;
  box-shadow: 0 0 10px var(--boxShadow);
  margin-bottom: 3rem;
  border: 1px solid transparent;
  border-radius: var(--borderRadius);
  &:hover {
    cursor: pointer;
    border: 1px solid var(--text);
  }
`;
const ImageContainer = styled.div`
  flex-basis: 40%;
  max-width: 450px;
  margin: 0 auto;
  margin-bottom: 2rem;
  box-shadow: 0 2px 10px var(--boxShadow);
  img {
    height: 100%;
    object-fit: cover;
    margin: 0 auto;
  }
`;

const Detail = styled.div`
  margin-top: 1rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  line-height: 2;
  margin-bottom: 2rem;

  @media screen and (min-width: 500px) {
    flex-direction: row;
  }
  @media screen and (min-width: 768px) {
    gap: 5rem;
  }
`;
const FirstData = styled.div``;
const SecondData = styled.div``;
const Borders = styled.div`
  color: var(--text);

  h3 {
    margin-bottom: 0.5rem;
  }
  ul {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
  }
`;
const BorderLink = styled(Link)`
  background: var(--input);
  color: var(--text);
  display: inline-block;
  padding: 0.25rem 0.5rem;
  box-shadow: 0 0 10px var(--element);
  border-radius: var(--borderRadius);

  border: 1px solid transparent;
  &:hover {
    border: 1px solid var(--text);
  }
`;

export default CountryDetails;
