import React, { Component } from "react";
import styles from "./index.module.less";
import Tip from "./Tip/index";

class RecordList extends Component {
  render() {
    const { params = [] } = this.props;

    return (
      <div className={styles["tip-content"]}>
        {params.map((item, index) => {
          return <Tip key={`recordListItem${index}`} title={item.recordName} time={item.recordTime} id={item.recordId} />;
        })}
      </div>
    );
  }
}

export default RecordList;
