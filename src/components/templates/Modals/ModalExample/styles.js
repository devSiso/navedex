import styled from 'styled-components';
import { White, Black } from '@assets/styles/colors';

export const DefaultModalContent = styled.div`

  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) ${props => (props.isOpened ? 'scale(1)' : 'scale(0.95)')};
  max-width: 728px;
  width: 100%;
  padding: 48px 40px 64px;
  background: ${White};
  transition: 0.1s ease-in;
`;

export const Title = styled.h3`
  color: ${Black};
  margin-bottom: 32px;
`;

export const Body = styled.div``;


// export const Actions = styled.div`
//   display: flex;
//   justify-content: flex-end;
// `;
