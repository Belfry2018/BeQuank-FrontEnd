import { Redirect, Route } from "react-router-dom";
import React from "react";
import DefaultHeader from "../components/DefaultHeader";
import { judgeAuthorization } from "../utils/authorization";
import AuthorizationRoute from "../components/AuthorizationComponents/AuthorizationRoute";

export const DefaultLayout = ({ component: Component, ...rest }) => {
  return (
    <AuthorizationRoute
      component={function({ ...props }) {
        return (
          <div>
            <DefaultHeader />
            <Component {...props} />
            <div className="Footer">Footer</div>
          </div>
        );
      }}
      {...rest}
    />
  );
};
