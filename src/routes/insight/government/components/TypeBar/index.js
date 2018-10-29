import React, { Component } from "react";
import styles from "./index.module.less";
import { Menu } from "antd";

class TypeBar extends Component {
  state = {
    keys: ["TZGG", "HYPX", "ZCFB", "ZCJD", "ZFSJ", "YWDD"],
    names: [
      "通知公告",
      "会议培训",
      "政府发布",
      "政策解读",
      "政府数据",
      "要闻导读"
    ],
    currentPage: 0
  };

  handleClick = e => {
    let number = this.getPageNumber(e.key);
    this.setState({
      currentPage: number
    });
    //父元素函数
    const { setCurrentType } = this.props;
    setCurrentType(this.state.keys[number]);
  };

  getPageNumber = key => {
    for (let i = 0; i < this.state.keys.length; i++) {
      if (this.state.keys[i] === key) {
        return i;
      }
    }
    return 0;
  };

  render() {
    return (
      <Menu
        mode="inline"
        selectedKeys={[this.state.keys[this.state.currentPage]]}
        onClick={this.handleClick}
      >
        <Menu.Item key={this.state.keys[0]}>{this.state.names[0]}</Menu.Item>
        <Menu.Item key={this.state.keys[1]}>{this.state.names[1]}</Menu.Item>
        <Menu.Item key={this.state.keys[2]}>{this.state.names[2]}</Menu.Item>
        <Menu.Item key={this.state.keys[3]}>{this.state.names[3]}</Menu.Item>
        <Menu.Item key={this.state.keys[4]}>{this.state.names[4]}</Menu.Item>
        <Menu.Item key={this.state.keys[5]}>{this.state.names[5]}</Menu.Item>
      </Menu>
    );
  }
}

export default TypeBar;
