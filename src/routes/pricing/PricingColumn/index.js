import React from "react";
import Styles from "./index.module.less";
import { Icon } from "antd";

export default function({
  image,
  type,
  description,
  pricing,
  features = [],
  children
}) {
  return (
    <div className={Styles.wholePart}>
      <div className={Styles.imageContainer}>
        <img src={image} />
      </div>
      <div className={Styles.type}>{type}</div>
      <div className={Styles.description}>{description}</div>
      <div className={Styles.subSection}>
        <div className={Styles.subTitle}>PRICING</div>
        <div className={Styles.pricing}>{pricing}</div>
        <div className={Styles.subTitle}>FEATURES</div>
        <div className={Styles.featureSection}>
          {features.map((item, index) => (
            <div className={Styles.feature} key={index + "list"}>
              <Icon
                style={{ color: "#04a704", paddingRight: 10, fontSize: 25 }}
                type="check-circle"
                theme="filled"
              />
              <div>{item}</div>
            </div>
          ))}
        </div>
      </div>
      <div className={Styles.action}>{children}</div>
    </div>
  );
}
