import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import PropTypes from 'prop-types';

import PrivateRoute from '@src/Router/PrivateRouter'

import Login from '@pages/Login'
import Home from '@pages/Home'
import Naver from '@pages/Naver'
import NotFound from '@pages/NotFound'

const RouterWrapper = ({ children }) => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Login} />
        <PrivateRoute exact path="/home" component={Home} />
        <PrivateRoute exact path="/naver" component={Naver} />
        <PrivateRoute exact path="/naver/:naverID" component={Naver} />
        <Route path="*" component={NotFound} />
      </Switch>
      {children}
    </Router>
  )
}

RouterWrapper.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.element), PropTypes.element, PropTypes.node]),
}
RouterWrapper.defaultProps = {
  children: undefined,
}
export default RouterWrapper;
