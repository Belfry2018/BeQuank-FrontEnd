import React, { PureComponent } from "react";
import styles from "./index.module.less";
import { Link, NavLink, withRouter } from "react-router-dom";
import Button from "../Button";
import UserSection from "./UserSection";
import Authorization from "../AuthorizationComponents/Authorization";
import { judgeLogin } from "../../utils/authorization";
import { getUserProfile } from "../../services/apiUser";

class DefaultHeader extends PureComponent {
  async componentDidMount() {
    this.judgeBackground();
    window.addEventListener("scroll", this.handleScroll);
    await this.getUser();
  }

  getUser = async () => {
    if (judgeLogin()) {
      let userInfo = await getUserProfile();
      this.setState(prevState => {
        return { ...prevState, ...userInfo };
      });
    }
  };

  judgeBackground = () => {
    const { pathname } = this.props.location;
    console.log(pathname);
    if (pathname === "/" && !judgeLogin()) {
      this.setState({isTop:true});
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

  handleScroll = e => {
    if (this.judgeBackground()) {
      if (window.scrollY < 5&&this.state.isTop===false) {
        this.setState({ isTop: true });
      } else if(window.scrollY >= 5&&this.state.isTop===true) {
        this.setState({ isTop: false });
      }
    }
  };

  render() {
    const { isTop, nickname, avatar } = this.state;

    return (
      <div
        className={`${styles["default-header"]} ${
          isTop ? "" : styles["default-header-active"]
        }`}
      >
        <div className={styles["header-content"]}>
          <div className={styles.left}>
            <div className={styles.logo}>BeQuank</div>
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
                  <UserSection avatarUrl={avatar} nickName={nickname} />
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
