import React, { PureComponent } from "react";
import styles from "./index.module.less";
import { Link, NavLink, withRouter } from "react-router-dom";
import Button from "../Button";
import UserSection from "./UserSection";
import Authorization from "../AuthorizationComponents/Authorization";
import { judgeAdmin, judgeLogin } from "../../utils/authorization";
import {
  getUserProfile,
  getNotification,
  readNotification
} from "../../services/apiUser";
import { DEFAULT_AVATAR } from "../../themes/default";

class DefaultHeader extends PureComponent {
  async componentDidMount() {
    this.judgeBackground();
    window.addEventListener("scroll", this.handleScroll);
    await this.getUser();
    await this.getNotification();
  }

  getUser = async () => {
    if (judgeLogin()) {
      let userInfo = await getUserProfile();
      if (!userInfo.avatar) {
        userInfo.avatar = DEFAULT_AVATAR;
      }
      this.setState(prevState => {
        return { ...prevState, ...userInfo };
      });
    }
  };

  getNotification = async () => {
    if (judgeLogin()) {
      let { list } = await getNotification();
      this.setState({ notificationList: list });
    }
  };

  onClickNotification = async ({ courseId, responseId }) => {
    await readNotification(responseId);
    this.props.history.push({
      pathname: `/course/${courseId}`
    });
  };

  judgeBackground = () => {
    const { pathname } = this.props.location;
    if (pathname === "/" && !judgeLogin()) {
      this.setState({ isTop: true });
      return true;
    }
    return false;
  };

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  state = {
    isTop: false
  };

  handleScroll = () => {
    if (this.judgeBackground()) {
      if (window.scrollY < 5 && this.state.isTop === false) {
        this.setState({ isTop: true });
      } else if (window.scrollY >= 5 && this.state.isTop === true) {
        this.setState({ isTop: false });
      }
    }
  };

  render() {
    const { isTop, nickname, avatar, notificationList } = this.state;

    return (
      <div
        className={`${styles["default-header"]} ${
          isTop ? "" : styles["default-header-active"]
        }`}
      >
        <div className={styles["header-content"]}>
          <div className={styles.left}>
            <Link to={"/"}>
              <div className={styles.logo}>BeQuank</div>
            </Link>
            <nav className={styles.nav}>
              <NavLink
                className={styles["nav-item"]}
                exact
                to={"/"}
                activeClassName={styles["nav-active"]}
              >
                主页
              </NavLink>
              <NavLink
                className={styles["nav-item"]}
                to={"/course"}
                activeClassName={styles["nav-active"]}
              >
                课程
              </NavLink>
              <NavLink
                className={styles["nav-item"]}
                to={"/insight"}
                activeClassName={styles["nav-active"]}
              >
                视角
              </NavLink>
              {judgeAdmin() ? (
                <NavLink
                  className={styles["nav-item"]}
                  to={"/courseForm"}
                  activeClassName={styles["nav-active"]}
                >
                  创建文章
                </NavLink>
              ) : (
                <NavLink
                  className={styles["nav-item"]}
                  to={"/pricing"}
                  activeClassName={styles["nav-active"]}
                >
                  价格
                </NavLink>
              )}
            </nav>
          </div>
          <div className={styles.user}>
            <Authorization
              beforeAuthorization={
                <div className={styles.user}>
                  <Link
                    className={styles["user-item"]}
                    to={"/login"}
                    style={{ marginRight: 40 }}
                  >
                    登陆
                  </Link>
                  <Link
                    className={`${styles["user-item"]} ${styles.button}`}
                    to={"/register"}
                  >
                    <Button type={"primary"}>注册</Button>
                  </Link>
                </div>
              }
              afterAuthorization={
                <div className={`${styles["user-item"]} ${styles.button}`}>
                  <UserSection
                    notificationList={notificationList}
                    onClickNotification={this.onClickNotification}
                    avatarUrl={avatar}
                    nickName={nickname}
                  />
                </div>
              }
            />
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(DefaultHeader);
