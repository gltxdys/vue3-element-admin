import {ParamVo} from "@/api/captcha/types";

export const RepData: ParamVo[] = [
  {
    name: "recordId",
    value: "识别请求ID",
    type: "Long",
  },
  {
    name: "result",
    value: "例：识别结果为[(x1,y1),(x2,y2)]返回x1_y1,x2_y2",
    type: "String",
  },
  {
    name: "time",
    value: "响应时间(单位ms)",
    type: "Integer",
  },
  {
    name: "code",
    value: "响应结果代码",
    type: "Integer",
  },
  {
    name: "typeId",
    value: "识别类型代码",
    type: "Integer",
  },
];

export const CodeData: ParamVo[] = [
  {
    name: "10000",
    value: "识别成功",
    type: "bb",
  },
  {
    name: "10001",
    value: "参数错误",
    type: "bb",
  },
  {
    name: "10002",
    value: "余额不足",
    type: "bb",
  },
  {
    name: "10003",
    value: "无此访问权限",
    type: "bb",
  },
  {
    name: "10004",
    value: "无此验证类型",
    type: "bb",
  },
  {
    name: "10005",
    value: "服务繁忙",
    type: "bb",
  },
  {
    name: "10006",
    value: "无此访问权限",
    type: "bb",
  },
  {
    name: "10007",
    value: "网络错误，请稍后重试",
    type: "bb",
  },
  {
    name: "10008",
    value: "结果准备中，请稍后再试",
    type: "bb",
  },
  {
    name: "10009",
    value: "请求结束",
    type: "bb",
  },
];
