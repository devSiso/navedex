import styled from 'styled-components';

export const Body = styled.div`
  box-sizing: border-box;
  padding-top: 24px;
  display: flex;
  flex-direction: column;

  p {
    margin-bottom: 32px;
  }
`;

export const CloseContainer = styled.div`
  max-width: 14px;
  position: absolute;
  top: 29px;
  right: 29px;
  cursor: pointer;
  z-index: 90;
`;

export default Body;
