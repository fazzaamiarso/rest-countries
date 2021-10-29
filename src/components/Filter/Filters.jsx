import styled from "styled-components";
import Search from "./Search";
import FilterDrop from "./FIlterDrop";
import { useState } from "react";

const Filters = () => {
  return (
    <Container>
      <Search />
      <FilterDrop />
    </Container>
  );
};

const Container = styled.section`
  margin: 0 auto;
  width: 90%;
  @media screen and (min-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 2rem;
  }
`;

export default Filters;
