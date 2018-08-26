import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import styles from "./index.module.less";
import plus from "./twotone-add_circle-24px.svg";
import notification from "./twotone-notifications-24px.svg";
import { Link } from "react-router-dom";
import Dropdown from "../../Dropdown";
import LoadingSpin from '../../LoadingSpin';
import {
  DropdownButton,
  DropdownDivider
} from "../../Dropdown/DefaultDropdownItems";
import { Icon } from "antd";

const linkList = [
  {
    iconType: "solution",
    component: <Link to={"/login"}>我的策略</Link>
  },
  {
    iconType: "user",
    component: <Link to={"/login"}>个人信息</Link>
  },
  {
    iconType: "setting",
    component: <Link to={"/login"}>个人设置</Link>
  },
  {
    isDivider: true
  },
  {
    iconType: "logout",
    component: <Link to={"/login"}>登出</Link>
  }
];

const DropdownLink = ({ iconType, component: Component, isDivider }) => {
  if (isDivider) {
    return <DropdownDivider />;
  }
  return (
    <DropdownButton>
      {iconType ? (
        <Icon style={{ marginRight: 20 }} type={iconType} />
      ) : (
        undefined
      )}
      {Component}
    </DropdownButton>
  );
};

const NickNameSpace = ({ children }) => {
  return <div style={{ padding: "5px 20px" }}>{children}</div>;
};

const UserSectionProps = {
  /** Define url of avatar */
  avatarUrl: PropTypes.string,
  /** Define type of button */
  nickName: PropTypes.string
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
              <img alt={""} src={plus} />
            </div>
          </Link>

          <div className={styles["down-icon"]}>
            <img alt={""} src={notification} />
          </div>
          <Dropdown
            overlay={[
              <NickNameSpace key={"nickname-space"}>{nickName}</NickNameSpace>,
              <DropdownDivider key={"nickname-divider"} />,
              ...linkList.map((listItem, index) => (
                <DropdownLink key={`dropdown-links-${index}`} {...listItem} />
              ))
            ]}
          >
            {avatarUrl ? (
              <img alt={""} src={avatarUrl} className={styles.avatar} />
            ) : (
              <LoadingSpin background="#2980B9">Primary</LoadingSpin>
            )}
          </Dropdown>
        </div>
      </div>
    );
  }
}

UserSection.propTypes = UserSectionProps;

export default UserSection;
