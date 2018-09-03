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
export const pushTutorial = params => {
    return request(`${version}/tutorial`, {
        method: "POST",
        body: params
    });
};

export const getRecommend = params => {

}