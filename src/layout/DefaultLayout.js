import React from "react";
import DefaultHeader from "../components/DefaultHeader";
import AuthorizationRoute from "../components/AuthorizationComponents/AuthorizationRoute";
import styles from "./DefaultLayout.module.less";
import ScrollToTopOnMount from "../components/ScrollToTopOnMount";
import Footer from "../components/Footer/index";
import { judgeAdmin } from "../utils/authorization";
import { Link } from "react-router-dom";

export const DefaultLayout = ({ component: Component, ...rest }) => {
  return (
    <AuthorizationRoute
      component={function({ ...props }) {
        return (
          <div className={styles.wholeBody}>
            <DefaultHeader />
            <ScrollToTopOnMount />
            {judgeAdmin() && (
              
                <Link to={"/courseForm"}><div className={styles.createForm}>创建文章</div></Link>
              
            )}

            <div className={styles.BodyContent}>
              <Component {...props} />
            </div>
            <Footer />
          </div>
        );
      }}
      {...rest}
    />
  );
};
