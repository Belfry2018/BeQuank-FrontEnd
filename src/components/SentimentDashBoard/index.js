import React from 'react';
import { Chart, Axis, Coord, Geom, Guide, Shape } from 'bizcharts';
import styles from "./index.module.less";

const { Html, Arc, Line } = Guide;

// 下面的代码会被作为 cdn script 注入 注释勿删
// CDN START
Shape.registerShape('point', 'pointer', {
    drawShape(cfg, group) {
        let point = cfg.points[0]; // 获取第一个标记点
        point = this.parsePoint({ // 获取极坐标系下画布中心点
            x: point.x,
            y: point.y,
        });
        const center = this.parsePoint({ // 获取极坐标系下画布中心点
            x: 0,
            y: 0,
        });
        // 绘制指针
        group.addShape('line', {
            attrs: {
                x1: center.x,
                y1: center.y,
                x2: point.x,
                y2: point.y - 20,
                stroke: cfg.color,
                lineWidth: 5,
                lineCap: 'round',
            },
        });
        return group.addShape('circle', {//指针根部小圆圈
            attrs: {
                x: center.x,
                y: center.y,
                r: 10,
                stroke: cfg.color,
                lineWidth: 4,
                fill: '#fff',
            },
        });
    },
});

const cols = {
    value: {
        min: 0,
        max: 9,
        ticks: [2.25, 3.75, 5.25, 6.75],
        nice: false,
    },
};

class SentimentDashBoard extends React.Component {

    sentimentScore(senti) {
       if(senti > 1000) {
           return 9.0;
       }
       else if (senti < -1000) {
           return 0.0;
       }
       else if (senti > 5.0) {
           return 0.5 * Math.log(senti + 1) + 5.5;
       }
       else if (senti < -5.0) {
           return -0.5 * Math.log(-senti + 1) + 3.5;
       }
       else {
           return senti /10.0 + 4.5;
       }
    }

    render() {

        let { sentiment, word } = this.props;

        const data = [
            {
                value: this.sentimentScore(sentiment),
                word: word,
                sentiment: sentiment,
            }
        ];

        return (
            <Chart height={500} data={data} scale={cols} padding={[0, 0, 200, 0]} forceFit>
                <Coord type="polar" startAngle={-9 / 8 * Math.PI} endAngle={1 / 8 * Math.PI} radius={0.6} />
                <Axis
                    name="value"
                    zIndex={2}
                    line={null}
                    label={{
                        offset: -20,
                        formatter: (val) => {
                            if (val === '2.25') {
                                return '差';
                            } else if (val === '3.75') {
                                return '中';
                            } else if (val === '5.25') {
                                return '良';
                            }
                            return '优';
                        },
                        textStyle: {
                            fontSize: 20,//仪表盘下字体大小
                            fill: 'rgba(0, 0, 0, 0.65)',//仪表盘下字体颜色
                            textAlign: 'center',
                        },
                    }}
                />
                <Axis name="1" visible={false} />
                <Guide>
                    <Line
                        start={[3, 0.88]}
                        end={[3.0035, 0.8]}
                        lineStyle={{
                            stroke: '#fa5607', // 刻度线线的颜色
                            lineDash: null, // 虚线的设置
                            lineWidth: 3.5,
                        }}
                    />
                    <Line
                        start={[4.5, 0.88]}
                        end={[4.5, 0.8]}
                        lineStyle={{
                            stroke: '#f5fa0a', // 线的颜色
                            lineDash: null, // 虚线的设置
                            lineWidth: 3.5,
                        }}
                    />
                    <Line
                        start={[6, 0.88]}
                        end={[6.0035, 0.8]}
                        lineStyle={{
                            stroke: '#17d90f', // 线的颜色
                            lineDash: null, // 虚线的设置
                            lineWidth: 3.5,
                        }}
                    />
                    <Arc
                        zIndex={0}
                        start={[0, 0.965]}
                        end={[9, 0.965]}
                        style={{ // 底灰色
                            stroke: '#464848',
                            lineWidth: 35,
                            opacity: 0.09,
                        }}
                    />
                    <Arc
                        zIndex={1}
                        start={[0, 0.965]}
                        end={[data[0].value, 0.965]}//满刻度的线的位置
                        style={{
                            stroke: '#1890FF',//满刻度的线
                            lineWidth: 23,
                            opacity: 0.75,

                        }}
                    />
                    <Html
                        position={['50%', '89%']}//百分数的位置
                        html={() => (`<div style="width: 300px;text-align: center;font-size: 12px!important;"><p style="font-size: 1.1em; color: rgba(0,0,0,0.5);margin: 0;">${data[0].word}</p><p style="font-size: 2em;color: rgba(0,0,0,0.85);margin: 0;">${data[0].sentiment}</p></div>`)}
                    />
                </Guide>
                <Geom
                    type="point"
                    position="value*1"
                    shape="pointer"
                    color="#1890FF"
                    active={true}
                    style={{ stroke: '#f19bff', lineWidth: 1 }}
                />
            </Chart>
        );
    }
}

// CDN END
export default SentimentDashBoard;
