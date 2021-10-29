import styled, { keyframes, css } from "styled-components";

const anim1 = keyframes`
    0% {
    transform: scale(0);
  }
  100% {
    transform: scale(1);
  }
`;
const anim2 = keyframes`
   0% {
      transform: translate(0, 0);
    }
    100% {
      transform: translate(24px, 0);
    }
`;
const anim3 = keyframes`
 0% {
      transform: scale(1);
    }
    100% {
      transform: scale(0);
    }
`;

const Spinner = () => {
  return (
    <Wrapper>
      <h2>Loading...</h2>
      <Container>
        <div />
        <div />
        <div />
        <div />
      </Container>
    </Wrapper>
  );
};

const Container = styled.div`
  display: inline-block;
  position: relative;
  width: 80px;
  height: 80px;

  & div {
    position: absolute;
    top: 33px;
    width: 13px;
    height: 13px;
    border-radius: 50%;
    background: var(--text);
    animation-timing-function: cubic-bezier(0, 1, 1, 0);
  }
  & div:nth-child(1) {
    left: 8px;
    animation: ${anim1} 0.6s infinite;
  }
  & div:nth-child(2) {
    left: 8px;
    animation: ${anim2} 0.6s infinite;
  }
  & div:nth-child(3) {
    left: 32px;
    animation: ${anim2} 0.6s infinite;
  }
  & div:nth-child(4) {
    left: 56px;
    animation: ${anim3} 0.6s infinite;
  }
`;

const Wrapper = styled.div`
  color: var(--text);

  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
export default Spinner;
