import { version } from "./apiOverview";
import request from "../utils/request";

/**
 * 设置用户个人信息
 * @param params
 * @return {Object}
 * @example
 * setUserProfile({
    nickname:"xxx",
    id:"xxx",
    avatar:"xxxxxxxx",
    phone:"123456"
    email:"123@xxx.com"
    gender:"X"//男、女、保密
    birthday:"1998-08-10"
    moneyLevel:"x"//"千"、"万"、"十万"、"百万"
    bio:"我是宇宙第一帅帅帅" // 简介
    level:"xxx"//通过做问卷得出的结果，"进取型"、"中度进取型"、"平稳型"、"中度保守型"、"保守型"、"不建议投资"
    registerTime:"2011-11-01",
    expectedProfit:11.1,
    riskAbility:11.1,
})
 * @throws 418
 */
export const setUserProfile = ({
  nickname = "",
  avatar = "",
  phone = "",
  gender = "",
  birthday = "",
  moneyLevel = "",
  bio = "",
  registerTime = "",
  expectedProfit = 1
}) => {
  return request(`${version}/user/profile`, {
    method: "POST",
    body: {
      nickname,
      avatar,
      phone,
      gender,
      birthday,
      moneyLevel,
      bio,
      registerTime,
      expectedProfit
    }
  });
};

/**
 * 获取用户个人信息
 * @return {Object}
 */
export const getUserProfile = () => {
  return request(`${version}/user/profile`);
};

/**
 * 获取用户消息
 * @returns {Object}
 */
export const getNotification = () => {
  return request(`${version}/user/message`);
};

export const readNotification = (responseId = null) => {
  return request(`${version}/user/message`, {
    method: "POST",
    body: {
      responseId
    }
  });
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
export const changePassword = ({ oriPassword = "", newPassword = "" }) => {
  return request(`${version}/user/password`, {
    method: "POST",
    body: { oriPassword, newPassword }
  });
};

/**
 * 签到
 * @returns {Object}
 */
export const dailySignIn = () => {
    return request(`${version}/user/dailysign`, {
        method: "POST",
        body: {}
    });
}

/**
 * 获得用户权限
 * @returns {Object}
 */
export const getUserAuth = () => {
    return request(`${version}/user/auth`);
}