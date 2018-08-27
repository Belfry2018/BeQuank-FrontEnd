import React, { PureComponent } from "react";
import styles from "./index.module.less";

class MyCard extends PureComponent {
  render() {
    const { context, header, src, time, top } = this.props;
    return (
      <div className={styles.card}>
        <div className={styles.top}>{top}</div>
        <div className={styles.imgbox}>
          <img className={styles.image} src={src} />
        </div>
        <div className={styles.textbox}>
          <h3>{header}</h3>
          <p>{context}</p>
          <span className={styles.time}>{time}</span>
        </div>
      </div>
    );
  }
}

export default MyCard;
