import React, { PureComponent } from "react";
import Styles from "./index.module.less";
import {Input} from "antd";
const Search = Input.Search;

export default class TutorialFilter extends PureComponent {
  render() {
    return (
      <div className={Styles.wholeFilter}>
        <div className={Styles.leftPart}>
          <div className={Styles.leftItem}>全部教程</div>
          <div className={Styles.leftItem}>基础教程</div>
          <div className={Styles.leftItem}>高级教程</div>
        </div>
        <div className={Styles.rightPart}>
          <div className={Styles.rightPart}>
            <div className={Styles.rightItem}>
              <Search
                placeholder="input search text"
                onSearch={value => console.log(value)}
                style={{ width: 200 }}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
