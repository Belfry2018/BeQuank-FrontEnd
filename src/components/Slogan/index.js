import Style from "./index.module.less";
import React from "react";

export default function() {
  return (
    <div className={Style.title}>
      Follow The Movement With <span className={Style.logo}>BeQuank</span>
    </div>
  );
}
