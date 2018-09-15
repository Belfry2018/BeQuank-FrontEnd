import React, { PureComponent } from "react";
import Image from "./undraw_firmware_mf69.svg";
import Styles from "../index.module.less";
import Button from "../../../components/Button";
import { Link } from "react-router-dom";

export default class Page403 extends PureComponent {
  render() {
    return (
      <div className={Styles.wholeContent}>
        <img src={Image} alt={"403"} />
        <div className={Styles.content}>
          <div className={Styles.title}>403</div>
          <div className={Styles.text}>Opp!你没有权限访问本页</div>
          <Link to={"/"}>
            <Button type={"primary"}>回到首页</Button>
          </Link>
        </div>
      </div>
    );
  }
}
