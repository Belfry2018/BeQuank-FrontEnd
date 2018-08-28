import React from "react";
import { Menu } from "antd";
import { getUserProfile } from "../../../services/apiUser";
import {withRouter} from "react-router-dom";
import { Form } from "antd/lib/index";
import styles from "./index.module.less"
import LeftBar from "./components/LeftBar/index"
import InfoForm from "./components/InfoForm/index"

const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

class NormalInfoForm extends React.Component {

    render() {
        return (
            <div>
                <div className={styles["left-bar"]}>
                    <LeftBar
                        keys={["个人信息", "账户管理", "3", "4"]}
                    />
                </div>
                <div className={styles["info-form"]}>
                    <InfoForm/>
                </div>
            </div>


        );
    }
}
export default withRouter(Form.create()(NormalInfoForm));