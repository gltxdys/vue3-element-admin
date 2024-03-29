/**
 * 角色分页对象
 */
export interface PreCreateVo {
  /**
   * 金额
   */
  amount?: string;

  /**
   * 支付id
   */
  tradeNo?: string;
  /**
   * 二维码base64
   */
  qrCode?: string;
  /**
   * 订单id
   */
  orderId?: string;
}

export interface TradeVo {
  tradeNo?: number;
  userId?: number;
  money?: number;
  createTime?: string;
  score?: string;
  payTime?: string;
  payType?: string;
  status?: string;
}

export type TradePageResult = PageResult<TradeVo[]>;

export interface TradeQuery extends PageQuery {
  userId?: number;
}
