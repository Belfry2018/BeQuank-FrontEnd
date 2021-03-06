import { version } from "./apiOverview";
import request from "../utils/request";

/**
 * 发布教程
 * @param params
 * @return {Object}
 * @example
 * pushTutorial({
 *  authorNickname:"jack",
 *  authorId:"abc",
 *  title:"how to make money",
 *  cover:"cover",
 *  abstract:"blabla",
 *  keyWords:{"money", "fortune"},
 *  content:"money is very important",
 *  time:"2018-08-13"
 * })
 * @throws 418
 */
export const pushTutorial = (params = {}) => {
  return request(`${version}/tutorial`, {
    method: "POST",
    body: params
  });
};

/**
 * 根据条件筛选教程
 * @param params
 * @return {Object}
 * @example
 * getTutorials({
 *  authorId:"jack",
 *  publishTime:"2018-08-13",
 *  cover:"cover",
 *  abstract:"blabla",
 *  keyWords:{"money", "fortune"},
 *  tutorialType:"BASIC"
 * })
 */
export const getTutorials = ({ keywords = "", tutorialType = "" }) => {
  return request(`${version}/tutorials`, {
    method: "POST",
    body: {
      keywords,
      tutorialType
    }
  });
};

/**
 * 修改密码
 * @param tutorialId
 * @return {Object}
 * @example
 * getTheTutorial(id)
 * @throws 418
 */
export const getTheTutorial = tutorialId => {
  return request(`${version}/tutorial?id=${tutorialId}`);
};

export const getRecommendationTutorials = () => {
  return request(`${version}/tutorials/recommendation`);
};

/**
 * 发表评论
 * @param params
 * @return {Object}
 * @example
 * postComment({
 *  tutorialId:"tutorialA",
 *  content:"lalalala",
 *  time:"2018-08-13"
 * })
 */
export const postComment = ({ tutorialId = "", content = "", time = "" }) => {
  return request(`${version}/comment`, {
    method: "POST",
    body: {
      tutorialId,
      content,
      time
    }
  });
};

/**
 * 回复评论
 * @param params
 * @return {Object}
 * @example
 * replyComment({
 *  commentId:"comment2",
 *  content:"lalalala",
 *  time:"2018-08-13"
 * })
 */
export const replyComment = ({ commentId = "", content = "", time = "" }) => {
  return request(`${version}/reply`, {
    method: "POST",
    body: {
      commentId,
      content,
      time
    }
  });
};

/**
 * 点赞教程（可取消）
 * @return {Object}
 * @param tutorialId tutorial编号
 */
export const likeTutorial = (tutorialId = "") => {
  return request(`${version}/like/tutorial`, {
    method: "POST",
    body: { tutorialId }
  });
};

/**
 * 点赞评论（可取消）
 * @return {Object}
 * @param commentId comment编号
 */
export const likeComment = (commentId = "") => {
  return request(`${version}/like/comment`, {
    method: "POST",
    body: { commentId }
  });
};
