import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import styles from "./index.module.less";
import plus from "./twotone-add_circle-24px.svg";
import notification from "./twotone-notifications-24px.svg";
import { Link } from "react-router-dom";
import Dropdown from "../../Dropdown";

const UserSectionProps = {
  /** Define url of avatar */
  avatarUrl: PropTypes.string.isRequired,
  /** Define type of button */
  nickName: PropTypes.string.isRequired
};

class UserSection extends PureComponent {
  render() {
    const { nickName, avatarUrl } = this.props;
    // return <div>{children}</div>;
    return (
      <div className={styles["user-section"]}>
        <div className={styles["avatar-section"]}>
          <Link to={"/strategy"}>
            <div className={`${styles["down-icon"]} ${styles["add-part"]}`}>
              创建策略
              <img src={plus} />
            </div>
          </Link>

          <div className={styles["down-icon"]}>
            <img src={notification} />
          </div>
          <Dropdown>
            <div className={styles.avatar} />
          </Dropdown>
        </div>
      </div>
    );
  }
}

UserSection.propTypes = UserSectionProps;

export default UserSection;
