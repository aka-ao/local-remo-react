import React from "react";
import { Route, Switch } from "react-router";
import { Home, Create } from "./templates";

const Router = () => {
  return (
    <Switch>
      <Route exact path={"(/)?"} component={Home} />
      <Route exact path={"/create"} component={Create} />
    </Switch>
  );
};
export default Router;
