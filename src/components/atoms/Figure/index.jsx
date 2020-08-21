import React from 'react'
import PropTypes from 'prop-types';
import { StyledFigure } from './styles';

const Figure = ({ src, alt, figcaption, ...props}) => (
  <StyledFigure {...props}>
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
  figcaption: PropTypes.string
}

Figure.defaultProps = {
  figcaption: undefined
}

export default Figure;
