import React from "react";
import { Icon } from "antd";
import Styles from "./ReplyPart.module.less";

export default function({ onCloseEvent = () => {}, user = {} }) {
  const { nickname } = user;
  return (
    <div className={Styles.wholePart}>
      <div className={Styles.reply}>{`回复：@${nickname}`}</div>
      <div onClick={()=>onCloseEvent()} className={Styles.close}>
        <Icon type="close" />
      </div>
    </div>
  );
}
