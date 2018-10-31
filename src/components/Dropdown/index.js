import React, { PureComponent } from "react";
import styles from "./index.module.less";
import onClickOutside from "react-onclickoutside";

class Dropdown extends PureComponent {
  state = {
    expand: false
  };

  handleClickEvent = () => {
    this.changeExpandState();
  };

  handleClickOutside = () => {
    if (this.state.expand === true) {
      this.changeExpandState();
    }
  };

  changeExpandState = () => {
    this.setState(prevState => ({
      expand: !prevState.expand
    }));
  };

  render() {
    const { overlay, children } = this.props;
    const { expand } = this.state;
    // return <div>{children}</div>;
    return (
      <div className={styles["drop-wrap"]}>
        <div onClick={this.handleClickEvent}>{children}</div>
        <div
          className={styles.overlay}
          style={{ visibility: expand ? "visible" : "hidden" }}
        >
          {overlay}
        </div>
      </div>
    );
  }
}

export default onClickOutside(Dropdown);
