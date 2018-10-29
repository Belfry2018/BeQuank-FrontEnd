import React, { Component } from "react";
import { Modal } from "antd";
import styles from "./index.module.less";
const confirm = Modal.confirm;

export default function withLocker(WrappedComponent) {
  return class extends Component {
    render() {
      const { locked, ...passThroughProps } = this.props;

      return (
        <div>
          <div className={styles.text}>{locked ? "功能等待解锁" : ""}</div>
          <div className={locked ? styles.locked : styles.unlocked}>
            <WrappedComponent {...passThroughProps} />
          </div>
        </div>
      );
    }
  };
}
