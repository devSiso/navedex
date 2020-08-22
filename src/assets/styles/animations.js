import { keyframes } from 'styled-components';

export const goUpAndFade = keyframes`
  from {
    opacity: 0;
    transform: translateY(50px)
  }
  to {
    opacity: 1;
    transform: translateY(0)
  }
`;

export default goUpAndFade;
