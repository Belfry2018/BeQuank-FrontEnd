import React from "react";
import PropTypes from "prop-types";
import DataSet from "@antv/data-set";
import assign from "lodash.assign"
import Chart from 'bizcharts/lib/components/Chart';
import Coord from 'bizcharts/lib/components/Coord';
import Geom from 'bizcharts/lib/components/Geom';
import Tooltip from 'bizcharts/lib/components/Tooltip';
import * as bizUtil from 'bizcharts/lib/core';
const { Shape } = bizUtil;

const WordCloudProps = {
  data: PropTypes.array.isRequired,

  style: PropTypes.object,
};

class WordCloud extends React.Component {
  render() {
    const {data} = this.props;
    const newData=data.map(e=>{return {
      x:e.word,
      value:e.count,
      category:e.count
    }});
    
    
    function getTextAttrs(cfg) {
      return assign(
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
          attrs: assign(attrs, {
            x: cfg.x,
            y: cfg.y
          })
        });
      }
    });
    const dv = new DataSet.View().source(newData);
    const range = dv.range("value");
    const min = range[0];
    const max = range[1];
    dv.transform({
      type: "tag-cloud",
      fields: ["x", "value"],
      size: [window.innerWidth*0.9, window.innerHeight*0.5],
      font: "Verdana",
      padding: 0,
      timeInterval: 5000,
    
      // max execute time
      rotate() {
        let random = ~~(Math.random() * 4) % 4;
      
        if (random === 2) {
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
          height={window.innerHeight*0.5}
          width={window.innerWidth*0.8}
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

