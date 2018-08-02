import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import PageLoadable from "../components/Loadable/PageLoadable";

const Home = PageLoadable(() => import("./index"));
const Login = PageLoadable(() => import("./user/login/index"));
const Course = PageLoadable(() => import("./course/index"));
const Insight = PageLoadable(() => import("./insight/index"));
const Page404 = PageLoadable(() => import("./error/404"));

export default function() {
  return (
    <BrowserRouter>
      <div>

        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/login" exact component={Login} />
          <Route path="/course" component={Course} />
          <Route path="/insight" component={Insight} />
          <Route component={Page404} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}
