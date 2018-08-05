import React from 'react';

import { Route, Switch } from 'react-router-dom';
import Login from '../views/Login/Login';
import Request from '../views/Request/Request';

const Routes = () => (
  <Switch>
    <Route path="/login" component={Login} />
    <Route path="/request" component={Request} />
  </Switch>
);
export default Routes;
