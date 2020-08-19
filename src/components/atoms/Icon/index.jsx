import React from 'react';
import PropTypes from 'prop-types';

import StyledIcon from './styles';

const Icon = ({ name }) => <StyledIcon className={`icon-${name}`} />;

Icon.propTypes = {
  name: PropTypes.string.isRequired,
};

export default Icon;
