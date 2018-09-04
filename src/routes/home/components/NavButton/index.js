import React from "react";
import { NavLink } from "react-router-dom";
import Styles from "./index.module.less";

export default () => (
  <div className={Styles.wholePart}>
    <NavLink exact className={Styles.item} to="/" activeClassName={Styles.activeItem}>
      推荐股票
    </NavLink>
    <NavLink
      className={Styles.item}
      to="/stocks"
      activeClassName={Styles.activeItem}
    >
      全部股票
    </NavLink>
  </div>
);
