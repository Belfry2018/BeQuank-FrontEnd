import React, { Component } from "react";
import styles from "./index.module.less";

export default function withLocker(
  WrappedComponent,
  style = { borderRadius: 7 }
) {
  return class extends Component {
    render() {
      const { locked, ...passThroughProps } = this.props;

      if (locked) {
        return (
          <div style={style} className={styles.wholeCover}>
            <div className={styles.innerCover}>
              <div className={styles.text}>功能等待解锁</div>
            </div>
            <div className={locked ? styles.locked : styles.unlocked}>
              <WrappedComponent {...passThroughProps} />
            </div>
          </div>
        );
      } else {
        return <WrappedComponent {...passThroughProps} />;
      }
    }
  };
}
