import React from "react";
import { Chart, Geom, Axis, Tooltip, Legend } from "bizcharts";
import DataSet from "@antv/data-set";

class SentimentRatioTrend extends React.Component {
  render() {
    const { data = [] } = this.props;
    const ds = new DataSet();
    const dv = ds.createView().source(data);
    dv.transform({
      type: "fold",
      fields: ["positive", "neutral", "negative"],
      // 展开字段集
      key: "type",
      // key字段
      value: "value" // value字段
    });
    console.log(dv);
    const cols = {
      date: {
        range: [0.05, 0.95]
      }
    };
    return (
      <div>
        <Chart height={400} data={dv} scale={cols} forceFit>
          <Legend />
          <Axis name="date" />
          <Axis
            name="value"
            label={{
              formatter: val => `${val}`
            }}
          />
          <Tooltip
            crosshairs={{
              type: "y"
            }}
          />
          <Geom
            type="line"
            position="date*value"
            size={2}
            color={"type"}
            shape={"smooth"}
          />
          <Geom
            type="point"
            position="date*value"
            size={4}
            shape={"circle"}
            color={"type"}
            style={{
              stroke: "#fff",
              lineWidth: 1
            }}
          />
        </Chart>
      </div>
    );
  }
}

export default SentimentRatioTrend;
