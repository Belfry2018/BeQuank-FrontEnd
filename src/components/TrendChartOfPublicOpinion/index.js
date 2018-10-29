import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import styles from "./index.module.less";

// import {G2, Chart, Geom, Axis, Tooltip, Coord, Label, Legend, View, Guide, Shape, Facet, Util} from "bizcharts";
import Chart from "bizcharts/lib/components/Chart";
import Axis from "bizcharts/lib/components/Axis";
import Tooltip from "bizcharts/lib/components/Tooltip";
import Line from "bizcharts/lib/components/TypedGeom/Line";
import Point from "bizcharts/lib/components/TypedGeom/Point";
// import DataSet from "@antv/data-set";

const TrendChartOfPublicOpinionProps = {
  data: PropTypes.array.isRequired,

  style: PropTypes.object
};

const DefaultTrendChartOfPublicOpinionProps = {
  data: []
};

class TrendChartOfPublicOpinion extends PureComponent {
  render() {
    const { style, data } = this.props;
    const cols = {
      value: {
        min: 0
      },
      date: {
        range: [0.1, 0.9]
      }
    };
    return (
      <div>
        <Chart
          height={window.innerHeight * 0.5}
          width={window.innerWidth}
          data={data}
          scale={cols}
          placeholder
          className={styles.trendChart}
        >
          <Axis name="date" />
          <Axis name="sentiment" />
          <Tooltip
            crosshairs={{
              type: "y"
            }}
          />
          <Line position={"date*sentiment"} size={2} />
          <Point
            position="date*sentiment"
            size={4}
            shape={"circle"}
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

TrendChartOfPublicOpinion.propTypes = TrendChartOfPublicOpinionProps;

TrendChartOfPublicOpinion.defaultProps = DefaultTrendChartOfPublicOpinionProps;

export default TrendChartOfPublicOpinion;
