import React, { Component } from "react";
import styles from "./index.module.less";
import { Pagination, Divider } from "antd";
import Tip from "./Tip/index";


class GovernmentPassage extends Component {

    render() {
        const { params } = this.props;

        return (
            <div className={styles.main}>
                <div className={styles.content}>
                    {params.map((item, index) => {
                        return (<Tip title={item.title} pos={item.pos} date={item.date}></Tip>);
                    })}
                </div>
            </div>
        );
    }
}

export default GovernmentPassage;