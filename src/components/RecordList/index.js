import React, { Component } from "react";
import styles from "./index.module.less";
import Tip from "./Tip/index";

class RecordList extends Component {
  render() {
    const { params } = this.props;

    return (
      <div className={styles["tip-content"]}>
        {params.map((item, index) => {
          return <Tip title={item.recordName} time={item.recordTime} />;
        })}
      </div>
    );
  }
}

export default RecordList;
