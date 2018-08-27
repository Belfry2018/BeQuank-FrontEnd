import React, { PureComponent } from "react";
import Styles from "./index.module.less";
import { Icon } from "antd";

class LikeButton extends PureComponent {
  state = {
    loading: false
  };

  handleLikeEvent = async () => {
    const { likeEvent = () => {} } = this.props;
    this.setState({ loading: true });
    await likeEvent();
    this.setState({ loading: false });
  };

  render() {
    const { alreadyLike, likeCount } = this.props;
    const { loading } = this.state;
    const wholePartClassName = alreadyLike ? " " + Styles.activeMainPart : "";

    return (
      <div
        onClick={loading?()=>{}:this.handleLikeEvent}
        className={`${Styles.mainPart}${wholePartClassName}`}
      >
        <div>
          <Icon className={Styles.icon} type={loading?"loading":"like"} />
          <div className={Styles.description}>
            {likeCount && likeCount > 0
              ? `${likeCount} 人喜欢`
              : "点赞以支持作者"}
          </div>
        </div>
      </div>
    );
  }
}

export default LikeButton;
