import React from 'react';

import { Route, Switch } from 'react-router-dom';

import IndexPage from '../views/Request/Request';
import Login from '../views/Login/Login';

const Routes = () => (
  <Switch>
    <Route path="/" exact component={Login} />
    <Route path="/request" exact component={IndexPage} />
  </Switch>
);
export default Routes;
