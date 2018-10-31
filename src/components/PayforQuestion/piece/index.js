import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import styles from "./index.module.less";
import { Avatar } from "antd";
import { Icon } from "antd";

const PieceProperty = {
  /** Define avatar'url of button */
  avatar: PropTypes.string.isRequired,
  /** Define bio of button */
  bio: PropTypes.string.isRequired,
  /** Define username of button */
  username: PropTypes.string.isRequired
};

class Piece extends PureComponent {
  render() {
    const { avatar, bio, username, onClick=()=>{} } = this.props;
    return (
      <div className={styles.piece} onClick={onClick}>
        <div className={styles.avatar}>
          <Avatar size={56} src={avatar} />
        </div>
        <div className={styles.right}>
          <div className={styles.namecontent}>
            <div className={styles.username}>{username}</div>
            <div className={styles.content}>{bio}</div>
          </div>
          <div className={styles.icon}>
            <Icon type="right" theme="outlined" />
          </div>
        </div>
      </div>
    );
  }
}

Piece.propTypes = PieceProperty;

export default Piece;
