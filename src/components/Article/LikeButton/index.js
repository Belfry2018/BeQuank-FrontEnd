import React from "react";
import Styles from "./index.module.less";
import { Icon } from "antd";

export default function({}) {
  return (
    <div className={Styles.mainPart}>
      <div>
        <Icon className={Styles.icon} type="like" />
        <div className={Styles.description}>点赞以支持作者</div>
      </div>
    </div>
  );
}
