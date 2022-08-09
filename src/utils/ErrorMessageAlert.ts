/*
 * @Description: AJAX Response Error Alert
 * @Version: 1.0
 * @Author: Mirage
 * @Date: 2022-08-09 14:49:41
 * @LastEditors: Mirage
 * @LastEditTime: 2022-08-09 17:22:29
 */
import responseAlert from './ResponseAlert';

/**
 * HTTP错误码返回文字
 * @description 用于存储HTTP错误码或超时等方式返回文字
 */
const arrayResponseMessageForStatus = {
  400: '请求错误,请检查数据是否合法',
  401: '登录信息已失效,请重新登录',
  403: '您没有该功能的权限',
  404: '该信息不存在',
  500: '服务器错误,请检查或重试',
  502: '网关错误,请检查服务是否已启动',
};

/**
 * @function HTTP错误码返回方法
 * @description 该方法不返回HTTP 409
 * @param {Number} code 接口返回错误码
 * @returns {Function} 错误码弹出窗
 */
const ErrorMessageResponseReject = (code: number) => {
  return responseAlert(arrayResponseMessageForStatus[code]);
};

/**
 * @function 自定义错误码返回方法
 * @param {Number} code 接口返回错误码
 * @returns {Function} 错误码弹出窗
 */
const ErrorMessageResponseCustom = (code) => {
  return responseAlert(arrayResponseMessageForCustom[code]);
};

/**
 * @function HTTP错误码409返回方法
 * @param {Number} code 接口返回错误码
 * @returns {Function} 错误码弹出窗
 */
const ErrorMessageResponseConflict = (error) => {
  return responseAlert(error.msg);
};

/**
 * @exports ErrorResponseMessage 数据交互错误码返回请求
 * @param {Object<AxiosResponse>} error AXIOS抛出错误对象
 * @returns {Function} 错误码返回方法函数
 */
const ErrorResponseMessage = (error) => {
  console.log('[数据交互错误码] ', error);
  // axios返回超时
  if (
    error.code === 'ECONNABORTED' &&
    error.message.indexOf('timeout') !== -1
  ) {
    return responseAlert('获取超时');
  }
  // 默认HTTP错误码返回(不含HTTP 409)
  if (error.status !== 200 && error.status !== 409) {
    return ErrorMessageResponseReject(error.status);
  }
  // HTTP 409返回
  if (error.status === 409) {
    return ErrorMessageResponseConflict(error.data);
  }
  // HTTP 200但内部返回自定义错误码
  return ErrorMessageResponseCustom(error.data.status);
};

export { ErrorResponseMessage };
