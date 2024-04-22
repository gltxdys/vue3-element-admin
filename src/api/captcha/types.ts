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

export interface CaptchaTypeVo {
  typeId?: number;
  typeName?: string;
  details?: string;
  price?: number;
  exampleUrl?: string[];
}

export interface CaptchaType {
  typeId?: number;
  typeName?: string;
  details?: string;
  price?: number;
  exampleUrl?: string[];
  repParam?: ParamVo[];
  reqParam?: ParamVo[];
}

export interface ParamVo {
  name?: string;
  type?: string;
  value?: string;
  required?: boolean;
}
