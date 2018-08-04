import { Route } from "react-router-dom";
import React from "react";
import DefaultHeader from "../components/DefaultHeader";

export const DefaultLayout = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={matchProps => (
        <div>
          <DefaultHeader />
          <Component {...matchProps} />
          <div className="Footer">Footer</div>
        </div>
      )}
    />
  );
};
