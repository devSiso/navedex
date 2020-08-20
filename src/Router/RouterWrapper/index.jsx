import React from 'react';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Login from '@pages/Login'
import Home from '@pages/Home'
import NotFound from '@pages/NotFound'
import PrivateRoute from '@src/Router/PrivateRouter'

const RouterWrapper = () => {

  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Login} />
        <PrivateRoute exact path="/home">
          <Home />
        </PrivateRoute>
        <Route path="*" component={NotFound} />
      </Switch>
    </Router>
  )
}

export default RouterWrapper;
