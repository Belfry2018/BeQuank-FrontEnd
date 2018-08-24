import { version } from "./apiOverview";
import request from "../utils/request";

/**
 * 发布教程
 * @param params
 * @returns {Object}
 * @example
 * postTutorial({
 *  authorNickname:"jack",
 *  authorId:"abc",
 *  title:"how to make money",
 *  cover:"cover",
 *  abstract:"blabla",
 *  keyWords:{"money", "fortune"},
 *  content:"money is very important",
 *  time:"2018-08-13"
 * })
 * @throws
 */
export const postTutorial = params => {
    return request(`${version}/tutorial`, {
        method: "POST",
        body: params
    });
};

/**
 * 根据条件筛选教程
 * @param params
 * @returns {Object}
 * @example
 * findTutorials({
 *  authorId:"jack",
 *  publishTime:"2018-08-13",
 *  cover:"cover",
 *  abstract:"blabla",
 *  keyWords:{"money", "fortune"}
 * })
 */
export const findTutorials = params =>{
    return request(`${version}/tutorials`, {
        method: "POST",
        body: params
    });
}

/**
 * 查看具体教程
 * @param id
 * @returns {Object}
 */
export const showTutorial = id => {
    return request(`${version}/tutorial`, {
        method: "GET",
        body: { id }
    });
}

/**
 * 发表评论
 * @param params
 * @returns {Object}
 * @example
 * makeComment({
 *  tutorialId:"tutorialA",
 *  content:"lalalala",
 *  writerNickname:"tom",
 *  writerId:"id1",
 *  time:"2018-08-13"
 * })
 */
export const makeComment = params => {
    return request(`${version}/comment`, {
        method: "POST",
        body: params
    });
}

/**
 * 回复评论
 * @param params
 * @returns {Object}
 * @example
 * replyComment({
 *  commentId:"comment2",
 *  content:"lalalala",
 *  writerNickname:"tom",
 *  writerId:"id1",
 *  time:"2018-08-13"
 * })
 */
export const replyComment = params => {
    return request(`${version}/reply`, {
        method: "POST",
        body: params
    });
}

/**
 * 点赞教程（可取消）
 * @param params
 * @returns {Object}
 * @example
 * likeTutorial({
 *  tutorialId:"tutorialA",
 *  likerId:"nancy"
 * })
 */
export const likeTutorial = params => {
    return request(`${version}/like/tutorial`, {
        method: "POST",
        body: params
    });
}

/**
 * 点赞评论（可取消）
 * @param params
 * @returns {Object}
 * @example
 * likeTutorial({
 *  commentId:"commentA",
 *  likerId:"nancy"
 * })
 */
export const likeComment = params => {
    return request(`${version}/like/comment`, {
        method: "POST",
        body: params
    });
}