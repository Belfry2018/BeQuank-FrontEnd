import React, { Component } from "react";
import PropTypes from "prop-types";
import styles from "./index.module.less";
import LoadingSpin from '../LoadingSpin';
import { Divider, Button } from "antd";

class NameCard extends Component {
    render() {
        const { avatarUrl, username, userId, bio } = this.props;
        let tmpUrl = "https://bequank.oss-cn-beijing.aliyuncs.com/avatars/avatar.jpg?x-oss-process=style/avatar";
        return (
            <div className={styles.main}>
                <div className={styles.upper}>
                    <div className={styles.align}>
                        <div className={styles.photo}>
                            {tmpUrl ? (
                                <img alt={""} src={tmpUrl} className={styles.avatar} />
                            ) : (
                                <LoadingSpin background="#2980B9">Primary</LoadingSpin>
                            )}
                        </div>
                        <div className={styles.name}>{username}</div>
                        <div className={styles.id}>ID: {userId}</div>
                    </div>
                </div>
                <div className={styles.divider}>
                    <div className={styles.left}></div>
                    <Divider className={styles.d}/>
                    <div className={styles.right}></div>
                </div>
                <div className={styles.lower}>
                    <div className={styles.left}></div>
                    <div className={styles.ali}>
                        <div className={styles.intro}>{bio}</div>
                        <Button type={"dashed"} href={"/userInfo"} className={styles.button}>编辑个人信息</Button>
                    </div>
                    <div className={styles.right}></div>
                </div>
            </div>
        );
    }
}

export default NameCard;