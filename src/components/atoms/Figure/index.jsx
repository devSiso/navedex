import React from 'react';
import PropTypes from 'prop-types';
import { StyledFigure } from './styles';

const Figure = ({ insideModal, src, alt, figCaption, ...props }) => (
  <StyledFigure {...props} insideModal={insideModal}>
    <img src={src} alt={alt} />
    {figCaption && <figcaption>{figCaption}</figcaption>}
  </StyledFigure>
);

Figure.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  figCaption: PropTypes.string,
  insideModal: PropTypes.bool,
};

Figure.defaultProps = {
  figCaption: undefined,
  insideModal: false,
};

export default Figure;
