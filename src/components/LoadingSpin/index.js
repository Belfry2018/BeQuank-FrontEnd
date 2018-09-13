import React from "react";
import Styles from "./index.module.less";

export default function({ background }) {
  
  let finalBackground=background;
  if(background==="blue"){
    finalBackground="#2980B9";
  }
  return (
    <div className={Styles.spinner}>
      <div
        className={Styles["double-bounce1"]}
        style={{ background: finalBackground }}
      />
      <div
        className={Styles["double-bounce2"]}
        style={{ background: finalBackground }}
      />
    </div>
  );
}
