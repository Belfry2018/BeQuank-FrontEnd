import { version } from "./apiOverview";
import request from "../utils/request";

/**
 * 作出问卷答案
 * @param params
 * {
    1:A,
    ...
    10:C
}
 * @returns
 * {
    score:56.6,
    type:"进取型"
}
 */
export const makeAnswer = params => {
  return request(`${version}/strategy/answer`, {
    method: "POST",
    body: params
  });
};

/**
 * 获得推荐结果
 * @returns
 * {
    todayBenefit:5.6,//百分之
    yearBenefit:5.7,//百分之
    risk:3.3,//百分之
    stock:[
        {
            buyRate:22.2//推荐购买比例，百分之
            stockId:"xxx",
            stockName:"xxx",
            currentPrice:9.1,
            trend:30.1,//涨跌幅，百分之，有正负
            turnoverRate:11.1,//累计换手率，百分之
            marketProfitability:11.1,//个股市盈率，百分之
            todayVolume:120,//当日成交量，整数
        },
        {},
        ...
    ]
  }
 */
export const getRecommendByProfit = () => {
  return request(`${version}/strategy/recommend/profit`);
};

export const getRecommendByRisk = () => {
  return request(`${version}/strategy/recommend/risk`);
};

/**
 * 按页数获得股票的信息
 * @param params
 * {
    page:2
}
 * @returns
 * [
            {stockId:"xxx",
            stockName:"xxx",
            currentPrice:9.1,
            trend:30.1,//涨跌幅，百分之，有正负
            turnoverRate:11.1,//累计换手率，百分之
            marketProfitability:11.1,//个股市盈率，百分之
            todayVolume:120,//当日成交量，整数
            },
            {},
            ...
 ]
 */
export const searchStocks = ({ pattern = "", page = 1 }) => {
  return request(`${version}/stocks/${pattern}/${page}`);
};

/**
 * 获得过去30天的股票走势
 * @param stockId
 * @returns {Object}
 */
export const stockTrend = (stockId = null) => {
  return request(`${version}/stock/${stockId}`);
};

/**
 * 添加自选股
 * @param params
 * {
    recordName:"稳赚不赔"，//用户自定义自选股的名字（id后端自定，和id不同，需要唯一吗？？）
    stocks:[
        {
            stockId:"xxx",
            buyRate:11.1,//百分之
        }，
        {},
        ...
    ],
}
 * @returns
 * {
    recordId:"xxx",//后端生产的自选股的id
    addTime:"2018-08-27 13:39"//添加时间
}
 */
export const addRecord = ({ recordName = "未命名", stocks = [] }) => {
  return request(`${version}/strategy/record`, {
    method: "POST",
    body: {
      recordName,
      stocks
    }
  });
};

/**
 * 删除一组自选股
 * @param recordId
 */
export const deleteRecord = (recordId = null) => {
  return request(`${version}/strategy/record/${recordId}`, {
    method: "DELETE"
  });
};

/**
 * 查看所有记录简要信息
 * @returns
 * [
 {
     recordId:"xxx",
     recordName:"xxx",
     recordTime:"2018-08-27 12:02"
 },
 {},
 ...
 ]
 */
export const allRecords = () => {
  return request(`${version}/strategy/records`);
};

/**
 * 查看一组自选股的详细详细
 * @returns
 * {
    recordName:"xxx",
    recordTime:"2018-08-27 12:02"
    todayBenefit:5.6,//百分之
    yearBenefit:5.7,//百分之
    risk:3.3,//百分之
    stock:[
        {
            buyRate:22.2//推荐购买比例，百分之
            stockId:"xxx",
            stockName:"xxx",
            currentPrice:9.1,
            trend:30.1,//涨跌幅，百分之，有正负
            turnoverRate:11.1,//累计换手率，百分之
            marketProfitability:11.1,//个股市盈率，百分之
            todayVolume:120,//当日成交量，整数
        },
        {},
        ...
    ]
}
 * @param recordId
 */
export const recordDetail = (recordId = null) => {
  return request(`${version}/strategy/record/${recordId}`, {
    method: "GET"
  });
};

/**
 * 获得自选股的回测，返回值直接交给组件显示
 * @param recordId
 * @returns {Object}
 */
export const loopBack = (recordId = null) => {
  return request(`${version}/strategy/loopback/${recordId}`, {
    method: "GET"
  });
};
