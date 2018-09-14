import React, { PureComponent } from "react";
import Image from "./undraw_empty_xct9.svg";
import Styles from "../index.module.less";
import Button from "../../../components/Button";
import { Link } from "react-router-dom";

export default class Page404 extends PureComponent {
  render() {
    return (
      <div className={Styles.wholeContent}>
        <img src={Image} alt={"404"} />
        <div className={Styles.content}>
          <div className={Styles.title}>404</div>
          <div className={Styles.text}>Sorry~ 没找到您想要的东西</div>
          <Link to={"/"}>
            <Button type={"primary"}>回到首页</Button>
          </Link>
        </div>
      </div>
    );
  }
}
