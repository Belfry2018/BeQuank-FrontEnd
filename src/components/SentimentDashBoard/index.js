import React from 'react';
import { Chart, Axis, Coord, Geom, Guide, Shape } from 'bizcharts';

const { Html, Arc, Line } = Guide;

// 下面的代码会被作为 cdn script 注入 注释勿删
// CDN START
Shape.registerShape('point', 'pointer', {
    drawShape(cfg, group) {
        let point = cfg.points[0]; // 获取第一个标记点
        point = this.parsePoint(point);
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
                r: 12,
                stroke: cfg.color,
                lineWidth: 4.5,
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
    render() {

        let { sentiment, word } = this.props;

        const data = [
            { value: sentiment,
              word: word },//指针位置
        ];


        return (
            <Chart height={window.innerHeight} data={data} scale={cols} padding={[0, 0, 200, 0]} forceFit>
                <Coord type="polar" startAngle={-9 / 8 * Math.PI} endAngle={1 / 8 * Math.PI} radius={0.75} />
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
                        start={[3, 0.9]}
                        end={[3.0035, 0.85]}
                        lineStyle={{
                            stroke: '#fa5607', // 刻度线线的颜色
                            lineDash: null, // 虚线的设置
                            lineWidth: 5,
                        }}
                    />
                    <Line
                        start={[4.5, 0.9]}
                        end={[4.5, 0.85]}
                        lineStyle={{
                            stroke: '#faf331', // 线的颜色
                            lineDash: null, // 虚线的设置
                            lineWidth: 5,
                        }}
                    />
                    <Line
                        start={[6, 0.9]}
                        end={[6.0035, 0.85]}
                        lineStyle={{
                            stroke: '#1afa12', // 线的颜色
                            lineDash: null, // 虚线的设置
                            lineWidth: 5,
                        }}
                    />
                    <Arc
                        zIndex={0}
                        start={[0, 0.965]}
                        end={[9, 0.965]}
                        style={{ // 底灰色
                            stroke: '#464848',
                            lineWidth: 30,
                            opacity: 0.09,
                        }}
                    />
                    <Arc
                        zIndex={1}
                        start={[0, 0.965]}
                        end={[data[0].value, 0.965]}
                        style={{
                            stroke: '#1890FF',//满刻度的线
                            lineWidth: 18,
                        }}
                    />
                    <Html
                        position={['50%', '80%']}//百分数的位置
                        html={() => (`<div style="width: 300px;text-align: center;font-size: 12px!important;"><p style="font-size: 1.75em; color: rgba(0,0,0,0.43);margin: 0;">${data[0].word}</p><p style="font-size: 3em;color: rgba(0,0,0,0.85);margin: 0;">${data[0].value}</p></div>`)}
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
