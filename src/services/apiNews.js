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
export const getHotspot = () => {
  return request(`${version}/hotspot`, {
    method: "POST"
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
