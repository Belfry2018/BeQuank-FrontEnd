import React from "react";
import { getUserProfile } from "../../../services/apiUser";
import {withRouter} from "react-router-dom";
import { Form } from "antd/lib/index";
import styles from "./index.module.less";
import LeftBar from "./components/LeftBar/index";
import InfoForm from "./components/InfoForm/index";
import AccountForm from "./components/AccountForm/index";

class NormalInfoForm extends React.Component {

    

    state = {
        currentPage: "",
    }

    render() {
        return (
            <div className={styles.main}>
                <div className={styles["left-bar"]}>
                    <LeftBar
                        keys={pag}
                    />
                </div>
                <div className={styles["form"]}>
                    <InfoForm/>
                </div>
            </div>
        );
    }
}
export default withRouter(Form.create()(NormalInfoForm));