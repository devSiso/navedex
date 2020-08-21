import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import PrivateRoute from '@src/Router/PrivateRouter'

import Login from '@pages/Login'
import Home from '@pages/Home'
import Naver from '@pages/Naver'
import NotFound from '@pages/NotFound'

const RouterWrapper = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Login} />
        <PrivateRoute exact path="/home" component={Home} />
        <PrivateRoute exact path="/naver" component={Naver} />
        <PrivateRoute exact path="/naver/:naverID" component={Naver} />
        <Route path="*" component={NotFound} />
      </Switch>
    </Router>
  )
}

export default RouterWrapper;
