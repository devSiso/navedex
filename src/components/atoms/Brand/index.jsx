import React from 'react';
import PropTypes from 'prop-types';
import Logo from './styles';

const projectName = process.env.REACT_APP_PROJECT_NAME;

const Brand = ({ size }) => (
  <Logo size={size}>
    {projectName}
  </Logo>
);

Brand.propTypes = {
  size: PropTypes.oneOf(['large', 'medium', 'small']),
};

Brand.defaultProps = {
  size: 'medium',
};

export default Brand;
