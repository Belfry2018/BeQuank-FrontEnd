import React, { Component } from "react";
import styles from "./index.module.less";
import { Icon } from "antd";

class Tip extends Component {

    render (){
        const { title, pos, date, link, odd } = this.props;

        if( odd === 1 ) {
            return (
                <div className={styles.main}>
                    <div className={styles.align}>
                        <div className={styles.part1}>
                            <div className={styles.title}><a href={link} target="_blank">{title}</a></div>
                            <div className={styles.pos}>{pos}</div>
                        </div>
                        <div className={styles.part2}>
                            <Icon className={styles.icon} type="clock-circle" theme="outlined" style={{color: 'black', opacity: 0.3  }}/>
                            <div className={styles.date}>{date}</div>
                        </div>
                    </div>
                </div>
            );
        }
        else {
            return (
                <div  className={`${styles.main} ${styles.odd}` }>
                    <div className={styles.align}>
                        <div className={styles.part1}>
                            <div className={styles.title}><a href={link} target="_blank">{title}</a></div>
                            <div className={styles.pos}>{pos}</div>
                        </div>
                        <div className={styles.part2}>
                            <Icon className={styles.icon} type="clock-circle" theme="outlined" style={{color: 'black', opacity: 0.3  }}/>
                            <div className={styles.date}>{date}</div>
                        </div>
                    </div>
                </div>
            );
        }
    }
}

export default Tip;