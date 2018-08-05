import { version } from "./apiOverview";
import request from "../utils/request";


/**
 *
 * @param email
 * @return {Object}
 * @throws 418
 */
export const sendIdentifyCode = email => {
  return request(`${version}/identify`, {
    method: 'POST',
    body: { email }
  });
};
