import React from "react";
import Styles from "./index.module.less";

export default function({ todayBenefit, yearBenefit, risk }) {
  const Item = ({ children, title }) => (
    <div className={Styles.line}>
      <div className={Styles.desc}>{title}</div>
      <div className={Styles.numb}>{`${children}%`}</div>
    </div>
  );

  return (
    <div className={Styles.wholePart}>
      <Item title={"当月收益"}>{todayBenefit?(todayBenefit * 100).toFixed(2):"-----" }</Item>
      <div className={Styles.divider} />
      <Item title={"风险指标"}>{risk?(risk * 100).toFixed(2):"-----" }</Item>
    </div>
  );
}
