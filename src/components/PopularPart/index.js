import React, { Component } from "react";
import PropTypes from "prop-types";
import styles from "./index.module.less";
import SmallPoint from "../SmallPoint";
import { Skeleton } from "antd";
import Truncate from "react-truncate"

class PopularPart extends Component {
  handleClick(tutorialId) {
    const { handleCourseClicked } = this.props;
    handleCourseClicked(tutorialId);
  }

  render() {
    const { paramText = [] } = this.props;

    if (paramText.length < 4) {
      return (
        <div className={styles["loading-popular-part"]}>
          <div style={{ padding: 30 }}>
            <Skeleton active />
          </div>
        </div>
      );
    }

    let imgSrc = paramText[0].imgSrc;
    var top0 = paramText[0].top;
    var title0 = paramText[0].title;
    var content0 = paramText[0].content;
    let id0 = paramText[0].ttId;

    var top1 = paramText[1].top;
    var title1 = paramText[1].title;
    var content1 = paramText[1].content;
    let id1 = paramText[1].ttId;

    var top2 = paramText[2].top;
    var title2 = paramText[2].title;
    var content2 = paramText[2].content;
    let id2 = paramText[2].ttId;

    var top3 = paramText[3].top;
    var title3 = paramText[3].title;
    var content3 = paramText[3].content;
    let id3 = paramText[3].ttId;

    return (
      <div className={styles["popular-part"]}>
        <div className={styles["left-picture-part"]}>
          <div className={styles.picture}>
            <img src={imgSrc} />
          </div>

          <div
            className={styles["hover-bottom"]}
            onClick={() => this.handleClick(id0)}
          >
            <div className={styles.top}>{top0}</div>
            <div className={styles.title}>{title0}</div>
            <div className={styles.content}>
              <Truncate lines={1}>
                {content0}
              </Truncate>
            </div>
          </div>
        </div>

        <div className={styles["right-text-part"]}>
          <div className={styles["title"]}>
            <div className={styles["title-picture"]}>
              <SmallPoint />
            </div>
            <div className={styles["title-text"]}>推荐阅读</div>
          </div>

          <div
            className={styles["one-tip"]}
            onClick={() => this.handleClick(id1)}
          >
            <div className={styles["tip-top"]}>{top1}</div>
            <div className={styles["tip-title"]}>{title1}</div>
            <div className={styles["tip-content"]}>
              <Truncate lines={1}>
                {content1}
              </Truncate>
            </div>
          </div>
          <div
            className={styles["one-tip"]}
            onClick={() => this.handleClick(id2)}
          >
            <div className={styles["tip-top"]}>{top2}</div>
            <div className={styles["tip-title"]}>{title2}</div>
            <div className={styles["tip-content"]}>
              <Truncate lines={1}>
                {content2}
              </Truncate>
            </div>
          </div>
          <div
            className={styles["one-tip"]}
            onClick={() => this.handleClick(id3)}
          >
            <div className={styles["tip-top"]}>{top3}</div>
            <div className={styles["tip-title"]}>{title3}</div>
            <div className={styles["tip-content"]}>
              <Truncate lines={1}>
                {content3}
              </Truncate>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

PopularPart.propTypes = {
  paramText: PropTypes.array
};
export default PopularPart;
