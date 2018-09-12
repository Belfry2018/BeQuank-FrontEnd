import React, { Component } from "react";

import {
    Chart,
    Geom,
    Axis,
    Tooltip,
    Legend,
    View,
} from "bizcharts";

import DataSet from "@antv/data-set";
import Slider from "bizcharts-plugin-slider";

function getComponent(data, startTime, endTime) {
    const { DataView } = DataSet;
    const cols = {
        time: {
            type: "timeCat",
            nice: false,
            range: [0, 1]
        },
        trend: {
            values: ["上涨", "下跌"]
        },
        volume: {
            alias: "成交量"
        },
        start: {
            alias: "开盘价"
        },
        end: {
            alias: "收盘价"
        },
        max: {
            alias: "最高价"
        },
        min: {
            alias: "最低价"
        },
        range: {
            alias: "股票价格"
        }
    };
    // 设置状态量，时间格式建议转换为时间戳，转换为时间戳时请注意区间
    const ds = new DataSet({
        state: {
            start: startTime,
            end: endTime
        }
    });
    const dv = ds.createView();
    dv.source(data)
        .transform({
            type: "filter",
            callback: obj => {
                const date = obj.time;
                return date <= ds.state.end && date >= ds.state.start;
            }
        })
        .transform({
            type: "map",
            callback: obj => {
                obj.trend = obj.start <= obj.end ? "上涨" : "下跌";
                obj.range = [obj.start, obj.end, obj.max, obj.min];
                return obj;
            }
        });

    class SliderChart extends Component {
        onChange(obj) {
            const { startText, endText } = obj;
            ds.setState("start", startText);
            ds.setState("end", endText);
        }

        render() {
            return (
                <div>
                    <Chart
                        height={window.innerHeight * 0.6}
                        animate={false}
                        padding={[10, 40, 40, 40]}
                        data={dv}
                        scale={cols}
                        forceFit
                    >
                        <Legend offset={20} />
                        <Tooltip
                            showTitle={false}
                            itemTpl="<li data-index={index}><span style=&quot;background-color:{color};&quot; class=&quot;g2-tooltip-marker&quot;></span>{name}{value}</li>"
                        />
                        <View
                            end={{
                                x: 1,
                                y: 0.5
                            }}
                            data={dv}
                        >
                            <Axis name="time" />
                            <Axis name="range" />
                            <Geom
                                type="schema"
                                position="time*range"
                                color={[
                                    "trend",
                                    val => {
                                        if (val === "上涨") {
                                            return "#f04864";
                                        }

                                        if (val === "下跌") {
                                            return "#2fc25b";
                                        }
                                    }
                                ]}
                                tooltip={[
                                    "time*start*end*max*min",
                                    (time, start, end, max, min) => {
                                        return {
                                            name: time,
                                            value:
                                            '<br><span style="padding-left: 16px">开盘价：' +
                                            start +
                                            "</span><br/>" +
                                            '<span style="padding-left: 16px">收盘价：' +
                                            end +
                                            "</span><br/>" +
                                            '<span style="padding-left: 16px">最高价：' +
                                            max +
                                            "</span><br/>" +
                                            '<span style="padding-left: 16px">最低价：' +
                                            min +
                                            "</span>"
                                        };
                                    }
                                ]}
                                shape="candle"
                            />
                        </View>
                        <View
                            start={{
                                x: 0,
                                y: 0.65
                            }}
                            data={dv}
                            scale={{
                                volume: {
                                    tickCount: 2
                                }
                            }}
                        >
                            <Axis
                                name="volume"
                                label={{
                                    formatter: function(val) {
                                        return parseInt(val / 1000, 10) + "k";
                                    }
                                }}
                            />
                            <Axis name="time" tickLine={null} label={null} />
                            <Geom
                                type="interval"
                                position="time*volume"
                                color={[
                                    "trend",
                                    val => {
                                        if (val === "上涨") {
                                            return "#f04864";
                                        }

                                        if (val === "下跌") {
                                            return "#2fc25b";
                                        }
                                    }
                                ]}
                                tooltip={[
                                    "time*volume",
                                    (time, volume) => {
                                        return {
                                            name: time,
                                            value:
                                            '<br/><span style="padding-left: 16px">成交量：' +
                                            volume +
                                            "</span><br/>"
                                        };
                                    }
                                ]}
                                shape="candle"
                            />
                        </View>
                    </Chart>
                    <div>
                        <Slider
                            padding={[20, 40, 20, 40]}
                            width="auto"
                            height={26}
                            start={ds.state.start}
                            end={ds.state.end}
                            xAxis="time"
                            yAxis="volume"
                            scales={{
                                time: {
                                    type: "timeCat",
                                    nice: false
                                }
                            }}
                            data={data}
                            onChange={this.onChange.bind(this)}
                        />
                    </div>
                </div>
            );
        }
    }
    return SliderChart;
}

class Basic extends Component {
    render() {
        const { data } = this.props;
        let startTime = data[0].time;
        let endTime = data[data.length-1].time;
        const SliderChart = getComponent(data, startTime, endTime);
        return (
            <div>
                <SliderChart />
            </div>
        );
    }
}

export default Basic;
