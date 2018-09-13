import React from "react";
import styles from "./index.module.less";

export default function SmallPoint({ title }) {
  if (title) {
    return (
      <div className={styles.pointSection}>
        <div className={styles.point} />
        {title}
      </div>
    );
  }

  return <div className={styles.point} />;
}
