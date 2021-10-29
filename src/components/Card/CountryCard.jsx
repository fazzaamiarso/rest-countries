import styled from "styled-components";
import PropTypes from "prop-types";

const CountryCard = ({
  name,
  region,
  population,
  capital = "-",
  flag,
  onClick,
  code,
}) => {
  const clickHandler = () => {
    onClick(code);
  };
  return (
    <>
      <Card onClick={clickHandler}>
        <ImageContainer>
          <img src={flag} alt={name} />
        </ImageContainer>
        <Detail>
          <h3>{name}</h3>
          <p>
            Population:<span>{population.toLocaleString()}</span>
          </p>
          <p>
            Region:<span>{region}</span>
          </p>
          <p>
            Capital:<span>{capital}</span>
          </p>
        </Detail>
      </Card>
    </>
  );
};

const Card = styled.li`
  cursor: pointer;
  color: var(--text);
  background: var(--element);
  border-radius: var(--borderRadius);
  box-shadow: 0 3px 5px var(--boxShadow);
  overflow: hidden;

  display: flex;
  flex-direction: column;
  align-items: center;
  width: 250px;
`;
const ImageContainer = styled.div`
  height: 150px;
  width: 100%;
  box-shadow: 0 2px 5px var(--boxShadow);
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const Detail = styled.div`
  align-self: flex-start;
  padding: 1.5rem;

  h3 {
    margin-bottom: 1rem;
  }
  p {
    font-weight: 600;
    line-height: 1.5;
  }
  span {
    font-weight: 300;
    margin-left: 1ch;
  }
`;

CountryCard.propTypes = {
  name: PropTypes.string.isRequired,
  population: PropTypes.number.isRequired,
  capital: PropTypes.any,
  flag: PropTypes.string.isRequired,
  region: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  code: PropTypes.string.isRequired,
};

export default CountryCard;
