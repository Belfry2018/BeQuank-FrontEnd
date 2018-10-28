import React, { Component } from "react";
import styles from "./index.module.less";
import SmallPoint from "../../../../../components/SmallPoint";
import { Button, message, Modal } from "antd";
import { getUserAuth, unlockInsight, unlockCourse } from "../../../../../services/apiUser";
const confirm = Modal.confirm;

class UnlockForm extends Component {
    state = {
        intermediate: false,
        advanced: false,
        ratioTrend: false,
        trend: false
    }

    async componentDidMount() {
        const auth = await getUserAuth();
        this.setState({
            intermediate: auth.courses!=="BEGINNER",
            advanced: auth.courses==="ADVANCED",
            ratioTrend: auth.ratioTrend,
            trend: auth.trend
        });
    }

    onUnlockInsight = async (type) => {
        const result = await unlockInsight(type);
        if(result.success) {
            message.success("解锁成功！")
        }
    }

    onUnlockCourse = async (type) => {
        const result = await unlockCourse(type);
        if(result.success) {
            message.success("解锁成功！")
        }
    }

    unlockIntermediate = async () => {
        await this.onUnlockCourse("INTERMEDIATE");
    }

    unlockAdvanced = async () => {
        await this.onUnlockCourse("ADVANCED");
    }

    unlockRatioTrend = async () => {
        await this.onUnlockInsight("ratioTrend");
    }

    unlockTrend = async () => {
        await this.onUnlockInsight("trend");
    }

    showConfirm = () => {
        confirm({
            title: 'Do you want to delete these items?',
            content: 'When clicked the OK button, this dialog will be closed after 1 second',
            onOk() {

            },
            onCancel() {},
        });
    }

    render() {
        const { intermediate, advanced, ratioTrend, trend } = this.state;
        return (
            <div className={styles.main}>
                <SmallPoint title={"功能解锁"} />
                <div className={styles.content}>
                    <div className={styles.item}>
                       <div className={styles.text}>初级教程</div>
                        <Button className={styles.btn} size={"small"} disabled={true}>已解锁</Button>
                    </div>
                    <div className={styles.item}>
                        <div className={styles.text}>中级教程</div>
                        <Button onClick={this.unlockIntermediate} className={styles.btn} size={"small"} disabled={intermediate}>{intermediate?"已解锁":"解锁"}</Button>
                    </div>
                    <div className={styles.item}>
                        <div className={styles.text}>高级教程</div>
                        <Button onClick={this.unlockAdvanced} className={styles.btn} size={"small"} disabled={advanced}>{advanced?"已解锁":"解锁"}</Button>
                    </div>
                    <div className={styles.item}>
                        <div className={styles.text}>ratioTrend</div>
                        <Button onClick={this.unlockRatioTrend} className={styles.btn} size={"small"} disabled={ratioTrend}>{ratioTrend?"已解锁":"解锁"}</Button>
                    </div>
                    <div className={styles.item}>
                        <div className={styles.text}>Trend</div>
                        <Button onClick={this.unlockTrend} className={styles.btn} size={"small"} disabled={trend}>{trend?"已解锁":"解锁"}</Button>
                    </div>
                </div>
            </div>
        );
    }
}

export default UnlockForm;