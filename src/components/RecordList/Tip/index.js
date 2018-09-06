import React, { Component, } from "react";
import { Button } from 'antd';
import styles from "./index.module.less";
import {Link} from "react-router-dom";

class Tip extends Component {
    render() {
        const { title, time, id } = this.props;

        return (
          <Link to={`/groupList/${id}`}>
            <div className={styles.main}>
                <div className={styles["top-part"]}>
                    <div className={styles.title}>{title}</div>
                    <div className={styles.button}>
                        <Button type={"dashed"} size={"small"} >删除</Button>
                    </div>
                </div>
                <div className={styles["bottom-part"]}>
                    <div className={styles.rooter}>创建时间: {time}</div>
                </div>
            </div>
          </Link>
        );
    }
}

export default Tip;