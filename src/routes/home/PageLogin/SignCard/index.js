import React, { Component } from "react";
import Styles from "./index.module.less";
import { Icon, Button, message } from "antd";
import { dailySignIn, getUserProfile, getUserAuth } from "../../../../services/apiUser"

export default class SignCard extends Component {

    list = { BEGINNER: "初级", INTERMEDIATE: "中级", ADVANCED: "高级"};
    state = { exp: 0,
              coins: 0,
              signed: false,
              courses: "BEGINNER"};

    onSignIn = async () => {
        await dailySignIn();
        message.success("签到成功 经验+5");
        this.setState({signed: true})
    }

    fetchData = async () => {
        const profile = await getUserProfile();
        const auth = await getUserAuth();
        this.setState({
            exp: profile.exp,
            coins: profile.coins,
            courses: auth.courses
        });

    }

    componentDidMount =  async  () => {
        await this.fetchData();
    }

    render() {
        return (
            <div className={Styles.main}>
                <div className={Styles.content}>
                    <div className={Styles.tips}>
                        <div className={Styles.tip}>
                            <div className={Styles.icon}>
                                <Icon type="fire" theme="twoTone" twoToneColor="#eb2f96" />
                            </div>
                            <div className={Styles.text}>经验:</div>
                            <div className={Styles.value}>{this.state.exp}</div>
                        </div>
                        <div className={Styles.tip}>
                            <div className={Styles.icon}>
                                <Icon type="dollar" theme="twoTone" twoToneColor="E7DE12" />
                            </div>
                            <div className={Styles.text}>金币:</div>
                            <div className={Styles.value}>{this.state.coins}</div>
                        </div>
                        <div className={Styles.tip}>
                            <div className={Styles.icon}>
                                <Icon type="book" theme="twoTone"/>
                            </div>
                            <div className={Styles.text}>课程:</div>
                            <div className={Styles.value}>{this.list[this.state.courses]}</div>
                        </div>
                    </div>
                    <div className={Styles.btn}>
                        <Button type={"dashed"} size={"small"} onClick={this.onSignIn} disabled={this.state.signed}>{ this.state.signed ? "已签到":"签到"}</Button>
                    </div>
                </div>
            </div>
        );
    }
}
