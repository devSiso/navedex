import styled from 'styled-components';

const logo = '/static/img/logo.svg';

const sizes = {
  small: {
    width: '91px',
    height: '30px',
  },
  medium: {
    width: '145px',
    height: '37px',
  },
  large: {
    width: '235px',
    height: '60px',
  },
};

const Logo = styled.h1`
  width: ${props => sizes[props.size].width};
  height: ${props => sizes[props.size].height};
  background-image: url(${logo});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  text-indent: -9999px;
`;

export default Logo;
