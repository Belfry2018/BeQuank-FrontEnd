import React, { PureComponent } from "react";
import StockTrend from "../../components/StockTrend";
import { stockTrend } from "../../services/apiStrategy";
import Styles from "./index.module.less";
import { Col, Row, Skeleton } from "antd";
import SmallPoint from "../../components/SmallPoint";

export default class Stock extends PureComponent {
  state = {
    stockData: {},
    stockDataLoading: true
  };

  async componentDidMount() {
    const { stockId } = this.props.match.params;
    const stockData = await stockTrend(stockId);
    this.setState({ stockData, stockDataLoading: false });
  }

  render() {
    const { stockId } = this.props.match.params;
    const { stockData, stockDataLoading } = this.state;
    const {
      stockName,
      currentPrice,
      trend,
      turnoverRate,
      marketProfitability,
      todayVolume,
      trendData = []
    } = stockData;

    const Item = ({ data = 0, comment }) => (
      <div className={Styles.dataSection}>
        <div className={Styles.data}>{data}</div>
        <div className={Styles.comment}>{comment}</div>
      </div>
    );

    return (
      <div className={Styles.mainSection}>
        <Skeleton active paragraph={false} loading={stockDataLoading}>
          <div className={Styles.recommendSection}>
            <div className={Styles.recommendDescSection}>
              <div className={Styles.currentPrice}>{currentPrice}</div>
              <div className={Styles.recommendDesc}>{stockName}</div>
              <div className={Styles.recommendId}>{stockId}</div>
            </div>
          </div>
        </Skeleton>
        <div className={Styles.detailSection}>
          <Skeleton active loading={stockDataLoading}>
            <Row>
              <Col md={12}>
                <Row>
                  <Col span={12}>
                    <Item data={trend} comment={"涨跌幅"} />
                  </Col>
                  <Col span={12}>
                    <Item data={turnoverRate} comment={"累计换手率"} />
                  </Col>
                </Row>
              </Col>
              <Col md={12}>
                <Row>
                  <Col span={12}>
                    <Item data={marketProfitability} comment={"个股市盈率"} />
                  </Col>
                  <Col span={12}>
                    <Item data={todayVolume} comment={"当日成交量"} />
                  </Col>
                </Row>
              </Col>
            </Row>
          </Skeleton>
        </div>
        <div className={Styles.detailSection}>
          <SmallPoint title={"行情信息"} />
          <div style={{ height: 20 }} />
          <Skeleton active loading={stockDataLoading}>
            <StockTrend data={trendData} />
          </Skeleton>
        </div>
      </div>
    );
  }
}
