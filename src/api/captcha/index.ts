import request from "@/utils/request";
import {AxiosPromise} from "axios";
import {IdentifyRecordVo, TradeQuery} from "./types";

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
