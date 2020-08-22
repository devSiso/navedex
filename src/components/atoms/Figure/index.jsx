import React from 'react'
import PropTypes from 'prop-types';
import { StyledFigure } from './styles';

const Figure = ({ insideModal, src, alt, figcaption, ...props}) => (
  <StyledFigure {...props} insideModal={insideModal}>
    <img src={src} alt={alt} />
    { figcaption && (
      <figcaption>
        {figcaption}
      </figcaption>
    )}
  </StyledFigure>
)

Figure.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  figcaption: PropTypes.string,
  insideModal: PropTypes.bool
}

Figure.defaultProps = {
  figcaption: undefined,
  insideModal: false
}

export default Figure;
