/**
 * 修改密码请求参数
 */
export interface passwordForm {
  emailKey: string;
  emailValue: string;
  captchaKey: string;
  captchaValue: string;
  password: string;
  verifyPassword: string;
}

/**
 * 登录响应
 */
export interface changePassResult {
  /**
   * 访问token
   */
  accessToken?: string;
  /**
   * 过期时间(单位：毫秒)
   */
  expires?: number;
  /**
   * 刷新token
   */
  refreshToken?: string;
  /**
   * token 类型
   */
  tokenType?: string;
}

/**
 * 验证码响应
 */
export interface EmailResult {
  /**
   * 验证码缓存key
   */
  emailKey: string;
}
