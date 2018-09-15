import React, { Component } from "react";
import {
    Chart,
    Geom,
    Axis,
    Tooltip,
    Label,
    Shape,
} from "bizcharts";

class GovernmentWords extends Component {

    rank(arr) {
        var res = {};
        for(var i=0;i<arr.length;i++){
            res[arr[i].name]= (i>=4) ? 4:(i+1) ;
        }
        return res;
    }

    render() {
        // 自定义 shape, 支持图片形式的气泡
        Shape.registerShape("point", "image", {
            drawShape: function(cfg, container) {
                cfg.points = this.parsePoints(cfg.points);
                const coord = this._coord;
                container.addShape("line", {
                    attrs: {
                        x1: cfg.points[0].x,
                        y1: cfg.points[0].y * 0.9,
                        x2: cfg.points[0].x,
                        y2: coord.start.y,
                        stroke: "#ccc",
                        lineWidth: 2,
                        lineDash: [4, 2]
                    }
                });
                return container.addShape("image", {
                    attrs: {
                        x: cfg.points[0].x - (12 * cfg.size) / 2,
                        y: cfg.points[0].y - 12 * cfg.size,
                        width: 12 * cfg.size,
                        height: 12 * cfg.size,
                        img: cfg.shape[1]
                    }
                });
            }
        });
        const {data=[]} = this.props;
        const imageMap = {
            1:"https://bequank.oss-cn-beijing.aliyuncs.com/icon/%E9%87%91%E7%8E%8B%E5%86%A0%20.png?x-oss-process=style/avatar",
            2:"https://bequank.oss-cn-beijing.aliyuncs.com/icon/%E9%93%B6%E7%8E%8B%E5%86%A0.png?x-oss-process=style/avatar",
            3:"https://bequank.oss-cn-beijing.aliyuncs.com/icon/%E9%93%9C%E7%8E%8B%E5%86%A0.png?x-oss-process=style/avatar",
            4:"https://bequank.oss-cn-beijing.aliyuncs.com/icon/%E9%87%91%E7%8E%8B%E5%86%A0%20-3.png?x-oss-process=style/avatar",
        };

        const rankMap = this.rank(data);

        const cols = {
            value: {
                nice: false,
                max: 300,
                min: 0,
                range: [0.05, 0.95]
            }
        };
        return (
            <div>
                <Chart
                    height={600}
                    width={window.innerWidth * 0.5}
                    data={data}
                    scale={cols}
                    forceFit
                >
                    <Axis name="name" />
                    <Axis name="value" visible={false} />
                    <Tooltip />
                    <Geom
                        type="point"
                        position="name*value"
                        color="name"
                        shape={[
                            "name",
                            name => {
                                return ["image", imageMap[rankMap[name]]]; // 根据具体的字段指定 shape
                            }
                        ]}
                        size="value"
                        style={{
                            stroke: "#fff",
                            lineWidth: 1,
                            fillOpacity: 1
                        }}
                    >
                        <Label
                            content="name"
                            offset={-18}
                            textStyle={{
                                fill: '#2e2e2e', // 文本的颜色
                                fontSize: '24', // 文本大小
                                fontWeight: 'bold', // 文本粗细
                            }}
                        />
                    </Geom>
                </Chart>
            </div>
        );
    }
}

export default GovernmentWords;