import styled from 'styled-components';

export const CheatWrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    width: 600px;
    height: 600px;
    object-fit: contain;
  }
`;

export const Cat = styled.div`
  width: 100%;
  height: 100%;
  background-size: 25%;
  background-repeat: repeat;
`;

export default CheatWrapper;
