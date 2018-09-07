import React, { PureComponent } from "react";
import NavBar from "../components/NavBar"
import Styles from "../index.module.less"

export default class GovernmentInsight extends PureComponent {
  render() {
    return <div className={Styles.bodySection}>
      <NavBar/>
    </div>;
  }
}
