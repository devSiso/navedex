import { createGlobalStyle } from 'styled-components';
import { Paragraph } from './typography';
import { Grey, errorMessage } from './colors';

const base = createGlobalStyle`
body {
  ${Paragraph}
  color: ${Grey};
}

.error-span {
  color: ${errorMessage};
}
`;

export default base;
