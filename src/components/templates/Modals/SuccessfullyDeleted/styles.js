import styled from 'styled-components'

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
  max-width: 30px;
  position: absolute;
  top: 29px;
  right: 29px;
`;

export default Body;
