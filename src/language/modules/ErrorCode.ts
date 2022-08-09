/*
 * @Description: Multi Language Config for Error Code
 * @Version: 1.0
 * @Author: Mirage
 * @Date: 2022-08-09 16:08:42
 * @LastEditors: Mirage
 * @LastEditTime: 2022-08-09 17:57:15
 */

/**
 * HTTP Status Code
 */
const textHTTPBase = {
  zh: {
    400: '请求错误,请检查数据是否合法',
    401: '登录信息已失效,请重新登录',
    403: '您没有该功能的权限',
    404: '该信息不存在',
    500: '服务器错误,请检查或重试',
    502: '网关错误,请检查服务是否已启动',
  },
  en: {
    400: 'Bad Request',
    401: 'Unauthorized',
    403: 'Forbidden',
    404: 'Not Found',
    500: 'Internal Server Error',
    502: 'Bad Gateway',
  },
  jp: {
    400: '请求错误,请检查数据是否合法',
    401: '登录信息已失效,请重新登录',
    403: '您没有该功能的权限',
    404: '该信息不存在',
    500: '服务器错误,请检查或重试',
    502: '网关错误,请检查服务是否已启动',
  },
};

/**
 * String Response Text
 * @example net::ERR_INTERNET_DISCONNECTED
 */
const textString = {
  zh: {
    timeout: '超时',
    ECONNABORTED: '请求被取消',
    DISCONNECTED: '网络未连接',
  },
  en: {
    timeout: 'Request Timeout',
    ECONNABORTED: 'Request Aborted',
    DISCONNECTED: 'Internet Disconnected',
  },
  jp: {
    timeout: 'タイムアウト',
    ECONNABORTED: 'リクエストキャンセル',
    DISCONNECTED: 'ネットワークを切断されました',
  },
};
