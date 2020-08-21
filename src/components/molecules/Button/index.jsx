import React from 'react';
import PropTypes from 'prop-types';

import Icon from '@components/atoms/Icon';
import Loader from '@components/atoms/Loader';

import { Label, DefaultButton, IconsWrapper, InlineButton } from './styles'

const Button = ({ bordered, onClick, theme, icon, loading, disabled, inline, value, ...attrs}) => {
  const ButtonWrapper = inline ? InlineButton : DefaultButton;
  return (
    <ButtonWrapper
      theme={theme}
      onClick={onClick}
      loading={loading ? 1 : 0}
      disabled={disabled ? 1 : 0}
      value={value}
      icon={icon}
      bordered={bordered}
      {...attrs}
    >
      { !icon && <Label>{value}</Label> }
      {icon && (
        <IconsWrapper>
          <Icon name={icon} />
        </IconsWrapper>
      )}
      {loading && <Loader size="medium" theme={theme} />}
    </ButtonWrapper>
  );
};

Button.propTypes = {
  onClick: PropTypes.func,
  theme: PropTypes.oneOf(['dark', 'light']),
  value: PropTypes.string,
  icon: PropTypes.string,
  loading: PropTypes.bool,
  disabled: PropTypes.bool,
  inline: PropTypes.bool,
  bordered: PropTypes.bool,
};

Button.defaultProps = {
  theme: 'dark',
  value: '',
  onClick: undefined,
  icon: undefined,
  loading: false,
  inline: false,
  disabled: false,
  bordered: false
};

export default Button;
