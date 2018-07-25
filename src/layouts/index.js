import React from "react";
import styles from "./index.css";
import withRouter from "umi/withRouter";

function Layout({ children, location }) {
  return <div className={styles.normal}>{children}</div>;
}

export default withRouter(Layout);
