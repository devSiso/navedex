import styled from 'styled-components';

const types = {
  xsmall: {
    radio: '12px',
  },
  small: {
    radio: '16px',
  },
  medium: {
    radio: '24px',
  },
  large: {
    radio: '40px',
  },
  xlarge: {
    radio: '73px',
  },
};

const WrapperLoader = styled.span`
  display: block;
  width: ${props => types[props.size].radio};
  height: ${props => types[props.size].radio};

  svg {
    display: block;
  }
`;

export default WrapperLoader;
