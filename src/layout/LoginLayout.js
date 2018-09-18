import React from "react";
import AuthorizationRoute from "../components/AuthorizationComponents/AuthorizationRoute";
import styles from "./LoginLayout.module.less"
import Be from "../assert/be.svg"
import {Link} from "react-router-dom";

export default ({ name, component: Component, ...rest }) => {
  return (
    <AuthorizationRoute
      component={function({ ...props }) {
        return (
          <div className={styles["login-page"]}>
            <img alt={"Be"} src={Be} className={styles["login-logo"]} />
            <div className={styles["login-section"]}>
              <Link to={"/"}>
                <div className={styles["login-login"]}>{name}</div>
              </Link>
              <div className={styles["login-form"]}>
                <Component/>
              </div>
            </div>
          </div>
        );
      }}
      {...rest}
    />
  );
};
