/*
 * @Author: Miya
 * @Date: 2022-01-03 23:27:50
 * @LastEditTime: 2022-09-17 02:17:38
 * @LastEditors: Miya
 * @Description: AJAX Methods
 * @FilePath: \Vue3-Element-Template\src\utils\Request.ts
 */
import Request from '@miramiya/request';
import type { CustomRequestConfig } from '@miramiya/request';

const request = new Request({
  baseURL: '',
  timeout: 6 * 1000,
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
