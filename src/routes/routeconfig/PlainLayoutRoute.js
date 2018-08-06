import React from "react";
import {LoginPageLoader} from "../../components/Loadable/PageLoadable";
import LoginLayout from "../../layout/LoginLayout";

const Login = LoginPageLoader(() => import("../user/login/index"));
const Register = LoginPageLoader(() => import("../user/register/index"));

export default [
  <LoginLayout name={"Login"} path="/login" exact component={Login} />,
  <LoginLayout name={"Register"} path="/Register" exact component={Register} />
];
