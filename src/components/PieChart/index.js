import React from "react";
import {
    Chart,
    Geom,
    Axis,
    Tooltip,
    Coord,
    Label,
    Legend,
    Guide,
} from "bizcharts";
import DataSet from "@antv/data-set";

class PieChart extends React.Component {
    render() {
        const { word, positive, neutral, negative} = this.props;
        const { DataView } = DataSet;
        const { Html } = Guide;
        const data = [
            {
                item: "积极",
                count: positive,
            },
            {
                item: "中性",
                count: neutral,
            },
            {
                item: "消极",
                count: negative,
            },
        ];
        const dv = new DataView();
        dv.source(data).transform({
            type: "percent",
            field: "count",
            dimension: "item",
            as: "percent"
        });
        const cols = {
            percent: {
                formatter: val => {
                    val = val * 100;
                    val = val.toFixed(2);
                    return val + "%";
                }
            }
        };
        return (
            <div>
                <Chart
                    height={window.innerHeight}
                    data={dv}
                    scale={cols}
                    padding={[80, 100, 80, 80]}
                    forceFit
                >
                    <Coord type={"theta"} radius={0.75} innerRadius={0.6} />
                    <Axis name="percent" />
                    <Legend
                        position="right"
                        offsetY={-window.innerHeight / 2 + 120}
                        offsetX={-100}
                    />
                    <Tooltip
                        showTitle={false}
                        itemTpl="<li><span style=&quot;background-color:{color};&quot; class=&quot;g2-tooltip-marker&quot;></span>{name}: {value}</li>"
                    />
                    <Guide>
                        <Html
                            position={["50%", "50%"]}
                            html="<div style=&quot;color:#8c8c8c;font-size:1.16em;text-align: center;width: 16em;&quot;></div>"
                            alignX="middle"
                            alignY="middle"
                        />
                    </Guide>
                    <Geom
                        type="intervalStack"
                        position="percent"
                        color="item"
                        tooltip={[
                            "item*count",
                            (item, count) => {
                                return {
                                    name: item,
                                    value: count+"次"
                                };
                            }
                        ]}
                        style={{
                            lineWidth: 1,
                            stroke: "#fff"
                        }}
                    >
                        <Label
                            content="percent"
                            formatter={(val, item) => {
                                return item.point.item + ": " + val;
                            }}
                        />
                    </Geom>
                </Chart>
            </div>
        );
    }
}

export default PieChart;
