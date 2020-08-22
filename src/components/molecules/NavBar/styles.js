import styled from 'styled-components'

export const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  box-sizing: border-box;
  padding: 32px 24px;

  button {
    &:hover {
      text-decoration: underline;
    }
  }
`;

export default Nav;
