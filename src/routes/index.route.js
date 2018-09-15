import React from "react";
import { BrowserRouter, Switch } from "react-router-dom";
import PageLoadable from "../components/Loadable/PageLoadable";
import BasicLayoutRoute from "./routeconfig/BasicLayoutRoute";
import PlanLayoutRoute from "./routeconfig/PlainLayoutRoute";
import {DefaultLayout} from "../layout/DefaultLayout";

const Page404 = PageLoadable(() => import("./error/404/index"));

const routeList = [BasicLayoutRoute, PlanLayoutRoute];

export default function() {
  return (
    <BrowserRouter>
      <Switch>
        {routeList}
        <DefaultLayout component={Page404} />,
      </Switch>
    </BrowserRouter>
  );
}
