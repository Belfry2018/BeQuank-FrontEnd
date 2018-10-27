import React, { PureComponent } from "react";
import Styles from "./index.module.less";
import { Input, Button } from "antd";
import {
  ADVANCED,
  BEGINNER,
  INTERMEDIATE
} from "../../../../utils/TutorialType";
const Search = Input.Search;

export default class TutorialFilter extends PureComponent {
  render() {
    const {
      selectedType = "",
      onClickTypeEvent = () => {},
      onSearchEvent = () => {},
      onKeyUp=()=>{},
        onShowDrawer=()=>{},
    } = this.props;

    const leftClassName = type =>
      `${Styles.leftItem} ${
        selectedType === type ? Styles.leftItemActive : ""
      }`;

    return (
      <div className={Styles.wholeFilter}>
        <div className={Styles.leftPart}>
          <div
            className={leftClassName("")}
            onClick={() => onClickTypeEvent("")}
          >
            全部教程
          </div>
          <div
            className={leftClassName(BEGINNER)}
            onClick={() => onClickTypeEvent(BEGINNER)}
          >
            基础教程
          </div>
          <div
            className={leftClassName(INTERMEDIATE)}
            onClick={() => onClickTypeEvent(INTERMEDIATE)}
          >
            中级教程
          </div>
          <div
            className={leftClassName(ADVANCED)}
            onClick={() => onClickTypeEvent(ADVANCED)}
          >
            高级教程
          </div>
        </div>
        <div className={Styles.rightPart}>
          <div className={Styles.rightPart}>
            <div className={Styles.rightItem}>
              <Search
                ref={ref => {
                  if (ref) this.input = ref.input;
                }}
                placeholder="搜索"
                onKeyUp={e => console.log("onchange", onKeyUp(e.target.value))}
                onSearch={onSearchEvent}
                style={{ width: 200 }}
              />
            </div>
            <div className={Styles.rightItem}>
                <Button onClick={onShowDrawer}>付费提问</Button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
