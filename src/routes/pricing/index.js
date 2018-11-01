import React, { PureComponent } from "react";
import PricingColumn from "./PricingColumn";
import Style from "./index.module.less";
import { Button, Col, message, Row } from "antd";
import Balloons from "./img/undraw_balloons_vxx5.svg";
import Fly from "./img/undraw_instant_support_elxh.svg";
import Space from "./img/undraw_maker_launch_crhe.svg";
import { judgeLogin } from "../../utils/authorization";
import { unlockFeature } from "../../services/apiUser";
import Slogan from "../../components/Slogan";

export default class Pricing extends PureComponent {
  state = {
    stockData: {},
    stockDataLoading: true,
    premiumLoading: false,
    professionalLoading: false
  };

  onStarterClicked = () => {
    if (!judgeLogin()) {
      this.props.history.push("/register");
    }
  };

  onPremiumClicked = () => {
    if (judgeLogin()) {
      this.setState({ premiumLoading: true });
      unlockFeature("Premium").then(e => {
        this.setState({ premiumLoading: false });
        if (e.success) {
          message.success("解锁成功");
        } else {
          message.info("金币不足无法解锁");
        }
      });
    } else {
      this.props.history.push("/register");
    }
  };

  onProfessionalClicked = () => {
    if (judgeLogin()) {
      this.setState({ professionalLoading: true });
      unlockFeature("Professional").then(e => {
        this.setState({ professionalLoading: false });
        if (e.success) {
          message.success("解锁成功");
        } else {
          message.info("金币不足无法解锁");
        }
      });
    } else {
      this.props.history.push("/register");
    }
  };

  render() {
    const { professionalLoading, premiumLoading } = this.state;
    return (
      <div className={Style.mainSection}>
        <Slogan />
        <div className={Style.body}>
          <Row gutter={40}>
            <Col md={8}>
              <PricingColumn
                type={"Starter"}
                description={"所有基本功能"}
                pricing={"Free"}
                image={Balloons}
                features={[
                  "定制化股票投资策略推荐",
                  "初级投资课程——简单易懂的金融知识，编程基础等",
                  "课程收藏，自由点赞评论",
                  "微博舆情聚类推荐",
                  "可视化图表展示舆情情绪值",
                  "热词搜索功能"
                ]}
              >
                <Button
                  onClick={this.onStarterClicked}
                  style={{ width: "100%" }}
                  size={"large"}
                >
                  {judgeLogin() ? "已拥有" : "立即注册"}
                </Button>
              </PricingColumn>
            </Col>
            <Col md={8}>
              <PricingColumn
                type={"Premium"}
                description={"添加进阶功能"}
                pricing={"￥49/month"}
                image={Fly}
                features={[
                  "选股策略因子权重自主调整",
                  "中级投资课程——深入了解投资理，金融市场，计算机算法等",
                  "针对用户个人兴趣关键词追踪与聚类推荐"
                ]}
              >
                <Button
                  loading={premiumLoading}
                  onClick={this.onPremiumClicked}
                  type="primary"
                  ghost
                  style={{ width: "100%" }}
                  size={"large"}
                >
                  立刻获得
                </Button>
              </PricingColumn>
            </Col>
            <Col md={8}>
              <PricingColumn
                type={"Professional"}
                description={"全部功能"}
                pricing={"￥99/month"}
                image={Space}
                features={[
                  "自选因子功能",
                  "高级投资课程学习——综合应用与实践",
                  "用户个人兴趣关键词的定期数据分析报告推送",
                  "论坛自由发表课程帖"
                ]}
              >
                <Button
                  loading={professionalLoading}
                  onClick={this.onProfessionalClicked}
                  type="primary"
                  style={{ width: "100%" }}
                  size={"large"}
                >
                  立刻获得
                </Button>
              </PricingColumn>
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}
