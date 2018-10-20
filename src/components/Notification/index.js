import React from "react";
import Styles from "./index.module.less";

export default ({ list = [], onClickNotification = () => {} }) => {
  return (
    <div className={Styles.notification}>
      {list.map(item => {
        const { responseId, nickname, comment } = item;
        return (
          <div
            className={Styles.item}
            onClick={() => onClickNotification(item)}
            key={responseId}
          >
            <div className={Styles.nickname}>
              {nickname}
              <span className={Styles.addOn}>回复了您的评论</span>
            </div>
            <div className={Styles.comment}>{comment}</div>
          </div>
        );
      })}
    </div>
  );
};
