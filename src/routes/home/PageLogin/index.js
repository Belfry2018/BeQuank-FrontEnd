import React, { PureComponent } from "react";
import Styles from "./index.module.less";
import { Col, Row, Select, Skeleton } from "antd";
import StockList from "../../../components/StockList/index";
import {
  getRecommendByProfit,
  getRecommendByRisk
} from "../../../services/apiStrategy";
import NavButton from "../components/NavButton";
import GeneralData from "../components/GeneralData";
import Button from "../../../components/Button";
import { Link } from "react-router-dom";
import RecordModel from "./RecordModel";
import LoopBack from "../../../components/LoopBack";
const Option = Select.Option;

const PROFIT = "Profit";
const RISK = "Risk";

class PageLogin extends PureComponent {
  state = {
    recommendStocks: undefined,
    selectedValue: PROFIT
  };

  async componentDidMount() {
    const recommendStocks = await getRecommendByProfit();
    this.setState({ recommendStocks });
  }

  onSelectSort = async value => {
    this.setState({ recommendStocks: undefined });
    let finalStocks = undefined;
    switch (value) {
      case PROFIT:
        finalStocks = await getRecommendByProfit();
        break;
      case RISK:
        finalStocks = await getRecommendByRisk();
        break;
      default:
        finalStocks = [];
        break;
    }
    this.setState({ recommendStocks: finalStocks, selectedValue: value });
  };

  render() {
    const { recommendStocks, selectedValue } = this.state;

    return (
      <div className={Styles.mainSection}>
        <Row gutter={40}>
          <Col md={16}>
            <div
              className={Styles.text}
              style={{ padding: recommendStocks ? 0 : 5 }}
            >
              <Skeleton active paragraph={false} loading={!recommendStocks}>
                {recommendStocks && recommendStocks.stocks ? (
                  <div className={Styles.recommendSection}>
                    <div className={Styles.recommendDesc}>
                      {recommendStocks.stocks.length !== 0
                        ? `根据您的个人问卷测算，为您推荐${recommendStocks.stocks.length}只股票`
                        : `没有推荐股票`}
                    </div>
                    <div className={Styles.recommendSelect}>
                      <div style={{ marginRight: 10 }}>偏好选择</div>
                      <Select
                        value={selectedValue}
                        style={{ width: 120 }}
                        onChange={this.onSelectSort}
                      >
                        <Option value="Profit">收益优先</Option>
                        <Option value="Risk">风险优先</Option>
                      </Select>
                    </div>
                  </div>
                ) : (
                  undefined
                )}
              </Skeleton>
            </div>
            <div className={Styles.leftSection}>
              <div style={{ padding: recommendStocks ? 0 : 20 }}>
                <Skeleton active loading={!recommendStocks}>
                  {recommendStocks &&
                  recommendStocks.stocks &&
                  recommendStocks.stocks.length > 0 ? (
                    <StockList recommend list={recommendStocks.stocks} />
                  ) : (
                    <div className={Styles.emptySection}>
                      <div className={Styles.emptyText}>
                        完成问卷后即可获取推荐股票
                      </div>
                      <Link to={"/strategy"}>
                        <Button type={"primary"}>创建策略</Button>
                      </Link>
                    </div>
                  )}
                </Skeleton>
              </div>
            </div>
          </Col>
          <Col md={8}>
            <div>
              <NavButton />
              <div className={Styles.simpleSection}>
                <div style={{marginLeft:"-20px"}}>
                  
                </div>
                <div style={{marginLeft:"-20px"}}>
                  <LoopBack data={[
                    {
                      date:"2018-06-01",
                      "上证指数":-12.4,
                      "自选股":15.5
                    },
                    {
                      date:"2018-06-02",
                      "上证指数":11.4,
                      "自选股":13.8
                    },
                    {
                      date:"2018-06-03",
                      "上证指数":15.4,
                      "自选股":-19.5
                    },
                    {
                      date:"2018-06-04",
                      "上证指数":22.4,
                      "自选股":23.5
                    },
                    {
                      date:"2018-06-05",
                      "上证指数":12.7,
                      "自选股":-6.5
                    },
                    {
                      date:"2018-06-06",
                      "上证指数":-9.4,
                      "自选股":17.5
                    },
                    {
                      date:"2018-06-07",
                      "上证指数":19.4,
                      "自选股":18.5
                    },
                    {
                      date:"2018-06-08",
                      "上证指数":22.4,
                      "自选股":24.5
                    },
                    {
                      date:"2018-06-09",
                      "上证指数":15.4,
                      "自选股":-5.5
                    },
                    {
                      date:"2018-06-10",
                      "上证指数":18.4,
                      "自选股":13.5
                    },
                  ]}></LoopBack>
                </div>

              </div>
              <div className={Styles.simpleSection}>
                {recommendStocks ? (
                  <GeneralData
                    todayBenefit={recommendStocks.todayBenefit}
                    yearBenefit={recommendStocks.yearBenefit}
                    risk={recommendStocks.risk}
                  />
                ) : (
                  undefined
                )}
              </div>
              {recommendStocks &&
                recommendStocks.stocks &&
                recommendStocks.stocks.length > 0 && (
                  <RecordModel stocks={recommendStocks.stocks} />
                )}
            </div>
          </Col>
        </Row>
      </div>
    );
  }
}

export default PageLogin;
