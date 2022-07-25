/*
 * @Author: Miya
 * @Date: 2022-01-03 23:27:50
 * @LastEditTime: 2022-07-25 10:46:01
 * @LastEditors: Mirage
 * @Description: AJAX Methods
 * @FilePath: \vue3-element-template\src\utils\request.ts
 */
import Request from 'kagura-axios-request';
import type { CustomRequestConfig } from 'kagura-axios-request';
import Qs from 'qs';

const request = new Request({
  baseURL: '',
  timeout: 6 * 1000 * 60,
  headers: { 'Content-Type': 'application/json' },
  interceptors: {
    requestInterceptors: (config) => {
      return config;
    },
    requestInterceptorsCatch: (error) => {
      return error;
    },
    responseInterceptors: (result) => {
      return result;
    },
    responseInterceptorsCatch: (error) => {
      return error;
    },
  },
});

interface ExtendsCustomRequestConfig<T> extends CustomRequestConfig {
  data?: T;
  params?: T;
}

interface ResponseBody<T> {
  code: number;
  message: string;
  data: T;
}

const RequestExample = <K, T>(config: ExtendsCustomRequestConfig<K>) => {
  const { method = 'GET' } = config;
  if (method === 'GET' || method === 'get') {
    config.data = config.params;
  }
  return request.request<ResponseBody<T>>(config);
};

export default RequestExample;
