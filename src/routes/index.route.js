import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import PageLoadable from "../components/Loadable/PageLoadable";
import BasicLayoutRoute from "./routeconfig/BasicLayoutRoute";
import PlanLayoutRoute from "./routeconfig/PlainLayoutRoute";

const Page404 = PageLoadable(() => import("./error/404"));

const routeList = [BasicLayoutRoute, PlanLayoutRoute];

export default function() {
  return (
    <BrowserRouter>
      <Switch>
        {routeList}
        <Route component={Page404} />
      </Switch>
    </BrowserRouter>
  );
}
