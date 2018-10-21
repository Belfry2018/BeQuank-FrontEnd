import React, { PureComponent } from "react";
import Piece from "./piece/index"
import styles from "./index.module.less";

class PayforQuestion extends PureComponent {
  render() {
    const { params } = this.props;
    return (
      <div className={styles.payforquestion}>
        <div className={styles.titleblock}>
          <img className={styles.dot} width={20} src="https://s1.ax1x.com/2018/10/21/iBd51P.png" alt="iBd51P.png" border="0" />
          <div className={styles.title}>{"付费提问"}</div>
        </div>
        <div className={styles.pieceblock}>
          {params.map((item) => {
            return <Piece avatar={item.avatar} username={item.username} bio={item.bio} />;
          })}
        </div>
      </div>
    );
  }
}

export default PayforQuestion;
