import React from 'react';
import { useForm } from "react-hook-form"
import PropTypes from 'prop-types'
import { ErrorMessage } from '@hookform/error-message';
import { FormWrapper } from './styles'

const Form = ({ defaultValues, children, onSubmit }) => {
  const {
    control,
    register,
    errors,
    handleSubmit
  } = useForm({ defaultValues, criteriaMode: 'all' });

  const createElementProps = (controlled) => {
    if (controlled) {
      return {
        reference: control
      }
    }
    return {
      reference: register
    }
  }

  return (
    <FormWrapper onSubmit={handleSubmit(onSubmit)}>
      {React.Children.map(children, child => {
        const { controlled, className } = child.props;

        const getClassName = () => {
          const childErrors = errors[child.props.name];
          if (className && childErrors) {
            return [className, `--error-${childErrors.type}`].join(' ')
          }
          return errors[child.props.name] && `--error-${errors[child.props.name].type}`
        }

        return child.props.name
          ? (
            <>
              {React.createElement(child.type, {
                ...{
                  ...child.props,
                  ...createElementProps(controlled),
                  className: getClassName(),
                  key: child.props.name
                },
              })}
              { errors && (
                <ErrorMessage
                  errors={errors}
                  name={child.props.name}
                  render={({ message }) => <span className="error-span">{message && message}</span>}
                />
              )}
            </>
            // TODO ^ ErrorMessage middleware
            // Think about noErrorable inputs
          )
          : child;
      })}
    </FormWrapper>
  );
}

Form.propTypes = {
  defaultValues: PropTypes.objectOf(PropTypes.any),
  // eslint-disable-next-line
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.element), PropTypes.element]).isRequired,
  onSubmit: PropTypes.func.isRequired
}

Form.defaultProps = {
  defaultValues: undefined,
}

export default Form;
