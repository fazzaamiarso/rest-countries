import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Header = ({ mode, switchMode }) => {
  const clickHandler = () => {
    switchMode();
  };

  return (
    <Container>
      <h1>
        <HomeLink to="/">Where in the World?</HomeLink>
      </h1>
      <SwitchMode onClick={clickHandler}>
        <FontAwesomeIcon
          icon={mode === "light" ? faMoon : faSun}
          className="icon"
        />
        <div>Dark Mode</div>
      </SwitchMode>
    </Container>
  );
};
const HomeLink = styled(Link)`
  color: var(--text);
  font-size: 1.5rem;
`;

const Container = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 1rem calc(5%);
  background-color: var(--element);
  box-shadow: 0 2px 5px var(--boxShadow);
`;
const SwitchMode = styled.div`
  cursor: pointer;
  color: var(--text);
  font-weight: 600;
  display: flex;
  gap: 0.5rem;
  line-height: 1;

  &:hover {
    .icon {
      transform: scale(1.2);
      color: var(--text);
    }
  }
`;

Header.propTypes = {
  mode: PropTypes.string.isRequired,
  switchMode: PropTypes.func.isRequired,
};

export default Header;
