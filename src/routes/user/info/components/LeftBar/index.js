import React from "react";
import { Menu } from "antd";
import styles from "./index.module.less"

class LeftBar extends React.Component {

    state = {
        keys: this.props.keys
    }

    handleClick = (e) => {
        this.setState({
            currentKey: e.key,
        });
    }

    render() {

        return (
            <Menu
                mode="inline"
                selectedKeys={this.state.currentKey}
                className={styles["main"]}
                onClick={this.handleClick}
            >
                <Menu.Item key={this.state.keys[0]}>{this.state.keys[0]}</Menu.Item>
                <Menu.Item key={this.state.keys[1]}>{this.state.keys[1]}</Menu.Item>
                <Menu.Item key={this.state.keys[2]}>{this.state.keys[2]}</Menu.Item>
                <Menu.Item key={this.state.keys[3]}>{this.state.keys[3]}</Menu.Item>
            </Menu>
        );
    }
}

export default LeftBar;