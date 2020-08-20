import React from "react";
import { Route, Redirect } from "react-router-dom";
import { isLoggedIn } from '@src/utils/auth'
import PropTypes from 'prop-types'

const PrivateRoute = ({ children, ...rest }) => {
  const logged = isLoggedIn();

  return (
    <>
      <Route
        {...rest}
        render={({ location }) =>
          logged ? (
            children
          ) : (
            <Redirect
              to={{
                  pathname: "/",
                  state: { from: location }
                }}
            />
            )}
      />
    </>
  );
}

PrivateRoute.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.element), PropTypes.element])
}

PrivateRoute.defaultProps = {
  children: undefined
}

export default PrivateRoute;
