import request from "@/utils/request";
import {AxiosPromise} from "axios";
import {PreCreateVo, TradePageResult, TradeQuery} from "./types";

/**
 * 获取QrCode
 *
 * @param money
 */
export function getPreCreateResult(money?: number): AxiosPromise<PreCreateVo> {
  return request({
    url: "/api/v1/pay/" + money,
    method: "get",
  });
}

export function getTradeResult(tradeNo?: number): AxiosPromise<boolean> {
  return request({
    url: "/api/v1/pay/getTradeResult?tradeNo=" + tradeNo,
    method: "get",
  });
}

export function getTradeList(
  tradeQuery?: TradeQuery
): AxiosPromise<TradePageResult> {
  return request({
    url: "/api/v1/trade/user",
    method: "post",
    data: tradeQuery,
  });
}
