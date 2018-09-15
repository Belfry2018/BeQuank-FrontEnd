import React, { PureComponent } from "react";
import Styles from "./index.module.less";
import {Icon, Pagination, Skeleton} from "antd";

export default class HotSpot extends PureComponent {
  render() {
    const { list = [],onPageClicked=()=>{},currentPage=1,totalPage=1 } = this.props;
    return (
      <div className={Styles.wholeBody}>
        <div className={Styles.bodySection}>
          <Skeleton active loading={list.length === 0}>
            {list.map((item, index) => (
              <div key={`HotSection${index}`}>
                <div className={Styles.peopleItem}>
                  <img
                    className={Styles.hotAvatar}
                    src={item.avatar}
                    alt={""}
                  />
                  <div className={Styles.rightSection}>
                    <div className={Styles.rightTopSection}>
                      <div className={Styles.name}>{item.username}</div>
                      <div className={Styles.addOn}>
                        <div style={{ marginRight: 20 }}>
                          {item.attitudesCount}
                          <Icon type="heart-o" />
                        </div>
                        <div>
                          {item.commentCount}
                          <Icon type="form" />
                        </div>
                      </div>
                    </div>
                    <div className={Styles.content}>{item.fullText}</div>
                  </div>
                </div>
                {(list.length!==(index+1))&&<div
                  style={{
                    height: 2,
                    background: "rgba(128, 128, 128, 0.08)",
                    width: "100%"
                  }}
                />}
              </div>
            ))}
            <Pagination defaultCurrent={currentPage} total={totalPage} onChange={onPageClicked}/>
          </Skeleton>
          
          
        </div>
      </div>
    );
  }
}
