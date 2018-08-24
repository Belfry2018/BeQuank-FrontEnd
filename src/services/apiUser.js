import { version } from "./apiOverview";
import request from "../utils/request";

/**
 * 设置用户个人信息
 * @param params
 * @return {Object}
 * @example
 * setUserProfile({
 *  nickname:"xxx",
 *  avatar:"xxx",
 *  bio:"我是宇宙第一帅帅帅" // 简介
 * })
 * @throws 418
 */
export const setUserProfile = params => {
  return request(`${version}/user/profile`, {
    method: "POST",
    body: params
  });
};

/**
 * 获取用户个人信息
 * @param userId 用户id
 * @return {Object}
 */
export const getUserProfile = userId => {
  return request(`${version}/user/profile?userId=${userId}`)
};


/**
 * 修改密码
 * @param params
 * @return {Object}
 * @example
 * changePassword({
 *  oriPassword:"xxx",
 *  newPassword:"xxx",
 * })
 * @throws 418
 */
export const changePassword = params => {
  return request(`${version}/user/password`,{
    method:"POST",
    body:params
  })
};