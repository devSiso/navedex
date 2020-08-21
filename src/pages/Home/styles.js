import styled from 'styled-components';
import { BigTitle } from '@assets/styles/typography'

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

export default Header;
