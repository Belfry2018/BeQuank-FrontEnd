import React, { Component } from "react";
import styles from "./index.module.less";
import { Icon } from "antd";

class Tip extends Component {

    render (){
        const { title, pos, date } = this.props;

        return (
            <div className={styles.main}>
                <div className={styles.align}>
                    <div className={styles.part1}>
                        <div className={styles.title}>{title}</div>
                        <div className={styles.pos}>{pos}</div>
                    </div>
                    <div className={styles.part2}>
                        <Icon className={styles.icon} type={"home"}/>
                        <div className={styles.date}>{date}</div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Tip;