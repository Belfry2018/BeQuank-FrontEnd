import React, { PureComponent } from "react";
import NavBar from "../components/NavBar";
import Styles from "../index.module.less";
import SmallPoint from "../../../components/SmallPoint";

export default class GovernmentInsight extends PureComponent {
  render() {
    return (
      <div className={Styles.bodySection}>
        <NavBar />
        <div className={Styles.government}>
          <div className={Styles.title}>
            <SmallPoint title={"政府文章"} />
          </div>
          <div>
          </div>
        </div>
      </div>
    );
  }
}
