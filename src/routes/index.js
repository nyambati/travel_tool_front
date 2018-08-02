import React from "react";

import { Route, Switch } from "react-router-dom";

import IndexPage from "../views/IndexPage/IndexPage";
import Login from "../views/Login/Login";
import RequestsPage from "../views/RequestsPage/RequestsPage";

const Routes = () => (
  <Switch>
    <Route path="/" exact component={IndexPage} />
    <Route path="/login" component={Login} />
    <Route path="/requests" component={RequestsPage} />
    <Route path="/settings" component={RequestsPage} />
  </Switch>
);
export default Routes;
