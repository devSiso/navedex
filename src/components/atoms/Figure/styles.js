import styled from 'styled-components'

export const StyledFigure = styled.figure`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  img {
    display: block;
    width: 100%;
    height: 24vw;
    outline: none;
    object-fit: cover;
  }

  figcaption {
    text-align: center;
  }
`;

export default StyledFigure;
