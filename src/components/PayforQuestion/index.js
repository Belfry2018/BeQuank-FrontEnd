import React, { Component } from "react";
import Piece from "./piece/index";
import styles from "./index.module.less";
import SmallPoint from "../SmallPoint";

class PayforQuestion extends Component {

  render() {
    const { params, onPieceClick=()=>{} } = this.props;
    return (
      <div className={styles.payforquestion}>
        <div className={styles.titleblock}>
          <div className={styles.dot}>
            <SmallPoint />
          </div>
          <div className={styles.title}>{"付费提问"}</div>
        </div>
        <div className={styles.pieceblock}>
          {params.map((item,index) => {
            return (
              <Piece
                avatar={item.avatar}
                username={item.username}
                bio={item.bio}
                onClick={()=>onPieceClick(item.username)}
                key={`dalaoList${index}`}
              />
            );
          })}
        </div>
      </div>
    );
  }
}

export default PayforQuestion;
