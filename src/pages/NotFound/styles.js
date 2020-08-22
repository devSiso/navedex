import styled from 'styled-components';
import { BlackTexts } from '@assets/styles/colors'
import { goUpAndFade } from '@assets/styles/animations'

export const Page = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  animation: ${goUpAndFade} 1s;

  h2 {
    display: flex;
    flex-direction: column;
    color: ${BlackTexts};
    font-size: 22px;
    text-align: center;

    strong {
      font-size: 48px;
      font-weight: bold;
      margin-bottom: 16px;
    }
  }
`;

export default Page;
