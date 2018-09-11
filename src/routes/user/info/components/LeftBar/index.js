import React from "react";
import { Menu } from "antd";

class LeftBar extends React.Component {

    state = {
        keys: this.props.keys,
        currentPageNumber: 0,
    }

    handleClick = (e) => {
        let number = this.getPageNumber(e.key);
        this.setState({
            currentPageNumber: number,
        });
        const{ setCurrentPage } = this.props;
        setCurrentPage(number);
    }

    getPageNumber = (key) => {
        for(let i=0; i<this.state.keys.length; i++){
            if (this.state.keys[i] === key){
                return i;
            }
        }
        return 0;
    }

    render() {

        return (
            <Menu
                mode="inline"
                selectedKeys={[this.state.keys[this.state.currentPageNumber]]}
                onClick={this.handleClick}
            >
                <Menu.Item key={this.state.keys[0]}>{this.state.keys[0]}</Menu.Item>
                <Menu.Item key={this.state.keys[1]}>{this.state.keys[1]}</Menu.Item>
                <Menu.Item key={this.state.keys[2]}>{this.state.keys[2]}</Menu.Item>
            </Menu>
        );
    }
}

export default LeftBar;