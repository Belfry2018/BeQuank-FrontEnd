import { version } from "./apiOverview";
import request from "../utils/request";

/**
 * 微博关键词云
 * @return {Object}
 * @throws 418
 */
export const getCloudKeywords = () => {
  return request(`${version}/keywords`);
};

/**
 * 微博热点
 * @return {Object}
 */
export const getHotspot = (page = 1) => {
  return request(`${version}/hotspot`, {
    method: "POST",
    body: {
      page
    }
  });
};

export const getSentiment = () => {
  return request(`${version}/sentiment`);
};

export const getSentimentTrend = (word = "微博") => {
  return request(`${version}/sentiment/trend`, {
    method: "POST",
    body: { word }
  });
};

export const getGovernmentPassage = (page = 1) => {
  return request(`${version}/gvn/passage/{page}`, {
    method: "GET"
  });
};

/**
 * 政府热点词，返回值可以直接传给GovernmentWords组件显示
 * @returns {Object}
 */
export const getGovernmentWords = () => {
  return request(`${version}/gvn/words`, {
    method: "GET"
  });
};

/**
 * 获得一个词的好/中/坏的评论次数
 * @param word
 * @returns {Object}
 * {
    word:"阿里",
    positive:199,
    neutral:188,
    negative:26
    }
 */
export const getSentimentRatio = (word = "微博") => {
    return request(`${version}/sentiment/ratio/${word}`, {
        method: "GET"
    });
}

/**
 * 获得一个词的好中坏出现次数走势
 * @param word
 * @returns {Object}
 * 返回值可以直接给组件显示
 */
export const getSentimentRatioTrend= (word = "微博") => {
    return request(`${version}/sentiment/ratioTrend/${word}`, {
        method: "GET"
    });
}