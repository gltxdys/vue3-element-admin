import request from "@/utils/request";
import {AxiosPromise} from "axios";
import {identifyVo} from "./types";

/**
 * 识别验证码图片
 *
 * @param url
 * @param typeId
 */
export function checkGeetest3ByUrl(
  url: string,
  typeId: number
): AxiosPromise<identifyVo> {
  const param = {
    url: url,
    typeId: typeId,
  };
  return request({
    url: "/api/v1/captcha/check",
    method: "get",
    params: param,
  });
}
