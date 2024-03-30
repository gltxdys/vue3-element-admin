interface StringArray {
  [index: number]: string;
}

/**
 * 设备枚举
 */
export const payStatus: StringArray = ["未支付", "支付失败", "支付成功"];
export const tagInfo: StringArray = ["primary", "danger", "success"];
export const payWay: StringArray = ["支付宝", "微信", "银联"];
