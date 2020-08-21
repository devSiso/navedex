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

export const ActionsWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: flex-end;

  .button-wrapper {
    max-width: 176px;
    width: 100%;

    &:first-child {
      margin-right: 24px;
    }
  }
`;

export default Body;
