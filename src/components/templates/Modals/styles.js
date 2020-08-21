import styled from 'styled-components';
import { modalTitle } from '@assets/styles/typography'
import { White, BlackTexts } from '@assets/styles/colors';

const sizes = {
  large: '1006px',
  medium: '592px'
}

export const DefaultModalContent = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) ${props => (props.isOpened ? 'scale(1)' : 'scale(0.95)')};
  max-width: ${props => sizes[props.size]};
  width: 100%;
  padding: 48px 40px 64px;
  background: ${White};
  transition: 0.1s ease-in;
  box-sizing: border-box;
  padding: 32px;
`;

export const Title = styled.h3`
  ${modalTitle};
  color: ${BlackTexts};
`;
