import styled from 'styled-components';
import { modalTitle } from '@assets/styles/typography';
import { goUpAndFade } from '@assets/styles/animations'

export const NaverPageWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  animation: ${goUpAndFade} .8s ;

  .content {
    max-width: 600px;
    width: 100%;
    display: flex;
    flex-direction: column;

    header {
      margin-bottom: 32px;
      display: flex;
      align-items: center;

      h2 {
        margin-left: 20px;
      }
    }

    form {
      width: 100%;
      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-template-rows: 1fr 1fr 1fr;
      gap: 32px 32px;
      grid-template-areas: ". ." ". ." ". .";
      margin-bottom: 32px;

      input {
        max-width: 280px;
      }
    }
  }

`;

export const Title = styled.h2`
  ${modalTitle};
`;

export const ActionWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;

  button {
    max-width: 176px;
  }
`;

export default NaverPageWrapper;
