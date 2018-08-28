import React from "react";
import PropTypes from "prop-types";
import {
  Chart,
  Geom,
  Tooltip,
  Coord,
  Shape,
} from "bizcharts";
import DataSet from "@antv/data-set";

const WordCloudProps = {
  data: PropTypes.array.isRequired,

  style: PropTypes.object,
};

class WordCloud extends React.Component {
  render() {
    const {style, data} = this.props;
    function getTextAttrs(cfg) {
      return _.assign(
        {},
        {
          fillOpacity: cfg.opacity,
          fontSize: cfg.origin._origin.size,
          rotate: cfg.origin._origin.rotate,
          text: cfg.origin._origin.text,
          textAlign: "center",
          fontFamily: cfg.origin._origin.font,
          fill: cfg.color,
          textBaseline: "Alphabetic"
        },
        cfg.style
      );
    } // 给point注册一个词云的shape

    Shape.registerShape("point", "cloud", {
      drawShape(cfg, container) {
        const attrs = getTextAttrs(cfg);
        return container.addShape("text", {
          attrs: _.assign(attrs, {
            x: cfg.x,
            y: cfg.y
          })
        });
      }
    });
    const dv = new DataSet.View().source(data);
    const range = dv.range("count");
    const min = range[0];
    const max = range[1];
    dv.transform({
      type: "tag-cloud",
      fields: ["word", "count"],
      size: [window.innerWidth, window.innerHeight],
      font: "Verdana",
      padding: 0,
      timeInterval: 5000,

      // max execute time
      rotate() {
        let random = ~~(Math.random() * 4) % 4;

        if (random == 2) {
          random = 0;
        }

        return random * 90; // 0, 90, 270
      },

      fontSize(d) {
        if (d.value) {
          return ((d.value - min) / (max - min)) * (80 - 24) + 24;
        }

        return 0;
      }
    });
    const scale = {
      x: {
        nice: false
      },
      y: {
        nice: false
      }
    };
    return (
      <div>
        <Chart
          height={window.innerHeight}
          width={window.innerWidth}
          data={dv}
          scale={scale}
          padding={0}
          forceFit
        >
          <Tooltip showTitle={false} />
          <Coord reflect="y" />
          <Geom
            type="point"
            position="x*y"
            color="category"
            shape="cloud"
            tooltip="value*category"
          />
        </Chart>
      </div>
    );
  }
}

WordCloud.propTypes = WordCloudProps;

export default WordCloud;

