import React from "react";
import { Route } from "react-router-dom";
import PageLoadable from "../../components/Loadable/PageLoadable";

const Login = PageLoadable(() => import("../user/login/index"));
const Register = PageLoadable(() => import("../user/register/index"));

export default [
  <Route path="/login" exact component={Login} />,
  <Route path="/Register" exact component={Register} />
];
