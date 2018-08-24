<<<<<<< HEAD
import {version} from "./apiOverview";
=======
import { version } from "./apiOverview";
>>>>>>> 71179c8c9b7e6582356474132f59b18978411984
import request from "../utils/request";

/**
 * 发布教程
 * @param params
<<<<<<< HEAD
 * @return {Object}
 * @example
 * pushTutorial({
=======
 * @returns {Object}
 * @example
 * postTutorial({
>>>>>>> 71179c8c9b7e6582356474132f59b18978411984
 *  authorNickname:"jack",
 *  authorId:"abc",
 *  title:"how to make money",
 *  cover:"cover",
 *  abstract:"blabla",
 *  keyWords:{"money", "fortune"},
 *  content:"money is very important",
 *  time:"2018-08-13"
 * })
<<<<<<< HEAD
 * @throws 418
 */
export const pushTutorial = params => {
  return request(`${version}/tutorial`, {
    method: "POST",
    body: params
  });
=======
 * @throws
 */
export const postTutorial = params => {
    return request(`${version}/tutorial`, {
        method: "POST",
        body: params
    });
>>>>>>> 71179c8c9b7e6582356474132f59b18978411984
};

/**
 * 根据条件筛选教程
 * @param params
<<<<<<< HEAD
 * @return {Object}
 * @example
 * getTutorials({
=======
 * @returns {Object}
 * @example
 * findTutorials({
>>>>>>> 71179c8c9b7e6582356474132f59b18978411984
 *  authorId:"jack",
 *  publishTime:"2018-08-13",
 *  cover:"cover",
 *  abstract:"blabla",
<<<<<<< HEAD
 *  keyWords:{"money", "fortune"},
 *  tutorialType:"BASIC"
 * })
 */
export const getTutorials = params => {
  return request(`${version}/tutorials`, {
    method: "POST",
    body: params
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
  return request(`${version}/tutorial?id=${tutorialId}`)
};
=======
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
>>>>>>> 71179c8c9b7e6582356474132f59b18978411984

/**
 * 发表评论
 * @param params
<<<<<<< HEAD
 * @return {Object}
 * @example
 * postComment({
=======
 * @returns {Object}
 * @example
 * makeComment({
>>>>>>> 71179c8c9b7e6582356474132f59b18978411984
 *  tutorialId:"tutorialA",
 *  content:"lalalala",
 *  writerNickname:"tom",
 *  writerId:"id1",
 *  time:"2018-08-13"
 * })
 */
<<<<<<< HEAD
export const postComment = params => {
  return request(`${version}/tutorials`, {
    method: "POST",
    body: params
  });
};

=======
export const makeComment = params => {
    return request(`${version}/comment`, {
        method: "POST",
        body: params
    });
}
>>>>>>> 71179c8c9b7e6582356474132f59b18978411984

/**
 * 回复评论
 * @param params
<<<<<<< HEAD
 * @return {Object}
=======
 * @returns {Object}
>>>>>>> 71179c8c9b7e6582356474132f59b18978411984
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
<<<<<<< HEAD
  return request(`${version}/reply`, {
    method: "POST",
    body: params
  });
};
=======
    return request(`${version}/reply`, {
        method: "POST",
        body: params
    });
}
>>>>>>> 71179c8c9b7e6582356474132f59b18978411984

/**
 * 点赞教程（可取消）
 * @param params
<<<<<<< HEAD
 * @return {Object}
 * @example
 * likeComment({
=======
 * @returns {Object}
 * @example
 * likeTutorial({
>>>>>>> 71179c8c9b7e6582356474132f59b18978411984
 *  tutorialId:"tutorialA",
 *  likerId:"nancy"
 * })
 */
<<<<<<< HEAD
export const likeComment = params =>{
  return request(`${version}/like/tutorial`,{
    method:"POST",
    body:params
  })
};

=======
export const likeTutorial = params => {
    return request(`${version}/like/tutorial`, {
        method: "POST",
        body: params
    });
}
>>>>>>> 71179c8c9b7e6582356474132f59b18978411984

/**
 * 点赞评论（可取消）
 * @param params
<<<<<<< HEAD
 * @return {Object}
 * likeComment({
 *  commentId:"tutorialA",
 *  likerId:"nancy"
 * })
 */
export const likeReply = params =>{
  return request(`${version}/like/comment`,{
    method:"POST",
    body:params
  })
};
=======
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
>>>>>>> 71179c8c9b7e6582356474132f59b18978411984
