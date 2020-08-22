import styled from 'styled-components';
import { BigTitle } from '@assets/styles/typography'
import { goUpAndFade } from '@assets/styles/animations'

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 32px;

  h2 {
    ${BigTitle}
  }

  button {
    max-width: 176px;
  }
`;

// export const Body = styled.section`

// `;

export const Slide = styled.div`
  max-width: 280px;
  width: calc(25% - 30px);
  display: flex;
  flex-direction: column;
`

export const NotFound = styled.div`
  text-align: center;
  font-size: 32px;
  font-weight: 600px;
`

export const AnimatedWrapper = styled.div`
  animation: ${goUpAndFade} 1s;
`;

export const PaginationWrapper = styled.div`
  opacity: ${props => props.isVisible ? '1' : '0'};
  transition: 1s;
`

export default Header;
