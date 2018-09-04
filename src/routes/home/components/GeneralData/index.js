import React from "react";
import Styles from "./index.module.less"


export default function({ todayBenefit, yearBenefit, risk }) {
  const Item = ({ children, title }) => (
    <div className={Styles.line}>
      <div className={Styles.desc}>{title}</div>
      <div className={Styles.numb}>{`${children}%`}</div>
    </div>
  );

  return (
    <div className={Styles.wholePart}>
      <Item title={"今日收益"}>{todayBenefit}</Item>
      <div className={Styles.divider}></div>
      <Item title={"年化收益"}>{yearBenefit}</Item>
      <div className={Styles.divider}></div>
      <Item title={"最大回馈"}>{risk}</Item>
    </div>
  );
}
