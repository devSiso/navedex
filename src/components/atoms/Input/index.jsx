import React from 'react'
import { Controller } from 'react-hook-form'
import InputMask from 'react-input-mask'
import PropTypes from 'prop-types'
import { Label, InputWrapper } from './styles';

const Input = ({
   reference,
   name,
   mask,
   label,
   defaultValue,
   rules,
   marginTop,
   ...rest
  }) => {

  return mask && reference ? (
    <InputWrapper marginTop={marginTop}>
      <Label htmlFor={name}>{label || ""}</Label>
      <Controller
        name={name}
        as={InputMask}
        control={reference}
        mask={mask}
        id={name}
        {...rest}
        defaultValue={defaultValue}
        rules={rules}
      />
    </InputWrapper>
  ) : (
    <InputWrapper marginTop={marginTop}>
      <Label htmlFor={name}>{label || ""}</Label>
      <input
        name={name}
        ref={rules ? reference(rules) :  reference}
        defaultValue={defaultValue}
        {...rest}
      />
    </InputWrapper>
  )
}

Input.propTypes = {
  reference: PropTypes.oneOfType([PropTypes.objectOf(PropTypes.any), PropTypes.func]),
  marginTop: PropTypes.string,
  name: PropTypes.string.isRequired,
  mask: PropTypes.string,
  label: PropTypes.string,
  // eslint-disable-next-line
  defaultValue: PropTypes.oneOfType([PropTypes.objectOf(PropTypes.any), PropTypes.number, PropTypes.string]),
  rules: PropTypes.oneOfType([PropTypes.string, PropTypes.objectOf(PropTypes.any)]),
}

Input.defaultProps = {
  reference: undefined,
  marginTop: '',
  mask: undefined,
  label: '',
  defaultValue: '',
  rules: undefined,
}

export default Input;
