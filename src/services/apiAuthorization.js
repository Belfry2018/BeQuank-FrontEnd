import { version } from "./apiOverview";
import request from "../utils/request";

/**
 * 发送验证码
 * @param email
 * @return {Object}
 * @throws 418
 */
export const sendIdentifyCode = email => {
  return request(`${version}/identify`, {
    method: "POST",
    body: { email }
  });
};

/**
 *
 * @param params
 * @return {Object}
 * @example
 * register({
 *  email:"5413415321@xxxx.xxx",
 *  nickname:"XXXXX",
 *  password:"XXXXXX",
 *  identifyCode:"identifyCode"
 * })
 * @throws 418验证码错 419邮箱已使用
 */
export const register = params => {
  return request(`${version}/register`, {
    method: "POST",
    body: params
  });
};

/**
 *
 * @param params
 * @return {Object}
 * @example
 * login({
 *  username:"5413415321@xxxx.xxx",
 *  password:"XXXXXX",
 * })
 * @throws 418验证码错 419邮箱已使用
 */
export const login = params => {
  return request(`${version}/login`, {
    method: "POST",
    body: params
  });
};
