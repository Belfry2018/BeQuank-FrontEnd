import React from "react";
import AuthorizationRoute from "../components/AuthorizationComponents/AuthorizationRoute";
import styles from "./LoginLayout.module.less"
import Be from "../assert/be.svg"

export default ({ name, component: Component, ...rest }) => {
  return (
    <AuthorizationRoute
      component={function({ ...props }) {
        return (
          <div className={styles["login-page"]}>
            <img alt={"Be"} src={Be} className={styles["login-logo"]} />
            <div className={styles["login-section"]}>
              <div className={styles["login-login"]}>{name}</div>
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
