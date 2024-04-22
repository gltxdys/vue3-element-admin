import request from "@/utils/request";
import {AxiosPromise} from "axios";
import {EmailResult} from "./types";

/**
 * 登录API
 *
 * @param data {LoginData}
 * @returns
 */
export function updatePassApi(data): AxiosPromise<string> {
  const formData = new FormData();
  formData.append("emailkey", data.emailKey);
  formData.append("emailValue", data.emailValue);
  formData.append("password", data.password);
  formData.append("captchaKey", data.captchaKey || "");
  formData.append("captchaCode", data.captchaValue || "");
  return request({
    url: "/api/v1/users/update/password",
    method: "post",
    data: formData,
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
}

/**
 * 获取邮箱验证码
 */
export function getEmailApi(): AxiosPromise<EmailResult> {
  return request({
    url: "/api/v1/auth/email",
    method: "get",
  });
}

/*
  获取新邮箱验证码
 */
export function getNewEmailApi(email: string): AxiosPromise<EmailResult> {
  return request({
    url: "/api/v1/auth/new/email?email=" + email,
    method: "get",
  });
}

/**
 * 修改邮箱api
 * @returns
 */
export function updateEmailApi(data): AxiosPromise<string> {
  const formData = new FormData();
  formData.append("emailkey", data.emailKey);
  formData.append("emailValue", data.verifyCode);
  return request({
    url: "/api/v1/users/update/email",
    method: "post",
    data: formData,
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
}

