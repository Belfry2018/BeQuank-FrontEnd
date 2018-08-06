import React from "react";
import styles from "./index.module.less";

export function DropdownButton ({children}){
  return <div className={styles["default-dropdown-button"]}>
    {children}
  </div>
}

export function DropdownDivider() {
  return <div className={styles["default-dropdown-divider"]}/>
}