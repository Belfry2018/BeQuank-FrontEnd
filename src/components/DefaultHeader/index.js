import React, { Component } from "react";
import styles from "./index.module.less";
import {Link, NavLink} from "react-router-dom";
import Button from "../Button";

class DefaultHeader extends Component {
  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  state = {
    isTop: true
  };

  handleScroll = e => {
    if (window.scrollY < 5) {
      this.setState({ isTop: true });
    } else {
      this.setState({ isTop: false });
    }
  };

  render() {
    const { isTop } = this.state;

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
            <Link
              className={styles["user-item"]}
              to={"/login"}
            >登陆</Link>
            <Link
              className={styles["user-item"]}
              to={"/register"}
            ><Button type={"primary"}>注册</Button></Link>
          </div>
        </div>
      </div>
    );
  }
}

export default DefaultHeader;
