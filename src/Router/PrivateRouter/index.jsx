import React from "react";
import { Route, Redirect } from "react-router-dom";
import { isLoggedIn } from '@src/utils/auth'

const PrivateRoute = ({ children, ...rest }) => {
  const logged = isLoggedIn();

  return (
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
  );
}

export default PrivateRoute;
