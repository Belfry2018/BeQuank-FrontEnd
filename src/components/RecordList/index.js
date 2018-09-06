import React, { Component } from "react";
import styles from "./index.module.less";
import Tip from "./Tip/index";

class RecordList extends Component {
  render() {
    const { params } = this.props;

    return (
      <div className={styles["tip-content"]}>
        <div>
            {params.map((item, index) => {
                return <Tip title={item.title} time={item.recordTime} />;
            })}
        </div>
      </div>
    );
  }
}

export default RecordList;
