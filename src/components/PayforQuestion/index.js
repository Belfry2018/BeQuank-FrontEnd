import React, { PureComponent } from "react";
import Piece from "./piece/index";
import styles from "./index.module.less";
import SmallPoint from "../SmallPoint";

class PayforQuestion extends PureComponent {
  render() {
    const { params } = this.props;
    return (
      <div className={styles.payforquestion}>
        <div className={styles.titleblock}>
          <div className={styles.dot}>
            <SmallPoint />
          </div>
          <div className={styles.title}>{"付费提问"}</div>
        </div>
        <div className={styles.pieceblock}>
          {params.map(item => {
            return (
              <Piece
                avatar={item.avatar}
                username={item.username}
                bio={item.bio}
              />
            );
          })}
        </div>
      </div>
    );
  }
}

export default PayforQuestion;
