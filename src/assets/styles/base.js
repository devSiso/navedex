import { createGlobalStyle } from 'styled-components';
import { Paragraph } from './typography';
import { errorMessage, BlackTexts } from './colors';
// import { goUpAndFade } from './animations'

const base = createGlobalStyle`
body {
  ${Paragraph}
  color: ${BlackTexts};
}

.error-span {
  color: ${errorMessage};
}

.swiper-pagination {
  width: 100%;
  margin-top: 36px;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 25px;
  font-family: Arial;
  position: static;

  span {
    margin-left: 12px;
    font-weight: bold;
    font-size: 18px;

    &:first-child {
      margin-left: 0;
    }
  }

  .swiper-pagination-bullet {
    width: 12px;
    min-height: 25px;
    background: transparent;
    border-radius: 0;
    transition: .2s;
    text-align: center;
    display: block;

    &:hover {
      text-decoration: underline;
      text-decoration-color: #000;
    }
  }

  a::active {
    border-color: unset;
  }
}
`;

export default base;
