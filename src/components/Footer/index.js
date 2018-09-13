import React, { Component } from "react";
import styles from "./index.module.less";
import { Icon } from 'antd';

class Footer extends Component {
    render() {

        return (
            <div className={styles.main}>
                <div className={styles.left}>
                    <div className={styles.t1}>
                        <div className={styles.logo}>BeQuank</div>
                        <div className={styles.date}>
                            <div className={styles.align}>
                                <div className={styles.logo}>
                                    <Icon type="calendar" style={{ fontSize: '10px', color: '#000000', opacity: '0.13' }}/>
                                </div>
                                <div className={styles.time}>2018</div>
                            </div>
                        </div>
                    </div>
                    <div className={styles.t2}>关于我们</div>
                    <div className={styles.t3}>
                        <div className={styles.text}>Belfry是由来自南京大学商学院，软件学院，数学系，计算机科学与技术系的同学组成的金融创新团队</div>
                        <div className={styles.empty}></div>
                    </div>
                </div>
                <div className={styles.right}>
                    <div className={styles.r1}>
                        <div className={styles.title}>功能导航</div>
                        <a href={""}><div className={styles.link}>Home</div></a>
                        <a href={""}><div className={styles.link}>Course</div></a>
                        <a href={""}><div className={styles.link}>Insight</div></a>
                    </div>
                    <div className={styles.r1}>
                        <div className={styles.title}>链接</div>
                        <a href={""}><div className={styles.link}>使用帮助</div></a>
                        <a href={""}><div className={styles.link}>版权声明</div></a>
                        <a href={""}><div className={styles.link}>免责声明</div></a>
                    </div>
                    <div className={styles.r3}>
                        <div className={styles.part1}>
                            <div className={styles.title}>联系我们</div>
                            <div className={styles.icons}>
                                <a href={""}><Icon type={"github"} style={{ fontSize: '20px', color: '#686890', opacity: '0.4' }}/></a>
                                <a href={""}><Icon className={styles.icon} type={"alipay"} style={{ fontSize: '20px', color: '#686890', opacity: '0.4' }}/></a>
                                <a href={""}><Icon className={styles.icon} type={"twitter"} style={{ fontSize: '20px', color: '#686890', opacity: '0.4' }}/></a>
                                <a href={""}><Icon className={styles.icon} type={"weibo"} style={{ fontSize: '20px', color: '#686890', opacity: '0.4' }}/></a>
                            </div>
                        </div>
                        <div className={styles.part2}>
                            <div className={styles.title}>联系地址</div>
                            <div className={styles.content}>南京大学鼓楼校区 仙林校区</div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Footer;