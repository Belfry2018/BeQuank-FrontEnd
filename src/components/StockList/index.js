import React, { PureComponent } from "react";
import Styles from "./index.module.less";
import { withRouter } from "react-router-dom";

class StockList extends PureComponent {
  onRowClicked = id => {
    this.props.history.push(`/stocks/${id}`);
  };

  render() {
    const { list = [], recommend } = this.props;

    const ProductName = ({ name, id }) => (
      <div className={Styles.productName}>
        <div className={Styles.name}>{name}</div>
        <div className={Styles.id}>{id}</div>
      </div>
    );

    const Trend = ({ trend }) => {
      let className = "trend";
      let text = `${trend}%`;
      if (trend >= 0) {
        className += "Red";
        text = `+${text}`;
      } else {
        className += "Green";
      }

      return <div className={Styles[className]}>{text}</div>;
    };

    return (
      <div>
        <table className={Styles.table}>
          <thead className={Styles.tableHeader}>
            <tr>
              {recommend ? <th>推荐比例</th> : undefined}
              <th>产品名称</th>
              <th className={Styles.alignRight}>最新价</th>
              <th className={Styles.alignRight}>涨跌幅</th>
              <th className={Styles.alignRight}>当日成交量</th>
            </tr>
          </thead>

          <tbody>
            {list.map((e, index) => (
              <tr
                onClick={() => this.onRowClicked(e.stockId)}
                key={`tableList${index}`}
              >
                {recommend ? (
                  <td>
                    <div className={Styles.buyRate}>{`${e.buyRate *
                      100}%`}</div>
                  </td>
                ) : (
                  undefined
                )}
                <td>
                  <ProductName name={e.stockName} id={e.stockId} />
                </td>
                <td>
                  <div className={Styles.currentPrice}>{e.currentPrice}</div>
                </td>
                <td>
                  <div style={{ display: "flex", justifyContent: "flex-end" }}>
                    <Trend trend={e.trend} />
                  </div>
                </td>
                <td>
                  <div className={Styles.todayVolume}>{e.todayVolume}</div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default withRouter(StockList);
