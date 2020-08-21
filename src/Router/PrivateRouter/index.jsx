import React from "react";
import { Route, Redirect } from "react-router-dom";
import { isLoggedIn } from '@src/utils/auth'
import PropTypes from 'prop-types'

const PrivateRoute = ({ component: Component, ...rest }) => {
  const logged = isLoggedIn();

  return (
    <Route
      {...rest}
      render={props =>
        logged ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: "/",
              state: { from: props.location }
            }}
          />
        )}
    />
  );
}

PrivateRoute.propTypes = {
  component: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
  location:  PropTypes.oneOfType([PropTypes.objectOf(PropTypes.any), PropTypes.string])
}

PrivateRoute.defaultProps = {
  component: undefined,
  location: undefined
}

export default PrivateRoute;
