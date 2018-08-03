import React from 'react';

import { Route, Switch } from 'react-router-dom';
import Login from '../views/Login/Login';
import Request from '../views/Request/Request';
import RequireAuth from '../hoc/authHoc';

const Routes = () => (
  <Switch>
    <Route path="/" exact component={Login} />
    <Route path="/request" exact component={RequireAuth(Request)} />
  </Switch>
);
export default Routes;
