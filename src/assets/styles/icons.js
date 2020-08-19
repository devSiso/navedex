import { createGlobalStyle } from 'styled-components';

const icomoonEot = '/static/fonts/icons/icomoon.eot';
const icomoonTtf = '/static/fonts/icons/icomoon.ttf';
const icomoonWoff = '/static/fonts/icons/icomoon.woff';
const icomoonSvg = '/static/fonts/icons/icomoon.svg';

const icons = createGlobalStyle`
@font-face {
  font-family: 'icomoon';
  src:  url(${icomoonEot}?9atv9q);
  src:  url(${icomoonEot}?9atv9q#iefix) format('embedded-opentype'),
    url(${icomoonTtf}?9atv9q) format('truetype'),
    url(${icomoonWoff}?9atv9q) format('woff'),
    url(${icomoonSvg}?9atv9q#icomoon) format('svg');
  font-weight: normal;
  font-style: normal;
  font-display: block;
}

[class^="icon-"], [class*=" icon-"] {
  /* use !important to prevent issues with browser extensions that change fonts */
  font-family: 'icomoon' !important;
  font-style: normal;
  font-weight: normal;
  font-variant: normal;
  text-transform: none;
  line-height: 1;

  /* Better Font Rendering =========== */
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.icon-close:before {
  content: "\\e900";
}
.icon-arrow:before {
  content: "\\e901";
}
.icon-delete:before {
  content: "\\e902";
}
.icon-edit:before {
  content: "\\e903";
}
.icon-logo:before {
  content: "\\e904";
}
`

export default icons;
