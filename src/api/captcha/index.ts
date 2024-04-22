import request from "@/utils/request";
import {AxiosPromise} from "axios";
import {CaptchaType, CaptchaTypeVo, IdentifyRecordVo, TradeQuery} from "./types";

/*
 * 获取识别订单
 */
export function getIdentifyRecordList(
  tradeQuery?: TradeQuery
): AxiosPromise<PageResult<IdentifyRecordVo[]>> {
  return request({
    url: "/api/v1/record/user",
    method: "post",
    data: tradeQuery,
  });
}

export function captchaTypeApi(): AxiosPromise<CaptchaTypeVo[]> {
  return request({
    url: "/api/v1/captcha/all/type",
    method: "get",
  });
}

export function captchaTypeByIdApi(id: number): AxiosPromise<CaptchaType> {
  return request({
    url: "/api/v1/captcha/type?id=" + id,
    method: "get",
  });
}

export function captchaDetailApi(): AxiosPromise<CaptchaType[]> {
  return request({
    url: "/api/v1/captcha/all/detail",
    method: "get",
  });
}

export function addCaptcha(captcha: CaptchaType): AxiosPromise<string> {
  return request({
    url: "/api/v1/captcha/add/type",
    method: "post",
    data: captcha,
  });
}

export function updateCaptchaApi(captcha: CaptchaType): AxiosPromise<string> {
  return request({
    url: "/api/v1/captcha/update/type",
    method: "post",
    data: captcha,
  });
}

export function delCaptchaApi(typeIds: number[]): AxiosPromise<string> {
  return request({
    url: "/api/v1/captcha/del/type",
    method: "post",
    data: typeIds,
  });
}
