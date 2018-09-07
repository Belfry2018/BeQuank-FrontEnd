import { Menu, Icon } from "antd";
import React from "react";
import {Link, withRouter} from "react-router-dom";
import Styles from "./index.module.less";

class NavBar extends React.PureComponent {

  
  
  

  render() {
    const {location}=this.props;
    return (
      <div className={Styles.wholeSection}>
        <div className={Styles.subSection}>
          <Menu
            onClick={this.handleClick}
            selectedKeys={[location.pathname]}
            mode="horizontal"
          >
            <Menu.Item key="/insight">
              <Link to={"/insight"}>
                <Icon type="weibo-square" theme="filled" />
                微博视角
              </Link>
            </Menu.Item>
            <Menu.Item key="/insight/government">
              <Link to={"/insight/government"}>
                <Icon type="bank" theme="filled" />
                政府视角
              </Link>
            </Menu.Item>
          </Menu>
        </div>
      </div>
    );
  }
}

export default withRouter(NavBar);
