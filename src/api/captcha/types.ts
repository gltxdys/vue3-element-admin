export interface IdentifyRecordVo {
  id?: number;
  userId?: number;
  typeId?: number;
  createTime?: string;
  score?: number;
  picId?: number;
  result?: string;
  status?: string;
}

export interface TradeQuery extends PageQuery {
  userId?: number;
}
