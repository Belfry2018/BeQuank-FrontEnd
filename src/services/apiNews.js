import { version } from "./apiOverview";
import request from "../utils/request";

export const getWordGraph = params => {
    return request(`${version}/tutorial`, {
        method: "POST",
        body: params
    });
};