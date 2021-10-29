import styled from "styled-components";
import PropTypes from "prop-types";

const DataPoint = ({ value, data }) => {
  return (
    <Data>
      {value}:<span>{data}</span>
    </Data>
  );
};

const Data = styled.p`
  font-weight: 600;
  color: var(--text);
  span {
    font-weight: 300;
    margin-left: 1ch;
  }
`;

DataPoint.propTypes = {
  value: PropTypes.string.isRequired,
  data: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

export default DataPoint;
