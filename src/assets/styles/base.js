import { createGlobalStyle } from 'styled-components';
import { Paragraph } from './typography';
import { errorMessage, BlackTexts } from './colors';

const base = createGlobalStyle`
@import 'swiper/swiper.scss';

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

  span {
    margin-left: 12px;
    font-weight: bold;
    font-size: 18px;
  }

  .swiper-pagination-bullet {
    width: unset;
    height: unset;
    background: transparent;
    border-radius: 0;
  }
}
`;

export default base;
