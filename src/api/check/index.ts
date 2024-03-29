import request from "@/utils/request";
import {AxiosPromise} from "axios";
import {identifyVo} from "./types";

/**
 * 识别验证码图片
 *
 * @param url：上传的验证码图片
 */
export function checkGeetest3ByUrl(url: string): AxiosPromise<identifyVo> {
  const param = {
    url: url,
  };
  return request({
    url: "/api/v1/captcha/check",
    method: "get",
    params: param,
  });
}
