import React from "react";
import DefaultHeader from "../components/DefaultHeader";
import AuthorizationRoute from "../components/AuthorizationComponents/AuthorizationRoute";
import styles from "./DefaultLayout.module.less"
import ScrollToTopOnMount from "../components/ScrollToTopOnMount";
import Footer from "../components/Footer/index";

export const DefaultLayout = ({ component: Component, ...rest }) => {
  return (
    <AuthorizationRoute
      component={function({ ...props }) {
        return (
          <div className={styles.wholeBody}>
            <DefaultHeader />
            <ScrollToTopOnMount />
  
            <div className={styles.BodyContent}>
              <Component {...props} />
            </div>
            <Footer/>
          </div>
        );
      }}
      {...rest}
    />
  );
};
